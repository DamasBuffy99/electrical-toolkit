import React from 'react';
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native';
import { colors, radius, spacing, typography } from '../../theme/theme';

type InputProps = {
  value: string;
  onChangeText: (v: string) => void;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  style?: ViewStyle;
};

export function TextField({ value, onChangeText, keyboardType, placeholder, style }: InputProps) {
  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor={colors.textFaint}
    />
  );
}

export function LabeledField({
  label,
  value,
  onChangeText,
  keyboardType = 'numeric',
  placeholder,
  style,
}: InputProps & { label: string }) {
  return (
    <View style={[styles.field, style]}>
      <Text style={typography.label}>{label}</Text>
      <TextInput
        style={[styles.input, { marginTop: spacing.xs }]}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={colors.textFaint}
      />
    </View>
  );
}

export function FieldRow({ children }: { children: React.ReactNode }) {
  return <View style={styles.row}>{children}</View>;
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: spacing.md, flexWrap: 'wrap' },
  field: { flexGrow: 1, minWidth: 140 },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: radius.sm,
    paddingVertical: 10,
    paddingHorizontal: spacing.md,
    fontSize: 15,
    color: colors.text,
  },
});
