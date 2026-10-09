import { TopicContent } from '../../../types';

export const abcComponentsContent: TopicContent = {
  title: 'Circuit accessories and safety devices',
  subtitle: 'Filter drier, sight glass, receivers, solenoid valve, crankcase heater, pressure switches and regulators',
  blocks: [
    {
      type: 'text',
      text: 'Around the four main parts, a series of components protects the compressor, keeps the circuit clean and dry, and holds pressures within safe limits. The technician must know what each one does, where it is fitted and how it is set.',
    },
    { type: 'illustration', name: 'clim-cycle', props: { highlight: 'valve' }, caption: 'On the liquid line, before the expansion valve: filter drier, sight glass, solenoid valve' },

    { type: 'heading', text: 'The filter drier' },
    {
      type: 'bullets',
      items: [
        'It dries the circuit (moisture creates acids, degrades the oil, freezes in the expansion valve), neutralises acids and filters particles (≈ 12 µm screen).',
        'Desiccants: activated alumina, silica gel, molecular sieve (absorbs up to 20 % of its weight in water, lets refrigerant molecules through but not water molecules).',
        'Types: standard, “burn-out” (cleaning after a burnt-out compressor), drier-receiver, replaceable core (liquid or suction), bi-flow for heat pumps.',
        'Fitted preferably vertical, inlet at the top, in the direction of the arrow; it stays capped until the last moment.',
        'A temperature difference between its inlet and outlet (≈ 2 °C) shows it is clogged.',
      ],
    },

    { type: 'heading', text: 'The sight glass' },
    {
      type: 'bullets',
      items: [
        'It shows the state of the refrigerant in the liquid line: bubbles indicate undercharge or partial flashing (flash gas).',
        'Its indicator changes colour with moisture: green = dry circuit; turning yellow = moisture, change the drier (anti-acid).',
        'Fitted on an oil separator return line, it confirms that oil returns to the crankcase.',
      ],
    },

    { type: 'heading', text: 'Receivers and solenoid valve' },
    {
      type: 'bullets',
      items: [
        'Liquid receiver: after the condenser, it absorbs changes in refrigerant volume with the season and the expansion valve, and can store the whole charge during a service job (liquid outlet valve, dip tube).',
        'Solenoid valve on the liquid line: stops feeding the evaporator at standstill (no liquid migration) and enables pump down. Fitted horizontal, coil on top, arrow respected; a coil energised off its stem burns out in minutes.',
        'Suction accumulator (anti-slugging vessel): at the compressor suction (between the 4-way valve and the compressor on a heat pump), it traps and re-evaporates liquid; its dip tube has a small oil-return hole.',
        'Liquid distributor: splits flow from one expansion valve into several circuits of a large evaporator; fitted vertical, equal-length tubes, external-equaliser valve compulsory.',
      ],
    },
    { type: 'formula', text: 'Receiver volume ≈ (0.2 × condenser V + 0.8 × evaporator V + liquid line V) × 1.25' },

    { type: 'heading', text: 'Protecting the compressor and its oil' },
    {
      type: 'bullets',
      items: [
        'Crankcase heater: keeps the oil ≈ 20 °C above ambient while the compressor is stopped (fed by an auxiliary contact closed at standstill). Without it, refrigerant migrates to the coldest point — the crankcase — (the “cold wall” principle), dissolves in the oil, and at start-up the oil foams and leaves: lubrication failure.',
        'Oil separator: on the discharge, it recovers entrained oil (centrifugal force, change of direction) and returns it to the crankcase through a float.',
        'Liquid/suction heat exchanger: subcools the liquid with the cold suction vapour, improves cooling capacity.',
        'Discharge muffler: reduces the pulsations of reciprocating compressors, which make pipes vibrate and crack; fitted right after the compressor.',
        'Vibration eliminator (“anaconda”): braided stainless flexible hose that absorbs vibration and expansion.',
        'Check valve: flow in one direction only (bypassing the unused expansion valve of a heat pump, hot-gas defrost).',
      ],
    },

    { type: 'heading', text: 'Pressure switches' },
    {
      type: 'table',
      headers: ['Switch', 'Role', 'Typical setting'],
      rows: [
        ['LP safety', 'stops the compressor if LP drops (leak, expansion valve, lack of flow)', 'cut-out ≥ 0.2 bar gauge: never below atmospheric (humid air would enter)'],
        ['LP control (pump down)', 'stops the compressor once the solenoid valve has emptied the evaporator', 'e.g. 0/+2 °C cold room with R134a: cut-in 1.2 bar, differential 1 bar'],
        ['HP safety', 'trips if HP rises too high (dirty condenser, failed fan)', 'cut-out ≤ 0.9 × PS (max allowable pressure); compulsory from 2.5 kg of refrigerant, doubled above 100 kg'],
        ['HP control', 'drives the condenser fans', 'voltage (triac) or frequency variation, 0–10 V signal'],
        ['Oil differential', 'trips if the oil pump pressure is too low', 'with a start-up time delay'],
      ],
    },
    {
      type: 'note',
      text: 'Preset pressure switches on the bench with a nitrogen bottle, a regulator and a gauge before fitting them: it saves time. Vocabulary: “cut-in” = switching on, “cut-out” = switching off.',
    },
    {
      type: 'warning',
      text: 'The book inverts the terms for the HP switch (“cut-in = coupure, cut-out = enclenchement”). They do not change from one switch to another: cut-out = switching off (contact opens), cut-in = switching back on, for LP and HP alike. On an HP switch, cut-out is simply the HIGH value.',
    },

    { type: 'heading', text: 'Pressure regulators' },
    {
      type: 'bullets',
      items: [
        'Evaporating pressure regulator (KVP type): at an evaporator outlet, it keeps that evaporator’s pressure above a minimum when several evaporators at different temperatures share one compressor.',
        'Crankcase/start regulator (KVL type): near the compressor, it limits suction pressure at start-up (after defrost or a long stop) so as not to overload the motor.',
        'Capacity regulator (hot-gas bypass): bypass from discharge to suction when LP falls too low.',
        'Condensing pressure regulator: between air-cooled condenser and receiver, with a differential valve, it keeps HP high enough in cool weather.',
      ],
    },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'R134a installation, compressor whose PS (max allowable pressure) corresponds to 60 °C, about 16 bar. Region where summer reaches 35 °C. Propose HP safety switch settings using the book’s two methods.',
      solution: [
        'PS method: cut-out ≤ 0.9 × 16 = 14.4 bar.',
        '“Old-school” method: cut-in = 35 + 15 = 50 °C ≈ 12.2 bar; cut-out = 50 + 10 = 60 °C ≈ 16 bar.',
        'The two methods do not give the same result: keep the more cautious one (14.4 bar) and always follow the manufacturer’s manual.',
      ],
    },
    {
      type: 'exercise',
      question: 'Condenser 10 L, evaporator 6 L, liquid line 2 L. What receiver volume should be provided?',
      solution: ['(0.2 × 10 + 0.8 × 6 + 2) × 1.25 = (2 + 4.8 + 2) × 1.25 = 11 L.'],
    },
  ],
};
