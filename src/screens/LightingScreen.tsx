import React, { useMemo } from 'react';
import { isPrime, LAMP_TYPES, ROOM_LUX } from '../data/lighting';
import { usePersistedField } from '../lib/storage';
import { useSnapshots } from '../lib/useSnapshots';
import { useLanguage } from '../lib/language';
import SavedCalculations from '../components/SavedCalculations';
import {
  Card,
  Chip,
  ChipRow,
  Divider,
  ExportButton,
  FieldLabel,
  FieldRow,
  Formula,
  LabeledField,
  Note,
  ReferenceImage,
  ResultRow,
  ScreenContainer,
  Subtitle,
  TextField,
  Title,
} from '../components/ui';

type LightingState = {
  length: string;
  width: string;
  lux: string;
  lampName: string;
  wattsPerLamp: string;
  lampsPerLuminaire: string;
  uf: string;
  mf: string;
};

const DEFAULT_STATE: LightingState = {
  length: '10',
  width: '10',
  lux: '500',
  lampName: LAMP_TYPES[5].name,
  wattsPerLamp: '40',
  lampsPerLuminaire: '4',
  uf: '0.5',
  mf: '0.8',
};

export default function LightingScreen() {
  const [state, setState] = usePersistedField<LightingState>('lighting:current', DEFAULT_STATE);
  const { snapshots, save, remove } = useSnapshots<LightingState>('lighting:snapshots');
  const { lang, t } = useLanguage();
  const locale = lang === 'fr' ? 'fr-FR' : 'en-US';

  const selectedLamp = LAMP_TYPES.find((l) => l.name === state.lampName) ?? LAMP_TYPES[5];
  const selectedLampName = lang === 'fr' ? selectedLamp.name : selectedLamp.nameEn;

  function set<K extends keyof LightingState>(key: K, value: LightingState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  const {
    area,
    luminaireFlux,
    rawN,
    requiredN,
    rows,
    cols,
    placedCount,
    spacingLength,
    spacingWidth,
  } = useMemo(() => {
    const L = parseFloat(state.length.replace(',', '.')) || 0;
    const W = parseFloat(state.width.replace(',', '.')) || 0;
    const E = parseFloat(state.lux.replace(',', '.')) || 0;
    const watts = parseFloat(state.wattsPerLamp.replace(',', '.')) || 0;
    const lampsCount = parseFloat(state.lampsPerLuminaire.replace(',', '.')) || 1;
    const UF = parseFloat(state.uf.replace(',', '.')) || 0.01;
    const MF = parseFloat(state.mf.replace(',', '.')) || 0.01;

    const A = L * W;
    const F = watts * selectedLamp.lumensPerWatt * lampsCount;
    const raw = F > 0 ? (E * A) / (F * UF * MF) : 0;

    let n = Math.ceil(raw);
    if (n < 1) n = 1;
    while (isPrime(n)) n++;

    const r = L > 0 && W > 0 ? Math.max(1, Math.round(Math.sqrt((n * W) / L))) : 1;
    const c = L > 0 && W > 0 ? Math.max(1, Math.round(Math.sqrt((n * L) / W))) : 1;

    return {
      area: A,
      luminaireFlux: F,
      rawN: raw,
      requiredN: n,
      rows: r,
      cols: c,
      placedCount: r * c,
      spacingLength: c > 0 ? L / c : 0,
      spacingWidth: r > 0 ? W / r : 0,
    };
  }, [state, selectedLamp]);

  return (
    <ScreenContainer>
      <Title>{t("Conception d'éclairage", 'Lighting Design')}</Title>
      <Subtitle>{t('Méthode des lumens : N = (E × A) / (F × UF × MF)', 'Lumen method: N = (E × A) / (F × UF × MF)')}</Subtitle>

      <FieldRow>
        <LabeledField label={t('Longueur pièce (m)', 'Room length (m)')} value={state.length} onChangeText={(v) => set('length', v)} />
        <LabeledField label={t('Largeur pièce (m)', 'Room width (m)')} value={state.width} onChangeText={(v) => set('width', v)} />
      </FieldRow>

      <FieldLabel>{t('Éclairement requis (lux)', 'Required illuminance (lux)')}</FieldLabel>
      <ChipRow>
        {ROOM_LUX.map((r) => (
          <Chip key={r.name} label={`${lang === 'fr' ? r.name : r.nameEn} (${r.lux})`} onPress={() => set('lux', String(r.lux))} />
        ))}
      </ChipRow>
      <TextField value={state.lux} onChangeText={(v) => set('lux', v)} style={{ maxWidth: 140, marginTop: 8 }} />

      <FieldLabel>{t('Type de lampe', 'Lamp type')}</FieldLabel>
      <ChipRow>
        {LAMP_TYPES.map((lamp) => (
          <Chip
            key={lamp.name}
            label={`${lang === 'fr' ? lamp.name : lamp.nameEn} (${lamp.lumensPerWatt} lm/W)`}
            selected={selectedLamp.name === lamp.name}
            onPress={() => set('lampName', lamp.name)}
          />
        ))}
      </ChipRow>

      <FieldRow>
        <LabeledField label={t('Puissance par lampe (W)', 'Power per lamp (W)')} value={state.wattsPerLamp} onChangeText={(v) => set('wattsPerLamp', v)} />
        <LabeledField label={t('Lampes par luminaire', 'Lamps per luminaire')} value={state.lampsPerLuminaire} onChangeText={(v) => set('lampsPerLuminaire', v)} />
      </FieldRow>

      <FieldRow>
        <LabeledField label="UF (0.4 – 0.6)" value={state.uf} onChangeText={(v) => set('uf', v)} />
        <LabeledField label="MF (0.4 – 0.8)" value={state.mf} onChangeText={(v) => set('mf', v)} />
      </FieldRow>

      <Card>
        <Formula>
          {t('Flux par luminaire (F) =', 'Luminaire flux (F) =')} {state.wattsPerLamp}W × {selectedLamp.lumensPerWatt} lm/W × {state.lampsPerLuminaire} = {luminaireFlux.toLocaleString(locale, { maximumFractionDigits: 0 })} lm
        </Formula>
        <Formula>
          {t('N brut', 'Raw N')} = ({state.lux} × {area.toLocaleString(locale)}) / ({luminaireFlux.toLocaleString(locale, { maximumFractionDigits: 0 })} × {state.uf} × {state.mf}) = {rawN.toLocaleString(locale, { maximumFractionDigits: 1 })}
        </Formula>

        <Divider />

        <ResultRow label={t('N requis (non premier)', 'Required N (not prime)')} value={String(requiredN)} />
        <ResultRow label={t('Disposition en grille', 'Grid layout')} value={`${rows} × ${cols} (${placedCount} ${t('luminaires', 'luminaires')})`} variant="accent" />
        <ResultRow
          label={t('Espacement (longueur × largeur)', 'Spacing (length × width)')}
          value={`${spacingLength.toLocaleString(locale, { maximumFractionDigits: 2 })} m × ${spacingWidth.toLocaleString(locale, { maximumFractionDigits: 2 })} m`}
        />
        <Note>
          {t(
            "⚠️ Décalage du premier alignement par rapport aux murs = moitié de l'espacement. Ratio espacement/hauteur (SHR) ≈ 0.5, jamais supérieur à 1.",
            '⚠️ Offset of the first row from the walls = half the spacing. Spacing-to-height ratio (SHR) ≈ 0.5, never above 1.'
          )}
        </Note>
      </Card>

      <FieldLabel>{t('Tables de référence', 'Reference tables')}</FieldLabel>
      <ReferenceImage
        source={require('../../assets/reference/iecc_2021_table.png')}
        caption={t("IECC 2021 — Niveaux d'éclairement par type de pièce", 'IECC 2021 — Illuminance levels by room type')}
        height={280}
      />
      <ReferenceImage
        source={require('../../assets/reference/polar_curve.png')}
        caption={t('Exemples de courbes polaires de luminaires', 'Examples of luminaire polar curves')}
        height={260}
      />

      <ExportButton
        title={t("Conception d'éclairage", 'Lighting Design')}
        subtitle={`${t('Pièce', 'Room')} ${state.length} × ${state.width} m`}
        sections={[
          {
            heading: t('Paramètres', 'Parameters'),
            rows: [
              { label: t('Éclairement requis', 'Required illuminance'), value: `${state.lux} lux` },
              { label: t('Type de lampe', 'Lamp type'), value: selectedLampName },
              { label: t('Flux par luminaire (F)', 'Luminaire flux (F)'), value: `${luminaireFlux.toLocaleString(locale, { maximumFractionDigits: 0 })} lm` },
              { label: 'UF / MF', value: `${state.uf} / ${state.mf}` },
            ],
          },
          {
            heading: t('Résultats', 'Results'),
            rows: [
              { label: t('N requis', 'Required N'), value: String(requiredN) },
              { label: t('Disposition en grille', 'Grid layout'), value: `${rows} × ${cols} (${placedCount} ${t('luminaires', 'luminaires')})` },
              { label: t('Espacement', 'Spacing'), value: `${spacingLength.toLocaleString(locale, { maximumFractionDigits: 2 })} × ${spacingWidth.toLocaleString(locale, { maximumFractionDigits: 2 })} m` },
            ],
          },
        ]}
      />

      <SavedCalculations snapshots={snapshots} onSave={(name) => save(name, state)} onLoad={(data) => setState(data)} onRemove={remove} />
    </ScreenContainer>
  );
}
