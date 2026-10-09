import { TopicContent } from '../../types';

export const abcControlContent: TopicContent = {
  title: 'Régulation : du tout-ou-rien au PID et à la GTB',
  subtitle: 'Actions de régulation, automates, entrées/sorties, gestion technique du bâtiment, protocoles et sondes',
  blocks: [
    {
      type: 'text',
      text: "Réguler, c’est maintenir une grandeur (température, humidité, pression, débit) à sa consigne malgré les perturbations. Le régulateur compare la mesure à la consigne et agit sur un actionneur (compresseur, vanne, volet, ventilateur). Une bonne régulation fait le confort… et une bonne part des économies.",
    },
    { type: 'illustration', name: 'tech-pid', caption: 'Tout ou rien, proportionnel, proportionnel-intégral : trois réponses à la même consigne' },

    { type: 'heading', text: 'Les actions de régulation' },
    {
      type: 'table',
      headers: ['Action', 'Fonctionnement', 'Résultat'],
      rows: [
        ['Tout ou rien (TOR)', 'marche/arrêt autour d’une consigne et d’un différentiel', 'simple, mais la température oscille'],
        ['Proportionnelle (P)', 'sortie proportionnelle à l’écart, sur une « bande proportionnelle »', 'stable mais avec un écart résiduel ; trop vive, elle fait « pomper »'],
        ['Intégrale (I)', 'ajoute l’historique des écarts dans le temps (temps d’intégration en s)', 'annule l’écart résiduel ; toujours associée à P (PI)'],
        ['Dérivée (D)', 'réagit à la vitesse de variation', 'anticipe les dépassements ; utile sur l’air, à faible inertie'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Bande proportionnelle (BP) : plage d’écart sur laquelle la sortie passe de 0 à 100 %. Une BP nulle revient au tout-ou-rien.',
        'Exprimée en gain : sortie = gain × écart. Exemple : consigne 22 °C, mesure 20 °C, gain 20 → 2 × 20 = 40 %.',
      ],
    },
    {
      type: 'warning',
      text: "Les exemples de bande proportionnelle du livre sont confus : une sortie qui varie « de 10 à 20 V » (les signaux standard sont 0–10 V ou 2–10 V), et un calcul en % qui divise par la mesure (« (26 − 24) / (26 × 20 %) »). La définition usuelle est plus simple : avec une BP de X kelvins, sortie (%) = écart / X × 100. Exemple : BP de 4 K et écart de 2 K → sortie 50 %.",
    },

    { type: 'heading', text: 'Analogique ou numérique' },
    {
      type: 'bullets',
      items: [
        'Régulateur analogique : basé sur un pont de Wheatstone ; signal proportionnel à l’écart ; non communicant ; actions P, PI ou PID.',
        'Régulateur numérique (automate) : un microprocesseur exécute un programme (P, PI, PID ou algorithmes plus élaborés), garde sa configuration en mémoire, communique par un bus (2 fils).',
      ],
    },
    {
      type: 'table',
      headers: ['Type', 'Signal', 'Exemples'],
      rows: [
        ['AI (entrée analogique)', 'valeur continue', 'sondes d’ambiance, de soufflage, capteurs de pression'],
        ['DI (entrée TOR)', 'contact ouvert/fermé', 'pressostats HP/BP, pressostat d’air, sécurités'],
        ['AO (sortie analogique)', '0–10 V', 'vannes 3 voies, volets, triacs'],
        ['DO (sortie TOR)', 'marche/arrêt', 'compresseurs, pompes, ventilateurs'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Fonctions d’un automate : écran et alarmes, calendrier et horloge, accès protégé par mot de passe, extensions (télésurveillance, Internet).',
        'Régulation électromécanique encore très présente pour l’anti-courts-cycles, le démarrage en cascade, la permutation des compresseurs.',
      ],
    },

    { type: 'heading', text: 'La GTB et les protocoles' },
    {
      type: 'bullets',
      items: [
        'GTC (gestion technique centralisée) : pilote les équipements thermiques (chauffage, climatisation, froid). GTB (gestion technique du bâtiment) : tout ce qui est électrique (éclairage, accès, incendie, arrosage…).',
        'Un superviseur (PC) collecte les données des automates, affiche des synoptiques, enregistre les courbes et les alarmes, et envoie des ordres (programmations horaires, consignes, délestage).',
        'Gains : économies d’énergie, confort, coûts d’exploitation, dépannage à distance, surveillance 24 h/24, alarmes par mail ou SMS. Dans un supermarché, chauffage, climatisation et froid alimentaire pèsent plus de la moitié de la consommation.',
        'Des équipements de marques différentes dialoguent via des protocoles ouverts, avec des passerelles si besoin.',
      ],
    },
    {
      type: 'table',
      headers: ['Protocole', 'Usage'],
      rows: [
        ['BACnet', 'standard ASHRAE de la GTB : climatisation, chauffage, ventilation, accès, incendie (Ethernet, RS232, RS485)'],
        ['Modbus', 'simple, public, maître/esclaves : automates, groupes de froid, climatiseurs, variateurs'],
        ['M-Bus', 'comptage d’énergie, débit, température'],
        ['KNX (EIB)', 'domotique et bâtiments tertiaires : éclairage, volets, chauffage'],
        ['LonWorks, TCP/IP', 'réseaux de bâtiment, Internet'],
      ],
    },

    { type: 'heading', text: 'Les sondes' },
    {
      type: 'bullets',
      items: [
        'Thermistances CTN (NTC) : la résistance DIMINUE quand la température monte ; les plus utilisées pour mesurer et réguler.',
        'Thermistances CTP (PTC) : la résistance AUGMENTE fortement dans une plage étroite ; servent surtout de protection thermique (moteurs).',
        'Sondes à résistance de platine PT100 / PT1000 : 100 Ω ou 1 000 Ω à 0 °C, linéaires et précises.',
        'Sonde COV (qualité d’air) : semi-conducteur chauffé dont la résistance varie avec les composés organiques volatils (fumée, odeurs) ; pilote la ventilation.',
        'Sonde de CO₂ : dose l’air neuf selon l’occupation réelle.',
      ],
    },
    {
      type: 'warning',
      text: "Le livre range les PT100 et PT1000 parmi les thermistances CTP. Ce sont des sondes à résistance de PLATINE (RTD) : leur résistance augmente avec la température, mais de façon presque linéaire et sur une très large plage, rien à voir avec la forte non-linéarité d’une CTP de protection.",
    },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un régulateur P a une bande proportionnelle de 3 K pour une vanne 0–10 V. Consigne 24 °C, mesure 25,2 °C (en froid). Quelle tension de commande ?',
      solution: ['Écart = 1,2 K ; sortie = 1,2 / 3 = 40 %.', 'Tension = 40 % × 10 V = 4 V : la vanne d’eau glacée est ouverte à 40 %.'],
    },
    {
      type: 'exercise',
      question: 'Classez en AI, DI, AO ou DO : sonde de reprise, pressostat HP, vanne 3 voies proportionnelle, contacteur de pompe, capteur de pression de gaine.',
      solution: ['Sonde de reprise : AI.', 'Pressostat HP : DI.', 'Vanne 3 voies 0–10 V : AO.', 'Contacteur de pompe : DO.', 'Capteur de pression de gaine : AI.'],
    },
  ],
};
