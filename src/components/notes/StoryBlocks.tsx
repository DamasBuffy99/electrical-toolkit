import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../../theme/theme';
import { useLanguage } from '../../lib/language';
import { MathBlock, RichText } from './MathText';

/** "In this step" card at the top of a lesson. */
export function Objectives({ items }: { items: string[] }) {
  const { t } = useLanguage();
  return (
    <View style={styles.objectives}>
      <Text style={styles.objectivesTitle}>🎯 {t('Dans cette étape', 'In this step')}</Text>
      {items.map((it, i) => (
        <View key={i} style={styles.objRow}>
          <Text style={styles.objCheck}>○</Text>
          <RichText style={styles.objText} text={it} />
        </View>
      ))}
    </View>
  );
}

/** Row of key numbers. */
export function KeyFigures({ items }: { items: { value: string; label: string }[] }) {
  return (
    <View style={styles.figures}>
      {items.map((it, i) => (
        <View key={i} style={styles.figure}>
          <RichText style={styles.figureValue} text={it.value} />
          <RichText style={styles.figureLabel} text={it.label} />
        </View>
      ))}
    </View>
  );
}

/** A design decision: the choice, the reasons, and what was ruled out. */
export function Decision({ title, choice, reasons, rejected }: { title: string; choice: string; reasons: string[]; rejected?: string }) {
  const { t } = useLanguage();
  return (
    <View style={styles.decision}>
      <Text style={styles.decisionLabel}>✅ {t('Décision', 'Decision')} · {title}</Text>
      <RichText style={styles.decisionChoice} text={choice} />
      {reasons.map((r, i) => (
        <View key={i} style={styles.objRow}>
          <Text style={styles.reasonDot}>›</Text>
          <RichText style={styles.reasonText} text={r} />
        </View>
      ))}
      {rejected ? (
        <View style={styles.rejected}>
          <Text style={styles.rejectedLabel}>✗ {t('Écarté', 'Ruled out')}</Text>
          <RichText style={styles.rejectedText} text={rejected} />
        </View>
      ) : null}
    </View>
  );
}

/** Numbered calculation steps with a highlighted result. */
export function Calc({ title, steps, result }: { title?: string; steps: { label: string; formula: string }[]; result: string }) {
  const { t } = useLanguage();
  return (
    <View style={styles.calc}>
      <Text style={styles.calcTitle}>🧮 {title ?? t('Calcul pas à pas', 'Step-by-step calculation')}</Text>
      {steps.map((s, i) => (
        <View key={i} style={styles.calcStep}>
          <View style={styles.calcNum}>
            <Text style={styles.calcNumText}>{i + 1}</Text>
          </View>
          <View style={styles.calcBody}>
            <RichText style={styles.calcLabel} text={s.label} />
            <MathBlock text={s.formula} color={colors.highlightText} accent={colors.accent} muted={colors.textMuted} size={14} />
          </View>
        </View>
      ))}
      <View style={styles.calcResult}>
        <Text style={styles.calcResultLabel}>{t('Résultat', 'Result')}</Text>
        <MathBlock text={result} color="#065f46" accent="#065f46" muted="#047857" size={15} />
      </View>
    </View>
  );
}

/** Same question, answered by several standards. */
export function Norms({ title, rows }: { title?: string; rows: { norm: string; rule: string; result: string }[] }) {
  const { t } = useLanguage();
  return (
    <View style={styles.norms}>
      <Text style={styles.normsTitle}>⚖️ {title ?? t('Selon les normes', 'According to the standards')}</Text>
      {rows.map((r, i) => (
        <View key={i} style={[styles.normRow, i > 0 && styles.normRowBorder]}>
          <View style={styles.normBadge}>
            <Text style={styles.normBadgeText}>{r.norm}</Text>
          </View>
          <View style={styles.normBody}>
            <RichText style={styles.normRule} text={r.rule} />
            <RichText style={styles.normResult} text={`→ ${r.result}`} />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  objectives: {
    backgroundColor: colors.accentSoft,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#c7d4f5',
  },
  objectivesTitle: { fontSize: 12, fontWeight: '800', color: colors.accent, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 },
  objRow: { flexDirection: 'row', gap: 8, marginBottom: 3 },
  objCheck: { fontSize: 12, color: colors.accent, lineHeight: 20, fontWeight: '800' },
  objText: { flex: 1, fontSize: 14, lineHeight: 20, color: colors.text },

  figures: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: spacing.md },
  figure: {
    minWidth: 110,
    flexGrow: 1,
    flexBasis: 110,
    backgroundColor: colors.surface,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    borderTopWidth: 3,
    borderTopColor: colors.highlight,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  figureValue: { fontSize: 18, fontWeight: '800', color: colors.accent },
  figureLabel: { fontSize: 11.5, color: colors.textMuted, marginTop: 1, lineHeight: 15 },

  decision: {
    backgroundColor: '#f0fdf4',
    borderWidth: 1,
    borderColor: '#86efac',
    borderLeftWidth: 4,
    borderLeftColor: '#16a34a',
    borderRadius: radius.sm,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  decisionLabel: { fontSize: 11.5, fontWeight: '800', color: '#15803d', textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 4 },
  decisionChoice: { fontSize: 15.5, fontWeight: '800', color: '#14532d', marginBottom: 6, lineHeight: 21 },
  reasonDot: { fontSize: 15, color: '#16a34a', fontWeight: '800', lineHeight: 19 },
  reasonText: { flex: 1, fontSize: 13.5, lineHeight: 19, color: '#1f2937' },
  rejected: { marginTop: 6, paddingTop: 6, borderTopWidth: 1, borderTopColor: '#bbf7d0' },
  rejectedLabel: { fontSize: 11, fontWeight: '800', color: '#9f1239', textTransform: 'uppercase', letterSpacing: 0.4 },
  rejectedText: { fontSize: 13, color: '#4b5563', lineHeight: 18, marginTop: 1 },

  calc: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  calcTitle: { fontSize: 12, fontWeight: '800', color: colors.accent, textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 8 },
  calcStep: { flexDirection: 'row', gap: 10, marginBottom: 10 },
  calcNum: { width: 22, height: 22, borderRadius: 11, backgroundColor: colors.accentSoft, alignItems: 'center', justifyContent: 'center', marginTop: 1 },
  calcNumText: { fontSize: 11.5, fontWeight: '800', color: colors.accent },
  calcBody: { flex: 1 },
  calcLabel: { fontSize: 12.5, color: colors.textMuted, marginBottom: 3, fontWeight: '600' },
  calcResult: { backgroundColor: '#ecfdf5', borderRadius: radius.sm, padding: 10, borderWidth: 1, borderColor: '#a7f3d0' },
  calcResultLabel: { fontSize: 10.5, fontWeight: '800', color: '#047857', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 },

  norms: {
    backgroundColor: '#faf5ff',
    borderWidth: 1,
    borderColor: '#e9d5ff',
    borderRadius: radius.sm,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  normsTitle: { fontSize: 12, fontWeight: '800', color: '#6b21a8', textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 8 },
  normRow: { flexDirection: 'row', gap: 10, paddingVertical: 7 },
  normRowBorder: { borderTopWidth: 1, borderTopColor: '#ede9fe' },
  normBadge: { minWidth: 92, alignSelf: 'flex-start', backgroundColor: '#7c3aed', borderRadius: 6, paddingVertical: 3, paddingHorizontal: 6 },
  normBadgeText: { fontSize: 11, fontWeight: '800', color: '#fff', textAlign: 'center' },
  normBody: { flex: 1 },
  normRule: { fontSize: 13, color: colors.text, lineHeight: 18 },
  normResult: { fontSize: 13, color: '#5b21b6', fontWeight: '700', marginTop: 2, lineHeight: 18 },
});
