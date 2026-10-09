import { TopicContent } from '../../../types';

export const abcControlContent: TopicContent = {
  title: 'Control: from on/off to PID and building management',
  subtitle: 'Control actions, controllers, inputs/outputs, building management systems, protocols and sensors',
  blocks: [
    {
      type: 'text',
      text: 'Controlling means keeping a quantity (temperature, humidity, pressure, flow) at its setpoint despite disturbances. The controller compares the measurement with the setpoint and acts on an actuator (compressor, valve, damper, fan). Good control delivers comfort… and a good share of the savings.',
    },
    { type: 'illustration', name: 'tech-pid', caption: 'On/off, proportional, proportional-integral: three responses to the same setpoint' },

    { type: 'heading', text: 'Control actions' },
    {
      type: 'table',
      headers: ['Action', 'How it works', 'Result'],
      rows: [
        ['On/off', 'on/off around a setpoint and a differential', 'simple, but temperature oscillates'],
        ['Proportional (P)', 'output proportional to the error, over a “proportional band”', 'stable but with a residual offset; too aggressive, it “hunts”'],
        ['Integral (I)', 'adds the history of errors over time (integral time in s)', 'removes the offset; always combined with P (PI)'],
        ['Derivative (D)', 'reacts to the rate of change', 'anticipates overshoots; useful on air, with low inertia'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Proportional band (PB): error range over which the output goes from 0 to 100 %. A zero PB amounts to on/off.',
        'Expressed as a gain: output = gain × error. Example: setpoint 22 °C, measurement 20 °C, gain 20 → 2 × 20 = 40 %.',
      ],
    },
    {
      type: 'warning',
      text: 'The book’s proportional band examples are confusing: an output varying “from 10 to 20 V” (standard signals are 0–10 V or 2–10 V), and a % calculation that divides by the measurement (“(26 − 24) / (26 × 20 %)”). The usual definition is simpler: with a PB of X kelvins, output (%) = error / X × 100. Example: PB of 4 K and error of 2 K → output 50 %.',
    },

    { type: 'heading', text: 'Analogue or digital' },
    {
      type: 'bullets',
      items: [
        'Analogue controller: based on a Wheatstone bridge; signal proportional to the error; no communication; P, PI or PID actions.',
        'Digital controller (PLC): a microprocessor runs a program (P, PI, PID or more advanced algorithms), keeps its configuration in memory, communicates over a bus (2 wires).',
      ],
    },
    {
      type: 'table',
      headers: ['Type', 'Signal', 'Examples'],
      rows: [
        ['AI (analogue input)', 'continuous value', 'room and supply sensors, pressure transducers'],
        ['DI (digital input)', 'open/closed contact', 'HP/LP switches, air pressure switch, safeties'],
        ['AO (analogue output)', '0–10 V', '3-way valves, dampers, triacs'],
        ['DO (digital output)', 'on/off', 'compressors, pumps, fans'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Controller functions: display and alarms, calendar and clock, password-protected access, extensions (remote monitoring, Internet).',
        'Electromechanical control is still very common for anti-short-cycling, cascade starting and compressor rotation.',
      ],
    },

    { type: 'heading', text: 'Building management and protocols' },
    {
      type: 'bullets',
      items: [
        'Centralised technical management drives thermal equipment (heating, air conditioning, refrigeration). A building management system (BMS) covers everything electrical as well (lighting, access, fire, irrigation…).',
        'A supervisor (PC) collects data from the controllers, displays synoptic views, records trends and alarms, and sends commands (time schedules, setpoints, load shedding).',
        'Benefits: energy savings, comfort, operating costs, remote troubleshooting, 24/7 monitoring, alarms by e-mail or SMS. In a supermarket, heating, air conditioning and food refrigeration account for over half of consumption.',
        'Equipment from different brands communicates via open protocols, with gateways if needed.',
      ],
    },
    {
      type: 'table',
      headers: ['Protocol', 'Use'],
      rows: [
        ['BACnet', 'ASHRAE standard for building management: air conditioning, heating, ventilation, access, fire (Ethernet, RS232, RS485)'],
        ['Modbus', 'simple, public, master/slaves: controllers, chillers, air conditioners, drives'],
        ['M-Bus', 'energy, flow and temperature metering'],
        ['KNX (EIB)', 'home and commercial building automation: lighting, blinds, heating'],
        ['LonWorks, TCP/IP', 'building networks, Internet'],
      ],
    },

    { type: 'heading', text: 'Sensors' },
    {
      type: 'bullets',
      items: [
        'NTC thermistors: resistance DECREASES as temperature rises; the most used for measurement and control.',
        'PTC thermistors: resistance INCREASES sharply over a narrow range; mainly used for thermal protection (motors).',
        'PT100 / PT1000 platinum resistance sensors: 100 Ω or 1,000 Ω at 0 °C, linear and accurate.',
        'VOC sensor (air quality): heated semiconductor whose resistance varies with volatile organic compounds (smoke, odours); drives ventilation.',
        'CO₂ sensor: meters fresh air according to actual occupancy.',
      ],
    },
    {
      type: 'warning',
      text: 'The book lists PT100 and PT1000 among PTC thermistors. They are PLATINUM resistance sensors (RTDs): their resistance increases with temperature, but almost linearly and over a very wide range, nothing like the strong non-linearity of a protection PTC.',
    },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A P controller has a 3 K proportional band for a 0–10 V valve. Setpoint 24 °C, measurement 25.2 °C (cooling). What control voltage?',
      solution: ['Error = 1.2 K; output = 1.2 / 3 = 40 %.', 'Voltage = 40 % × 10 V = 4 V: the chilled-water valve is 40 % open.'],
    },
    {
      type: 'exercise',
      question: 'Classify as AI, DI, AO or DO: return-air sensor, HP switch, proportional 3-way valve, pump contactor, duct pressure transducer.',
      solution: ['Return-air sensor: AI.', 'HP switch: DI.', '0–10 V 3-way valve: AO.', 'Pump contactor: DO.', 'Duct pressure transducer: AI.'],
    },
  ],
};
