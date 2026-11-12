import { TopicContent } from '../types';

export const factoryPowerFactorContent: TopicContent = {
  title: 'Le cos φ et la facture',
  subtitle: 'Sur la facture de Tropica, une ligne « énergie réactive » coûte chaque mois une petite fortune. Awa explique d’où elle vient et comment une batterie de condensateurs la fait disparaître.',
  blocks: [
    { type: 'scene', text: 'Mois 6 · Usine en service, bureau d’Ibrahim' },
    {
      type: 'objectives',
      items: [
        'Diagnostiquer un mauvais cos φ à partir des mesures.',
        'Calculer la batterie de condensateurs.',
        'Chiffrer les gains : facture, transformateur, câbles.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: 'cos φ 0,80', label: 'avant correction' },
        { value: '86 kvar', label: 'besoin calculé' },
        { value: '100 kvar', label: 'batterie avec selfs' },
        { value: '256 → 216 kVA', label: 'puissance appelée' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'Regardez cette facture : « dépassement d’énergie réactive ». Je paie pour une énergie que je ne consomme pas ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Vous la consommez, mais elle ne travaille pas. Vos moteurs ont besoin d’un courant magnétique pour créer leur champ tournant : il fait des allers-retours entre le réseau et les moteurs sans rien produire. Le distributeur doit pourtant le transporter dans ses câbles et ses transformateurs. Au-delà d’un certain seuil, il vous le facture.',
    },
    { type: 'illustration', name: 'power-triangle', caption: 'Puissance active P (travail), réactive Q (magnétisation), apparente S (ce que transporte le câble)' },

    { type: 'heading', text: '1 · Le diagnostic' },
    {
      type: 'text',
      text: 'Avec un analyseur de réseau branché une semaine sur le TGBT, Awa mesure la pointe : 205 kW avec un cos φ de 0,80. Elle en déduit la puissance réactive.',
    },
    { type: 'formula', text: 'cos φ = 0,80  →  tan φ = 0,75   ;   Q = P × tan φ = 205 × 0,75 ≈ 154 kvar' },
    { type: 'formula', text: 'S = \\sqrt{P^{2} + Q^{2}} = \\sqrt{205^{2} + 154^{2}} ≈ 256 kVA' },
    {
      type: 'text',
      text: 'Le transformateur et les câbles transportent 256 kVA pour seulement 205 kW de travail utile : un cinquième de la capacité sert à faire circuler du courant magnétique.',
    },

    { type: 'heading', text: '2 · La solution : produire le réactif sur place' },
    {
      type: 'text',
      text: 'Un condensateur fait l’inverse d’un moteur : il fournit du courant réactif au lieu d’en consommer. En plaçant une batterie de condensateurs au TGBT, le réactif fait ses allers-retours entre les condensateurs et les moteurs, à l’intérieur de l’usine, au lieu de remonter jusqu’au réseau.',
    },
    { type: 'illustration', name: 'factory-sld', props: { highlight: 'capacitor' }, caption: 'La batterie de condensateurs, raccordée au TGBT' },
    { type: 'formula', text: 'Objectif cos φ = 0,95  →  tan φ = 0,33   ;   Q_c = P × (tan φ_1 − tan φ_2) = 205 × (0,75 − 0,33) ≈ 86 kvar' },
    {
      type: 'text',
      text: 'Awa choisit une batterie automatique de 100 kvar en 5 gradins de 20 kvar : un régulateur ajoute ou retire des gradins selon les machines en marche. Une batterie fixe surcompenserait le soir, quand seuls l’éclairage et la chambre froide tournent.',
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'team',
      text: 'On a des variateurs et un démarreur progressif. Ça ne pose pas de problème avec des condensateurs ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Bonne question. Les variateurs produisent des harmoniques, des courants à 150, 250 Hz… Les condensateurs les attirent et peuvent entrer en résonance, puis chauffer et claquer. Je prévois donc une batterie avec selfs anti-harmoniques. Elle coûte un peu plus cher, mais elle dure.',
    },

    { type: 'heading', text: '3 · Ce que gagne Ibrahim' },
    {
      type: 'table',
      headers: ['', 'Avant (cos φ 0,80)', 'Après (cos φ 0,95)'],
      rows: [
        ['Puissance réactive à la pointe', '154 kvar', '205 × 0,33 ≈ 68 kvar'],
        ['Puissance apparente', '256 kVA', '205 / 0,95 ≈ 216 kVA'],
        ['Courant au TGBT', '≈ 370 A', '≈ 312 A'],
        ['Pertes dans les câbles (∝ I²)', '100 %', '≈ 71 %'],
        ['Pénalité d’énergie réactive', 'oui, chaque mois', 'supprimée'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Trois gains en un : plus de pénalité, des câbles et un transformateur qui chauffent moins, et 40 kVA libérés sur le transformateur pour votre prochaine extension. La batterie se rembourse généralement en moins de deux ans, souvent bien moins.',
    },
    {
      type: 'regional',
      text: 'Les tarifs industriels (moyenne tension) facturent l’énergie réactive au-delà d’un seuil, souvent exprimé en tan φ (de l’ordre de 0,4, soit cos φ ≈ 0,93) ou en cos φ minimal. Vérifiez le seuil exact sur le contrat de fourniture. Dans les ateliers chauds et poussiéreux, installez la batterie dans un local ventilé : la chaleur est l’ennemie des condensateurs.',
    },

    { type: 'heading', text: 'Bilan du projet 3' },
    {
      type: 'text',
      text: 'Chez Tropica, Awa a appris à penser « moteur » : lire une plaque, choisir un démarrage compatible avec le groupe, protéger chaque départ, corriger les câbles pour la chaleur, régler les protections pour qu’une panne reste locale, et corriger le cos φ. Dernier projet : une clinique, où la priorité absolue n’est plus le coût mais la continuité.',
    },
    {
      type: 'bullets',
      items: [
        'Le réactif ne produit pas de travail mais occupe les câbles et le transformateur.',
        'Q_c = P × (tan φ_1 − tan φ_2) ; batterie automatique en gradins pour suivre la charge.',
        'Avec des variateurs, batterie à selfs anti-harmoniques.',
        'Gains : pénalité supprimée, pertes réduites, capacité libérée.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Quelle puissance de batterie faudrait-il pour remonter le cos φ de 0,80 à 0,98 ? Pourquoi ne vise-t-on pas 1 ?',
      solution: [
        'cos φ = 0,98 → tan φ ≈ 0,20 ; Q_c = 205 × (0,75 − 0,20) ≈ 113 kvar.',
        'Viser 1 demande beaucoup plus de condensateurs pour un gain minime, et risque de surcompenser (cos φ capacitif) quand la charge baisse, ce qui fait monter la tension et peut aussi être pénalisé.',
      ],
    },
    {
      type: 'exercise',
      question: 'De combien baissent les pertes dans un câble quand le courant passe de 370 A à 312 A ?',
      solution: ['Les pertes varient comme I² : (312 / 370)² ≈ 0,71.', 'Elles baissent d’environ 29 %, sans rien changer d’autre.'],
    },
  ],
};
