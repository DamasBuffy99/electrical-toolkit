import { TopicContent } from '../../types';

const shot = {
  loads: require('../../../../assets/reference/solar/example2/01_loads_table.png'),
  inverterPower: require('../../../../assets/reference/solar/example2/02_inverter_power_surge.webp'),
  inverter: require('../../../../assets/reference/solar/example2/03_inverter_1500w_24v.webp'),
  panels: require('../../../../assets/reference/solar/example2/04_panels_lg300.webp'),
  batteries: require('../../../../assets/reference/solar/example2/05_batteries_trojan.webp'),
  batteriesBank: require('../../../../assets/reference/solar/example2/06_batteries_2x4.webp'),
  controller: require('../../../../assets/reference/solar/example2/07_controller_150_70.webp'),
  connection: require('../../../../assets/reference/solar/example2/08_panel_connection.webp'),
  wiring: require('../../../../assets/reference/solar/example2/09_wiring_diagram.webp'),
  clipping: require('../../../../assets/reference/solar/example2/10_controller_clipping.webp'),
  charge: require('../../../../assets/reference/solar/example2/11_batteries_charge_current.webp'),
};

export const pvOffgridExample2Content: TopicContent = {
  title: 'Exemple 2 : maison hors réseau en 24 V',
  subtitle: 'Six appareils, batteries AGM et un régulateur un peu juste : dimensionnement complet',
  blocks: [
    {
      type: 'text',
      text: "Une maison plus équipée que dans l'exemple 1 : éclairage LED, télévision, ventilateurs, réfrigérateur, ordinateur portable et lave-linge. Nouveautés : un système en 24 V, des batteries plomb AGM et un régulateur dont le courant est dépassé.",
    },
    { type: 'illustration', name: 'pv-system', caption: 'Le système à dimensionner' },
    { type: 'image', source: shot.wiring, caption: 'Cours — schéma de câblage complet' },

    { type: 'heading', text: '1 · Les charges' },
    {
      type: 'table',
      headers: ['Appareil', 'Nombre', 'Puissance', 'Heures/jour', 'Énergie'],
      rows: [
        ['LED', '4', '10 W', '5', '200 Wh'],
        ['Télévision', '1', '100 W', '10', '1 000 Wh'],
        ['Ventilateur', '2', '70 W', '7', '980 Wh'],
        ['Réfrigérateur', '1', '300 W', '10', '3 000 Wh'],
        ['Ordinateur portable', '1', '80 W', '8', '640 Wh'],
        ['Lave-linge', '1', '300 W', '2', '600 Wh'],
        ['Total', '', '860 W', '', '6 420 Wh/jour'],
      ],
    },
    { type: 'note', text: '💡 La puissance du tableau compte chaque appareil : 4 LED × 10 W = 40 W, 2 ventilateurs × 70 W = 140 W.' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'loads' }, caption: '860 W et 6 420 Wh/jour' },
    { type: 'image', source: shot.loads, caption: 'Cours — étape 1 : les charges' },

    { type: 'heading', text: "2 · L'onduleur" },
    { type: 'formula', text: 'P_continue = 1,3 × 860 = 1 118 W' },
    {
      type: 'text',
      text: "Deux appareils ont un moteur : le réfrigérateur (compresseur) et le lave-linge. On compte 4 fois leur puissance au démarrage :",
    },
    { type: 'formula', text: 'P_pointe = 40 + 100 + 140 + 4 × 300 + 80 + 4 × 300 = 2 760 W' },
    {
      type: 'table',
      headers: ['Onduleur pur sinus 24 V', 'Fiche technique', 'Besoin', ''],
      rows: [
        ['Puissance nominale', '1 500 W', '1 118 W', '✓'],
        ['Puissance de pointe', '3 000 W', '2 760 W', '✓'],
        ['Tension batterie', '24 V DC', '24 V', '✓'],
      ],
    },
    {
      type: 'note',
      text: "📌 Pourquoi 24 V ? L'onduleur dépasse 1 200 W : on passe dans la tranche 1 200 – 2 000 W, donc en 24 V. Le courant côté batterie est deux fois plus faible qu'en 12 V.",
    },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'inverter' }, caption: 'Onduleur 1 500 W / 3 000 W, 24 V' },
    { type: 'image', source: shot.inverterPower, caption: 'Cours — 1 118 W continus, 2 760 W en pointe' },
    { type: 'image', source: shot.inverter, caption: 'Cours — onduleur 1 500 W, 24 V, pur sinus' },

    { type: 'heading', text: '3 · Les panneaux' },
    { type: 'formula', text: 'E_panneaux = 1,3 × 6 420 = 8 346 Wh/jour' },
    { type: 'text', text: 'Le site reçoit 5 heures de soleil crête par jour :' },
    { type: 'formula', text: 'P_panneaux = 8 346 / 5 = 1 669,2 W' },
    {
      type: 'table',
      headers: ['LG Mono X Plus 300 W (LG300S1C-A5)', 'Valeur'],
      rows: [
        ['Puissance maximale', '300 W'],
        ['Vmpp / Impp', '31,6 V / 9,50 A'],
        ['Voc (circuit ouvert)', '38,9 V'],
        ['Isc (court-circuit)', '10,07 A'],
        ['Rendement', '17,5 %'],
        ['Tension système max / fusible série max', '1 000 V / 20 A'],
      ],
    },
    { type: 'formula', text: 'Nombre = 1 669,2 / 300 = 5,56 → 6 panneaux → 6 × 300 = 1 800 W' },
    { type: 'illustration', name: 'peak-sun-hours', props: { hours: 5 }, caption: '5 heures de soleil crête' },
    { type: 'image', source: shot.panels, caption: 'Cours — 1 669,2 W → 6 panneaux LG de 300 W', focus: { x: 0.01, y: 0.53, w: 0.42, h: 0.44 } },

    { type: 'heading', text: '4 · Les batteries' },
    {
      type: 'table',
      headers: ['Trojan Solar SAGM 12 205', 'Valeur'],
      rows: [
        ['Tension', '12 V'],
        ['Capacité', '205 Ah (décharge en 20 h)'],
        ['Technologie', 'Plomb VRLA AGM, étanche, sans entretien'],
        ['Durée de vie (IEC 61427)', '8 ans et plus'],
      ],
    },
    {
      type: 'bullets',
      items: [
        "DoD = 0,5 : une batterie plomb AGM ne se décharge qu'à 50 % pour durer (contre 80 % pour le lithium de l'exemple 1).",
        'Coefficient de température = 0,9 : sur la courbe Trojan, vers 20 – 25 °C, la batterie fournit environ 90 % de sa capacité.',
        'Autonomie : 1 jour.',
      ],
    },
    { type: 'formula', text: 'Ah = (8 346 × 1) / (0,5 × 24 × 0,9) = 772 Ah' },
    { type: 'formula', text: 'En série = 24 / 12 = 2 · En parallèle = 772 / 205 = 3,76 → 4' },
    { type: 'formula', text: 'Total = 2 × 4 = 8 batteries → banc 24 V, 4 × 205 = 820 Ah' },
    { type: 'illustration', name: 'battery-bank', props: { series: 2, parallel: 4, battV: 12, battAh: 205 }, caption: '2 en série × 4 en parallèle = 24 V, 820 Ah' },
    { type: 'image', source: shot.batteries, caption: 'Cours — calcul des Ah et courbe capacité / température', focus: { x: 0.55, y: 0.46, w: 0.45, h: 0.5 } },
    { type: 'image', source: shot.batteriesBank, caption: 'Cours — 8 batteries : 24 V, 820 Ah' },

    { type: 'heading', text: '5 · Le régulateur de charge' },
    { type: 'text', text: 'Panneaux : 1 800 W · Système : 24 V. Victron SmartSolar MPPT 150/70 :' },
    {
      type: 'table',
      headers: ['MPPT 150/70', 'Fiche technique', 'Notre système', ''],
      rows: [
        ['Puissance PV nominale à 24 V', '2 000 W', '1 800 W', '✓'],
        ['Courant de charge nominal', '70 A', '1 800 / 24 = 75 A', '⚠️'],
        ['Isc PV max', '50 A (30 A par connecteur MC4)', '37,76 A (étape 6)', '✓'],
        ['Voc PV max', '150 V', '79,3 V (étape 6)', '✓'],
      ],
    },
    {
      type: 'text',
      text: "Cette fois, les 75 A dépassent les 70 A du régulateur. Le MPPT écrête les 5 A en trop et ne charge qu'à 70 A au maximum. Deux options :",
    },
    {
      type: 'bullets',
      items: [
        'Passer au modèle 150/85 (85 A).',
        'Accepter la perte : 5 / 75 ≈ 6,7 % de la production des panneaux (24 × 70 = 1 680 W au lieu de 1 800 W).',
      ],
    },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'controller' }, caption: 'MPPT 150/70 : 75 A demandés, 70 A fournis' },
    { type: 'image', source: shot.controller, caption: 'Cours — 1 800 W ≤ 2 000 W à 24 V', focus: { x: 0.0, y: 0.27, w: 0.65, h: 0.28 } },
    { type: 'image', source: shot.clipping, caption: 'Cours — 75 A > 70 A : écrêtage d’environ 6,7 %', focus: { x: 0.22, y: 0.34, w: 0.58, h: 0.24 } },

    { type: 'heading', text: 'Les batteries supportent-elles ce courant ?' },
    { type: 'formula', text: '4 branches en parallèle : 70 / 4 = 17,5 A par branche' },
    { type: 'formula', text: 'Courant de charge max Trojan = 20 % de C20 = 0,2 × 205 = 41 A > 17,5 A ✓' },
    {
      type: 'table',
      headers: ['Réglages du chargeur (25 °C)', '12 V', '24 V', '36 V', '48 V'],
      rows: [
        ['Absorption (2,40 V/élément)', '14,40', '28,80', '43,20', '57,60'],
        ['Floating (2,25 V/élément)', '13,50', '27,00', '40,50', '54,00'],
      ],
    },
    {
      type: 'note',
      text: "💡 Dans tes notes : 75 / 4 = 18,75 A, c'est le courant avant écrêtage. Le cours prend 70 / 4 = 17,5 A, le courant réellement fourni par le régulateur. Dans les deux cas, on reste bien sous les 41 A. Ne pas installer ces batteries dans un local fermé et non ventilé.",
    },
    { type: 'illustration', name: 'battery-bank', props: { series: 2, parallel: 4, battV: 12, battAh: 205, current: 70 }, caption: '70 A répartis : 17,5 A par branche' },
    { type: 'image', source: shot.charge, caption: 'Cours — 17,5 A < 41 A (20 % de C20)', focus: { x: 0.4, y: 0.36, w: 0.53, h: 0.33 } },

    { type: 'heading', text: '6 · Le raccordement des panneaux' },
    { type: 'formula', text: 'V_conception = 150 / 2 = 75 V' },
    { type: 'formula', text: 'En série = 75 / 38,9 = 1,92 → 2 panneaux' },
    { type: 'formula', text: 'En parallèle = 6 / 2 = 3 chaînes' },
    { type: 'illustration', name: 'pv-array', props: { series: 2, parallel: 3, voc: 38.9 }, caption: '2 panneaux en série × 3 chaînes' },
    {
      type: 'text',
      text: "Température minimale du site : −20 °C. Le cours applique un facteur de compensation de température de 1,02 :",
    },
    { type: 'formula', text: 'Voc à froid = 2 × 38,9 × 1,02 = 79,3 V < 150 V ✓' },
    {
      type: 'note',
      text: "⚠️ À −20 °C, la table NEC 690.7(A) donne un facteur de 1,18 (plage −16 à −20 °C), pas 1,02 (qui correspond à 20 – 24 °C). Vérification avec 1,18 : 2 × 38,9 × 1,18 = 91,8 V < 150 V ✓ — le choix de 2 panneaux en série reste valable.",
    },
    { type: 'formula', text: 'I_entrée = 1,25 × 3 × 10,07 = 37,76 A < 50 A ✓' },
    {
      type: 'text',
      text: "Les 3 chaînes sont regroupées dans un coffret de raccordement PV (combiner box) avant le régulateur.",
    },
    { type: 'illustration', name: 'mppt-window', props: { max: 150, design: 75, cold: 79.3, nec: 91.8 }, caption: '79,3 V (cours) et 91,8 V (NEC à −20 °C) : tous deux sous 150 V' },
    { type: 'image', source: shot.connection, caption: 'Cours — 2 × 3 panneaux, 79,3 V et 37,76 A' },
    { type: 'image', source: shot.wiring, caption: 'Cours — panneaux, coffret PV, MPPT, batteries, onduleur' },

    { type: 'heading', text: 'Bilan et comparaison avec l’exemple 1' },
    {
      type: 'table',
      headers: ['', 'Exemple 1 (Canada)', 'Exemple 2'],
      rows: [
        ['Charges', '153 W · 1 092 Wh/j', '860 W · 6 420 Wh/j'],
        ['Tension système', '12 V', '24 V'],
        ['Onduleur', '250 W / 400 W', '1 500 W / 3 000 W'],
        ['Soleil crête', '2 h', '5 h'],
        ['Panneaux', '4 × 200 W (2S × 2P)', '6 × 300 W (2S × 3P)'],
        ['Batteries', '2 × LiFePO4 330 Ah (DoD 0,8)', '8 × AGM 205 Ah (DoD 0,5)'],
        ['Régulateur', 'MPPT 150/70 (67 A ✓)', 'MPPT 150/70 (75 A, écrêté) ou 150/85'],
      ],
    },
    { type: 'illustration', name: 'pv-system', caption: 'Le système dimensionné' },
  ],
};
