import { TopicContent } from '../../types';

export const factoryFeedersContent: TopicContent = {
  title: 'Protecting motors and feeders',
  subtitle: 'A motor needs protection against two different dangers: the slow overload that cooks it, and the brutal short circuit. Awa assembles each motor feeder, then the large cable feeding the machine-room panel.',
  blocks: [
    { type: 'scene', text: 'Month 2 · Design office' },
    {
      type: 'objectives',
      items: [
        'Protect a motor, not just its cable.',
        'Size the feeder of a motor control centre.',
        'Check voltage and frequency of an imported machine.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '28.3 A', label: 'pump MPCB setting' },
        { value: '257 A', label: 'MCC feeder current' },
        { value: '320 A', label: 'setting of the 400 A way' },
      ],
    },
    { type: 'illustration', name: 'factory-sld', props: { highlight: 'motors' }, caption: 'The motor feeders of the main LV board' },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'Last year a pump burnt out although its breaker never tripped. How is that possible?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Because that breaker was probably rated to protect the cable, not the motor. A pump that labours a little, for instance because of a worn bearing, draws 20 or 30% too much for hours. The cable can take it, the motor winding can’t. You need a protection set exactly to the nameplate current.',
    },

    { type: 'heading', text: '1 · The motor feeder' },
    {
      type: 'table',
      headers: ['Element', 'Role', 'Setting'],
      rows: [
        ['Circuit breaker (magnetic part)', 'cuts the short circuit within milliseconds', 'high threshold (about 10 to 13 × In) to let the start through'],
        ['Thermal protection (relay or motor circuit breaker)', 'cuts prolonged overload and single-phasing', 'set to the nameplate current, never above'],
        ['Contactor', 'starts and stops the motor, thousands of times', 'controlled by the PLC or a push button'],
        ['Local isolator', 'lets the mechanic switch off and padlock on the spot', 'visible from the machine'],
      ],
    },
    {
      type: 'text',
      text: 'For the 15 kW pump (28.3 A), Awa chooses a motor circuit breaker set to 28.3 A: it combines thermal and magnetic protection. For the compressor (98 A), an adjustable 125 A breaker with its thermal protection set to 98 A, associated with the soft starter.',
    },
    { type: 'formula', text: 'Pump: I_r = I_{nameplate} = 28.3 A   ;   compressor: I_r = 98 A on a 125 A breaker' },
    {
      type: 'note',
      text: 'The local isolator is not a luxury: without it, a mechanic working on a pump depends on someone far away at the panel, who might restart it by mistake. Lock-out: switch off, padlock, check that the circuit is dead.',
    },
    { type: 'fiche', id: 'circuit-breaker', why: 'Motor circuit breakers, Ir and Im settings, curves.' },
    { type: 'fiche', id: 'disconnect-switches', why: 'Choosing and sizing disconnect switches, including for motors.' },

    { type: 'heading', text: '2 · The feeder to the machine-room panel' },
    {
      type: 'text',
      text: 'The compressor, the four pumps and the CIP pump are grouped in a panel in the machine room, fed by a single cable from the main board. For this feeder, the classic rule: take 1.25 times the current of the largest motor, plus the current of all the others.',
    },
    { type: 'formula', text: 'I_{feeder} = 1.25 × I_{largest} + Σ I_{others} = 1.25 × 98 + 4 × 28.3 + 21 ≈ 257 A' },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'The 1.25 factor on the largest motor covers the case where it starts or labours while all the others run. So I take an adjustable 400 A breaker, set to 0.8 × 400 = 320 A. It lets the starts through without tripping, and protects the cable we’ll size at the next step.',
    },
    { type: 'fiche', id: 'feeders', why: 'Sizing motor and panel feeders.' },
    { type: 'fiche', id: 'panel-design-examples', why: 'Two complete examples of panels with motors.' },

    { type: 'heading', text: '3 · The American machine' },
    {
      type: 'text',
      text: 'The new filler comes from the United States. Its documentation follows the US code (NEC): cables sized at 125% of the motor full-load current, 480 V and 60 Hz.',
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'team',
      text: 'Can we plug it in directly? The supplier says “400 to 480 V”.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Watch the frequency: our motors are 50 Hz, his are 60 Hz. On 50 Hz, a motor designed for 60 Hz runs 17% slower and, at the same voltage, overheats. I’m asking the manufacturer for the 400 V / 50 Hz version, or written confirmation that his motors and electronics accept it. The NEC methods remain useful to check his cables.',
    },
    { type: 'fiche', id: 'nec-conductors', why: 'The NEC: conductors, motors (FLC × 1.25) and conduits.' },
    {
      type: 'regional',
      text: 'Second-hand machines imported from North America are common in agro-industry: always check the voltage and above all the frequency (60 Hz) before buying. A transformer doesn’t change frequency; only a drive or a converter can supply a 60 Hz motor properly.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'A motor feeder combines short-circuit protection, thermal protection set to the nameplate current, a contactor and a local isolator.',
        'Thermal protection protects the motor; the breaker rating protects the cable.',
        'Feeder for a group of motors: 1.25 × the largest + the sum of the others.',
        'Imported machines: check voltage and frequency (50/60 Hz) first.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A 5th 15 kW pump is added to the panel. Recalculate the feeder current. Is the 320 A setting enough?',
      solution: [
        'I = 1.25 × 98 + 5 × 28.3 + 21 = 122.5 + 141.5 + 21 = 285 A.',
        '285 A < 320 A: the setting is enough, provided the cable carries at least 320 A once corrected.',
      ],
    },
    {
      type: 'exercise',
      question: 'Why isn’t the pump’s thermal protection set to 1.25 × 28.3 A, as for a cable?',
      solution: [
        'The thermal protection protects the motor: above its nameplate current, it heats abnormally.',
        'Set at 35 A, it would leave the motor 25% overloaded without ever reacting, burning it out within months.',
      ],
    },
  ],
};
