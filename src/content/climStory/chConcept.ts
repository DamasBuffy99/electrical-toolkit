import { TopicContent } from '../types';
import { fig } from '../topics/clim/fig';

export const chConceptContent: TopicContent = {
  title: 'Le bilan de l’hôtel et le choix de l’eau glacée',
  subtitle: 'Cent vingt chambres, un hall, un restaurant de 150 couverts, une salle de conférence : les pointes ne tombent pas à la même heure. Ousmane chiffre chaque zone, applique un foisonnement réaliste et explique à Nadia Haddad pourquoi l’hôtel mérite une centrale à eau glacée.',
  blocks: [
    { type: 'scene', text: 'Mois 1 · Bureau de Nadia Haddad, avec Félix Amoussou (directeur technique)' },
    {
      type: 'objectives',
      items: [
        'Dresser le bilan d’un bâtiment aux usages très différents.',
        'Appliquer un foisonnement fondé sur les horaires d’occupation.',
        'Choisir entre VRV et eau glacée pour un hôtel.',
        'Décider de la redondance de la production de froid.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '≈ 419 kW', label: 'somme des pointes de toutes les zones' },
        { value: '0,70', label: 'foisonnement retenu' },
        { value: '≈ 293 kW', label: 'puissance de la centrale (83 TR)' },
        { value: '3 × 150 kW', label: 'groupes d’eau glacée, N+1' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Nadia Haddad (propriétaire)',
      role: 'client',
      text: 'Mon ancien hôtel avait des splits dans chaque chambre. Les clients se plaignaient du bruit des unités extérieures sous les balcons, et on en remplaçait dix par an. Je veux du silence et de la fiabilité.',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'Alors on produit le froid à un seul endroit, loin des chambres, et on le distribue par de l’eau glacée. Mais d’abord, mesurons ce qu’il faut produire : dans un hôtel, le restaurant, la conférence et les chambres ne sont jamais pleins au même moment.',
    },

    { type: 'heading', text: '1 · Le bilan par zones' },
    {
      type: 'heatLoadSheet',
      sheet: {
        project: 'Hôtel Lagune Bleue',
        location: 'Bord de lagune, Afrique de l’Ouest',
        outdoor: '32 °C · 25,5 g/kg',
        indoor: '26 °C · 50 % (chambres 25 °C la nuit)',
        peakHour: 'propre à chaque zone',
        margin: 0.05,
        diversity: 0.7,
        rooms: [
          { name: '60 chambres côté lagune (ouest)', area: 1680, walls: 15000, glazing: 39000, people: 7800, lighting: 3600, equipment: 9000, air: 3540, peopleLat: 5400, airLat: 22200 },
          { name: '60 chambres côté ville (est)', area: 1680, walls: 12000, glazing: 15000, people: 7800, lighting: 3600, equipment: 9000, air: 3540, peopleLat: 5400, airLat: 22200 },
          { name: 'Hall et réception', area: 300, walls: 2500, glazing: 6000, people: 3000, lighting: 3000, equipment: 1500, air: 2376, peopleLat: 2200, airLat: 14818 },
          { name: 'Restaurant (150 couverts)', area: 250, walls: 2000, glazing: 4000, people: 12000, lighting: 2500, equipment: 3000, air: 7425, peopleLat: 10500, airLat: 46305, otherLat: 2000 },
          { name: 'Salle de conférence (150 pers.)', area: 200, walls: 1500, glazing: 1000, people: 11250, lighting: 2000, equipment: 2000, air: 7425, peopleLat: 8250, airLat: 46305 },
          { name: 'Administration', area: 100, walls: 1000, glazing: 1500, people: 750, lighting: 1000, equipment: 1500, air: 495, peopleLat: 550, airLat: 3087 },
        ],
      },
    },
    {
      type: 'calc',
      title: 'Une chambre type côté lagune (28 m², pointe à 17 h)',
      steps: [
        { label: 'Parois et vitrage du balcon (protégé par la loggia)', formula: 'Q = 250 + 650 = 900 W' },
        { label: '2 occupants au repos, éclairage, TV et minibar', formula: 'Q_S = 130 + 60 + 150 = 340 W   ;   Q_L = 90 W' },
        { label: 'Air neuf : 30 m³/h', formula: 'Q_S = 30 × 6 × 0,33 ≈ 59 W   ;   Q_L = 30 × 0,0147 × 840 ≈ 370 W' },
      ],
      result: '≈ 1,76 kW par chambre (1,85 kW avec la marge) ; côté ville, à l’ombre l’après-midi, ≈ 1,31 kW',
    },

    { type: 'heading', text: '2 · Le foisonnement : qui est plein, et quand ?' },
    {
      type: 'table',
      headers: ['Zone', 'Pointe propre', 'À 17 h (pointe du bâtiment)', 'Coefficient'],
      rows: [
        ['Chambres', '17 h – 22 h', 'taux d’occupation moyen 80 %, des clients encore dehors', '0,8'],
        ['Hall', 'arrivées 14 h – 19 h', 'présent', '1,0'],
        ['Restaurant', 'dîner 19 h 30 – 22 h', 'mise en place, quelques clients', '0,5'],
        ['Conférence', '9 h – 17 h', 'fin de séminaire, salle à moitié vide', '0,6'],
        ['Administration', '8 h – 17 h', 'présent', '1,0'],
      ],
    },
    {
      type: 'calc',
      title: 'Puissance de la centrale',
      steps: [
        { label: 'Somme des pointes de zones, avec 5 % de marge', formula: 'Σ ≈ 398,8 × 1,05 ≈ 419 kW' },
        { label: 'Somme pondérée par les coefficients du tableau, à 17 h', formula: '0,8 × 193 + 37 + 0,5 × 94 + 0,6 × 84 + 10 ≈ 300 kW' },
        { label: 'Foisonnement global retenu', formula: '\\frac{300}{419} ≈ 0,71   →   0,70 × 419 ≈ 293 kW' },
        { label: 'Conversion', formula: '293 kW ≈ 83 TR ≈ 1 000 000 BTU/h' },
      ],
      result: 'Centrale de production : ≈ 293 kW. Chaque terminal reste dimensionné sur la pointe de sa zone',
    },
    {
      type: 'note',
      text: 'Le foisonnement s’applique à la production (groupes, pompes, tuyauteries principales), jamais aux appareils de chaque local : le restaurant doit pouvoir recevoir ses 150 couverts même si cela n’arrive qu’à 21 h. La centrale, elle, n’a pas à servir en même temps le dîner, le séminaire et 120 chambres pleines au soleil.',
    },
    fig('p020_0', 'Tableau 1.3 du guide IEPF — conditions de base extérieures'),

    { type: 'heading', text: '3 · VRV ou eau glacée pour un hôtel ?' },
    { type: 'illustration', name: 'clim-central', props: { highlight: 'chiller' }, caption: 'Le froid est produit dans la centrale, puis l’eau glacée circule jusqu’aux ventilo-convecteurs et aux centrales de traitement d’air' },
    {
      type: 'table',
      headers: ['Critère', 'VRV', 'Eau glacée'],
      rows: [
        ['Fluide frigorigène dans les chambres', 'oui : chambres = locaux de sommeil, limites de charge sévères', 'non : uniquement de l’eau'],
        ['Bruit dans les chambres', 'faible', 'faible (ventilo-convecteur en faux plafond)'],
        ['Puissance du projet', '≈ 300 kW : limite haute du VRV', 'domaine naturel'],
        ['Centrales de traitement d’air (restaurant, conférence)', 'possibles, mais limitées', 'simples à alimenter en eau glacée'],
        ['Récupération pour l’eau chaude sanitaire', 'limitée', 'récupération sur les groupes'],
        ['Durée de vie', '≈ 15 ans', '20 à 25 ans pour les réseaux et terminaux'],
      ],
    },
    {
      type: 'decision',
      title: 'Système',
      choice: 'Centrale à eau glacée 7 / 12 °C, ventilo-convecteurs dans les chambres, centrales de traitement d’air pour le hall, le restaurant et la conférence',
      reasons: [
        'Aucun fluide frigorigène dans les chambres : pas de limite de charge à justifier dans 120 locaux de sommeil.',
        'Production regroupée loin des chambres : silence, maintenance au même endroit.',
        'L’eau glacée alimente aussi les centrales de traitement d’air des grandes salles, et la chaleur des groupes peut préchauffer l’eau chaude sanitaire.',
      ],
      rejected: 'VRV : performant, mais 120 chambres desservies en R32 imposeraient des détecteurs et des vannes dans chacune ; splits individuels : le bruit et les pannes que Nadia veut justement oublier.',
    },
    { type: 'fiche', id: 'clim-central-systems', why: 'Les familles d’installations centralisées.' },

    { type: 'heading', text: '4 · Combien de groupes ?' },
    {
      type: 'table',
      headers: ['Option', 'Puissance installée', 'Si un groupe tombe en panne', 'Charge partielle la nuit'],
      rows: [
        ['1 groupe de 300 kW', '300 kW', 'plus de froid : hôtel fermé', 'un seul gros compresseur peu chargé'],
        ['2 groupes de 150 kW', '300 kW', '150 kW : chambres seulement', 'correct'],
        ['3 groupes de 150 kW', '450 kW', '300 kW : tout l’hôtel fonctionne', 'très bon : un seul groupe la nuit'],
      ],
    },
    {
      type: 'decision',
      title: 'Redondance de la production',
      choice: '3 groupes de 150 kW, dont un en secours (N+1)',
      reasons: [
        'Une panne de groupe n’arrête rien, même un soir de séminaire et de dîner complet.',
        'La nuit, un seul groupe tourne près de sa charge optimale.',
        'Les trois groupes alternent pour s’user de la même façon ; la maintenance se fait sans couper le froid.',
      ],
      rejected: 'Deux groupes de 150 kW : 30 % moins cher, mais en cas de panne un soir de plein, le restaurant et la conférence seraient privés de froid.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Trois groupes d’environ 50 kW électriques chacun, plus les pompes : je réserve 180 kW au TGBT pour la centrale, sur le jeu de barres secouru. Et je prévois un démarrage séquentiel des groupes après une coupure, pour ne pas faire caler le groupe électrogène.',
    },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Hôtels et fluides frigorigènes',
      rows: [
        { norm: 'EN 378-1', rule: 'Locaux de sommeil (hôtels, hôpitaux) : catégorie d’occupation « a », limites de charge les plus strictes.', result: 'pas de fluide dans les chambres' },
        { norm: 'ISO 5149-1', rule: 'Mêmes catégories d’occupation et limites (cadre international).', result: 'idem' },
        { norm: 'ASHRAE 15', rule: 'Occupations institutionnelles et résidentielles : limites réduites pour les systèmes directs.', result: 'idem' },
        { norm: 'ASHRAE 90.1 / EN 14825', rule: 'Rendements minimaux des groupes d’eau glacée (pleine charge et saisonnier).', result: 'voir étape suivante' },
      ],
    },
    {
      type: 'regional',
      text: 'Les hôtels de la région vivent au rythme des coupures et du gazole : chaque kilowatt de froid se paie deux fois, au réseau et au groupe électrogène. Une centrale bien régulée, avec une seule machine la nuit et la récupération de chaleur pour l’eau chaude, réduit fortement la facture. Pensez aussi à l’air marin : groupes avec batteries traitées anticorrosion et visserie inox côté lagune.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Un hôtel juxtapose des zones aux horaires différents : chambres le soir, restaurant au dîner, conférence le jour.',
        'Les terminaux se dimensionnent sur la pointe de leur zone, la production sur la pointe simultanée (foisonnement).',
        'Au-delà de 300 kW, avec des locaux de sommeil et de grandes salles, l’eau glacée s’impose souvent.',
        'Plusieurs groupes en N+1 : continuité de service et bon rendement à charge partielle.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un soir de gala, le restaurant et la conférence sont pleins en même temps à 20 h. Les chambres sont à 60 %. Estimez la puissance appelée.',
      solution: [
        'Restaurant ≈ 94 kW et conférence ≈ 84 kW (pointes avec marge), chambres ≈ 0,6 × 193 ≈ 116 kW, hall et administration ≈ 48 kW.',
        'Total ≈ 342 kW : au-delà des 293 kW, mais les trois groupes (450 kW) le couvrent. C’est précisément l’intérêt du N+1 : une marge pour les soirs exceptionnels.',
      ],
    },
    {
      type: 'exercise',
      question: 'Pourquoi ne pas appliquer le foisonnement de 0,7 au ventilo-convecteur de chaque chambre ?',
      solution: ['Parce qu’une chambre donnée peut être occupée à sa pointe : son appareil doit couvrir 1,85 kW.', 'Le foisonnement traduit le fait que toutes les chambres ne sont pas à leur pointe au même moment : il ne vaut que pour ce qui est commun (groupes, pompes, collecteurs).'],
    },
  ],
};
