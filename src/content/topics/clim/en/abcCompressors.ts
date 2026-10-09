import { TopicContent } from '../../../types';

export const abcCompressorsContent: TopicContent = {
  title: 'Compressors: technologies, inverter and lubrication',
  subtitle: 'Reciprocating, rotary, scroll, screw, centrifugal; capacity control; lubrication',
  blocks: [
    {
      type: 'text',
      text: 'The compressor draws in low-pressure vapour and discharges it at high pressure and high temperature. It is the part that uses electricity, the most expensive one, and the one whose failure stops the whole installation. Each technology has its capacity range and its weak points.',
    },
    { type: 'illustration', name: 'tech-compressors', caption: 'The main compressor families' },

    { type: 'heading', text: 'The reciprocating compressor' },
    {
      type: 'text',
      text: 'A crankshaft (or an eccentric for small capacities) turns the motor’s rotation into the pistons’ reciprocating motion. As the piston goes down, suction opens the suction valve; as it goes up, it compresses the gas and then opens the discharge valve.',
    },
    {
      type: 'table',
      headers: ['Construction', 'Description', 'Use'],
      rows: [
        ['Hermetic', 'motor and compressor in a welded shell; motor cooled by suction gas (~3,000 rpm)', 'small capacities, not repairable'],
        ['Semi-hermetic', 'motor and compressor in one bolted housing; oil pump', 'medium capacities, repairable'],
        ['Open', 'separate motor; well-lubricated shaft seal', 'large capacities, any type of motor'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'The valves (suction and discharge) are the fragile parts: liquid drawn in wears or breaks them (“liquid slugging”), since a liquid is incompressible.',
        'The crankcase, at suction pressure, holds the oil reserve.',
        '“Discus” variant: conical valves built into the valve plate, less dead space; about 10 to 15 % less consumption.',
      ],
    },

    { type: 'heading', text: 'Rotary and scroll' },
    {
      type: 'bullets',
      items: [
        'Rolling-piston rotary: an eccentric piston turns in a cylinder, a vane separates suction and discharge. Flexible, smooth torque, quiet: widely used in small splits.',
        'Rotary vane: an eccentric rotor with sliding vanes; an old technology.',
        'Scroll: a moving spiral orbits inside a fixed one; gas is compressed from the outside towards the centre. Few parts, continuous compression, easy starting, tolerates a little liquid, ideal for variable speed.',
      ],
    },
    { type: 'note', text: 'A three-phase scroll only compresses in one direction of rotation. At start-up, check the phase sequence: a scroll running backwards is noisy and creates no pressure difference.' },

    { type: 'heading', text: 'Screw and centrifugal: large capacities' },
    {
      type: 'bullets',
      items: [
        'Screw (single screw with gate rotors, or twin male/female screws): continuous compression along the rotors, heavily oiled (sealing and cooling) with an oil separator. Capacity controlled from 15 to 100 % by slide valve or variable speed. About 30 to 1,000 kW.',
        'Centrifugal: an impeller at very high speed turns energy into pressure, like a centrifugal pump; several impellers in series. Above 1,000 kW (large shopping centres, industry). Controlled from 20 to 100 % by inlet guide vanes; risk of “surge” at low load; complex oil circuit.',
      ],
    },
    {
      type: 'note',
      text: 'Reminder from the IEPF guide: in Africa, screw compressors have sometimes ended up idle for lack of suitable maintenance; rugged technologies (reciprocating, centrifugal) have proven themselves over 20 years.',
    },

    { type: 'heading', text: 'The inverter: variable speed' },
    {
      type: 'text',
      text: 'A conventional compressor runs on/off. The inverter varies the frequency of the current, hence the speed, hence the swept volume and the capacity: the compressor continuously follows the room’s needs, without temperature swings or starting peaks.',
    },
    {
      type: 'bullets',
      items: [
        'The electronics rectify the alternating current, filter it (direct current), then “chop” it at the desired frequency (inverter, pulse-width modulation PWM).',
        'Two families: three-phase induction motor supplied at variable frequency, or — most common today — brushless DC motor with permanent magnets (“DC inverter”).',
        'A board fed with single-phase power recreates three phases itself for a three-phase compressor.',
      ],
    },
    { type: 'formula', text: 'Synchronous speed Ns = 60 × f / p   (f in Hz, p = number of pole pairs)' },
    {
      type: 'warning',
      text: 'The book writes that a “2-pole” motor runs at 1,500 rpm at 50 Hz. That is wrong: a 2-pole motor (1 pair) runs at 3,000 rpm; it is a 4-pole motor (2 pairs) that runs at 1,500 rpm. The proportions given remain correct: at 30 Hz it runs at 900 rpm, at 60 Hz at 1,800 rpm.',
    },

    { type: 'heading', text: 'Controlling compressor capacity' },
    {
      type: 'table',
      headers: ['Method', 'Principle', 'Comment'],
      rows: [
        ['On/off', 'start/stop on a thermostat', 'simple, but temperature swings and consumption peaks'],
        ['Pump down', 'liquid solenoid valve + LP switch', 'stops “empty”, prevents liquid migration'],
        ['Cylinder unloading', 'suction valves held open', 'reciprocating compressors'],
        ['Hot-gas bypass', 'bypass from discharge to suction', 'keeps a correct LP, but wastes energy'],
        ['Slide valve', 'part of the screw no longer compresses', 'screw compressors'],
        ['Variable speed', 'inverter or frequency drive', 'the most efficient method'],
        ['Digital scroll', 'the fixed scroll lifts periodically (solenoid valve)', 'steps from 7 to 100 %, simple and reliable'],
      ],
    },

    { type: 'heading', text: 'Lubrication' },
    {
      type: 'bullets',
      items: [
        'Oil lubricates moving parts and removes the heat of mechanical work.',
        'Splash: connecting-rod heads dip into the crankcase oil (small slow compressors, ≤ 900 rpm).',
        'Oil pump at the end of the shaft: feeds bearings and pins through channels (semi-hermetic).',
        'Hermetic (reciprocating, scroll): hollow shaft with a helical groove that draws oil up by centrifugal force.',
        'Screw: oil injected between the rotors under HP, with a compulsory oil separator.',
      ],
    },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A 4-pole motor is supplied at 50 Hz, then by a drive at 35 Hz. What are its synchronous speeds? Its real speed at 50 Hz with 4 % slip?',
      solution: ['4 poles = 2 pairs: Ns = 60 × 50 / 2 = 1,500 rpm; at 35 Hz: 60 × 35 / 2 = 1,050 rpm.', 'Real speed at 50 Hz: 1,500 × (1 − 0.04) = 1,440 rpm.'],
    },
    {
      type: 'exercise',
      question: 'A room has very variable needs during the day. Between an on/off compressor with hot-gas bypass and an inverter, which should you choose and why?',
      solution: [
        'The inverter: it really reduces power input by reducing speed.',
        'Hot-gas bypass keeps the compressor at full speed and recycles compressed gas: electrical power stays almost the same, energy is wasted.',
      ],
    },
  ],
};
