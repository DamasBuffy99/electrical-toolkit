import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ConsumptionSheet, SolarEquipmentList, StringSheet } from '../../content/types';
import { colors, radius, spacing } from '../../theme/theme';
import { useLanguage } from '../../lib/language';

function useFmt() {
  const { lang } = useLanguage();
  return (n: number, d = 0) => {
    const s = (n + (n >= 0 ? 1e-9 : -1e-9)).toFixed(d);
    const [int, dec] = s.split('.');
    const sep = lang === 'fr' ? ' ' : ',';
    const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
    return dec ? `${grouped}${lang === 'fr' ? ',' : '.'}${dec}` : grouped;
  };
}

type Tone = 'grey' | 'sun' | 'green';
function InfoBox({ rows, tone = 'grey' }: { rows: [string, string, boolean?][]; tone?: Tone }) {
  return (
    <View style={[styles.box, tone === 'sun' && styles.sunBox, tone === 'green' && styles.greenBox]}>
      {rows.map(([k, v, strong], i) => (
        <View key={i} style={styles.infoRow}>
          <Text style={[styles.key, tone === 'sun' && styles.sunKey, tone === 'green' && styles.greenKey]}>{k}</Text>
          <Text style={[styles.val, strong && styles.strong]}>{v}</Text>
        </View>
      ))}
    </View>
  );
}

function Grid({ cols, rows, total, headStyle }: { cols: { label: string; w: number; num?: boolean; tint?: object }[]; rows: (string | { v: string; bad?: boolean; good?: boolean })[][]; total?: string[]; headStyle?: object }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator contentContainerStyle={styles.scroll}>
      <View>
        <View style={styles.row}>
          {cols.map((c, i) => (
            <View key={i} style={[styles.hcell, headStyle, { width: c.w }]}>
              <Text style={styles.hText}>{c.label}</Text>
            </View>
          ))}
        </View>
        {rows.map((r, ri) => (
          <View key={ri} style={[styles.row, ri % 2 === 1 && styles.rowAlt]}>
            {r.map((cell, ci) => {
              const v = typeof cell === 'string' ? cell : cell.v;
              const bad = typeof cell !== 'string' && cell.bad;
              const good = typeof cell !== 'string' && cell.good;
              return (
                <View key={ci} style={[styles.cell, { width: cols[ci].w }, cols[ci].tint]}>
                  <Text style={[styles.cellText, cols[ci].num && styles.right, bad && styles.bad, good && styles.good]} numberOfLines={2}>
                    {v}
                  </Text>
                </View>
              );
            })}
          </View>
        ))}
        {total ? (
          <View style={styles.row}>
            {total.map((v, i) => (
              <View key={i} style={[styles.tcell, { width: cols[i].w }]}>
                <Text style={[styles.tText, cols[i].num && styles.right]}>{v}</Text>
              </View>
            ))}
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
}

export function ConsumptionSheetView({ sheet }: { sheet: ConsumptionSheet }) {
  const { t } = useLanguage();
  const fmt = useFmt();
  const simult = sheet.simultaneity ?? 1;
  const it = sheet.items.map((i) => {
    const ptot = i.power * i.qty;
    return { i, ptot, eDay: ptot * i.hDay, eNight: ptot * i.hNight };
  });
  const sum = (f: (x: (typeof it)[number]) => number, only?: (x: (typeof it)[number]) => boolean) => it.filter(only ?? (() => true)).reduce((a, x) => a + f(x), 0);
  const pInst = sum((x) => x.ptot);
  const eDay = sum((x) => x.eDay);
  const eNight = sum((x) => x.eNight);
  const eTot = eDay + eNight;
  const hasBackup = sheet.items.some((i) => i.backup);
  const surgeItem = it.reduce<(typeof it)[number] | undefined>((m, x) => ((x.i.surge ?? 0) > (m?.i.surge ?? 0) ? x : m), undefined);
  const cols = [
    { label: t('Appareil', 'Appliance'), w: 160 },
    { label: 'P (W)', w: 58, num: true },
    { label: t('Qté', 'Qty'), w: 40, num: true },
    { label: t('P tot. (W)', 'P tot. (W)'), w: 66, num: true },
    { label: t('h jour', 'h day'), w: 50, num: true, tint: styles.dayCell },
    { label: t('h nuit', 'h night'), w: 50, num: true, tint: styles.nightCell },
    { label: t('Wh jour', 'Wh day'), w: 66, num: true, tint: styles.dayCell },
    { label: t('Wh nuit', 'Wh night'), w: 66, num: true, tint: styles.nightCell },
    { label: t('Wh/jour', 'Wh/day'), w: 70, num: true, tint: styles.totCell },
    { label: t('Appel (W)', 'Surge (W)'), w: 64, num: true },
    ...(hasBackup ? [{ label: t('Secouru', 'Backed up'), w: 62 }] : []),
  ];
  const rows = it.map((x) => [
    x.i.name,
    fmt(x.i.power),
    String(x.i.qty),
    fmt(x.ptot),
    x.i.hDay ? fmt(x.i.hDay, x.i.hDay % 1 ? 1 : 0) : '–',
    x.i.hNight ? fmt(x.i.hNight, x.i.hNight % 1 ? 1 : 0) : '–',
    x.eDay ? fmt(x.eDay) : '–',
    x.eNight ? fmt(x.eNight) : '–',
    fmt(x.eDay + x.eNight),
    x.i.surge ? fmt(x.i.surge) : '–',
    ...(hasBackup ? [x.i.backup ? '✓' : ''] : []),
  ]);
  const total = [t('Total', 'Total'), '', '', fmt(pInst), '', '', fmt(eDay), fmt(eNight), fmt(eTot), '', ...(hasBackup ? [''] : [])];
  const summary: [string, string, boolean?][] = [
    [t('Puissance installée', 'Installed power'), `${fmt(pInst)} W`],
    [t(`Pointe simultanée (× ${fmt(simult, 2)})`, `Simultaneous peak (× ${fmt(simult, 2)})`), `${fmt(pInst * simult)} W`, true],
    ...(surgeItem?.i.surge ? ([[t('Plus gros appel au démarrage', 'Largest starting surge'), `${fmt(surgeItem.i.surge)} W (${surgeItem.i.name})`]] as [string, string][]) : []),
    [t('Énergie de jour (soleil)', 'Daytime energy (sun)'), `${fmt(eDay)} Wh`],
    [t('Énergie de nuit (batterie)', 'Night-time energy (battery)'), `${fmt(eNight)} Wh`],
    [t('Énergie par jour', 'Energy per day'), `${fmt(eTot / 1000, 2)} kWh`, true],
    ...(hasBackup
      ? ([[t('Dont circuits secourus', 'Of which backed-up circuits'), `${fmt(sum((x) => x.eDay + x.eNight, (x) => !!x.i.backup) / 1000, 2)} kWh · ${fmt(sum((x) => x.ptot, (x) => !!x.i.backup))} W`]] as [string, string][])
      : []),
  ];
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>🔆 {t('Bilan de consommation', 'Load and energy balance')} — {sheet.project}</Text>
      <View style={styles.topRow}>
        <InfoBox tone="sun" rows={summary} />
      </View>
      <Grid cols={cols} rows={rows} total={total} headStyle={styles.hSun} />
      <Text style={styles.hint}>
        {sheet.note ??
          t(
            'Wh/jour = puissance × quantité × heures d’utilisation. L’énergie de nuit devra être stockée ; la pointe et le plus gros appel dimensionnent l’onduleur. Faites défiler horizontalement.',
            'Wh/day = power × quantity × hours of use. Night-time energy must be stored; the peak and the largest surge size the inverter. Scroll sideways.',
          )}
      </Text>
    </View>
  );
}

export function StringSheetView({ sheet }: { sheet: StringSheet }) {
  const { t } = useLanguage();
  const fmt = useFmt();
  const m = sheet.module;
  const inv = sheet.inverter;
  const kV = (temp: number, coef: number) => 1 + (coef / 100) * (temp - 25);
  const vocCold1 = m.voc * kV(sheet.tMin, m.betaVoc);
  const vmpHot1 = m.vmp * kV(sheet.tCellMax, m.gammaPmax);
  const vmpCold1 = m.vmp * kV(sheet.tMin, m.gammaPmax);
  const rows = sheet.strings.map((s) => {
    const vocC = s.series * vocCold1;
    const vmpH = s.series * vmpHot1;
    const vmpC = s.series * vmpCold1;
    const imp = s.parallel * m.imp;
    const isc = s.parallel * m.isc;
    const kwp = (s.series * s.parallel * m.pmax) / 1000;
    const ok = [vocC <= inv.vmaxDc, vmpH >= inv.mpptMin, vmpC <= inv.mpptMax, imp <= inv.imaxMppt, isc <= inv.iscMaxMppt];
    return { s, vocC, vmpH, vmpC, imp, isc, kwp, ok };
  });
  const kwpTot = rows.reduce((a, r) => a + r.kwp, 0) * (inv.count ?? 1);
  const pacTot = inv.pac * (inv.count ?? 1);
  const allOk = rows.every((r) => r.ok.every(Boolean));
  const cell = (v: string, good: boolean) => ({ v: `${v} ${good ? '✓' : '✗'}`, good, bad: !good });
  const cols = [
    { label: 'MPPT', w: 70 },
    { label: t('Série', 'Series'), w: 50, num: true },
    { label: t('Parallèle', 'Parallel'), w: 62, num: true },
    { label: t('Modules', 'Modules'), w: 62, num: true },
    { label: 'kWc', w: 54, num: true },
    { label: t(`Voc à ${sheet.tMin} °C`, `Voc at ${sheet.tMin} °C`), w: 92, num: true },
    { label: t(`Vmp à ${sheet.tCellMax} °C`, `Vmp at ${sheet.tCellMax} °C`), w: 92, num: true },
    { label: t(`Vmp à ${sheet.tMin} °C`, `Vmp at ${sheet.tMin} °C`), w: 92, num: true },
    { label: 'Imp (A)', w: 74, num: true },
    { label: 'Isc (A)', w: 74, num: true },
  ];
  const data = rows.map((r) => [
    r.s.mppt,
    String(r.s.series),
    String(r.s.parallel),
    String(r.s.series * r.s.parallel),
    fmt(r.kwp, 2),
    cell(`${fmt(r.vocC)} V`, r.ok[0]),
    cell(`${fmt(r.vmpH)} V`, r.ok[1]),
    cell(`${fmt(r.vmpC)} V`, r.ok[2]),
    cell(fmt(r.imp, 1), r.ok[3]),
    cell(fmt(r.isc, 1), r.ok[4]),
  ]);
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>🧮 {t('Note de calcul des chaînes', 'String sizing note')} — {sheet.project}</Text>
      <View style={styles.topRow}>
        <InfoBox
          rows={[
            [t('Module', 'Module'), m.name],
            ['Pmax · Voc · Vmp', `${m.pmax} W · ${fmt(m.voc, 1)} V · ${fmt(m.vmp, 1)} V`],
            ['Isc · Imp', `${fmt(m.isc, 2)} A · ${fmt(m.imp, 2)} A`],
            [t('Coefficients', 'Coefficients'), `β(Voc) ${fmt(m.betaVoc, 2)} %/K · γ(P) ${fmt(m.gammaPmax, 2)} %/K`],
            [t('Températures de calcul', 'Design temperatures'), t(`${sheet.tMin} °C (aube) · ${sheet.tCellMax} °C (cellules)`, `${sheet.tMin} °C (dawn) · ${sheet.tCellMax} °C (cells)`)],
          ]}
        />
        <InfoBox
          tone="green"
          rows={[
            [t('Onduleur / régulateur', 'Inverter / controller'), `${inv.count && inv.count > 1 ? `${inv.count} × ` : ''}${inv.name}`],
            [t('Tension DC maximale', 'Maximum DC voltage'), `${fmt(inv.vmaxDc)} V`],
            [t('Plage MPPT', 'MPPT range'), `${fmt(inv.mpptMin)} – ${fmt(inv.mpptMax)} V`],
            [t('Courant max par MPPT (Imp / Isc)', 'Max current per MPPT (Imp / Isc)'), `${fmt(inv.imaxMppt)} / ${fmt(inv.iscMaxMppt)} A`],
            [t('Puissance crête installée', 'Installed peak power'), `${fmt(kwpTot, 2)} kWc`, true],
            [t('Ratio DC/AC', 'DC/AC ratio'), fmt(kwpTot / pacTot, 2), true],
            [t('Vérifications', 'Checks'), allOk ? t('toutes conformes ✓', 'all compliant ✓') : t('à reprendre ✗', 'to be revised ✗'), true],
          ]}
        />
      </View>
      <Grid cols={cols} rows={data} headStyle={styles.hGreen} />
      <Text style={styles.hint}>
        {t(
          'Voc à froid ≤ tension maximale (sinon destruction) ; Vmp à chaud ≥ seuil MPPT bas (sinon perte de production l’après-midi) ; Vmp à froid ≤ seuil MPPT haut ; courants ≤ limites de l’entrée. Vmp corrigé avec le coefficient de puissance, approximation usuelle.',
          'Cold Voc ≤ maximum voltage (or the device is destroyed); hot Vmp ≥ lower MPPT limit (or production is lost in the afternoon); cold Vmp ≤ upper MPPT limit; currents ≤ input limits. Vmp corrected with the power coefficient, a usual approximation.',
        )}
      </Text>
    </View>
  );
}

export function SolarEquipmentView({ list }: { list: SolarEquipmentList }) {
  const { t } = useLanguage();
  const fmt = useFmt();
  const kwp = list.rows.reduce((a, r) => a + (r.kwp ?? 0), 0);
  const kw = list.rows.reduce((a, r) => a + (r.kw ?? 0), 0);
  const kwh = list.rows.reduce((a, r) => a + (r.kwh ?? 0), 0);
  const cols = [
    { label: t('Repère', 'Tag'), w: 62 },
    { label: t('Équipement', 'Equipment'), w: 190 },
    { label: t('Qté', 'Qty'), w: 40, num: true },
    { label: t('Caractéristique', 'Rating'), w: 120 },
    { label: t('Données', 'Data'), w: 170 },
    { label: t('Protection', 'Protection'), w: 130 },
    { label: t('Remarque', 'Remark'), w: 170 },
  ];
  const rows = list.rows.map((r) => [r.tag, r.item, String(r.qty), r.rating, r.data ?? '', r.protection ?? '', r.note ?? '']);
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>🧾 {t('Liste des équipements', 'Equipment list')} — {list.title}</Text>
      <View style={styles.topRow}>
        <InfoBox
          tone="green"
          rows={[
            [t('Projet', 'Project'), list.project],
            ...(kwp ? ([[t('Champ photovoltaïque', 'PV array'), `${fmt(kwp, 2)} kWc`, true]] as [string, string, boolean][]) : []),
            ...(kw ? ([[t('Onduleurs', 'Inverters'), `${fmt(kw, 1)} kW AC`]] as [string, string][]) : []),
            ...(kwp && kw ? ([[t('Ratio DC/AC', 'DC/AC ratio'), fmt(kwp / kw, 2)]] as [string, string][]) : []),
            ...(kwh ? ([[t('Stockage', 'Storage'), `${fmt(kwh, 1)} kWh`, true]] as [string, string, boolean][]) : []),
          ]}
        />
      </View>
      <Grid cols={cols} rows={rows} headStyle={styles.hGreen} />
    </View>
  );
}

const border = '#cbd5e1';
const styles = StyleSheet.create({
  wrap: { backgroundColor: colors.surface, borderRadius: radius.sm, borderWidth: 1, borderColor: colors.border, padding: spacing.md, marginBottom: spacing.md },
  title: { fontSize: 13, fontWeight: '800', color: colors.accent, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.3 },
  topRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 10 },
  box: { flexGrow: 1, flexBasis: 260, borderWidth: 1, borderColor: border, borderRadius: 6, padding: 8, backgroundColor: '#f8fafc' },
  sunBox: { borderColor: '#fcd34d', backgroundColor: '#fffbeb' },
  greenBox: { borderColor: '#86efac', backgroundColor: '#f0fdf4' },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 10, paddingVertical: 2 },
  key: { fontSize: 12, color: colors.textMuted, flexShrink: 1 },
  sunKey: { color: '#92400e' },
  greenKey: { color: '#166534' },
  val: { fontSize: 12, color: colors.text, fontWeight: '600', textAlign: 'right', flexShrink: 1 },
  strong: { fontWeight: '800' },
  scroll: { paddingBottom: 6 },
  row: { flexDirection: 'row' },
  rowAlt: { backgroundColor: '#f8fafc' },
  hcell: { backgroundColor: colors.accent, borderWidth: 0.5, borderColor: '#334e9e', paddingVertical: 6, paddingHorizontal: 4, justifyContent: 'center' },
  hSun: { backgroundColor: '#b45309', borderColor: '#92400e' },
  hGreen: { backgroundColor: '#166534', borderColor: '#14532d' },
  hText: { color: '#fff', fontSize: 10.5, fontWeight: '800', textAlign: 'center' },
  cell: { borderWidth: 0.5, borderColor: border, paddingVertical: 4, paddingHorizontal: 5, justifyContent: 'center', minHeight: 30 },
  dayCell: { backgroundColor: '#fffbeb' },
  nightCell: { backgroundColor: '#eef2ff' },
  totCell: { backgroundColor: '#ecfdf5' },
  cellText: { fontSize: 11.5, color: colors.text },
  right: { textAlign: 'right' },
  bad: { color: '#b91c1c', fontWeight: '800' },
  good: { color: '#166534', fontWeight: '700' },
  tcell: { borderWidth: 0.5, borderColor: border, paddingVertical: 5, paddingHorizontal: 5, backgroundColor: '#fde68a', justifyContent: 'center' },
  tText: { fontSize: 11.5, fontWeight: '800', color: '#78350f' },
  hint: { fontSize: 11.5, color: colors.textMuted, marginTop: 6, lineHeight: 16 },
});
