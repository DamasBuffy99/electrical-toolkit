import { TopicContent } from '../types';

export const buildingShortCircuitContent: TopicContent = {
  title: 'Le court-circuit au tableau général',
  subtitle: 'Juste à côté d’un transformateur, un court-circuit peut faire circuler des milliers d’ampères. Un disjoncteur incapable de les couper peut exploser. Awa calcule ce courant pour choisir des appareils assez robustes, sans payer de surplus inutile.',
  blocks: [
    { type: 'scene', text: 'Mois 4 · Bureau d’études, vérification du TGBT' },
    { type: 'illustration', name: 'building-riser', props: { highlight: 'shortcircuit' }, caption: 'Un court-circuit au TGBT : le transformateur tout proche le nourrit' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Le tableautier propose deux gammes de disjoncteurs : l’une à 10 kA, l’autre à 25 kA, beaucoup plus chère. Lequel prendre ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Ce chiffre en kA, c’est le pouvoir de coupure : le plus gros courant que le disjoncteur sait interrompre sans être détruit. Il doit être supérieur au courant de court-circuit à l’endroit où il est posé. Pour le savoir, il faut le calculer. Si je prends 25 kA partout « par sécurité », vous payez pour rien ; si je prends trop bas, un défaut peut faire exploser le tableau.',
    },

    { type: 'heading', text: '1 · D’où vient le courant de court-circuit ?' },
    {
      type: 'text',
      text: 'En cas de court-circuit franc, plus rien ne limite le courant… sauf les impédances entre la source et le défaut : celle du réseau en amont, celle du transformateur, celle des câbles. Plus le défaut est proche du transformateur, plus le courant est grand. Le TGBT est le pire endroit : il est collé au poste.',
    },
    {
      type: 'text',
      text: 'Premier calcul, rapide et un peu pessimiste : on ne garde que le transformateur. Sa tension de court-circuit u_k (4 % pour ce modèle, sur sa plaque) dit qu’il faut 4 % de la tension pour faire passer le courant nominal en court-circuit.',
    },
    { type: 'formula', text: 'I_{sc} ≈ \\frac{I_n}{u_k} = \\frac{231}{0,04} ≈ 5,8 kA' },

    { type: 'heading', text: '2 · Le calcul détaillé' },
    {
      type: 'text',
      text: 'Awa affine avec la méthode des impédances : on additionne séparément les résistances (R) et les réactances (X) de chaque élément, puis on calcule l’impédance totale.',
    },
    { type: 'formula', text: 'Z_{tr} = \\frac{U^{2}}{S_n} × u_k = \\frac{400^{2}}{160 000} × 0,04 = 40 mΩ' },
    { type: 'formula', text: 'R_{tr} = \\frac{P_{cu}}{3 × I_n^{2}} = \\frac{2 350}{3 × 231^{2}} ≈ 14,7 mΩ   ;   X_{tr} = \\sqrt{40^{2} − 14,7^{2}} ≈ 37,2 mΩ' },
    {
      type: 'table',
      headers: ['Élément', 'R (mΩ)', 'X (mΩ)'],
      rows: [
        ['Réseau MT amont (250 MVA)', '≈ 0', '0,6'],
        ['Transformateur 160 kVA', '14,7', '37,2'],
        ['Câbles transfo → TGBT (5 m, 95 mm²)', '1,2', '0,4'],
        ['Total au TGBT', '15,9', '38,2'],
      ],
    },
    { type: 'formula', text: 'I_{sc} = \\frac{U}{√3 × \\sqrt{R^{2} + X^{2}}} = \\frac{400}{√3 × \\sqrt{15,9^{2} + 38,2^{2}}} ≈ 5,6 kA' },
    {
      type: 'text',
      text: 'Le calcul détaillé donne 5,6 kA, proche de l’estimation rapide. Plus loin, au palier du 4e étage, il faut ajouter les 25 m de colonne montante (R ≈ 16 mΩ, X ≈ 2 mΩ) : le courant de court-circuit tombe à environ 4,5 kA.',
    },
    { type: 'fiche', id: 'short-circuit', why: 'Méthode des impédances complète, avec un exemple sur plusieurs niveaux.' },

    { type: 'heading', text: '3 · Choisir les pouvoirs de coupure' },
    {
      type: 'table',
      headers: ['Emplacement', 'I_sc calculé', 'Pouvoir de coupure choisi'],
      rows: [
        ['TGBT (général 250 A et départs)', '5,6 kA', '10 kA'],
        ['Coffrets de palier', '≈ 4,5 kA', '6 kA'],
        ['Tableaux des logements', 'plus faible encore', '6 kA (standard)'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'La gamme 10 kA suffit au TGBT, avec une bonne marge. Les 25 kA seraient de l’argent jeté. En revanche, si un jour vous remplacez le transformateur par un 400 kVA, il faudra refaire ce calcul : le courant de court-circuit augmentera, et certains disjoncteurs devront changer.',
    },
    { type: 'formula', text: 'Règle : I_{cu} (pouvoir de coupure) ≥ I_{sc} (au point d’installation)' },
    { type: 'scene', text: 'Mois 12 · Demande d’approbation du TGBT' },
    {
      type: 'dialogue',
      speaker: 'Clarisse Houndé (achats, Électra BTP)',
      role: 'team',
      text: 'Le tableautier propose une gamme à 6 kA pour tout le TGBT, nettement moins chère. 6 kA, c’est au-dessus de 5,6 kA, non ?',
    },
    {
      type: 'dialogue',
      speaker: 'Marc Adjovi (supervision)',
      role: 'team',
      text: 'Au-dessus, mais sans aucune marge : la puissance de court-circuit du réseau peut augmenter si le distributeur renforce sa ligne, et nos 5,6 kA sont déjà une estimation. Le cahier des charges d’Awa impose 10 kA au TGBT ; je refuse la variante à 6 kA. Pour les coffrets de palier, en revanche, 6 kA est conforme.',
    },
    {
      type: 'note',
      text: 'Le calcul du court-circuit maximal sert à choisir le pouvoir de coupure. Le court-circuit minimal, en bout de ligne, sert à autre chose : vérifier que le disjoncteur détecte bien un défaut lointain et coupe assez vite. Les deux se calculent avec la même méthode.',
    },
    { type: 'fiche', id: 'circuit-breaker', why: 'Pouvoir de coupure I_cu, MCB, MCCB, ACB et leurs gammes.' },
    {
      type: 'regional',
      text: 'Le distributeur fournit la puissance de court-circuit de son réseau MT au point de raccordement (souvent entre 100 et 500 MVA en zone urbaine) : demandez-la par écrit. Sur le marché, méfiez-vous des disjoncteurs sans marque dont le pouvoir de coupure imprimé n’a jamais été testé : au TGBT, c’est précisément ce chiffre qui compte.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Le courant de court-circuit est maximal près du transformateur et diminue avec la longueur de câble.',
        'Estimation rapide : I_sc ≈ I_n / u_k ; calcul détaillé : on additionne R et X de chaque élément.',
        'Chaque disjoncteur doit avoir un pouvoir de coupure supérieur au courant de court-circuit à son emplacement.',
        'Changer de transformateur impose de refaire le calcul.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Estimez rapidement le courant de court-circuit au TGBT si l’on installe un transformateur de 400 kVA avec u_k = 4 %.',
      solution: ['I_n = 400 000 / (√3 × 400) ≈ 577 A.', 'I_sc ≈ 577 / 0,04 ≈ 14,4 kA : les disjoncteurs 10 kA du TGBT ne suffiraient plus.'],
    },
    {
      type: 'exercise',
      question: 'Pourquoi le courant de court-circuit est-il plus faible au 4e étage qu’au TGBT ?',
      solution: [
        'Le courant de défaut doit traverser en plus les 25 m de la colonne montante, dont la résistance s’ajoute à celle du transformateur.',
        'Impédance plus grande, courant plus petit : environ 4,5 kA au palier contre 5,6 kA au TGBT.',
      ],
    },
  ],
};
