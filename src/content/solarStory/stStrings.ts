import { TopicContent } from '../types';

export const stStringsContent: TopicContent = {
  title: '100 kWc en toiture : les chaînes',
  subtitle: 'Cent quatre-vingts modules sur un toit en bac acier, deux onduleurs de 40 kW à cinq entrées : Fanta implante le champ, vérifie que la charpente tient, puis remplit la note de calcul des chaînes jusqu’à la limite des 1 000 V.',
  blocks: [
    { type: 'scene', text: 'Mois 2 · Sur le toit de Tropica, avec Yao Kouamé (SolTech Afrique) et Paul Ndiaye' },
    {
      type: 'objectives',
      items: [
        'Implanter un champ en toiture : surface utile, retraits, charge sur la charpente.',
        'Choisir la longueur de chaîne la plus grande admise par la tension maximale de 1 000 V.',
        'Vérifier la plage MPPT à chaud et à froid, et les courants par entrée.',
        'Dimensionner les câbles de chaîne et décider des fusibles.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '10 × 18', label: 'chaînes × modules' },
        { value: '910 V', label: 'Voc d’une chaîne au matin le plus frais' },
        { value: '≈ 13 kg/m²', label: 'charge ajoutée sur la toiture' },
        { value: '0,5 %', label: 'chute de tension d’une chaîne' },
      ],
    },

    { type: 'heading', text: '1 · Implanter le champ' },
    {
      type: 'table',
      headers: ['Élément', 'Valeur', 'Commentaire'],
      rows: [
        ['Toiture', 'bac acier sur pannes, 2 pans de 600 m², pente 10°', 'pan sud retenu'],
        ['Retraits', '1 m en rive et au faîtage', 'vent plus fort en bordure, accès des pompiers'],
        ['Cheminement', '1 allée de 1 m tous les 2 rangs', 'nettoyage, maintenance, intervention'],
        ['Modules', '180 × (2,28 × 1,13 m), 28 kg', '≈ 465 m² couverts'],
        ['Fixation', 'rails sur crochets vissés dans les pannes', 'pas de perçage du bac entre les pannes'],
        ['Charge ajoutée', '(180 × 28 kg + 1 100 kg de rails) / 465 m² ≈ 13 kg/m²', 'à valider par le bureau de structure'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Yao Kouamé',
      role: 'team',
      text: 'Le bac est en bon état, mais les pannes datent de 1998. Je ne pose rien tant que le bureau de structure n’a pas vérifié 13 kg/m² de plus, et surtout l’arrachement au vent. En saison des pluies, les rafales des grains soulèvent les modules plus qu’on ne croit.',
    },
    {
      type: 'note',
      text: 'Le vent est souvent plus dimensionnant que le poids : un module de 2,58 m² peut subir plusieurs centaines de newtons d’arrachement en rive lors d’un grain. Le bureau de structure vérifie les pannes, mais aussi le nombre de crochets par rail, plus serré en bordure de toit.',
    },

    { type: 'heading', text: '2 · La longueur des chaînes' },
    { type: 'illustration', name: 'pv-array', props: { series: 18, parallel: 1, voc: 49.6 }, caption: 'Une chaîne de 18 modules : près de 900 V à vide par un matin frais' },
    {
      type: 'text',
      text: 'Sur la côte, les nuits ne descendent pas sous 18 °C : c’est cette température, au lever du soleil, qui fixe la tension maximale. Sur un toit en bac acier, les modules chauffent davantage qu’au sol : Fanta retient 75 °C de cellule pour la vérification à chaud. Chaque onduleur de 40 kW a cinq entrées MPPT indépendantes ; elle place une seule chaîne par entrée.',
    },
    {
      type: 'stringSheet',
      sheet: {
        project: 'Toiture Tropica',
        module: { name: 'Monocristallin 550 Wc, demi-cellules', pmax: 550, voc: 49.6, vmp: 41.6, isc: 14.0, imp: 13.2, betaVoc: -0.27, gammaPmax: -0.35 },
        tMin: 18,
        tCellMax: 75,
        inverter: { name: 'Onduleur réseau triphasé 40 kW, 5 MPPT', vmaxDc: 1000, mpptMin: 200, mpptMax: 800, imaxMppt: 20, iscMaxMppt: 30, pac: 40, count: 2 },
        strings: [
          { mppt: 'MPPT 1', series: 18, parallel: 1 },
          { mppt: 'MPPT 2', series: 18, parallel: 1 },
          { mppt: 'MPPT 3', series: 18, parallel: 1 },
          { mppt: 'MPPT 4', series: 18, parallel: 1 },
          { mppt: 'MPPT 5', series: 18, parallel: 1 },
        ],
      },
    },
    {
      type: 'calc',
      title: 'Pourquoi 18 modules, et pas 19 ou 20 ?',
      steps: [
        { label: 'Voc à 18 °C, chaîne de 18', formula: '18 × 49,6 × [1 + 0,0027 × 7] ≈ 910 V ≤ 1 000 V ✓' },
        { label: 'Chaîne de 20', formula: '20 × 49,6 × 1,0189 ≈ 1 011 V > 1 000 V  ✗  (destruction possible de l’onduleur)' },
        { label: 'Chaîne de 19 : Voc admis, mais Vmp au matin frais', formula: '19 × 41,6 × [1 + 0,0035 × 7] ≈ 810 V > 800 V  ✗  (sortie de la plage MPPT)' },
        { label: 'Chaîne de 18 : Vmp à 75 °C et à 18 °C', formula: '18 × 41,6 × [1 − 0,0035 × 50] ≈ 618 V   ;   18 × 41,6 × 1,0245 ≈ 767 V  ✓' },
      ],
      result: '18 modules par chaîne, 5 chaînes par onduleur : 2 × 49,5 kWc = 99 kWc',
    },
    {
      type: 'decision',
      title: 'Organisation des chaînes',
      choice: '10 chaînes de 18 modules, une par entrée MPPT, sur 2 onduleurs de 40 kW',
      reasons: [
        'Des chaînes longues réduisent le nombre de câbles, de connecteurs et de pertes.',
        'Une chaîne par MPPT : pas de fusible de chaîne, et chaque chaîne est surveillée séparément par l’onduleur.',
        '18 modules laissent 90 V de marge sous 1 000 V pour un matin exceptionnellement frais.',
      ],
      rejected: '9 chaînes de 20 modules : le Voc dépasse 1 000 V dès 25 °C. Et des onduleurs de 1 500 V : réservés aux grandes centrales, interdits dans la plupart des bâtiments.',
    },
    { type: 'fiche', id: 'pv-inverter-sizing', why: 'Tension, courant, plage MPPT et ratio DC/AC.' },

    { type: 'heading', text: '3 · Câbles et fusibles côté continu' },
    {
      type: 'calc',
      title: 'Câble d’une chaîne',
      steps: [
        { label: 'Courant de dimensionnement (IEC 62548)', formula: 'I_{B} = 1,25 × I_{sc} = 1,25 × 14,0 = 17,5 A' },
        { label: 'Câble solaire 6 mm² en toiture (Iz ≈ 70 A à 60 °C, après correction)', formula: '17,5 A ≤ 70 A ✓' },
        { label: 'Chute de tension, 40 m de chaîne (aller + retour = 80 m)', formula: 'ΔU = \\frac{2 × 40 × 13,2 × 0,023}{6} ≈ 4,0 V' },
        { label: 'Rapportée à Vmp', formula: '\\frac{4,0}{749} ≈ 0,5 % ≤ 1 % ✓' },
      ],
      result: 'Câble solaire 6 mm² double isolation, chute de tension 0,5 %',
    },
    {
      type: 'text',
      text: 'Pourquoi pas de fusible ? Un fusible de chaîne protège une chaîne en défaut contre le courant que lui renvoient les autres chaînes en parallèle. Ici, chaque chaîne est seule sur son entrée MPPT : le courant inverse maximal est celui d’une seule chaîne, inférieur au courant inverse admissible du module (25 A). L’IEC 62548 impose des fusibles lorsque (N − 1) × Isc dépasse ce courant inverse admissible : avec ce module, à partir de trois chaînes en parallèle (2 × 14 = 28 A > 25 A).',
    },
    {
      type: 'bullets',
      items: [
        'Connecteurs mâle et femelle de la même marque et du même modèle : un mélange de marques est la première cause d’échauffement et d’arc.',
        'Câbles posés dans des chemins de câbles fermés, à l’abri du soleil et des arêtes du bac, jamais posés à même la tôle.',
        'Boucles de chaîne aller-retour accolées pour réduire la surface de boucle (moins de surtension induite par la foudre).',
        'Repérage de chaque chaîne aux deux extrémités : T1-M1 à T2-M5.',
      ],
    },

    { type: 'heading', text: '4 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Champ PV en toiture',
      rows: [
        { norm: 'IEC 62548-1', rule: 'Conception du champ : tension maximale à la température minimale, I_B = 1,25 × Isc, fusibles à partir de 3 chaînes en parallèle.', result: '18 modules, pas de fusible' },
        { norm: 'IEC 60364-7-712 / NF C 15-100', rule: 'Installations PV dans les bâtiments : câblage, sectionnement, protection.', result: 'câbles et repérage' },
        { norm: 'UTE C15-712-1 (France)', rule: 'Guide PV raccordé au réseau : Voc à −10 °C en métropole, chute de tension ≤ 1 % côté DC conseillée.', result: 'pratique française' },
        { norm: 'Eurocode 1 / ASCE 7', rule: 'Charges permanentes, vent et arrachement sur les toitures.', result: 'vérification de la charpente' },
      ],
    },
    {
      type: 'regional',
      text: 'En France, la tension maximale se calcule à −10 °C : la même chaîne de 18 modules y atteindrait 18 × 49,6 × 1,094 ≈ 977 V, à peine sous 1 000 V. Sur la côte ouest-africaine, la température minimale de 18 °C autorise des chaînes plus longues. Mais attention aux zones sahéliennes : les nuits d’harmattan descendent à 10 °C ou moins, et la marge fond.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'La longueur de chaîne est limitée par le Voc au matin le plus frais, puis par le haut de la plage MPPT.',
        'La température de cellule chaude fixe le bas de la plage MPPT ; en toiture, elle est plus élevée qu’au sol.',
        'Une chaîne par MPPT supprime les fusibles et facilite la surveillance.',
        'En toiture, la charpente et le vent se vérifient avant de poser le premier crochet.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'La même toiture serait à Ouagadougou, où les nuits descendent à 8 °C. Combien de modules par chaîne au maximum ?',
      solution: ['Voc d’un module à 8 °C : 49,6 × [1 + 0,0027 × 17] ≈ 51,9 V.', '1 000 / 51,9 ≈ 19,3 ; mais Vmp à 8 °C : 41,6 × 1,0595 ≈ 44,1 V, et 18 × 44,1 ≈ 793 V ≤ 800 V. On reste à 18, sans aucune marge.'],
    },
    {
      type: 'exercise',
      question: 'Paul voudrait regrouper deux chaînes sur chaque entrée pour n’utiliser qu’un onduleur. Est-ce possible ?',
      solution: ['Courant par entrée : 2 × 13,2 = 26,4 A > 20 A admis : l’onduleur briderait le courant.', 'Et 99 kWc sur un seul onduleur de 40 kW donnerait un ratio de 2,5 : impossible.'],
    },
  ],
};
