import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { colors, spacing, typography } from '../../theme/theme';

type TextProps = { children: React.ReactNode; style?: TextStyle };

export function Title({ children, style }: TextProps) {
  return <Text style={[typography.h1, styles.title, style]}>{children}</Text>;
}

export function Subtitle({ children, style }: TextProps) {
  return <Text style={[typography.subtitle, styles.subtitle, style]}>{children}</Text>;
}

export function SectionTitle({ children, style }: TextProps) {
  return <Text style={[typography.h2, styles.sectionTitle, style]}>{children}</Text>;
}

export function FieldLabel({ children, style }: TextProps) {
  return <Text style={[typography.label, styles.fieldLabel, style]}>{children}</Text>;
}

export function Formula({ children, style }: TextProps) {
  return <Text style={[typography.formula, styles.formula, style]}>{children}</Text>;
}

export function Note({ children, style }: TextProps) {
  return <Text style={[typography.note, styles.note, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: { marginBottom: 2 },
  subtitle: { marginBottom: spacing.md },
  sectionTitle: { marginTop: spacing.xl, marginBottom: spacing.sm, color: colors.text },
  fieldLabel: { marginBottom: spacing.xs, marginTop: spacing.md },
  formula: { marginBottom: spacing.xs },
  note: { marginTop: spacing.sm },
});
