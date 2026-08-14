import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { colors, radius, shadow, spacing } from '../../theme/theme';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export default function Card({ children, style }: Props) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.lg + 2,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.lg,
    ...shadow.card,
  },
});
