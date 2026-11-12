import { TopicContent } from '../../../types';

export const pvSmaVictronContent: TopicContent = {
  title: 'The SMA and Victron ranges',
  subtitle: 'Two reference manufacturers, two logics: SMA covers the three families with specialised devices, Victron builds modular systems around a 48 V inverter-charger. Ranges, typical architectures, and the recurring question: Sunny Island + Sunny Tripower, or Sunny Tripower Smart Energy?',
  blocks: [
    {
      type: 'objectives',
      items: [
        'Place each SMA and Victron range in its inverter family.',
        'Know each manufacturer’s typical architectures.',
        'Choose between STP Smart Energy and Sunny Island + Sunny Tripower.',
        'Know the paralleling rules and the role of the Cerbo GX controller.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '18 kW', label: 'continuous for a cluster of 3 SI 8.0H' },
        { value: '300 kW', label: 'in Sunny Island multicluster' },
        { value: '180 kVA', label: 'largest Victron three-phase system (12 Quattro 15 kVA)' },
        { value: '10 kW', label: 'backup limit of the STP Smart Energy' },
      ],
    },

    { type: 'heading', text: '1 · SMA: one range per family' },
    {
      type: 'text',
      text: 'SMA (Niestetal, Germany) covers the three families: grid-tie inverters, hybrids, AC-coupled battery inverters, and Sunny Island inverter-chargers for off-grid sites.',
    },
    {
      type: 'table',
      headers: ['Range', 'Family', 'Power', 'Key points'],
      rows: [
        ['Sunny Boy', 'grid-tie, single-phase 230 V', '1.5 to 6 kW', '1 or 2 MPPTs, small residential installations'],
        ['Sunny Tripower', 'grid-tie, three-phase 400 V', '3 to 10 kW', '2 MPPTs, three-phase residential'],
        ['Sunny Tripower X', 'grid-tie, three-phase', '12 / 15 / 20 / 25 kW', '3 MPPTs; 98.2 % efficiency; PV up to 150 % of AC power; ShadeFix; built-in ennexOS'],
        ['Sunny Highpower PEAK3', 'grid-tie, ground-mounted plants', '100 / 150 kW', '1,000 or 1,500 V DC; 98.8 / 99.1 % efficiency'],
        ['Sunny Tripower Smart Energy', 'three-phase hybrid', '5 / 6 / 8 / 10 kW', 'HV battery 150–600 V; 2 MPPTs; PV up to 15 kWp; three-phase backup (12 kW < 5 min on 8.0 and 10.0)'],
        ['Sunny Boy Smart Energy', 'single-phase hybrid', 'up to ≈ 10 kW', 'high-voltage battery'],
        ['Sunny Tripower Hybrid X', 'three-phase hybrid', '20 / 25 / 30 kW', 'battery 120–800 V, 50 A; 4 MPPTs; small commercial'],
        ['Sunny Boy Storage', 'AC-coupled battery inverter', '—', 'no PV input; adds an HV battery to existing PV of any brand'],
        ['Sunny Island', 'inverter-charger', '3.3 to 6.0 kW continuous per unit', '48 V battery (lead-acid 100 to 10,000 Ah or approved lithium); controls the generator; clusters and multiclusters'],
      ],
    },
    {
      type: 'text',
      text: 'Sunny Island clustering: three units form a single- or three-phase cluster (3 × SI 8.0H = 18 kW continuous, 24 kW for 30 min). Beyond that, an SMA Multicluster-Box combines several clusters for 24 to 300 kW systems. Modes: permanent off-grid, backup on grid outage, self-consumption with grid, generator management when the battery is low.',
    },
    {
      type: 'table',
      headers: ['SMA architecture', 'Layout', 'Use'],
      rows: [
        ['A — Simple PV', 'panels → Sunny Boy or Sunny Tripower → grid', 'cheapest, no backup'],
        ['B — All-in-one hybrid', 'panels and HV battery → STP or SB Smart Energy → grid', 'new build, simple and compact'],
        ['C — Added storage', 'existing PV + Sunny Boy Storage + HV battery', 'add a battery without changing the inverter'],
        ['D — AC coupling on Sunny Island', 'panels → Sunny Tripower → AC bus ← Sunny Island + 48 V battery', 'powerful backup or off-grid, highly scalable'],
        ['E — Off-grid with generator', 'architecture D + generator controlled by the Sunny Islands', 'full autonomy'],
      ],
    },
    {
      type: 'table',
      headers: ['SMA software', 'Function'],
      rows: [
        ['Sunny Portal (ennexOS)', 'online monitoring of production and storage'],
        ['Sunny Design', 'installation sizing and simulation'],
        ['SMA Energy App', 'real-time monitoring for the user'],
        ['SMA 360° App', 'commissioning and maintenance for the installer'],
        ['Sunny Home Manager 2.0', 'home energy management (controlled loads, export limitation)'],
      ],
    },

    { type: 'heading', text: '2 · Sunny Island + Sunny Tripower, or STP Smart Energy?' },
    {
      type: 'text',
      text: 'The STP Smart Energy is the simple solution for a grid-connected house with moderate backup: DC coupling, panels and high-voltage battery on the DC bus of a single device. The Sunny Island + Sunny Tripower pairing (AC coupling, two independent devices) is needed as soon as more than 10 kW of backup, a permanent off-grid site, a generator or strong starting surges are required.',
    },
    {
      type: 'table',
      headers: ['Criterion', 'STP Smart Energy', 'Sunny Island + Sunny Tripower'],
      rows: [
        ['Continuous power on backup or off-grid', 'up to 10 kW', '18 kW with 3 × SI 8.0H; up to 300 kW in multicluster'],
        ['Starting surge', '12 kW for under 5 min (8.0 and 10.0)', '11 kW for 3 s per SI 8.0H, 33 kW per cluster'],
        ['Battery', 'approved high voltage (SMA Home Storage, BYD HVS up to 12.8 kWh, HVM up to 22.1 kWh)', '48 V: lead-acid up to 10,000 Ah or approved lithium, easier to expand'],
        ['PV power', '15 kWp maximum (STP 10.0 SE)', 'set by the grid-tie inverters, within 12 kW AC-coupled per SI 8.0H'],
        ['Permanent off-grid', 'not intended: backup function', 'yes, its primary function'],
        ['Generator', 'not controlled', 'automatic start and stop'],
      ],
    },
    {
      type: 'decision',
      title: 'When to choose which',
      choice: 'STP Smart Energy for a grid-connected new build, backup < 10 kW, 5 to 20 kWh of storage; Sunny Island + Sunny Tripower for powerful backup, an off-grid site or a generator to control',
      reasons: [
        'STP Smart Energy: one device, quick installation, a single conversion to the battery, little space.',
        'Sunny Island: far higher power and surge, expandable 48 V battery, generator control, scalability up to 300 kW.',
      ],
      rejected: 'An STP Smart Energy for an off-grid site or a health centre: neither designed to run durably without a grid, nor able to control the generator.',
    },
    {
      type: 'note',
      text: 'Two nuances. Fault tolerance: with the grid present, if the Sunny Island fails, the Sunny Tripower keeps exporting; off-grid, it stops too, having no reference grid. Adding a battery to existing grid-connected PV: the simplest solution remains the Sunny Boy Storage; the Sunny Island is justified when powerful backup or off-grid operation is also wanted.',
    },

    { type: 'heading', text: '3 · Victron: a modular system built around 48 V' },
    {
      type: 'text',
      text: 'Victron (Almere, the Netherlands, founded in 1975) builds modular systems around a 48 V inverter-charger, MPPT controllers and a GX controller. It is a reference for off-grid sites, marine and vehicles.',
    },
    {
      type: 'table',
      headers: ['MultiPlus-II (230 V)', 'Nominal', 'Continuous at 25 °C', 'Peak', 'Charge current'],
      rows: [
        ['48/3000/35-32', '3,000 VA', '2,400 W', '5,500 W', '35 A'],
        ['48/5000/70-50', '5,000 VA', '4,000 W', '9,000 W', '70 A'],
        ['48/8000/110-100', '8,000 VA', '6,400 W', '15,000 W', '110 A'],
        ['48/10000/140-100', '10,000 VA', '8,000 W', '18,000 W', '140 A'],
        ['48/15000/200-100', '15,000 VA', '12,000 W', '27,000 W', '200 A'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'MultiPlus-II: one AC input, built-in transfer switch (transfer in under 20 ms), PowerAssist function that tops up the grid or generator when demand exceeds its limit. 12 and 24 V versions at 3,000 and 5,000 VA; GX version with built-in controller.',
        'Quattro and Quattro-II: two AC inputs (e.g. grid and generator), automatic selection of the live source; only one input connected at a time, AC-in-1 has priority.',
        'Paralleling: the same number of identical units on each phase. MultiPlus-II 48/5000: up to 6 per phase, i.e. 18 units and 90 kVA. The 8, 10 and 15 kVA models only parallel with an external transfer switch. VE.Bus maximum: 180 kVA (12 Quattro 15 kVA, 4 per phase).',
        'All-in-one: the EasySolar-II GX combines MultiPlus-II, MPPT and GX controller (a “battery-first” hybrid); the Multi RS Solar combines an inverter-charger and a high-voltage MPPT.',
      ],
    },
    {
      type: 'table',
      headers: ['SmartSolar controller', 'Max PV voltage', 'Charge current', 'Battery', 'Recommended PV'],
      rows: [
        ['75/15', '75 V', '15 A', '12 / 24 V', '≈ 220 W at 12 V'],
        ['100/30', '100 V', '30 A', '12 / 24 V', '≈ 440 W at 12 V'],
        ['100/50', '100 V', '50 A', '12 / 24 V', '≈ 700 W at 12 V'],
        ['150/35', '150 V', '35 A', '12 to 48 V', '≈ 2,000 W at 48 V'],
        ['150/70', '150 V', '70 A', '12 to 48 V', '≈ 4,000 W at 48 V'],
        ['150/100', '150 V', '100 A', '12 to 48 V', '≈ 5,800 W at 48 V'],
        ['250/70', '250 V', '70 A', '12 to 48 V', '≈ 4,000 W at 48 V'],
        ['250/100', '250 V', '100 A', '12 to 48 V', '≈ 5,800 W at 48 V'],
      ],
    },
    {
      type: 'calc',
      title: 'Reading the name of a SmartSolar 150/70 controller',
      steps: [
        { label: 'First number: maximum PV voltage (cold, string open circuit)', formula: 'U_{oc,max} ≤ 150 V' },
        { label: 'Second number: maximum charge current on the battery side', formula: 'I_{charge} ≤ 70 A' },
        { label: 'Useful PV power at 48 V (charge voltage ≈ 57 V)', formula: 'P ≈ 70 × 57 ≈ 4 000 W' },
      ],
      result: 'Above ≈ 4,000 Wp at 48 V the controller clips: move to the 150/100 or two controllers',
    },
    {
      type: 'table',
      headers: ['Cerbo GX', 'Detail'],
      rows: [
        ['Role', 'connects and controls all Victron devices, centralises settings'],
        ['Connections', '2 × VE.Bus, 3 × VE.Direct, VE.Can and BMS-Can, USB, Ethernet, Wi-Fi, Bluetooth'],
        ['Remote monitoring', 'VRM portal (Victron Remote Management)'],
        ['Display', 'GX Touch 50 or 70'],
        ['Integration', 'Modbus TCP, MQTT, NMEA 2000 (marine), Node-RED with the “Large” Venus OS image'],
      ],
    },
    {
      type: 'table',
      headers: ['Victron architecture', 'Layout'],
      rows: [
        ['A — Off-grid', 'panels → MPPT → 48 V lithium battery → 3 × MultiPlus-II (three-phase) → loads; Cerbo GX; generator on the AC input'],
        ['B — Grid-connected storage (ESS)', 'panels → MPPT → battery → MultiPlus-II in ESS mode + energy meter at the grid connection; option: AC-coupled grid-tie inverter'],
        ['C — Vehicle', 'panels → MPPT 100/30 + Orion-Tr DC-DC charger → 12 V lithium battery → Phoenix inverter'],
        ['D — Boat', 'panels → MPPT; Quattro with shore power and generator on its two inputs; Cerbo GX on the NMEA 2000 network'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Strengths: modularity; openness (Modbus, MQTT, Node-RED, many compatible batteries); robustness; large community; from a few hundred watts to 180 kVA in the same ecosystem.',
        'Limits: no grid-tie inverter in the range (paired with a Fronius or similar for AC coupling); more components to assemble and configure; dearer than an all-in-one hybrid for a simple house.',
      ],
    },
    {
      type: 'regional',
      text: 'Victron and SMA are well represented in West Africa, especially in telecoms, health and NGOs, alongside cheaper brands (Deye, Growatt, Must). Beyond price, compare local availability of parts and support, compatibility with batteries available locally, and remote monitoring (VRM, Sunny Portal), invaluable for remote sites.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'SMA: Sunny Boy / Tripower (grid-tie), Smart Energy (HV hybrid), Sunny Boy Storage (AC battery), Sunny Island (48 V inverter-charger).',
        'Sunny Island: clusters of 3 units, multicluster up to 300 kW, generator control.',
        'STP Smart Energy: simple and compact, but backup limited to 10 kW and no off-grid.',
        'Victron: MultiPlus-II / Quattro + SmartSolar MPPT + Cerbo GX, paralleling up to 180 kVA.',
        'A “150/70” controller: 150 V PV maximum, 70 A of charge.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'How many MultiPlus-II 48/5000 are needed, at minimum, for 25 kW continuous in three-phase (room at 25 °C)? What distribution rule applies?',
      solution: ['Per phase: 25 / 3 ≈ 8.3 kW; a 48/5000 gives 4 kW: 3 per phase are needed (12 kW).', 'That is 9 units, the same number and model on each phase (limit: 6 per phase).'],
    },
    {
      type: 'exercise',
      question: 'A 5.5 kWp array at 48 V: which SmartSolar controller?',
      solution: ['150/70: ≈ 4,000 W, too tight. 150/100: ≈ 5,800 W ✓.', 'Also check that the string open-circuit voltage, at the coldest temperature, stays below 150 V.'],
    },
  ],
};
