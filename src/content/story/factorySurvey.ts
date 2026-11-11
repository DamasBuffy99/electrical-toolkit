import { TopicContent } from '../types';

export const factorySurveyContent: TopicContent = {
  title: 'Visite d’usine : la liste des machines',
  subtitle: 'Ibrahim Traoré agrandit son usine de jus de fruits. Avant de dessiner, Awa fait le tour des ateliers, lit les plaques des moteurs et transforme des kilowatts en ampères.',
  blocks: [
    { type: 'scene', text: 'Mois 1 · Usine Tropica, zone industrielle' },
    {
      type: 'text',
      text: 'Ibrahim Traoré dirige Tropica, une usine de jus de fruits qui tourne en deux équipes. Il veut doubler la production : nouvelle ligne d’embouteillage, nouveau pasteurisateur, chambre froide plus grande. Son responsable de maintenance, Paul Ndiaye, accueille Awa avec une liste griffonnée sur un carnet.',
    },
    { type: 'illustration', name: 'factory-sld', props: { highlight: 'all' }, caption: 'Le schéma unifilaire de la future installation : du réseau 20 kV aux machines' },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'Notre transformateur de 160 kVA chauffe déjà l’après-midi, et le disjoncteur général saute deux ou trois fois par mois. Avec la nouvelle ligne, je suppose qu’il en faut un plus gros. Combien ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Avant de répondre, je dois voir chaque machine. Dans une usine, presque tout est moteur, et un moteur ne se résume pas à ses kilowatts : il faut savoir comment il démarre, combien de temps il tourne, et ce qu’il fait subir au réseau. Paul, on fait le tour ensemble ?',
    },

    { type: 'heading', text: '1 · Lire la plaque d’un moteur' },
    {
      type: 'text',
      text: 'Devant le compresseur d’air, Awa photographie la plaque signalétique et explique à Ibrahim ce qu’elle contient.',
    },
    {
      type: 'table',
      headers: ['Indication de la plaque', 'Valeur (compresseur)', 'Ce que cela veut dire'],
      rows: [
        ['Puissance', '55 kW', 'puissance mécanique fournie à l’arbre, pas celle absorbée au réseau'],
        ['Tension', '400 V Δ / 690 V Y', 'couplé en triangle sur notre réseau 400 V'],
        ['Intensité nominale', '98 A', 'courant absorbé à pleine charge sous 400 V'],
        ['cos φ', '0,86', 'part active du courant'],
        ['Rendement η', '94 %', 'les 6 % restants partent en chaleur dans le moteur'],
        ['Indice IP / classe d’isolation', 'IP55 / F', 'protection contre poussière et jets d’eau ; température admissible'],
      ],
    },
    { type: 'formula', text: 'I = \\frac{P}{√3 × U × η × cos φ} = \\frac{55 000}{√3 × 400 × 0,94 × 0,86} ≈ 98 A' },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'team',
      text: 'Nous, on compte « 2 ampères par kilowatt » pour aller vite. C’est faux ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'C’est une très bonne règle de terrain à 400 V : 55 kW donnent environ 110 A, proche des 98 A réels. Elle sert à vérifier un ordre de grandeur. Pour dimensionner, je prends la valeur de la plaque ou le calcul exact.',
    },
    { type: 'fiche', id: 'electrical-basics', why: 'Puissance active, apparente, rendement et cos φ.' },

    { type: 'heading', text: '2 · La liste des machines' },
    {
      type: 'table',
      headers: ['Machine', 'P (kW)', 'η', 'cos φ', 'I (A)', 'Démarrage prévu'],
      rows: [
        ['Compresseur d’air', '55', '0,94', '0,86', '98', 'à définir (étape 2)'],
        ['4 pompes de process (chacune)', '15', '0,91', '0,84', '28', 'direct'],
        ['Groupe froid de la chambre froide', '30', '0,92', '0,85', '55', 'intégré au groupe'],
        ['Pasteurisateur (résistances)', '60', '1', '1', '87', 'sans appel de courant'],
        ['2 convoyeurs et remplisseuse (chacun)', '7,5', '0,89', '0,82', '15', 'variateur'],
        ['Pompe de nettoyage en place (NEP)', '11', '0,90', '0,84', '21', 'direct'],
        ['Éclairage, bureaux, climatisation', '25', '', '0,9', '40', ''],
      ],
    },
    { type: 'formula', text: 'P_{installée} = 55 + 4 × 15 + 30 + 60 + 2 × 7,5 + 11 + 25 = 256 kW' },

    { type: 'heading', text: '3 · Puissance appelée et nouveau transformateur' },
    {
      type: 'text',
      text: 'Les moteurs ne tournent pas tous à pleine charge en même temps : Awa applique un coefficient global de 0,8, vérifié avec Paul sur le planning de production. L’usine a aujourd’hui un cos φ d’environ 0,8 : beaucoup de moteurs et aucune compensation.',
    },
    { type: 'formula', text: 'P ≈ 0,8 × 256 ≈ 205 kW   ;   S = \\frac{P}{cos φ} = \\frac{205}{0,8} ≈ 256 kVA' },
    { type: 'formula', text: 'Avec 25 % de réserve : 256 × 1,25 = 320 kVA  →  transformateur de 400 kVA' },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'Donc mon 160 kVA était largement dépassé. Ça explique les déclenchements.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Oui. Et retenez ce cos φ de 0,8 : on y reviendra à la fin. Si on le relève à 0,95, les mêmes machines ne demanderont plus que 216 kVA. C’est de la capacité gratuite pour vos futures extensions, et une ligne de moins sur la facture.',
    },
    { type: 'fiche', id: 'hvac-mechanical', why: 'Estimation des charges mécaniques : moteurs, pompes, compresseurs.' },
    { type: 'fiche', id: 'notions-diverses', why: 'Conversions utiles : HP, kW, kVA, courants par HP.' },
    {
      type: 'regional',
      text: 'Les usines ont presque toujours un groupe électrogène pour tenir pendant les coupures : chez Tropica, un groupe de 250 kVA. Il change tout pour le démarrage des moteurs : un groupe encaisse beaucoup moins bien qu’un transformateur les appels de courant. C’est le sujet de l’étape suivante.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'La plaque du moteur donne la puissance mécanique ; le courant se calcule avec le rendement et le cos φ.',
        'Règle de terrain à 400 V : environ 2 A par kW, pour vérifier un ordre de grandeur.',
        'On liste chaque machine avec son mode de démarrage, puis on applique un coefficient d’utilisation.',
        'Un cos φ faible gonfle les kVA : il faudra le corriger.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Calculez le courant d’une pompe de 15 kW (η = 0,91, cos φ = 0,84) sous 400 V, puis vérifiez avec la règle des 2 A/kW.',
      solution: ['I = 15 000 / (√3 × 400 × 0,91 × 0,84) ≈ 28,3 A.', 'Règle rapide : 15 × 2 = 30 A. Les deux concordent.'],
    },
    {
      type: 'exercise',
      question: 'Le pasteurisateur de 60 kW est purement résistif. Quel courant absorbe-t-il ? Pourquoi n’a-t-il pas de problème de démarrage ?',
      solution: [
        'I = 60 000 / (√3 × 400 × 1) ≈ 86,6 A.',
        'Une résistance absorbe immédiatement son courant nominal : pas d’appel de courant ni de couple à vaincre, contrairement à un moteur.',
      ],
    },
  ],
};
