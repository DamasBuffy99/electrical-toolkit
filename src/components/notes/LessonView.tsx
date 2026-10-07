import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Image,
  Modal,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { NoteBlock, TopicContent } from '../../content/types';
import { NoteBlockRenderer } from './NoteBlocks';
import { Illustration } from '../illustrations';
import { useLanguage } from '../../lib/language';
import { colors, radius, shadow, spacing } from '../../theme/theme';

type Visual =
  | { kind: 'image'; source: any; caption?: string; height?: number }
  | { kind: 'illustration'; name: string; props?: Record<string, string | number | boolean>; caption?: string };

type Scene = { heading?: string; blocks: NoteBlock[]; visuals: Visual[] };

/** Splits a lesson into scenes at each heading; images and illustrations become the scene's visuals. */
function buildScenes(blocks: NoteBlock[]): Scene[] {
  const scenes: Scene[] = [{ blocks: [], visuals: [] }];
  for (const b of blocks) {
    const current = scenes[scenes.length - 1];
    if (b.type === 'heading') {
      scenes.push({ heading: b.text.replace(/^🔷\s*/, ''), blocks: [], visuals: [] });
    } else if (b.type === 'image') {
      current.visuals.push({ kind: 'image', source: b.source, caption: b.caption, height: b.height });
    } else if (b.type === 'illustration') {
      current.visuals.push({ kind: 'illustration', name: b.name, props: b.props, caption: b.caption });
    } else if (b.type !== 'divider') {
      current.blocks.push(b);
    }
  }
  return scenes.filter((s) => s.heading || s.blocks.length > 0 || s.visuals.length > 0);
}

type Props = {
  content: TopicContent;
  eyebrow?: string;
  backLabel: string;
  onBack: () => void;
  prev?: { title: string; onPress: () => void };
  next?: { title: string; transition?: string; onPress: () => void };
};

const WIDE_BREAKPOINT = 960;
const useNativeDriver = Platform.OS !== 'web';

export default function LessonView({ content, eyebrow, backLabel, onBack, prev, next }: Props) {
  const { lang, t } = useLanguage();
  const { width, height } = useWindowDimensions();
  const wide = width >= WIDE_BREAKPOINT;
  const scenes = useMemo(() => buildScenes(content.blocks), [content]);

  const scrollRef = useRef<ScrollView>(null);
  const sceneY = useRef<number[]>([]);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  function onScroll(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const { contentOffset, layoutMeasurement } = e.nativeEvent;
    const threshold = contentOffset.y + layoutMeasurement.height * 0.35;
    let idx = 0;
    sceneY.current.forEach((y, i) => {
      if (y <= threshold) idx = i;
    });
    if (idx !== activeRef.current) {
      activeRef.current = idx;
      setActive(idx);
    }
  }

  function scrollToScene(i: number) {
    scrollRef.current?.scrollTo({ y: Math.max(0, (sceneY.current[i] ?? 0) - 16), animated: true });
  }

  const header = (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backText}>← {backLabel}</Text>
      </TouchableOpacity>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text style={styles.title}>{content.title}</Text>
      {content.subtitle ? <Text style={styles.subtitle}>{content.subtitle}</Text> : null}
    </View>
  );

  const footer = (prev || next) && (
    <View style={styles.footer}>
      {next ? (
        <TouchableOpacity style={styles.nextCard} onPress={next.onPress} activeOpacity={0.85}>
          {next.transition ? <Text style={styles.nextTransition}>{next.transition}</Text> : null}
          <Text style={styles.nextLabel}>{t('Leçon suivante', 'Next lesson')}</Text>
          <View style={styles.nextRow}>
            <Text style={styles.nextTitle}>{next.title}</Text>
            <Text style={styles.nextArrow}>→</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.endCard}>
          <Text style={styles.endText}>{t('🎉 Fin du parcours disponible pour le moment.', '🎉 End of the available journey for now.')}</Text>
        </View>
      )}
      {prev ? (
        <TouchableOpacity onPress={prev.onPress} style={styles.prevLink}>
          <Text style={styles.prevText}>
            ← {t('Leçon précédente', 'Previous lesson')} : {prev.title}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );

  if (!wide) {
    return (
      <ScrollView style={styles.flex} contentContainerStyle={styles.narrowContent}>
        {header}
        {scenes.map((scene, i) => (
          <View key={i} style={styles.sceneNarrow}>
            {scene.heading ? <SceneHeading text={scene.heading} /> : null}
            {scene.blocks.map((b, j) => (
              <NoteBlockRenderer key={j} block={b} />
            ))}
            {scene.visuals.map((v, j) => (
              <InlineVisual key={j} visual={v} lang={lang} />
            ))}
          </View>
        ))}
        {footer}
      </ScrollView>
    );
  }

  return (
    <View style={styles.wideRoot}>
      <ScrollView
        ref={scrollRef}
        style={styles.textColumn}
        contentContainerStyle={styles.textContent}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {header}
        {scenes.map((scene, i) => (
          <View
            key={i}
            onLayout={(e) => {
              sceneY.current[i] = e.nativeEvent.layout.y;
            }}
            style={[styles.sceneWide, i === active ? styles.sceneActive : styles.sceneIdle]}
          >
            {scene.heading ? <SceneHeading text={scene.heading} /> : null}
            {scene.blocks.map((b, j) => (
              <NoteBlockRenderer key={j} block={b} />
            ))}
          </View>
        ))}
        {footer}
        <View style={{ height: Math.round(height * 0.55) }} />
      </ScrollView>
      <View style={[styles.stageColumn, { width: Math.round(Math.min(600, Math.max(400, width * 0.42))) }]}>
        <VisualStage scenes={scenes} active={active} lang={lang} title={content.title} onJump={scrollToScene} />
      </View>
    </View>
  );
}

function SceneHeading({ text }: { text: string }) {
  return (
    <View style={styles.sceneHeadingRow}>
      <View style={styles.sceneHeadingBar} />
      <Text style={styles.sceneHeading}>{text}</Text>
    </View>
  );
}

function InlineVisual({ visual, lang }: { visual: Visual; lang: 'fr' | 'en' }) {
  return (
    <View style={styles.inlineVisual}>
      {visual.kind === 'illustration' ? (
        <View style={styles.inlineIllustration}>
          <Illustration name={visual.name} props={visual.props} lang={lang} />
        </View>
      ) : (
        <Image source={visual.source} style={[styles.inlineImage, { height: visual.height ?? 220 }]} resizeMode="contain" />
      )}
      {visual.caption ? <Text style={styles.caption}>{visual.caption}</Text> : null}
    </View>
  );
}

function VisualStage({
  scenes,
  active,
  lang,
  title,
  onJump,
}: {
  scenes: Scene[];
  active: number;
  lang: 'fr' | 'en';
  title: string;
  onJump: (i: number) => void;
}) {
  let target = -1;
  for (let i = active; i >= 0; i--) {
    if (scenes[i]?.visuals.length) {
      target = i;
      break;
    }
  }

  // Which visual of the target scene the reader picked (resets to the first one when the scene changes).
  const [pick, setPick] = useState({ scene: target, idx: 0 });
  const wantIdx = pick.scene === target ? pick.idx : 0;
  const wantKey = `${target}:${wantIdx}`;

  const [shownKey, setShownKey] = useState(wantKey);
  const wantRef = useRef(wantKey);
  const anim = useRef(new Animated.Value(1)).current;
  const [zoomed, setZoomed] = useState(false);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    wantRef.current = wantKey;
    if (wantKey === shownKey) return;
    Animated.timing(anim, { toValue: 0, duration: 170, easing: Easing.in(Easing.quad), useNativeDriver }).start(({ finished }) => {
      if (!finished) return;
      setShownKey(wantRef.current);
      Animated.timing(anim, { toValue: 1, duration: 360, easing: Easing.out(Easing.cubic), useNativeDriver }).start();
    });
  }, [wantKey, shownKey, anim]);

  const [shownScene, shownIdx] = shownKey.split(':').map(Number);
  const visuals = shownScene >= 0 ? scenes[shownScene].visuals : [];
  const visual = visuals[shownIdx] ?? visuals[0];
  const count = visuals.length;
  const go = (delta: number) => setPick({ scene: target, idx: (wantIdx + delta + count) % count });

  const animatedStyle = {
    opacity: anim,
    transform: [
      { translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [22, 0] }) },
      { scale: anim.interpolate({ inputRange: [0, 1], outputRange: [0.96, 1] }) },
    ],
  };

  // Largest 4:3 box that fits the window, for the zoom view.
  const zoomW = Math.min(width * 0.92, (height * 0.82 * 4) / 3);

  return (
    <View style={styles.stage}>
      <View style={styles.stageTop}>
        <Text style={styles.stageLabel} numberOfLines={1}>
          {shownScene >= 0 && scenes[shownScene].heading ? scenes[shownScene].heading : title}
        </Text>
        <View style={styles.dots}>
          {scenes.map((_, i) => (
            <TouchableOpacity key={i} onPress={() => onJump(i)} hitSlop={{ top: 6, bottom: 6, left: 3, right: 3 }}>
              <View style={[styles.dot, i === active && styles.dotActive, i < active && styles.dotDone]} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Animated.View style={animatedStyle}>
        <View style={[styles.frame, { maxHeight: Math.max(240, height - 260) }]}>
          {!visual ? (
            <View style={styles.cover}>
              <Text style={styles.coverTitle}>{title}</Text>
            </View>
          ) : (
            <TouchableOpacity style={styles.flexFill} activeOpacity={0.92} onPress={() => setZoomed(true)}>
              <VisualContent visual={visual} lang={lang} />
            </TouchableOpacity>
          )}
        </View>
        {visual ? (
          <View style={styles.captionRow}>
            <Text style={[styles.caption, styles.captionFlex]}>{visual.caption ?? ''}</Text>
            <TouchableOpacity onPress={() => setZoomed(true)} style={styles.zoomButton} hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}>
              <Text style={styles.zoomButtonText}>⤢ {lang === 'fr' ? 'Agrandir' : 'Enlarge'}</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </Animated.View>

      {count > 1 ? (
        <View style={styles.pager}>
          <TouchableOpacity onPress={() => go(-1)} style={styles.pagerButton}>
            <Text style={styles.pagerArrow}>‹</Text>
          </TouchableOpacity>
          <View style={styles.pagerDots}>
            {visuals.map((_, i) => (
              <TouchableOpacity key={i} onPress={() => setPick({ scene: target, idx: i })} hitSlop={{ top: 6, bottom: 6, left: 4, right: 4 }}>
                <View style={[styles.pagerDot, i === wantIdx && styles.pagerDotActive]} />
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.pagerCount}>
            {wantIdx + 1} / {count}
          </Text>
          <TouchableOpacity onPress={() => go(1)} style={styles.pagerButton}>
            <Text style={styles.pagerArrow}>›</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <Modal visible={zoomed && !!visual} transparent animationType="fade" onRequestClose={() => setZoomed(false)}>
        <Pressable style={styles.zoomBackdrop} onPress={() => setZoomed(false)}>
          <Pressable style={[styles.zoomBox, { width: zoomW }]} onPress={() => {}}>
            {visual ? <VisualContent visual={visual} lang={lang} /> : null}
          </Pressable>
          {visual?.caption ? <Text style={styles.zoomCaption}>{visual.caption}</Text> : null}
          <Text style={styles.zoomClose}>{lang === 'fr' ? 'Cliquer pour fermer ✕' : 'Click to close ✕'}</Text>
        </Pressable>
      </Modal>
    </View>
  );
}

function VisualContent({ visual, lang }: { visual: Visual; lang: 'fr' | 'en' }) {
  return (
    <View style={styles.flexFill}>
      {visual.kind === 'illustration' ? (
        <Illustration name={visual.name} props={visual.props} lang={lang} />
      ) : (
        <Image source={visual.source} style={styles.stageImage} resizeMode="contain" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.bg },
  narrowContent: { padding: spacing.xl, paddingBottom: 72, maxWidth: 760, width: '100%', alignSelf: 'center' },

  wideRoot: { flex: 1, flexDirection: 'row', backgroundColor: colors.bg },
  textColumn: { flex: 1 },
  textContent: { paddingVertical: spacing.xl, paddingLeft: spacing.xxl, paddingRight: spacing.xl, maxWidth: 760, width: '100%', alignSelf: 'flex-end' },
  stageColumn: { padding: spacing.xl, paddingLeft: spacing.md },
  flexFill: { flex: 1 },

  header: { marginBottom: spacing.md },
  backButton: { marginBottom: spacing.md, alignSelf: 'flex-start' },
  backText: { color: colors.accent, fontWeight: '600', fontSize: 13 },
  eyebrow: { fontSize: 11.5, fontWeight: '700', color: colors.accent, letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 6 },
  title: { fontSize: 26, fontWeight: '800', color: colors.text, marginBottom: 4 },
  subtitle: { fontSize: 14, color: colors.textMuted, lineHeight: 20 },

  sceneNarrow: { marginTop: spacing.lg },
  sceneWide: { paddingLeft: spacing.lg, paddingVertical: spacing.md, marginTop: spacing.md, borderLeftWidth: 3, borderRadius: 2 },
  sceneActive: { borderLeftColor: colors.accent, opacity: 1 },
  sceneIdle: { borderLeftColor: 'transparent', opacity: 0.62 },
  sceneHeadingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.sm, gap: spacing.sm },
  sceneHeadingBar: { width: 14, height: 3, borderRadius: 2, backgroundColor: colors.accent },
  sceneHeading: { fontSize: 18.5, fontWeight: '800', color: colors.text, flex: 1 },

  inlineVisual: { marginVertical: spacing.md },
  inlineIllustration: { width: '100%', aspectRatio: 4 / 3, maxWidth: 560, alignSelf: 'center' },
  inlineImage: { width: '100%', borderRadius: radius.sm, backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border },
  caption: { fontSize: 12, color: colors.textMuted, marginTop: spacing.xs, textAlign: 'center', fontStyle: 'italic' },

  stage: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    ...shadow.card,
  },
  stageTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: spacing.md, marginBottom: spacing.md },
  stageLabel: { flex: 1, fontSize: 12, fontWeight: '700', color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 0.5 },
  dots: { flexDirection: 'row', flexWrap: 'wrap', gap: 5, maxWidth: '55%', justifyContent: 'flex-end' },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: colors.border },
  dotDone: { backgroundColor: '#9fd0b1' },
  dotActive: { backgroundColor: colors.accent, width: 18 },
  frame: { width: '100%', aspectRatio: 4 / 3, borderRadius: radius.md, overflow: 'hidden', backgroundColor: '#fff' },
  stageImage: { width: '100%', height: '100%' },
  captionRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginTop: spacing.xs },
  captionFlex: { flex: 1, marginTop: 0, textAlign: 'left' },
  zoomButton: { paddingVertical: 4, paddingHorizontal: 10, borderRadius: radius.pill, backgroundColor: colors.accentSoft },
  zoomButtonText: { fontSize: 11.5, fontWeight: '700', color: colors.accent },
  pager: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.md, marginTop: spacing.md },
  pagerButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagerArrow: { fontSize: 18, fontWeight: '700', color: colors.accent, marginTop: -2 },
  pagerDots: { flexDirection: 'row', gap: 6 },
  pagerDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.border },
  pagerDotActive: { backgroundColor: colors.accent },
  pagerCount: { fontSize: 12, fontWeight: '700', color: colors.textMuted },
  zoomBackdrop: { flex: 1, backgroundColor: 'rgba(10, 15, 25, 0.86)', alignItems: 'center', justifyContent: 'center', padding: spacing.lg },
  zoomBox: { aspectRatio: 4 / 3, backgroundColor: '#fff', borderRadius: radius.md, overflow: 'hidden' },
  zoomCaption: { color: '#e5e7eb', fontSize: 13, marginTop: spacing.md, textAlign: 'center' },
  zoomClose: { color: '#9ca3af', fontSize: 12, marginTop: spacing.sm },
  cover: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.accentSoft, borderRadius: radius.md, padding: spacing.xl },
  coverTitle: { fontSize: 22, fontWeight: '800', color: colors.accent, textAlign: 'center' },

  footer: { marginTop: spacing.xxl, gap: spacing.md },
  nextCard: { backgroundColor: colors.accent, borderRadius: radius.lg, padding: spacing.xl, ...shadow.card },
  nextTransition: { color: '#d8efe1', fontSize: 14, lineHeight: 20, marginBottom: spacing.md },
  nextLabel: { color: '#bfe3cd', fontSize: 11, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 4 },
  nextRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  nextTitle: { color: '#fff', fontSize: 18, fontWeight: '800', flex: 1 },
  nextArrow: { color: '#fff', fontSize: 22, fontWeight: '800', marginLeft: spacing.md },
  endCard: { backgroundColor: colors.accentSoft, borderRadius: radius.lg, padding: spacing.xl },
  endText: { color: colors.accent, fontSize: 14, fontWeight: '700' },
  prevLink: { alignSelf: 'flex-start', paddingVertical: spacing.xs },
  prevText: { color: colors.textMuted, fontSize: 13, fontWeight: '600' },
});
