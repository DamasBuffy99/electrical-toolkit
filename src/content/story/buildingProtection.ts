import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const buildingProtectionContent: TopicContent = {
  title: 'Les disjoncteurs de l’immeuble : MCCB, réglages, sélectivité',
  subtitle: 'Au TGBT, les calibres dépassent ce que savent faire les disjoncteurs modulaires. Awa passe aux disjoncteurs à boîtier moulé, règle leurs déclencheurs et vérifie qu’un défaut dans un appartement ne plonge pas tout l’immeuble dans le noir.',
  blocks: [
    { type: 'scene', text: 'Mois 5 · Bureau d’études, note de calcul des protections' },
    {
      type: 'objectives',
      items: [
        'Passer du MCB au MCCB : quand et pourquoi.',
        'Lire un déclencheur réglable (I_r, I_m) et un déclencheur électronique LSI.',
        'Distinguer I_{cu}, I_{cs} et calibre de boîtier (AF) / réglage (AT).',
        'Vérifier la sélectivité entre le TGBT, la colonne et les logements.',
        'Construire le tableau de répartition triphasé du TD-SG.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '250 A', label: 'MCCB général, déclencheur LSI' },
        { value: '160 → 128 A', label: 'colonne : boîtier 160 A réglé à 0,8' },
        { value: '10 kA', label: 'pouvoir de coupure exigé au TGBT' },
        { value: '22 kVA', label: 'demande du TD-SG' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Didier Kouassi (plans d’exécution)',
      role: 'team',
      text: 'Pour le TGBT, je peux dessiner des disjoncteurs modulaires partout ? Le tableautier en a en stock, et c’est moins cher.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Pas pour le départ général ni pour la colonne. Au-delà de 125 A, il n’existe plus de modulaire. Et même en dessous, je veux pouvoir régler les seuils pour que les disjoncteurs se « parlent » : c’est la sélectivité. Il nous faut des disjoncteurs à boîtier moulé, des MCCB.',
    },

    { type: 'heading', text: '1 · Quelle famille pour quel calibre ?' },
    { type: 'image', source: require('../../../assets/reference/circuit_breaker_ratings_ranges.png'), caption: 'Premier tri par le calibre : le TGBT de 250 A est en zone MCCB' },
    {
      type: 'table',
      headers: ['Départ', 'Courant d’emploi I_B', 'Famille retenue', 'Pourquoi'],
      rows: [
        ['Arrivée transformateur', '231 A', 'MCCB 250 A, LSI', 'au-delà de 125 A ; réglages fins pour la sélectivité'],
        ['Colonne montante', '110 A', 'MCCB 160 A, thermomagnétique réglable', 'I_r réglable pour coller au câble ; sélectivité avec l’amont'],
        ['TD-SG (services généraux)', '37 A', 'MCCB 63 A réglé à 50 A', 'secouru par le groupe : sélectivité avec l’inverseur'],
        ['Circuits du TD-SG', '1 à 20 A', 'MCB et disjoncteurs-moteurs', 'petits calibres, courbes fixes suffisantes'],
      ],
    },

    { type: 'heading', text: '2 · Régler un MCCB : I_r et I_m' },
    {
      type: 'text',
      text: 'Un MCCB thermomagnétique réglable porte deux molettes. La première règle le seuil thermique I_r en fraction du calibre du boîtier I_n (de 0,7 ou 0,8 à 1). La seconde règle le seuil magnétique I_m en multiple de I_r (de 1,5 ou 5 à 10). On achète un boîtier, on règle le courant dont on a besoin.',
    },
    { type: 'image', source: SLIDES['panel-23'], caption: 'Molettes I_r (× I_n) et I_m (× I_r) d’un MCCB : pour 300 A, on prend un boîtier 400 A et on règle à 0,7 (280 A) ou 0,75', focus: { x: 0.04, y: 0.15, w: 0.92, h: 0.82 } },
    {
      type: 'calc',
      title: 'Réglage du disjoncteur de la colonne montante',
      steps: [
        { label: 'Courant d’emploi (16 logements foisonnés, étape 4)', formula: 'I_B = 110 A' },
        { label: 'Câble 4 × 35 mm² XLPE en gaine chaude (étape 4)', formula: 'I_Z = 150 × 0,87 ≈ 130 A' },
        { label: 'Boîtier 160 A, molette I_r sur 0,8', formula: 'I_r = 0,8 × 160 = 128 A' },
        { label: 'Vérification de la chaîne', formula: 'I_B = 110 A ≤ I_r = 128 A ≤ I_Z = 130 A ✓' },
        { label: 'Molette I_m sur 5 : seuil magnétique', formula: 'I_m = 5 × 128 = 640 A' },
      ],
      result: 'MCCB 160 A, I_r = 128 A, I_m = 640 A',
    },
    {
      type: 'note',
      text: 'Sur les plans américains, on lit « 160 AF / 128 AT » : AF (ampere frame) est la taille du boîtier, AT (ampere trip) le réglage. C’est l’AF qui fixe l’encombrement, le prix et le pouvoir de coupure ; c’est l’AT qui protège le câble.',
    },
    { type: 'image', source: SLIDES['af-13'], caption: 'Les familles de déclencheurs de MCCB : fixe, thermique réglable, thermomagnétique réglable, magnétique seul (moteurs), électronique LSI/LSIG' },

    { type: 'heading', text: '3 · Le déclencheur électronique LSI du départ général' },
    {
      type: 'text',
      text: 'Pour l’arrivée du transformateur, Awa choisit un déclencheur électronique. Au lieu d’un bilame et d’une bobine, des capteurs mesurent le courant et un microprocesseur applique quatre fonctions réglables, désignées par leurs initiales.',
    },
    {
      type: 'table',
      headers: ['Fonction', 'Rôle', 'Réglages', 'Réglage retenu'],
      rows: [
        ['L (long retard)', 'surcharge', 'I_r, t_r', 'I_r = 0,95 × 250 = 237,5 A'],
        ['S (court retard)', 'court-circuit éloigné, avec temporisation', 'I_{sd}, t_{sd}', 'I_{sd} = 8 × I_r ≈ 1,9 kA ; t_{sd} = 0,1 s'],
        ['I (instantané)', 'court-circuit proche', 'I_i', 'I_i = 15 × I_n = 3,75 kA'],
        ['G (terre)', 'défaut à la terre (option LSIG)', 'I_g, t_g', 'non utilisé ici'],
      ],
    },
    {
      type: 'text',
      text: 'La fonction S est la clé de la sélectivité : face à un court-circuit sur la colonne, le général attend 0,1 s, ce qui laisse au disjoncteur de la colonne, qui coupe en moins de 10 ms, le temps de faire son travail.',
    },

    { type: 'heading', text: '4 · I_cu, I_cs : deux pouvoirs de coupure' },
    {
      type: 'text',
      text: 'La norme des disjoncteurs industriels (IEC 60947-2) donne deux valeurs. I_{cu} est le pouvoir ultime : l’appareil coupe une fois, mais peut être hors d’usage ensuite. I_{cs} est le pouvoir de service : il coupe et reste utilisable. I_{cs} s’exprime en pourcentage de I_{cu} : 25, 50, 75 ou 100 %.',
    },
    {
      type: 'decision',
      title: 'Pouvoir de coupure au TGBT',
      choice: 'MCCB à I_{cu} ≥ 10 kA et I_{cs} = 100 % I_{cu}',
      reasons: [
        'Le court-circuit maximal au TGBT est de 5,6 kA (étape 6) : 10 kA laisse de la marge si le distributeur renforce son réseau.',
        'I_{cs} = 100 % : après un court-circuit, le disjoncteur général reste fiable. On ne remplace pas un appareil de tête au milieu de la nuit.',
      ],
      rejected: 'Un appareil à I_{cs} = 25 % I_{cu} : moins cher, mais après un seul défaut franc, il faudrait le changer.',
    },
    {
      type: 'text',
      text: 'Dernière nuance, la filiation (ou « cascading ») : un disjoncteur amont limiteur peut aider un disjoncteur aval à couper un courant supérieur à son propre pouvoir de coupure. Le fabricant publie des tableaux d’association. Awa n’en a pas besoin ici, mais elle le note : c’est ainsi qu’on pose des modulaires 6 kA derrière un TGBT à 15 kA.',
    },

    { type: 'heading', text: '5 · La sélectivité, du TGBT à l’appartement' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Si un locataire fait un court-circuit avec sa bouilloire, est-ce que tout l’immeuble va sauter ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Seul son disjoncteur doit couper. C’est la sélectivité : en cas de défaut, c’est l’appareil situé juste au-dessus qui déclenche, et lui seul. Pour la garantir, je compare les courbes de chaque étage, du plus petit au plus gros.',
    },
    {
      type: 'table',
      headers: ['Niveau', 'Appareil', 'Thermique', 'Magnétique / instantané', 'I_{cc} au point'],
      rows: [
        ['TGBT', 'MCCB 250 A LSI', '237,5 A', 'S : 1,9 kA en 0,1 s ; I : 3,75 kA', '5,6 kA'],
        ['Colonne', 'MCCB 160 A', '128 A', '640 A', '≈ 5 kA en pied'],
        ['Palier', 'disj. de branchement 45 A, 500 mA', '45 A', '≈ 450 A', '4,5 kA'],
        ['Logement', 'MCB C20', '20 A', '100 à 200 A', '≈ 2 kA'],
      ],
    },
    {
      type: 'calc',
      title: 'Règles de sélectivité vérifiées entre deux niveaux',
      steps: [
        { label: 'Thermique : l’amont doit être au moins 1,6 fois l’aval', formula: '\\frac{237,5}{128} ≈ 1,9 ✓   ;   \\frac{128}{45} ≈ 2,8 ✓   ;   \\frac{45}{20} ≈ 2,3 ✓' },
        { label: 'Magnétique : le seuil amont au-dessus du courant de défaut aval', formula: 'Limite de sélectivité = seuil instantané de l’amont' },
        { label: 'Entre colonne et palier : défaut chez un locataire', formula: 'I_{cc} ≈ 2 kA > I_m = 640 A' },
        { label: 'Donc, par les seules courbes', formula: 'sélectivité partielle jusqu’à 640 A seulement' },
      ],
      result: 'Les courbes ne suffisent pas : il faut la table de sélectivité du fabricant',
    },
    {
      type: 'text',
      text: 'Ce résultat surprend souvent. Sur le papier, un court-circuit franc de 2 kA chez un locataire dépasse le seuil magnétique de la colonne : les deux appareils pourraient couper ensemble. En réalité, le petit disjoncteur aval est limiteur : il coupe en quelques millisecondes et laisse passer si peu d’énergie que le gros n’a pas le temps de déclencher. Cette « sélectivité énergétique » ne se lit pas sur les courbes : seul le fabricant la garantit, par des essais, dans ses tables de sélectivité.',
    },
    {
      type: 'decision',
      title: 'Sélectivité',
      choice: 'Appareils d’une même marque, sélectivité totale (« T ») vérifiée dans les tables du fabricant à chaque niveau',
      reasons: [
        'TGBT → colonne : la fonction S temporisée de 0,1 s donne une sélectivité chronométrique jusqu’à 3,75 kA, et la table la confirme jusqu’à 5,6 kA.',
        'Colonne → palier → logement : sélectivité énergétique garantie par la table jusqu’au courant de court-circuit de chaque point.',
        'Marc l’inscrit au cahier des charges : toute variante de marque devra fournir ses propres tables.',
      ],
      rejected: 'Mélanger les marques au gré des prix : la sélectivité entre appareils de fabricants différents n’est garantie par personne.',
    },

    { type: 'heading', text: '6 · Le tableau de répartition du TD-SG' },
    {
      type: 'text',
      text: 'Le tableau des services généraux est triphasé. L’ascenseur et les deux pompes sont des circuits tripolaires : chacun occupe trois rangées, une par phase, et sa puissance se répartit à parts égales sur L1, L2 et L3. Les petits circuits monophasés comblent ensuite les écarts.',
    },
    {
      type: 'panelSchedule',
      panel: {
        name: 'TD-SG Les Palmiers',
        location: 'Local technique, RDC',
        voltage: '230/400 V · 3P+N+PE · 50 Hz',
        panelType: 'Coffret IP43, forme 1',
        mounting: 'Mural',
        scRating: 'Icu 10 kA',
        main: 'Inter-sectionneur 4P 63 A (via inverseur)',
        feeder: '5G16 mm² Cu, MCCB 63 A réglé 50 A au TGBT',
        left: [
          { desc: 'Ascenseur (variateur) 11 kW', kva: 13.6, cb: 'C25 3P', poles: 3, wire: '4G6 mm²' },
          { desc: 'Pompe surpresseur 1 · 4 kW', kva: 5.5, cb: 'DM 6–10 A', poles: 3, wire: '4G2,5 mm²' },
          { desc: 'Éclairage escaliers et halls', kva: 0.55, cb: 'C10', wire: '1,5 mm²' },
          { desc: 'Interphones, contrôle d’accès', kva: 0.3, cb: 'C10', wire: '1,5 mm²' },
          { desc: 'Prises techniques, gaines', kva: 1.0, cb: 'C20', wire: '2,5 mm²' },
        ],
        right: [
          { desc: 'Pompe surpresseur 2 · 4 kW', kva: 5.5, cb: 'DM 6–10 A', poles: 3, wire: '4G2,5 mm²' },
          { desc: 'Éclairage extérieur, parking', kva: 0.6, cb: 'C10', wire: '2,5 mm²' },
          { desc: 'Portail motorisé', kva: 0.5, cb: 'C16', wire: '2,5 mm²' },
          { desc: 'Éclairage de sécurité (BAES)', kva: 0.1, cb: 'C10', wire: '1,5 mm²' },
          { desc: '', spare: true },
          { desc: '', spare: true },
          { desc: '', spare: true },
        ],
        demandKva: 22,
        spareMargin: 15,
      },
    },
    {
      type: 'calc',
      title: 'Du tableau au départ du TGBT',
      steps: [
        { label: 'Puissance installée : les deux pompes figurent, mais une seule tourne', formula: 'S_{inst} ≈ 27,7 kVA   →   S_{demande} ≈ 22 kVA' },
        { label: 'Avec 15 % de réserve', formula: 'S = 22 × 1,15 ≈ 25,3 kVA   ;   I_B = \\frac{25 300}{\\sqrt{3} × 400} ≈ 36,5 A' },
        { label: 'Réglage du départ au TGBT et câble', formula: 'I_B = 36,5 A ≤ I_r = 50 A ≤ I_Z(16 mm²) ≈ 76 A' },
      ],
      result: 'Départ TD-SG : MCCB 63 A réglé à 50 A, câble 5G16 mm²',
    },
    {
      type: 'note',
      text: 'Pourquoi 16 mm² pour 50 A ? Ce câble est aussi celui du groupe électrogène de 40 kVA (58 A) à travers l’inverseur : on le dimensionne pour la source la plus forte qui peut l’alimenter. Et la chute de tension au démarrage de l’ascenseur reste faible.',
    },
    { type: 'fiche', id: 'panel-schedule', why: 'Méthode complète du panel schedule : circuits, phases, demande, réserve.' },

    { type: 'heading', text: '7 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Protection d’un câble contre les surcharges',
      rows: [
        { norm: 'IEC 60364-4-43', rule: 'I_B ≤ I_n ≤ I_Z et I_2 ≤ 1,45 I_Z (I_2 : courant de fonctionnement conventionnel).', result: 'I_r = 128 A pour I_Z = 130 A' },
        { norm: 'NF C 15-100', rule: 'Mêmes règles ; pour un disjoncteur réglable, c’est le courant de réglage I_r qui compte.', result: 'idem' },
        { norm: 'BS 7671', rule: 'I_b ≤ I_n ≤ I_z et I_2 ≤ 1,45 I_z ; tableaux de capacités de l’Appendix 4.', result: 'idem' },
        { norm: 'NEC 240.4(B)', rule: 'Si le calibre normalisé ne correspond pas à l’ampacité, on peut prendre le calibre standard juste au-dessus, jusqu’à 800 A.', result: '130 A d’ampacité → 150 A admis' },
      ],
    },
    {
      type: 'norms',
      title: 'Pouvoir de coupure et sélectivité',
      rows: [
        { norm: 'IEC 60947-2', rule: 'Définit I_{cu}, I_{cs}, I_{cw}, les catégories A (sans retard) et B (avec retard, ACB) et les tables de sélectivité.', result: 'MCCB I_{cs} = 100 %' },
        { norm: 'IEC 60364-5-53', rule: 'Exige la sélectivité quand la continuité de service le demande (sécurité, secours).', result: 'sélectivité totale sur le TD-SG' },
        { norm: 'NEC 700.32 / 701.32', rule: 'Coordination sélective obligatoire pour les circuits de secours (ascenseurs de sécurité, éclairage de sécurité).', result: 'obligatoire en secours' },
        { norm: 'NEC 240.86', rule: 'Les associations en série (« series rating ») ne sont admises que testées et marquées.', result: '= filiation IEC' },
      ],
    },
    {
      type: 'regional',
      text: 'Les tableautiers locaux proposent souvent des MCCB de marques différentes pour l’arrivée et les départs, selon le stock. Awa exige que la note de sélectivité soit refaite pour toute substitution. Autre point fréquent : les molettes I_r sont livrées réglées sur 1. Le jour de la réception, Ndeye Faye vérifiera chaque réglage par rapport à la note de calcul, et Didier les reportera sur le schéma de récolement.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Au-delà de 125 A, ou dès qu’on veut régler les seuils, on passe au MCCB.',
        'On choisit un boîtier (AF), puis on règle I_r (AT) pour qu’il tienne entre I_B et I_Z.',
        'Le déclencheur électronique LSI(G) offre une fonction S temporisée, clé de la sélectivité chronométrique.',
        'I_{cu} : pouvoir ultime ; I_{cs} : pouvoir de service, à préférer à 100 % en tête d’installation.',
        'La sélectivité se vérifie par les rapports de réglages, puis par les tables du fabricant pour les forts courants.',
        'Dans un tableau triphasé, un circuit tripolaire occupe trois rangées et charge les trois phases à égalité.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un départ a un courant d’emploi de 300 A et un câble admettant 340 A. On dispose de boîtiers de 250 A et 400 A, avec une molette I_r de 0,7 à 1 par pas de 0,05. Quel boîtier et quel réglage ?',
      solution: [
        '250 A est trop petit (I_r maxi = 250 A < 300 A). On prend 400 A.',
        '0,75 × 400 = 300 A (juste égal à I_B) ; 0,8 × 400 = 320 A : 300 ≤ 320 ≤ 340 ✓. Réglage 0,8.',
      ],
    },
    {
      type: 'exercise',
      question: 'Un MCCB de tête porte I_{cu} = 36 kA et I_{cs} = 50 %. Peut-il être installé où le court-circuit présumé vaut 25 kA ?',
      solution: [
        'I_{cu} = 36 kA ≥ 25 kA : il coupera le défaut, donc la sécurité est assurée.',
        'Mais I_{cs} = 18 kA < 25 kA : après un tel défaut, il ne sera plus garanti apte au service. En tête d’installation, on préfère un appareil à I_{cs} ≥ 25 kA.',
      ],
    },
    {
      type: 'exercise',
      question: 'Dans le TD-SG, on ajoute une troisième pompe de 4 kW, tripolaire. Que deviennent les colonnes du tableau ?',
      solution: [
        'Elle prend trois rangées (par exemple les trois réserves de droite) : 5,5 / 3 ≈ 1,83 kVA sur chaque phase.',
        'L’équilibre ne change pas, puisque la charge s’ajoute à égalité sur L1, L2 et L3 ; seule la demande augmente, si la pompe peut tourner en même temps que les autres.',
      ],
    },
  ],
};
