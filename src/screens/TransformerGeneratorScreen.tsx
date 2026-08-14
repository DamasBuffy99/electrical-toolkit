import React, { useMemo } from 'react';
import { View } from 'react-native';
import { CLEARANCE_TABLE, GENERATOR_ROOM_TYPES } from '../data/transformerGenerator';
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
  SectionTitle,
  Title,
} from '../components/ui';

type TransformerGeneratorState = {
  totalLoad: string;
  selectedRoomType: string;
  xfmrLength: string;
  xfmrWidth: string;
  clearanceIndex: number;
  frontClearance: string;
  sideClearance: string;
};

const DEFAULT_CLEARANCE_INDEX = 5; // 9-25 kV

const DEFAULT_STATE: TransformerGeneratorState = {
  totalLoad: '1000',
  selectedRoomType: GENERATOR_ROOM_TYPES[1].type,
  xfmrLength: '1.97',
  xfmrWidth: '0.98',
  clearanceIndex: DEFAULT_CLEARANCE_INDEX,
  frontClearance: String(CLEARANCE_TABLE[DEFAULT_CLEARANCE_INDEX].cond1),
  sideClearance: String(CLEARANCE_TABLE[DEFAULT_CLEARANCE_INDEX].cond2),
};

export default function TransformerGeneratorScreen() {
  const [state, setState] = usePersistedField<TransformerGeneratorState>('transformerGenerator:current', DEFAULT_STATE);
  const { snapshots, save, remove } = useSnapshots<TransformerGeneratorState>('transformerGenerator:snapshots');
  const { lang, t } = useLanguage();
  const locale = lang === 'fr' ? 'fr-FR' : 'en-US';

  const selectedRoom = GENERATOR_ROOM_TYPES.find((r) => r.type === state.selectedRoomType) ?? GENERATOR_ROOM_TYPES[1];

  const totalLoadNum = parseFloat(state.totalLoad.replace(',', '.')) || 0;
  const generatorLoad = totalLoadNum * 0.5;

  function selectVoltage(index: number) {
    setState((prev) => ({
      ...prev,
      clearanceIndex: index,
      frontClearance: String(CLEARANCE_TABLE[index].cond1),
      sideClearance: String(CLEARANCE_TABLE[index].cond2),
    }));
  }

  const { roomLength, roomWidth } = useMemo(() => {
    const l = parseFloat(state.xfmrLength.replace(',', '.')) || 0;
    const w = parseFloat(state.xfmrWidth.replace(',', '.')) || 0;
    const front = parseFloat(state.frontClearance.replace(',', '.')) || 0;
    const side = parseFloat(state.sideClearance.replace(',', '.')) || 0;
    return { roomLength: l + front + side, roomWidth: w + side * 2 };
  }, [state.xfmrLength, state.xfmrWidth, state.frontClearance, state.sideClearance]);

  return (
    <ScreenContainer>
      <Title>{t('Transformateur & Groupe électrogène', 'Transformer & Generator')}</Title>

      <SectionTitle>{t('1. Dimensionnement du local groupe électrogène', '1. Sizing the generator room')}</SectionTitle>
      <LabeledField
        label={t('Charge totale du bâtiment (kVA)', 'Total building load (kVA)')}
        value={state.totalLoad}
        onChangeText={(v) => setState((prev) => ({ ...prev, totalLoad: v }))}
      />

      <Card>
        <ResultRow label={t('Charge groupe électrogène (50% du total)', 'Generator load (50% of total)')} value={`${generatorLoad.toLocaleString(locale)} kVA`} />
        <Formula>
          {t(
            '⚠️ Règle pratique : 50% (marge de sécurité), pas les 25% « théoriques ».',
            '⚠️ Practical rule: 50% (safety margin), not the "theoretical" 25%.'
          )}
        </Formula>

        <Divider />
        <FieldLabel style={{ marginTop: 0 }}>
          {t("Type de local (d'après le modèle catalogue choisi)", 'Room type (based on the chosen catalog model)')}
        </FieldLabel>
        <ChipRow>
          {GENERATOR_ROOM_TYPES.map((room) => (
            <Chip
              key={room.type}
              label={`${t('Type', 'Type')} ${room.type} (${lang === 'fr' ? room.approxRange : room.approxRangeEn})`}
              selected={selectedRoom.type === room.type}
              onPress={() => setState((prev) => ({ ...prev, selectedRoomType: room.type }))}
            />
          ))}
        </ChipRow>
        <View style={{ height: 8 }} />
        <ResultRow
          label={`${t('Dimensions du local (Type', 'Room dimensions (Type')} ${selectedRoom.type})`}
          value={`${selectedRoom.length} m × ${selectedRoom.width} m`}
          variant="accent"
        />
        <Note>
          {t(
            "⚠️ Les dimensions exactes viennent toujours de la fiche technique du fabricant — cette classification A/B/C est indicative.",
            "⚠️ Exact dimensions always come from the manufacturer's datasheet — this A/B/C classification is indicative only."
          )}
        </Note>
        <ReferenceImage
          source={require('../../assets/reference/gen_room_diagram.png')}
          caption={t('Schéma des dégagements du local groupe électrogène', 'Generator room clearance diagram')}
          height={220}
        />
        <ReferenceImage
          source={require('../../assets/reference/genset_datasheet.png')}
          caption={t('Exemple de fiche technique groupe électrogène (XC400-500)', 'Example generator datasheet (XC400-500)')}
          height={260}
        />
      </Card>

      <SectionTitle>{t('2. Local transformateur — dégagements', '2. Transformer room — clearances')}</SectionTitle>
      <FieldLabel style={{ marginTop: 0 }}>{t('Classe de tension', 'Voltage class')}</FieldLabel>
      <ChipRow>
        {CLEARANCE_TABLE.map((row, i) => (
          <Chip key={row.label} label={row.label} selected={state.clearanceIndex === i} onPress={() => selectVoltage(i)} />
        ))}
      </ChipRow>

      <FieldRow>
        <LabeledField label={t('Longueur transfo (m)', 'Transformer length (m)')} value={state.xfmrLength} onChangeText={(v) => setState((prev) => ({ ...prev, xfmrLength: v }))} />
        <LabeledField label={t('Largeur transfo (m)', 'Transformer width (m)')} value={state.xfmrWidth} onChangeText={(v) => setState((prev) => ({ ...prev, xfmrWidth: v }))} />
      </FieldRow>
      <FieldRow>
        <LabeledField label={t('Dégagement avant (m)', 'Front clearance (m)')} value={state.frontClearance} onChangeText={(v) => setState((prev) => ({ ...prev, frontClearance: v }))} />
        <LabeledField label={t('Dégagement latéral (m)', 'Side clearance (m)')} value={state.sideClearance} onChangeText={(v) => setState((prev) => ({ ...prev, sideClearance: v }))} />
      </FieldRow>

      <Card>
        <ResultRow label={t('Longueur du local', 'Room length')} value={`${roomLength.toLocaleString(locale, { maximumFractionDigits: 3 })} m`} />
        <ResultRow label={t('Largeur du local', 'Room width')} value={`${roomWidth.toLocaleString(locale, { maximumFractionDigits: 3 })} m`} variant="accent" />
        <Note>
          {t(
            '⚠️ La largeur de la porte doit toujours être ≥ largeur du transformateur. Les dégagements avant/latéral dépendent de ce qui se trouve de chaque côté (parties sous tension, mises à la terre…) — à confirmer sur site.',
            "⚠️ Door width must always be ≥ transformer width. Front/side clearances depend on what's on each side (live parts, grounded parts…) — confirm on site."
          )}
        </Note>
        <ReferenceImage
          source={require('../../assets/reference/clearance_low_voltage.png')}
          caption={t('NEC Table 110.26(A)(1) — dégagements basse tension', 'NEC Table 110.26(A)(1) — low voltage clearances')}
          height={260}
        />
        <ReferenceImage
          source={require('../../assets/reference/clearance_medium_voltage.png')}
          caption={t('NEC Table 110-34 / OSHA S-2 — moyenne tension + dimensions transformateurs', 'NEC Table 110-34 / OSHA S-2 — medium voltage + transformer dimensions')}
          height={260}
        />
      </Card>

      <ExportButton
        title={t('Transformateur & Groupe électrogène', 'Transformer & Generator')}
        sections={[
          {
            heading: t('Groupe électrogène', 'Generator'),
            rows: [
              { label: t('Charge totale', 'Total load'), value: `${state.totalLoad} kVA` },
              { label: t('Charge groupe (50%)', 'Generator load (50%)'), value: `${generatorLoad.toLocaleString(locale)} kVA` },
              {
                label: t('Type de local', 'Room type'),
                value: `${t('Type', 'Type')} ${selectedRoom.type} — ${selectedRoom.length} × ${selectedRoom.width} m`,
              },
            ],
          },
          {
            heading: t('Local transformateur', 'Transformer room'),
            rows: [
              { label: t('Classe de tension', 'Voltage class'), value: CLEARANCE_TABLE[state.clearanceIndex].label },
              { label: t('Dimensions transfo', 'Transformer dimensions'), value: `${state.xfmrLength} × ${state.xfmrWidth} m` },
              { label: t('Dégagements avant/latéral', 'Front/side clearances'), value: `${state.frontClearance} m / ${state.sideClearance} m` },
              {
                label: t('Dimensions du local', 'Room dimensions'),
                value: `${roomLength.toLocaleString(locale, { maximumFractionDigits: 3 })} × ${roomWidth.toLocaleString(locale, { maximumFractionDigits: 3 })} m`,
              },
            ],
          },
        ]}
      />

      <SavedCalculations snapshots={snapshots} onSave={(name) => save(name, state)} onLoad={(data) => setState(data)} onRemove={remove} />
    </ScreenContainer>
  );
}
