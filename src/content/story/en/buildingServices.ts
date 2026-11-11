import { TopicContent } from '../../types';

export const buildingServicesContent: TopicContent = {
  title: 'Lift, pumps and common areas',
  subtitle: 'Common services have motors and work for everyone. Awa feeds them from a dedicated board, protects each motor, and cuts the lighting bill the co-owners will pay.',
  blocks: [
    { type: 'scene', text: 'Month 3 · Meeting with the lift installer and the plumber' },
    { type: 'illustration', name: 'building-riser', props: { highlight: 'services' }, caption: 'Lift, booster set and common-area lighting: the common-services board' },
    {
      type: 'text',
      text: 'All the shared equipment starts from one board, the common-services sub-board, fed by its own outgoing feeder from the main board and by its own meter. This is the board the generator will back up later.',
    },

    { type: 'heading', text: '1 · The lift' },
    {
      type: 'text',
      text: 'The lift installer provides the data sheet: an 11 kW, three-phase 400 V motor, controlled by a variable-frequency drive. Awa calculates the current to size the feeder.',
    },
    { type: 'formula', text: 'I = \\frac{P}{√3 × U × η × cos φ} = \\frac{11,000}{√3 × 400 × 0.9 × 0.9} ≈ 19.6 A' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'The drive is expensive. What is it for?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Without it, the motor would start in one go, drawing six to seven times its current: the lights of the whole building would flicker at every call, and passengers would feel a jolt. The drive ramps the speed up gently: a comfortable start, a starting current barely above the normal current, and a much smaller backup generator. We’ll come back to it at the Tropica plant, where motors rule.',
    },
    {
      type: 'table',
      headers: ['Lift feeder', 'Choice', 'Why'],
      rows: [
        ['Breaker', '25 A, 3-pole', '≥ 1.25 × 19.6 ≈ 24.5 A'],
        ['Cable', '4 × 6 mm² + earth', '25 m to the roof machine room: ΔU ≈ 0.7%'],
        ['Residual protection', '300 mA, drive-compatible', 'fire protection without nuisance tripping'],
        ['Local isolation', 'lockable switch in the machine room', 'the technician must be able to lock out the motor'],
      ],
    },
    { type: 'fiche', id: 'hvac-mechanical', why: 'Power of lifts, pumps and mechanical equipment.' },

    { type: 'heading', text: '2 · The booster set' },
    {
      type: 'text',
      text: 'Mains water pressure is not enough for the upper floors: a tank on the ground floor and two 4 kW pumps push water up to the flats. Only one runs at a time; the control panel alternates them daily so they wear evenly, and switches to the second if the first fails.',
    },
    { type: 'formula', text: 'Pump: I = \\frac{4,000}{√3 × 400 × 0.85 × 0.86} ≈ 7.9 A' },
    {
      type: 'bullets',
      items: [
        'Each pump has a motor circuit breaker set to its nameplate current (about 8 A): it protects against overload and short circuit.',
        'A float in the tank stops the pumps when it is empty: a pump running dry destroys itself in minutes.',
        'A pressure switch starts and stops the pumps according to the pressure in the water risers.',
      ],
    },
    { type: 'fiche', id: 'circuit-breaker', why: 'Circuit breakers, tripping curves, motor protection.' },

    { type: 'heading', text: '3 · Common-area lighting' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'In my old building, the stair lights stayed on day and night. The service charges were huge.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Here, no common light will stay on for nothing. Stairs and landings on timers with illuminated push buttons; car park on presence detectors; entrance and facade on a time switch and photocell. And LEDs everywhere.',
    },
    {
      type: 'table',
      headers: ['', 'Always on (12 h/night)', 'Timers and detectors'],
      rows: [
        ['Energy', '2 kW × 12 h = 24 kWh/day', '≈ 6 kWh/day'],
        ['Over a month', '≈ 720 kWh', '≈ 180 kWh'],
        ['Saving', '', '≈ 540 kWh/month, about 55,000 FCFA at ~100 FCFA/kWh'],
      ],
    },
    {
      type: 'note',
      text: 'In the stairwells, Awa also adds self-contained emergency lighting units: during an outage they light up on their own battery and mark the escape route. We’ll find many more of them in the clinic of project 4.',
    },
    { type: 'fiche', id: 'lighting-circuits-sockets', why: 'Lighting controls: two-way switching, impulse relays, timers.' },
    {
      type: 'regional',
      text: 'Frequent outages are the first complaint of apartment residents: a lift stuck between floors, or a full tank but dry taps on the 4th floor. That’s why a lift with battery-powered “automatic return to floor” and an easy-to-back-up common-services board are planned from the design stage.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Common services have their own board and meter, separate from the flats.',
        'A motor is protected by a motor circuit breaker set to its nameplate current; plan a local isolator for maintenance.',
        'The drive limits starting current, smooths the ride and shrinks the backup generator.',
        'Timers, detectors and LEDs cut the common-area bill by three or four.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'Without a drive, the lift would start direct-on-line at 7 times its rated current. What inrush does that represent?',
      solution: ['7 × 19.6 ≈ 137 A during start-up, on a 25 A feeder and a 125 A riser.', 'With the drive, the inrush stays around 1.2 to 1.5 times rated, i.e. 24 to 30 A.'],
    },
    {
      type: 'exercise',
      question: 'Why alternate the two pumps every day rather than always keeping the same one in service?',
      solution: [
        'A pump that never runs can seize; the day it is needed, it won’t start.',
        'By alternating them, both wear equally and you know every day that each one works.',
      ],
    },
  ],
};
