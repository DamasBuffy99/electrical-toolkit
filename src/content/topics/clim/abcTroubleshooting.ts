import { TopicContent } from '../../types';

export const abcTroubleshootingContent: TopicContent = {
  title: 'Diagnostic des pannes',
  subtitle: 'Méthode, mesures électriques, lecture des symptômes frigorifiques, compresseur, contaminants et remèdes',
  blocks: [
    {
      type: 'text',
      text: "En dépannage, il ne faut pas confondre vitesse et précipitation : un mauvais diagnostic coûte souvent plus cher que la panne. Commencez par interroger l’utilisateur (depuis quand ? après quoi ? quels bruits ?), puis utilisez méthodiquement vos instruments… et vos sens : la vue, l’ouïe, le toucher.",
    },
    { type: 'illustration', name: 'tech-diagnosis', caption: 'Lire ensemble HP, BP, surchauffe et sous-refroidissement' },

    { type: 'heading', text: 'Pourquoi les compresseurs meurent' },
    {
      type: 'bullets',
      items: [
        'Coups de liquide (liquide aspiré : détendeur trop ouvert, surchauffe trop faible, migration à l’arrêt) et « lavage » de l’huile par le fluide.',
        'Humidité et pollution du circuit : acides, boues, vernis des bobinages attaqué.',
        'Surchauffe trop élevée : le moteur n’est plus refroidi par les gaz aspirés.',
        'Manque d’huile ou mauvais retour d’huile.',
        'Causes électriques : connexions desserrées, manque de phase, sous-tension, démarrages trop fréquents.',
      ],
    },
    { type: 'note', text: 'Après une casse, cherchez TOUJOURS la cause (analyse d’huile, examen du compresseur) : sinon le compresseur neuf subira le même sort quelques semaines plus tard.' },

    { type: 'heading', text: 'Mesures électriques : la méthode' },
    {
      type: 'bullets',
      items: [
        'Tension : voltmètre en PARALLÈLE sur la source ou le récepteur.',
        'Intensité : pince ampèremétrique autour d’UN conducteur (l’ampèremètre en série est peu pratique).',
        'Continuité, résistance : ohmmètre HORS tension (valeur infinie = élément coupé).',
        'Chaîne de sécurité en défaut : une pointe sur le neutre, l’autre déplacée de contact en contact. Aux bornes d’un contact FERMÉ, on lit 0 V ; aux bornes d’un contact OUVERT, on retrouve la tension (230 V) : c’est lui qui coupe.',
        'Isolement au mégohmmètre, hors tension, entre chaque conducteur actif et la terre : ≥ 0,5 MΩ sous 500 V continu pour les circuits de 50 à 500 V (≥ 0,25 MΩ sous 250 V pour < 50 V). La mesure varie avec la température et l’humidité.',
        'Enroulements : en triphasé, trois résistances identiques ; en monophasé, la résistance entre bornes extrêmes = principal + démarrage.',
        'Condensateur : contrôle visuel (pas gonflé), décharge, test au multimètre (la valeur part de 0 vers l’infini) ou mesure directe de capacité.',
      ],
    },

    { type: 'heading', text: 'Les pannes frigorifiques typiques' },
    {
      type: 'table',
      headers: ['Panne', 'Symptômes', 'Causes possibles'],
      rows: [
        ['Manque de charge', 'BP et HP basses, surchauffe forte, sous-refroidissement très faible, voyant qui bulle, courts cycles', 'fuite'],
        ['Excès de charge', 'HP très haute, sous-refroidissement élevé, intensité forte, surchauffe faible', 'erreur de charge'],
        ['Incondensables', 'HP haute, BP haute, rendement faible, sous-refroidissement normal', 'vide imparfait, air ou azote introduit'],
        ['Condenseur « trop petit »', 'HP élevée, sous-refroidissement faible', 'ailettes sales, ventilateur à l’envers ou lent, air chaud recyclé'],
        ['Évaporateur « trop petit »', 'BP et surchauffe faibles, peu de froid', 'filtre sale, ventilateur lent ou à l’envers, givre, trop d’huile'],
        ['Détendeur trop petit / prédétente', 'BP faible, surchauffe forte, sous-refroidissement bon', 'orifice, filtre bouché, déshydrateur colmaté, vanne mal ouverte'],
        ['Compresseur faible', 'HP basse, BP haute, marche continue', 'clapets HS, vanne 4 voies en position intermédiaire, vitesse inverter faible'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Voyant jaune : humidité → déshydrateur anti-acide, test d’acidité de l’huile.',
        'Organe de la ligne liquide froid ou givré : bouchon partiel à cet endroit (un écart de 2 °C entrée/sortie d’un déshydrateur signale le colmatage).',
        'Pressostat d’huile qui coupe : manque d’huile, crépine bouchée, résistance de carter HS, erreur de câblage.',
        'Pressostat BP qui coupe : manque de fluide, manque de débit d’air ou d’eau sur l’évaporateur, filtre ou électrovanne bouchés, détendeur trop fermé.',
        'Pressostat HP qui coupe : trop de fluide, manque de débit au condenseur, incondensables.',
      ],
    },

    { type: 'heading', text: 'Le compresseur en question' },
    {
      type: 'table',
      headers: ['Symptôme', 'Pistes'],
      rows: [
        ['Ne démarre pas', 'tension (±20 %), commande, fusibles, disjoncteur ; sécurités HP/BP/huile ; contrôleur de phases (scroll)'],
        ['Ne s’arrête pas', 'installation sous-dimensionnée, clapets usés, vanne 4 voies intermédiaire, charge incorrecte, givre, débit d’air insuffisant'],
        ['Courts cycles', 'coupures BP : charge, pressostat, bouchon partiel'],
        ['Bruyant', 'manque ou excès d’huile, migration (résistance de carter HS), sens de rotation (scroll), usure, détendeur trop ouvert'],
        ['Intensité trop forte', 'HP et BP hautes (charge, débit côté condenseur), usure, mauvaise connexion, sous-tension'],
        ['Intensité trop faible', 'HP et BP basses : charge, débit côté évaporateur, bouchon'],
        ['Carter mouillé ou givré', 'liquide au carter : surchauffe trop faible, résistance de carter'],
        ['Disjonctions', 'couplage, intensité réelle vs réglage, serrage du bornier, enroulements'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Test des clapets (compresseur à pistons) : vanne d’aspiration fermée, pressostat BP shunté, on démarre. Le compresseur tire au vide très vite → clapets d’aspiration bons ; il peine → clapets HS. À l’arrêt, si la pression du carter remonte vite → clapets de refoulement fuyards.',
        'Signes de clapets usés : peu de froid, BP plutôt haute, HP plutôt basse, température de refoulement élevée, marche prolongée.',
      ],
    },

    { type: 'heading', text: 'Prédétente, incondensables, détendeur, vanne 4 voies' },
    {
      type: 'bullets',
      items: [
        'Prédétente (flash gaz) : le liquide se vaporise avant le détendeur à cause d’une perte de charge (déshydrateur colmaté, électrovanne mal ouverte, vanne partiellement fermée, ligne trop longue ou trop fine) → BP basse, surchauffe forte, bulles au voyant, givre sur l’organe en cause.',
        'Test des incondensables : installation à l’arrêt, ventilateurs du condenseur en marche forcée quelques minutes ; quand entrée et sortie du condenseur sont à la même température, comparer la température lue au manomètre HP à celle du thermomètre. Plus de 2 °C d’écart → incondensables : récupérer, tirer au vide, recharger.',
        'Détendeur : bulbe percé ou capillaire coupé → le détendeur se ferme, BP qui chute, coupure BP. Trop petit → peu de froid, surchauffe forte. Trop grand → pompage, BP haute, risque de coup de liquide. Grippé → circuit sale ou humide.',
        'Vanne 4 voies non étanche (en mode froid) : la conduite côté évaporateur est plus chaude que prévu, BP haute, HP basse (à l’extrême HP = BP). Comparer les températures des quatre tubes de la vanne avec le schéma de fonctionnement normal.',
      ],
    },
    { type: 'illustration', name: 'tech-4way', caption: 'En fonctionnement normal, les tubes de la vanne 4 voies ont des températures bien distinctes' },

    { type: 'heading', text: 'Interventions sur le circuit' },
    {
      type: 'bullets',
      items: [
        'Changer un organe de la ligne liquide (détendeur, voyant, déshydrateur) : fermer la vanne de départ liquide, faire tourner le compresseur jusqu’à une pression à peine supérieure à l’atmosphère (le fluide est stocké au condenseur/réservoir), arrêter, fermer la vanne BP, consigner, remplacer rapidement, contrôler l’étanchéité, tirer au vide la partie ouverte, rouvrir, vérifier la surchauffe sur plusieurs cycles.',
        'Récupération du fluide : station et bouteille tirées au vide, bouteille sur balance, remplissage ≤ 80 % ; en liquide/vapeur (simple) ou en « push-pull » (beaucoup plus rapide) ; étiqueter la bouteille.',
        'Huile : complément par tirage au vide (aspiration dans le bidon), niveau entre le bas et le milieu du voyant ; vidange par gravité, sous pression d’azote, à la seringue ou par dépression ; toujours la même huile d’origine, bidon refermé aussitôt (huiles POE hygroscopiques).',
        'Analyse d’huile : en laboratoire (acidité, eau, rigidité diélectrique, aspect) ou kit de terrain (violet = acidité correcte, jaune = acidité élevée).',
        'Compresseur grillé : confirmer par analyse d’huile, récupérer le fluide, rincer le circuit (solvant ou pompe en recirculation, chasse à l’azote), remplacer déshydrateur (anti-acide), détendeur ou sa buse, contacteur et relais thermique, ajouter un filtre « burn-out » à l’aspiration, puis contrôler l’acidité périodiquement.',
      ],
    },
    {
      type: 'table',
      headers: ['Contaminant', 'Origine', 'Effets'],
      rows: [
        ['Incondensables (air, azote)', 'vide insuffisant, mauvaise manœuvre', 'HP haute, moins de froid, humidité'],
        ['Humidité', 'montage, intervention, huile restée ouverte', 'glace au détendeur, acides, corrosion, boues'],
        ['Acides', 'humidité, températures extrêmes, compresseur grillé non rincé', 'attaque des bobinages'],
        ['Corps étrangers', 'copeaux, poussière, billes de brasure, bouchons oubliés', 'détendeurs et filtres bouchés'],
        ['Oxydes et boues', 'cuivre chauffé à l’air (calamine), décomposition de l’huile', 'colmatages, huile dégradée'],
      ],
    },
    { type: 'note', text: 'Nettoyage au solvant : tronçon par tronçon, sans le compresseur ni les détendeurs, avec des « coups de bélier » pour décoller les dépôts, contrôle par un flexible transparent, chasse à l’azote, puis vide poussé. Plus l’indice Kauri-Butanol (KB) d’un solvant est élevé, plus il est efficace.' },

    { type: 'heading', text: 'Fuites : où chercher' },
    {
      type: 'bullets',
      items: [
        'Vannes Schrader (bouchons et joints), vannes de service (bouchons, presse-étoupe), vannes Rotalock (serrage, joints téflon).',
        'Dudgeons, brasures surchargées, piquages et tés soumis aux vibrations, tubes qui frottent (capillaires, supports sans manchon).',
        'Condenseur et évaporateur : cisaillement des tubes à l’entrée, à la sortie et aux supports.',
        'Traces d’huile : soufflets des pressostats, plaque à bornes, voyant d’huile du compresseur, éliminateur de vibrations.',
      ],
    },

    { type: 'heading', text: 'Courroies, poulies et formules de dépannage' },
    {
      type: 'bullets',
      items: [
        'Vérifier l’alignement des poulies et la tension des courroies (trop lâche : glissement et échauffement ; trop tendue : usure des paliers).',
        'Avant d’augmenter la vitesse d’un ventilateur, mesurer l’intensité : elle monte très vite avec la vitesse.',
        'Recalculer de préférence la poulie du ventilateur pour garder la poulie réglable côté moteur.',
      ],
    },
    { type: 'formula', text: 'Diamètre de poulie D = (vitesse moteur / vitesse voulue) × diamètre poulie moteur' },
    { type: 'formula', text: 'Longueur de courroie ≈ 2 × entraxe + 1,57 × (D1 + D2)' },
    { type: 'formula', text: 'Batterie : P (W) = 0,34 × débit (m³/h) × ΔT ;   débit (m³/h) = P / (0,34 × ΔT)' },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un split refroidit mal. HP et BP sont basses, la surchauffe est de 14 K, le sous-refroidissement de 1 K et le voyant (s’il y en a) bulle. Diagnostic et démarche ?',
      solution: ['Tous les signes d’un manque de fluide.', 'Ne pas simplement « refaire le plein » : chercher et réparer la fuite, tirer au vide, puis charger à la balance (en liquide pour un R410A).'],
    },
    {
      type: 'exercise',
      question: 'Après un test des incondensables, le manomètre HP indique une saturation de 38 °C alors que le condenseur, à l’arrêt et ventilé, est à 33 °C. Conclusion ?',
      solution: ['Écart de 5 °C (> 2 °C) : présence d’incondensables (air ou azote).', 'Récupérer le fluide, tirer au vide correctement, recharger.'],
    },
    {
      type: 'exercise',
      question: 'Un moteur tourne à 1 400 tr/min avec une poulie de 120 mm. Quel diamètre de poulie de ventilateur pour obtenir 1 650 tr/min ?',
      solution: ['D = (1 400 / 1 650) × 120 ≈ 102 mm → une poulie de 100 mm.', 'Avant le changement, vérifier que le moteur a de la marge d’intensité : le débit augmente de ≈ 18 % et la puissance absorbée bien plus.'],
    },
  ],
};
