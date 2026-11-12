import { TopicContent } from '../types';

export const buildingEarthingContent: TopicContent = {
  title: 'Régime de neutre, terre et foudre',
  subtitle: 'Dans la villa, le distributeur imposait le régime TT. Ici, l’immeuble a son propre transformateur : c’est à Awa de choisir comment relier le neutre et les masses à la terre. Ndeye Faye, du bureau de contrôle, attend une justification écrite, et Fatou s’inquiète des orages.',
  blocks: [
    { type: 'scene', text: 'Mois 5 · Réunion de synthèse avec le bureau de contrôle' },
    {
      type: 'objectives',
      items: [
        'Comparer les schémas de liaison à la terre TT, TN-C, TN-S, TN-C-S et IT.',
        'Vérifier qu’un défaut d’isolement est coupé à temps (boucle de défaut, temps de coupure).',
        'Dimensionner le conducteur de protection (PE) et les liaisons équipotentielles.',
        'Décider d’un paratonnerre et choisir des parafoudres type 1 et type 2 coordonnés.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: 'TN-S', label: 'schéma retenu dans l’immeuble' },
        { value: '0,4 s', label: 'temps de coupure maxi, circuits terminaux' },
        { value: '≈ 500 A', label: 'courant de défaut au moteur de l’ascenseur' },
        { value: '12,5 kA', label: 'I_{imp} par pôle du parafoudre type 1' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ndeye Faye (bureau de contrôle)',
      role: 'team',
      text: 'Votre note de calcul ne précise pas le schéma de liaison à la terre. Sans lui, je ne peux pas valider vos protections contre les contacts indirects.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Vous avez raison, c’est le premier choix à écrire. Comme le poste est privé, le choix nous revient. Je vous propose le TN-S, et je vous montre pourquoi les autres schémas ne conviennent pas ici.',
    },

    { type: 'heading', text: '1 · Cinq façons de relier le neutre et les masses' },
    {
      type: 'text',
      text: 'Deux lettres décrivent un schéma. La première dit comment le neutre du transformateur est relié à la terre : T (directement) ou I (isolé, ou relié par une forte impédance). La seconde dit comment les masses des appareils sont reliées : T (à une prise de terre locale) ou N (au neutre). Pour le TN, une troisième lettre précise si le neutre et le conducteur de protection sont séparés (S) ou confondus en un PEN (C).',
    },
    {
      type: 'table',
      headers: ['Schéma', 'Principe', 'Au premier défaut', 'Où on le trouve'],
      rows: [
        ['TT', 'neutre à la terre, masses à une terre locale', 'courant faible : coupure par différentiel', 'distribution publique (villa)'],
        ['TN-C', 'neutre et PE confondus (PEN)', 'courant fort, coupure par disjoncteur', 'gros câbles ≥ 10 mm² Cu, industrie ancienne'],
        ['TN-S', 'neutre et PE séparés partout', 'courant fort, coupure par disjoncteur', 'bâtiments avec poste privé'],
        ['TN-C-S', 'PEN en amont, séparé en aval', 'idem TN', 'Royaume-Uni (PME), réseaux mixtes'],
        ['IT', 'neutre isolé ou impédant', 'courant quasi nul : on continue, on cherche le défaut', 'blocs opératoires, process continus'],
      ],
    },
    {
      type: 'decision',
      title: 'Schéma de liaison à la terre',
      choice: 'TN-S depuis le transformateur, PE distribué avec chaque circuit',
      reasons: [
        'Le défaut franc devient un court-circuit : les disjoncteurs le coupent vite, sans dépendre de la résistance d’une prise de terre.',
        'Neutre et PE séparés : aucun courant de charge ni harmonique dans le PE, ce qui ménage l’électronique (variateur de l’ascenseur, informatique).',
        'Les différentiels 30 mA restent possibles et obligatoires dans les logements.',
      ],
      rejected: 'TN-C : interdit sous 10 mm² et incompatible avec les différentiels. IT : excellent pour la continuité, mais il exige un contrôleur d’isolement et une équipe qui recherche les défauts ; on le gardera pour les blocs opératoires de la clinique. TT : possible, mais chaque départ devrait être différentiel.',
    },
    { type: 'fiche', id: 'electrical-safety', why: 'Contacts directs et indirects, schémas TT, TN et IT illustrés.' },

    { type: 'heading', text: '2 · Couper à temps : la boucle de défaut' },
    {
      type: 'text',
      text: 'En TN, un défaut entre une phase et une masse crée un courant qui revient par le PE jusqu’au transformateur. Il doit être assez grand pour faire déclencher le magnétique du disjoncteur dans le temps maximal fixé par la norme. Le chemin parcouru s’appelle la boucle de défaut ; plus le câble est long et fin, plus le courant est faible.',
    },
    {
      type: 'table',
      headers: ['Temps de coupure maximal (U_0 = 230 V)', 'TN', 'TT'],
      rows: [
        ['Circuits terminaux ≤ 32 A', '0,4 s', '0,2 s'],
        ['Circuits de distribution et circuits > 32 A', '5 s', '1 s'],
      ],
    },
    {
      type: 'calc',
      title: 'Défaut d’isolement au moteur de l’ascenseur (C25, 4G6 mm², 40 m)',
      steps: [
        { label: 'Résistance phase + PE, câble chaud (ρ = 0,0225 Ω·mm²/m)', formula: 'R = \\frac{ρ × (L_{ph} + L_{PE})}{S} = \\frac{0,0225 × 80}{6} = 0,30 Ω' },
        { label: 'En amont : départ TD-SG (5G16 mm², 15 m), TGBT et transformateur', formula: 'R_{amont} ≈ 0,04 + 0,03 = 0,07 Ω' },
        { label: 'Courant de défaut (0,8 tient compte de la baisse de tension en amont)', formula: 'I_d = \\frac{0,8 × U_0}{Z_s} = \\frac{0,8 × 230}{0,37} ≈ 497 A' },
        { label: 'Seuil magnétique maximal du C25', formula: 'I_a = 10 × 25 = 250 A ≤ 497 A ✓' },
      ],
      result: 'Le défaut est coupé par le magnétique, en moins de 0,1 s (exigence : 0,4 s)',
    },
    {
      type: 'note',
      text: 'La condition générale s’écrit Z_s × I_a ≤ U_0. Si le câble était trop long, le courant de défaut tomberait sous le seuil magnétique : il faudrait alors un câble plus gros, une courbe plus basse, ou un différentiel. C’est la même logique que la longueur maximale protégée de la pompe de la villa.',
    },

    { type: 'heading', text: '3 · Le conducteur de protection et l’équipotentialité' },
    {
      type: 'table',
      headers: ['Section de phase S', 'Section minimale du PE (même métal)'],
      rows: [
        ['S ≤ 16 mm²', 'S'],
        ['16 < S ≤ 35 mm²', '16 mm²'],
        ['S > 35 mm²', 'S / 2'],
      ],
    },
    {
      type: 'calc',
      title: 'PE de la colonne montante',
      steps: [
        { label: 'Phases en 35 mm² : on lit la deuxième ligne du tableau', formula: 'S_{PE} = 16 mm²' },
        { label: 'Vérification par la contrainte thermique (adiabatique), défaut 5 kA coupé en 0,1 s, k = 143', formula: 'S_{PE} ≥ \\frac{I × \\sqrt{t}}{k} = \\frac{5 000 × \\sqrt{0,1}}{143} ≈ 11 mm²' },
      ],
      result: 'Colonne : 4 × 35 mm² + PE 16 mm²',
    },
    {
      type: 'text',
      text: 'Toutes les parties métalliques qui peuvent amener un potentiel (canalisations d’eau, structure métallique, rails et machinerie de l’ascenseur, chemins de câbles) sont reliées à la borne principale de terre du TGBT : c’est la liaison équipotentielle principale. Dans chaque salle d’eau, une liaison supplémentaire relie les masses et les éléments conducteurs proches.',
    },
    {
      type: 'dialogue',
      speaker: 'Rachid Bamba (Électra BTP)',
      role: 'team',
      text: 'La boucle de terre en fond de fouille, on l’a posée au mois 2, comme vous l’aviez exigé : câble cuivre nu de 25 mm² sous le béton de propreté, avec des remontées aux angles. La mesure donne 1,8 Ω.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'C’est le genre de détail qui se décide à la conception et se joue au gros œuvre. Une fois les fondations coulées, il aurait fallu planter des piquets autour du bâtiment, pour un résultat moins bon. Merci à vous.',
    },

    { type: 'heading', text: '4 · La foudre : paratonnerre et parafoudres' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Pendant la saison des pluies, les orages sont violents. Faut-il un paratonnerre sur le toit ?',
    },
    {
      type: 'text',
      text: 'La réponse sort d’une analyse de risque (IEC 62305-2). Elle tient compte de la densité de foudroiement du lieu (N_g, en impacts par km² et par an), de la taille du bâtiment, de son occupation et de ce qu’il contient. En Afrique de l’Ouest, N_g dépasse souvent 10, contre 1 à 3 en Europe de l’Ouest. Pour un R+4 habité, l’analyse conclut à la nécessité d’une protection extérieure de niveau III.',
    },
    {
      type: 'calc',
      title: 'Parafoudre de type 1 au TGBT (niveau de protection III)',
      steps: [
        { label: 'Courant de foudre de référence pour le niveau III', formula: 'I_{foudre} = 100 kA  (onde 10/350 µs)' },
        { label: 'Environ la moitié s’écoule par la prise de terre, le reste par les réseaux entrants', formula: 'I_{réseaux} = 50 % × 100 = 50 kA' },
        { label: 'Réparti sur les quatre conducteurs actifs (3 phases + neutre)', formula: 'I_{imp} = \\frac{50}{4} = 12,5 kA par pôle' },
      ],
      result: 'Parafoudre type 1 au TGBT : I_{imp} ≥ 12,5 kA par pôle, U_p ≤ 2,5 kV',
    },
    {
      type: 'table',
      headers: ['Emplacement', 'Parafoudre', 'Caractéristiques', 'Rôle'],
      rows: [
        ['TGBT', 'type 1 (ou 1+2)', 'I_{imp} 12,5 kA/pôle, U_p ≤ 2,5 kV', 'écouler le courant de foudre direct'],
        ['TD-SG', 'type 2', 'I_n 20 kA, U_p ≤ 1,5 kV', 'abaisser le niveau pour le variateur et l’interphone'],
        ['Tableaux des logements', 'type 2 (conseillé)', 'I_n 5 kA, U_p ≤ 1,5 kV', 'protéger TV, box, clims inverter'],
      ],
    },
    {
      type: 'note',
      text: 'Coordination : entre un type 1 et un type 2, il faut environ 10 m de câble (ou une inductance de découplage), sinon le type 2, plus rapide, prend toute l’énergie et se détruit. Ici, le TD-SG est à 15 m du TGBT : la coordination est naturelle. Et chaque parafoudre a son dispositif de déconnexion, avec des raccordements courts (≤ 50 cm).',
    },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Protection contre les contacts indirects',
      rows: [
        { norm: 'IEC 60364-4-41', rule: 'TN : Z_s × I_a ≤ U_0, coupure en 0,4 s (≤ 32 A) ou 5 s ; TT : R_A × I_{Δn} ≤ 50 V, 0,2 s ou 1 s.', result: 'C25 : 497 A ≥ 250 A ✓' },
        { norm: 'NF C 15-100', rule: 'Mêmes règles ; logements alimentés par le réseau public en TT ; 30 mA sur tous les circuits des logements.', result: 'TN-S possible ici (poste privé)' },
        { norm: 'BS 7671', rule: 'TN-C-S (PME) très répandu ; valeurs maximales de Z_s tabulées pour chaque disjoncteur (ex. C25 : ≈ 0,87 Ω avec 0,95 U_0).', result: '0,37 Ω ≤ 0,87 Ω ✓' },
        { norm: 'NEC 250', rule: 'Neutre relié à la terre une seule fois, à l’entrée de service ; conducteur de terre (EGC) dimensionné par le calibre du disjoncteur (table 250.122).', result: '25 A → 10 AWG (5,3 mm²)' },
      ],
    },
    {
      type: 'norms',
      title: 'Protection contre la foudre',
      rows: [
        { norm: 'IEC 62305', rule: 'Analyse de risque, quatre niveaux de protection (I à IV), méthodes de la sphère fictive, de l’angle et des mailles.', result: 'niveau III, mailles 15 × 15 m' },
        { norm: 'NF C 17-102', rule: 'Paratonnerre à dispositif d’amorçage (PDA) : rayon de protection calculé à partir de l’avance à l’amorçage ΔT.', result: 'très utilisé en Afrique francophone' },
        { norm: 'NFPA 780', rule: 'Pointes (« air terminals ») et conducteurs de descente ; méthode de la sphère de 46 m.', result: 'pratique nord-américaine' },
        { norm: 'IEC 61643-11', rule: 'Essais et classes des parafoudres BT : type 1 (10/350 µs), type 2 (8/20 µs), type 3.', result: 'T1 au TGBT, T2 en aval' },
      ],
    },
    {
      type: 'regional',
      text: 'Les paratonnerres à dispositif d’amorçage (PDA) dominent le marché ouest-africain, souvent vendus avec des rayons de protection optimistes. Exigez la référence NF C 17-102 et le rapport d’essai de l’avance à l’amorçage, et respectez les deux descentes minimum. La prise de terre paratonnerre (≤ 10 Ω, en patte d’oie) doit être reliée à la terre du bâtiment : deux terres séparées créeraient une différence de potentiel dangereuse lors d’un impact. Enfin, la plupart des pannes d’électronique après un orage viennent des lignes entrantes : parafoudres sur l’énergie, mais aussi sur le téléphone et l’antenne.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Deux lettres : neutre (T ou I) et masses (T ou N) ; S ou C pour le PE en TN.',
        'Poste privé : on choisit ; TN-S est la référence des bâtiments, IT celle de la continuité absolue.',
        'En TN, on vérifie la boucle de défaut : Z_s × I_a ≤ U_0, coupure en 0,4 s pour les circuits terminaux.',
        'PE : même section jusqu’à 16 mm², 16 mm² jusqu’à 35, puis la moitié.',
        'La boucle à fond de fouille se pose au gros œuvre, pas après.',
        'Paratonnerre selon l’analyse de risque ; parafoudre type 1 au TGBT, type 2 en aval, à 10 m l’un de l’autre.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Le moteur de l’ascenseur est finalement à 70 m du TD-SG. Le C25 en 6 mm² protège-t-il encore contre les contacts indirects ?',
      solution: [
        'R = 0,0225 × 140 / 6 ≈ 0,53 Ω ; Z_s ≈ 0,53 + 0,07 = 0,60 Ω.',
        'I_d = 0,8 × 230 / 0,60 ≈ 307 A ≥ 250 A : c’est encore bon, mais la marge fond. À 90 m, on passerait sous 250 A.',
      ],
    },
    {
      type: 'exercise',
      question: 'Un départ triphasé est câblé en 4 × 95 mm². Quelle section minimale pour son PE ?',
      solution: ['S > 35 mm² : S_{PE} = S / 2 = 47,5 mm², soit la section normalisée de 50 mm².'],
    },
    {
      type: 'exercise',
      question: 'Pourquoi interdit-on un PEN de 6 mm² en cuivre ?',
      solution: [
        'Le PEN porte à la fois le courant de neutre et la fonction de protection. S’il se coupe, toutes les masses en aval prennent le potentiel de la phase à travers les charges.',
        'La norme impose donc une section minimale (10 mm² Cu, 16 mm² Al) et une pose fixe, pour rendre cette rupture improbable.',
      ],
    },
  ],
};
