import { TopicContent } from '../types';

export const buildingFeasibilityContent: TopicContent = {
  title: 'Un immeuble, c’est une autre échelle',
  subtitle: 'Seize appartements, un ascenseur, des pompes, un parking. Avant même les plans détaillés, Fatou Sow doit savoir si le réseau peut l’alimenter, et ce que cela va lui coûter.',
  blocks: [
    { type: 'scene', text: 'Mois 1 · Bureau de Fatou Sow, promotrice' },
    {
      type: 'objectives',
      items: [
        'Estimer la puissance d’un immeuble avant les plans détaillés.',
        'Appliquer le foisonnement entre logements.',
        'Interroger le distributeur sur le raccordement.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '16 × 9 kVA', label: 'logements' },
        { value: '76 kVA', label: 'logements après foisonnement' },
        { value: '19 kVA', label: 'services communs' },
        { value: '95 kVA', label: 'demande totale' },
      ],
    },
    {
      type: 'text',
      text: 'Fatou Sow a acheté un terrain pour construire la Résidence Les Palmiers : un rez-de-chaussée avec parking et locaux techniques, puis quatre étages de quatre appartements (des F3 d’environ 90 m²), un ascenseur et une bâche à eau avec surpresseur. Elle a vu la villa des Mensah et veut le même sérieux, mais elle a surtout une question d’argent.',
    },
    { type: 'illustration', name: 'building-riser', props: { highlight: 'all' }, caption: 'La Résidence Les Palmiers : R+4, 16 logements, locaux techniques au rez-de-chaussée' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Mon budget est serré. Pour l’électricité, je pensais faire comme pour une maison : un compteur par appartement et c’est tout. Pourquoi m’avez-vous demandé ce rendez-vous si tôt ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Parce qu’à cette taille, la première question n’est pas technique, elle est administrative : le distributeur peut-il vous fournir assez de puissance avec son réseau actuel ? Si la réponse est non, il faudra construire un poste de transformation, et réserver dès maintenant un local au rez-de-chaussée. Si on le découvre après le permis de construire, on perd des mois.',
    },

    { type: 'heading', text: '1 · Estimer vite, avant les plans détaillés' },
    {
      type: 'text',
      text: 'Awa n’a pas encore la liste des appareils de chaque appartement. Elle part du « logement type » et applique la même méthode que pour la villa, puis multiplie, avec une nuance capitale.',
    },
    {
      type: 'table',
      headers: ['Usage d’un F3', 'Installé', 'Coefficient', 'Retenu'],
      rows: [
        ['Éclairage', '0,3 kW', '1', '0,30 kW'],
        ['Prises', '2,4 kW', '0,4', '0,96 kW'],
        ['Four', '2,5 kW', '0,5', '1,25 kW'],
        ['Lave-linge', '2,0 kW', '0,5', '1,00 kW'],
        ['Chauffe-eau', '1,5 kW', '1', '1,50 kW'],
        ['3 climatiseurs', '3,0 kW', '0,75', '2,25 kW'],
        ['Total', '11,7 kW', '', '7,26 kW ≈ 8,1 kVA → abonnement 9 kVA'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Donc 16 appartements × 9 kVA, ça fait 144 kVA ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Non, et c’est la bonne nouvelle. Seize familles n’allument pas toutes leur four et leur clim à la même minute. Plus il y a de logements, plus leurs pointes se « diluent ». On applique un coefficient de foisonnement entre logements : pour 15 à 19 logements, on retient environ 0,53. Vos 16 appartements pèsent donc comme 8,5 appartements à pleine puissance.',
    },
    { type: 'formula', text: 'Logements : 16 × 9 kVA × 0,53 ≈ 76 kVA' },
    {
      type: 'table',
      headers: ['Nombre de logements', 'Coefficient de foisonnement'],
      rows: [
        ['2 à 4', '1'],
        ['5 à 9', '0,78'],
        ['10 à 14', '0,63'],
        ['15 à 19', '0,53'],
        ['20 à 24', '0,49'],
        ['25 à 29', '0,46'],
        ['50 et plus', '0,40'],
      ],
    },

    { type: 'heading', text: '2 · Les services communs' },
    {
      type: 'table',
      headers: ['Service commun', 'Puissance', 'Remarque'],
      rows: [
        ['Ascenseur 8 personnes', '≈ 13 kVA', 'moteur de 11 kW avec variateur'],
        ['Surpresseur', '≈ 5,4 kVA', '2 pompes de 4 kW, une seule tourne, l’autre en secours'],
        ['Éclairage halls, escaliers, parking', '2 kVA', 'LED, minuteries et détecteurs'],
        ['Portail, interphone, vidéosurveillance', '1 kVA', ''],
        ['Prises de service (ménage, entretien)', '2 kVA', ''],
        ['Total, coefficient 0,8', '23,4 × 0,8 ≈ 19 kVA', ''],
      ],
    },
    { type: 'formula', text: 'S_{totale} ≈ 76 + 19 = 95 kVA' },
    { type: 'fiche', id: 'demand-diversity', why: 'Facteurs de demande et de diversité, et leur cascade dans un bâtiment.' },
    { type: 'fiche', id: 'load-estimation', why: 'Méthodes d’estimation globale (VA/m², par logement, par usage).' },

    { type: 'heading', text: '3 · La réponse du distributeur' },
    { type: 'scene', text: 'Mois 2 · Agence du distributeur' },
    {
      type: 'text',
      text: 'Awa dépose une demande de puissance de 95 kVA, avec une réserve pour l’avenir. Trois semaines plus tard, la réponse arrive : le transformateur du quartier est déjà presque saturé. Pour une telle puissance, la Résidence doit avoir son propre poste de transformation, alimenté par le réseau moyenne tension (MT) qui passe dans la rue.',
    },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Un transformateur ! C’est une catastrophe pour mon budget ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'C’est un investissement important, mais prévisible, et il a des avantages : vous achetez l’énergie au tarif moyenne tension, souvent moins cher au kWh pour les services communs ; et la Résidence ne dépend plus d’un poste de quartier surchargé, donc moins de chutes de tension pour vos locataires. L’essentiel, c’est qu’on le sache maintenant : je demande à l’architecte de réserver un local de 4 m × 3 m au rez-de-chaussée, en façade, accessible depuis la rue.',
    },
    {
      type: 'note',
      text: 'Ce cas est fréquent : au-delà d’un certain niveau de puissance (le seuil dépend du distributeur et de l’état de son réseau, souvent autour de 100 kVA), un bâtiment est alimenté en moyenne tension avec son propre poste. C’est exactement pour cela que l’estimation de puissance se fait au tout début du projet.',
    },
    {
      type: 'regional',
      text: 'Les réseaux MT de distribution sont souvent en 15 ou 20 kV (parfois 33 kV en zone rurale). Le distributeur fixe les règles du poste privé : modèle de cellules, emplacement du comptage, accès permanent pour ses agents. Les délais d’étude et de raccordement MT se comptent souvent en mois : la demande part en même temps que le permis de construire.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'À l’échelle d’un immeuble, la première question est la faisabilité auprès du distributeur.',
        'On estime un logement type, puis on applique un coefficient de foisonnement entre logements (0,53 pour 15 à 19).',
        'Les services communs (ascenseur, pompes, éclairage) s’ajoutent avec leur propre coefficient.',
        'Au-delà d’un seuil fixé par le distributeur, il faut un poste MT/BT : on réserve le local dès l’esquisse.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Fatou envisage d’ajouter un 5e étage (20 logements au total). Recalculez la puissance des logements.',
      solution: [
        'Pour 20 logements, le coefficient passe à 0,49.',
        '20 × 9 × 0,49 ≈ 88 kVA, contre 76 kVA pour 16 logements.',
        'Quatre logements de plus (+25 %) n’ajoutent que 12 kVA (+16 %) : le foisonnement augmente avec le nombre.',
      ],
    },
    {
      type: 'exercise',
      question: 'Pourquoi ne pas appliquer le coefficient 0,53 aux services communs ?',
      solution: [
        'Le coefficient 0,53 décrit le comportement de 16 familles indépendantes. Les services communs ne sont pas des logements.',
        'L’ascenseur et le surpresseur peuvent fonctionner au moment de la pointe du soir, quand tout le monde rentre : on leur applique un coefficient propre, plus élevé (0,8 ici).',
      ],
    },
  ],
};
