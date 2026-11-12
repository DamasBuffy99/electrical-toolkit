import { TopicContent } from '../types';

export const factoryHarmonicsContent: TopicContent = {
  title: 'Harmoniques : le neutre qui chauffe',
  subtitle: 'Trois mois après la mise en service, Paul signale un câble de neutre tiède dans le tableau des bureaux, et un fusible de la batterie de condensateurs a fondu deux fois. Awa branche l’analyseur de réseau : les variateurs et l’électronique déforment le courant.',
  blocks: [
    { type: 'scene', text: 'Mois 9 · Campagne de mesures, avec Paul' },
    {
      type: 'objectives',
      items: [
        'Comprendre d’où viennent les harmoniques et comment on les mesure (THD).',
        'Voir pourquoi les harmoniques de rang 3 s’additionnent dans le neutre, et le dimensionner.',
        'Vérifier le risque de résonance d’une batterie de condensateurs.',
        'Comparer les limites IEC 61000 et IEEE 519, et choisir un remède.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '40 %', label: 'harmonique 3 dans le tableau des bureaux' },
        { value: '48 A', label: 'courant de neutre pour 40 A par phase' },
        { value: 'rang 10', label: 'résonance sans selfs anti-harmoniques' },
        { value: '189 Hz', label: 'accord de la batterie (p = 7 %)' },
        { value: '≤ 8 %', label: 'TDD admis à Tropica (IEEE 519)' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'client',
      text: 'Je ne comprends pas : les trois phases du tableau des bureaux sont à 40 A, bien équilibrées. Le neutre devrait être presque à zéro, non ? Ma pince indique 48 A.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'C’est vrai pour des courants sinusoïdaux. Vos ordinateurs et vos éclairages LED tirent un courant en pointes, très déformé. Une partie de ces déformations ne s’annule pas dans le neutre : elle s’y additionne. On va le voir sur les mesures.',
    },

    { type: 'heading', text: '1 · Qu’est-ce qu’un harmonique ?' },
    {
      type: 'text',
      text: 'Un appareil électronique (redresseur, alimentation à découpage, variateur) n’absorbe pas un courant sinusoïdal : il prend le courant par impulsions, au sommet de l’onde de tension. Ce courant déformé peut se décomposer en une somme de sinusoïdes : le fondamental à 50 Hz, plus des harmoniques à 150 Hz (rang 3), 250 Hz (rang 5), 350 Hz (rang 7)… Le taux de distorsion THD mesure leur poids par rapport au fondamental.',
    },
    {
      type: 'formula',
      text: 'THD_i = \\frac{\\sqrt{I_2^{2} + I_3^{2} + I_5^{2} + …}}{I_1}   ;   I_{eff} = I_1 × \\sqrt{1 + THD_i^{2}}',
    },
    {
      type: 'table',
      headers: ['Source', 'Rangs dominants', 'THD_i typique'],
      rows: [
        ['Ordinateurs, LED, chargeurs (monophasé)', '3, 5, 7, 9', '80 à 120 %'],
        ['Variateur triphasé 6 pulses, sans self', '5, 7, 11, 13', '80 à 100 %'],
        ['Variateur avec self continue (DC choke)', '5, 7', '35 à 45 %'],
        ['Variateur 12 pulses ou « low harmonic »', '11, 13 / faibles', '5 à 12 %'],
        ['Démarreur progressif (en régime établi, by-passé)', '—', '≈ 0'],
      ],
    },

    { type: 'heading', text: '2 · Le neutre qui porte plus que les phases' },
    {
      type: 'text',
      text: 'Les fondamentaux des trois phases sont décalés de 120° : dans le neutre, ils s’annulent si les charges sont équilibrées. Mais l’harmonique 3 d’une phase est décalé de 3 × 120° = 360°, c’est-à-dire pas du tout : les trois harmoniques 3 sont en phase et s’additionnent dans le neutre. C’est aussi vrai pour les rangs 9, 15… (multiples de 3).',
    },
    {
      type: 'calc',
      title: 'Neutre du tableau des bureaux (I_{phase} = 40 A, 40 % d’harmonique 3)',
      steps: [
        { label: 'Harmonique 3 de chaque phase', formula: 'I_3 = 0,40 × 40 = 16 A' },
        { label: 'Les trois s’additionnent dans le neutre', formula: 'I_N = 3 × I_3 = 3 × 16 = 48 A > 40 A' },
        { label: 'IEC 60364-5-52, annexe E : entre 33 et 45 %, on dimensionne sur le courant de neutre, facteur 0,86', formula: 'I_{Z,requis} = \\frac{48}{0,86} ≈ 56 A' },
      ],
      result: 'Le câble du tableau doit porter 56 A, pas 40 A : 4 × 10 mm² au lieu de 4 × 6 mm²',
    },
    {
      type: 'table',
      headers: ['Taux d’harmonique 3 (IEC 60364-5-52, annexe E)', 'Section choisie sur', 'Facteur'],
      rows: [
        ['0 à 15 %', 'courant de phase', '1,0'],
        ['15 à 33 %', 'courant de phase', '0,86'],
        ['33 à 45 %', 'courant de neutre', '0,86'],
        ['plus de 45 %', 'courant de neutre', '1,0'],
      ],
    },
    {
      type: 'note',
      text: 'Conséquence pratique : dans les bâtiments tertiaires (bureaux, salles informatiques), on ne réduit jamais la section du neutre, et on évite les disjoncteurs 4 pôles à neutre « demi-calibre ». Un neutre surchargé chauffe sans qu’aucune protection de phase ne le voie : il faut un disjoncteur avec protection du neutre (« 4P 4d », neutre protégé à 100 %).',
    },

    { type: 'heading', text: '3 · Les condensateurs et la résonance' },
    { type: 'illustration', name: 'factory-sld', props: { highlight: 'capacitor' }, caption: 'La batterie de 100 kvar au TGBT : les condensateurs attirent les courants harmoniques' },
    {
      type: 'text',
      text: 'Un condensateur présente une impédance d’autant plus faible que la fréquence est élevée : il « aspire » les harmoniques. Avec l’inductance du transformateur, il forme un circuit résonant. Si la fréquence de résonance tombe près d’un rang présent sur le réseau, les courants et tensions harmoniques sont amplifiés : les condensateurs chauffent, les fusibles fondent. C’est ce qu’a vu Paul.',
    },
    {
      type: 'calc',
      title: 'Où résonne la batterie de 100 kvar ?',
      steps: [
        { label: 'Puissance de court-circuit au TGBT', formula: 'S_{cc} = \\sqrt{3} × 400 × 14 400 ≈ 9,98 MVA' },
        { label: 'Rang de résonance d’une batterie classique', formula: 'h_r = \\sqrt{\\frac{S_{cc}}{Q_c}} = \\sqrt{\\frac{9 980}{100}} ≈ 10' },
        { label: 'Rangs émis par les variateurs : 5, 7, 11, 13', formula: 'h_r ≈ 10 : tout près du rang 11  ✗' },
        { label: 'Batterie avec selfs, taux d’accord p = 7 %', formula: 'f_r = \\frac{50}{\\sqrt{p}} = \\frac{50}{\\sqrt{0,07}} ≈ 189 Hz  (rang 3,8)' },
      ],
      result: 'Accordée à 189 Hz, sous le rang 5 (250 Hz), la batterie ne peut plus résonner avec les harmoniques des variateurs',
    },
    {
      type: 'text',
      text: 'C’est pour cela qu’Awa avait prescrit une batterie avec selfs anti-harmoniques en corrigeant le cos φ. Lors de la mesure, elle découvre que le fournisseur a livré une batterie classique « en attendant ». Les fusibles fondus sont le signal d’alarme : la batterie est remplacée par le modèle prévu.',
    },

    { type: 'heading', text: '4 · Limites et remèdes' },
    {
      type: 'calc',
      title: 'Taux de distorsion admis au point de livraison (IEEE 519)',
      steps: [
        { label: 'Rapport court-circuit / courant de charge maximal', formula: '\\frac{I_{cc}}{I_L} = \\frac{14 400}{577} ≈ 25' },
        { label: 'Classe 20 à 50 de la table IEEE 519', formula: 'TDD ≤ 8 %' },
        { label: 'Future ligne : 100 kW de variateurs à self continue, THD_i 40 %', formula: 'I_h ≈ 0,40 × 160 = 64 A   ;   TDD ≈ \\frac{64}{577} ≈ 11 % > 8 %  ✗' },
      ],
      result: 'Il faudra traiter les harmoniques de la future ligne : objectif TDD < 8 %',
    },
    {
      type: 'table',
      headers: ['Remède', 'Effet', 'Coût relatif'],
      rows: [
        ['Self de ligne 3 % ou self continue', 'THD_i de 80 % à 35–45 %', 'faible'],
        ['Variateurs 12 ou 18 pulses', 'THD_i 5 à 12 %', 'moyen à élevé'],
        ['Filtre passif accordé (rang 5)', 'absorbe un rang précis ; risque de surcompenser', 'moyen'],
        ['Filtre actif', 'injecte l’inverse des harmoniques mesurés ; THD_i < 5 %', 'élevé, mais centralisé'],
        ['Variateurs « low harmonic » (front actif)', 'THD_i < 5 %, à la source', 'élevé'],
      ],
    },
    {
      type: 'decision',
      title: 'Traitement des harmoniques',
      choice: 'Variateurs à self continue imposés au cahier des charges de la ligne, et un filtre actif de 60 A au TGBT',
      reasons: [
        'La self continue divise par deux le THD_i à la source pour un faible surcoût.',
        'Le filtre actif traite l’ensemble des variateurs, présents et futurs, et s’adapte quand la production change.',
        'Avec 64 A d’harmoniques à compenser, un filtre de 60 A ramène le TDD vers 2 à 3 %.',
      ],
      rejected: 'Un filtre passif sur le rang 5 : moins cher, mais il interagit avec la batterie de condensateurs et devient inutile si la ligne change de variateurs.',
    },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Dimensionner le neutre',
      rows: [
        { norm: 'IEC 60364-5-52 (annexe E)', rule: 'Facteurs de réduction selon le taux d’harmonique 3 ; au-delà de 33 %, section choisie sur le courant de neutre.', result: '56 A requis' },
        { norm: 'NF C 15-100', rule: 'Reprend l’annexe E ; neutre de section réduite interdit si le taux d’harmonique 3 dépasse 15 %.', result: 'neutre plein' },
        { norm: 'BS 7671 (523.6)', rule: 'Neutre compté comme conducteur chargé quand le taux d’harmonique 3 dépasse 15 % ; Appendix 4 pour les facteurs.', result: 'même résultat' },
        { norm: 'NEC 310.15(E)', rule: 'En triphasé 4 fils, le neutre compte comme conducteur chargé si la majeure partie de la charge est non linéaire.', result: '4 conducteurs chargés' },
      ],
    },
    {
      type: 'norms',
      title: 'Limites d’harmoniques',
      rows: [
        { norm: 'IEC 61000-3-2 / 3-12', rule: 'Émission maximale des appareils raccordés au réseau public (≤ 16 A, puis 16 à 75 A).', result: 'à exiger des fournisseurs' },
        { norm: 'IEC 61000-2-4', rule: 'Niveaux de compatibilité dans les installations industrielles : THD_u ≤ 8 % en classe 2.', result: 'THD_u mesuré : 4,5 %' },
        { norm: 'EN 50160', rule: 'Qualité de la tension fournie par le distributeur : THD_u ≤ 8 % sur 95 % du temps.', result: 'côté réseau public' },
        { norm: 'IEEE 519-2022', rule: 'Limites de TDD au point de couplage selon I_{cc}/I_L ; THD_u ≤ 8 % jusqu’à 1 kV.', result: 'TDD ≤ 8 % à Tropica' },
      ],
    },
    {
      type: 'regional',
      text: 'Les réseaux ouest-africains sont souvent « faibles » (puissance de court-circuit modeste, longues lignes MT) : la même quantité d’harmoniques y déforme davantage la tension qu’en Europe. Les groupes électrogènes sont encore plus sensibles : sur groupe, un variateur sans self peut faire grimper le THD_u au-delà de 10 % et perturber le régulateur de tension. Exigez la courbe d’harmoniques des variateurs dans les offres, et vérifiez le comportement sur groupe pendant les essais.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'L’électronique absorbe un courant déformé : fondamental + harmoniques ; on mesure le THD.',
        'Les rangs multiples de 3 s’additionnent dans le neutre : I_N peut dépasser le courant de phase.',
        'Au-delà de 33 % d’harmonique 3, on dimensionne le câble sur le courant de neutre (IEC 60364-5-52, annexe E).',
        'Une batterie de condensateurs classique peut résonner : h_r = \\sqrt{S_{cc}/Q_c} ; on l’accorde avec des selfs (p = 7 % → 189 Hz).',
        'Limites : THD_u ≤ 8 % (IEC 61000-2-4, EN 50160) ; TDD selon I_{cc}/I_L (IEEE 519).',
        'Remèdes : selfs, variateurs multi-pulses ou à front actif, filtres passifs ou actifs.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un tableau informatique a 60 A par phase et 50 % d’harmonique 3. Quel courant de dimensionnement pour son câble ?',
      solution: ['I_N = 3 × 0,50 × 60 = 90 A.', 'Au-delà de 45 % : dimensionnement sur le courant de neutre, facteur 1,0 : I_Z ≥ 90 A.'],
    },
    {
      type: 'exercise',
      question: 'Le transformateur passe à 630 kVA (S_{cc} ≈ 14 MVA au TGBT). Où résonnerait une batterie classique de 150 kvar ?',
      solution: ['h_r = √(14 000 / 150) ≈ 9,7 : toujours près des rangs 7 et 11.', 'La batterie doit rester accordée (selfs à 7 % ou 14 % si l’harmonique 3 est important).'],
    },
    {
      type: 'exercise',
      question: 'Un courant a un fondamental de 100 A et un THD_i de 40 %. Quel courant efficace la pince doit-elle afficher ?',
      solution: ['I_{eff} = 100 × √(1 + 0,40²) ≈ 107,7 A.', 'Seule une pince « efficace vrai » (TRMS) l’affiche correctement ; une pince à valeur moyenne sous-estime ce courant.'],
    },
  ],
};
