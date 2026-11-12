import { TopicContent } from '../types';

export const spFieldContent: TopicContent = {
  title: 'Le champ PV de la pompe',
  subtitle: 'Sans batterie, chaque nuage se voit au débit. Fanta dimensionne le champ sur l’énergie d’avril, vérifie la chaîne avec la plage de tension du variateur, trace la journée de pompage heure par heure et dresse la liste des équipements.',
  blocks: [
    { type: 'scene', text: 'Mois 2 · Terrain du forage de Sonkélé, avec Yao Kouamé et Adama Ouédraogo' },
    {
      type: 'objectives',
      items: [
        'Dimensionner un champ de pompage au fil du soleil à partir de l’énergie électrique journalière.',
        'Remplir la note de calcul de la chaîne avec la plage MPPT du variateur.',
        'Tracer le débit heure par heure et vérifier la production de chaque saison.',
        'Protéger le champ : ombrages, clôture, vol, surtensions.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '7,7 kWc', label: '14 modules de 550 Wc en une chaîne' },
        { value: '1,4', label: 'rapport champ / moteur' },
        { value: '≈ 85 m³/j', label: 'pompés en moyenne en avril' },
        { value: '≈ 100 m³', label: 'par jour de ciel clair' },
      ],
    },

    { type: 'heading', text: '1 · Combien de panneaux ?' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'panels' }, caption: 'Ni batterie ni régulateur : le champ alimente directement le variateur de la pompe' },
    {
      type: 'table',
      headers: ['Perte entre les panneaux et le variateur', 'Facteur'],
      rows: [
        ['Température des cellules (≈ 65 °C : 40 K × 0,35 %/K)', '0,86'],
        ['Poussière, avec un nettoyage par semaine', '0,95'],
        ['Câbles, désadaptation, MPPT', '0,96'],
        ['Total des pertes du champ', '≈ 0,78'],
        ['Matin et soir sous le seuil de pompage (étape 2)', '0,90'],
      ],
    },
    {
      type: 'calc',
      title: 'Puissance crête du champ',
      steps: [
        { label: 'Énergie électrique à fournir en avril (étape 1)', formula: 'E_{el} = 27,7 kWh/j' },
        { label: 'Énergie utile par kWc en avril', formula: '5,8 × 0,78 × 0,90 ≈ 4,07 kWh/kWc/j' },
        { label: 'Puissance crête minimale', formula: 'P_{c} = \\frac{27,7}{4,07} ≈ 6,8 kWc' },
        { label: 'Arrondi au nombre de modules d’une chaîne', formula: '14 × 550 = 7,7 kWc   ;   rapport \\frac{7,7}{5,5} = 1,4' },
      ],
      result: '7,7 kWc : 13 % de marge sur le besoin d’avril, dans la fourchette conseillée de 1,3 à 1,5 fois le moteur',
    },
    {
      type: 'table',
      headers: ['Période', 'Soleil (h)', 'Énergie utile (kWh/j)', 'Eau pompée (m³/j)', 'Besoin (m³/j)'],
      rows: [
        ['Avril', '5,8', '31,3', '≈ 85', '75 ✓'],
        ['Décembre', '5,2', '28,1', '≈ 76', '65 ✓'],
        ['Août', '4,5', '24,3', '≈ 66', '55 ✓'],
      ],
    },

    { type: 'heading', text: '2 · La chaîne et le variateur' },
    {
      type: 'text',
      text: 'Pour alimenter un moteur 400 V, le variateur a besoin d’une tension continue élevée : sa plage MPPT va de 350 à 750 V, et il ne supporte pas plus de 800 V. Les nuits d’harmattan descendent à 12 °C ; au sol et bien ventilées, les cellules ne dépassent pas 70 °C. Les 14 modules forment une seule chaîne.',
    },
    {
      type: 'stringSheet',
      sheet: {
        project: 'Pompage de Sonkélé',
        module: { name: 'Monocristallin 550 Wc, demi-cellules', pmax: 550, voc: 49.6, vmp: 41.6, isc: 14.0, imp: 13.2, betaVoc: -0.27, gammaPmax: -0.35 },
        tMin: 12,
        tCellMax: 70,
        inverter: { name: 'Variateur solaire de pompe 5,5 kW (entrée DC)', vmaxDc: 800, mpptMin: 350, mpptMax: 750, imaxMppt: 18, iscMaxMppt: 20, pac: 5.5, count: 1 },
        strings: [{ mppt: 'Entrée DC', series: 14, parallel: 1 }],
      },
    },
    {
      type: 'calc',
      title: 'Vérifications de la chaîne de 14',
      steps: [
        { label: 'Voc à 12 °C', formula: '14 × 49,6 × [1 + 0,0027 × 13] ≈ 719 V ≤ 800 V ✓' },
        { label: 'Vmp à 70 °C', formula: '14 × 41,6 × [1 − 0,0035 × 45] ≈ 491 V ≥ 350 V ✓' },
        { label: 'Vmp à 12 °C', formula: '14 × 41,6 × [1 + 0,0035 × 13] ≈ 609 V ≤ 750 V ✓' },
        { label: 'Puissance disponible à midi (pertes 0,78)', formula: '7,7 × 0,78 ≈ 6,0 kW ≥ 5,25 kW ✓  (le variateur écrête le surplus)' },
      ],
      result: 'Une chaîne de 14 modules, sans fusible ni boîte de jonction',
    },

    { type: 'heading', text: '3 · Une journée de pompage' },
    {
      type: 'table',
      headers: ['Heure', 'Puissance du champ (kW)', 'Puissance utilisée (kW)', 'Débit (m³/h)'],
      rows: [
        ['7 h', '0,6', '0 (sous le seuil)', '0'],
        ['8 h', '2,0', '0 (sous le seuil)', '0'],
        ['9 h', '3,6', '3,6', '9'],
        ['10 h', '4,9', '4,9', '15'],
        ['11 h', '5,7', '5,25 (écrêté)', '17'],
        ['12 h', '6,0', '5,25 (écrêté)', '17'],
        ['13 h', '5,8', '5,25 (écrêté)', '17'],
        ['14 h', '5,1', '5,1', '16'],
        ['15 h', '3,9', '3,9', '11'],
        ['16 h', '2,4', '2,4', '2'],
        ['17 h', '0,9', '0', '0'],
        ['Total, ciel clair d’avril', '40,9 kWh', '35,7 kWh', '≈ 104 m³'],
      ],
    },
    {
      type: 'note',
      text: 'Le débit de pointe reste à 17 m³/h, sous les 18 m³/h que le forage peut donner : le niveau ne descendra pas jusqu’à la pompe. Un jour moyen d’avril, plus brumeux, donne environ 85 m³. Le pompage s’arrête vers 16 h 30 : tout ce que le village boit le soir et le lendemain matin doit déjà être dans le château.',
    },
    {
      type: 'decision',
      title: 'Support des modules',
      choice: 'Structure fixe au sol, inclinée à 15° plein sud, à 10 m du forage, dans un enclos grillagé',
      reasons: [
        '15° favorise un peu la saison sèche et permet à la pluie de laver les modules.',
        'Deux modules de plus coûtent bien moins cher qu’un suiveur et n’ont aucune pièce mobile.',
        'Près du forage, loin du château d’eau et des grands arbres : aucun ombrage entre 8 h et 17 h.',
      ],
      rejected: 'Suiveur à un axe : 20 à 25 % d’eau en plus, surtout le matin et le soir, mais un moteur, des paliers et un automate à entretenir au village.',
    },

    { type: 'heading', text: '4 · La liste des équipements' },
    {
      type: 'solarEquipment',
      list: {
        title: 'Système de pompage solaire de Sonkélé',
        project: 'Village de Sonkélé',
        rows: [
          { tag: 'PV', item: 'Modules monocristallins 550 Wc, structure fixe au sol', qty: 14, rating: '7,7 kWc', data: '1 chaîne de 14, 15° plein sud', protection: 'sectionneur DC + parafoudre DC type 2', kwp: 7.7 },
          { tag: 'VAR', item: 'Variateur solaire de pompe', qty: 1, rating: '5,5 kW', data: 'MPPT 350–750 V, entrée AC de secours', protection: 'filtre de sortie, sonde marche à sec', kw: 5.5 },
          { tag: 'PMP', item: 'Pompe immergée 6" + moteur 400 V', qty: 1, rating: '17 m³/h à 61 m', data: 'posée à 45 m, moteur 5,5 kW', protection: '2 clapets anti-retour' },
          { tag: 'CBL', item: 'Câble immergé 4G4 mm²', qty: 1, rating: '65 m', data: 'jonction thermorétractable', protection: 'ΔU 1,6 %' },
          { tag: 'NIV', item: 'Sonde de niveau bas + flotteur du château', qty: 1, rating: '2 entrées', data: 'arrêt marche à sec / château plein' },
          { tag: 'CND', item: 'Conduite PE DN90 PN10', qty: 1, rating: '400 m', data: 'enterrée à 0,8 m', protection: 'ventouse au point haut' },
          { tag: 'RES', item: 'Château d’eau en acier sur tour de 12 m', qty: 1, rating: '60 m³', data: 'étape 4' },
          { tag: 'GE', item: 'Groupe existant (secours)', qty: 1, rating: '15 kVA', data: 'sur l’entrée AC du variateur' },
          { tag: 'CLO', item: 'Clôture grillagée 2 m, portail, visserie antivol', qty: 1, rating: '≈ 60 m', data: 'champ et tête de forage' },
        ],
      },
    },
    {
      type: 'bullets',
      items: [
        'Cadres des modules, structure et variateur reliés à une prise de terre commune.',
        'Visserie antivol et numéros gravés sur chaque module ; le gardien du forage est rémunéré par le comité.',
        'Dalle et capot cadenassé sur la tête de forage : la qualité de l’eau commence là.',
      ],
    },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Champ de pompage',
      rows: [
        { norm: 'IEC 62253', rule: 'Performances d’un système de pompage PV : courbe débit / éclairement, essais du sous-ensemble.', result: 'débit vérifié à la réception' },
        { norm: 'IEC 62548-1', rule: 'Conception du champ : tension maximale à la température minimale, protections.', result: 'chaîne de 14' },
        { norm: 'IEC 61215 / IEC 61730', rule: 'Qualification et sécurité des modules.', result: 'modules certifiés' },
        { norm: 'IEC 60364-7-712', rule: 'Installations PV : sectionnement, parafoudres, mise à la terre.', result: 'parafoudre et terre' },
      ],
    },
    {
      type: 'regional',
      text: 'Le vol de modules est devenu courant autour des forages isolés. Les villages qui s’en protègent le mieux combinent une clôture, des vis antivol, un gardien payé par la vente de l’eau et, surtout, le sentiment que le système appartient au village. Fanta associe le comité de l’eau à chaque étape du chantier.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'P_c = E_el ÷ (soleil × pertes du champ × facteur de seuil) ; le champ vaut 1,3 à 1,5 fois la puissance du moteur.',
        'La chaîne doit rester dans la plage MPPT du variateur, à chaud comme à froid.',
        'Le débit suit le soleil : la journée de pompage dure 7 à 8 heures, et le débit de pointe ne doit pas dépasser celui du forage.',
        'Clôture, terre, parafoudre et antivol font partie du dimensionnement.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Avec 12 modules seulement (6,6 kWc), le besoin d’avril serait-il couvert ?',
      solution: ['Énergie utile : 6,6 × 4,07 ≈ 26,9 kWh ; hydraulique : 26,9 × 0,45 ≈ 12,1 kWh.', 'Eau : 12,1 × 367 / 61 ≈ 73 m³ < 75 m³ : non, et sans aucune marge pour la poussière ou le vieillissement.'],
    },
    {
      type: 'exercise',
      question: 'Pourrait-on monter 16 modules en série sur ce variateur ?',
      solution: ['Voc à 12 °C : 16 × 49,6 × 1,0351 ≈ 821 V > 800 V : non.', 'Pour plus de puissance, il faudrait deux chaînes en parallèle (si le variateur l’accepte) ou un variateur à tension plus élevée.'],
    },
  ],
};
