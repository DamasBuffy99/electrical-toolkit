import { TopicContent } from '../types';

export const svInstallContent: TopicContent = {
  title: 'Protections, pose et réception',
  subtitle: 'Le courant continu ne s’éteint pas comme l’alternatif : un arc en DC peut tenir et brûler. Fanta choisit câbles, fusibles, sectionneurs et parafoudres côté panneaux et côté batterie, règle la mise à la terre de la sortie secourue, puis réceptionne l’installation avec Yao, mesures à l’appui.',
  blocks: [
    { type: 'scene', text: 'Année 2 · Chantier, avec Yao Kouamé et Awa' },
    {
      type: 'objectives',
      items: [
        'Savoir quand des fusibles de chaîne sont nécessaires.',
        'Choisir sectionneur, parafoudre et câbles du côté continu.',
        'Protéger la liaison batterie, la plus dangereuse de l’installation.',
        'Assurer la protection des personnes sur la sortie secourue (schéma TT).',
        'Réceptionner une installation par des mesures (IEC 62446-1).',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '0 fusible', label: 'de chaîne : une seule chaîne par MPPT' },
        { value: '≥ 600 V', label: 'tension du parafoudre DC' },
        { value: '1,5 %', label: 'chute de tension des câbles DC' },
        { value: '200 A', label: 'protection de la liaison batterie' },
      ],
    },

    { type: 'heading', text: '1 · Le côté panneaux' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'wiring' }, caption: 'Le câblage côté continu : panneaux, sectionneur, parafoudre, onduleur' },
    {
      type: 'calc',
      title: 'Faut-il des fusibles de chaîne ?',
      steps: [
        { label: 'Courant inverse maximal dans une chaîne en défaut : celui des autres chaînes du même MPPT', formula: 'I_{inverse} = (N_p − 1) × I_{sc} = (1 − 1) × 14 = 0 A' },
        { label: 'Tenue du module au courant inverse (fiche : fusible série maximal)', formula: 'I_{max,module} = 25 A' },
        { label: 'Règle : fusibles nécessaires si (N_p − 1) × I_{sc} > I_{max,module}', formula: '0 A ≤ 25 A  →  aucun fusible' },
      ],
      result: 'Avec une chaîne par MPPT, pas de fusible de chaîne. Ils deviennent obligatoires à partir de 3 chaînes en parallèle (2 × 14 = 28 A > 25 A)',
    },
    {
      type: 'calc',
      title: 'Câble solaire de 4 mm² (H1Z2Z2-K), 25 m jusqu’à l’onduleur',
      steps: [
        { label: 'Courant admissible du câble en pose sur toiture chaude', formula: 'I_Z ≈ 45 A ≥ 1,25 × I_{sc} = 17,5 A ✓' },
        { label: 'Chute de tension aller-retour au point de puissance maximale', formula: 'ΔU = \\frac{2 × L × I × ρ}{S} = \\frac{2 × 25 × 13,2 × 0,0225}{4} ≈ 3,7 V' },
        { label: 'Rapportée à la tension de la chaîne l’après-midi', formula: '\\frac{3,7}{210} ≈ 1,8 %   ;   le matin \\frac{3,7}{258} ≈ 1,4 %' },
      ],
      result: '4 mm² : environ 1,5 % de chute en moyenne, sous l’objectif de 3 % côté DC',
    },
    {
      type: 'table',
      headers: ['Élément côté DC', 'Choix', 'Pourquoi'],
      rows: [
        ['Câbles', 'H1Z2Z2-K 4 mm², double isolation, résistant aux UV', 'pas de câble électrique ordinaire au soleil'],
        ['Connecteurs', 'MC4 de même marque, sertis à l’outil', 'deux marques différentes = échauffement et arc'],
        ['Sectionneur DC', 'interrupteur-sectionneur 1 000 V DC, 2 pôles par chaîne', 'couper les panneaux pour intervenir'],
        ['Parafoudre DC', 'type 2, U_{cpv} ≥ 1,2 × 306 ≈ 367 V → modèle 600 V', 'surtensions induites par la foudre'],
        ['Masses', 'cadres et rails reliés à la terre (6 mm²)', 'équipotentialité et écoulement des surtensions'],
      ],
    },

    { type: 'heading', text: '2 · La liaison batterie' },
    {
      type: 'calc',
      title: 'Courant et protection de la batterie',
      steps: [
        { label: 'Décharge maximale si l’onduleur fournit toute sa puissance depuis la batterie', formula: 'I = \\frac{8 000}{48 × 0,94} ≈ 177 A' },
        { label: 'Limite réglée dans l’onduleur (5 kW de décharge suffisent à la maison)', formula: 'I_{max} = 100 A ; pointe brève ≈ 150 A' },
        { label: 'Câbles batterie courts (1,5 m), 50 mm² cuivre souple', formula: 'I_Z ≈ 230 A ≥ 200 A ✓' },
        { label: 'Courant de court-circuit d’une batterie LFP (résistance interne ≈ 10 mΩ)', formula: 'I_{cc} ≈ \\frac{51,2}{0,010} ≈ 5 kA' },
      ],
      result: 'Disjoncteur ou fusible DC 200 A, pouvoir de coupure ≥ 5 kA en courant continu, au plus près de la batterie',
    },
    {
      type: 'note',
      text: 'Une batterie de 48 V ne paraît pas dangereuse au toucher, mais un court-circuit franc y fait circuler plusieurs milliers d’ampères : les câbles rougissent en quelques secondes. La protection se place au départ de la batterie, et Yao serre les cosses à la clé dynamométrique : une cosse mal serrée chauffe sous 100 A.',
    },

    { type: 'heading', text: '3 · La sortie secourue et la terre' },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Attention à un point que beaucoup oublient : la villa est en schéma TT, le neutre est mis à la terre chez le distributeur. Pendant un délestage, l’onduleur est déconnecté du réseau ; si son neutre n’est plus relié à la terre, mes différentiels 30 mA ne verront plus rien.',
    },
    {
      type: 'decision',
      title: 'Protection des personnes en mode secours',
      choice: 'Relais de mise à la terre du neutre en mode îloté (fonction intégrée de l’onduleur, activée et testée), tableau secouru avec son propre différentiel 30 mA type A',
      reasons: [
        'Le neutre est relié à la terre de la villa seulement quand l’onduleur est isolé du réseau : le différentiel retrouve un chemin de défaut.',
        'Type A, car l’électronique de l’onduleur et des appareils produit des courants de fuite non sinusoïdaux.',
      ],
      rejected: 'Laisser la sortie secourue « flottante » : au premier défaut d’isolement, une carcasse peut rester sous tension sans que rien ne coupe.',
    },

    { type: 'heading', text: '4 · La liste des équipements' },
    {
      type: 'solarEquipment',
      list: {
        title: 'Système hybride villa Mensah',
        project: 'Villa Mensah',
        rows: [
          { tag: 'PV-1/2', item: 'Modules monocristallins 550 Wc', qty: 12, rating: '6,6 kWc', data: '2 chaînes de 6, pans SE et SO', protection: 'pas de fusible (1 chaîne / MPPT)', kwp: 6.6 },
          { tag: 'OND-1', item: 'Onduleur hybride triphasé 48 V', qty: 1, rating: '8 kW AC', data: '2 MPPT 160–650 V, sortie secourue', protection: 'sectionneur DC intégré + externe', kw: 8 },
          { tag: 'BAT-1', item: 'Batterie LFP 51,2 V 100 Ah (BMS CAN)', qty: 2, rating: '10,24 kWh', data: 'décharge limitée à 100 A', protection: 'disjoncteur DC 200 A, 5 kA', kwh: 10.24 },
          { tag: 'DC-1', item: 'Coffret DC : sectionneur + parafoudre', qty: 1, rating: '1 000 V DC', data: 'parafoudre type 2, Ucpv 600 V', protection: '—' },
          { tag: 'AC-S', item: 'Tableau secouru (circuit prioritaire)', qty: 1, rating: '3 × 16 A', data: 'éclairage, froid, prises, clim ch. 1', protection: 'différentiel 30 mA type A' },
          { tag: 'AC-R', item: 'Liaison réseau ↔ onduleur', qty: 1, rating: '4P 32 A', data: 'depuis le tableau principal', protection: 'disjoncteur 32 A courbe C' },
        ],
      },
    },

    { type: 'heading', text: '5 · La réception' },
    {
      type: 'table',
      headers: ['Essai (IEC 62446-1)', 'Attendu', 'Mesuré', 'Verdict'],
      rows: [
        ['Polarité de chaque chaîne', '+ et − corrects', 'conforme', '✓'],
        ['Voc chaîne 1 (cellules à 45 °C)', '6 × 49,6 × 0,946 ≈ 282 V', '279 V', '✓ (écart 1 %)'],
        ['Isc chaîne 1 (850 W/m²)', '14,0 × 0,85 ≈ 11,9 A', '11,6 A', '✓'],
        ['Isolement des chaînes à 1 000 V', '≥ 1 MΩ', '> 200 MΩ', '✓'],
        ['Continuité des masses', '< 1 Ω', '0,3 Ω', '✓'],
        ['Bascule sur coupure réseau', 'charges secourues maintenues', 'bascule en 10 ms, aucune coupure visible', '✓'],
        ['Test du différentiel en mode secours', 'déclenchement à 30 mA', '22 mA, 18 ms', '✓'],
      ],
    },
    {
      type: 'note',
      text: 'La Voc attendue se corrige toujours à la température des cellules au moment de la mesure : à 45 °C, la tension est environ 5 % sous la valeur de la fiche. Un écart de plus de 5 % entre deux chaînes identiques signale un module défectueux ou un connecteur mal serti.',
    },
    { type: 'fiche', id: 'pv-offgrid-example-1', why: 'Un système complet calculé de bout en bout.' },

    { type: 'heading', text: '6 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Installation et réception',
      rows: [
        { norm: 'IEC 60364-7-712', rule: 'Règles d’installation des systèmes PV : protections, sectionnement, câblage DC.', result: 'base internationale' },
        { norm: 'NF C 15-712-1 / -2', rule: 'Guides français des installations PV raccordées et avec stockage.', result: 'pratique francophone' },
        { norm: 'NEC 690 / 706', rule: 'Systèmes PV et stockage aux États-Unis ; arrêt rapide en toiture (690.12).', result: 'arrêt rapide exigé aux USA' },
        { norm: 'IEC 62446-1', rule: 'Essais de mise en service et documentation des systèmes PV raccordés.', result: 'PV de réception' },
      ],
    },
    {
      type: 'regional',
      text: 'Les connecteurs MC4 contrefaits et les câbles « solaires » de mauvaise qualité sont la première cause d’incendie des petites installations dans la région. Fanta impose une seule marque de connecteurs, la pince à sertir adaptée, et une vérification à la caméra thermique au premier mois de fonctionnement. Les Mensah reçoivent l’accès à l’application de supervision : production, état de la batterie et alertes.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Fusibles de chaîne seulement si (N_p − 1) × I_sc dépasse la tenue du module au courant inverse.',
        'Câbles solaires double isolation, connecteurs d’une seule marque, sectionneur et parafoudre DC dimensionnés sur la Voc maximale.',
        'La liaison batterie, à fort courant de court-circuit, est protégée au plus près de la batterie.',
        'En mode secours, le neutre doit être remis à la terre pour que les différentiels fonctionnent.',
        'La réception se prouve par des mesures : polarité, Voc, Isc, isolement, bascule, différentiel.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un champ comporte 4 chaînes en parallèle sur une même entrée, modules à I_sc = 14 A et fusible série maximal 25 A. Faut-il des fusibles ? De quel calibre ?',
      solution: ['Courant inverse : (4 − 1) × 14 = 42 A > 25 A : fusibles obligatoires sur chaque chaîne.', 'Calibre entre 1,5 × I_sc = 21 A et 2,4 × I_sc ≈ 34 A, et ≤ 25 A : fusible gPV de 25 A.'],
    },
    {
      type: 'exercise',
      question: 'À la réception, la chaîne 2 affiche 262 V à vide pour 279 V sur la chaîne 1, dans les mêmes conditions. Que suspectez-vous ?',
      solution: ['Écart de 17 V, environ un tiers de module (≈ 16 V par tiers de 49,6 V).', 'Une diode de dérivation en court-circuit dans un module : un tiers du module est contourné. On mesure module par module.'],
    },
  ],
};
