import React, { useMemo } from 'react';
import { BREAKER_TYPES, LOAD_TYPES, SAFETY_MARGINS, TRIP_CURVES } from '../data/circuitBreaker';
import { nextStandardBreaker, previousStandardBreaker } from '../data/breakers';
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
  ResultRow,
  ScreenContainer,
  SectionTitle,
  Title,
} from '../components/ui';

type PhaseType = 'mono' | 'tri';
type MarginMode = 'FC' | 'IEC' | 'NEC' | 'manual';
type DesignType = '80' | '100';

type CircuitBreakerState = {
  phaseType: PhaseType;
  apparentPower: string;
  voltage: string;
  marginMode: MarginMode;
  manualMargin: string;
  loadTypeName: string;
  continuousCurrent: string;
  nonContinuousCurrent: string;
  designType: DesignType;
};

const DEFAULT_STATE: CircuitBreakerState = {
  phaseType: 'tri',
  apparentPower: '10',
  voltage: '380',
  marginMode: 'NEC',
  manualMargin: '20',
  loadTypeName: LOAD_TYPES[0].name,
  continuousCurrent: '20',
  nonContinuousCurrent: '5',
  designType: '80',
};

export default function CircuitBreakerScreen() {
  const [state, setState] = usePersistedField<CircuitBreakerState>('circuitBreaker:current', DEFAULT_STATE);
  const { snapshots, save, remove } = useSnapshots<CircuitBreakerState>('circuitBreaker:snapshots');
  const { lang, t } = useLanguage();
  const locale = lang === 'fr' ? 'fr-FR' : 'en-US';

  const selectedLoadType = LOAD_TYPES.find((l) => l.name === state.loadTypeName) ?? LOAD_TYPES[0];
  const selectedCurve = TRIP_CURVES.find((c) => c.code === selectedLoadType.curve)!;

  function set<K extends keyof CircuitBreakerState>(key: K, value: CircuitBreakerState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  const { iLoad, marginPct, iR, breaker, breakerRatio } = useMemo(() => {
    const S = parseFloat(state.apparentPower.replace(',', '.')) || 0;
    const V = parseFloat(state.voltage.replace(',', '.')) || 0;
    const load = V > 0 ? (state.phaseType === 'tri' ? (S * 1000) / (Math.sqrt(3) * V) : (S * 1000) / V) : 0;

    const margin = state.marginMode === 'manual'
      ? parseFloat(state.manualMargin.replace(',', '.')) || 0
      : SAFETY_MARGINS.find((m) => m.code === state.marginMode)?.pct ?? 0;

    const r = load * (1 + margin / 100);
    const b = nextStandardBreaker(r);
    const ratio = b && r > 0 ? b / r : 1;

    return { iLoad: load, marginPct: margin, iR: r, breaker: b, breakerRatio: ratio };
  }, [state.apparentPower, state.voltage, state.phaseType, state.marginMode, state.manualMargin]);

  const { continuousIr, continuousBreaker } = useMemo(() => {
    const cont = parseFloat(state.continuousCurrent.replace(',', '.')) || 0;
    const nonCont = parseFloat(state.nonContinuousCurrent.replace(',', '.')) || 0;
    const ir = state.designType === '80' ? 1.25 * cont + nonCont : cont + nonCont;
    return { continuousIr: ir, continuousBreaker: nextStandardBreaker(ir) };
  }, [state.continuousCurrent, state.nonContinuousCurrent, state.designType]);

  const adjustableSuggestion = breaker && breakerRatio > 1.3 ? previousStandardBreaker(iR) : null;

  return (
    <ScreenContainer>
      <Title>{t('Disjoncteurs', 'Circuit Breakers')}</Title>

      <SectionTitle style={{ marginTop: 0 }}>{t('1. Dimensionnement du disjoncteur', '1. Breaker sizing')}</SectionTitle>
      <ChipRow>
        <Chip label={t('Monophasé', 'Single-phase')} selected={state.phaseType === 'mono'} onPress={() => set('phaseType', 'mono')} />
        <Chip label={t('Triphasé', 'Three-phase')} selected={state.phaseType === 'tri'} onPress={() => set('phaseType', 'tri')} />
      </ChipRow>

      <FieldRow>
        <LabeledField label={t('Puissance apparente S (kVA)', 'Apparent power S (kVA)')} value={state.apparentPower} onChangeText={(v) => set('apparentPower', v)} />
        <LabeledField label={t('Tension V', 'Voltage V')} value={state.voltage} onChangeText={(v) => set('voltage', v)} />
      </FieldRow>

      <FieldLabel>{t('Marge de sécurité (I_r)', 'Safety margin (I_r)')}</FieldLabel>
      <ChipRow>
        {SAFETY_MARGINS.map((m) => (
          <Chip key={m.code} label={lang === 'fr' ? m.label : m.labelEn} selected={state.marginMode === m.code} onPress={() => set('marginMode', m.code as MarginMode)} />
        ))}
        <Chip label={t('Manuel', 'Manual')} selected={state.marginMode === 'manual'} onPress={() => set('marginMode', 'manual')} />
      </ChipRow>
      {state.marginMode === 'manual' && (
        <LabeledField label={t('Marge (%)', 'Margin (%)')} value={state.manualMargin} onChangeText={(v) => set('manualMargin', v)} style={{ maxWidth: 140, marginTop: 8 }} />
      )}

      <FieldLabel>{t('Type de charge (courbe de déclenchement)', 'Load type (trip curve)')}</FieldLabel>
      <ChipRow>
        {LOAD_TYPES.map((lt) => (
          <Chip key={lt.name} label={lang === 'fr' ? lt.name : lt.nameEn} selected={state.loadTypeName === lt.name} onPress={() => set('loadTypeName', lt.name)} />
        ))}
      </ChipRow>

      <Card>
        <Formula>
          I_load = {state.phaseType === 'tri' ? 'S×1000 / (√3×V)' : 'S×1000 / V'} = {iLoad.toLocaleString(locale, { maximumFractionDigits: 2 })} A
        </Formula>
        <Formula>
          I_r = I_load × (1 + {marginPct}%) = {iR.toLocaleString(locale, { maximumFractionDigits: 2 })} A
        </Formula>
        <Divider />
        <ResultRow label={t('Courant de charge (I_load)', 'Load current (I_load)')} value={`${iLoad.toLocaleString(locale, { maximumFractionDigits: 2 })} A`} />
        <ResultRow label={t('Courant de réglage (I_r)', 'Setting current (I_r)')} value={`${iR.toLocaleString(locale, { maximumFractionDigits: 2 })} A`} />
        <ResultRow label={t('Disjoncteur suggéré', 'Suggested breaker')} value={breaker ? `${breaker} A` : '> 1250 A'} variant="accent" />
        <ResultRow label={t('Courbe de déclenchement', 'Trip curve')} value={`${t('Type', 'Type')} ${selectedCurve.code} (${selectedCurve.range})`} variant="accent" />
        {adjustableSuggestion && (
          <Note>
            {t(
              `⚠️ L'écart avec le calibre standard au-dessus est important — envisager un disjoncteur réglable de calibre ${adjustableSuggestion} A ajusté à la hausse, plutôt que de sauter directement à ${breaker} A.`,
              `⚠️ The gap to the standard rating above is large — consider an adjustable breaker rated ${adjustableSuggestion} A set higher, rather than jumping straight to ${breaker} A.`
            )}
          </Note>
        )}
      </Card>

      <SectionTitle>{t('2. Règle de charge continue', '2. Continuous load rule')}</SectionTitle>
      <Note style={{ marginTop: 0 }}>
        {t(
          'Une charge continue = charge dont le courant maximal est attendu pendant 3 heures ou plus.',
          'A continuous load = a load whose maximum current is expected to last 3 hours or more.'
        )}
      </Note>
      <ChipRow>
        <Chip label={t('Design 80% (standard)', 'Design 80% (standard)')} selected={state.designType === '80'} onPress={() => set('designType', '80')} />
        <Chip label={t('Design 100%', 'Design 100%')} selected={state.designType === '100'} onPress={() => set('designType', '100')} />
      </ChipRow>
      <FieldRow>
        <LabeledField label={t('Courant continu (A)', 'Continuous current (A)')} value={state.continuousCurrent} onChangeText={(v) => set('continuousCurrent', v)} />
        <LabeledField label={t('Courant non-continu (A)', 'Non-continuous current (A)')} value={state.nonContinuousCurrent} onChangeText={(v) => set('nonContinuousCurrent', v)} />
      </FieldRow>

      <Card>
        <Formula>
          I_r = {state.designType === '80' ? t('1.25 × I_continu + I_non-continu', '1.25 × I_continuous + I_non-continuous') : t('I_continu + I_non-continu', 'I_continuous + I_non-continuous')} = {continuousIr.toLocaleString(locale, { maximumFractionDigits: 2 })} A
        </Formula>
        <Divider />
        <ResultRow label={t('Courant de réglage (I_r)', 'Setting current (I_r)')} value={`${continuousIr.toLocaleString(locale, { maximumFractionDigits: 2 })} A`} />
        <ResultRow label={t('Disjoncteur suggéré', 'Suggested breaker')} value={continuousBreaker ? `${continuousBreaker} A` : '> 1250 A'} variant="accent" />
        <Note>
          {t(
            '⚠️ Exception : pour un disjoncteur certifié «100% rated», utiliser charge continue + non-continue sans coefficient.',
            '⚠️ Exception: for a breaker certified "100% rated", use continuous + non-continuous load with no coefficient.'
          )}
        </Note>
      </Card>

      <SectionTitle>{t('Types de disjoncteurs', 'Breaker types')}</SectionTitle>
      <Card>
        {BREAKER_TYPES.map((bt) => (
          <ResultRow key={bt.code} label={lang === 'fr' ? bt.name : bt.nameEn} value={bt.code} />
        ))}
        <Divider />
        {BREAKER_TYPES.map((bt) => (
          <Note key={bt.code}>• {bt.code} : {lang === 'fr' ? bt.desc : bt.descEn}</Note>
        ))}
      </Card>

      <ExportButton
        title={t('Disjoncteurs', 'Circuit Breakers')}
        sections={[
          {
            heading: t('Dimensionnement', 'Sizing'),
            rows: [
              {
                label: t('Puissance / Tension', 'Power / Voltage'),
                value: `${state.apparentPower} kVA @ ${state.voltage} V (${state.phaseType === 'tri' ? t('triphasé', 'three-phase') : t('monophasé', 'single-phase')})`,
              },
              { label: t('Courant de charge (I_load)', 'Load current (I_load)'), value: `${iLoad.toLocaleString(locale, { maximumFractionDigits: 2 })} A` },
              { label: t('Courant de réglage (I_r)', 'Setting current (I_r)'), value: `${iR.toLocaleString(locale, { maximumFractionDigits: 2 })} A` },
              { label: t('Disjoncteur suggéré', 'Suggested breaker'), value: breaker ? `${breaker} A` : '> 1250 A' },
              { label: t('Courbe de déclenchement', 'Trip curve'), value: `${t('Type', 'Type')} ${selectedCurve.code} (${selectedCurve.range})` },
            ],
          },
          {
            heading: t('Charge continue', 'Continuous load'),
            rows: [
              { label: t('Courant de réglage (I_r)', 'Setting current (I_r)'), value: `${continuousIr.toLocaleString(locale, { maximumFractionDigits: 2 })} A` },
              { label: t('Disjoncteur suggéré', 'Suggested breaker'), value: continuousBreaker ? `${continuousBreaker} A` : '> 1250 A' },
            ],
          },
        ]}
      />

      <SavedCalculations snapshots={snapshots} onSave={(name) => save(name, state)} onLoad={(data) => setState(data)} onRemove={remove} />
    </ScreenContainer>
  );
}
