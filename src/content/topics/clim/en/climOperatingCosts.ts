import { TopicContent } from '../../../types';
import { fig } from '../fig';

export const climOperatingCostsContent: TopicContent = {
  title: 'Operating costs, efficiency and maintenance',
  subtitle: 'Carnot efficiency, annual consumption, operating coefficient and maintenance contracts',
  blocks: [
    {
      type: 'text',
      text: 'An air-conditioning installation costs far more to run for 15 or 20 years than to buy. To compare solutions, you must be able to estimate what it will consume each year, understand where the losses come from, and organise maintenance.',
    },
    { type: 'illustration', name: 'clim-energy', caption: 'One year of consumption, item by item' },

    { type: 'heading', text: 'Compressor efficiency' },
    {
      type: 'text',
      text: 'The ideal Carnot cycle gives the best theoretically possible efficiency between a cold source (evaporator, To) and a hot source (condenser, Tc), in kelvins:',
    },
    { type: 'formula', text: 'Theoretical efficiency: Eth = To / (Tc − To)' },
    { type: 'formula', text: 'Real efficiency: Er = Po / Pw   (cooling produced / power actually drawn)' },
    { type: 'formula', text: 'Carnot efficiency: Nc = Er / Eth' },
    {
      type: 'text',
      text: 'Example: evaporating at 5 °C (278 K), condensing at 45 °C (318 K) → Eth = 278 / 40 ≈ 7. A compressor with a Carnot efficiency of 0.5 gives a real COP of about 3.5. This shows why To and Tc should be brought closer: an evaporator that is not too cold (reasonable setpoint) and a well-ventilated, shaded condenser.',
    },
    fig('p055_0', 'Table 2.1 — usual Carnot efficiency of compressors (reciprocating, scroll, screw, centrifugal)'),

    { type: 'heading', text: 'What consumes in an installation' },
    {
      type: 'table',
      headers: ['Item', 'Symbol', 'Calculation'],
      rows: [
        ['Compressor', 'Cc', 'Σ Pa × running hours, regime by regime'],
        ['Permanent auxiliaries (fans, pumps)', 'Cp', '(Pv + Pp) × hours of use'],
        ['Non-permanent auxiliaries (crankcase heater, solenoid valve, condenser fan)', 'Cnp', 'Prc × off hours + Pvm × running hours'],
        ['Defrost', 'Cd', 'Power × duration × number of defrosts'],
      ],
    },
    { type: 'formula', text: 'C (kWh/yr) = Cc + Cp + Cnp + Cd' },
    {
      type: 'text',
      text: 'The compressor does not run at full power all year: it follows the cooling demand BF. Its running hours depend on the load ratio and on the cooling production efficiency RPF, which collapses at very low load (frequent on/off):',
    },
    { type: 'formula', text: 'hc = nh × BF / (RPF × Qo)   and   Cc = Σ Pa × hc' },
    fig('p064_0', 'Cooling production efficiency (RPF) vs load ratio BF/Qo'),
    fig('p063_0', 'Cooling capacity and power input vs evaporating and condensing temperatures'),
    { type: 'note', text: 'Poor maintenance, bad settings, wrong refrigerant charge or a machine ill-matched to the needs greatly increase total consumption.' },

    { type: 'heading', text: 'The operating coefficient (COE)' },
    {
      type: 'text',
      text: 'The COP describes the machine at one moment; the COE judges the installation over the whole year, auxiliaries and losses included:',
    },
    { type: 'formula', text: 'Annual EF = Σ BF × hours   (useful cooling energy, kWh)' },
    { type: 'formula', text: 'COE = annual EF / annual C' },
    {
      type: 'bullets',
      items: [
        'US standards recommend COE > 3 for efficient air conditioning.',
        'In the United States, an air-conditioning installation with a seasonal efficiency below 2.9 is banned.',
        'The more efficient, well-tuned and well-maintained the installation, the higher the COE.',
      ],
    },

    { type: 'heading', text: 'Example: a 10 kW installation over one year' },
    {
      type: 'text',
      text: 'A refrigeration installation of up to 10 kW runs all year (8,760 h), evaporating at −10 °C, with three condensing regimes (50, 40 and 30 °C) depending on outdoor temperature. Demand varies from 1 to 10 kW.',
    },
    fig('p065', 'Detailed calculation regime by regime: load ratio, RPF, running hours, consumption'),
    {
      type: 'table',
      headers: ['Item', 'Assumption', 'kWh/yr'],
      rows: [
        ['Compressor Cc', '5,091 running hours in total', '29,556'],
        ['Evaporator fan (permanent)', '0.5 kW × 8,760 h', '4,380'],
        ['Condenser fan + solenoid valve + crankcase heater', '(0.3 + 0.01) × 5,091 + 0.02 × 3,669', '1,651'],
        ['Defrost', '6 kW × 0.25 h × 4/day × 365 d', '2,188'],
        ['Total C', '', '37,775'],
      ],
    },
    { type: 'formula', text: 'EF = 61,120 kWh/yr  →  COE = 61,120 / 37,775 = 1.62' },
    {
      type: 'note',
      text: 'This COE of 1.62 is for a low-temperature refrigeration installation (evaporating at −10 °C). In air conditioning, evaporation is positive (≈ +5 °C) and the seasonal COE should exceed 3. Above all, remember the method… and that auxiliaries and defrost account for 22 % of consumption here!',
    },
    fig('p067', 'Guide page 52 — annual cooling energy and average efficiency of the example'),
    { type: 'illustration', name: 'clim-energy', caption: 'Summary of the example' },

    { type: 'heading', text: 'Total operating cost' },
    { type: 'formula', text: 'CGEx = CE (energy) + CM (maintenance)' },
    {
      type: 'text',
      text: 'The energy cost depends mostly on the tariff (normal, peak hours…). But a serious maintenance contract lowers CE: a clean condenser, correct refrigerant charge and proper settings can save tens of percent.',
    },

    { type: 'heading', text: 'Organising maintenance' },
    {
      type: 'text',
      text: 'Operation can be handled by the building’s own staff (counting all employment costs) or by a specialist company. Two types of contract:',
    },
    {
      type: 'table',
      headers: ['Contract', 'Commitment', 'Content'],
      rows: [
        ['Maintenance contract', 'Of means', 'The contractor performs defined visits and tasks to keep the installation in normal working order.'],
        ['Operation contract', 'Of results', 'The contractor guarantees a result (room temperature…) and chooses the means. Total peace of mind for the client.'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Running and routine maintenance: start-up, shutdown, settings, routine servicing.',
        'Energy management: the contractor takes over the energy supply — flat rate, adjusted to outdoor temperature, or according to breakdown stoppages.',
        'Full guarantee: replacement and major maintenance of equipment for an annual fee, over 10 years maximum.',
        'Possible remote monitoring or remote management with guaranteed response times (up to 24/7, 365 days a year).',
      ],
    },
    {
      type: 'note',
      text: 'At handover of an installation, demand: as-built drawings and diagrams, operating and setting manual, maintenance and troubleshooting manual, and the list of recommended spare parts.',
    },
    { type: 'illustration', name: 'clim-cycle', caption: 'To finish: a well-tuned cycle, a clean condenser, a reasonable setpoint' },
  ],
};
