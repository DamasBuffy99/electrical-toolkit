import React, { useMemo } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
  CATEGORIES,
  CATEGORY_LABELS_EN,
  Category,
  DEFAULT_DEMAND_FACTORS,
  makePanelCircuit,
  nextStandardBreaker,
  PanelCircuit,
  Phase,
  PHASES,
} from '../data/panelSchedule';
import { usePersistedField } from '../lib/storage';
import { useSnapshots } from '../lib/useSnapshots';
import { makeId } from '../lib/id';
import { useLanguage } from '../lib/language';
import SavedCalculations from '../components/SavedCalculations';
import {
  Card,
  Divider,
  ExportButton,
  FieldLabel,
  Formula,
  MiniChip,
  Note,
  ResultRow,
  ScreenContainer,
  SectionTitle,
  Title,
} from '../components/ui';
import { colors, radius, spacing } from '../theme/theme';

type PanelScheduleState = {
  circuits: PanelCircuit[];
  demandFactors: Record<Category, string>;
  voltage: string;
};

const DEFAULT_STATE: PanelScheduleState = {
  circuits: [
    makePanelCircuit(makeId(), 'Éclairage bureau 1', 'R', 'Éclairage', '2'),
    makePanelCircuit(makeId(), 'Prises bureau 1', 'Y', 'Prises', '3'),
    makePanelCircuit(makeId(), 'Climatiseur 1', 'B', 'Climatisation', '5'),
    makePanelCircuit(makeId(), 'Éclairage bureau 2', 'Y', 'Éclairage', '2'),
    makePanelCircuit(makeId(), 'Prises bureau 2', 'B', 'Prises', '3'),
    makePanelCircuit(makeId(), 'Climatiseur 2', 'R', 'Climatisation', '5'),
  ],
  demandFactors: {
    Éclairage: String(DEFAULT_DEMAND_FACTORS['Éclairage']),
    Prises: String(DEFAULT_DEMAND_FACTORS['Prises']),
    Climatisation: String(DEFAULT_DEMAND_FACTORS['Climatisation']),
    Autre: String(DEFAULT_DEMAND_FACTORS['Autre']),
  },
  voltage: '380',
};

export default function PanelScheduleScreen() {
  const [state, setState] = usePersistedField<PanelScheduleState>('panelSchedule:current', DEFAULT_STATE);
  const { snapshots, save, remove } = useSnapshots<PanelScheduleState>('panelSchedule:snapshots');
  const { lang, t } = useLanguage();
  const locale = lang === 'fr' ? 'fr-FR' : 'en-US';
  const catLabel = (cat: Category) => (lang === 'fr' ? cat : CATEGORY_LABELS_EN[cat]);

  const { circuits, demandFactors, voltage } = state;

  function updateCircuit(id: string, patch: Partial<PanelCircuit>) {
    setState((prev) => ({
      ...prev,
      circuits: prev.circuits.map((c) => (c.id === id ? { ...c, ...patch } : c)),
    }));
  }
  function addCircuit() {
    setState((prev) => ({ ...prev, circuits: [...prev.circuits, makePanelCircuit(makeId())] }));
  }
  function removeCircuit(id: string) {
    setState((prev) => ({ ...prev, circuits: prev.circuits.filter((c) => c.id !== id) }));
  }
  function setDemandFactor(cat: Category, value: string) {
    setState((prev) => ({ ...prev, demandFactors: { ...prev.demandFactors, [cat]: value } }));
  }
  function setVoltage(value: string) {
    setState((prev) => ({ ...prev, voltage: value }));
  }

  const {
    busTotals,
    average,
    unbalancePct,
    categoryTotals,
    totalDemand,
    demandPlus15,
    lineAmperes,
    suggestedBreaker,
  } = useMemo(() => {
    const parsed = circuits.map((c) => ({ ...c, kva: parseFloat(c.connectedKva.replace(',', '.')) || 0 }));

    const bus: Record<Phase, number> = { R: 0, Y: 0, B: 0 };
    parsed.forEach((c) => {
      bus[c.phase] += c.kva;
    });
    const avg = (bus.R + bus.Y + bus.B) / 3;
    const unbalance = avg > 0
      ? Math.max(Math.abs(bus.R - avg), Math.abs(bus.Y - avg), Math.abs(bus.B - avg)) / avg * 100
      : 0;

    const catTotals: Record<Category, { connected: number; df: number; demand: number }> = {
      Éclairage: { connected: 0, df: 0, demand: 0 },
      Prises: { connected: 0, df: 0, demand: 0 },
      Climatisation: { connected: 0, df: 0, demand: 0 },
      Autre: { connected: 0, df: 0, demand: 0 },
    };
    CATEGORIES.forEach((cat) => {
      const connected = parsed.filter((c) => c.category === cat).reduce((s, c) => s + c.kva, 0);
      const df = parseFloat(demandFactors[cat].replace(',', '.')) || 0;
      catTotals[cat] = { connected, df, demand: connected * df };
    });

    const totalDem = Object.values(catTotals).reduce((s, c) => s + c.demand, 0);
    const plus15 = totalDem * 1.15;
    const V = parseFloat(voltage.replace(',', '.')) || 0;
    const amps = V > 0 ? (plus15 * 1000) / (Math.sqrt(3) * V) : 0;

    return {
      busTotals: bus,
      average: avg,
      unbalancePct: unbalance,
      categoryTotals: catTotals,
      totalDemand: totalDem,
      demandPlus15: plus15,
      lineAmperes: amps,
      suggestedBreaker: nextStandardBreaker(amps),
    };
  }, [circuits, demandFactors, voltage]);

  return (
    <ScreenContainer>
      <Title>Panel Schedule</Title>
      <SectionTitle style={{ marginTop: spacing.sm }}>{t('Étape 1 — Équilibrage des phases R/Y/B', 'Step 1 — Balancing phases R/Y/B')}</SectionTitle>

      <View style={styles.tableHeader}>
        <Text style={[styles.th, styles.colName]}>{t('Circuit', 'Circuit')}</Text>
        <Text style={[styles.th, styles.colSmall]}>{t('Phase', 'Phase')}</Text>
        <Text style={[styles.th, styles.colName]}>{t('Catégorie', 'Category')}</Text>
        <Text style={[styles.th, styles.colNum]}>kVA</Text>
        <Text style={[styles.th, styles.colDel]}> </Text>
      </View>

      {circuits.map((row) => (
        <View key={row.id} style={styles.tableRow}>
          <TextInput
            style={[styles.input, styles.colName]}
            value={row.name}
            onChangeText={(v) => updateCircuit(row.id, { name: v })}
            placeholder={t('Nom du circuit', 'Circuit name')}
            placeholderTextColor={colors.textFaint}
          />
          <View style={[styles.miniChipsRow, styles.colSmall]}>
            {PHASES.map((p) => (
              <MiniChip key={p} label={p} selected={row.phase === p} onPress={() => updateCircuit(row.id, { phase: p })} />
            ))}
          </View>
          <View style={[styles.miniChipsRow, styles.colName]}>
            {CATEGORIES.map((cat) => (
              <MiniChip key={cat} label={catLabel(cat)} selected={row.category === cat} onPress={() => updateCircuit(row.id, { category: cat })} />
            ))}
          </View>
          <TextInput
            style={[styles.input, styles.colNum]}
            value={row.connectedKva}
            onChangeText={(v) => updateCircuit(row.id, { connectedKva: v })}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.colDel} onPress={() => removeCircuit(row.id)}>
            <Text style={styles.removeText}>✕</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity style={styles.addButton} onPress={addCircuit}>
        <Text style={styles.addButtonText}>{t('+ Ajouter un circuit', '+ Add a circuit')}</Text>
      </TouchableOpacity>

      <Card>
        <ResultRow label={t('Bus R / Y / B', 'Bus R / Y / B')} value={`${busTotals.R.toLocaleString(locale)} / ${busTotals.Y.toLocaleString(locale)} / ${busTotals.B.toLocaleString(locale)} kVA`} />
        <ResultRow label={t('Moyenne', 'Average')} value={`${average.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA`} />
        <ResultRow
          label={t('Déséquilibre', 'Unbalance')}
          value={`${unbalancePct.toLocaleString(locale, { maximumFractionDigits: 1 })}%`}
          variant={unbalancePct > 5 ? 'warn' : 'accent'}
        />
        {unbalancePct > 5 && (
          <Note>
            {t(
              '⚠️ Déséquilibre au-delà de 5% — répartir les circuits plus équitablement entre R/Y/B.',
              '⚠️ Unbalance above 5% — distribute circuits more evenly across R/Y/B.'
            )}
          </Note>
        )}
      </Card>

      <SectionTitle>{t('Étape 2 — Facteurs de demande par catégorie', 'Step 2 — Demand factors by category')}</SectionTitle>
      <Card>
        {CATEGORIES.map((cat) => (
          <View key={cat} style={styles.categoryRow}>
            <Text style={styles.categoryLabel}>{catLabel(cat)}</Text>
            <Text style={styles.categoryConnected}>
              {categoryTotals[cat].connected.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA
            </Text>
            <TextInput
              style={[styles.input, styles.categoryDfInput]}
              value={demandFactors[cat]}
              onChangeText={(v) => setDemandFactor(cat, v)}
              keyboardType="numeric"
            />
            <Text style={styles.categoryDemand}>
              = {categoryTotals[cat].demand.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA
            </Text>
          </View>
        ))}
        <Divider />
        <ResultRow label={t('Total demande', 'Total demand')} value={`${totalDemand.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA`} />
        <ResultRow label={t('Demande + 15%', 'Demand + 15%')} value={`${demandPlus15.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA`} variant="accent" />
      </Card>

      <SectionTitle>{t('Étape 3 — Disjoncteur principal', 'Step 3 — Main breaker')}</SectionTitle>
      <FieldLabel style={{ marginTop: 0 }}>{t('Tension de service (V)', 'Service voltage (V)')}</FieldLabel>
      <TextInput style={[styles.input, { maxWidth: 140 }]} value={voltage} onChangeText={setVoltage} keyboardType="numeric" />

      <Card>
        <Formula>
          I = ({t('Demande+15%', 'Demand+15%')} × 1000) / (√3 × V) = ({demandPlus15.toLocaleString(locale, { maximumFractionDigits: 1 })} × 1000) / (1.732 × {voltage}) = {lineAmperes.toLocaleString(locale, { maximumFractionDigits: 1 })} A
        </Formula>
        <ResultRow label={t('Courant de ligne', 'Line current')} value={`${lineAmperes.toLocaleString(locale, { maximumFractionDigits: 1 })} A`} />
        <ResultRow
          label={t('Disjoncteur principal suggéré', 'Suggested main breaker')}
          value={suggestedBreaker ? `${suggestedBreaker} A (${suggestedBreaker <= 100 ? 'MCB' : 'MCCB'})` : '> 1250 A'}
          variant="accent"
        />
        <Note>
          {t(
            '⚠️ Redimensionner aussi chaque disjoncteur de départ selon sa charge réelle — ne pas garder un calibre uniforme par défaut.',
            "⚠️ Also re-size each branch breaker based on its actual load — don't keep a uniform default rating."
          )}
        </Note>
      </Card>

      <ExportButton
        title="Panel Schedule"
        sections={[
          {
            heading: t('Circuits', 'Circuits'),
            rows: circuits.map((c) => ({
              label: c.name || t('Circuit', 'Circuit'),
              value: `${t('Phase', 'Phase')} ${c.phase} · ${catLabel(c.category)} · ${c.connectedKva || 0} kVA`,
            })),
          },
          {
            heading: t('Équilibrage', 'Balancing'),
            rows: [
              { label: t('Bus R / Y / B', 'Bus R / Y / B'), value: `${busTotals.R.toLocaleString(locale)} / ${busTotals.Y.toLocaleString(locale)} / ${busTotals.B.toLocaleString(locale)} kVA` },
              { label: t('Déséquilibre', 'Unbalance'), value: `${unbalancePct.toLocaleString(locale, { maximumFractionDigits: 1 })}%` },
            ],
          },
          {
            heading: t('Résultats', 'Results'),
            rows: [
              { label: t('Total demande', 'Total demand'), value: `${totalDemand.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA` },
              { label: t('Demande + 15%', 'Demand + 15%'), value: `${demandPlus15.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA` },
              { label: t('Courant de ligne', 'Line current'), value: `${lineAmperes.toLocaleString(locale, { maximumFractionDigits: 1 })} A` },
              { label: t('Disjoncteur principal', 'Main breaker'), value: suggestedBreaker ? `${suggestedBreaker} A` : '> 1250 A' },
            ],
          },
        ]}
      />

      <SavedCalculations snapshots={snapshots} onSave={(name) => save(name, state)} onLoad={(data) => setState(data)} onRemove={remove} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  tableHeader: { flexDirection: 'row', gap: 6, marginBottom: spacing.xs, paddingHorizontal: 2 },
  tableRow: { flexDirection: 'row', gap: 6, marginBottom: spacing.sm, alignItems: 'center', flexWrap: 'wrap' },
  th: { fontSize: 10, fontWeight: '700', color: colors.textFaint, textTransform: 'uppercase' },
  colName: { flex: 2, minWidth: 110 },
  colSmall: { width: 100 },
  colNum: { flex: 1, minWidth: 60, textAlign: 'right' },
  colDel: { width: 24, alignItems: 'center' },
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
  miniChipsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 4 },
  removeText: { color: colors.warn, fontSize: 16 },
  addButton: { alignSelf: 'flex-start', marginTop: spacing.xs, marginBottom: spacing.sm, paddingVertical: spacing.sm, paddingHorizontal: spacing.md },
  addButtonText: { color: colors.accent, fontWeight: '700' },
  categoryRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.sm, flexWrap: 'wrap' },
  categoryLabel: { fontSize: 14, color: colors.text, width: 110 },
  categoryConnected: { fontSize: 13, color: colors.textMuted, width: 90, textAlign: 'right' },
  categoryDfInput: { width: 70 },
  categoryDemand: { fontSize: 14, fontWeight: '600', color: colors.text },
});
