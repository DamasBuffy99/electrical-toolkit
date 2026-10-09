import { TopicContent } from '../../types';
import { fig } from './fig';

export const climCycleContent: TopicContent = {
  title: 'Comment un climatiseur fabrique du froid',
  subtitle: 'Le cycle frigorifique, le COP, l’EER et les unités (kW, BTU/h, CV)',
  blocks: [
    {
      type: 'text',
      text: "Un climatiseur ne « crée » pas de froid : il transporte de la chaleur. Il la prend dans le local (côté froid) et la rejette dehors (côté chaud), comme une pompe qui ferait remonter de l’eau. Pour faire ce travail, il consomme de l’électricité.",
    },
    { type: 'illustration', name: 'clim-cycle', caption: 'Le cycle frigorifique d’un split : la chaleur est pompée du local vers l’extérieur' },

    { type: 'heading', text: 'Les 4 organes du circuit frigorifique' },
    {
      type: 'text',
      text: 'Un fluide frigorigène (R22 autrefois, R410A, R32… aujourd’hui) circule en boucle fermée et change d’état : il s’évapore là où il faut absorber de la chaleur, il se condense là où il faut la rejeter.',
    },
    { type: 'subheading', text: '1 · L’évaporateur (dans le local)' },
    {
      type: 'text',
      text: "Le fluide, froid et à basse pression, y bout en absorbant la chaleur de l’air du local (Q1). Au passage, l’air se refroidit sous son point de rosée : la vapeur d’eau se condense sur les ailettes → c’est la déshumidification, d’où l’eau qui coule par le tuyau de condensats.",
    },
    { type: 'illustration', name: 'clim-cycle', props: { highlight: 'evaporator' }, caption: 'Évaporateur : le fluide bout et absorbe la chaleur du local' },
    { type: 'subheading', text: '2 · Le compresseur (unité extérieure)' },
    {
      type: 'text',
      text: "Il aspire la vapeur et la comprime : sa pression et sa température montent fortement (gaz très chaud). C’est lui qui consomme l’électricité (W) et c’est l’organe le plus coûteux.",
    },
    { type: 'illustration', name: 'clim-cycle', props: { highlight: 'compressor' }, caption: 'Compresseur : il consomme l’électricité et chauffe le gaz' },
    { type: 'subheading', text: '3 · Le condenseur (unité extérieure)' },
    {
      type: 'text',
      text: 'Le gaz chaud y cède sa chaleur à l’air extérieur (ou à de l’eau) et redevient liquide. Il rejette Q2 = Q1 + W : la chaleur du local plus l’énergie du compresseur. C’est pourquoi l’air soufflé par une unité extérieure est si chaud.',
    },
    { type: 'illustration', name: 'clim-cycle', props: { highlight: 'condenser' }, caption: 'Condenseur : toute la chaleur est rejetée dehors' },
    { type: 'subheading', text: '4 · Le détendeur' },
    {
      type: 'text',
      text: 'Le liquide sous haute pression traverse un étranglement (détendeur ou tube capillaire) : sa pression chute, une partie se vaporise et il devient très froid. Il retourne à l’évaporateur et le cycle recommence.',
    },
    { type: 'illustration', name: 'clim-cycle', props: { highlight: 'valve' }, caption: 'Détendeur : la chute de pression refroidit le fluide' },
    fig('p081_0', 'Figure 4.1 du guide — bilan énergétique d’un climatiseur : Q2 = Q1 + W'),

    { type: 'heading', text: 'Le COP et l’EER : l’efficacité de la machine' },
    {
      type: 'text',
      text: "Un bon climatiseur extrait beaucoup de chaleur pour peu d’électricité. On mesure cela par le coefficient de performance frigorifique (COP), aussi appelé efficacité frigorifique (EF) :",
    },
    { type: 'formula', text: 'COP froid = Puissance frigorifique Pf (W) / Puissance absorbée Pa (W) = Q1 / W' },
    {
      type: 'text',
      text: 'Les fabricants américains utilisent l’EER (Energy Efficiency Ratio), qui mélange deux unités :',
    },
    { type: 'formula', text: 'EER = Puissance frigorifique (BTU/h) / Puissance absorbée (W)   ;   1 W = 3,412 BTU/h  →  EER = 3,412 × COP' },
    {
      type: 'table',
      headers: ['Appareil', 'COP typique', 'EER équivalent'],
      rows: [
        ['Window / split (air)', '2 à 3', '7 à 10'],
        ['Window (minimum conseillé)', '> 2,3', '> 7,8'],
        ['Split (minimum conseillé)', '> 2,6', '> 8,9'],
        ['Armoire à condensation par air', '> 2,5', '> 8,5'],
        ['Armoire à condensation par eau', '> 3,5', '> 11,9'],
      ],
    },
    { type: 'formula', text: 'Exemple : un split de 1 kW de froid avec COP = 2,5 absorbe 1 / 2,5 = 0,4 kW électrique' },
    {
      type: 'note',
      text: 'Le COP n’est pas fixe : il baisse quand il fait plus chaud dehors (le condenseur peine) et quand la consigne intérieure est plus basse (l’évaporateur est plus froid). Environ −3 % de COP par degré de consigne en moins.',
    },

    { type: 'heading', text: 'Pourquoi deux machines de même puissance n’ont pas le même COP' },
    {
      type: 'text',
      text: 'Dans un cycle réel, les pertes se répartissent à peu près ainsi : 45 à 50 % dans le compresseur, 35 à 40 % dans les échangeurs (évaporateur et condenseur), 10 à 15 % dans le détendeur et les annexes. Un appareil efficace a donc un bon compresseur (rotatif, scroll, inverter) et de grands échangeurs.',
    },
    fig('p082_0', 'Figure 4.2 — le cycle dans le diagramme pression-enthalpie : efficacité = II / I'),
    {
      type: 'text',
      text: 'Sur le diagramme, la largeur « I » représente le travail du compresseur et « II » le froid produit. Un grand évaporateur permet au fluide de s’évaporer à une température plus élevée : le compresseur travaille moins pour le même froid.',
    },
    fig('p055_0', 'Tableau 2.1 — rendement de Carnot usuel des différents types de compresseurs'),

    { type: 'heading', text: 'Les unités de puissance frigorifique' },
    {
      type: 'text',
      text: 'Attention aux confusions : un climatiseur a deux puissances. La puissance frigorifique (le froid produit, en kW froid ou kWr) et la puissance électrique absorbée (en kW). Un appareil « 9 000 BTU » produit environ 2,6 kW de froid mais n’en consomme qu’environ 1 kW.',
    },
    {
      type: 'table',
      headers: ['Unité', 'Équivalence'],
      rows: [
        ['1 kW froid (kWr)', '3 412 BTU/h'],
        ['1 CV « commercial »', '≈ 8 000 BTU/h ≈ 2,3 kWr'],
        ['9 000 BTU/h', '≈ 2,6 kWr'],
        ['12 000 BTU/h (1 tonne)', '≈ 3,5 kWr'],
        ['24 000 BTU/h', '≈ 7 kWr'],
      ],
    },
    fig('p069', 'Page 54 du guide — niveau de puissance : 1 kWr = 3 412,14 BTU/h et 1 CV = 8 000 BTU/h'),
    {
      type: 'note',
      text: 'Les climatiseurs individuels (window et split) absorbent 0,75 à 2,2 kW électriques et produisent environ 1,8 à 7 kW de froid. Sur le marché ils sont souvent vendus « en CV » : c’est une indication commerciale, vérifiez toujours la puissance frigorifique en kW sur la fiche technique.',
    },

    { type: 'heading', text: 'Chaleur sensible et chaleur latente' },
    {
      type: 'bullets',
      items: [
        'Chaleur sensible : celle qui fait monter la température (se mesure au thermomètre).',
        'Chaleur latente : celle contenue dans la vapeur d’eau. Pour l’enlever, il faut condenser l’eau sur l’évaporateur.',
        'Le facteur de chaleur sensible (SHR) d’un appareil = part sensible / puissance totale. Il vaut 0,75 à 0,85 en général : plus il est faible, plus l’appareil déshumidifie.',
      ],
    },
    { type: 'note', text: 'En climat humide (Douala, Abidjan), choisissez un appareil capable de traiter la charge latente : sinon la pièce sera fraîche mais moite.' },

    { type: 'heading', text: 'Climatiseur réversible et ventifraîcheur' },
    {
      type: 'text',
      text: "Avec une vanne 4 voies, on inverse le cycle : l’échangeur intérieur devient condenseur et chauffe le local (pompe à chaleur). Utile en zone sahélienne pendant les nuits fraîches, mais rarement nécessaire sous les tropiques.",
    },
    fig('p084_0', 'Figures 4.3 et 4.4 — vanne 4 voies : mode refroidissement et mode chauffage'),
    {
      type: 'text',
      text: "En climat sec, une solution très économique existe : le ventifraîcheur (refroidissement par évaporation d’eau). L’air extérieur traverse un média humide : l’eau s’évapore en absorbant la chaleur, l’air sort plus frais et plus humide, sans compresseur. Il ne fonctionne bien que si l’air est sec (humidité visée 40–50 %) : inutile à Douala, très efficace à Niamey ou Ouagadougou.",
    },
    fig('p085', 'Page 70 — limites du refroidissement par évaporation (enthalpie h ≤ hi − 1,2 kcal/kg)'),
  ],
};
