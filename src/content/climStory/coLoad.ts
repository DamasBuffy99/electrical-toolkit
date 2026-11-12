import { TopicContent } from '../types';
import { fig } from '../topics/clim/fig';

export const coLoadContent: TopicContent = {
  title: 'Bilan par façades et heure de pointe',
  subtitle: 'Kora Assurances construit son siège : cinq niveaux de 600 m² de bureaux vitrés. Ousmane découpe chaque étage en zones selon les façades, chiffre l’air neuf de 78 personnes par étage et montre au directeur technique pourquoi la façade ouest et la salle de réunion posent problème.',
  blocks: [
    { type: 'scene', text: 'Mois 2 · Bureau d’études, avec Jean-Marc Kouadio (Kora) et Mariam Diop (architecte)' },
    {
      type: 'objectives',
      items: [
        'Découper un bâtiment en zones thermiques selon les orientations et les usages.',
        'Chiffrer les apports internes d’un bureau : occupants, éclairage, informatique.',
        'Mesurer le poids de l’air neuf dans un climat chaud et humide.',
        'Distinguer la pointe de chaque zone de la pointe du bâtiment (foisonnement).',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '≈ 76 kW', label: 'par étage, air neuf compris' },
        { value: '39 %', label: 'du bilan dû à l’air neuf' },
        { value: '154 W/m²', label: 'zone ouest, à 16 h' },
        { value: '0,33', label: 'facteur sensible de la salle de réunion' },
        { value: '≈ 323 kW', label: 'pour le bâtiment, foisonnement 0,85' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Jean-Marc Kouadio (Kora Assurances)',
      role: 'client',
      text: 'Notre ancien siège était climatisé par des splits posés au fil des années. Il faisait trop froid au nord, trop chaud à l’ouest, et la salle du conseil était irrespirable. Je ne veux pas revivre ça.',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'Ce que vous décrivez, c’est un bâtiment traité comme une seule pièce. Chaque façade a son soleil et son heure de pointe, chaque salle son occupation. Je vais découper chaque étage en cinq zones et les calculer séparément ; le système suivra ce découpage.',
    },

    { type: 'heading', text: '1 · Découper en zones' },
    {
      type: 'table',
      headers: ['Zone (étage type)', 'Surface', 'Pointe', 'Ce qui domine'],
      rows: [
        ['Bureaux nord', '180 m²', 'midi à 14 h', 'apports internes, peu de soleil'],
        ['Bureaux sud', '180 m²', '13 h', 'soleil haut, arrêté par les débords'],
        ['Bureaux est', '90 m²', '9 h', 'soleil rasant du matin'],
        ['Bureaux ouest', '90 m²', '16 h', 'soleil rasant de l’après-midi + inertie'],
        ['Salle de réunion (centrale)', '60 m²', 'pendant les réunions', '24 personnes, air neuf'],
      ],
    },
    fig('p173_0', 'Figure 6.9 du guide IEPF — à Ouagadougou, les façades est et ouest reçoivent 2 à 3 fois plus que le nord'),
    fig('p026_0', 'Tableau 1.8 — orientation des locaux et heure de charge maximale'),

    { type: 'heading', text: '2 · Les apports internes d’un bureau' },
    {
      type: 'calc',
      title: 'Bureaux nord (180 m²)',
      steps: [
        { label: 'Occupation : 1 personne pour 10 m², travail assis', formula: 'n = 18   ;   Q_S = 18 × 75 = 1 350 W   ;   Q_L = 18 × 55 = 990 W' },
        { label: 'Éclairage LED : 8 W/m²', formula: 'Q = 180 × 8 = 1 440 W' },
        { label: 'Informatique : postes, écrans, imprimantes ≈ 15 W/m²', formula: 'Q = 180 × 15 = 2 700 W' },
        { label: 'Air neuf : 25 m³/h par personne (guide IEPF)', formula: 'q = 450 m³/h   ;   Q_S = 450 × 6 × 0,33 = 891 W   ;   Q_L = 450 × 0,0147 × 840 = 5 557 W' },
      ],
      result: 'Avec les parois (900 W) et les vitrages (2 600 W) : ≈ 17,2 kW, dont 6,4 kW pour l’air neuf (5,6 kW rien que pour son humidité)',
    },
    fig('p033_0', 'Tableau 1.15 — débit d’air neuf par personne et densité d’occupation par type de local'),
    fig('p175_1', 'Tableau 6.11 — densités de puissance d’éclairage : 10,5 W/m² pour des bureaux classiques'),

    { type: 'heading', text: '3 · La feuille de bilan de l’étage type' },
    {
      type: 'heatLoadSheet',
      sheet: {
        project: 'Siège Kora · étage type',
        location: 'Ville côtière, Afrique de l’Ouest',
        outdoor: '32 °C · 25,5 g/kg',
        indoor: '26 °C · 50 %',
        peakHour: 'propre à chaque zone ; bâtiment 15–16 h',
        margin: 0.05,
        diversity: 0.85,
        rooms: [
          { name: 'Bureaux nord', area: 180, walls: 900, glazing: 2600, people: 1350, lighting: 1440, equipment: 2700, air: 891, peopleLat: 990, airLat: 5557, selected: '4 cassettes 2,8 kW', selectedW: 11200 },
          { name: 'Bureaux sud', area: 180, walls: 1000, glazing: 3600, people: 1350, lighting: 1440, equipment: 2700, air: 891, peopleLat: 990, airLat: 5557, selected: '3 cassettes 4,0 kW', selectedW: 12000 },
          { name: 'Bureaux est', area: 90, walls: 700, glazing: 5200, people: 675, lighting: 720, equipment: 1350, air: 446, peopleLat: 495, airLat: 2778, selected: '2 gainables 5,6 kW', selectedW: 11200 },
          { name: 'Bureaux ouest', area: 90, walls: 900, glazing: 5600, people: 675, lighting: 720, equipment: 1350, air: 446, peopleLat: 495, airLat: 2778, selected: '2 gainables 5,6 kW', selectedW: 11200 },
          { name: 'Salle de réunion (24 pers.)', area: 60, walls: 200, glazing: 0, people: 1800, lighting: 480, equipment: 600, air: 1188, peopleLat: 1320, airLat: 7409, selected: '1 gainable 5,6 kW', selectedW: 5600 },
        ],
      },
    },
    {
      type: 'note',
      text: 'Attention à la colonne « Appareil retenu » : les unités intérieures ne sont dimensionnées que pour les apports des zones, sans l’air neuf, qui sera traité à part (étape 3). C’est pourquoi elles paraissent trop petites face aux totaux de la feuille : une croix ✗ qui sera levée par la centrale d’air neuf.',
    },
    {
      type: 'calc',
      title: 'Ce que montre la feuille',
      steps: [
        { label: 'Part de l’air neuf dans l’étage (sensible + latent)', formula: '\\frac{3 862 + 24 079}{72 380} ≈ 39 %' },
        { label: 'Salle de réunion : facteur de chaleur sensible', formula: 'SHR = \\frac{4 268}{12 997} ≈ 0,33' },
        { label: 'Zones est et ouest ne sont pas à leur pointe en même temps : foisonnement', formula: '76 kW × 0,85 ≈ 64,6 kW par étage' },
        { label: 'Bâtiment de 5 niveaux', formula: '5 × 64,6 ≈ 323 kW ≈ 92 TR' },
      ],
      result: 'Environ 76 kW par étage zone par zone, 65 kW au même instant ; 323 kW pour le bâtiment',
    },
    {
      type: 'note',
      text: 'Un SHR de 0,33 signifie que deux tiers de la puissance de la salle de réunion servent à retirer de l’eau. Un appareil ordinaire (SHR ≈ 0,75) refroidirait l’air jusqu’à ce que les occupants aient froid, sans arriver à le sécher : la salle serait fraîche et moite, « irrespirable » comme dit Jean-Marc. La réponse est de sécher l’air neuf avant qu’il entre.',
    },
    {
      type: 'decision',
      title: 'Zonage et façades',
      choice: 'Cinq zones par étage, chacune avec ses unités et sa régulation ; vitrage à contrôle solaire (g ≈ 0,4) et lames fixes sur les façades est et ouest',
      reasons: [
        'Chaque zone a sa propre heure de pointe : une régulation commune donnerait froid au nord pour rafraîchir l’ouest.',
        'Le vitrage à contrôle solaire et les lames divisent par deux les apports des façades est et ouest.',
        'Mariam Diop accepte les lames, qui deviennent un élément de la façade.',
      ],
      rejected: 'Façade entièrement vitrée en verre clair sans protection : + 6 kW par façade est ou ouest et par étage, soit 60 kW de froid en plus pour le bâtiment.',
    },
    { type: 'fiche', id: 'clim-load-method', why: 'La méthode de calcul pas à pas.' },
    { type: 'fiche', id: 'clim-building', why: 'Concevoir un bâtiment qui chauffe moins : orientation, vitrages, protections.' },

    { type: 'heading', text: '4 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Air neuf des bureaux',
      rows: [
        { norm: 'Guide IEPF', rule: 'Débits d’air neuf par personne et densités d’occupation par type de local.', result: '25 m³/h par personne' },
        { norm: 'ASHRAE 62.1', rule: 'Débit par personne + débit par m² : bureaux 2,5 L/s·pers + 0,3 L/s·m².', result: '≈ 28 m³/h par personne à 10 m²/pers.' },
        { norm: 'EN 16798-1', rule: 'Catégorie II : 7 L/s par personne + 0,7 L/s·m² pour un bâtiment peu polluant.', result: '≈ 50 m³/h par personne' },
        { norm: 'Code du travail (France)', rule: 'Bureaux : 25 m³/h par occupant au minimum.', result: '25 m³/h' },
      ],
    },
    {
      type: 'regional',
      text: 'Plusieurs pays de la région ont adopté ou préparent des codes d’efficacité énergétique des bâtiments (le guide IEPF cite les ratios du code ivoirien) : facteur solaire des vitrages, densité d’éclairage, efficacité des équipements. Pour un siège social financé par une banque de développement, ces critères, ou une certification internationale, sont souvent exigés. Mieux vaut les intégrer dès l’esquisse avec l’architecte.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Un bâtiment se découpe en zones : orientation, usage, horaires.',
        'Dans un bureau, occupants, éclairage et informatique pèsent autant que le soleil.',
        'L’air neuf représente plus du tiers du bilan sous un climat humide, surtout en latent.',
        'Les salles très occupées ont un SHR bas : il faut sécher l’air, pas seulement le refroidir.',
        'La somme des pointes de zones est supérieure à la pointe du bâtiment : on applique un foisonnement pour la production.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Avec 50 m³/h par personne (EN 16798-1, catégorie II), que devient l’apport latent de l’air neuf de la salle de réunion ?',
      solution: ['q = 24 × 50 = 1 200 m³/h.', 'Q_L = 1 200 × 0,0147 × 840 ≈ 14 800 W, le double : l’intérêt d’une récupération d’énergie devient évident.'],
    },
    {
      type: 'exercise',
      question: 'On remplace l’éclairage de 8 W/m² par des tubes fluorescents à 14 W/m². Que gagne-t-on à rester en LED, par étage ?',
      solution: ['Différence : 6 W/m² × 600 m² = 3,6 kW de chaleur par étage.', 'Soit 18 kW de froid pour le bâtiment, en plus des 18 kW d’électricité d’éclairage économisés.'],
    },
  ],
};
