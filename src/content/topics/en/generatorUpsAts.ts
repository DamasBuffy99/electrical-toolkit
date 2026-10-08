import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const generatorUpsAtsContent: TopicContent = {
  title: 'Generator, ATS and UPS',
  subtitle: 'Keeping power on when the grid fails: backup, transfer and uninterruptible supply',
  blocks: [
    {
      type: 'text',
      text: 'When the grid fails, three pieces of equipment take over: the generator supplies backup energy, the automatic transfer switch (ATS) moves the loads onto it, and the UPS feeds critical loads with no interruption at all.',
    },

    { type: 'heading', text: '1 · Generator: ratings (ISO 8528-1)' },
    {
      type: 'table',
      headers: ['Rating', 'Typical load', 'Hours / year', 'Applications'],
      rows: [
        ['Standby', '≤ 70%, varying', '≈ 200 h', 'Building backup during outages'],
        ['Limited-time prime', '≤ 60%', '500 h', 'Rental, temporary power'],
        ['Prime', '60 – 70%, varying', 'Unlimited', 'Industry, pumping, construction, peak shaving'],
        ['Continuous', '70 – 100%, non-varying', 'Unlimited', 'Base load, cogeneration'],
      ],
    },
    { type: 'formula', text: 'Load factor = kWh produced / (kW × days × 24)' },
    {
      type: 'text',
      text: 'For sizing, the course uses the online Cummins PowerSuite tool: you enter the loads (motors, lighting…) and it proposes a suitable generator set.',
    },
    { type: 'image', source: SLIDES['gen-5'], caption: 'ISO 8528-1 ratings', focus: { x: 0.0, y: 0.22, w: 0.48, h: 0.76 } },

    { type: 'heading', text: '2 · Site considerations' },
    {
      type: 'bullets',
      items: [
        'The engine needs a given quantity of air: altitude, temperature and humidity change air density, and therefore the available power.',
        'Factors to check: ambient temperature, altitude, corrosive atmosphere, humidity, dust.',
        'Temperature: NEMA assumes 40 °C ambient or lower, with a 10 °C margin for the winding hot spot. Common classes are F and H.',
        "Altitude: the higher, the thinner the air → apply the manufacturer's derating chart.",
      ],
    },
    {
      type: 'table',
      headers: ['Class', 'Temperature rise', 'Rating'],
      rows: [
        ['F', '105 °C', 'Prime'],
        ['H', '125 °C', 'Prime'],
        ['F', '130 °C', 'Standby'],
        ['H', '150 °C', 'Standby'],
      ],
    },
    {
      type: 'text',
      text: 'Transient response: each time load is applied or removed, speed, voltage and frequency change briefly. ISO 8528 classifies sets from G1 (simple loads: lighting) to G4 (data processing, severe demands).',
    },
    { type: 'image', source: SLIDES['gen-9'], caption: 'Temperature rise of classes F and H' },
    { type: 'image', source: SLIDES['gen-10'], caption: 'Altitude / temperature derating chart' },
    { type: 'image', source: SLIDES['gen-12'], caption: 'ISO 8528 performance classes' },

    { type: 'heading', text: '3 · Automatic transfer switch (ATS)' },
    {
      type: 'text',
      text: 'The ATS ensures continuous supply to a load from one of two sources: N = normal power (utility), R = reserve power (generator).',
    },
    {
      type: 'bullets',
      items: [
        '1 → The utility fails.',
        "2 → The ATS transfers the load to the generator once its voltage and frequency are stable.",
        '3 → When the utility is restored, the ATS returns the load to it.',
        'Transfer and retransfer can be automatic or manually initiated.',
      ],
    },
    {
      type: 'note',
      text: "📌 Rating: the ATS matches the panel's main breaker (e.g. 100 A main breaker → 100 A ATS). Common range: 32 A to 800 A, 50/60 Hz.",
    },
    { type: 'image', source: SLIDES['cond-19'], caption: 'ATS: grid input, generator input, load output' },
    { type: 'image', source: SLIDES['cond-20'], caption: 'Transfer sequence' },
    { type: 'image', source: SLIDES['cond-21'], caption: 'Two-source arrangements' },
    { type: 'image', source: SLIDES['cond-22'], caption: 'Three-source arrangements' },

    { type: 'heading', text: '4 · UPS: principle' },
    {
      type: 'text',
      text: 'A UPS supplies power without interruption for a limited time from its batteries, and protects against surges. It is used for critical loads: hospitals, data centres, emergency lighting, computers.',
    },
    {
      type: 'bullets',
      items: [
        'Rectifier / charger: converts the AC mains to DC, charges the batteries and feeds the inverter.',
        'Inverter: recreates the AC voltage for the load.',
        'Static switch (bypass): on a UPS fault or overload, transfers the load to the mains without interruption.',
      ],
    },
    { type: 'image', source: SLIDES['gen-42'], caption: 'Basic UPS block diagram' },

    { type: 'heading', text: '5 · The three UPS technologies' },
    {
      type: 'table',
      headers: ['Type', 'Operation', 'Efficiency · use'],
      rows: [
        ['VFI — double conversion (online)', 'Everything goes through rectifier + inverter; the inverter runs full time. Output fully isolated from the mains.', 'Best protection · data centres'],
        ['VI — line interactive', 'The mains feeds the load directly; the paralleled inverter corrects dips and filters spikes.', '≈ 98%'],
        ['VFD — standby (offline)', 'The inverter is off and starts on failure (10 to 12 ms, 2 ms for recent designs).', 'Up to 99% · poor fit for servers'],
      ],
    },
    { type: 'image', source: SLIDES['gen-44'], caption: 'VFI: double conversion' },
    { type: 'image', source: SLIDES['gen-46'], caption: 'VI: line interactive' },
    { type: 'image', source: SLIDES['gen-48'], caption: 'VFD: standby' },

    { type: 'heading', text: '6 · Conventional or modular UPS' },
    {
      type: 'bullets',
      items: [
        'Conventional (standalone): everything in one unit with built-in batteries; no scalability.',
        'Modular: rack-mounted modules; add more as the load grows, and a failed module is removed without interrupting service.',
      ],
    },
    { type: 'image', source: SLIDES['cond-12'], caption: 'Conventional UPS' },
    { type: 'image', source: SLIDES['cond-13'], caption: 'Modular UPS' },

    { type: 'heading', text: '7 · Sizing a UPS' },
    {
      type: 'bullets',
      items: [
        '1 → List all equipment to protect.',
        '2 → Read their amps and volts (label): VA = A × V. If power is in W, VA = W / pf (≈ 0.9 for servers).',
        '3 → Multiply by the number of units and add the subtotals.',
        '4 → Multiply the total by 1.2 for future expansion.',
      ],
    },
    { type: 'formula', text: 'Example: 10 servers of 450 W at pf 0.9 → 10 × 500 VA = 5,000 VA → × 1.2 = 6,000 VA → 6 kVA UPS' },
    {
      type: 'table',
      headers: ['Advantages', 'Disadvantages'],
      rows: [
        ['No delay when switching over', "Can't run heavy appliances (battery-powered)"],
        ['Better than a generator for critical equipment', 'Substandard batteries → frequent replacement'],
        ['Silent, cheaper maintenance than a generator', 'May need professional installation'],
      ],
    },
    { type: 'note', text: '📐 Installation: 0 to 600 mm from the wall · more than 500 mm free above (or temperature rises) · more than 1,000 mm in front to open the door.' },
    { type: 'image', source: SLIDES['cond-17'], caption: 'Sizing method' },
    { type: 'image', source: SLIDES['gen-53'], caption: 'Dimensions and clearances' },
  ],
};
