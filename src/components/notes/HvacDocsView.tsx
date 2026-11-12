import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { EquipmentSchedule, HeatLoadSheet } from '../../content/types';
import { colors, radius, spacing } from '../../theme/theme';
import { useLanguage } from '../../lib/language';

const BTU_PER_W = 3.412;
const W_PER_TR = 3517;

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

function InfoBox({ rows, tone = 'grey' }: { rows: [string, string, boolean?][]; tone?: 'grey' | 'orange' | 'blue' }) {
  const box = tone === 'orange' ? styles.sumBox : tone === 'blue' ? styles.blueBox : styles.infoBox;
  const key = tone === 'orange' ? styles.sumKey : tone === 'blue' ? styles.blueKey : styles.infoKey;
  const val = tone === 'orange' ? styles.sumVal : tone === 'blue' ? styles.blueVal : styles.infoVal;
  return (
    <View style={box}>
      {rows.map(([k, v, strong], i) => (
        <View key={i} style={styles.infoRow}>
          <Text style={key}>{k}</Text>
          <Text style={[val, strong && styles.strong]}>{v}</Text>
        </View>
      ))}
    </View>
  );
}

type Col = { key: string; label: string; w: number; group?: 'S' | 'L' | 'T' };

export function HeatLoadSheetView({ sheet }: { sheet: HeatLoadSheet }) {
  const { t } = useLanguage();
  const fmt = useFmt();
  const margin = sheet.margin ?? 0.05;
  const diversity = sheet.diversity ?? 1;

  const rows = sheet.rooms.map((r) => {
    const sens = r.walls + r.glazing + (r.product ?? 0) + r.people + r.lighting + r.equipment + r.air;
    const lat = r.peopleLat + r.airLat + (r.otherLat ?? 0);
    const total = (sens + lat) * (1 + margin);
    return { r, sens, lat, total, wm2: total / r.area, btu: total * BTU_PER_W, ok: r.selectedW === undefined ? undefined : r.selectedW >= total };
  });
  const sum = (f: (x: (typeof rows)[number]) => number) => rows.reduce((a, x) => a + f(x), 0);
  const S = sum((x) => x.sens);
  const L = sum((x) => x.lat);
  const T = sum((x) => x.total);
  const area = sum((x) => x.r.area);
  const plant = T * diversity * (sheet.runHours ? 24 / sheet.runHours : 1);

  const cols: Col[] = [
    { key: 'name', label: t('Local', 'Room'), w: 120 },
    { key: 'area', label: 'm²', w: 46 },
    { key: 'walls', label: t('Murs, toit', 'Walls, roof'), w: 62, group: 'S' },
    { key: 'glazing', label: t('Vitrages', 'Glazing'), w: 62, group: 'S' },
    { key: 'product', label: t('Produits', 'Products'), w: 66, group: 'S' },
    { key: 'people', label: t('Occupants', 'People'), w: 66, group: 'S' },
    { key: 'lighting', label: t('Éclairage', 'Lighting'), w: 62, group: 'S' },
    { key: 'equipment', label: t('Équip.', 'Equip.'), w: 56, group: 'S' },
    { key: 'air', label: t('Air neuf', 'Fresh air'), w: 58, group: 'S' },
    { key: 'peopleLat', label: t('Occupants', 'People'), w: 66, group: 'L' },
    { key: 'airLat', label: t('Air neuf', 'Fresh air'), w: 58, group: 'L' },
    { key: 'otherLat', label: t('Autres', 'Other'), w: 52, group: 'L' },
    { key: 'sens', label: t('Σ sensible', 'Σ sensible'), w: 70, group: 'T' },
    { key: 'lat', label: t('Σ latent', 'Σ latent'), w: 62, group: 'T' },
    { key: 'total', label: t(`Total +${Math.round(margin * 100)} %`, `Total +${Math.round(margin * 100)} %`), w: 76, group: 'T' },
    { key: 'wm2', label: 'W/m²', w: 50, group: 'T' },
    { key: 'btu', label: 'BTU/h', w: 70, group: 'T' },
    { key: 'sel', label: t('Appareil retenu', 'Unit selected'), w: 150 },
  ];
  const optional = ['glazing', 'product', 'otherLat'];
  const shown = cols.filter((c) => !optional.includes(c.key) || sheet.rooms.some((r) => ((r as any)[c.key] ?? 0) > 0));
  cols.splice(0, cols.length, ...shown);
  const groupLabel = { S: t('Apports sensibles (W)', 'Sensible gains (W)'), L: t('Latents (W)', 'Latent (W)'), T: t('Totaux', 'Totals') };
  const groups: { g?: 'S' | 'L' | 'T'; w: number }[] = [];
  for (const c of cols) {
    const last = groups[groups.length - 1];
    if (last && last.g === c.group) last.w += c.w;
    else groups.push({ g: c.group, w: c.w });
  }
  const cellStyle = (c: Col) => [styles.cell, { width: c.w }, c.group === 'S' && styles.sensCell, c.group === 'L' && styles.latCell, c.group === 'T' && styles.totCell];
  const value = (x: (typeof rows)[number], c: Col): string => {
    const r = x.r as any;
    switch (c.key) {
      case 'name':
        return x.r.name;
      case 'area':
        return fmt(x.r.area, 0);
      case 'sens':
        return fmt(x.sens);
      case 'lat':
        return fmt(x.lat);
      case 'total':
        return fmt(x.total);
      case 'wm2':
        return fmt(x.wm2);
      case 'btu':
        return fmt(x.btu);
      case 'sel':
        return x.r.selected ? `${x.r.selected}${x.ok === undefined ? '' : x.ok ? ' ✓' : ' ✗'}` : '';
      default:
        return r[c.key] ? fmt(r[c.key]) : '–';
    }
  };
  const totalValue = (c: Col): string => {
    switch (c.key) {
      case 'name':
        return t('Total', 'Total');
      case 'area':
        return fmt(area);
      case 'sens':
        return fmt(S);
      case 'lat':
        return fmt(L);
      case 'total':
        return fmt(T);
      case 'wm2':
        return fmt(T / area);
      case 'btu':
        return fmt(T * BTU_PER_W);
      case 'sel':
        return '';
      default:
        return fmt(sum((x) => ((x.r as any)[c.key] ?? 0) as number));
    }
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>🌡️ {t('Feuille de bilan thermique', 'Heat load sheet')} — {sheet.project}</Text>
      <View style={styles.topRow}>
        <InfoBox
          rows={[
            [t('Projet', 'Project'), sheet.project],
            [t('Lieu', 'Location'), sheet.location],
            [t('Base extérieure', 'Outdoor design'), sheet.outdoor],
            [t('Consigne intérieure', 'Indoor design'), sheet.indoor],
            ...(sheet.peakHour ? ([[t('Heure de pointe', 'Peak hour'), sheet.peakHour]] as [string, string][]) : []),
          ]}
        />
        <InfoBox
          tone="orange"
          rows={[
            [t('Sensible', 'Sensible'), `${fmt(S)} W`],
            [t('Latent', 'Latent'), `${fmt(L)} W`],
            [t('Facteur de chaleur sensible (SHR)', 'Sensible heat ratio (SHR)'), fmt(S / (S + L), 2)],
            [t(`Total avec ${Math.round(margin * 100)} % de marge`, `Total with ${Math.round(margin * 100)} % margin`), `${fmt(T / 1000, 1)} kW`, true],
            [t('Ratio moyen', 'Average ratio'), `${fmt(T / area)} W/m²`],
            ...(sheet.runHours
              ? ([[t(`Production (marche ${sheet.runHours} h/24)`, `Plant (running ${sheet.runHours} h/24)`), `${fmt(plant / 1000, 1)} kW`, true]] as [string, string, boolean][])
              : []),
            ...(diversity !== 1
              ? ([[t(`Production (foisonnement ${fmt(diversity, 2)})`, `Plant (diversity ${fmt(diversity, 2)})`), `${fmt(plant / 1000, 1)} kW`, true]] as [string, string, boolean][])
              : []),
            [t('En BTU/h', 'In BTU/h'), fmt(plant * BTU_PER_W)],
            [t('En tonnes de réfrigération', 'In tons of refrigeration'), `${fmt(plant / W_PER_TR, 1)} TR`, true],
          ]}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator contentContainerStyle={styles.scroll}>
        <View>
          <View style={styles.row}>
            {groups.map((g, i) => (
              <View key={i} style={[styles.gcell, { width: g.w }, g.g === 'S' && styles.gSens, g.g === 'L' && styles.gLat, g.g === 'T' && styles.gTot]}>
                <Text style={styles.hText}>{g.g ? groupLabel[g.g] : ''}</Text>
              </View>
            ))}
          </View>
          <View style={styles.row}>
            {cols.map((c) => (
              <View key={c.key} style={[styles.hcell, { width: c.w }]}>
                <Text style={styles.hText}>{c.label}</Text>
              </View>
            ))}
          </View>
          {rows.map((x, i) => (
            <View key={i} style={[styles.row, i % 2 === 1 && styles.rowAlt]}>
              {cols.map((c) => (
                <View key={c.key} style={cellStyle(c)}>
                  <Text
                    style={[
                      styles.cellText,
                      c.key !== 'name' && c.key !== 'sel' && styles.right,
                      (c.key === 'total' || c.key === 'btu') && styles.bold,
                      c.key === 'sel' && x.ok === false && styles.bad,
                    ]}
                    numberOfLines={2}
                  >
                    {value(x, c)}
                  </Text>
                </View>
              ))}
            </View>
          ))}
          <View style={styles.row}>
            {cols.map((c) => (
              <View key={c.key} style={[styles.tcell, { width: c.w }]}>
                <Text style={[styles.tText, c.key !== 'name' && styles.right]}>{totalValue(c)}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <Text style={styles.hint}>
        {t(
          `Chaque ligne additionne les apports d’un local à l’heure de pointe ; le total inclut une marge de ${Math.round(margin * 100)} %. 1 W = 3,412 BTU/h ; 1 TR = 3,517 kW. Faites défiler horizontalement.`,
          `Each row adds up a room’s gains at the peak hour; the total includes a ${Math.round(margin * 100)} % margin. 1 W = 3.412 BTU/h; 1 TR = 3.517 kW. Scroll sideways.`,
        )}
      </Text>
    </View>
  );
}

export function EquipmentScheduleView({ schedule }: { schedule: EquipmentSchedule }) {
  const { t } = useLanguage();
  const fmt = useFmt();
  const cols: { key: string; label: string; w: number; num?: boolean }[] = [
    { key: 'tag', label: t('Repère', 'Tag'), w: 62 },
    { key: 'location', label: t('Emplacement', 'Location'), w: 120 },
    { key: 'type', label: t('Type', 'Type'), w: 140 },
    { key: 'cooling', label: t('Froid (kW)', 'Cooling (kW)'), w: 70, num: true },
    { key: 'btu', label: 'BTU/h', w: 70, num: true },
    { key: 'airflow', label: t('Débit d’air (m³/h)', 'Airflow (m³/h)'), w: 76, num: true },
    { key: 'refrigerant', label: t('Fluide', 'Refrigerant'), w: 62 },
    { key: 'supply', label: t('Alimentation', 'Supply'), w: 84 },
    { key: 'power', label: t('P abs. (kW)', 'Input (kW)'), w: 66, num: true },
    { key: 'eer', label: 'EER', w: 46, num: true },
    { key: 'current', label: t('I (A)', 'I (A)'), w: 52, num: true },
    { key: 'protection', label: t('Protection', 'Protection'), w: 92 },
    { key: 'note', label: t('Remarque', 'Remark'), w: 150 },
  ];
  const sumCool = schedule.rows.reduce((a, r) => a + r.cooling, 0);
  const sumPow = schedule.rows.reduce((a, r) => a + r.power, 0);
  const val = (r: (typeof schedule.rows)[number], key: string): string => {
    switch (key) {
      case 'cooling':
        return r.cooling ? fmt(r.cooling, r.cooling < 20 ? 2 : 1) : '–';
      case 'btu':
        return r.cooling ? fmt(r.cooling * 1000 * BTU_PER_W) : '–';
      case 'airflow':
        return r.airflow ? fmt(r.airflow) : '–';
      case 'power':
        return fmt(r.power, 2);
      case 'eer':
        return r.cooling && r.power ? fmt(r.cooling / r.power, 1) : '–';
      case 'current':
        return r.current ? fmt(r.current, 1) : '–';
      default:
        return ((r as any)[key] as string) ?? '';
    }
  };
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>🧾 {t('Liste des équipements', 'Equipment schedule')} — {schedule.title}</Text>
      <View style={styles.topRow}>
        <InfoBox
          rows={[
            [t('Projet', 'Project'), schedule.project],
            ...(schedule.conditions ? ([[t('Conditions de sélection', 'Rating conditions'), schedule.conditions]] as [string, string][]) : []),
            [t('Nombre d’appareils', 'Number of units'), String(schedule.rows.length)],
          ]}
        />
        <InfoBox
          tone="blue"
          rows={[
            [t('Puissance frigorifique totale', 'Total cooling capacity'), `${fmt(sumCool, 1)} kW`, true],
            [t('Soit', 'That is'), `${fmt(sumCool * 1000 * BTU_PER_W)} BTU/h · ${fmt((sumCool * 1000) / W_PER_TR, 1)} TR`],
            [t('Puissance électrique absorbée', 'Electrical input'), `${fmt(sumPow, 1)} kW`, true],
            [t('EER moyen de l’installation', 'Average EER of the plant'), fmt(sumCool / sumPow, 2)],
          ]}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator contentContainerStyle={styles.scroll}>
        <View>
          <View style={styles.row}>
            {cols.map((c) => (
              <View key={c.key} style={[styles.hcell, styles.hBlue, { width: c.w }]}>
                <Text style={styles.hText}>{c.label}</Text>
              </View>
            ))}
          </View>
          {schedule.rows.map((r, i) => (
            <View key={i} style={[styles.row, i % 2 === 1 && styles.rowAlt]}>
              {cols.map((c) => (
                <View key={c.key} style={[styles.cell, { width: c.w }, (c.key === 'cooling' || c.key === 'btu') && styles.coolCell, c.key === 'power' && styles.powCell]}>
                  <Text style={[styles.cellText, c.num && styles.right, c.key === 'tag' && styles.bold]} numberOfLines={2}>
                    {val(r, c.key)}
                  </Text>
                </View>
              ))}
            </View>
          ))}
          <View style={styles.row}>
            {cols.map((c) => (
              <View key={c.key} style={[styles.tcell, styles.tBlue, { width: c.w }]}>
                <Text style={[styles.tText, styles.tBlueText, c.num && styles.right]}>
                  {c.key === 'tag'
                    ? t('Total', 'Total')
                    : c.key === 'cooling'
                      ? fmt(sumCool, 1)
                      : c.key === 'btu'
                        ? fmt(sumCool * 1000 * BTU_PER_W)
                        : c.key === 'power'
                          ? fmt(sumPow, 2)
                          : c.key === 'eer'
                            ? fmt(sumCool / sumPow, 1)
                            : ''}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <Text style={styles.hint}>
        {t(
          'EER = puissance frigorifique ÷ puissance électrique absorbée, aux conditions de sélection. Les courants et protections sont transmis à l’ingénieur électricien pour ses circuits.',
          'EER = cooling capacity ÷ electrical input, at rating conditions. Currents and protections are passed to the electrical engineer for her circuits.',
        )}
      </Text>
    </View>
  );
}

const border = '#cbd5e1';
const styles = StyleSheet.create({
  wrap: { backgroundColor: colors.surface, borderRadius: radius.sm, borderWidth: 1, borderColor: colors.border, padding: spacing.md, marginBottom: spacing.md },
  title: { fontSize: 13, fontWeight: '800', color: colors.accent, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.3 },
  topRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 10 },
  infoBox: { flexGrow: 1, flexBasis: 260, borderWidth: 1, borderColor: border, borderRadius: 6, padding: 8, backgroundColor: '#f8fafc' },
  sumBox: { flexGrow: 1, flexBasis: 240, borderWidth: 1, borderColor: '#fdba74', borderRadius: 6, padding: 8, backgroundColor: '#fff7ed' },
  blueBox: { flexGrow: 1, flexBasis: 240, borderWidth: 1, borderColor: '#93c5fd', borderRadius: 6, padding: 8, backgroundColor: '#eff6ff' },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 10, paddingVertical: 2 },
  infoKey: { fontSize: 12, color: colors.textMuted, flexShrink: 1 },
  infoVal: { fontSize: 12, color: colors.text, fontWeight: '700', textAlign: 'right', flexShrink: 1 },
  sumKey: { fontSize: 12, color: '#9a3412', flexShrink: 1 },
  sumVal: { fontSize: 12, color: '#7c2d12', fontWeight: '600', textAlign: 'right' },
  blueKey: { fontSize: 12, color: '#1e40af', flexShrink: 1 },
  blueVal: { fontSize: 12, color: '#1e3a8a', fontWeight: '600', textAlign: 'right' },
  strong: { fontWeight: '800' },
  scroll: { paddingBottom: 6 },
  row: { flexDirection: 'row' },
  rowAlt: { backgroundColor: '#f8fafc' },
  gcell: { backgroundColor: '#334155', borderWidth: 0.5, borderColor: '#1e293b', paddingVertical: 4, justifyContent: 'center' },
  gSens: { backgroundColor: '#c2410c', borderColor: '#9a3412' },
  gLat: { backgroundColor: '#1d4ed8', borderColor: '#1e40af' },
  gTot: { backgroundColor: '#15803d', borderColor: '#166534' },
  hcell: { backgroundColor: colors.accent, borderWidth: 0.5, borderColor: '#334e9e', paddingVertical: 6, paddingHorizontal: 4, justifyContent: 'center' },
  hBlue: { backgroundColor: '#0f4c81', borderColor: '#0b3a63' },
  hText: { color: '#fff', fontSize: 10.5, fontWeight: '800', textAlign: 'center' },
  cell: { borderWidth: 0.5, borderColor: border, paddingVertical: 4, paddingHorizontal: 5, justifyContent: 'center', minHeight: 30 },
  sensCell: { backgroundColor: '#fff7ed' },
  latCell: { backgroundColor: '#eff6ff' },
  totCell: { backgroundColor: '#ecfdf5' },
  coolCell: { backgroundColor: '#eff6ff' },
  powCell: { backgroundColor: '#fefce8' },
  cellText: { fontSize: 11.5, color: colors.text },
  right: { textAlign: 'right' },
  bold: { fontWeight: '800' },
  bad: { color: '#b91c1c', fontWeight: '800' },
  tcell: { borderWidth: 0.5, borderColor: border, paddingVertical: 5, paddingHorizontal: 5, backgroundColor: '#bbf7d0', justifyContent: 'center' },
  tText: { fontSize: 11.5, fontWeight: '800', color: '#14532d' },
  tBlue: { backgroundColor: '#bfdbfe' },
  tBlueText: { color: '#1e3a8a' },
  hint: { fontSize: 11.5, color: colors.textMuted, marginTop: 6, lineHeight: 16 },
});
