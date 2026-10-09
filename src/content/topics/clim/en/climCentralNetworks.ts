import { TopicContent } from '../../../types';
import { fig } from '../fig';

export const climCentralNetworksContent: TopicContent = {
  title: 'Chiller, ducts and pipes',
  subtitle: 'Choosing the plant, refrigerant and compressors, then sizing the air and water networks',
  blocks: [
    {
      type: 'text',
      text: 'A central plant is not picked from a catalogue in five minutes: it is a project with a life cycle, from needs analysis to operation. This lesson covers the production hardware (chiller, compressors, towers) and then the two networks that carry the cooling: air (ducts) and water (pipes).',
    },
    { type: 'illustration', name: 'clim-central', props: { highlight: 'chiller' }, caption: 'The chiller, heart of the plant' },
    fig('p131_0', 'Figure 5.25 — life cycle of a project: needs, design, procurement, construction, operation'),

    { type: 'heading', text: 'The refrigerant' },
    {
      type: 'bullets',
      items: [
        'R22: long the most used (well known, cheap), but it destroys the ozone layer and is banned under the Montreal Protocol. In existing installations, the priority is tightness (brazed joints).',
        'NH₃ (ammonia): excellent and with no impact on ozone or climate (zero ODP and GWP), to be encouraged in chilled-water plants… but dangerous if handled by untrained technicians.',
        'Hydrocarbons: can be produced locally, better than chlorofluorinated fluids for the environment, less efficient than ammonia.',
      ],
    },
    {
      type: 'text',
      text: 'Refrigerant pipes are copper (halogenated fluids) or steel (ammonia, large diameters). They are sized by the velocity method or with manufacturers’ charts (capacity, evaporating and condensing temperatures, superheat, subcooling).',
    },

    { type: 'heading', text: 'Choosing the chiller' },
    {
      type: 'text',
      text: 'A chiller is defined by its chilled-water supply and return temperatures (often 7/12 °C), the condenser cooling medium and its capacity. Distinguish carefully:',
    },
    { type: 'formula', text: 'Gross P = Useful P (terminal needs) + pumping P + heat gains of the pipes' },
    { type: 'note', text: 'At preliminary design, add about 5 % to the useful capacity; these items are recalculated in the final design. Better to split the capacity into 2 or 3 chillers in parallel: they follow the load and keep running while one is serviced.' },
    fig('p134_1', 'Table 5.4 — compressor, evaporator and condenser technologies by capacity'),
    fig('p134_0', 'Table 5.5 — temperature differences for heat exchanger calculation'),
    {
      type: 'bullets',
      items: [
        'Save water: prefer air-cooled condensers or dry coolers.',
        'Energy: good compressor COP, well-sized exchangers and auxiliaries.',
        'Make a technical-economic comparison of air-cooled vs water-cooled units, and think about maintenance from the design stage.',
        'When ordering, give everything: site and access, max and min capacities, water temperatures, extreme outdoor conditions, power supply and starting, control, footprint, noise level…',
      ],
    },
    fig('p136_0', 'Figures 5.26 and 5.27 — air-cooled and water-cooled condensing units'),

    { type: 'heading', text: 'Compressors, condensers and towers' },
    {
      type: 'text',
      text: 'Large African plants (hotels, banks) often run for over 20 years with open reciprocating or centrifugal compressors, rugged technologies. Screw compressors, very efficient, have sometimes ended up idle for lack of proper maintenance. The guide therefore recommends rugged technologies, or screws factory-tested with operator training.',
    },
    fig('p136_1', 'Figures 5.28 and 5.29 — reciprocating and centrifugal compressors'),
    {
      type: 'bullets',
      items: [
        'Evaporative condensers: very effective in humid zones (coast).',
        'Cooling towers: work better in hot, dry zones (Sahel). Avoid open towers (scale, constant upkeep).',
        'Two towers in parallel, each able to handle 2/3 of the load, make maintenance easier.',
        'Put the tower in the shade, in a well-ventilated area, so it does not recirculate its own hot air.',
        'Evaporators: watch water temperature control, pipe insulation (otherwise condensation in false ceilings) and corrosion.',
      ],
    },
    fig('p138_0', 'Figures 5.30 and 5.31 — air-cooled condenser and cooling tower'),

    { type: 'heading', text: 'The air network: ducts' },
    {
      type: 'text',
      text: 'Start by placing the grilles on the plans, then draw the single-line duct layout with the architect (beams, columns, false ceilings), including balancing dampers, fire dampers, access hatches and drainage of the coil condensate.',
    },
    {
      type: 'table',
      headers: ['Climate', 'Recommended ducts'],
      rows: [
        ['Humid tropical', 'Insulated galvanised steel: 50 mm glass wool on supply, 25 mm on return, with vapour barrier. No fibreglass panels (destroyed by humidity in 3 to 5 years).'],
        ['Sahelian', 'Sheet metal, fibreglass panels (quiet but more pressure drop) or plywood.'],
        ['Local practice', 'Plaster (staff) ducts, cheap (8,000 to 15,000 F CFA/m² in 2000), but rarely fitted with balancing devices and never cleaned.'],
      ],
    },
    { type: 'subheading', text: 'Pressure drops' },
    { type: 'formula', text: 'Friction: ΔPl = j × L   (j in Pa/m read from the chart, L in m)' },
    { type: 'formula', text: 'Fittings (bends, tees…): ΔPs = ζ × ρ × V² / 2' },
    { type: 'warning', text: "Typo in the guide: the fitting pressure drop is printed ΔPs = (ζ·ρ·V²) / (2·j). The correct formula is ΔPs = ζ·ρ·V²/2 (the guide itself writes it correctly, 0.5·ζ·ρ·V², for water circuits)." },
    { type: 'formula', text: 'Equivalent diameter of a rectangular duct a × b: φe = 1.265 × [ (a·b)³ / (a + b) ]^0.2' },
    fig('p141_0', 'Figure 5.32 — friction chart for air in circular ducts'),
    { type: 'subheading', text: 'Three sizing methods' },
    {
      type: 'table',
      headers: ['Method', 'Principle', 'For'],
      rows: [
        ['Velocity', 'Set the velocity V: area S = Q / V', 'Small networks (3–4 grilles: shops, offices)'],
        ['Equal friction', 'Same unit pressure drop j along the critical path', 'Buildings, medium networks'],
        ['Static regain', 'Sections offset each run’s losses', 'Large high-velocity networks'],
      ],
    },
    fig('p143_0', 'Table 5.7 — recommended air velocities at the start of networks (sheet metal / fibreglass)'),
    {
      type: 'text',
      text: 'Typical velocities at the start of the network: 3 to 3.5 m/s for luxury flats or a hospital, 4 to 4.5 m/s for offices, 6 m/s for restaurants or banks, 8 to 10 m/s in industry. The lower the velocity, the less noise and fan energy.',
    },
    fig('p145_0', 'Figure 5.33 — diffuser types: multi-cone, swirl, perforated, linear, nozzle, grille, floor outlet'),
    fig('p146_0', 'Table 5.9 — indicative performance of outlets: flow, max load, supply temperature difference'),
    {
      type: 'bullets',
      items: [
        'Balancing at 3 levels (outlets, branch ducts, main ducts) with dampers, iris, butterfly valves…: each outlet must get its flow.',
        'Fans: big consumers! Do not oversize their motors. Forward-curved centrifugal (60–75 % efficiency, quiet) or backward-curved (75–85 %).',
        'Fire dampers between rooms: automatic closing at 70–72 °C, or on smoke detection for electrical fires.',
      ],
    },

    { type: 'heading', text: 'The chilled-water network' },
    {
      type: 'text',
      text: 'Supply water that is too cold leads to overconsumption, line losses and costly condensation: a slightly higher regime is often better.',
    },
    {
      type: 'table',
      headers: ['Network (table 5.11)', 'Principle', 'In tropical Africa'],
      rows: [
        ['2-pipe', 'One chilled-water supply, one return', 'Suitable: simple, cheap, no heating needed'],
        ['3-pipe', 'Cold supply, hot supply, common return', 'Avoid: hot/cold mixing, waste'],
        ['4-pipe', 'Two complete hot and cold circuits', 'Avoid: too expensive and energy-hungry'],
      ],
    },
    fig('p148_0', 'Table 5.11 — critique of the different hydraulic networks'),
    {
      type: 'bullets',
      items: [
        'Pipes: PVC (no welds but expensive, imported), copper (good but expensive) or black steel — the guide recommends good-quality black steel, with corrosion inhibitors and a filter.',
        'Maximum velocities (table 5.12): ~0.5 m/s in DN 15, ~1 m/s in DN 50, 1.5 m/s in DN 100 and above.',
        'Pressure drop ≈ proportional to the square of the flow: ΔP = k × Q².',
        'Control by 2- or 3-way valves on flow, or by water inlet temperature.',
        'Balancing: a very frequent defect, causing discomfort and overconsumption.',
        'Pumps: chosen on head and flow; adjusted by variable speed (best), impeller change, throttling or bypass.',
      ],
    },
    { type: 'warning', text: "Typo in table 5.12: for DN 100, the outside diameter is printed 14.3 mm; read 114.3 mm." },
    fig('p149_0', 'Table 5.12 — maximum velocities in chilled-water pipes (steel and copper)'),

    { type: 'heading', text: 'Plant noise' },
    {
      type: 'text',
      text: 'Almost every component is both a noise source and an attenuator. A fan is quietest at its best-efficiency point; insulated ducts, outlets and silencers attenuate. In the plant room: anti-vibration mounts, flexible connectors, duct silencers.',
    },
    fig('p154_1', 'Figure 5.37 — protection against noise from a plant room'),
    { type: 'heading', text: "Exercises" },
    {
      type: 'exercise',
      question: "A hotel’s fan coils require 400 kW. What chiller capacity should be used at preliminary design, and how should it be split?",
      solution: [
        "Gross P ≈ useful P × 1.05 = 420 kW (pumping and pipe gains).",
        "Split into 2 × 210 kW (or 3 × 140 kW) chillers in parallel: follow the load in mid-season and keep cooling while one unit is serviced.",
      ],
    },
    {
      type: 'exercise',
      question: "An office duct carries 3,600 m³/h. Size it by the velocity method (4 m/s). What is the equivalent diameter of a 600 × 400 mm rectangular duct?",
      solution: [
        "Flow: 3,600 / 3,600 = 1 m³/s; S = 1 / 4 = 0.25 m² → e.g. 500 × 500 mm or a Ø 564 mm round duct.",
        "φe = 1.265 × [ (0.6 × 0.4)³ / (0.6 + 0.4) ]^0.2 = 1.265 × (0.01382)^0.2 ≈ 1.265 × 0.425 ≈ 0.54 m.",
        "So the 600 × 400 duct is equivalent to a round duct of about 540 mm for pressure drop.",
      ],
    },
  ],
};
