import React, { useMemo } from 'react';
import { BUILDING_TYPES, BuildingType, nextStandardTransformer } from '../data/loadEstimation';
import { BUILDING_ICONS } from '../data/buildingIcons';
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
  Title,
} from '../components/ui';

type LoadEstimationState = {
  selectedCode: string;
  area: string;
  vaPerM2: string;
  demandFactor: string;
};

const DEFAULT_STATE: LoadEstimationState = {
  selectedCode: BUILDING_TYPES[0].code,
  area: '4000',
  vaPerM2: String(BUILDING_TYPES[0].vaPerM2),
  demandFactor: String(BUILDING_TYPES[0].demandFactor),
};

export default function LoadEstimationScreen() {
  const [state, setState] = usePersistedField<LoadEstimationState>('loadEstimation:current', DEFAULT_STATE);
  const { snapshots, save, remove } = useSnapshots<LoadEstimationState>('loadEstimation:snapshots');
  const { lang, t } = useLanguage();

  const selected = BUILDING_TYPES.find((b) => b.code === state.selectedCode) ?? BUILDING_TYPES[0];
  const selectedName = lang === 'fr' ? selected.name : selected.nameEn;
  const locale = lang === 'fr' ? 'fr-FR' : 'en-US';

  function selectType(type: BuildingType) {
    setState((prev) => ({
      ...prev,
      selectedCode: type.code,
      vaPerM2: String(type.vaPerM2),
      demandFactor: String(type.demandFactor),
    }));
  }

  const areaNum = parseFloat(state.area.replace(',', '.')) || 0;
  const vaNum = parseFloat(state.vaPerM2.replace(',', '.')) || 0;
  const dfNum = parseFloat(state.demandFactor.replace(',', '.')) || 0;

  const { estimatedVA, estimatedKVA, transformer } = useMemo(() => {
    const va = areaNum * dfNum * vaNum;
    return { estimatedVA: va, estimatedKVA: va / 1000, transformer: nextStandardTransformer(va / 1000) };
  }, [areaNum, dfNum, vaNum]);

  return (
    <ScreenContainer>
      <Title>{t('Estimation de charge', 'Load Estimation')}</Title>
      <Subtitle>{t('Méthode VA/m² (Méthode 1)', 'VA/m² method (Method 1)')}</Subtitle>

      <FieldLabel style={{ marginTop: 0 }}>{t('Type de bâtiment', 'Building type')}</FieldLabel>
      <ChipRow>
        {BUILDING_TYPES.map((type) => (
          <Chip
            key={type.code}
            label={lang === 'fr' ? type.name : type.nameEn}
            selected={selected.code === type.code}
            onPress={() => selectType(type)}
          />
        ))}
      </ChipRow>

      {BUILDING_ICONS[selected.code] && (
        <ReferenceImage source={BUILDING_ICONS[selected.code]} caption={selectedName} height={130} />
      )}

      <FieldRow>
        <LabeledField
          label={t('Surface bâtie (m²)', 'Built area (m²)')}
          value={state.area}
          onChangeText={(v) => setState((prev) => ({ ...prev, area: v }))}
          placeholder={t('ex: 4000', 'e.g. 4000')}
        />
        <LabeledField
          label="VA/m²"
          value={state.vaPerM2}
          onChangeText={(v) => setState((prev) => ({ ...prev, vaPerM2: v }))}
        />
        <LabeledField
          label={t('Facteur de demande', 'Demand factor')}
          value={state.demandFactor}
          onChangeText={(v) => setState((prev) => ({ ...prev, demandFactor: v }))}
        />
      </FieldRow>

      <Card>
        <Formula>{t('Charge = Surface × Facteur de demande × VA/m²', 'Load = Area × Demand factor × VA/m²')}</Formula>
        <Formula>
          {areaNum.toLocaleString(locale)} × {dfNum} × {vaNum} = {estimatedVA.toLocaleString(locale, { maximumFractionDigits: 0 })} VA
        </Formula>
        <Divider />
        <ResultRow label={t('Charge estimée', 'Estimated load')} value={`${estimatedKVA.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA`} />
        <ResultRow
          label={t('Transformateur suggéré', 'Suggested transformer')}
          value={transformer ? `${transformer} kVA` : t('> 2500 kVA (hors barème standard)', '> 2500 kVA (outside standard range)')}
          variant="accent"
        />
      </Card>

      <Note>
        {t(
          '⚠️ Prendre un facteur de diversité de 0.8 au niveau du transformateur/poste si plusieurs bâtiments sont alimentés ensemble.',
          '⚠️ Use a diversity factor of 0.8 at the transformer/substation level if several buildings are fed together.'
        )}
      </Note>

      <FieldLabel>{t('Table de référence (Saudi Arabia Code)', 'Reference table (Saudi Arabia Code)')}</FieldLabel>
      <ReferenceImage
        source={require('../../assets/reference/saudi_va_table.png')}
        caption={t('VA/m² par catégorie de bâtiment — source du cours', 'VA/m² by building category — course source')}
        height={280}
      />

      <ExportButton
        title={t('Estimation de charge', 'Load Estimation')}
        subtitle={selectedName}
        sections={[
          {
            heading: t('Paramètres', 'Parameters'),
            rows: [
              { label: t('Type de bâtiment', 'Building type'), value: selectedName },
              { label: t('Surface bâtie', 'Built area'), value: `${state.area} m²` },
              { label: 'VA/m²', value: state.vaPerM2 },
              { label: t('Facteur de demande', 'Demand factor'), value: state.demandFactor },
            ],
          },
          {
            heading: t('Résultats', 'Results'),
            rows: [
              {
                label: t('Charge estimée', 'Estimated load'),
                value: `${estimatedVA.toLocaleString(locale, { maximumFractionDigits: 0 })} VA (${estimatedKVA.toLocaleString(locale, { maximumFractionDigits: 2 })} kVA)`,
              },
              { label: t('Transformateur suggéré', 'Suggested transformer'), value: transformer ? `${transformer} kVA` : '> 2500 kVA' },
            ],
          },
        ]}
      />

      <SavedCalculations snapshots={snapshots} onSave={(name) => save(name, state)} onLoad={(data) => setState(data)} onRemove={remove} />
    </ScreenContainer>
  );
}
