import React, { useMemo } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
  Circuit,
  KS_BY_BUILDING_TYPE,
  ksForCircuitCount,
  makeCircuit,
} from '../data/demandDiversity';
import { usePersistedField } from '../lib/storage';
import { useSnapshots } from '../lib/useSnapshots';
import { makeId } from '../lib/id';
import { useLanguage } from '../lib/language';
import SavedCalculations from '../components/SavedCalculations';
import {
  Card,
  Chip,
  ChipRow,
  Divider,
  ExportButton,
  FieldLabel,
  Note,
  ReferenceImage,
  ResultRow,
  ScreenContainer,
  Subtitle,
  Title,
} from '../components/ui';
import { colors, radius, spacing } from '../theme/theme';

type KsMode = 'auto' | 'manual' | 'building';

type DemandDiversityState = {
  circuits: Circuit[];
  ksMode: KsMode;
  manualKs: string;
  buildingKsName: string;
};

const DEFAULT_STATE: DemandDiversityState = {
  circuits: [
    makeCircuit(makeId(), 'Éclairage', '12', '1'),
    makeCircuit(makeId(), 'Prises', '8', '0.85'),
    makeCircuit(makeId(), 'Climatisation', '15', '1'),
  ],
  ksMode: 'auto',
  manualKs: '0.8',
  buildingKsName: KS_BY_BUILDING_TYPE[0].name,
};

export default function DemandDiversityScreen() {
  const [state, setState] = usePersistedField<DemandDiversityState>('demandDiversity:current', DEFAULT_STATE);
  const { snapshots, save, remove } = useSnapshots<DemandDiversityState>('demandDiversity:snapshots');
  const { lang, t } = useLanguage();
  const locale = lang === 'fr' ? 'fr-FR' : 'en-US';

  const { circuits, ksMode, manualKs } = state;
  const buildingKs = KS_BY_BUILDING_TYPE.find((b) => b.name === state.buildingKsName) ?? KS_BY_BUILDING_TYPE[0];

  function updateCircuit(id: string, patch: Partial<Circuit>) {
    setState((prev) => ({
      ...prev,
      circuits: prev.circuits.map((c) => (c.id === id ? { ...c, ...patch } : c)),
    }));
  }
  function addCircuit() {
    setState((prev) => ({ ...prev, circuits: [...prev.circuits, makeCircuit(makeId())] }));
  }
  function removeCircuit(id: string) {
    setState((prev) => ({ ...prev, circuits: prev.circuits.filter((c) => c.id !== id) }));
  }
  function setKsMode(mode: KsMode) {
    setState((prev) => ({ ...prev, ksMode: mode }));
  }
  function setManualKs(v: string) {
    setState((prev) => ({ ...prev, manualKs: v }));
  }
  function setBuildingKsName(name: string) {
    setState((prev) => ({ ...prev, buildingKsName: name }));
  }

  const { rows, totalConnected, totalDemanded, autoKs, effectiveKs, combinedLoad } = useMemo(() => {
    const parsed = circuits.map((c) => {
      const connected = parseFloat(c.connectedKva.replace(',', '.')) || 0;
      const df = parseFloat(c.demandFactor.replace(',', '.')) || 0;
      return { ...c, connected, df, demanded: connected * df };
    });
    const totalConn = parsed.reduce((sum, c) => sum + c.connected, 0);
    const totalDem = parsed.reduce((sum, c) => sum + c.demanded, 0);
    const auto = ksForCircuitCount(parsed.length);
    const ks = ksMode === 'auto' ? auto : ksMode === 'building' ? buildingKs.ks : (parseFloat(manualKs.replace(',', '.')) || 0);
    return {
      rows: parsed,
      totalConnected: totalConn,
      totalDemanded: totalDem,
      autoKs: auto,
      effectiveKs: ks,
      combinedLoad: totalDem * ks,
    };
  }, [circuits, ksMode, manualKs, buildingKs]);

  return (
    <ScreenContainer>
      <Title>{t('Facteur de demande & diversité', 'Demand Factor & Diversity')}</Title>
      <Subtitle>
        {t(
          'Charge combinée = Σ(charge connectée × facteur de demande) × facteur de simultanéité (ks)',
          'Combined load = Σ(connected load × demand factor) × coincidence factor (ks)'
        )}
      </Subtitle>

      <View style={styles.tableHeader}>
        <Text style={[styles.th, styles.colName]}>{t('Circuit', 'Circuit')}</Text>
        <Text style={[styles.th, styles.colNum]}>{t('Connectée (kVA)', 'Connected (kVA)')}</Text>
        <Text style={[styles.th, styles.colNum]}>{t('FD', 'DF')}</Text>
        <Text style={[styles.th, styles.colNum]}>{t('Demandée (kVA)', 'Demanded (kVA)')}</Text>
        <Text style={[styles.th, styles.colDel]}> </Text>
      </View>

      {rows.map((row) => (
        <View key={row.id} style={styles.tableRow}>
          <TextInput
            style={[styles.input, styles.colName]}
            value={row.name}
            onChangeText={(v) => updateCircuit(row.id, { name: v })}
            placeholder={t('Nom du circuit', 'Circuit name')}
            placeholderTextColor={colors.textFaint}
          />
          <TextInput
            style={[styles.input, styles.colNum]}
            value={row.connectedKva}
            onChangeText={(v) => updateCircuit(row.id, { connectedKva: v })}
            keyboardType="numeric"
          />
          <TextInput
            style={[styles.input, styles.colNum]}
            value={row.demandFactor}
            onChangeText={(v) => updateCircuit(row.id, { demandFactor: v })}
            keyboardType="numeric"
          />
          <Text style={[styles.demandedValue, styles.colNum]}>
            {row.demanded.toLocaleString(locale, { maximumFractionDigits: 2 })}
          </Text>
          <TouchableOpacity style={styles.colDel} onPress={() => removeCircuit(row.id)}>
            <Text style={styles.removeText}>✕</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity style={styles.addButton} onPress={addCircuit}>
        <Text style={styles.addButtonText}>{t('+ Ajouter un circuit', '+ Add a circuit')}</Text>
      </TouchableOpacity>

      <Card>
        <ResultRow label={t('Total charge connectée', 'Total connected load')} value={`${totalConnected.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA`} />
        <ResultRow
          label={t('Total charge demandée (Σ connectée × FD)', 'Total demanded load (Σ connected × DF)')}
          value={`${totalDemanded.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA`}
        />

        <Divider />

        <FieldLabel style={{ marginTop: 0 }}>{t('Facteur de simultanéité (ks)', 'Coincidence factor (ks)')}</FieldLabel>
        <ChipRow>
          <Chip
            label={t(`Auto (${rows.length} circuits → ${autoKs})`, `Auto (${rows.length} circuits → ${autoKs})`)}
            selected={ksMode === 'auto'}
            onPress={() => setKsMode('auto')}
          />
          <Chip label={t('Par type de bâtiment', 'By building type')} selected={ksMode === 'building'} onPress={() => setKsMode('building')} />
          <Chip label={t('Manuel', 'Manual')} selected={ksMode === 'manual'} onPress={() => setKsMode('manual')} />
        </ChipRow>

        {ksMode === 'building' && (
          <ChipRow style={{ marginTop: spacing.sm }}>
            {KS_BY_BUILDING_TYPE.map((bt) => (
              <Chip
                key={bt.name}
                label={`${lang === 'fr' ? bt.name : bt.nameEn} (${bt.ks})`}
                selected={buildingKs.name === bt.name}
                onPress={() => setBuildingKsName(bt.name)}
              />
            ))}
          </ChipRow>
        )}

        {ksMode === 'manual' && (
          <TextInput
            style={[styles.input, { marginTop: spacing.sm, maxWidth: 120 }]}
            value={manualKs}
            onChangeText={setManualKs}
            keyboardType="numeric"
          />
        )}

        <Divider />

        <ResultRow label={t('Charge combinée finale', 'Final combined load')} value={`${combinedLoad.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA`} variant="big" />
        <Text style={styles.formula}>
          {totalDemanded.toLocaleString(locale, { maximumFractionDigits: 1 })} × {effectiveKs} = {combinedLoad.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA
        </Text>
      </Card>

      <Note>
        {t(
          "⚠️ Le facteur de simultanéité s'applique en cascade dans un tableau de distribution : à chaque étage vers l'amont, on combine la charge demandée (pas la charge connectée) des circuits en aval.",
          '⚠️ The coincidence factor applies in cascade within a distribution board: at each stage moving upstream, combine the demanded load (not the connected load) of the downstream circuits.'
        )}
      </Note>

      <FieldLabel>{t('Tables de référence', 'Reference tables')}</FieldLabel>
      <ReferenceImage
        source={require('../../assets/reference/nec_220_42.png')}
        caption={t('NEC Table 220.42 — Facteurs de demande éclairage', 'NEC Table 220.42 — Lighting demand factors')}
        height={240}
      />
      <ReferenceImage
        source={require('../../assets/reference/iec_diversity_example.png')}
        caption={t('IEC 61439-2 — Exemple de cascade du facteur de simultanéité', 'IEC 61439-2 — Coincidence factor cascade example')}
        height={260}
      />

      <ExportButton
        title={t('Facteur de demande & diversité', 'Demand Factor & Diversity')}
        sections={[
          {
            heading: t('Circuits', 'Circuits'),
            rows: rows.map((r) => ({
              label: r.name || t('Circuit', 'Circuit'),
              value: `${r.connected.toLocaleString(locale)} kVA × ${r.df} = ${r.demanded.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA`,
            })),
          },
          {
            heading: t('Résultats', 'Results'),
            rows: [
              { label: t('Total charge connectée', 'Total connected load'), value: `${totalConnected.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA` },
              { label: t('Total charge demandée', 'Total demanded load'), value: `${totalDemanded.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA` },
              { label: t('Facteur de simultanéité (ks)', 'Coincidence factor (ks)'), value: String(effectiveKs) },
              { label: t('Charge combinée finale', 'Final combined load'), value: `${combinedLoad.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA` },
            ],
          },
        ]}
      />

      <SavedCalculations snapshots={snapshots} onSave={(name) => save(name, state)} onLoad={(data) => setState(data)} onRemove={remove} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  tableHeader: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.xs, paddingHorizontal: 2, marginTop: spacing.md },
  tableRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.sm, alignItems: 'center' },
  th: { fontSize: 11, fontWeight: '700', color: colors.textFaint, textTransform: 'uppercase' },
  colName: { flex: 2, minWidth: 100 },
  colNum: { flex: 1, minWidth: 70, textAlign: 'right' },
  colDel: { width: 28, alignItems: 'center' },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: radius.sm,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    color: colors.text,
  },
  demandedValue: { fontSize: 14, fontWeight: '600', color: colors.text, textAlign: 'right', paddingRight: 4 },
  removeText: { color: colors.warn, fontSize: 16 },
  addButton: { alignSelf: 'flex-start', marginTop: spacing.xs, marginBottom: spacing.sm, paddingVertical: spacing.sm, paddingHorizontal: spacing.md },
  addButtonText: { color: colors.accent, fontWeight: '700' },
  formula: { fontSize: 12, color: colors.textFaint, marginTop: spacing.xs },
});
