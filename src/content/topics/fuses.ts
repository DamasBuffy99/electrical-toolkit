import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const fusesContent: TopicContent = {
  title: 'Fusibles BT et HT',
  subtitle: 'Types de fusibles, catégories gG et aM, et règle de coordination avec le câble',
  blocks: [
    {
      type: 'text',
      text: "Le fusible protège par fusion d'un élément conducteur : simple, rapide et très limiteur de courant. Il complète ou remplace le disjoncteur, notamment pour les moteurs et en haute tension.",
    },

    { type: 'heading', text: '1 · Choisir le calibre (IEC 60269)' },
    { type: 'formula', text: 'In ≥ I_B    et    Icu ≥ Ik' },
    {
      type: 'text',
      text: "I₂ est le courant conventionnel de fusion : le fusible doit fondre à I₂. Pour protéger le câble, I₂ ne doit pas dépasser 1,45 fois sa capacité de transport :",
    },
    { type: 'formula', text: 'I₂ ≤ 1,45 × I_z' },
    {
      type: 'text',
      text: "Cette condition tolère une surcharge temporaire jusqu'à 45 % au-dessus de la capacité du câble, pendant un temps limité : le fusible fond avant que le conducteur n'atteigne sa température maximale de surcharge.",
    },
    { type: 'image', source: SLIDES['iec-7'], caption: 'Choix du fusible selon IEC 60269' },

    { type: 'heading', text: '2 · Catégories gG et aM' },
    {
      type: 'table',
      headers: ['Catégorie', 'Protection', 'Usage'],
      rows: [
        ['gG (usage général)', 'Pleine plage : surcharges + courts-circuits · I₂ = 1,6 × In', 'Protection des conducteurs en résidentiel et tertiaire'],
        ['aM (accompagnement moteur)', 'Plage partielle : courts-circuits seulement, retardé pour laisser passer le démarrage', 'Moteurs, transformateurs, charges à fort appel · à associer à un relais thermique'],
      ],
    },
    {
      type: 'note',
      text: '📌 Calibres aM courants : 10, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160, 200, 250, 320, 400, 630, 800, 1000, 1250 A.',
    },
    { type: 'image', source: SLIDES['panel-39'], caption: 'Fusible aM' },

    { type: 'heading', text: '3 · Fusibles basse tension' },
    {
      type: 'table',
      headers: ['Type', 'Construction', 'Usage'],
      rows: [
        ['Semi-enfermé réarmable (« kit-kat »)', 'Socle et porte-fusible en porcelaine, fil de cuivre étamé remplaçable', 'Faibles courants de défaut, basse tension'],
        ['HPC à cartouche (HRC)', "Corps céramique, élément en argent noyé dans une poudre (sable/marbre) qui éteint l'arc", 'Coupe avant la première crête du courant de défaut'],
      ],
    },
    {
      type: 'text',
      text: "Dans une cartouche HPC, en cas de défaut, l'élément d'argent fond puis se vaporise ; la réaction avec la poudre forme une substance très résistante qui éteint l'arc.",
    },
    { type: 'image', source: SLIDES['panel-37'], caption: 'Fusible réarmable' },
    { type: 'image', source: SLIDES['panel-38'], caption: 'Fusible HPC à cartouche' },

    { type: 'heading', text: '4 · Fusibles haute tension' },
    {
      type: 'table',
      headers: ['Type', 'Principe', 'Caractéristiques'],
      rows: [
        ['Cartouche HT (jusqu’à 33 kV)', "Élément en hélice ou deux éléments en parallèle (un peu résistant pour le courant normal, un très résistant pour limiter le défaut) contre l'effet couronne", '33 kV, pouvoir de coupure 8 700 A'],
        ['HPC à liquide', "Tube de verre rempli de tétrachlorure de carbone ; un ressort tire l'élément fondu dans le liquide qui éteint l'arc", "Jusqu'à 132 kV · 100 A nominal · 6 100 A de pouvoir de coupure · protège transformateurs et disjoncteurs"],
      ],
    },
    { type: 'image', source: SLIDES['panel-40'], caption: 'Fusible HT à cartouche' },
    { type: 'image', source: SLIDES['panel-41'], caption: 'Fusible HT à liquide' },
  ],
};
