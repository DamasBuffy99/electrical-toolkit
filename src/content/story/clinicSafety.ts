import { TopicContent } from '../types';

export const clinicSafetyContent: TopicContent = {
  title: 'Éclairage de sécurité et essais périodiques',
  subtitle: 'Si tout s’éteint, il faut encore pouvoir évacuer. Et un secours qu’on n’essaie jamais finit par ne pas marcher le jour où on en a besoin. Dernière étape : la sécurité, puis la vie de l’installation.',
  blocks: [
    { type: 'scene', text: 'Mois 5 · Avant l’ouverture de la clinique' },
    { type: 'illustration', name: 'clinic-tiers', props: { highlight: 'safety' }, caption: 'Les blocs autonomes ont leur propre batterie : ils ne dépendent d’aucune autre source' },

    { type: 'heading', text: '1 · L’éclairage de sécurité' },
    {
      type: 'text',
      text: 'L’éclairage de sécurité est indépendant de tout le reste : chaque bloc autonome (BAES) contient sa propre batterie et s’allume instantanément quand son circuit d’alimentation disparaît. Même si les groupes et les onduleurs étaient en panne, il resterait allumé au moins une heure.',
    },
    {
      type: 'table',
      headers: ['Type', 'Rôle', 'Où'],
      rows: [
        ['Balisage d’évacuation', 'indiquer le chemin et les sorties (pictogramme vert)', 'au-dessus des portes de sortie, à chaque changement de direction'],
        ['Éclairage d’ambiance (anti-panique)', 'éviter le noir total dans les grands locaux', 'halls, salles d’attente'],
        ['Éclairage des zones à risque', 'permettre de terminer un geste dangereux', 'bloc, réanimation, local des groupes, TGBT'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'Pourquoi des batteries dans chaque bloc, alors qu’on a déjà des groupes et des onduleurs ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Parce que l’éclairage de sécurité doit fonctionner dans le pire des cas : un incendie dans le local technique qui détruit le TGBT, les groupes et les onduleurs en même temps. Une petite batterie dans chaque bloc ne dépend de rien d’autre. C’est le dernier filet de sécurité.',
    },
    { type: 'fiche', id: 'lighting', why: 'Conception de l’éclairage, y compris l’éclairage de sécurité.' },

    { type: 'heading', text: '2 · Le calendrier des essais' },
    {
      type: 'text',
      text: 'Awa remet à la clinique un registre de sécurité et un calendrier d’essais. Elle insiste : ces essais font partie de l’installation, au même titre que les câbles.',
    },
    {
      type: 'table',
      headers: ['Fréquence', 'Essai', 'Pourquoi'],
      rows: [
        ['Chaque semaine', 'démarrage des groupes à vide, contrôle visuel (niveaux, fuites, batteries de démarrage)', 'détecter tôt une batterie faible ou une fuite'],
        ['Chaque mois', 'coupure simulée du réseau : bascule réelle, groupes en charge pendant au moins 30 minutes', 'vérifier toute la chaîne : détection, démarrage, inverseur, délestage, reprise'],
        ['Chaque mois', 'test fonctionnel des BAES (bouton test ou télécommande)', 'chaque bloc doit s’allumer'],
        ['Chaque année', 'autonomie complète des BAES, test de décharge des batteries d’onduleur', 'les batteries vieillissent sans prévenir'],
        ['Chaque année', 'thermographie infrarouge des tableaux, contrôle des différentiels et des CPI', 'un serrage desserré chauffe avant de casser'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Serge (technicien biomédical)',
      role: 'team',
      text: 'Une coupure simulée chaque mois, avec des patients ? Ce n’est pas risqué ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Le vrai risque, c’est de découvrir une panne pendant une vraie coupure, à 3 heures du matin. On programme l’essai à une heure calme, on prévient les équipes, le niveau vital reste sur onduleur, et on arrête l’essai au moindre problème. C’est la seule façon d’être sûr que tout marchera le jour J.',
    },
    { type: 'fiche', id: 'generator-ups-ats', why: 'Maintenance et essais des groupes, inverseurs et onduleurs.' },
    {
      type: 'regional',
      text: 'Un contrat de maintenance avec le fournisseur des groupes (vidanges, filtres, batteries de démarrage, analyses de gazole) et un stock de pièces critiques sur place font toute la différence, surtout quand le fournisseur est à plusieurs heures de route. Notez chaque essai et chaque intervention dans le registre : c’est aussi ce que demanderont les inspecteurs sanitaires.',
    },

    { type: 'heading', text: 'Bilan du parcours' },
    {
      type: 'text',
      text: 'Avec la Clinique Espoir, Awa a bouclé quatre projets de difficulté croissante. Le fil est toujours le même : comprendre le besoin, estimer la puissance, organiser la distribution, protéger les personnes et les équipements, dimensionner les câbles, prévoir le secours, puis vérifier et entretenir. Ce qui change d’un projet à l’autre, c’est l’exigence.',
    },
    {
      type: 'table',
      headers: ['Projet', 'Ce qu’il a ajouté'],
      rows: [
        ['1 · Villa Mensah', 'les bases : bilan, circuits, tableau, différentiels, terre TT, câbles, chute de tension, réception'],
        ['2 · Résidence Les Palmiers', 'le collectif : foisonnement, poste MT/BT, colonnes montantes, court-circuit, groupe et inverseur'],
        ['3 · Usine Tropica', 'les moteurs : démarrages, protections, déclassement des câbles, sélectivité, cos φ'],
        ['4 · Clinique Espoir', 'la continuité : niveaux de charges, redondance N+1, onduleurs, IT médical, sécurité, essais'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Un dernier conseil, qui vaut pour les quatre projets : expliquez toujours au client le pourquoi de vos choix. Un client qui comprend pourquoi le câble de sa pompe fait 4 mm² ne laissera personne le remplacer par du 2,5 mm².',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'L’éclairage de sécurité est autonome (batterie dans chaque bloc) et indépendant des autres secours.',
        'Un secours non essayé n’est pas un secours : essais hebdomadaires, mensuels en charge, annuels approfondis.',
        'Tout se consigne dans un registre de sécurité.',
        'Le métier se résume à une méthode constante, appliquée avec une exigence qui croît avec l’enjeu.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Lors de l’essai mensuel, le groupe n° 1 démarre mais l’inverseur ne bascule pas. Qu’apprend-on, et pourquoi est-ce une bonne nouvelle ?',
      solution: [
        'La chaîne de secours a un maillon défaillant : l’inverseur (commande, bobine, détection de tension du groupe…).',
        'C’est une bonne nouvelle de l’apprendre pendant un essai programmé, avec le réseau disponible et les équipes prévenues, plutôt que pendant une vraie coupure de nuit. On répare, puis on refait l’essai.',
      ],
    },
    {
      type: 'exercise',
      question: 'Pour chacun des quatre projets, citez la principale protection des personnes et expliquez pourquoi elle diffère.',
      solution: [
        'Villa et résidence : schéma TT avec différentiels 30 mA, on coupe dès la moindre fuite.',
        'Usine : mêmes principes, avec en plus des sectionneurs de proximité pour consigner les machines pendant l’entretien.',
        'Clinique : au bloc, IT médical avec contrôleur d’isolement, car couper un appareil de survie serait plus dangereux que le premier défaut lui-même.',
      ],
    },
  ],
};
