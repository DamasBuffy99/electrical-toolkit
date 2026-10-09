import { TopicContent } from '../../../types';

export const abcInstallContent: TopicContent = {
  title: 'Piping, brazing, condensate, leak testing and evacuation',
  subtitle: 'The installation rules that make a clean, dry and tight system',
  blocks: [
    {
      type: 'text',
      text: 'Most air-conditioning faults start at installation: a badly deburred tube, scale, moisture, a leaking flare, insufficient vacuum, poorly drained condensate. This lesson goes through the technician’s actions, in order.',
    },
    { type: 'illustration', name: 'tech-install', caption: 'The six steps, from cut tube to start-up' },

    { type: 'heading', text: 'Designing refrigerant piping' },
    {
      type: 'bullets',
      items: [
        'Limit pressure losses: size for a loss equivalent to about 1 K of saturation temperature, including accessories (solenoid valve, drier, valves).',
        'Long-radius or 45° bends; a spring bend needs a radius of at least 10 times the diameter; tees 10 diameters apart.',
        'Liquid line: excessive pressure loss causes partial vaporisation before the expansion valve (“flash gas”).',
        'Suction line: slope of about 2 cm per metre towards the compressor, no reverse slope, and enough velocity to return oil even at part load.',
        'Discharge: minimum velocity in risers, again for oil return.',
        'Solid supports, kept away from bends to allow for expansion; sleeves where pipes pass through walls and floors.',
      ],
    },
    {
      type: 'bullets',
      items: [
        'Insulation: the suction line is ALWAYS insulated (otherwise it sweats); insulation in contact with the tube, no air gaps, accessories included. The liquid line only if the surroundings are colder than it.',
        'Materials: black elastomer foam, white polyethylene, aluminium-faced polyurethane or elastomer sections.',
        'Refrigeration tubes are sized in inches (1/4", 3/8", 1/2", 5/8", 3/4", 7/8"…), thicker than plumbing tubes (0.8 to 1.25 mm), supplied dehydrated and capped.',
      ],
    },

    { type: 'heading', text: 'Working with copper' },
    {
      type: 'bullets',
      items: [
        'Cut with a tube cutter, never a saw (swarf, crooked cut).',
        'Deburr inside and out holding the tube POINTING DOWN, so the swarf falls out.',
        'Flare (for a threaded fitting): slide the nut on BEFORE flaring; tube protruding from the block ≈ 1.5 mm (1/4", 3/8"), 1.8 mm (1/2"), 2 mm (5/8" and 3/4"); smooth, even surface; a drop of refrigeration oil of the same type as the circuit’s; tighten with two spanners, ideally a torque wrench.',
        'Swage (socket for brazing): in two passes while turning the tube, so as not to split it.',
        'Bending: on annealed tube, with a spring or a bender; anneal straight lengths and remove scale.',
      ],
    },

    { type: 'heading', text: 'Brazing under nitrogen' },
    {
      type: 'bullets',
      items: [
        'Hard brazing (> 450 °C) with copper-phosphorus or silver rods (20 to 55 % silver).',
        'Preparation: degrease, clean, fit the parts with a small gap (capillary action draws the filler in), apply flux if needed.',
        'Oxy-acetylene torch: acetylene 0.1 to 0.5 bar, oxygen ≈ 1 bar, short steady flame; heat the whole joint, mostly the female part, nozzle at 45°.',
        'Let it cool without moving; check for a smooth, even joint with no holes.',
        'Protect sensitive parts (expansion valves, 4-way valves) with a wet cloth.',
        'Pass a gentle flow of nitrogen through the tube while brazing: no oxygen, no scale — essential for electronic expansion valves and VRF systems.',
      ],
    },

    { type: 'heading', text: 'Draining condensate' },
    {
      type: 'bullets',
      items: [
        'Quantities: from a few litres to dozens per day; allow about 20 to 40 litres per day per 100 m² air-conditioned (much more in a humid tropical climate).',
        'Solvent-welded PVC drain pipe (Ø 32 to 63 mm) for AHUs and ducted units; flexible Ø 16/20 hose for splits.',
        'Fall of at least 1 cm per metre, closely spaced supports, a vent if the run is long.',
        'Trap compulsory on units under negative pressure (AHUs, ducted units): seal height greater than the negative pressure + 20 mm safety (1 mmWC ≈ 10 Pa). Off-the-shelf traps only stop odours.',
      ],
    },
    { type: 'formula', text: 'Trap seal height (mm) = negative pressure (Pa) / 10 + 20' },

    { type: 'heading', text: 'Leak testing' },
    {
      type: 'bullets',
      items: [
        'Circuit complete (drier, sight glass, valves fitted), solenoid valves open (coil energised or magnet).',
        'Pressurise with dry nitrogen to the specified test pressure (maximum working pressure; around 30 to 35 bar for a VRF), through the HP and LP service valves. On a pre-charged unit, test only the interconnecting lines, with the outdoor unit’s valves closed.',
        'Check fittings and brazed joints with leak-detection spray, then leave for several days, correcting the pressure reading for temperature (Gay-Lussac’s law).',
        'For hard-to-find leaks: hydrogen-nitrogen mix (forming gas) and a suitable detector.',
      ],
    },
    {
      type: 'table',
      headers: ['Detection method', 'Principle'],
      rows: [
        ['Bubble spray', 'bubbles at the leak; simple and universal'],
        ['Electronic detector', 'sensor sensitive to the refrigerant (or to hydrogen)'],
        ['Fluorescent dye', 'additive in the oil, visible under UV light'],
        ['Halide torch', 'the flame turns green in the presence of CHLORINE'],
      ],
    },
    {
      type: 'warning',
      text: 'The book says the halide torch is “only suitable for HFCs” while explaining that it reacts to chlorine. It is the opposite: it detects CHLORINATED refrigerants (CFCs, HCFCs such as R22). HFCs (R410A, R134a, R32…) contain no chlorine: the halide torch cannot see them.',
    },

    { type: 'heading', text: 'Evacuation' },
    {
      type: 'text',
      text: 'Evacuation removes air (non-condensable) and above all moisture: as pressure drops, water boils at room temperature and leaves as vapour. Evacuation is NOT a leak test: it is done after the nitrogen test.',
    },
    {
      type: 'bullets',
      items: [
        'Manifold on the HP and LP service valves, vacuum pump on the centre port, vacuum gauge; pump oil checked; solenoid valves open.',
        'Pump for half an hour to several hours depending on the size of the installation.',
        'Goal: go below the vapour pressure of water at room temperature.',
        'If there is a lot of moisture: triple evacuation — vacuum, break with dry nitrogen (≈ 0.2 bar), vacuum, nitrogen, final vacuum.',
        'Close the valves, remove the pump, release the factory charge or at least a recorded holding charge.',
      ],
    },
    {
      type: 'table',
      headers: ['Room temperature', '0 °C', '10 °C', '15 °C', '20 °C', '25 °C', '30 °C', '35 °C'],
      rows: [['Water vapour pressure (mbar)', '6.1', '12.2', '17', '23.3', '31.7', '42.4', '56.2']],
    },
    { type: 'illustration', name: 'tech-manifold', props: { mode: 'vacuum' }, caption: 'Manifold during evacuation: pump on the centre port, HP and LP valves open' },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'An AHU runs at a negative pressure of 600 Pa at the drain tray. What trap seal height is needed?',
      solution: ['600 / 10 = 60 mm, + 20 mm safety = 80 mm seal height.'],
    },
    {
      type: 'exercise',
      question: 'You are evacuating a circuit in a plant room at 30 °C. What minimum vacuum should you aim for, and why?',
      solution: ['You must go below 42.4 mbar absolute (vapour pressure of water at 30 °C) for the water to boil off.', 'In practice, aim much lower (a few mbar) and check that the pressure does not rise again once the pump is isolated.'],
    },
    {
      type: 'exercise',
      question: 'An 8 m horizontal suction line runs to a compressor. What slope should it have, and in which direction?',
      solution: ['≈ 2 cm/m × 8 m = 16 cm drop, falling TOWARDS the compressor, so that oil returns by gravity.'],
    },
  ],
};
