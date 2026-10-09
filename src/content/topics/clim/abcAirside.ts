import { TopicContent } from '../../types';

export const abcAirsideContent: TopicContent = {
  title: 'CTA, rooftop, free-cooling, filtration et ventilateurs',
  subtitle: 'Les équipements côté air des installations centralisées, leur régulation et leur entretien',
  blocks: [
    {
      type: 'text',
      text: "Côté air, l’installation centralisée repose sur la centrale de traitement d’air (CTA) ou le rooftop, un réseau de gaines, des filtres et des ventilateurs. Bien les régler et bien les entretenir, c’est à la fois du confort, de la qualité d’air et beaucoup d’énergie économisée.",
    },
    { type: 'illustration', name: 'clim-central', props: { highlight: 'ahu' }, caption: 'La CTA prépare l’air avant de le distribuer' },

    { type: 'heading', text: 'La centrale de traitement d’air (CTA)' },
    {
      type: 'text',
      text: "Une CTA chauffe, refroidit, humidifie ou déshumidifie l’air, en débit constant ou variable. Elle est monobloc ou modulaire. Simple flux : tout air neuf, tout air repris, ou mélange. Double flux : toutes les combinaisons entre air neuf, air repris, air rejeté et air soufflé (avec récupération d’énergie possible).",
    },
    {
      type: 'table',
      headers: ['Élément', 'Rôle'],
      rows: [
        ['Volet d’air neuf', 'règle l’air neuf, se ferme en protection antigel'],
        ['Volet de reprise et caisson de mélange', 'dose air neuf et air repris (volets couplés)'],
        ['Filtres', 'un ou plusieurs étages, de moyenne à haute efficacité'],
        ['Batteries chaude et froide', 'eau chaude, eau glacée ou détente directe'],
        ['Humidificateur et pare-gouttelettes', 'apport d’humidité sans entraîner d’eau'],
        ['Volet coupe-feu + détecteur autonome déclencheur', 'compartimente en cas d’incendie'],
        ['Ventilateur', 'à action ou à réaction, souvent à vitesse variable'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'CTA à volume d’air variable : un clapet motorisé par local suit sa sonde ; un capteur de pression dans la gaine (sur une partie droite, loin des perturbations) pilote la vitesse du ventilateur ; la température de soufflage reste constante via les vannes 3 voies des batteries.',
        'CTA double gaine : une gaine chaude et une gaine froide mélangées dans une boîte par local : chaud ET froid simultanés, mais coûteux.',
      ],
    },

    { type: 'heading', text: 'Le free-cooling' },
    {
      type: 'text',
      text: "Refroidir gratuitement avec l’air extérieur quand il est plus frais que l’air intérieur. Normalement la machine tourne en air repris avec un minimum d’air neuf (par exemple 80 % repris / 20 % neuf) ; en free-cooling, le volet d’air neuf s’ouvre largement et les compresseurs restent à l’arrêt tant que c’est suffisant.",
    },
    {
      type: 'bullets',
      items: [
        'Conditions typiques : air extérieur 5 à 10 K plus frais que l’intérieur, ET demande de froid.',
        'Les machines évoluées comparent les ENTHALPIES intérieure et extérieure (deux sondes d’humidité) : un air frais mais très humide peut apporter plus de chaleur latente qu’il n’enlève de chaleur sensible.',
        'Free-cooling nocturne : « décharge » la chaleur accumulée par le bâtiment pendant la journée.',
        'Exemple de séquence : ouverture du volet d’air neuf dès 24 °C ambiant, 1er compresseur à 24,5 °C, 2e à 25 °C.',
      ],
    },
    { type: 'note', text: 'En climat tropical humide, les occasions de free-cooling sont rares : l’air extérieur est presque toujours trop chaud ou trop humide. Il garde de l’intérêt la nuit en climat sec et pour les locaux à forte charge interne (salles serveurs).' },

    { type: 'heading', text: 'Le rooftop' },
    {
      type: 'bullets',
      items: [
        'Monobloc posé sur le toit sur une « costière », raccordé seulement en électricité et en gaines : pour les grandes surfaces sans cloisons (supermarchés, entrepôts).',
        'Contient le circuit frigorifique, le ventilateur de soufflage, le coffret électrique avec automate, les filtres, le caisson de mélange et souvent un appoint (résistances, batterie eau chaude, brûleur gaz).',
        'Régulation : programmation horaire, consigne chaude (ex. 20 °C) et froide (ex. 24 °C) avec zone morte entre les deux, consigne « dynamique » qui suit la température extérieure (ex. +5 K), anti-courts cycles des compresseurs (temps minimum d’arrêt et entre démarrages), ventilateurs de condenseur en régulation PI, dégivrage par inversion de cycle.',
        'Options : régulation d’humidité, sonde de CO₂ pour doser l’air neuf, communication RS485 (Modbus), BACnet, LON ou KNX vers une GTB.',
      ],
    },

    { type: 'heading', text: 'La filtration' },
    {
      type: 'bullets',
      items: [
        'Quatre mécanismes de captage : tamisage (grosses particules), inertie, interception, diffusion (particules < 1 µm).',
        'Étages : média plan (fibre de verre, polyester) puis filtres à poches (jusqu’à 20 fois leur surface frontale), charbon actif pour les odeurs et gaz, filtres absolus (salles d’opération, laboratoires).',
        'Ancien classement : G1–G4 (grossiers), F5–F9 (fins), H10–H14 (absolus).',
        'Norme ISO 16890 (depuis 2016–2018) : classement selon l’efficacité sur les particules ePM10, ePM2,5 et ePM1 (un filtre doit capter au moins 50 % d’une taille pour en porter le nom), plus une classe « grossier ».',
        'Un filtre encrassé fait chuter le débit et monter la consommation du ventilateur : contrôle de la perte de charge, remplacement régulier.',
      ],
    },

    { type: 'heading', text: 'Les gaines textiles' },
    {
      type: 'bullets',
      items: [
        'Légères, suspendues par câbles ou rails, elles soufflent sur toute leur longueur : températures homogènes, pas de courants d’air.',
        'Diffusion par porosité (basse vitesse, locaux < 5 m de haut, silencieuse), par fentes (induction, grands volumes), par micro-perforations (haute induction) ou mixte.',
        'Démarrage progressif du ventilateur obligatoire (variateur ou ouverture lente des volets) pour gonfler la gaine sans à-coup.',
        'Lavables en machine industrielle, durée de vie de 15 ans et plus ; une bonne filtration limite l’encrassement.',
      ],
    },

    { type: 'heading', text: 'Les ventilateurs' },
    {
      type: 'table',
      headers: ['Type', 'Rendement', 'Usage'],
      rows: [
        ['Hélicoïde (axial)', '≈ 65 %, moins de 100 Pa disponibles', 'condenseurs, évaporateurs de chambres froides, extracteurs muraux'],
        ['Centrifuge à action (aubes vers l’avant)', '60 à 75 %', 'basse et moyenne pression : rooftops, CTA, extracteurs'],
        ['Centrifuge à réaction (aubes vers l’arrière)', '75 à 85 %', 'réseaux à fortes pertes de charge, souvent avec variateur'],
        ['Tangentiel', '—', 'unités intérieures de splits et multisplits'],
      ],
    },
    {
      type: 'warning',
      text: "Le livre classe les ventilateurs « basse pression (1 500 Pa < p) » : il faut lire p < 1 500 Pa. Moyenne pression : de 1 500 Pa à 10 kPa ; haute pression : au-delà de 10 kPa.",
    },

    { type: 'heading', text: 'Le bruit des installations' },
    {
      type: 'bullets',
      items: [
        'Causes : écoulement de l’air dans les gaines, vibrations, turbulences, usure.',
        'Silencieux à baffles (efficaces mais pertes de charge), silencieux cylindriques (moins de pertes), silencieux actifs (basses fréquences).',
        'Écrans acoustiques (inclinés s’ils sont réfléchissants), capotage étanche et lourd, local technique traité : la solution la plus efficace mais la plus chère.',
      ],
    },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Il fait 25 °C dans un open-space qui demande du froid. Dehors, il fait 19 °C mais avec 95 % d’humidité. Faut-il passer en free-cooling ?',
      solution: [
        'L’écart de température (6 K) le permettrait, mais l’air extérieur est très humide : son enthalpie peut être supérieure à celle de l’air intérieur.',
        'Une régulation enthalpique comparerait les deux enthalpies et refuserait le free-cooling si l’air extérieur apporte plus d’énergie (latente) qu’il n’en retire. C’est fréquent sous les tropiques.',
      ],
    },
    {
      type: 'exercise',
      question: 'Pourquoi démarre-t-on progressivement le ventilateur d’un réseau en gaine textile ?',
      solution: ['Un démarrage direct gonfle la gaine d’un coup : à-coup mécanique qui l’abîme et l’arrache de ses supports.', 'On utilise un variateur (rampe d’accélération) ou on démarre volets fermés puis on les ouvre progressivement.'],
    },
  ],
};
