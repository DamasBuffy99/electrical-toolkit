import { TopicContent } from '../../types';

export const factoryStartingContent: TopicContent = {
  title: 'Starting a motor without bringing everything down',
  subtitle: 'When starting, a motor draws six to eight times its current. On the transformer that’s fine; on the generator it can stop everything. Awa chooses a starting method for each machine.',
  blocks: [
    { type: 'scene', text: 'Month 1 · Plant meeting room' },
    {
      type: 'objectives',
      items: [
        'Estimate the voltage dip when a motor starts.',
        'Compare DOL, star-delta, soft starter and drive.',
        'Choose the starting method of each machine.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '≈ 7 I_n', label: 'inrush direct-on-line' },
        { value: '478 kVA', label: 'compressor inrush DOL' },
        { value: '≈ 3 I_n', label: 'with a soft starter' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'team',
      text: 'When the compressor starts while we’re on the generator, everything goes off: the bottling line PLCs drop out and we have to restart everything. In the end we banned starting the compressor during outages.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'That’s exactly the problem with direct-on-line starting. A motor at standstill behaves almost like a short circuit: for a few seconds it draws about seven times its rated current. The transformer can take it, but your generator, much weaker in short-circuit terms, sees its voltage collapse.',
    },
    { type: 'illustration', name: 'motor-start', caption: 'Starting current by method: direct, star-delta, soft starter, variable-speed drive' },

    { type: 'heading', text: '1 · How much does starting pull the voltage down?' },
    {
      type: 'text',
      text: 'A simple estimate: the voltage dip at start-up is roughly the starting power divided by the short-circuit power of the source. The “stronger” the source, the less it moves.',
    },
    { type: 'formula', text: 'ΔU (%) ≈ \\frac{S_{start}}{S_{sc}} × 100' },
    { type: 'formula', text: 'Compressor direct-on-line: I_s ≈ 7 × 98 ≈ 690 A   ;   S_{start} = √3 × 400 × 690 ≈ 478 kVA' },
    {
      type: 'table',
      headers: ['Source', 'Short-circuit power', 'Dip with direct-on-line start'],
      rows: [
        ['400 kVA transformer (u_k = 4%)', '400 / 0.04 = 10 MVA', '478 / 10,000 ≈ 5%: acceptable'],
        ['250 kVA generator (reactance ≈ 15%)', '250 / 0.15 ≈ 1.7 MVA', '478 / 1,670 ≈ 29%: the generator drops out'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'So my generator is too small? I’d need 600 kVA?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'That would be the most expensive solution. Instead we can soften the start. If the compressor only draws three times its current, the dip on the generator falls to around 12%: the PLCs hold and your current generator is enough.',
    },

    { type: 'heading', text: '2 · Starting methods' },
    {
      type: 'table',
      headers: ['Method', 'Inrush current', 'Starting torque', 'Used for'],
      rows: [
        ['Direct-on-line', '6 to 8 × In', 'maximum', 'small motors, strong network; simple and robust'],
        ['Star-delta', '≈ 2.3 × In, with a peak at changeover', 'reduced (≈ 1/3)', 'machines starting unloaded; motor rated for delta at network voltage'],
        ['Soft starter', '≈ 3 × In, adjustable', 'reduced, progressive', 'pumps, compressors, fans; no speed variation afterwards'],
        ['Variable-frequency drive', '≈ 1.2 × In', 'rated from standstill', 'when speed must vary; energy savings'],
      ],
    },
    { type: 'illustration', name: 'tech-stardelta', caption: 'Star-delta: 230 V per winding at start, 400 V running' },
    { type: 'fiche', id: 'voltage-drop', why: 'Voltage drop and the case of motors at start-up.' },

    { type: 'heading', text: '3 · The choice for each machine' },
    {
      type: 'table',
      headers: ['Machine', 'Method chosen', 'Why'],
      rows: [
        ['55 kW compressor', 'soft starter', 'it starts at reduced load; limiting inrush to 3 × In lets it restart on the generator'],
        ['15 kW process pumps', 'direct-on-line', '7 × 28 ≈ 200 A only: the dip stays small, even on the generator (≈ 8%)'],
        ['7.5 kW conveyors', 'variable-speed drive', 'line speed must adjust to the filler'],
        ['Refrigeration unit', 'manufacturer’s starter', 'supplied and warranted with the machine'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'team',
      text: 'Why not drives everywhere then? They’re the smoothest.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Because a drive costs more, heats up, needs ventilation and produces harmonics that disturb the network. It’s justified when speed must vary: then it even saves energy. For a pump that always runs at the same speed, direct-on-line starting is unbeatable for simplicity.',
    },
    {
      type: 'note',
      text: 'A rule of caution: avoid simultaneous starts. After an outage, the plant PLC staggers the starts by a few seconds so the generator never has to absorb two inrushes at once.',
    },
    {
      type: 'regional',
      text: 'With daily outages, every restart of the plant on the generator and then back on the network multiplies motor starts. That’s why in West Africa starting is sized with the generator in mind first: it is the weakest link.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'A direct-on-line start draws 6 to 8 times rated current for a few seconds.',
        'Starting dip ≈ starting S / short-circuit S of the source: a generator is far more sensitive than a transformer.',
        'Star-delta and soft starters reduce the inrush; a drive removes it and allows speed variation.',
        'Choose machine by machine, and stagger the starts.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'With the soft starter set to 3 × In, what voltage dip does the compressor cause on the 250 kVA generator?',
      solution: [
        'I_s = 3 × 98 ≈ 294 A; S = √3 × 400 × 294 ≈ 204 kVA.',
        'ΔU ≈ 204 / 1,670 ≈ 12%: the voltage stays above the level where PLCs drop out (often −15%).',
      ],
    },
    {
      type: 'exercise',
      question: 'Why would star-delta be unsuitable for a pump that must start against high pressure?',
      solution: [
        'In star, starting torque falls to about a third of direct-on-line torque.',
        'If the pump needs high torque from standstill, the motor doesn’t accelerate enough in star; at the changeover to delta it suffers another violent inrush. A soft starter or a drive is preferred.',
      ],
    },
  ],
};
