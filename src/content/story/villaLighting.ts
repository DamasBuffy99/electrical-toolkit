import { TopicContent } from '../types';

export const villaLightingContent: TopicContent = {
  title: 'Éclairage et prises, pièce par pièce',
  subtitle: 'Combien de lampes pour bien voir dans le séjour ? Où mettre les interrupteurs ? Combien de prises par chambre ? Awa répond pièce par pièce, puis regroupe tout en circuits.',
  blocks: [
    { type: 'scene', text: 'Semaine 3 · Bureau d’études, puis visite du gros œuvre' },
    {
      type: 'objectives',
      items: [
        'Calculer le nombre de luminaires d’une pièce (méthode des lumens).',
        'Placer interrupteurs et prises selon l’usage.',
        'Regrouper les points en circuits.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '150 lux', label: 'éclairage général du séjour' },
        { value: '6', label: 'plafonniers de 2 000 lm' },
        { value: '8 points', label: 'au plus par circuit d’éclairage' },
      ],
    },
    {
      type: 'text',
      text: 'La puissance est fixée. Awa passe maintenant au détail : chaque point lumineux, chaque interrupteur, chaque prise. Elle commence par le séjour, la pièce où la famille passera ses soirées.',
    },

    { type: 'heading', text: '1 · Combien de lumière dans le séjour ?' },
    {
      type: 'text',
      text: 'On ne choisit pas le nombre de lampes au hasard. On fixe d’abord un éclairement, mesuré en lux : la quantité de lumière qui arrive sur une surface. Un séjour demande environ 150 lux, une cuisine 200 à 300 lux sur le plan de travail, une chambre 100 lux.',
    },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'Je ne veux pas d’un séjour sombre, mais pas non plus d’une salle d’opération !',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'C’est exactement ce que le calcul évite. Je pars de 150 lux, une lumière confortable pour lire et recevoir. Toutes les lampes ne renvoient pas leur lumière sur le sol : une partie part sur les murs et le plafond, et avec la poussière elles baissent un peu avec les années. J’en tiens compte avec deux coefficients.',
    },
    { type: 'formula', text: 'N = \\frac{E × A}{F × UF × MF}' },
    {
      type: 'bullets',
      items: [
        'E : éclairement voulu, 150 lux.',
        'A : surface du séjour, 6 m × 6 m = 36 m².',
        'F : flux d’un plafonnier LED de 20 W, 2 000 lumens.',
        'UF : facteur d’utilisation (part de la lumière qui atteint le plan de travail), 0,6 pour une pièce claire.',
        'MF : facteur de maintenance (vieillissement, poussière), 0,8.',
      ],
    },
    { type: 'formula', text: 'N = \\frac{150 × 36}{2 000 × 0,6 × 0,8} = \\frac{5 400}{960} ≈ 5,6  →  6 plafonniers' },
    {
      type: 'text',
      text: 'Six plafonniers de 20 W, soit 120 W pour tout le séjour : les LED consomment dix fois moins que les anciennes ampoules à filament. Awa les répartit en deux rangées de trois pour éviter les zones d’ombre.',
    },
    { type: 'illustration', name: 'villa-plan', props: { focus: 'lighting' }, caption: 'Points lumineux et interrupteurs de la villa' },
    { type: 'fiche', id: 'lighting', why: 'Niveaux d’éclairement, méthode des lumens, choix des luminaires.' },

    { type: 'heading', text: '2 · Les interrupteurs' },
    {
      type: 'table',
      headers: ['Pièce', 'Commande', 'Pourquoi'],
      rows: [
        ['Séjour', 'va-et-vient (2 interrupteurs)', 'on entre par la porte d’entrée ou par le couloir : on allume d’un côté, on éteint de l’autre'],
        ['Couloir', 'va-et-vient aux deux bouts', 'ne jamais traverser une pièce dans le noir'],
        ['Chambres', 'simple allumage à la porte', 'un seul point d’entrée'],
        ['Salle de bain', 'interrupteur à l’extérieur de la pièce, ou loin de la douche', 'pas de commande à portée de main mouillée'],
        ['Extérieur', 'interrupteur + détecteur crépusculaire', 'les lampes s’allument seules à la tombée de la nuit'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Un détecteur pour l’extérieur, c’est un gadget, non ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'C’est surtout de la sécurité : la cour est éclairée même quand vous êtes en voyage. Et ce sont six lampes de 15 W : allumées 11 heures par nuit, elles coûtent environ 1 kWh par nuit. C’est raisonnable.',
    },

    { type: 'heading', text: '3 · Les prises' },
    {
      type: 'text',
      text: 'Awa place les prises en suivant le mobilier du plan : de chaque côté des lits, derrière le meuble TV, au-dessus du plan de travail de la cuisine (jamais au-dessus de l’évier ni de la plaque), une dans la salle de bain, loin de la douche.',
    },
    { type: 'illustration', name: 'villa-plan', props: { focus: 'sockets' }, caption: '14 emplacements de prises, la plupart en prises doubles' },
    {
      type: 'table',
      headers: ['Pièce', 'Emplacements', 'Remarque'],
      rows: [
        ['Séjour', '4', 'dont un double derrière le meuble TV et un près du canapé'],
        ['Cuisine', '3 doubles', 'au-dessus du plan de travail, à hauteur du plan'],
        ['Salle de bain', '1', 'hors du volume de la douche, pour le sèche-cheveux'],
        ['Chambres', '2 doubles chacune', 'de part et d’autre du lit'],
      ],
    },
    {
      type: 'note',
      text: 'Le four, le lave-linge, le chauffe-eau, chaque climatiseur et la pompe n’ont pas de « prise ordinaire » : ils ont chacun leur propre circuit depuis le tableau. On parle de circuits spécialisés. Ces appareils tirent un fort courant pendant longtemps ; les partager avec d’autres prises ferait chauffer les câbles et déclencher les disjoncteurs.',
    },

    { type: 'heading', text: '4 · Regrouper les points en circuits' },
    {
      type: 'text',
      text: 'Un circuit, c’est un câble qui part du tableau, protégé par son propre disjoncteur, et qui dessert plusieurs points. On limite le nombre de points par circuit pour que le courant reste raisonnable et qu’une panne ne plonge pas toute la maison dans le noir.',
    },
    {
      type: 'table',
      headers: ['Circuit', 'Points desservis', 'Limite respectée'],
      rows: [
        ['Éclairage séjour', '6 plafonniers', '≤ 8 points'],
        ['Éclairage pièces', 'cuisine 2, couloir 2, SdB 1, chambres 3', '8 points'],
        ['Éclairage extérieur', '6 lampes', '≤ 8 points'],
        ['Prises séjour + SdB', '5 emplacements', '≤ 8 emplacements'],
        ['Prises chambres', '6 emplacements', '≤ 8 emplacements'],
        ['Prises cuisine', '3 emplacements doubles', 'circuit réservé au plan de travail'],
        ['Spécialisés', 'four, lave-linge, chauffe-eau, 4 clims, pompe', 'un circuit par appareil'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Vous remarquez que les chambres et le séjour sont sur des circuits différents. Si un appareil défectueux fait sauter le séjour pendant une soirée, les enfants qui dorment gardent leur lumière et leur clim.',
    },
    { type: 'fiche', id: 'lighting-circuits-sockets', why: 'Types d’interrupteurs, implantation des prises, règles de regroupement en circuits.' },
    {
      type: 'regional',
      text: 'La NF C 15-100, utilisée dans la plupart des pays francophones, fixe des règles précises pour le logement : au plus 8 points lumineux par circuit d’éclairage (câble 1,5 mm²), des circuits de prises en 2,5 mm² protégés à 20 A, et des nombres minimaux de prises par pièce (par exemple 3 par chambre et 6 dans la cuisine, dont 4 au-dessus du plan de travail). Vérifiez l’édition en vigueur et ce qu’exige le bureau de contrôle local.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'On part d’un éclairement (lux) et on calcule le nombre de luminaires : N = E × A / (F × UF × MF).',
        'Interrupteurs côté poignée ; va-et-vient dès qu’une pièce a deux entrées.',
        'Les prises suivent le mobilier ; les gros appareils ont chacun un circuit spécialisé.',
        'On limite le nombre de points par circuit et on sépare les pièces pour qu’une panne reste locale.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'La cuisine fait 4 m × 3 m. Avec 150 lux en éclairage général et les mêmes plafonniers (2 000 lm, UF 0,6, MF 0,8), combien en faut-il ?',
      solution: [
        'N = (150 × 12) / (2 000 × 0,6 × 0,8) = 1 800 / 960 ≈ 1,9 → 2 plafonniers.',
        'Pour atteindre 200 à 300 lux sur le plan de travail, on ajoute une réglette LED sous les meubles hauts, branchée sur le circuit des prises de la cuisine.',
      ],
    },
    {
      type: 'exercise',
      question: 'Esther voudrait brancher le congélateur sur le même circuit que le lave-linge. Qu’en pensez-vous ?',
      solution: [
        'Le lave-linge a un circuit spécialisé : il ne doit alimenter que lui.',
        'De plus, si le lave-linge provoque un déclenchement (fuite d’eau, défaut de résistance), le congélateur s’arrêterait sans que personne ne le remarque, et les aliments seraient perdus.',
        'Le congélateur reste sur le circuit des prises de la cuisine.',
      ],
    },
  ],
};
