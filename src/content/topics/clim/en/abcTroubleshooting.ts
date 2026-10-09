import { TopicContent } from '../../../types';

export const abcTroubleshootingContent: TopicContent = {
  title: 'Fault diagnosis',
  subtitle: 'Method, electrical measurements, reading refrigeration symptoms, the compressor, contaminants and remedies',
  blocks: [
    {
      type: 'text',
      text: 'When troubleshooting, do not confuse speed with haste: a wrong diagnosis often costs more than the fault itself. Start by asking the user (since when? after what? what noises?), then use your instruments methodically… and your senses: sight, hearing, touch.',
    },
    { type: 'illustration', name: 'tech-diagnosis', caption: 'Read HP, LP, superheat and subcooling together' },

    { type: 'heading', text: 'Why compressors die' },
    {
      type: 'bullets',
      items: [
        'Liquid slugging (liquid drawn in: expansion valve too open, superheat too low, migration at standstill) and oil “washed out” by refrigerant.',
        'Moisture and contamination in the circuit: acids, sludge, winding varnish attacked.',
        'Superheat too high: the motor is no longer cooled by the suction gas.',
        'Lack of oil or poor oil return.',
        'Electrical causes: loose connections, phase loss, undervoltage, too-frequent starts.',
      ],
    },
    { type: 'note', text: 'After a failure, ALWAYS look for the cause (oil analysis, examining the compressor): otherwise the new compressor will meet the same fate a few weeks later.' },

    { type: 'heading', text: 'Electrical measurements: the method' },
    {
      type: 'bullets',
      items: [
        'Voltage: voltmeter in PARALLEL across the source or the load.',
        'Current: clamp meter around ONE conductor (an ammeter in series is impractical).',
        'Continuity, resistance: ohmmeter with power OFF (infinite reading = open element).',
        'Faulty safety chain: one probe on neutral, the other moved from contact to contact. Across a CLOSED contact you read 0 V; across an OPEN contact you find the voltage (230 V): that is the one cutting the circuit.',
        'Insulation with a megohmmeter, power off, between each live conductor and earth: ≥ 0.5 MΩ at 500 V DC for 50 to 500 V circuits (≥ 0.25 MΩ at 250 V for < 50 V). The reading varies with temperature and humidity.',
        'Windings: three-phase, three identical resistances; single-phase, the resistance between outer terminals = run + start.',
        'Capacitor: visual check (not swollen), discharge, multimeter test (reading rises from 0 towards infinity) or direct capacitance measurement.',
      ],
    },

    { type: 'heading', text: 'Typical refrigeration faults' },
    {
      type: 'table',
      headers: ['Fault', 'Symptoms', 'Possible causes'],
      rows: [
        ['Undercharge', 'LP and HP low, high superheat, very low subcooling, bubbling sight glass, short cycling', 'leak'],
        ['Overcharge', 'HP very high, high subcooling, high current, low superheat', 'charging error'],
        ['Non-condensables', 'HP high, LP high, poor efficiency, normal subcooling', 'imperfect vacuum, air or nitrogen introduced'],
        ['Condenser “too small”', 'high HP, low subcooling', 'dirty fins, fan reversed or slow, hot air recirculating'],
        ['Evaporator “too small”', 'low LP and superheat, little cooling', 'dirty filter, fan slow or reversed, frost, too much oil'],
        ['Expansion valve too small / flash gas', 'low LP, high superheat, good subcooling', 'orifice, blocked strainer, clogged drier, valve not fully open'],
        ['Weak compressor', 'low HP, high LP, continuous running', 'damaged valves, 4-way valve stuck mid-position, low inverter speed'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Yellow sight glass: moisture → anti-acid drier, oil acid test.',
        'Cold or frosted component on the liquid line: partial blockage at that point (a 2 °C difference between drier inlet and outlet means it is clogged).',
        'Oil pressure switch tripping: lack of oil, blocked strainer, failed crankcase heater, wiring error.',
        'LP switch tripping: lack of refrigerant, lack of air or water flow over the evaporator, blocked filter or solenoid valve, expansion valve too closed.',
        'HP switch tripping: too much refrigerant, lack of flow over the condenser, non-condensables.',
      ],
    },

    { type: 'heading', text: 'Focus on the compressor' },
    {
      type: 'table',
      headers: ['Symptom', 'Leads'],
      rows: [
        ['Won’t start', 'voltage (±20 %), control, fuses, breaker; HP/LP/oil safeties; phase monitor (scroll)'],
        ['Won’t stop', 'undersized installation, worn valves, 4-way valve mid-position, incorrect charge, frost, insufficient airflow'],
        ['Short cycling', 'LP cut-outs: charge, pressure switch, partial blockage'],
        ['Noisy', 'lack or excess of oil, migration (failed crankcase heater), direction of rotation (scroll), wear, expansion valve too open'],
        ['Current too high', 'HP and LP high (charge, condenser-side flow), wear, poor connection, undervoltage'],
        ['Current too low', 'HP and LP low: charge, evaporator-side flow, blockage'],
        ['Wet or frosted crankcase', 'liquid in the crankcase: superheat too low, crankcase heater'],
        ['Tripping', 'connection, real current vs setting, terminal tightness, windings'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Valve test (reciprocating compressor): suction valve closed, LP switch bypassed, start it. The compressor pulls a vacuum very quickly → suction valves good; it struggles → valves damaged. At standstill, if crankcase pressure rises quickly → discharge valves leaking.',
        'Signs of worn valves: little cooling, LP rather high, HP rather low, high discharge temperature, long running times.',
      ],
    },

    { type: 'heading', text: 'Flash gas, non-condensables, expansion valve, 4-way valve' },
    {
      type: 'bullets',
      items: [
        'Flash gas: liquid vaporises before the expansion valve because of a pressure loss (clogged drier, solenoid valve not fully open, partly closed valve, line too long or too thin) → low LP, high superheat, bubbles in the sight glass, frost on the component at fault.',
        'Non-condensables test: installation stopped, condenser fans forced on for a few minutes; when condenser inlet and outlet are at the same temperature, compare the temperature read on the HP gauge with the thermometer. More than 2 °C difference → non-condensables: recover, evacuate, recharge.',
        'Expansion valve: punctured bulb or broken capillary → the valve closes, LP drops, LP cut-out. Too small → little cooling, high superheat. Too large → hunting, high LP, risk of liquid slugging. Sticking → dirty or wet circuit.',
        'Leaking 4-way valve (in cooling mode): the evaporator-side line is warmer than expected, LP high, HP low (in the extreme HP = LP). Compare the temperatures of the valve’s four tubes with the normal operating diagram.',
      ],
    },
    { type: 'illustration', name: 'tech-4way', caption: 'In normal operation, the 4-way valve’s tubes are at clearly different temperatures' },

    { type: 'heading', text: 'Working on the circuit' },
    {
      type: 'bullets',
      items: [
        'Replacing a liquid-line component (expansion valve, sight glass, drier): close the liquid outlet valve, run the compressor down to a pressure just above atmospheric (refrigerant stored in the condenser/receiver), stop, close the LP valve, lock out, replace quickly, leak-test, evacuate the opened section, reopen, check superheat over several cycles.',
        'Refrigerant recovery: recovery unit and cylinder evacuated, cylinder on scales, filled to ≤ 80 %; liquid/vapour (simple) or “push-pull” (much faster); label the cylinder.',
        'Oil: top up by vacuum (drawn from the can), level between the bottom and middle of the sight glass; drain by gravity, under nitrogen pressure, with a syringe or by vacuum; always the same original oil, can closed immediately (POE oils are hygroscopic).',
        'Oil analysis: in a laboratory (acidity, water, dielectric strength, appearance) or with a field kit (purple = acceptable acidity, yellow = high acidity).',
        'Burnt-out compressor: confirm with an oil analysis, recover the refrigerant, flush the circuit (solvent or recirculating pump, nitrogen purge), replace the drier (anti-acid), the expansion valve or its orifice, the contactor and overload relay, add a “burn-out” filter on the suction, then check acidity periodically.',
      ],
    },
    {
      type: 'table',
      headers: ['Contaminant', 'Origin', 'Effects'],
      rows: [
        ['Non-condensables (air, nitrogen)', 'insufficient vacuum, handling error', 'high HP, less cooling, moisture'],
        ['Moisture', 'installation, service work, oil left open', 'ice at the expansion valve, acids, corrosion, sludge'],
        ['Acids', 'moisture, extreme temperatures, unflushed burnt-out compressor', 'attack on windings'],
        ['Foreign bodies', 'swarf, dust, brazing beads, forgotten caps', 'blocked expansion valves and filters'],
        ['Oxides and sludge', 'copper heated in air (scale), oil breakdown', 'clogging, degraded oil'],
      ],
    },
    { type: 'note', text: 'Solvent flushing: section by section, without the compressor or expansion valves, with “water-hammer” pulses to loosen deposits, checked through a transparent hose, nitrogen purge, then deep vacuum. The higher a solvent’s Kauri-Butanol (KB) value, the more effective it is.' },

    { type: 'heading', text: 'Leaks: where to look' },
    {
      type: 'bullets',
      items: [
        'Schrader valves (caps and seals), service valves (caps, gland), Rotalock valves (tightness, PTFE seals).',
        'Flares, overloaded brazed joints, tappings and tees subject to vibration, rubbing tubes (capillaries, supports without sleeves).',
        'Condenser and evaporator: tubes sheared at the inlet, outlet and supports.',
        'Oil traces: pressure-switch bellows, terminal plate, compressor oil sight glass, vibration eliminator.',
      ],
    },

    { type: 'heading', text: 'Belts, pulleys and troubleshooting formulas' },
    {
      type: 'bullets',
      items: [
        'Check pulley alignment and belt tension (too loose: slipping and heating; too tight: bearing wear).',
        'Before increasing a fan’s speed, measure the current: it rises very fast with speed.',
        'Preferably recalculate the fan pulley so as to keep the adjustable pulley on the motor side.',
      ],
    },
    { type: 'formula', text: 'Pulley diameter D = (motor speed / required speed) × motor pulley diameter' },
    { type: 'formula', text: 'Belt length ≈ 2 × centre distance + 1.57 × (D1 + D2)' },
    { type: 'formula', text: 'Coil: P (W) = 0.34 × airflow (m³/h) × ΔT ;   airflow (m³/h) = P / (0.34 × ΔT)' },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A split cools poorly. HP and LP are low, superheat is 14 K, subcooling 1 K and the sight glass (if any) bubbles. Diagnosis and approach?',
      solution: ['All the signs of a refrigerant shortage.', 'Do not simply “top it up”: find and repair the leak, evacuate, then charge by weight (as liquid for R410A).'],
    },
    {
      type: 'exercise',
      question: 'After a non-condensables test, the HP gauge shows a saturation temperature of 38 °C while the condenser, stopped and ventilated, is at 33 °C. Conclusion?',
      solution: ['5 °C difference (> 2 °C): non-condensables present (air or nitrogen).', 'Recover the refrigerant, evacuate properly, recharge.'],
    },
    {
      type: 'exercise',
      question: 'A motor runs at 1,400 rpm with a 120 mm pulley. What fan pulley diameter gives 1,650 rpm?',
      solution: ['D = (1,400 / 1,650) × 120 ≈ 102 mm → a 100 mm pulley.', 'Before the change, check that the motor has current margin: airflow rises by ≈ 18 % and absorbed power much more.'],
    },
  ],
};
