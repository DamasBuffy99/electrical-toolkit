import { TopicContent } from '../../../types';

export const abcElectricContent: TopicContent = {
  title: 'Motors, starting methods, protection and drives',
  subtitle: 'Electricity applied to air conditioners: reading a diagram, starting and protecting a motor, varying its speed',
  blocks: [
    {
      type: 'text',
      text: 'A refrigeration technician spends as much time on electricity as on refrigerant: most “won’t start” faults are electrical. The general basics (voltage, current, power, earthing systems, cables) are in the “Course Notes” tab; here we focus on what is specific to air conditioners.',
    },
    { type: 'illustration', name: 'tech-stardelta', caption: 'Star-delta starting divides the inrush current by 3' },

    { type: 'heading', text: 'Reading an air-conditioning diagram' },
    {
      type: 'bullets',
      items: [
        'Single-line diagram: one line for several conductors (overview). Multi-line diagram: every conductor, power and control shown separately.',
        'Auxiliary contact numbering: the units digit gives the function — 1-2 normally closed, 3-4 normally open, 5-6 and 7-8 time-delayed contacts. Power poles are numbered 1 to 6 (8 for four-pole).',
        'Usual letters: KM contactor, KA relay, F protection, Q circuit breaker/isolator, S control device (thermostat, pressure switch), B sensor, M motor, C capacitor, Y solenoid valve, T transformer, X terminal block.',
        'The “safety chain” (emergency stop, HP and LP switches, overload relays…) is wired in series before the compressor contactor coil.',
        'Self-holding (latching): a relay contact in parallel with the start button; after a fault, it must be deliberately reset.',
      ],
    },

    { type: 'heading', text: 'The three-phase induction motor' },
    {
      type: 'bullets',
      items: [
        'Stator: three windings at 120° creating a rotating field. Rotor: squirrel cage (most common) or wound.',
        'The rotor turns slightly slower than the field: this is slip (2 to 5 %).',
        'Connection according to the nameplate: a 230/400 V motor is connected in star on a 400 V network; a 400/690 V motor is connected in delta on 400 V.',
        'Typical cos φ ≈ 0.8; efficiency = output power / input power.',
      ],
    },
    { type: 'formula', text: 'Ns = 60 × f / p   ;   P input = √3 × U × I × cos φ   ;   I ≈ P / (√3 × U × cos φ)' },
    { type: 'note', text: 'Field shortcut on 400 V three-phase: I (A) ≈ P (W) / 600. Handy, but approximate.' },

    { type: 'heading', text: 'Limiting starting current' },
    {
      type: 'bullets',
      items: [
        'Direct-on-line, a motor draws 4 to 8 times its rated current: voltage dips, nuisance tripping.',
        'Star-delta: start in star (reduced voltage) then switch to delta after a time delay; 3 contactors. Only for a motor whose delta connection matches the network voltage (400/690 V on 400 V).',
        'Part-winding: two independent windings (50/50 or 66/33) energised one after the other (< 1 s); take care to wire them to turn in the same direction.',
        'Dahlander: two-speed motor (50/100 %) for extractors and AHUs.',
        'Soft starter or variable-frequency drive: the modern solution.',
      ],
    },

    { type: 'heading', text: 'Single-phase motors and capacitors' },
    {
      type: 'bullets',
      items: [
        'Two windings: run (thick wire, low resistance) and start (thin wire, higher resistance). Resistance measured between the outer terminals = sum of both.',
        'PTC (thermistor) starting: feeds the start winding for 1 to 2 s then cuts it as it heats up; low torque, for capillary circuits (pressures equalised at standstill).',
        'PSC: permanent capacitor in series with the auxiliary winding; small compressors and fans.',
        'RSIR: current or voltage relay that cuts the start winding. CSIR: the same with a start capacitor (high torque, thermostatic expansion valve).',
        'Run capacitor (paper/film): low capacitance, stays energised. Start capacitor (electrolytic): high capacitance (> 100 µF), must NEVER stay energised.',
        'A swollen capacitor is dead. Always discharge it (short the terminals through a resistor or an insulated tool) before handling it.',
      ],
    },
    { type: 'formula', text: 'Capacitance of a capacitor in operation (50 Hz): C (µF) ≈ 3,185 × I / U' },

    { type: 'heading', text: 'Protection devices' },
    {
      type: 'table',
      headers: ['Protection', 'Against', 'Good to know'],
      rows: [
        ['gG / aM fuse', 'overloads / short circuits', 'aM “motor rated”: tolerates the starting inrush'],
        ['Fuse switch-disconnector', 'isolates and protects the panel', 'early-break contact in the control circuit'],
        ['Thermal overload relay', 'prolonged overload, running on 2 phases', 'three bimetals; no breaking capacity (acts on the contactor coil); set to the NAMEPLATE current, never above'],
        ['Motor circuit breaker (thermal-magnetic)', 'overload (adjustable thermal) and short circuit (magnetic 3 to 15 In)', 'many accessories (auxiliary contacts, undervoltage release)'],
        ['Residual current device (RCD)', 'insulation fault: protects people', '30 mA (people) or 300 mA (fire)'],
        ['Thermistor overheat relay (Kriwan type)', 'overheating of the compressor windings', 'PTC sensors in the winding; trips at about 100 °C, resets at ≈ 90 °C'],
        ['Multi-function protection modules', 'overheating, phase loss, locked rotor, oil pressure…', 'fault history, Modbus communication'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Contactor: coil (24 to 400 V, AC or DC), power poles, auxiliary contacts; chosen by coil voltage, the load’s voltage and power, and breaking capacity.',
        'Causes of overcurrent: undervoltage, mechanical overload (bearings), running on two phases, fan over-flow, too-frequent starts.',
      ],
    },

    { type: 'heading', text: 'EC motors, stepper motors and drives' },
    {
      type: 'bullets',
      items: [
        'EC (electronically commutated) motor: brushless permanent-magnet DC motor, fed from AC through its electronics; speed controlled by 0–10 V or PWM; up to 40 % savings compared with an induction motor. Condenser, evaporator and extractor fans.',
        'Stepper motor (permanent magnet): each pulse turns it by one step (e.g. 1.8°, i.e. 200 steps/rev); this is the motor in electronic expansion valves.',
        'Phase-angle controller (triac): chops the sine wave; for small propeller or tangential fans; the motor runs hotter at low speed.',
        'Variable-frequency drive: rectifier + filter + inverter (PWM) + control (ramps, protection, bus). Shielded motor cables against interference.',
        '80 % of industrial electricity goes through motors: reducing their speed to what is really needed pays off handsomely.',
      ],
    },

    { type: 'heading', text: 'Transformers and cables' },
    {
      type: 'bullets',
      items: [
        'Control transformers step 230 or 400 V down to 24 V (remote control, controllers); they change voltage and current, not frequency. Available current: I = VA / V (100 VA / 24 V ≈ 4.2 A).',
        'Cable cross-section: must limit heating AND voltage drop (3 % for lighting, 5 % for a motor); resistance increases with length and decreases with cross-section.',
      ],
    },
    { type: 'formula', text: 'Single-phase: S (mm²) = 2 × ρ × L × I / ΔU   ;   Three-phase: S = √3 × ρ × L × I × cos φ / ΔU   (ρ copper ≈ 0.0225 Ω·mm²/m in service)' },
    {
      type: 'warning',
      text: 'One cable formula in the book MULTIPLIES by the voltage drop (“S = 2 × R × L × (I/1000) × e”). The allowable voltage drop must be in the DENOMINATOR: the more voltage drop you accept, the smaller the cross-section can be. Detailed cable sizing is covered in the electrical course (“Voltage drop” lesson).',
    },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A three-phase 400 V compressor draws 7.5 kW with a cos φ of 0.82. What current? What should its overload relay be set to?',
      solution: ['I = 7,500 / (1.732 × 400 × 0.82) ≈ 13.2 A (the 7,500/600 shortcut gives 12.5 A).', 'The overload relay is set to the rated current on the motor NAMEPLATE, never above (not to the measured current if it differs).'],
    },
    {
      type: 'exercise',
      question: 'A single-phase 230 V fan draws 0.6 A running with its run capacitor. What capacitance should you roughly expect?',
      solution: ['C ≈ 3,185 × 0.6 / 230 ≈ 8.3 µF: check that the fitted capacitor bears a similar value (for example 8 µF ± 5 %).'],
    },
    {
      type: 'exercise',
      question: 'A 400/690 V motor must be started star-delta on a 400 V network. Is it possible? And a 230/400 V motor?',
      solution: ['400/690 V: yes, it runs in delta on 400 V, so it can start in star then switch to delta.', '230/400 V: no, it already runs in star on 400 V; switching it to delta would overvolt it.'],
    },
  ],
};
