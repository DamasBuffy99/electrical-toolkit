import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const disconnectSwitchesContent: TopicContent = {
  title: 'Disconnect switches',
  subtitle: 'Where to place them and how to size them for motors, heating, air conditioning and capacitors',
  blocks: [
    {
      type: 'text',
      text: 'A disconnect switch (safety switch) completely isolates a circuit from its source for maintenance or repair. It is required for air conditioning, water heaters, exhaust fans, hand dryers and motors.',
    },
    { type: 'image', source: SLIDES['cond-117'], caption: 'NEC definition of a disconnecting means' },

    { type: 'heading', text: '1 · Where to place it (NEC)' },
    {
      type: 'bullets',
      items: [
        '"In sight" from the equipment: within 15 m (50 ft) and with no obstruction (wall) between the switch and the appliance.',
        'NEC 110.22: each disconnect carries a durable, specific label — "motor, water pump", not just "motor".',
        'On the drawing each disconnect is one panel circuit: DB-FF/L1 single-phase, DB-FF/L1,3,5 three-phase.',
        'NEC 422.31: for an appliance ≤ 300 VA or 1/8 HP, the branch breaker is enough if in sight or lockable; above that, same rule with 430.109 for motors.',
        'NEC 430.102: a disconnect in sight of the motor and the driven machinery; the controller disconnect may serve if in sight.',
        'Cord-connected equipment (window AC, fridge): the plug and receptacle serve as the disconnect (440.13).',
        'Motors > 100 HP AC: an isolating switch marked "Do not operate under load" is permitted.',
      ],
    },
    { type: 'image', source: SLIDES['cond-118'], caption: '"In sight" disconnect: 50 ft, unobstructed' },
    { type: 'image', source: SLIDES['cond-131'], caption: 'Parts of a motor circuit' },

    { type: 'heading', text: '2 · Disconnect switch characteristics' },
    {
      type: 'table',
      headers: ['Characteristic', 'Values (Siemens)'],
      rows: [
        ['General duty', '30, 60, 100, 200, 400, 600 A · 100 kA short-circuit withstand'],
        ['Heavy duty', '30 to 1,200 A · 200 kA withstand'],
        ['Bolted pressure', '800 to 4,000 A'],
        ['Voltage', 'At least the circuit voltage (600 V on 480 V: yes; 240 V on 480 V: no)'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Poles: number of conductors opened at once (a three-phase motor → 3 poles). The neutral is not counted as a pole.',
        'Fused (F) or non-fused (NF): if overcurrent protection is needed, choose a fused switch.',
        'Throws: single or double; a double throw transfers a load between two sources.',
        'NEMA enclosure: Type 1 indoors, Type 3R outdoors (rain, sleet).',
      ],
    },
    { type: 'image', source: SLIDES['cond-133'], caption: 'Ampere ratings' },
    { type: 'image', source: SLIDES['cond-134'], caption: 'Short-circuit withstand and voltage' },
    { type: 'image', source: SLIDES['cond-137'], caption: 'Number of poles' },
    { type: 'image', source: SLIDES['cond-139'], caption: 'Throws' },
    { type: 'image', source: SLIDES['cond-142'], caption: 'Reading a catalogue number' },
    { type: 'image', source: SLIDES['cond-144'], caption: 'NEMA enclosures' },

    { type: 'heading', text: '3 · Heating and non-motor equipment' },
    {
      type: 'text',
      text: 'NEC 424.19 / 425.19: the disconnect opens all ungrounded conductors simultaneously, rated ≥ 125% of the total load (motors + heaters), and must be lockable.',
    },
    { type: 'formula', text: 'Example: three-phase 240 V heater, 45 A → 1.25 × 45 = 56 A → 60 A, 240 V, 3-pole, non-fused switch, Type 1' },
    { type: 'image', source: SLIDES['cond-147'], caption: 'Example: 45 A heater' },

    { type: 'heading', text: '4 · Motors: non-fused disconnect (NEC 430.110)' },
    { type: 'formula', text: 'Rating ≥ 1.15 × FLC (NEC tables, not the nameplate)' },
    {
      type: 'text',
      text: 'FLCs from tables 430.247 to 430.250 are used for conductors, protective devices and disconnects; the nameplate current is used for overload relays (except low-speed < 1,200 rpm, high-torque or multispeed motors).',
    },
    { type: 'formula', text: 'Example: 10 HP motor, 440 V → FLC = 14 A → 1.15 × 14 = 16.1 A → ABB OT16F3 (20 A, 10 HP)' },
    {
      type: 'text',
      text: 'Combined loads (430.110(C)): add the full-load currents (FLC) and the locked-rotor currents (LRC, tables 430.251) of all loads, as one equivalent motor. Choose the higher HP between the one given by the FLC and the one given by the LRC. Rating ≥ 115% of the sum of the FLCs.',
    },
    { type: 'formula', text: 'Example: equivalent HP from FLC = 20 HP, from LRC = 15 HP → 20 HP switch' },
    { type: 'image', source: SLIDES['cond-150'], caption: 'NEC 430.110: 115% of FLC' },
    { type: 'image', source: SLIDES['cond-154'], caption: 'Example: 10 HP motor' },
    { type: 'image', source: SLIDES['cond-157'], caption: 'Locked-rotor currents (NEC tables)' },
    { type: 'image', source: SLIDES['cond-159'], caption: 'Combined load example' },
    { type: 'image', source: SLIDES['cond-162'], caption: 'Selection from the ABB catalogue' },

    { type: 'heading', text: '5 · Air conditioning (NEC 440.12)' },
    {
      type: 'text',
      text: 'For a hermetic compressor, use the nameplate rated-load current (RLA) or the branch-circuit selection current (BCSC), whichever is greater. Rating ≥ 115% of that current, and equivalent HP from the tables using the current and the locked-rotor current.',
    },
    { type: 'image', source: SLIDES['cond-165'], caption: 'NEC 440.12' },

    { type: 'heading', text: '6 · Motors: fused disconnect' },
    { type: 'text', text: 'Siemens switches have dual HP ratings: standard with non-time-delay fuses, maximum with time-delay fuses.' },
    { type: 'subheading', text: 'Example: 75 HP motor, 480 V three-phase, RK5 time-delay fuse, 200 kA fault current' },
    { type: 'formula', text: 'FLC (table 430.250) = 96 A → fuse = 1.75 × 96 = 168 A → standard 175 A' },
    { type: 'text', text: 'Heavy duty 600 V switch, Type 1 indoor, "Max" column (time-delay fuses): HF364, 200 A.' },
    { type: 'image', source: SLIDES['cond-170'], caption: 'Selection from the Siemens catalogue' },
    { type: 'image', source: SLIDES['cond-173'], caption: '175 A fuse per NEC 430.52' },

    { type: 'heading', text: '7 · Capacitors and code letter' },
    {
      type: 'text',
      text: 'NEC 460: capacitor bank conductors and disconnect ≥ 135% of the rated current (manufacturing tolerance 0 to +15%). No separate disconnect if the capacitor is on the load side of a motor controller.',
    },
    { type: 'formula', text: 'I = kvar × 1000 / (√3 × V)' },
    {
      type: 'text',
      text: 'The locked-rotor indicating code letter (NEMA, NEC table 430.7(B)) on the nameplate gives the starting kVA per HP: it is used to calculate the motor starting current.',
    },
    { type: 'image', source: SLIDES['cond-175'], caption: 'NEC 460: 135%' },
    { type: 'image', source: SLIDES['cond-177'], caption: 'Locked-rotor code letter' },
    { type: 'image', source: SLIDES['cond-179'], caption: 'Code letter example' },
  ],
};
