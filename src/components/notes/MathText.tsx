import React, { useState } from 'react';
import { Platform, StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

/**
 * Tiny math markup used in the course content:
 *   I_CB or I_{charge max}   subscript
 *   x^{2}                    superscript
 *   \frac{num}{den}          fraction with a horizontal bar
 *   \sqrt{...}               square root with a bar over its content
 * Everything else is plain text.
 */
type MathNode =
  | { k: 'text'; s: string }
  | { k: 'sub'; c: MathNode[] }
  | { k: 'sup'; c: MathNode[] }
  | { k: 'frac'; n: MathNode[]; d: MathNode[] }
  | { k: 'sqrt'; c: MathNode[] };

// letters (Latin, accented, Greek) and digits
const SUB_CHAR = /[A-Za-z0-9À-ÖØ-öø-ɏͰ-Ͽ]/;

function readGroup(s: string, i: number): [string, number] {
  // s[i] === '{' ; returns [content, index after the closing brace]
  let depth = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === '{') depth++;
    else if (s[j] === '}') {
      depth--;
      if (depth === 0) return [s.slice(i + 1, j), j + 1];
    }
  }
  return [s.slice(i + 1), s.length];
}

export function parseMath(s: string): MathNode[] {
  const out: MathNode[] = [];
  let buf = '';
  const flush = () => {
    if (buf) out.push({ k: 'text', s: buf });
    buf = '';
  };
  let i = 0;
  while (i < s.length) {
    if (s.startsWith('\\frac{', i)) {
      const [n, j] = readGroup(s, i + 5);
      if (s[j] === '{') {
        const [d, k] = readGroup(s, j);
        flush();
        out.push({ k: 'frac', n: parseMath(n), d: parseMath(d) });
        i = k;
        continue;
      }
    }
    if (s.startsWith('\\sqrt{', i)) {
      const [c, j] = readGroup(s, i + 5);
      flush();
      out.push({ k: 'sqrt', c: parseMath(c) });
      i = j;
      continue;
    }
    const ch = s[i];
    if ((ch === '_' || ch === '^') && i > 0 && s[i - 1] !== ' ') {
      if (s[i + 1] === '{') {
        const [c, j] = readGroup(s, i + 1);
        flush();
        out.push({ k: ch === '_' ? 'sub' : 'sup', c: parseMath(c) });
        i = j;
        continue;
      }
      if (ch === '_' && i + 1 < s.length && SUB_CHAR.test(s[i + 1])) {
        let j = i + 1;
        while (j < s.length && (SUB_CHAR.test(s[j]) || (s[j] === '-' && j + 1 < s.length && SUB_CHAR.test(s[j + 1])))) j++;
        flush();
        out.push({ k: 'sub', c: [{ k: 'text', s: s.slice(i + 1, j) }] });
        i = j;
        continue;
      }
    }
    buf += ch;
    i++;
  }
  flush();
  return out;
}

/** True when the string uses any of the markup above. */
export function hasMath(s: string) {
  return /\\frac\{|\\sqrt\{|[^\s]\^\{|[^\s]_[A-Za-z0-9{À-ɏͰ-Ͽ]/.test(s);
}

// ---------------------------------------------------------------------------
// Inline rendering (inside a paragraph): subscripts and superscripts only.

const webShift = (em: number): TextStyle =>
  Platform.OS === 'web' ? ({ position: 'relative', top: `${em}em` } as unknown as TextStyle) : {};

function inlineNodes(nodes: MathNode[], keyPrefix: string, size: number): React.ReactNode[] {
  return nodes.map((n, i) => {
    const key = `${keyPrefix}${i}`;
    switch (n.k) {
      case 'text':
        return n.s;
      case 'sub':
        return (
          <Text key={key} style={[{ fontSize: size * 0.72 }, webShift(0.28)]}>
            {inlineNodes(n.c, key, size * 0.72)}
          </Text>
        );
      case 'sup':
        return (
          <Text key={key} style={[{ fontSize: size * 0.72 }, webShift(-0.4)]}>
            {inlineNodes(n.c, key, size * 0.72)}
          </Text>
        );
      case 'frac':
        return (
          <React.Fragment key={key}>
            ({inlineNodes(n.n, key + 'n', size)}) / ({inlineNodes(n.d, key + 'd', size)})
          </React.Fragment>
        );
      case 'sqrt':
        return (
          <React.Fragment key={key}>
            √({inlineNodes(n.c, key, size)})
          </React.Fragment>
        );
    }
  });
}

/** Paragraph text that may contain subscripts (I_CB) or superscripts. */
export function RichText({ text, style }: { text: string; style?: StyleProp<TextStyle> }) {
  if (!hasMath(text)) return <Text style={style}>{text}</Text>;
  const size = StyleSheet.flatten(style)?.fontSize ?? 14;
  return <Text style={style}>{inlineNodes(parseMath(text), 'r', size)}</Text>;
}

// ---------------------------------------------------------------------------
// Display rendering (formula blocks): real fractions and roots.

type Ctx = { size: number; color: string; weight: TextStyle['fontWeight'] };

function txt(ctx: Ctx, s: string, key: string, extra?: TextStyle) {
  return (
    <Text key={key} style={[{ fontSize: ctx.size, color: ctx.color, fontWeight: ctx.weight, lineHeight: ctx.size * 1.35 }, extra]}>
      {s}
    </Text>
  );
}

/** Renders nodes as a flat list of flex items; words are separate items so the line can wrap. */
function displayItems(nodes: MathNode[], ctx: Ctx, key: string, wrap: boolean, depth = 0): React.ReactNode[] {
  const items: React.ReactNode[] = [];
  // a "glue" group keeps a word together with the subscripts/superscripts that follow it
  let glue: React.ReactNode[] = [];
  const pushGlue = () => {
    if (glue.length === 1) items.push(glue[0]);
    else if (glue.length > 1) {
      items.push(
        <View key={`${key}g${items.length}`} style={styles.glue}>
          {glue}
        </View>,
      );
    }
    glue = [];
  };
  nodes.forEach((n, i) => {
    const k = `${key}-${i}`;
    if (n.k === 'text') {
      const parts = wrap ? n.s.match(/[^ ]+ *| +/g) ?? [] : [n.s];
      parts.forEach((p, j) => {
        if (!p) return;
        if (j > 0) pushGlue();
        glue.push(txt(ctx, p, `${k}t${j}`));
        if (p.endsWith(' ')) pushGlue();
      });
      return;
    }
    if (n.k === 'sub' || n.k === 'sup') {
      const small: Ctx = { ...ctx, size: ctx.size * 0.7 };
      const shift = n.k === 'sub' ? ctx.size * 0.3 : -ctx.size * 0.38;
      glue.push(
        <View key={k} style={[styles.glue, { transform: [{ translateY: shift }] }]}>
          {displayItems(n.c, small, k, false, depth)}
        </View>,
      );
      return;
    }
    pushGlue();
    if (n.k === 'frac') {
      // top-level fractions keep the full size; nested ones shrink a little
      const inner: Ctx = { ...ctx, size: depth === 0 ? ctx.size : ctx.size * 0.86 };
      items.push(
        <View key={k} style={styles.frac}>
          <View style={styles.fracPart}>{displayItems(n.n, inner, `${k}n`, false, depth + 1)}</View>
          <View style={[styles.fracBar, { backgroundColor: ctx.color }]} />
          <View style={styles.fracPart}>{displayItems(n.d, inner, `${k}d`, false, depth + 1)}</View>
        </View>,
      );
      return;
    }
    items.push(
      <SqrtBox key={k} size={ctx.size} color={ctx.color}>
        {displayItems(n.c, ctx, `${k}c`, false, depth)}
      </SqrtBox>,
    );
  });
  pushGlue();
  return items;
}

/** Radical sign drawn to the height of its content, joined to the bar over it. */
function SqrtBox({ size, color, children }: { size: number; color: string; children: React.ReactNode }) {
  const [h, setH] = useState(size * 1.5);
  const w = size * 0.62;
  const sw = 1.4;
  return (
    <View style={styles.sqrt} onLayout={(e) => setH(e.nativeEvent.layout.height)}>
      <Svg width={w} height={h}>
        <Path
          d={`M 0.5 ${h * 0.6} L ${w * 0.26} ${h * 0.52} L ${w * 0.55} ${h - sw} L ${w - 0.2} ${sw / 2}`}
          stroke={color}
          strokeWidth={sw}
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
      </Svg>
      <View style={[styles.sqrtBody, { borderTopColor: color, borderTopWidth: sw }]}>{children}</View>
    </View>
  );
}

const CONNECTORS = /^(et|ou|avec|soit|and|or|with|i\.e\.)$/i;

/**
 * A formula block. Independent statements separated by 3+ spaces (or " ; ") go on their
 * own lines; a short "Label : " prefix becomes a small caption; parenthesised notes after
 * two spaces are shown muted; the left-hand side of the first "=" is coloured.
 */
export function MathBlock({ text, color, accent, muted, size = 15 }: { text: string; color: string; accent: string; muted: string; size?: number }) {
  const statements: { label?: string; body: string; note?: string; connector?: string }[] = [];
  let pendingConnector: string | undefined;
  for (const raw of text.split(/\s{3,}(?:;\s+)?|\s+;\s{2,}/)) {
    const seg = raw.trim();
    if (!seg) continue;
    if (seg === '·') continue;
    if (CONNECTORS.test(seg)) {
      pendingConnector = seg;
      continue;
    }
    if (/^[(—–]/.test(seg) && statements.length) {
      const last = statements[statements.length - 1];
      last.note = last.note ? `${last.note} ${seg}` : seg;
      continue;
    }
    let body = seg;
    const lead = body.match(/^(et|ou|avec|soit|and|or|with)\s+(?=\S)/i);
    if (lead && !pendingConnector) {
      pendingConnector = lead[1];
      body = body.slice(lead[0].length);
    }
    let note: string | undefined;
    const noteMatch = body.match(/^(.*\S)\s{2,}(\(.*\))$/);
    if (noteMatch) {
      body = noteMatch[1];
      note = noteMatch[2];
    }
    let label: string | undefined;
    const labelMatch = body.match(/^([^=:{}\\]{1,48}?)\s?:\s(?=\S)/);
    if (labelMatch && !/[×/=≈≤≥<>+−]/.test(labelMatch[1])) {
      label = labelMatch[1];
      body = body.slice(labelMatch[0].length);
    }
    statements.push({ label, body, note, connector: pendingConnector });
    pendingConnector = undefined;
  }

  const base: Ctx = { size, color, weight: '600' };
  return (
    <View style={styles.block}>
      {statements.map((st, si) => {
        // colour the left-hand side when it is a symbol, not a numeric expression
        let lhs: string | undefined;
        let rhs = st.body;
        const eq = findTopLevel(st.body, ' = ');
        if (eq > 0) {
          const left = st.body.slice(0, eq);
          if (left.length <= 34 && !/^[\d(]/.test(left) && !/[×÷+−≈→]| \/ |\\frac/.test(left)) {
            lhs = left;
            rhs = st.body.slice(eq);
          }
        }
        return (
          <View key={si} style={si > 0 ? styles.statementGap : undefined}>
            {st.connector || st.label ? (
              <Text style={[styles.caption, { color: muted }]}>
                {[st.connector, st.label].filter(Boolean).join(' · ')}
              </Text>
            ) : null}
            <View style={styles.line}>
              {lhs ? displayItems(parseMath(lhs), { ...base, color: accent, weight: '700' }, `l${si}`, true) : null}
              {displayItems(parseMath(rhs), base, `r${si}`, true)}
              {st.note ? displayItems(parseMath(' ' + st.note), { size: size * 0.82, color: muted, weight: '500' }, `n${si}`, true) : null}
            </View>
          </View>
        );
      })}
    </View>
  );
}

function findTopLevel(s: string, needle: string) {
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '{' || c === '(' || c === '[') depth++;
    else if (c === '}' || c === ')' || c === ']') depth--;
    else if (depth === 0 && s.startsWith(needle, i)) return i;
  }
  return -1;
}

const styles = StyleSheet.create({
  block: { gap: 2 },
  statementGap: { marginTop: 8 },
  caption: { fontSize: 11.5, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 2 },
  line: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', rowGap: 4 },
  glue: { flexDirection: 'row', alignItems: 'center', flexWrap: 'nowrap' },
  frac: { alignItems: 'center', marginHorizontal: 4, paddingVertical: 2, flexShrink: 1 },
  fracPart: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', paddingHorizontal: 2 },
  fracBar: { height: 1.4, alignSelf: 'stretch', marginVertical: 2, borderRadius: 1 },
  sqrt: { flexDirection: 'row', alignItems: 'stretch', marginHorizontal: 1 },
  sqrtBody: { flexDirection: 'row', alignItems: 'center', paddingTop: 2, paddingHorizontal: 2 },
});
