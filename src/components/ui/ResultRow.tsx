import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../../theme/theme';

type Variant = 'default' | 'accent' | 'warn' | 'big';

type Props = {
  label: string;
  value: string;
  variant?: Variant;
};

export default function ResultRow({ label, value, variant = 'default' }: Props) {
  return (
    <View style={styles.row}>
      <Text style={[styles.label, variant === 'big' && styles.labelBig]}>{label}</Text>
      <Text
        style={[
          styles.value,
          variant === 'accent' && styles.accent,
          variant === 'warn' && styles.warn,
          variant === 'big' && styles.big,
        ]}
      >
        {value}
      </Text>
    </View>
  );
}

export function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.sm, gap: spacing.sm },
  label: { fontSize: 14.5, color: colors.textMuted, flexShrink: 1 },
  labelBig: { fontSize: 16, fontWeight: '600', color: colors.text },
  value: { fontSize: 17, fontWeight: '700', color: colors.text },
  accent: { color: colors.accent },
  warn: { color: colors.warn },
  big: { fontSize: 21, color: colors.accent },
  divider: { height: 1, backgroundColor: colors.border, marginVertical: spacing.md },
});
