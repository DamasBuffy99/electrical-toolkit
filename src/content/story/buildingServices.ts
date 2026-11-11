import { TopicContent } from '../types';

export const buildingServicesContent: TopicContent = {
  title: 'Ascenseur, pompes et parties communes',
  subtitle: 'Les services communs ont des moteurs et fonctionnent pour tout le monde. Awa les alimente depuis un tableau dédié, protège chaque moteur, et réduit la facture d’éclairage que paieront les copropriétaires.',
  blocks: [
    { type: 'scene', text: 'Mois 3 · Réunion avec l’ascensoriste et le plombier' },
    { type: 'illustration', name: 'building-riser', props: { highlight: 'services' }, caption: 'Ascenseur, surpresseur et éclairage des communs : le tableau des services généraux' },
    {
      type: 'text',
      text: 'Tous les équipements communs partent d’un même tableau, le TD-SG (tableau divisionnaire des services généraux), alimenté par son propre départ depuis le TGBT et par son propre compteur. C’est ce tableau que le groupe électrogène secourra plus tard.',
    },

    { type: 'heading', text: '1 · L’ascenseur' },
    {
      type: 'text',
      text: 'L’ascensoriste fournit sa fiche technique : moteur de 11 kW, triphasé 400 V, commandé par un variateur de fréquence. Awa calcule le courant pour dimensionner le départ.',
    },
    { type: 'formula', text: 'I = \\frac{P}{√3 × U × η × cos φ} = \\frac{11 000}{√3 × 400 × 0,9 × 0,9} ≈ 19,6 A' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Le variateur coûte cher. Il sert à quoi ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Sans lui, le moteur démarrerait d’un coup en appelant six à sept fois son courant : les lumières de tout l’immeuble vacilleraient à chaque appel de cabine, et les passagers sentiraient un à-coup. Le variateur fait monter la vitesse en douceur : démarrage confortable, courant de démarrage à peine supérieur au courant normal, et un groupe de secours beaucoup plus petit. On en reparlera à l’usine Tropica, où les moteurs sont rois.',
    },
    {
      type: 'table',
      headers: ['Départ ascenseur', 'Choix', 'Pourquoi'],
      rows: [
        ['Disjoncteur', '25 A, 3P', '≥ 1,25 × 19,6 ≈ 24,5 A'],
        ['Câble', '4 × 6 mm² + terre', '25 m jusqu’à la machinerie en toiture : ΔU ≈ 0,7 %'],
        ['Différentiel', '300 mA, compatible variateur', 'protection incendie sans déclenchements intempestifs'],
        ['Coupure locale', 'interrupteur cadenassable en machinerie', 'le technicien doit pouvoir consigner le moteur'],
      ],
    },
    { type: 'fiche', id: 'hvac-mechanical', why: 'Puissance des ascenseurs, pompes et équipements mécaniques.' },

    { type: 'heading', text: '2 · Le surpresseur' },
    {
      type: 'text',
      text: 'La pression du réseau d’eau ne suffit pas pour les étages : une bâche au rez-de-chaussée et deux pompes de 4 kW poussent l’eau vers les logements. Une seule tourne à la fois ; l’armoire de commande les alterne chaque jour pour qu’elles s’usent de la même façon, et bascule sur la seconde si la première tombe en panne.',
    },
    { type: 'formula', text: 'Pompe : I = \\frac{4 000}{√3 × 400 × 0,85 × 0,86} ≈ 7,9 A' },
    {
      type: 'bullets',
      items: [
        'Chaque pompe a un disjoncteur-moteur réglé à son courant de plaque (environ 8 A) : il protège contre la surcharge et le court-circuit.',
        'Un flotteur dans la bâche arrête les pompes si elle est vide : une pompe qui tourne à sec se détruit en quelques minutes.',
        'Un pressostat démarre et arrête les pompes selon la pression dans les colonnes d’eau.',
      ],
    },
    { type: 'fiche', id: 'circuit-breaker', why: 'Disjoncteurs, courbes de déclenchement, protection des moteurs.' },

    { type: 'heading', text: '3 · L’éclairage des parties communes' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Dans mon ancien immeuble, les lumières des escaliers restaient allumées jour et nuit. Les charges étaient énormes.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Ici, aucune lampe commune ne restera allumée pour rien. Escaliers et paliers sur minuterie avec boutons poussoirs lumineux ; parking avec détecteurs de présence ; entrée et façade sur horloge et détecteur crépusculaire. Et partout des LED.',
    },
    {
      type: 'table',
      headers: ['', 'Allumé en permanence (12 h/nuit)', 'Minuteries et détecteurs'],
      rows: [
        ['Énergie', '2 kW × 12 h = 24 kWh/jour', '≈ 6 kWh/jour'],
        ['Sur un mois', '≈ 720 kWh', '≈ 180 kWh'],
        ['Économie', '', '≈ 540 kWh/mois, soit environ 55 000 FCFA à ~100 FCFA/kWh'],
      ],
    },
    {
      type: 'note',
      text: 'Dans les escaliers, Awa ajoute aussi des blocs autonomes d’éclairage de sécurité : en cas de coupure, ils s’allument seuls sur leur batterie et balisent l’évacuation. On les retrouvera, beaucoup plus nombreux, dans la clinique du projet 4.',
    },
    { type: 'fiche', id: 'lighting-circuits-sockets', why: 'Commandes d’éclairage : va-et-vient, télérupteurs, minuteries.' },
    {
      type: 'regional',
      text: 'Les coupures fréquentes sont la première plainte des habitants d’immeubles : un ascenseur bloqué entre deux étages, ou une bâche pleine mais des robinets à sec au 4e. C’est pourquoi on prévoit dès la conception un ascenseur à « retour automatique au niveau » sur batterie, et un tableau des services généraux facile à secourir.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Les services communs ont leur tableau et leur compteur, séparés des logements.',
        'Un moteur se protège par un disjoncteur-moteur réglé sur son courant de plaque ; on prévoit une coupure locale pour l’entretien.',
        'Le variateur limite le courant de démarrage, adoucit le mouvement et réduit la taille du groupe de secours.',
        'Minuteries, détecteurs et LED divisent la facture des communs par trois ou quatre.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Sans variateur, l’ascenseur démarrerait en direct à 7 fois son courant nominal. Quel courant d’appel cela représente-t-il ?',
      solution: ['7 × 19,6 ≈ 137 A pendant le démarrage, sur un départ de 25 A et une colonne de 125 A.', 'Avec le variateur, l’appel reste autour de 1,2 à 1,5 fois le nominal, soit 24 à 30 A.'],
    },
    {
      type: 'exercise',
      question: 'Pourquoi alterner les deux pompes chaque jour, plutôt que garder toujours la même en service ?',
      solution: [
        'Une pompe qui ne tourne jamais peut se gripper ; le jour où on en a besoin, elle ne démarre pas.',
        'En les alternant, les deux s’usent de façon égale et on sait chaque jour que chacune fonctionne.',
      ],
    },
  ],
};
