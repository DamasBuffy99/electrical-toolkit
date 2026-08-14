import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Snapshot } from '../lib/useSnapshots';
import { colors, radius, spacing } from '../theme/theme';
import Card from './ui/Card';
import { SectionTitle } from './ui/Typo';
import { TextField } from './ui/Field';
import { useLanguage } from '../lib/language';

type Props<T> = {
  snapshots: Snapshot<T>[];
  onSave: (name: string) => void;
  onLoad: (data: T) => void;
  onRemove: (id: string) => void;
};

export default function SavedCalculations<T>({ snapshots, onSave, onLoad, onRemove }: Props<T>) {
  const [name, setName] = useState('');
  const { lang, t } = useLanguage();

  function handleSave() {
    const trimmed = name.trim();
    if (!trimmed) return;
    onSave(trimmed);
    setName('');
  }

  return (
    <Card>
      <SectionTitle style={{ marginTop: 0 }}>{t('💾 Mes sauvegardes', '💾 Saved calculations')}</SectionTitle>
      <View style={styles.saveRow}>
        <TextField
          value={name}
          onChangeText={setName}
          placeholder={t('Nom du projet / calcul', 'Project / calculation name')}
          style={{ flex: 1 }}
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>{t('Enregistrer', 'Save')}</Text>
        </TouchableOpacity>
      </View>

      {snapshots.length === 0 ? (
        <Text style={styles.empty}>{t("Aucune sauvegarde pour l'instant.", 'No saved calculations yet.')}</Text>
      ) : (
        snapshots.map((s) => (
          <View key={s.id} style={styles.row}>
            <View style={styles.rowInfo}>
              <Text style={styles.rowName}>{s.name}</Text>
              <Text style={styles.rowDate}>
                {new Date(s.savedAt).toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-US')}
              </Text>
            </View>
            <TouchableOpacity style={styles.loadButton} onPress={() => onLoad(s.data)}>
              <Text style={styles.loadButtonText}>{t('Charger', 'Load')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(s.id)}>
              <Text style={styles.removeText}>✕</Text>
            </TouchableOpacity>
          </View>
        ))
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  saveRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md, alignItems: 'center' },
  saveButton: {
    backgroundColor: colors.accent,
    borderRadius: radius.sm,
    paddingVertical: 10,
    paddingHorizontal: spacing.md + 2,
  },
  saveButtonText: { color: '#fff', fontWeight: '700', fontSize: 13 },
  empty: { fontSize: 13, color: colors.textFaint },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    gap: spacing.sm,
  },
  rowInfo: { flex: 1 },
  rowName: { fontSize: 14, fontWeight: '600', color: colors.text },
  rowDate: { fontSize: 11, color: colors.textFaint },
  loadButton: {
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: radius.sm,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  loadButtonText: { color: colors.accent, fontSize: 12, fontWeight: '700' },
  removeButton: { padding: 4 },
  removeText: { color: colors.warn, fontSize: 16 },
});
