import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const villaDevicesContent: TopicContent = {
  title: 'Choisir les appareils de protection',
  subtitle: 'Moussa arrive avec un devis : des disjoncteurs « équivalents », moins chers. Awa reprend chaque appareil, lit son marquage et explique, abaques à l’appui, pourquoi une courbe, un pouvoir de coupure ou un type de différentiel ne se choisissent pas au hasard.',
  blocks: [
    { type: 'scene', text: 'Semaine 4 · Revue du devis, avec Moussa et Koffi' },
    {
      type: 'objectives',
      items: [
        'Comprendre ce qu’il y a dans un disjoncteur : déclencheur thermique et magnétique.',
        'Choisir la courbe (B, C, D) à l’aide de l’abaque et la vérifier par le calcul.',
        'Choisir le pouvoir de coupure (I_{cn}) à partir du courant de court-circuit.',
        'Choisir le type et le calibre des différentiels, le disjoncteur de tête et le parafoudre.',
        'Situer les familles MCB, MCCB et ACB et comparer les règles NF C 15-100, IEC, BS 7671 et NEC.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: 'C', label: 'courbe retenue, pompe comprise' },
        { value: '6 kA', label: 'pouvoir de coupure des disjoncteurs' },
        { value: '4 × 40 A', label: 'interrupteurs différentiels 30 mA, 4P' },
        { value: '500 mA S', label: 'disjoncteur de branchement sélectif' },
        { value: 'Type 2', label: 'parafoudre, U_p ≤ 1,5 kV' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Moussa Keïta (chef de chantier)',
      role: 'team',
      text: 'Madame Diallo, mon fournisseur propose des disjoncteurs 16 A à moitié prix. C’est le même calibre, ça fait le même travail, non ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Le calibre n’est qu’un des chiffres écrits dessus. Il y a aussi la courbe, le pouvoir de coupure, la norme, le nombre de pôles. Deux disjoncteurs « 16 A » peuvent se comporter très différemment le jour d’un court-circuit. Regardons-les ensemble.',
    },

    { type: 'heading', text: '1 · Ce qu’il y a dans un disjoncteur modulaire (MCB)' },
    {
      type: 'text',
      text: 'Un disjoncteur modulaire (MCB, « miniature circuit breaker », norme IEC 60898-1) contient deux déclencheurs. Le déclencheur thermique est un bilame qui chauffe avec le courant : il coupe une surcharge d’autant plus vite qu’elle est forte (de quelques minutes à quelques secondes). Le déclencheur magnétique est une bobine qui attire un noyau : au-delà d’un seuil, il coupe en moins de 10 ms. C’est lui qui traite les courts-circuits.',
    },
    { type: 'image', source: SLIDES['panel-17'], caption: 'Thermique (surcharge, temps long) puis magnétique (court-circuit, instantané) ; I_{cu} est la limite de coupure', focus: { x: 0.25, y: 0.18, w: 0.5, h: 0.55 } },
    {
      type: 'table',
      headers: ['Grandeur', 'Signification', 'Ce qu’on vérifie'],
      rows: [
        ['I_n (calibre)', 'courant permanent sans déclencher', 'I_B ≤ I_n ≤ I_Z'],
        ['Courbe B, C, D', 'seuil du magnétique, en multiple de I_n', 'pas de déclenchement au démarrage, mais coupure en bout de ligne'],
        ['I_{cn} (pouvoir de coupure)', 'plus fort courant que l’appareil sait couper', 'I_{cn} ≥ I_{cc} au point d’installation'],
        ['Pôles', '1P, 1P+N, 2P, 3P, 4P', 'couper la phase, et le neutre quand c’est exigé'],
        ['Norme', 'IEC 60898-1 (domestique) ou IEC 60947-2 (industriel)', 'marquage lisible, organisme de certification'],
      ],
    },
    { type: 'image', source: SLIDES['cond-29'], caption: 'Lire le marquage : « C32 » = courbe C, calibre 32 A ; ici 1 pôle et I_{cn} = 6 kA (souvent écrit « 6000 » dans un rectangle)' },

    { type: 'heading', text: '2 · La courbe : l’abaque B, C, D' },
    {
      type: 'text',
      text: 'La courbe fixe le seuil du déclencheur magnétique. Sur l’abaque, l’axe horizontal donne le courant en multiples du calibre, l’axe vertical le temps de coupure. La zone colorée est la bande où le magnétique déclenche : quelque part entre la borne basse (il ne doit jamais couper en dessous) et la borne haute (il doit toujours couper au-dessus).',
    },
    { type: 'image', source: SLIDES['panel-24'], caption: 'Abaque des zones de déclenchement : B = 3 à 5 I_n, C = 5 à 10 I_n, D = 10 à 20 I_n', focus: { x: 0.5, y: 0.25, w: 0.47, h: 0.58 } },
    { type: 'image', source: SLIDES['cond-28'], caption: 'Les cinq courbes côte à côte : Z (électronique), B, C, K (moteurs, ~8 à 14 I_n), D' },
    {
      type: 'table',
      headers: ['Courbe', 'Seuil magnétique', 'Usage typique'],
      rows: [
        ['Z', '2 à 3 I_n', 'circuits électroniques sensibles, semi-conducteurs'],
        ['B', '3 à 5 I_n', 'éclairage, résistances, câbles très longs'],
        ['C', '5 à 10 I_n', 'usage général domestique et tertiaire'],
        ['K', '8 à 14 I_n', 'moteurs, transformateurs (gamme industrielle)'],
        ['D', '10 à 20 I_n', 'forts appels : transformateurs BT/BT, gros moteurs, soudage'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Alors pour la pompe, qui démarre fort, il faut une courbe D ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'C’est le réflexe, mais vérifions. Le disjoncteur doit laisser passer le démarrage, et couper un court-circuit qui se produirait tout au bout des 80 m de câble, là où le courant est le plus faible. Une courbe trop haute ne verrait plus ce défaut.',
    },
    {
      type: 'calc',
      title: 'Courbe du disjoncteur de la pompe (16 A, câble 4 mm², 80 m)',
      steps: [
        { label: 'Courant de démarrage (environ 6 fois le courant nominal)', formula: 'I_d ≈ 6 × I_n = 6 × 7,6 ≈ 46 A' },
        { label: 'Borne basse du magnétique : il ne doit pas couper au démarrage', formula: 'I_{m,B} = 3 × 16 = 48 A   ;   I_{m,C} = 5 × 16 = 80 A   ;   I_{m,D} = 10 × 16 = 160 A' },
        { label: 'Court-circuit minimal au bout du câble (phase-neutre, câble chaud)', formula: 'I_{cc,min} = \\frac{0,8 × U_0}{ρ × \\frac{2L}{S}} = \\frac{0,8 × 230}{0,0225 × \\frac{2 × 80}{4}} ≈ 204 A' },
        { label: 'Borne haute du magnétique : il doit toujours couper ce défaut', formula: 'I_{m,B} = 5 × 16 = 80 A ✓   ;   I_{m,C} = 10 × 16 = 160 A ✓   ;   I_{m,D} = 20 × 16 = 320 A ✗' },
      ],
      result: 'Courbe C : 46 A < 80 A (pas de déclenchement intempestif) et 160 A < 204 A (défaut éliminé)',
    },
    {
      type: 'decision',
      title: 'Courbe des disjoncteurs',
      choice: 'Courbe C pour tous les circuits de la villa, y compris la pompe',
      reasons: [
        'La courbe B est trop juste : 46 A au démarrage frôle son seuil bas de 48 A, la pompe ferait sauter le disjoncteur par temps chaud.',
        'La courbe C laisse passer le démarrage et coupe encore un court-circuit au fond du jardin.',
        'Une seule courbe dans le tableau : moins d’erreurs au remplacement.',
      ],
      rejected: 'Courbe D : 320 A > 204 A, un court-circuit au bout du câble serait coupé par le thermique en plusieurs secondes, voire pas du tout. C’est le piège classique des « grosses courbes ».',
    },
    {
      type: 'note',
      text: 'Le calcul de I_{cc,min} donne aussi une longueur maximale protégée : pour un C16 en 4 mm², L_{max} = \\frac{0,8 × 230 × 4}{0,0225 × 2 × 160} ≈ 102 m. Au-delà, il faudrait un câble plus gros ou une courbe B. Les fabricants publient ces longueurs maximales dans des tableaux tout faits.',
    },
    { type: 'fiche', id: 'circuit-breaker', why: 'Courbes, calibres normalisés, marquage et choix détaillé du disjoncteur.' },

    { type: 'heading', text: '3 · Le pouvoir de coupure : combien de kA ?' },
    {
      type: 'text',
      text: 'Le pouvoir de coupure I_{cn} est le courant de court-circuit maximal que le disjoncteur sait interrompre sans exploser ni se souder. Il doit être au moins égal au courant de court-circuit présumé à l’endroit où il est installé. Celui-ci dépend surtout du transformateur du quartier et de la longueur de câble qui l’en sépare.',
    },
    {
      type: 'calc',
      title: 'Court-circuit au tableau de la villa',
      steps: [
        { label: 'Transformateur du quartier : 160 kVA, u_k = 4 %', formula: 'I_n = \\frac{160 000}{\\sqrt{3} × 400} ≈ 231 A' },
        { label: 'Court-circuit aux bornes du transformateur (cas le plus défavorable)', formula: 'I_{cc} = \\frac{I_n}{u_k} = \\frac{231}{0,04} ≈ 5,8 kA' },
        { label: 'Au tableau, la ligne et le branchement le réduisent', formula: 'I_{cc,tableau} ≈ 3 à 4 kA  (selon la distance au poste)' },
      ],
      result: 'I_{cn} = 6 kA couvre même un tableau collé au poste',
    },
    {
      type: 'table',
      headers: ['I_{cn} (IEC 60898-1)', 'Où on le rencontre'],
      rows: [
        ['3 kA', 'minimum admis en logement derrière le disjoncteur du distributeur (NF C 15-100)'],
        ['4,5 kA', 'gamme domestique courante'],
        ['6 kA', 'domestique haut de gamme, petit tertiaire'],
        ['10 kA', 'tertiaire, tableaux proches d’un transformateur'],
        ['15 à 25 kA', 'gamme industrielle (IEC 60947-2), en aval d’un TGBT'],
      ],
    },
    {
      type: 'decision',
      title: 'Pouvoir de coupure',
      choice: 'Disjoncteurs modulaires 6 kA, certifiés IEC 60898-1',
      reasons: [
        'Le poste de quartier est à 60 m : on peut approcher 4 kA, et le réseau sera renforcé un jour.',
        'L’écart de prix entre 4,5 et 6 kA est faible ; un appareil sous-dimensionné peut éclater au premier court-circuit.',
      ],
      rejected: 'Les disjoncteurs « à moitié prix » de Moussa : aucun I_{cn} lisible, pas de référence de norme. Refusés.',
    },

    { type: 'heading', text: '4 · Les différentiels : type, sensibilité, calibre' },
    {
      type: 'text',
      text: 'L’interrupteur différentiel (RCCB) compare le courant qui part par la phase et celui qui revient par le neutre. S’il manque quelque chose, c’est que ce courant fuit vers la terre, peut-être à travers quelqu’un : au-delà de la sensibilité I_{Δn}, il coupe. Il ne protège pas contre les surcharges : c’est le rôle des disjoncteurs placés en dessous.',
    },
    { type: 'image', source: SLIDES['rccb-6'], caption: 'Principe : un tore mesure la différence entre phase et neutre ; la touche T simule une fuite' },
    { type: 'image', source: SLIDES['rccb-7'], caption: 'Marquage d’un interrupteur différentiel : I_n 40 A, I_{Δn} 30 mA, I_{nc} 10 kA, type AC' },
    { type: 'image', source: SLIDES['rccb-8'], caption: 'Types AC, A et B : quelles formes de courant de fuite ils détectent' },
    {
      type: 'table',
      headers: ['Type', 'Détecte', 'Pour quels circuits'],
      rows: [
        ['AC', 'fuites alternatives sinusoïdales', 'éclairage, prises, chauffe-eau à résistance'],
        ['A', 'AC + continu pulsé', 'lave-linge, plaque de cuisson, four, appareils à électronique'],
        ['F', 'A + fréquences mixtes', 'clims et pompes à variateur monophasé (inverter)'],
        ['B', 'F + continu lisse', 'variateurs triphasés, bornes de recharge, onduleurs PV sans isolement'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'En relisant la fiche technique de vos clims, je vois qu’elles sont « inverter ». Leur électronique peut produire des fuites que le type AC ne voit pas, et le fabricant demande un type A au minimum. Je passe donc ID 4 en type A : c’est l’indice B du schéma du tableau.',
    },
    {
      type: 'calc',
      title: 'Calibre de l’interrupteur différentiel ID 2 (four, lave-linge, prises cuisine)',
      steps: [
        { label: 'Il ne protège pas contre les surcharges : il doit supporter le courant réel qui le traverse', formula: 'I_{n,ID} ≥ courant maximal sur la phase la plus chargée' },
        { label: 'L1 : four ; L2 : lave-linge + prises cuisine', formula: 'I_{L1} = \\frac{2 500}{230} ≈ 10,9 A   ;   I_{L2} = \\frac{2 000 + 1 300}{230} ≈ 14,3 A' },
        { label: 'Avec la plaque future (7 kW répartis sur L1 et L2)', formula: 'I ≈ \\frac{3 500}{230} + 14,3 ≈ 29,5 A' },
      ],
      result: 'ID 40 A, 30 mA, type A, tétrapolaire (ses circuits sont sur deux phases)',
    },
    {
      type: 'decision',
      title: 'Différentiels',
      choice: '4 interrupteurs différentiels 40 A 30 mA 4P : ID 1 et ID 3 type AC, ID 2 et ID 4 type A',
      reasons: [
        'Le 30 mA protège les personnes ; c’est la sensibilité exigée pour tous les circuits en NF C 15-100.',
        'Type A là où il y a de l’électronique de puissance (four, lave-linge, clims inverter).',
        'Un interrupteur différentiel par groupe : bon compromis entre continuité de service et coût.',
      ],
      rejected: 'Un disjoncteur différentiel (RCBO) par circuit : la meilleure continuité de service, mais trois fois plus cher et plus large. On l’utilisera à la clinique.',
    },

    { type: 'heading', text: '5 · L’appareil de tête et le parafoudre' },
    {
      type: 'text',
      text: 'En tête de l’installation, le distributeur pose un disjoncteur de branchement tétrapolaire, différentiel 500 mA et sélectif (type S, légèrement retardé). Réglé selon l’abonnement, il limite la puissance et protège la terre (on l’a vu à l’étape précédente : R_A ≤ 100 Ω). Retardé, il laisse les 30 mA du tableau couper les premiers : un défaut sur la pompe ne prive pas toute la maison de courant. C’est la sélectivité différentielle.',
    },
    {
      type: 'calc',
      title: 'Sélectivité entre le 500 mA (S) et les 30 mA',
      steps: [
        { label: 'Sensibilités : le seuil amont doit être au moins le double de l’aval', formula: '\\frac{I_{Δn,amont}}{I_{Δn,aval}} = \\frac{500}{30} ≈ 17 ≥ 2 ✓' },
        { label: 'Temps : le type S ne coupe jamais en moins de 40 ms, le 30 mA instantané coupe en moins de 40 ms à 5 I_{Δn}', formula: 't_{S} ≥ 40 ms ≥ t_{30 mA}' },
      ],
      result: 'Sélectivité totale : seul le différentiel du circuit en défaut déclenche',
    },
    {
      type: 'text',
      text: 'Le parafoudre (SPD) dérive vers la terre les surtensions d’origine atmosphérique avant qu’elles n’atteignent les appareils. En maison, on pose un type 2 en tête de tableau, avec son propre dispositif de déconnexion.',
    },
    {
      type: 'table',
      headers: ['Caractéristique', 'Valeur retenue', 'Pourquoi'],
      rows: [
        ['Type', 'type 2 (essai 8/20 µs)', 'surtensions induites ; pas de paratonnerre sur la villa'],
        ['I_n / I_{max}', '5 kA / 40 kA', 'zone à forte activité orageuse'],
        ['U_p (niveau de protection)', '≤ 1,5 kV', 'inférieur à la tenue des appareils électroniques'],
        ['Déconnecteur', 'disjoncteur C20 dédié', 'isole le parafoudre en fin de vie sans couper la maison'],
        ['Câblage', 'longueur totale ≤ 50 cm', 'chaque mètre de fil ajoute environ 1 kV à U_p'],
      ],
    },

    { type: 'heading', text: '6 · Ailleurs dans le projet : MCB, MCCB, ACB' },
    {
      type: 'text',
      text: 'La villa n’a besoin que de disjoncteurs modulaires. Mais dès que le courant augmente, on change de famille. Cet abaque des calibres sert de premier tri ; le choix final dépend aussi du pouvoir de coupure, des réglages et de la sélectivité.',
    },
    { type: 'image', source: require('../../../assets/reference/circuit_breaker_ratings_ranges.png'), caption: 'Plages de calibres : MCB jusqu’à 125 A, MCCB de 16 à 1 600 A environ, ACB de 630 à 6 300 A' },
    {
      type: 'table',
      headers: ['Famille', 'Calibres', 'Pouvoir de coupure', 'Réglages', 'Dans ce cours'],
      rows: [
        ['MCB (modulaire)', '0,5 à 125 A', '3 à 25 kA', 'aucun (courbe fixe)', 'villa, logements, circuits terminaux'],
        ['MCCB (boîtier moulé)', '16 à 1 600 A', '25 à 150 kA', 'I_r, I_m, parfois électronique LSI', 'colonnes de l’immeuble, départs de l’usine'],
        ['ACB (disjoncteur ouvert)', '630 à 6 300 A', '50 à 150 kA', 'LSI(G) électronique complet', 'tête du TGBT de l’usine et de la clinique'],
      ],
    },

    { type: 'heading', text: '7 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Protéger un circuit de prises en 2,5 mm²',
      rows: [
        { norm: 'NF C 15-100', rule: 'Circuit de 12 prises au plus en 2,5 mm², protégé à 20 A ; 30 mA sur tous les circuits.', result: 'C20 + différentiel 30 mA' },
        { norm: 'IEC 60364-4-43', rule: 'I_B ≤ I_n ≤ I_Z et I_2 ≤ 1,45 I_Z ; 2,5 mm² encastré, I_Z ≈ 24 A.', result: '20 A' },
        { norm: 'BS 7671', rule: 'Circuit en boucle (« ring final ») en 2,5 mm², pour 100 m² au plus.', result: '32 A en boucle, RCBO 30 mA' },
        { norm: 'NEC (USA, 120 V)', rule: 'Câble 12 AWG (3,3 mm²) sur 20 A ; GFCI en cuisine, salle de bains et extérieur, AFCI dans les pièces de vie.', result: '20 A + GFCI / AFCI' },
      ],
    },
    {
      type: 'norms',
      title: 'Où faut-il une protection différentielle haute sensibilité ?',
      rows: [
        { norm: 'NF C 15-100', rule: 'Tous les circuits de l’habitation ; type A imposé pour certains appareils (lave-linge, plaque, borne de recharge).', result: '100 % des circuits en 30 mA' },
        { norm: 'IEC 60364-4-41', rule: 'Prises jusqu’à 32 A et matériel mobile extérieur ; salles d’eau (partie 7-701).', result: '30 mA sur les prises' },
        { norm: 'BS 7671', rule: 'Prises jusqu’à 32 A, câbles encastrés à moins de 50 mm, éclairage des logements.', result: '30 mA presque partout' },
        { norm: 'NEC 210.8', rule: 'GFCI (≈ 5 mA) en salles de bains, cuisines, garages, extérieur, buanderie.', result: '5 mA aux points humides' },
      ],
    },
    {
      type: 'regional',
      text: 'Sur les marchés, on trouve des disjoncteurs contrefaits : poids anormalement léger, marquage flou, absence de I_{cn} ou de référence de norme. Achetez chez un distributeur agréé et exigez la fiche technique. Autre point propre aux pays chauds : un MCB est étalonné à 30 °C (IEC 60898-1). Dans un coffret en plein soleil à 45 °C, il déclenche vers 0,9 I_n ; Awa place donc le tableau à l’intérieur, dans le garage ventilé, et laisse de la marge sur les circuits chargés en continu (clims).',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Un disjoncteur se choisit par cinq chiffres : calibre, courbe, pouvoir de coupure, nombre de pôles, norme.',
        'La courbe doit laisser passer les démarrages et couper le court-circuit minimal en bout de câble : on vérifie les deux bornes de l’abaque.',
        'I_{cn} ≥ I_{cc} présumé au point d’installation ; en logement, 4,5 ou 6 kA.',
        'Différentiel : 30 mA pour les personnes, type A ou F dès qu’il y a de l’électronique, calibre ≥ courant réel traversant.',
        'Le disjoncteur de branchement 500 mA est retardé (S) pour rester sélectif avec les 30 mA.',
        'MCB jusqu’à 125 A, MCCB jusqu’à environ 1 600 A, ACB au-delà de 630 A.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un circuit d’éclairage extérieur C10 en 1,5 mm² mesure 60 m. Le court-circuit minimal en bout de ligne est-il coupé par le magnétique ?',
      solution: [
        'I_{cc,min} = 0,8 × 230 / (0,0225 × 2 × 60 / 1,5) = 184 / 1,8 ≈ 102 A.',
        'Courbe C : borne haute 10 × 10 = 100 A < 102 A : c’est juste, sans marge.',
        'Mieux vaut une courbe B (5 × 10 = 50 A) ou un câble de 2,5 mm² (I_{cc,min} ≈ 170 A).',
      ],
    },
    {
      type: 'exercise',
      question: 'Le voisin a un tableau à 5 m d’un transformateur de 250 kVA (u_k = 4 %). Ses disjoncteurs de 4,5 kA conviennent-ils ?',
      solution: [
        'I_n = 250 000 / (√3 × 400) ≈ 361 A ; I_{cc} ≈ 361 / 0,04 ≈ 9 kA aux bornes du transformateur.',
        'À 5 m, le câble réduit à peine ce courant : 4,5 kA est insuffisant. Il faut des disjoncteurs de 10 kA, ou un appareil de tête limiteur avec une association (filiation) garantie par le fabricant.',
      ],
    },
    {
      type: 'exercise',
      question: 'Pourquoi un interrupteur différentiel 30 mA type AC peut-il ne pas déclencher sur un défaut de lave-linge ?',
      solution: [
        'L’électronique du moteur redresse le courant : la fuite contient une composante continue pulsée que le tore d’un type AC détecte mal, voire sature.',
        'Le type A est conçu pour ces formes d’onde ; c’est pourquoi la norme l’impose pour le lave-linge et la plaque.',
      ],
    },
  ],
};
