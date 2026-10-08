import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NoteBlock } from '../../content/types';
import { colors, radius, spacing } from '../../theme/theme';

export function NoteBlockRenderer({ block }: { block: NoteBlock }) {
  switch (block.type) {
    case 'heading':
      return <Text style={styles.heading}>{block.text}</Text>;
    case 'subheading':
      return <Text style={styles.subheading}>{block.text}</Text>;
    case 'text':
      return <Text style={styles.text}>{block.text}</Text>;
    case 'bullets':
      return (
        <View style={styles.bulletList}>
          {block.items.map((item, i) => (
            <View key={i} style={styles.bulletRow}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>
      );
    case 'formula':
      return (
        <View style={styles.formulaBox}>
          <Text style={styles.formulaText}>{block.text}</Text>
        </View>
      );
    case 'table':
      return (
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeaderRow]}>
            {block.headers.map((h, i) => (
              <Text key={i} style={[styles.tableCell, styles.tableHeaderCell]}>{h}</Text>
            ))}
          </View>
          {block.rows.map((row, ri) => (
            <View key={ri} style={[styles.tableRow, ri % 2 === 1 && styles.tableRowAlt]}>
              {row.map((cell, ci) => (
                <Text key={ci} style={styles.tableCell}>{cell}</Text>
              ))}
            </View>
          ))}
        </View>
      );
    case 'note':
      return (
        <View style={styles.noteBox}>
          <Text style={styles.noteText}>{block.text}</Text>
        </View>
      );
    case 'divider':
      return <View style={styles.divider} />;
    case 'image':
      return (
        <View style={styles.imageWrapper}>
          <Image source={block.source} style={[styles.image, { height: block.height ?? 220 }]} resizeMode="contain" />
          {block.caption ? <Text style={styles.caption}>{block.caption}</Text> : null}
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
    paddingVertical: 10,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  formulaText: {
    fontSize: 14,
    color: colors.highlightText,
    fontWeight: '600',
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
  divider: { height: 1, backgroundColor: colors.border, marginVertical: spacing.md },
  imageWrapper: { marginBottom: spacing.md },
  image: { width: '100%', borderRadius: radius.sm, backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border },
  caption: { fontSize: 11, color: colors.textFaint, marginTop: spacing.xs, textAlign: 'center' },
});
