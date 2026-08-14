import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { exportReport, ReportSection } from '../../lib/exportReport';
import { colors, radius, spacing } from '../../theme/theme';
import { useLanguage } from '../../lib/language';

type Props = {
  title: string;
  subtitle?: string;
  sections: ReportSection[];
};

export default function ExportButton({ title, subtitle, sections }: Props) {
  const [busy, setBusy] = useState(false);
  const { t } = useLanguage();

  async function handlePress() {
    if (busy) return;
    setBusy(true);
    try {
      await exportReport(title, subtitle, sections);
    } catch (e) {
      // best-effort; silently ignore (e.g. user cancelled print dialog)
    } finally {
      setBusy(false);
    }
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress} disabled={busy}>
      <Text style={styles.text}>{busy ? t('Préparation…', 'Preparing…') : t('🖨️ Exporter / Imprimer (PDF)', '🖨️ Export / Print (PDF)')}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: spacing.md,
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: radius.sm,
    paddingVertical: 10,
    paddingHorizontal: spacing.lg,
    alignSelf: 'flex-start',
  },
  text: { color: colors.accent, fontWeight: '700', fontSize: 13 },
});
