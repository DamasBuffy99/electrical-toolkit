import { TopicContent } from '../types';

export const stSafetyContent: TopicContent = {
  title: 'Protections, incendie et cos φ',
  subtitle: 'Neuf cents volts en continu sur un toit d’usine, un groupe électrogène qui reprend la main pendant les coupures, une batterie de condensateurs réglée sans les panneaux : Fanta passe la centrale au crible de la sécurité, puis vérifie ce qu’elle fait au cos φ de Tropica.',
  blocks: [
    { type: 'scene', text: 'Mois 3 · Bureau d’études Lumen, avec Awa Diallo, puis au TGBT de Tropica' },
    {
      type: 'objectives',
      items: [
        'Comprendre le risque d’arc en courant continu et protéger les pompiers.',
        'Choisir les parafoudres et la liaison équipotentielle d’un champ en toiture.',
        'Coupler une centrale PV avec un groupe électrogène sans le faire tourner à l’envers.',
        'Prévoir l’effet de la production PV sur le cos φ et régler la batterie de condensateurs.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '910 V DC', label: 'tension à vide du champ, tant qu’il y a du soleil' },
        { value: '60 kW', label: 'charge minimale à garder sur le groupe de 250 kVA' },
        { value: '0,82 → 0,95', label: 'cos φ à l’arrivée, avant et après correction du réglage' },
        { value: '2 × 63 A', label: 'départs AC des onduleurs' },
      ],
    },

    { type: 'heading', text: '1 · Le feu et le courant continu' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'wiring' }, caption: 'Côté continu, ni l’onduleur ni le disjoncteur ne coupent la tension des modules : seul le soleil la fixe' },
    {
      type: 'text',
      text: 'Un arc en courant alternatif s’éteint de lui-même cent fois par seconde, au passage du courant par zéro. En continu, rien ne l’éteint : un connecteur mal serti ou deux connecteurs de marques différentes peuvent entretenir un arc à plus de 3 000 °C pendant des heures. Et même onduleurs arrêtés, les chaînes restent sous 600 à 900 V dès que le jour se lève.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Si un pompier entre dans l’atelier avec sa lance, il doit être sûr qu’aucun câble à 900 V ne court au-dessus de sa tête. Qu’est-ce qu’on lui garantit ?',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Que le courant continu ne rentre jamais dans le bâtiment. Les onduleurs sont posés sur le toit, à côté des champs, et seuls les câbles alternatifs descendent vers le TGBT. Un bouton « coupure pompiers » au pied du bâtiment ouvre le disjoncteur de la centrale : à partir de là, plus rien n’est sous tension à l’intérieur.',
    },
    {
      type: 'decision',
      title: 'Sécurité incendie',
      choice: 'Onduleurs en toiture à côté des champs, courant continu entièrement à l’extérieur, coupure pompiers au sol, signalétique à l’entrée et au TGBT',
      reasons: [
        'Aucun câble DC dans le volume du bâtiment : rien à couper à l’intérieur.',
        'Toiture en bac acier sur charpente métallique : support incombustible.',
        'Les câbles de chaîne restent courts, sans boîte de jonction intermédiaire.',
      ],
      rejected: 'Optimiseurs sous chaque module (arrêt rapide au niveau module) : exigés aux États-Unis, mais 180 boîtiers et 360 connecteurs de plus sur un toit brûlant, pour un risque déjà traité. Retenus seulement si l’assureur l’exige.',
    },
    {
      type: 'note',
      text: 'Si la toiture avait été en panneaux sandwich à âme en mousse polyuréthane, la question aurait été tout autre : l’assureur aurait probablement refusé les modules, ou exigé des panneaux à âme en laine de roche. Toujours identifier la nature du toit avant de proposer une centrale.',
    },

    { type: 'heading', text: '2 · Foudre, parafoudres et isolement' },
    {
      type: 'bullets',
      items: [
        'Pas de paratonnerre sur l’usine, et l’analyse de risque IEC 62305-2 n’en impose pas : parafoudres de type 2 suffisent.',
        'Parafoudre DC de type 2 sur chaque entrée MPPT (intégré aux onduleurs), parafoudre AC de type 2 au tableau de la centrale, type 1 + 2 existant au TGBT.',
        'Rails et cadres des modules reliés entre eux et à la terre par un conducteur de 6 mm² (16 mm² si un paratonnerre est un jour installé).',
        'Avant chaque démarrage, l’onduleur mesure la résistance d’isolement du champ et refuse de se coupler si elle est trop faible (IEC 62109-2).',
        'Onduleurs avec surveillance différentielle intégrée, déclarés sans courant de défaut continu : un différentiel de type A suffit en amont ; sinon il faudrait un type B.',
      ],
    },
    { type: 'fiche', id: 'pv-inverter-types', why: 'Onduleurs avec et sans transformateur, conséquences sur la protection.' },

    { type: 'heading', text: '3 · Quand le groupe électrogène prend le relais' },
    {
      type: 'text',
      text: 'Pendant une coupure du réseau, l’inverseur bascule l’usine sur le groupe de 250 kVA. Les onduleurs perdent le réseau et s’arrêtent (anti-îlotage), puis se recouplent au bout d’une minute sur la tension du groupe. Danger : si la centrale produit plus que l’usine ne consomme, le surplus remonte dans l’alternateur, qui devient moteur. Et un diesel peu chargé s’encrasse.',
    },
    {
      type: 'calc',
      title: 'Limiter la production PV sur groupe',
      steps: [
        { label: 'Groupe 250 kVA, soit 200 kW ; charge minimale conseillée 30 %', formula: 'P_{groupe,min} = 0,3 × 200 = 60 kW' },
        { label: 'Consigne du contrôleur en « mode groupe » (contact de l’inverseur)', formula: 'P_{PV} ≤ P_{charge} − 60 kW' },
        { label: 'Jour de production, 150 kW consommés', formula: 'P_{PV} ≤ 90 kW  →  les 80 kW sont autorisés ✓' },
        { label: 'Dimanche, 30 kW consommés', formula: 'P_{PV} = 0  (le groupe est déjà sous 30 %)' },
      ],
      result: 'En mode groupe, la centrale continue à produire en semaine et économise du gasoil, sans jamais faire tourner l’alternateur en moteur',
    },
    {
      type: 'table',
      headers: ['Protection', 'Réglage', 'Effet'],
      rows: [
        ['Relais de retour de puissance du groupe (ANSI 32)', '−5 % de 200 kW, 3 s', 'découple le groupe s’il devient moteur'],
        ['Relais de retour de puissance réseau (ANSI 32)', 'export > 2 kW, 2 s', 'ouvre la centrale (étape 1)'],
        ['Anti-îlotage des onduleurs', 'perte réseau < 2 s', 'aucune tension renvoyée vers le réseau coupé'],
        ['Contact « groupe en marche »', 'vers le contrôleur', 'bascule la consigne : import ≥ 60 kW'],
      ],
    },

    { type: 'heading', text: '4 · Ce que les panneaux font au cos φ' },
    {
      type: 'text',
      text: 'Les onduleurs fournissent de la puissance active, à cos φ = 1. Les moteurs, eux, demandent toujours la même puissance réactive. Résultat : le réseau fournit moins de kW mais autant de kvar, et le cos φ mesuré à l’arrivée baisse. Or la batterie de 100 kvar à selfs anti-harmoniques posée par Awa est pilotée par un régulateur dont le transformateur de courant a été posé… sur le départ des ateliers, en aval du futur point de raccordement de la centrale.',
    },
    {
      type: 'calc',
      title: 'Cos φ à l’arrivée, un jour de production à midi',
      steps: [
        { label: 'Usine : 150 kW à cos φ 0,8', formula: 'Q = 150 × tan(acos 0,8) = 150 × 0,75 ≈ 112 kvar' },
        { label: 'Sans PV, régulateur à 0,95 : batterie à 63 kvar', formula: 'Q_{réseau} = 150 × 0,33 ≈ 49 kvar' },
        { label: 'Avec 80 kW de PV, régulateur qui ne voit pas la centrale', formula: 'cos φ = \\frac{70}{\\sqrt{70^{2} + 49^{2}}} ≈ 0,82  ✗' },
        { label: 'Transformateur de courant du régulateur déplacé à l’arrivée', formula: 'Q_{réseau} ≤ 0,33 × 70 ≈ 23 kvar  →  batterie à 89 kvar ≤ 100 kvar ✓' },
      ],
      result: 'Mesurer le cos φ là où le distributeur le mesure : à l’arrivée, en amont de la centrale. La batterie existante suffit.',
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'team',
      text: 'Donc sans ce déplacement, on aurait économisé 12 millions sur l’énergie et payé des pénalités de réactif ?',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Une partie, oui. Le contrat de Tropica pénalise le réactif au-delà de tan φ 0,4 sur le mois. Avec les panneaux, les kWh achetés baissent mais pas les kvarh : il faut compenser davantage. Les onduleurs pourraient aussi fournir des kvar, mais à pleine puissance ils n’ont plus de marge : la batterie de condensateurs est la bonne réponse.',
    },

    { type: 'heading', text: '5 · Le raccordement et la liste des équipements' },
    {
      type: 'calc',
      title: 'Départ de la centrale au TGBT',
      steps: [
        { label: 'Courant d’un onduleur de 40 kW', formula: 'I = \\frac{40 000}{\\sqrt{3} × 400} ≈ 58 A  →  disjoncteur 4P 63 A' },
        { label: 'Courant total de la centrale', formula: '2 × 58 ≈ 116 A  →  disjoncteur 4P 125 A au TGBT' },
        { label: 'Câble 4 × 50 mm² cuivre, 40 m, cos φ = 1', formula: 'ΔU = \\frac{\\sqrt{3} × 0,0225 × 40 × 116}{50} ≈ 3,6 V  →  0,9 %' },
      ],
      result: 'Départ 4P 125 A, câble 4 × 50 mm² + PE, chute de tension 0,9 %',
    },
    {
      type: 'solarEquipment',
      list: {
        title: 'Centrale en autoconsommation de la toiture Tropica',
        project: 'Usine Tropica',
        rows: [
          { tag: 'PV', item: 'Modules monocristallins 550 Wc, certifiés brouillard salin', qty: 180, rating: '99 kWc', data: '10 chaînes de 18, pan sud, 10°', protection: 'sans fusible (1 chaîne / MPPT)', kwp: 99 },
          { tag: 'OND', item: 'Onduleurs réseau triphasés 5 MPPT', qty: 2, rating: '2 × 40 kW', data: 'MPPT 200–800 V, posés en toiture', protection: 'sectionneur DC + parafoudre DC type 2 intégrés', kw: 80 },
          { tag: 'CTL', item: 'Contrôleur d’injection zéro + compteur', qty: 1, rating: 'TC 600/5 A', data: 'import ≥ 3 kW (réseau), ≥ 60 kW (groupe)', protection: 'repli à 0 W si perte de communication' },
          { tag: 'R32', item: 'Relais de retour de puissance', qty: 1, rating: 'ANSI 32', data: 'export > 2 kW pendant 2 s', protection: 'bobine à émission du 4P 125 A' },
          { tag: 'TD-PV', item: 'Tableau AC de la centrale', qty: 1, rating: '4P 125 A', data: '2 départs 4P 63 A', protection: 'parafoudre AC type 2, coupure pompiers' },
          { tag: 'LNK', item: 'Liaison tableau PV ↔ TGBT', qty: 1, rating: '40 m', data: '4 × 50 mm² Cu + PE 25 mm²', protection: 'ΔU 0,9 %' },
          { tag: 'EQP', item: 'Liaison équipotentielle des rails et cadres', qty: 1, rating: '6 mm² Cu', data: 'reliée à la barrette de terre du TGBT' },
          { tag: 'BC', item: 'Batterie de condensateurs existante', qty: 1, rating: '100 kvar, selfs 7 %', data: 'TC du régulateur déplacé à l’arrivée', protection: 'consigne cos φ 0,95' },
        ],
      },
    },

    { type: 'heading', text: '6 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Sécurité des centrales en toiture',
      rows: [
        { norm: 'IEC 60364-7-712', rule: 'Protection contre les surtensions, isolement, choix du différentiel (type A ou B) selon l’onduleur.', result: 'parafoudres et différentiel' },
        { norm: 'UTE C15-712-1 / guide pompiers (France)', rule: 'Câbles DC hors du bâtiment ou en gaine résistante au feu, coupure d’urgence, signalétique.', result: 'DC à l’extérieur' },
        { norm: 'NEC 690.12 (États-Unis)', rule: 'Arrêt rapide : moins de 30 V hors du champ et 80 V dans le champ en 30 s.', result: 'optimiseurs obligatoires' },
        { norm: 'IEC 62305-2 / IEC 61643-31', rule: 'Analyse du risque foudre ; parafoudres côté continu des installations PV.', result: 'type 2 sans paratonnerre' },
      ],
    },
    {
      type: 'regional',
      text: 'Sur la côte du golfe de Guinée, deux ennemis : la foudre, très fréquente en saison des pluies, première cause de pannes d’onduleurs ; et le sel, qui ronge les fixations et les connecteurs à quelques kilomètres de la mer. Fanta exige des modules certifiés au brouillard salin (IEC 61701), une visserie inox A4 et une inspection des parafoudres après chaque saison orageuse.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Le courant continu ne s’éteint pas seul : connecteurs identiques, câbles protégés, DC hors du bâtiment.',
        'Sur groupe électrogène, la production PV est limitée pour garder une charge minimale et éviter le retour de puissance.',
        'Le PV fait baisser le cos φ mesuré à l’arrivée : le régulateur de la batterie de condensateurs doit mesurer au même endroit que le distributeur.',
        'Parafoudres DC et AC, liaison équipotentielle et contrôle d’isolement protègent l’installation des surtensions et des défauts.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un samedi, l’usine tourne avec une seule équipe : 100 kW consommés, coupure réseau, usine sur groupe. Quelle puissance PV le contrôleur autorise-t-il ?',
      solution: ['P_PV ≤ 100 − 60 = 40 kW.', 'La moitié de la centrale reste disponible ; le groupe ne descend pas sous 60 kW.'],
    },
    {
      type: 'exercise',
      question: 'Quel cos φ verrait le distributeur si l’usine consommait 120 kW à la relève de 14 h, avec 66 kW de PV, et une batterie restée à 63 kvar ?',
      solution: ['Q usine = 120 × 0,75 = 90 kvar ; Q réseau = 90 − 63 = 27 kvar ; P réseau = 120 − 66 = 54 kW.', 'cos φ = 54 / √(54² + 27²) ≈ 0,89 : sous 0,93 (tan φ 0,4), pénalisé.'],
    },
  ],
};
