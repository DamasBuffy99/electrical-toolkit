import { TopicContent } from '../../types';

export const villaSafetyContent: TopicContent = {
  title: 'Protecting the family: RCDs and earthing',
  subtitle: 'Esther has two children and one simple question: “Can they get electrocuted?”. Awa explains how the earth electrode and the 30 mA RCDs work together.',
  blocks: [
    { type: 'scene', text: 'Week 4 · At the Mensahs’' },
    {
      type: 'objectives',
      items: [
        'Understand the effects of current on the body.',
        'See how an insulation fault arises.',
        'Explain how the 30 mA RCD works.',
        'Calculate the allowed earth resistance in TT.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '30 mA', label: 'RCD sensitivity' },
        { value: '50 V', label: 'touch voltage limit' },
        { value: '≤ 100 Ω', label: 'target earth with a 500 mA device' },
        { value: '38 Ω', label: 'measured earth' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'At my sister’s, the washing machine “tingles” when you touch it barefoot. How can I be sure it won’t happen here?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'That tingle is current flowing through your sister’s body to reach the earth. It’s an alarm: the machine has a fault and the installation isn’t protecting against it. In your house, two devices will work together so it can’t last more than a fraction of a second.',
    },

    { type: 'heading', text: '1 · What is dangerous is the current' },
    {
      type: 'text',
      text: 'The human body conducts electricity. What hurts, then kills, is the current flowing through it and how long it flows.',
    },
    {
      type: 'table',
      headers: ['Current through the body', 'Effect'],
      rows: [
        ['1 mA', 'threshold of perception: a tingle'],
        ['10 to 20 mA', 'muscle contraction: you can no longer let go'],
        ['50 mA', 'breathing difficulties'],
        ['100 to 300 mA', 'heart fibrillation, often fatal'],
      ],
    },
    {
      type: 'text',
      text: 'With a body resistance of about 1,000 Ω (barefoot on a damp floor, even less), 230 V can drive more than 200 mA: well above the lethal threshold. Hence the basic rule: a touch voltage above 50 V must never last.',
    },
    { type: 'fiche', id: 'electrical-safety', why: 'Effects of current, direct and indirect contact, earthing systems.' },

    { type: 'heading', text: '2 · The fault: when the casing becomes live' },
    { type: 'illustration', name: 'earthing-tt', caption: 'TT system: the fault current returns to the transformer through the soil; the RCD detects it' },
    {
      type: 'text',
      text: 'Imagine that, inside the washing machine, a damaged wire touches the metal casing. Thanks to the green-and-yellow protective conductor (PE), the casing is connected to the house earth electrode (R_A). The fault current therefore flows through the soil back to the earth electrode of the utility transformer (R_B).',
    },
    { type: 'formula', text: 'I_d = \\frac{U}{R_A + R_B} = \\frac{230}{38 + 10} ≈ 4.8 A' },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: '4.8 amps? But then the washing machine’s 20 A breaker will never trip!',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Exactly, you’ve found the trap. Meanwhile the casing rises to about 180 V relative to the ground. The breaker is useless here: it’s the RCD that saves the day.',
    },
    { type: 'formula', text: 'U_{touch} = R_A × I_d = 38 × 4.8 ≈ 182 V   (≫ 50 V: dangerous)' },

    { type: 'heading', text: '3 · The RCD: it counts what goes out and what comes back' },
    {
      type: 'text',
      text: 'An RCD constantly compares the current going out on the phase and the current coming back on the neutral. Normally they are equal. If more than 30 mA is missing on the return, that current is escaping elsewhere, perhaps through a human body: it cuts off within a few tens of milliseconds.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'In our example the leak is 4.8 A, 160 times the 30 mA threshold. The RCD cuts instantly, before anyone touches the machine. And even if a child pokes fingers into a socket despite the shutters, the current flowing through their body to the ground is also a leak: the 30 mA device cuts before the dangerous threshold.',
    },
    {
      type: 'note',
      text: 'The circuit breaker and the RCD have different jobs. The breaker protects cables against overloads and short circuits (amps). The RCD protects people against leaks (milliamps). You need both.',
    },

    { type: 'heading', text: '4 · The earth electrode: how many ohms?' },
    {
      type: 'text',
      text: 'In this system, called TT, the safety condition is simple: the fault voltage must not exceed 50 V until the RCD has tripped.',
    },
    { type: 'formula', text: 'R_A × I_{Δn} ≤ 50 V' },
    {
      type: 'bullets',
      items: [
        'With 30 mA RCDs: R_A ≤ 50 / 0.03 ≈ 1,667 Ω. Very easy to meet.',
        'But the service breaker at the head of the installation is a 500 mA residual device: R_A ≤ 50 / 0.5 = 100 Ω. That is the value we aim for.',
      ],
    },
    {
      type: 'text',
      text: 'The copper loop laid in the foundations in week one pays off: on site, Moussa will measure 38 Ω, well below 100 Ω. A single rod driven into dry soil could have given several hundred ohms.',
    },
    { type: 'fiche', id: 'earthing', why: 'Soil resistivity, rods, foundation loops, resistance calculation.' },

    { type: 'heading', text: '5 · The bathroom: equipotential bonding' },
    {
      type: 'text',
      text: 'In the bathroom, a wet body conducts much better. Awa has all the metal parts (pipes, shower waste, metal frame) bonded together and to the protective conductor: if a fault occurs, they all rise to the same voltage and no current flows through the person touching them.',
    },
    {
      type: 'regional',
      text: 'The TT system is the rule for customers connected to the public low-voltage network. Dry lateritic soils can have a high resistivity in the dry season: a foundation loop, or several rods bonded together and spaced by their own length, gives far better results than a single rod. Measure the earth in the dry season: it is the worst case.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'What kills is the current through the body: a few tens of milliamps are enough.',
        'In TT, an insulation fault only drives a few amps: the breaker doesn’t trip, the RCD does.',
        'Safety condition: R_A × I_Δn ≤ 50 V; with a 500 mA service device, aim for R_A ≤ 100 Ω.',
        'Every metal appliance is connected to PE; the bathroom gets equipotential bonding.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A house’s earth electrode measures 150 Ω. The service is protected by a 500 mA residual device. Is that acceptable? What do you suggest?',
      solution: [
        '150 × 0.5 = 75 V > 50 V: the condition is not met for the service device.',
        'The earth must be improved (extra rods bonded together, a loop, soil treatment) until it is below 100 Ω.',
        'The 30 mA RCDs remain effective (150 × 0.03 = 4.5 V), but protection at the head of the installation is no longer guaranteed.',
      ],
    },
    {
      type: 'exercise',
      question: 'Why should an RCD’s “Test” button be pressed regularly?',
      solution: [
        'The button creates an artificial leak and checks that the mechanism opens. An RCD that hasn’t operated for years can seize up.',
        'Awa advises the Mensahs to press it once a month: if the RCD doesn’t trip, it must be replaced.',
      ],
    },
  ],
};
