import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { NoteBlock } from '../../content/types';
import { colors, radius, spacing } from '../../theme/theme';
import { useLanguage } from '../../lib/language';
import { MathBlock, RichText } from './MathText';
import { useFicheNav } from './FicheContext';

function ExerciseCard({ title, question, solution }: { title?: string; question: string; solution: string[] }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.exerciseBox}>
      <Text style={styles.exerciseTitle}>✏️ {title ?? t('Exercice', 'Exercise')}</Text>
      <RichText style={styles.exerciseQuestion} text={question} />
      <Pressable onPress={() => setOpen((o) => !o)} style={styles.exerciseButton} accessibilityRole="button">
        <Text style={styles.exerciseButtonText}>{open ? t('Masquer la solution', 'Hide the solution') : t('Voir la solution', 'Show the solution')}</Text>
      </Pressable>
      {open ? (
        <View style={styles.exerciseSolution}>
          {solution.map((line, i) => (
            <RichText key={i} style={styles.exerciseSolutionText} text={line} />
          ))}
        </View>
      ) : null}
    </View>
  );
}

const ROLE_STYLE = {
  engineer: { bubble: '#eef2ff', border: colors.accent, name: colors.accent, avatar: colors.accent },
  client: { bubble: '#fff7e6', border: colors.highlight, name: '#9a5b00', avatar: colors.highlight },
  team: { bubble: '#f1f5f9', border: '#94a3b8', name: '#475569', avatar: '#64748b' },
} as const;

function initials(name: string) {
  const words = name.replace(/\(.*\)/, '').trim().split(/\s+/);
  return (words[0]?.[0] ?? '') + (words.length > 1 ? words[words.length - 1][0] : '');
}

function DialogueBubble({ speaker, role, text }: { speaker: string; role: 'engineer' | 'client' | 'team'; text: string }) {
  const s = ROLE_STYLE[role];
  const right = role === 'client';
  return (
    <View style={[styles.dialogueRow, right && styles.dialogueRowRight]}>
      <View style={[styles.avatar, { backgroundColor: s.avatar }]}>
        <Text style={styles.avatarText}>{initials(speaker).toUpperCase()}</Text>
      </View>
      <View style={[styles.bubble, { backgroundColor: s.bubble, borderColor: s.border }, right ? styles.bubbleRight : styles.bubbleLeft]}>
        <Text style={[styles.bubbleName, { color: s.name }]}>{speaker}</Text>
        <RichText style={styles.bubbleText} text={text} />
      </View>
    </View>
  );
}

function FicheLink({ id, why }: { id: string; why?: string }) {
  const nav = useFicheNav();
  const { t } = useLanguage();
  const title = nav?.title(id) ?? id;
  return (
    <Pressable
      onPress={() => nav?.open(id)}
      disabled={!nav}
      style={({ pressed }) => [styles.ficheBox, pressed && styles.fichePressed]}
      accessibilityRole="link"
    >
      <Text style={styles.ficheIcon}>📘</Text>
      <View style={styles.ficheBody}>
        <Text style={styles.ficheLabel}>{t('Fiche technique', 'Reference sheet')}</Text>
        <Text style={styles.ficheTitle}>{title}</Text>
        {why ? <RichText style={styles.ficheWhy} text={why} /> : null}
      </View>
      {nav ? <Text style={styles.ficheArrow}>→</Text> : null}
    </Pressable>
  );
}

function RegionalBox({ title, text }: { title?: string; text: string }) {
  const { t } = useLanguage();
  return (
    <View style={styles.regionalBox}>
      <Text style={styles.regionalTitle}>🌍 {title ?? t('En Afrique de l’Ouest', 'In West Africa')}</Text>
      <RichText style={styles.regionalText} text={text} />
    </View>
  );
}

export function NoteBlockRenderer({ block }: { block: NoteBlock }) {
  switch (block.type) {
    case 'scene':
      return (
        <View style={styles.sceneTag}>
          <Text style={styles.sceneText}>📍 {block.text}</Text>
        </View>
      );
    case 'dialogue':
      return <DialogueBubble speaker={block.speaker} role={block.role} text={block.text} />;
    case 'regional':
      return <RegionalBox title={block.title} text={block.text} />;
    case 'fiche':
      return <FicheLink id={block.id} why={block.why} />;
    case 'heading':
      return <Text style={styles.heading}>{block.text}</Text>;
    case 'subheading':
      return <Text style={styles.subheading}>{block.text}</Text>;
    case 'text':
      return <RichText style={styles.text} text={block.text} />;
    case 'bullets':
      return (
        <View style={styles.bulletList}>
          {block.items.map((item, i) => (
            <View key={i} style={styles.bulletRow}>
              <Text style={styles.bulletDot}>•</Text>
              <RichText style={styles.bulletText} text={item} />
            </View>
          ))}
        </View>
      );
    case 'formula':
      return (
        <View style={styles.formulaBox}>
          <MathBlock text={block.text} color={colors.highlightText} accent={colors.accent} muted={colors.textMuted} />
        </View>
      );
    case 'table':
      return (
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeaderRow]}>
            {block.headers.map((h, i) => (
              <RichText key={i} style={[styles.tableCell, styles.tableHeaderCell]} text={h} />
            ))}
          </View>
          {block.rows.map((row, ri) => (
            <View key={ri} style={[styles.tableRow, ri % 2 === 1 && styles.tableRowAlt]}>
              {row.map((cell, ci) => (
                <RichText key={ci} style={styles.tableCell} text={cell} />
              ))}
            </View>
          ))}
        </View>
      );
    case 'note':
      return (
        <View style={styles.noteBox}>
          <RichText style={styles.noteText} text={block.text} />
        </View>
      );
    case 'warning':
      return (
        <View style={styles.warningBox}>
          <RichText style={styles.warningText} text={`⚠️ ${block.text}`} />
        </View>
      );
    case 'exercise':
      return <ExerciseCard title={block.title} question={block.question} solution={block.solution} />;
    case 'divider':
      return <View style={styles.divider} />;
    case 'image':
      return (
        <View style={styles.imageWrapper}>
          <Image source={block.source} style={[styles.image, { height: block.height ?? 220 }]} resizeMode="contain" />
          {block.caption ? <RichText style={styles.caption} text={block.caption} /> : null}
        </View>
      );
    default:
      return null;
  }
}

export function NoteBlocks({ blocks }: { blocks: NoteBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => (
        <NoteBlockRenderer key={i} block={b} />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.accent,
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
  },
  subheading: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.xs,
  },
  text: {
    fontSize: 14.5,
    lineHeight: 21,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  bulletList: { marginBottom: spacing.sm },
  bulletRow: { flexDirection: 'row', marginBottom: 4, paddingRight: 4 },
  bulletDot: { fontSize: 14, color: colors.accent, marginRight: 8, lineHeight: 21 },
  bulletText: { fontSize: 14.5, lineHeight: 21, color: colors.text, flex: 1 },
  formulaBox: {
    backgroundColor: colors.highlightSoft,
    borderLeftWidth: 3,
    borderLeftColor: colors.highlight,
    borderRadius: radius.sm,
    paddingVertical: 12,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  table: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    overflow: 'hidden',
    marginBottom: spacing.sm,
  },
  tableRow: { flexDirection: 'row' },
  tableHeaderRow: { backgroundColor: colors.accentSoft },
  tableRowAlt: { backgroundColor: '#f8fafd' },
  tableCell: {
    flex: 1,
    fontSize: 12.5,
    color: colors.text,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRightWidth: 1,
    borderRightColor: colors.border,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tableHeaderCell: { fontWeight: '700', color: colors.accent },
  noteBox: {
    backgroundColor: colors.accentSoft,
    borderLeftWidth: 3,
    borderLeftColor: colors.accentMid,
    borderRadius: radius.sm,
    paddingVertical: 10,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  noteText: { fontSize: 13, color: '#1e293b', lineHeight: 19 },
  warningBox: {
    backgroundColor: '#fef2f2',
    borderLeftWidth: 3,
    borderLeftColor: '#dc2626',
    borderRadius: radius.sm,
    paddingVertical: 10,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  warningText: { fontSize: 13, color: '#7f1d1d', lineHeight: 19 },
  exerciseBox: {
    borderWidth: 1,
    borderColor: colors.border,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
    borderRadius: radius.sm,
    backgroundColor: colors.surface,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  exerciseTitle: { fontSize: 13, fontWeight: '800', color: colors.accent, marginBottom: 6 },
  exerciseQuestion: { fontSize: 14, lineHeight: 21, color: colors.text },
  exerciseButton: {
    alignSelf: 'flex-start',
    marginTop: spacing.sm,
    paddingVertical: 6,
    paddingHorizontal: spacing.md,
    borderRadius: 999,
    backgroundColor: colors.accentSoft,
  },
  exerciseButtonText: { fontSize: 12.5, fontWeight: '700', color: colors.accent },
  exerciseSolution: {
    marginTop: spacing.sm,
    backgroundColor: colors.highlightSoft,
    borderRadius: radius.sm,
    padding: spacing.md,
    gap: 4,
  },
  exerciseSolutionText: { fontSize: 13.5, lineHeight: 20, color: colors.highlightText },
  divider: { height: 1, backgroundColor: colors.border, marginVertical: spacing.md },
  sceneTag: {
    alignSelf: 'flex-start',
    backgroundColor: colors.accentSoft,
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginTop: spacing.xs,
    marginBottom: spacing.sm,
  },
  sceneText: { fontSize: 12, fontWeight: '700', color: colors.accent, letterSpacing: 0.2 },
  dialogueRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginBottom: spacing.sm, paddingRight: 28 },
  dialogueRowRight: { flexDirection: 'row-reverse', paddingRight: 0, paddingLeft: 28 },
  avatar: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginTop: 2 },
  avatarText: { color: '#fff', fontWeight: '800', fontSize: 12 },
  bubble: { flexShrink: 1, borderWidth: 1, borderRadius: 14, paddingVertical: 8, paddingHorizontal: 12 },
  bubbleLeft: { borderTopLeftRadius: 4 },
  bubbleRight: { borderTopRightRadius: 4 },
  bubbleName: { fontSize: 11.5, fontWeight: '800', marginBottom: 2 },
  bubbleText: { fontSize: 14, lineHeight: 20.5, color: colors.text },
  regionalBox: {
    backgroundColor: '#ecfdf5',
    borderLeftWidth: 3,
    borderLeftColor: '#059669',
    borderRadius: radius.sm,
    paddingVertical: 10,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  regionalTitle: { fontSize: 12, fontWeight: '800', color: '#047857', marginBottom: 3, textTransform: 'uppercase', letterSpacing: 0.4 },
  regionalText: { fontSize: 13, color: '#064e3b', lineHeight: 19 },
  ficheBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    backgroundColor: colors.surface,
    paddingVertical: 10,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  fichePressed: { backgroundColor: colors.accentSoft },
  ficheIcon: { fontSize: 20 },
  ficheBody: { flex: 1 },
  ficheLabel: { fontSize: 10.5, fontWeight: '800', color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 0.5 },
  ficheTitle: { fontSize: 14, fontWeight: '700', color: colors.accent },
  ficheWhy: { fontSize: 12.5, color: colors.textMuted, lineHeight: 17, marginTop: 2 },
  ficheArrow: { fontSize: 16, fontWeight: '800', color: colors.accent },
  imageWrapper: { marginBottom: spacing.md },
  image: { width: '100%', borderRadius: radius.sm, backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border },
  caption: { fontSize: 11, color: colors.textFaint, marginTop: spacing.xs, textAlign: 'center' },
});
