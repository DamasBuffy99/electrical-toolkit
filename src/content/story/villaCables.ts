import { TopicContent } from '../types';

export const villaCablesContent: TopicContent = {
  title: 'Les câbles et la pompe du jardin',
  subtitle: 'Le câble doit supporter le courant sans chauffer, et amener une tension suffisante jusqu’au bout. Pour la pompe du forage, à 80 m, c’est la deuxième condition qui décide.',
  blocks: [
    { type: 'scene', text: 'Semaine 4 · Bureau d’études' },
    {
      type: 'text',
      text: 'Dernière étape de conception : choisir la section de chaque câble. Pour la plupart des circuits, la réponse découle du disjoncteur. Un circuit, pourtant, demande un vrai calcul : celui de la pompe du forage, au fond du jardin.',
    },

    { type: 'heading', text: '1 · Première condition : ne pas chauffer' },
    {
      type: 'text',
      text: 'Un câble parcouru par un courant chauffe. Chaque section a un courant admissible au-delà duquel l’isolant vieillit trop vite. Ce courant dépend aussi de la façon dont le câble est posé et de la température ambiante : un câble enfermé dans une gaine, dans un mur chaud, refroidit moins bien qu’un câble à l’air libre.',
    },
    {
      type: 'table',
      headers: ['Section cuivre', 'Usage dans la villa', 'Disjoncteur associé'],
      rows: [
        ['1,5 mm²', 'éclairage', '10 A'],
        ['2,5 mm²', 'prises, clims, chauffe-eau, lave-linge', '16 ou 20 A'],
        ['4 mm²', 'pompe du forage (pour la chute de tension)', '16 A'],
        ['6 mm²', 'four / future plaque', '32 A'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Il fait 35 à 40 °C ici en saison chaude. Ça change quelque chose pour les câbles ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Oui. Les tables des fabricants sont données pour 30 °C. À 40 °C, un câble doit transporter un peu moins pour ne pas dépasser sa température limite : on applique un coefficient d’environ 0,87. C’est pour ça que j’évite de serrer trop de circuits dans la même gaine : les câbles qui se touchent se réchauffent mutuellement.',
    },
    { type: 'fiche', id: 'cable-sizing', why: 'Courant admissible, modes de pose, facteurs de correction de température et de groupement.' },

    { type: 'heading', text: '2 · Deuxième condition : la tension au bout du câble' },
    {
      type: 'text',
      text: 'Un câble a une résistance : plus il est long et fin, plus il « mange » de tension en route. Au bout de 80 m, la pompe pourrait ne recevoir que 215 V au lieu de 230 V. Un moteur sous-alimenté démarre mal, chauffe et s’use vite.',
    },
    { type: 'illustration', name: 'cable-run', caption: 'Chute de tension sur 80 m selon la section du câble' },
    {
      type: 'text',
      text: 'La pompe absorbe 7,6 A avec un cos φ de 0,8 (calculé à l’étape 3). En monophasé, le courant fait l’aller par la phase et le retour par le neutre : la longueur parcourue est doublée.',
    },
    { type: 'formula', text: 'ΔU = \\frac{2 × ρ × L × I × cos φ}{S}   avec ρ = 0,0225 Ω·mm²/m (cuivre chaud)' },
    {
      type: 'table',
      headers: ['Section S', 'ΔU (V)', 'ΔU (%)', 'Verdict'],
      rows: [
        ['1,5 mm²', '2 × 0,0225 × 80 × 7,6 × 0,8 / 1,5 = 14,6 V', '6,3 %', '✗ au-dessus de 5 %'],
        ['2,5 mm²', '8,8 V', '3,8 %', 'passe, mais juste'],
        ['4 mm²', '5,5 V', '2,4 %', '✓ confortable'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Le 2,5 mm² passe. Pourquoi payer le 4 mm² ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Pour trois raisons. Un : il y a déjà un peu de chute entre le compteur et le tableau, qui s’ajoute. Deux : au démarrage, le moteur appelle environ six fois son courant ; avec 2,5 mm², la tension tomberait de plus de 11 % pendant le démarrage, avec 4 mm² d’environ 7 %. Trois : la différence de prix sur 80 m représente quelques dizaines de milliers de francs, alors qu’une pompe de forage grillée coûte bien plus cher, sans compter l’intervention au fond du puits.',
    },
    { type: 'formula', text: 'Au démarrage (≈ 6 × I, cos φ ≈ 0,4) : ΔU_{4 mm²} = \\frac{2 × 0,0225 × 80 × 45,6 × 0,4}{4} ≈ 16 V ≈ 7 %' },
    {
      type: 'note',
      text: 'Les limites usuelles (IEC 60364-5-52) pour une installation alimentée par le réseau public basse tension : 3 % pour l’éclairage, 5 % pour les autres usages, mesurés entre le point de livraison et l’appareil. Une chute plus forte est admise brièvement au démarrage des moteurs.',
    },
    { type: 'fiche', id: 'voltage-drop', why: 'Formules mono et triphasées, valeurs catalogue en mV/A/m, solutions.' },

    { type: 'heading', text: '3 · Le câble enterré' },
    {
      type: 'bullets',
      items: [
        'Câble rigide prévu pour l’enterrement (type U-1000 R2V), 3 conducteurs de 4 mm² : phase, neutre et terre, dans le fourreau posé pendant le terrassement.',
        'Profondeur d’environ 60 à 80 cm, avec un grillage avertisseur rouge 20 cm au-dessus : celui qui creusera plus tard saura qu’un câble passe là.',
        'Le conducteur de terre suit le câble jusqu’au forage : la carcasse de la pompe est reliée au PE.',
        'Codes couleur partout : phase marron, noir ou gris ; neutre bleu ; terre vert-jaune. Jamais de vert-jaune pour autre chose que la terre.',
      ],
    },
    {
      type: 'regional',
      text: 'Sur les marchés locaux, on trouve des câbles dont la section réelle est inférieure à la section affichée, ou dont le cuivre est remplacé par de l’aluminium cuivré. Awa demande à l’entreprise des câbles de marque, conformes à une norme (IEC 60227/60502, NF), et vérifie au chantier le marquage imprimé sur la gaine.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Une section se choisit sur deux critères : l’échauffement (courant admissible corrigé) et la chute de tension.',
        'Pour les circuits courts, l’échauffement décide ; pour les longs circuits, c’est la chute de tension.',
        'En monophasé, ΔU = 2 × ρ × L × I × cos φ / S ; viser ≤ 3 % pour l’éclairage et ≤ 5 % pour le reste.',
        'Les moteurs méritent une marge, à cause du courant de démarrage.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'L’éclairage du portail est à 50 m du tableau : 6 lampes de 15 W (cos φ ≈ 0,95). Le câble de 1,5 mm² convient-il, avec une limite de 3 % ?',
      solution: [
        'I = 90 / (230 × 0,95) ≈ 0,41 A.',
        'ΔU = 2 × 0,0225 × 50 × 0,41 × 0,95 / 1,5 ≈ 0,58 V, soit 0,25 % : largement suffisant.',
        'Avec les LED, le courant est si faible que la chute de tension pose rarement problème pour l’éclairage.',
      ],
    },
    {
      type: 'exercise',
      question: 'Le forage est finalement déplacé à 120 m. Quelle section faut-il pour rester sous 3 % en régime normal ?',
      solution: [
        'ΔU max = 3 % × 230 = 6,9 V.',
        'S ≥ 2 × 0,0225 × 120 × 7,6 × 0,8 / 6,9 ≈ 4,76 mm² → section normalisée 6 mm².',
        'Vérification : ΔU = 2 × 0,0225 × 120 × 7,6 × 0,8 / 6 ≈ 5,5 V, soit 2,4 %.',
      ],
    },
  ],
};
