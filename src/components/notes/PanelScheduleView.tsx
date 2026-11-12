import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PanelCircuit, PanelSchedule } from '../../content/types';
import { colors, radius, spacing } from '../../theme/theme';
import { useLanguage } from '../../lib/language';

type Phase = 0 | 1 | 2;
type Row = {
  num: number;
  phase: Phase;
  circuit?: PanelCircuit;
  /** First row of a multi-pole circuit (or a single-pole circuit). */
  first: boolean;
  /** kVA carried by this row. */
  kva?: number;
  /** Position in a multi-pole group: 0 = single. */
  group: 0 | 1 | 2 | 3;
};

const PHASE_COLORS = ['#dc2626', '#ca8a04', '#2563eb'];

function expand(list: PanelCircuit[], odd: boolean, single: boolean): Row[] {
  const rows: Row[] = [];
  for (const c of list) {
    const poles = single ? 1 : c.poles ?? 1;
    for (let p = 0; p < poles; p++) {
      const i = rows.length;
      rows.push({
        num: odd ? 2 * i + 1 : 2 * i + 2,
        phase: (single ? 0 : i % 3) as Phase,
        circuit: c,
        first: p === 0,
        kva: c.kva !== undefined ? c.kva / poles : undefined,
        group: poles === 1 ? 0 : ((p === 0 ? 1 : p === poles - 1 ? 3 : 2) as 1 | 2 | 3),
      });
    }
  }
  return rows;
}

// Column widths
const W = { desc: 150, wire: 70, poles: 38, cb: 62, kva: 50, num: 36, bus: 44 };

export function PanelScheduleView({ panel }: { panel: PanelSchedule }) {
  const { t, lang } = useLanguage();
  const single = !!panel.singlePhase;
  const fmt = (n: number, d = 2) => {
    const s = (n + 1e-9).toFixed(d);
    return lang === 'fr' ? s.replace('.', ',') : s;
  };
  const phaseNames = single ? ['L'] : ['L1', 'L2', 'L3'];
  const nPh = single ? 1 : 3;

  const left = expand(panel.left, true, single);
  const right = expand(panel.right, false, single);
  const n = Math.max(left.length, right.length);

  const bus = [0, 0, 0];
  for (const r of [...left, ...right]) if (r.kva) bus[r.phase] += r.kva;
  const total = bus.reduce((a, b) => a + b, 0);
  const avg = total / nPh;
  const unbalance = single ? 0 : (Math.max(...bus.map((b) => Math.abs(b - avg))) / avg) * 100;
  const demand = panel.demandKva ?? total * (panel.demandFactor ?? 1);
  const margin = panel.spareMargin ?? 15;
  const demandPlus = demand * (1 + margin / 100);
  const u = panel.lineVoltage ?? (single ? 230 : 400);
  const amps = single ? (demandPlus * 1000) / u : (demandPlus * 1000) / (Math.sqrt(3) * u);
  const ways = n * 2;

  const sideTotals = (rows: Row[]) => {
    const s = [0, 0, 0];
    for (const r of rows) if (r.kva) s[r.phase] += r.kva;
    return s;
  };
  const lt = sideTotals(left);
  const rt = sideTotals(right);

  const info: [string, string][] = [
    [t('Tableau', 'Panel'), panel.name],
    [t('Emplacement', 'Location'), panel.location],
    [t('Tension', 'Voltage'), panel.voltage],
    [t('Type', 'Type'), `${panel.panelType} · ${ways} ${t('départs', 'ways')}`],
    [t('Pouvoir de coupure', 'Short-circuit rating'), panel.scRating],
    [t('Appareil de tête', 'Main switch'), panel.main],
  ];
  if (panel.mounting) info.push([t('Pose', 'Mounting'), panel.mounting]);
  if (panel.feeder) info.push([t('Câble d’alimentation', 'Feeder'), panel.feeder]);

  const summary: [string, string, boolean?][] = [
    ...(single ? [] : phaseNames.map((p, i) => [`${t('Phase', 'Bus')} ${p}`, `${fmt(bus[i])} kVA`] as [string, string])),
    [t('Puissance installée', 'Total connected'), `${fmt(total)} kVA`, true],
    ...(single
      ? []
      : ([
          [t('Moyenne par phase', 'Average per phase'), `${fmt(avg)} kVA`],
          [t('Déséquilibre', 'Unbalance'), `${fmt(unbalance, 1)} %`, true],
        ] as [string, string, boolean?][])),
    [panel.demandKva !== undefined ? t('Demande (foisonnée)', 'Demand (after diversity)') : t(`Demande (× ${fmt(panel.demandFactor ?? 1)})`, `Demand (× ${fmt(panel.demandFactor ?? 1)})`), `${fmt(demand)} kVA`],
    [t(`Demande + ${margin} % réserve`, `Demand + ${margin} % spare`), `${fmt(demandPlus)} kVA`, true],
    [t('Courant de ligne', 'Line current'), `${fmt(amps, 1)} A`, true],
  ];

  const sideCells = (r: Row | undefined, side: 'L' | 'R') => {
    const c = r?.circuit;
    const spare = !!c?.spare;
    const firstOrSingle = !!r && r.first;
    const descText = !r ? '' : !c ? '' : firstOrSingle ? (spare ? t('Réserve', 'Spare') : c.desc) : '';
    const tint = r && r.group ? styles.groupTint : undefined;
    const desc = (
      <View key="d" style={[styles.cell, { width: W.desc }, tint, r && r.group && r.group < 3 ? styles.noBottom : undefined]}>
        <Text style={[styles.cellText, side === 'R' && styles.right, spare && styles.spare]} numberOfLines={2}>
          {descText}
        </Text>
      </View>
    );
    const small = (key: string, w: number, v: string) => (
      <View key={key} style={[styles.cell, { width: w }, tint, r && r.group && r.group < 3 ? styles.noBottom : undefined]}>
        <Text style={[styles.cellText, styles.center]}>{v}</Text>
      </View>
    );
    const show = firstOrSingle && c && !spare;
    const wire = small('w', W.wire, show ? c!.wire ?? '' : '');
    const poles = small('p', W.poles, firstOrSingle && c ? String(single ? c.poles ?? 1 : c.poles ?? 1) : '');
    const cb = small('c', W.cb, firstOrSingle && c ? c.cb ?? '' : '');
    const kvas = Array.from({ length: nPh }, (_, ph) => (
      <View key={`k${ph}`} style={[styles.cell, styles.kvaCell, { width: W.kva }]}>
        <Text style={[styles.cellText, styles.center, styles.kvaText]}>{r && r.phase === ph && r.kva ? fmt(r.kva) : ''}</Text>
      </View>
    ));
    return side === 'L' ? [desc, wire, poles, cb, ...kvas] : [...kvas, cb, poles, wire, desc];
  };

  const headerSide = (side: 'L' | 'R') => {
    const h = (key: string, w: number, label: string, green?: boolean) => (
      <View key={key} style={[styles.hcell, { width: w }, green && styles.hGreen]}>
        <Text style={styles.hText}>{label}</Text>
      </View>
    );
    const cols = [
      h('d', W.desc, t('Circuit', 'Description')),
      h('w', W.wire, t('Câble', 'Wire')),
      h('p', W.poles, t('Pôles', 'Poles')),
      h('c', W.cb, t('Disj.', 'CB')),
    ];
    const kv = phaseNames.map((p, i) => h(`k${i}`, W.kva, `kVA ${p}`, true));
    return side === 'L' ? [...cols, ...kv] : [...kv, ...[...cols].reverse()];
  };

  const totalsSide = (s: number[], side: 'L' | 'R') => {
    const blank = <View key="b" style={[styles.tcell, { width: W.desc + W.wire + W.poles + W.cb }]}><Text style={[styles.tText, side === 'R' && styles.right]}>{t('Sous-total', 'Subtotal')}</Text></View>;
    const kv = Array.from({ length: nPh }, (_, i) => (
      <View key={`t${i}`} style={[styles.tcell, styles.tGreen, { width: W.kva }]}>
        <Text style={[styles.tText, styles.center]}>{fmt(s[i])}</Text>
      </View>
    ));
    return side === 'L' ? [blank, ...kv] : [...kv, blank];
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>📋 {t('Tableau de répartition des charges', 'Panel load schedule')} — {panel.name}</Text>

      <View style={styles.topRow}>
        <View style={styles.infoBox}>
          {info.map(([k, v], i) => (
            <View key={i} style={styles.infoRow}>
              <Text style={styles.infoKey}>{k}</Text>
              <Text style={styles.infoVal}>{v}</Text>
            </View>
          ))}
        </View>
        <View style={styles.sumBox}>
          {summary.map(([k, v, strong], i) => (
            <View key={i} style={styles.infoRow}>
              <Text style={styles.sumKey}>{k}</Text>
              <Text style={[styles.sumVal, strong && styles.sumStrong]}>{v}</Text>
            </View>
          ))}
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator contentContainerStyle={styles.scroll}>
        <View>
          <View style={styles.row}>
            {headerSide('L')}
            <View style={[styles.hcell, { width: W.num }]}><Text style={styles.hText}>N°</Text></View>
            <View style={[styles.hcell, styles.hBus, { width: W.bus }]}><Text style={styles.hText}>{t('Phase', 'Bus')}</Text></View>
            <View style={[styles.hcell, { width: W.num }]}><Text style={styles.hText}>N°</Text></View>
            {headerSide('R')}
          </View>
          {Array.from({ length: n }, (_, i) => {
            const ph = (single ? 0 : i % 3) as Phase;
            return (
              <View key={i} style={[styles.row, i % 2 === 1 && styles.rowAlt]}>
                {sideCells(left[i], 'L')}
                <View style={[styles.cell, { width: W.num }]}><Text style={[styles.cellText, styles.center, styles.num]}>{2 * i + 1}</Text></View>
                <View style={[styles.cell, styles.busCell, { width: W.bus }]}>
                  <View style={[styles.busDot, { backgroundColor: single ? colors.accent : PHASE_COLORS[ph] }]} />
                  <Text style={[styles.busText, { color: single ? colors.accent : PHASE_COLORS[ph] }]}>{phaseNames[ph]}</Text>
                </View>
                <View style={[styles.cell, { width: W.num }]}><Text style={[styles.cellText, styles.center, styles.num]}>{2 * i + 2}</Text></View>
                {sideCells(right[i], 'R')}
              </View>
            );
          })}
          <View style={styles.row}>
            {totalsSide(lt, 'L')}
            <View style={[styles.tcell, { width: W.num * 2 + W.bus }]} />
            {totalsSide(rt, 'R')}
          </View>
        </View>
      </ScrollView>
      <Text style={styles.hint}>
        {t(
          'Circuits impairs à gauche, pairs à droite ; chaque rangée est raccordée à la phase indiquée au centre. Un circuit tétrapolaire occupe trois rangées. Faites défiler le tableau horizontalement.',
          'Odd circuits on the left, even on the right; each row is connected to the bus shown in the middle. A three-phase circuit takes three rows. Scroll the table sideways.',
        )}
      </Text>
    </View>
  );
}

const border = '#cbd5e1';
const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.surface,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  title: { fontSize: 13, fontWeight: '800', color: colors.accent, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.3 },
  topRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 10 },
  infoBox: { flexGrow: 1, flexBasis: 260, borderWidth: 1, borderColor: border, borderRadius: 6, padding: 8, backgroundColor: '#f8fafc' },
  sumBox: { flexGrow: 1, flexBasis: 240, borderWidth: 1, borderColor: '#fdba74', borderRadius: 6, padding: 8, backgroundColor: '#fff7ed' },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 10, paddingVertical: 2 },
  infoKey: { fontSize: 12, color: colors.textMuted, flexShrink: 1 },
  infoVal: { fontSize: 12, color: colors.text, fontWeight: '700', textAlign: 'right', flexShrink: 1 },
  sumKey: { fontSize: 12, color: '#9a3412', flexShrink: 1 },
  sumVal: { fontSize: 12, color: '#7c2d12', fontWeight: '600', textAlign: 'right' },
  sumStrong: { fontWeight: '800', color: '#7c2d12' },
  scroll: { paddingBottom: 6 },
  row: { flexDirection: 'row' },
  rowAlt: { backgroundColor: '#f8fafc' },
  hcell: { backgroundColor: colors.accent, borderWidth: 0.5, borderColor: '#334e9e', paddingVertical: 6, paddingHorizontal: 4, justifyContent: 'center' },
  hGreen: { backgroundColor: '#15803d', borderColor: '#166534' },
  hBus: { backgroundColor: '#0f172a' },
  hText: { color: '#fff', fontSize: 10.5, fontWeight: '800', textAlign: 'center' },
  cell: { borderWidth: 0.5, borderColor: border, paddingVertical: 4, paddingHorizontal: 5, justifyContent: 'center', minHeight: 28 },
  noBottom: { borderBottomColor: '#e0e7ff' },
  groupTint: { backgroundColor: '#eef2ff' },
  cellText: { fontSize: 11.5, color: colors.text },
  right: { textAlign: 'right' },
  center: { textAlign: 'center' },
  spare: { fontStyle: 'italic', color: colors.textFaint },
  num: { color: colors.textMuted, fontWeight: '700' },
  kvaCell: { backgroundColor: '#ecfdf5' },
  kvaText: { color: '#065f46', fontWeight: '700' },
  busCell: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4, backgroundColor: '#f1f5f9' },
  busDot: { width: 8, height: 8, borderRadius: 4 },
  busText: { fontSize: 11, fontWeight: '800' },
  tcell: { borderWidth: 0.5, borderColor: border, paddingVertical: 5, paddingHorizontal: 6, backgroundColor: '#f1f5f9', justifyContent: 'center' },
  tGreen: { backgroundColor: '#bbf7d0' },
  tText: { fontSize: 11.5, fontWeight: '800', color: '#14532d' },
  hint: { fontSize: 11.5, color: colors.textMuted, marginTop: 6, lineHeight: 16 },
});
