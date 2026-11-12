import { TopicContent } from '../types';

export const clinicLoadsContent: TopicContent = {
  title: 'Classer les charges : vital, essentiel, normal',
  subtitle: 'Dans une clinique, toutes les prises ne se valent pas. Avant de choisir le moindre groupe ou onduleur, Awa classe chaque équipement selon ce qu’une coupure provoquerait.',
  blocks: [
    { type: 'scene', text: 'Mois 1 · Clinique Espoir, bureau de la directrice' },
    {
      type: 'objectives',
      items: [
        'Classer les charges d’un établissement de santé : vital, essentiel, normal.',
        'Faire le bilan par niveau.',
        'Traduire ce classement en tableaux séparés.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '18 kW', label: 'niveau vital (0 s)' },
        { value: '107 kW', label: 'niveau essentiel (≤ 15 s)' },
        { value: '118 kVA', label: 'à secourir' },
        { value: '400 kVA', label: 'transformateur' },
      ],
    },
    {
      type: 'text',
      text: 'Le Dr Aïcha Bello ouvre la Clinique Espoir : 30 lits d’hospitalisation, deux salles d’opération, quatre lits de réanimation, un laboratoire, une radiologie et une stérilisation. Elle a travaillé dans un hôpital où une coupure en pleine opération a laissé l’équipe dans le noir pendant de longues secondes. Elle en parle encore.',
    },
    { type: 'illustration', name: 'clinic-tiers', props: { highlight: 'all' }, caption: 'Les niveaux de continuité de la clinique : normal, essentiel, vital, sécurité' },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'Je veux que rien ne s’arrête, jamais. Mettez un énorme groupe et des onduleurs partout.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Je comprends, et c’est la bonne exigence. Mais « partout » coûterait une fortune en équipements et en gazole, pour secourir aussi la clim des bureaux et le lave-linge. Je vous propose de raisonner comme un médecin trie ses patients : que se passe-t-il, pour chaque équipement, si le courant disparaît une seconde ? Dix secondes ? Une heure ?',
    },

    { type: 'heading', text: '1 · Les trois niveaux de continuité' },
    {
      type: 'table',
      headers: ['Niveau', 'Coupure tolérée', 'Exemples', 'Source de secours'],
      rows: [
        ['Vital', 'aucune (0 s)', 'appareils du bloc, respirateurs et moniteurs de réanimation, informatique médicale', 'onduleur, lui-même secouru par les groupes'],
        ['Essentiel', 'quelques secondes (≤ 15 s)', 'stérilisation, laboratoire, réfrigérateurs à vaccins, ascenseur-lit, fluides médicaux, éclairage des circulations, traitement d’air du bloc', 'groupes électrogènes via l’inverseur'],
        ['Normal', 'peut attendre le retour du réseau', 'climatisation de confort, cuisine, buanderie, prises des bureaux, radiologie', 'aucune : délesté pendant les coupures'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'La radiologie en « normal » ? Et si un patient arrive pendant une coupure ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Bonne objection. L’appareil de radio appelle un très fort courant pendant une fraction de seconde : sur groupe, il ferait chuter la tension de tout le niveau essentiel. Je propose un compromis : la radio reste sur le réseau, et un interrupteur de reprise manuel permet au technicien de la basculer sur les groupes en cas d’urgence, une fois les autres charges stabilisées.',
    },

    { type: 'heading', text: '2 · Le bilan par niveau' },
    {
      type: 'table',
      headers: ['Niveau', 'Puissance installée', 'Principaux postes'],
      rows: [
        ['Vital', '18 kW', 'bloc 10 kW, réanimation 6 kW, informatique 2 kW'],
        ['Essentiel (hors vital)', '107 kW', 'stérilisation 24, clim bloc et réa 20, CTA du bloc 15, ascenseur-lit 15, fluides médicaux 11, labo 8, pompes 6, éclairage circulations 5, frigos 3'],
        ['Normal', '≈ 200 kW', 'clim de confort 100, cuisine et buanderie 40, radiologie 30, prises et éclairage 30'],
        ['Total', '≈ 325 kW', ''],
      ],
    },
    { type: 'formula', text: 'Demande totale ≈ 0,7 × 325 ≈ 230 kW  →  S ≈ \\frac{230}{0,85} ≈ 270 kVA  →  transformateur 400 kVA' },
    { type: 'formula', text: 'Niveaux vital + essentiel : 0,8 × (18 + 107) = 100 kW  →  S ≈ \\frac{100}{0,85} ≈ 118 kVA' },
    {
      type: 'text',
      text: 'Le chiffre décisif est le second : 118 kVA à secourir, et non 270. C’est lui qui fixera la taille des groupes à l’étape suivante.',
    },
    { type: 'fiche', id: 'load-estimation', why: 'Estimation par usage et par catégorie de charge.' },

    { type: 'heading', text: '3 · Des tableaux séparés par niveau' },
    {
      type: 'text',
      text: 'Le classement se traduit directement dans l’architecture électrique : chaque niveau a ses propres tableaux, repérés par une couleur. Une prise vitale est rouge, une prise essentielle orange, une prise normale blanche. Le soignant sait d’un coup d’œil où brancher un appareil qui ne doit jamais s’arrêter.',
    },
    {
      type: 'bullets',
      items: [
        'TGBT normal : tout ce qui peut être délesté.',
        'TGBT secouru (essentiel) : alimenté par le réseau ou, via l’inverseur, par les groupes.',
        'Tableaux vitaux : derrière les onduleurs, eux-mêmes alimentés par le TGBT secouru.',
        'Dans chaque chambre et au bloc : prises de couleurs différentes selon leur niveau.',
      ],
    },
    { type: 'fiche', id: 'panel-schedule', why: 'Organiser les circuits par tableau et par catégorie.' },
    {
      type: 'regional',
      text: 'Avec des coupures fréquentes, les groupes d’une clinique peuvent tourner plusieurs heures par jour : le coût du gazole devient un poste majeur. Bien séparer le normal (délesté) de l’essentiel (secouru) est la meilleure économie. Beaucoup d’établissements ajoutent du solaire avec batteries sur le niveau essentiel pour réduire les heures de groupe.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'On classe chaque équipement selon la conséquence d’une coupure : vital (0 s), essentiel (≤ 15 s), normal (délestable).',
        'Le niveau détermine la source : onduleur, groupes, ou réseau seul.',
        'On secourt les niveaux vital et essentiel, pas tout le bâtiment.',
        'Chaque niveau a ses tableaux et ses prises repérées par couleur.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Classez : pousse-seringue en réanimation, climatiseur d’un bureau administratif, réfrigérateur de vaccins, éclairage d’un couloir, lave-linge.',
      solution: [
        'Pousse-seringue : vital (il ne doit pas s’arrêter, même une seconde).',
        'Réfrigérateur de vaccins : essentiel (quelques secondes sans courant ne gâchent pas les vaccins, quelques heures oui).',
        'Éclairage des couloirs : essentiel.',
        'Clim du bureau et lave-linge : normal, délestés pendant les coupures.',
      ],
    },
    {
      type: 'exercise',
      question: 'Pourquoi ne pas mettre la stérilisation (24 kW) sur onduleur, puisqu’elle est importante ?',
      solution: [
        'Un cycle d’autoclave supporte une interruption de quelques secondes : il peut reprendre ou être relancé. Le niveau essentiel suffit.',
        'La mettre sur onduleur doublerait sa taille et ses batteries, pour un gain nul. L’onduleur est réservé à ce qui ne tolère aucune coupure.',
      ],
    },
  ],
};
