import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const lightingCircuitsSocketsContent: TopicContent = {
  title: 'Lighting circuits, switches and sockets',
  subtitle: 'Wiring the luminaires, choosing switches, placing sockets and grouping them into circuits',
  blocks: [
    {
      type: 'text',
      text: 'The luminaires are placed: now we control them (switches), group them into circuits, then place the sockets according to the furniture. These circuits then feed the panel schedule.',
    },

    { type: 'heading', text: '1 · Switches' },
    {
      type: 'table',
      headers: ['Switch', 'Use'],
      rows: [
        ['One way – one gang', 'Controls one group of luminaires from one location'],
        ['One way – two gang', 'Controls two separate groups from one location'],
        ['Wet-area (weatherproof)', 'Bathrooms, toilets — never a standard switch near the shower'],
        ['Two way', 'Controls the same luminaires from two locations: stairs, corridors, large rooms, bedrooms'],
        ['Dimmer', 'Adjusts the light intensity'],
      ],
    },
    {
      type: 'note',
      text: '📐 Mounting height: 120 cm (≈ 48 in) as standard; 90 cm (36 in) for wheelchair accessibility. Distance from the door: 10 cm, on the opening side, so it can be found in the dark.',
    },
    { type: 'image', source: SLIDES['cond-32'], caption: 'One way – one gang' },
    { type: 'image', source: SLIDES['cond-33'], caption: 'One way – two gang' },
    { type: 'image', source: SLIDES['cond-34'], caption: 'Wet areas: weatherproof switch, outside the shower' },
    { type: 'image', source: SLIDES['cond-35'], caption: 'Two way: corridors and stairs' },
    { type: 'image', source: SLIDES['cond-36'], caption: 'Switch symbol legend' },
    { type: 'image', source: SLIDES['cond-38'], caption: 'Height and distance from the door' },

    { type: 'heading', text: '2 · The two-way switch circuit' },
    {
      type: 'text',
      text: "Each two-way switch has 3 terminals: a common (COM) and two travelers (L1, L2). The phase arrives at the first switch's COM, the two travelers link the switches, and the second switch's COM goes to the lamp. Flipping either switch toggles the lamp.",
    },
    { type: 'image', source: SLIDES['cond-41'], caption: 'Two-way switch circuit' },
    { type: 'image', source: SLIDES['cond-42'], caption: 'COM, L1 and L2 terminals' },

    { type: 'heading', text: '3 · Lighting circuits' },
    {
      type: 'bullets',
      items: [
        'On the drawing: straight lines or U-shaped curves; each circuit arrow points to the distribution board.',
        'At most 1,200 VA and 10 luminaires per circuit.',
        'Power factor: 0.95 for LED, 0.8 for fluorescent.',
        'Protection: 5 or 6 A breaker or fuse (otherwise 10 A with 3 mm² cable).',
        'BS 7671: maximum lighting circuit length 53 m, with 1.5 mm² cable.',
        'Saudi code: 1,000 W per 10 A breaker, 1,500 W per 16 A breaker.',
      ],
    },
    { type: 'formula', text: 'Example: 8 LED luminaires of 36 W → 288 W / 0.95 ≈ 303 VA → one circuit (≤ 1,200 VA, ≤ 10 luminaires)' },
    { type: 'image', source: SLIDES['cond-44'], caption: 'Lighting circuits on the drawing' },

    { type: 'heading', text: '4 · Types of sockets' },
    {
      type: 'table',
      headers: ['Socket', 'Rating', 'Design load', 'Use'],
      rows: [
        ['Single', '10 or 16 A', '180 VA (IEC, NEC) to 250 VA (EC)', 'General use, IP20'],
        ['Double (duplex)', '10 or 16 A', '360 VA to 500 VA', 'TVs, computers'],
        ['Weatherproof', '10 or 16 A', 'As a single', 'Kitchens, bathrooms, outdoors — IP54'],
        ['Switched', '10 or 16 A', 'As a single', 'Socket with a switch'],
        ['UPS socket', '10 or 16 A', 'As a single', 'Critical loads (computers), fed from the UPS'],
        ['Power socket', '16, 20, 32 A…', 'Per appliance', 'Washing machine, dishwasher, fridge, microwave, hand dryer'],
        ['Three-phase', 'Per machine', 'Per machine', 'Factories, hospitals'],
      ],
    },
    {
      type: 'text',
      text: 'NEC 220.14(I): each single or multiple receptacle on one yoke counts for at least 180 VA; a unit of 4 or more receptacles counts for at least 90 VA per receptacle.',
    },
    { type: 'image', source: SLIDES['cond-47'], caption: 'Single socket' },
    { type: 'image', source: SLIDES['cond-48'], caption: 'Double socket' },
    { type: 'image', source: SLIDES['cond-49'], caption: 'NEC 220.14(I)' },
    { type: 'image', source: SLIDES['cond-53'], caption: 'Power sockets' },

    { type: 'heading', text: '5 · Heights and mounting types' },
    {
      type: 'table',
      headers: ['Mounting', 'Height / IP', 'Where'],
      rows: [
        ['Wall', '30 to 40 cm above finished floor', 'General use'],
        ['High wall', '120 cm', 'Kitchens (countertop), TV'],
        ['Floor', 'IP67', 'Open-plan offices'],
        ['Furniture', 'IP65', 'Workstations'],
        ['Column', '—', 'Administrative buildings'],
        ['Trunking', '—', 'Hospitals, operating rooms'],
        ['Ceiling', '—', 'Suspended equipment'],
      ],
    },
    { type: 'image', source: SLIDES['cond-56'], caption: 'Wall socket at 30–40 cm' },
    { type: 'image', source: SLIDES['cond-58'], caption: 'Floor socket (IP67)' },
    { type: 'image', source: SLIDES['cond-61'], caption: 'Trunking (hospitals)' },

    { type: 'heading', text: '6 · Placing sockets and forming circuits' },
    {
      type: 'bullets',
      items: [
        'The layout depends on the furniture.',
        'Offices: for each desk, a normal duplex socket + an emergency duplex socket.',
        'Room without furniture: a socket every 3.6 m, 1.8 m from the walls.',
        'Corridors: a service socket every 6 m.',
        'Low-use rooms (stores, technical rooms): one socket near the door and one on the opposite wall.',
        'Public toilets: a power socket for the hand dryer + a weatherproof service socket.',
        'Private bathroom: a weatherproof socket next to the sink.',
        'Kitchen: two power sockets (per appliances) + a normal socket on each wall.',
        'TVs and computers: a duplex socket.',
        'Back-to-back sockets on one wall: offset them by at least 15 cm to limit sound transmission.',
      ],
    },
    {
      type: 'table',
      headers: ['Circuit rule', 'Value'],
      rows: [
        ['Max load per socket circuit', '2,000 VA'],
        ['With 250 VA per socket (EC)', '8 single or 4 duplex sockets per circuit'],
        ['NEC, 20 A circuit', '10 outlets maximum'],
      ],
    },
    { type: 'image', source: SLIDES['cond-63'], caption: 'Socket distribution' },
    { type: 'image', source: SLIDES['cond-64'], caption: 'Distribution and circuit rules' },
  ],
};
