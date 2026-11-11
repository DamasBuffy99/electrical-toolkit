import { TopicContent } from '../types';

export const buildingBackupContent: TopicContent = {
  title: 'Le secours : groupe électrogène et inverseur',
  subtitle: 'Fatou veut que l’ascenseur et l’eau fonctionnent pendant les coupures. Faut-il secourir tout l’immeuble ? Awa compare, dimensionne le groupe et explique pourquoi l’inverseur ne doit jamais se tromper.',
  blocks: [
    { type: 'scene', text: 'Mois 5 · Bureau de Fatou Sow' },
    { type: 'illustration', name: 'building-riser', props: { highlight: 'backup' }, caption: 'Le groupe et l’inverseur secourent le tableau des services généraux' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Mes futurs locataires me demandent tous : « Il y a un groupe ? ». Est-ce qu’on peut secourir tout l’immeuble ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'On peut, mais regardez les chiffres. Tout l’immeuble, c’est 95 kVA : il faudrait un groupe d’environ 125 kVA, qui consommerait beaucoup de gazole pour alimenter des climatiseurs. Les services communs seuls, c’est environ 22 kVA : un groupe de 40 kVA suffit. Je vous propose de secourir ce qui est vital pour tous (ascenseur, eau, éclairage des communs, sécurité) et de préparer chaque logement pour un petit onduleur individuel.',
    },

    { type: 'heading', text: '1 · Ce que le groupe doit alimenter' },
    {
      type: 'table',
      headers: ['Charge secourue', 'Puissance'],
      rows: [
        ['Ascenseur (avec variateur)', '11 kW'],
        ['Une pompe du surpresseur', '4 kW'],
        ['Éclairage des communs', '2 kW'],
        ['Portail, interphone, vidéosurveillance', '1 kW'],
        ['Prises de service (limitées)', '1 kW'],
        ['Total', '19 kW, soit 19 / 0,85 ≈ 22,4 kVA'],
      ],
    },
    {
      type: 'text',
      text: 'Un groupe électrogène supporte mal les appels de courant des moteurs : sa tension s’effondre. Awa prend une marge de 25 % pour les démarrages (le variateur de l’ascenseur aide beaucoup), puis tient compte de la chaleur : à 40 °C, le moteur diesel donne un peu moins que sa puissance de catalogue.',
    },
    { type: 'formula', text: 'S_{groupe} ≥ \\frac{22,4 × 1,25}{0,9} ≈ 31 kVA  →  groupe normalisé de 40 kVA' },
    {
      type: 'note',
      text: 'Surdimensionner un groupe n’est pas une bonne idée non plus : un diesel qui tourne longtemps sous 30 % de charge s’encrasse (on parle de « wet stacking »). À 22 kVA sur 40, il travaille vers 55 % : c’est confortable.',
    },
    { type: 'formula', text: 'Autonomie : cuve de 200 L, consommation ≈ 5 L/h à mi-charge  →  ≈ 40 heures' },

    { type: 'heading', text: '2 · L’inverseur de sources' },
    {
      type: 'text',
      text: 'L’inverseur automatique (ATS) est un commutateur qui alimente le tableau des services généraux soit par le réseau, soit par le groupe, jamais par les deux. Sa séquence est toujours la même :',
    },
    {
      type: 'bullets',
      items: [
        'Le réseau disparaît : l’inverseur attend 2 à 5 secondes, pour ne pas réagir à une simple micro-coupure.',
        'Il donne l’ordre de démarrage au groupe, qui atteint sa tension et sa fréquence en une dizaine de secondes.',
        'Il bascule le tableau sur le groupe : l’ascenseur et les pompes repartent.',
        'Le réseau revient : l’inverseur attend qu’il soit stable quelques minutes, rebascule, puis laisse le groupe refroidir à vide avant de l’arrêter.',
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Pourquoi ce verrouillage « jamais les deux » est-il si important ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Si le groupe était raccordé au réseau en même temps, il enverrait sa tension dans les lignes du distributeur, que des techniciens croient hors tension pendant une réparation. C’est un risque mortel pour eux. L’inverseur a donc un double verrouillage, mécanique et électrique : physiquement, les deux contacts ne peuvent pas être fermés ensemble.',
    },
    { type: 'fiche', id: 'generator-ups-ats', why: 'Groupes électrogènes, inverseurs (ATS), onduleurs : principes et dimensionnement.' },

    { type: 'heading', text: '3 · Et les appartements ?' },
    {
      type: 'text',
      text: 'Dans chaque logement, Awa fait câbler un circuit « prioritaire » séparé dans le tableau : éclairage, réfrigérateur, box internet et une prise par pièce. Aujourd’hui, il est alimenté normalement. Le jour où un locataire installe un petit onduleur avec batteries (ou du solaire), il suffit de brancher ce seul circuit derrière, sans toucher au reste.',
    },
    {
      type: 'regional',
      text: 'Dans les immeubles, le gazole du groupe est souvent la première source de conflits de charges : un compteur horaire et un registre de ravitaillement évitent bien des discussions. Prévoyez aussi un essai mensuel de 30 minutes en charge réelle : un groupe qui ne tourne jamais ne démarre pas le jour de la coupure.',
    },

    { type: 'heading', text: 'Bilan du projet 2' },
    {
      type: 'text',
      text: 'La Résidence Les Palmiers a fait passer Awa à l’échelle du bâtiment collectif : faisabilité auprès du distributeur, foisonnement entre logements, poste MT/BT, colonnes montantes et comptage, moteurs des services communs, court-circuit et pouvoir de coupure, secours par groupe et inverseur. Prochaine étape : une usine, où les moteurs ne sont plus l’exception mais la règle.',
    },
    {
      type: 'bullets',
      items: [
        'On secourt d’abord ce qui est vital pour tous, pas forcément tout le bâtiment.',
        'Un groupe se dimensionne avec une marge pour les démarrages de moteurs et un déclassement pour la chaleur, sans tomber sous 30 % de charge.',
        'L’inverseur ne met jamais le groupe et le réseau en parallèle : double verrouillage obligatoire.',
        'Un circuit prioritaire pré-câblé dans chaque logement prépare les onduleurs individuels.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Fatou veut finalement secourir aussi l’éclairage et les réfrigérateurs des 16 logements, soit environ 0,5 kW par logement. Le groupe de 40 kVA suffit-il ?',
      solution: [
        'Ajout : 16 × 0,5 = 8 kW, soit environ 9,4 kVA (cos φ 0,85).',
        'Total : 22,4 + 9,4 ≈ 31,8 kVA ; avec 25 % de marge et le déclassement : 31,8 × 1,25 / 0,9 ≈ 44 kVA.',
        'Le 40 kVA devient juste : il faudrait passer à la taille supérieure (par exemple 50 kVA), ou délester le surpresseur pendant les démarrages de l’ascenseur.',
      ],
    },
    {
      type: 'exercise',
      question: 'Pourquoi l’inverseur attend-il plusieurs minutes avant de rebasculer sur le réseau quand celui-ci revient ?',
      solution: [
        'Après une coupure, le réseau revient souvent de façon instable (plusieurs retours et coupures rapprochés).',
        'Rebasculer trop vite ferait subir à l’ascenseur et aux pompes une série d’arrêts et de redémarrages. On attend que le réseau soit stable avant de quitter le groupe.',
      ],
    },
  ],
};
