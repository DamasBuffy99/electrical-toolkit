import { TopicContent } from '../../types';
import { fig } from './fig';

export const climRoomInstallContent: TopicContent = {
  title: 'Bruit, unité extérieure, régulation et condenseur',
  subtitle: 'Les détails d’installation qui font la différence sur le confort et la facture',
  blocks: [
    {
      type: 'text',
      text: "Le choix de l’appareil et sa position dans le local ne suffisent pas. Le bruit, l’emplacement de l’unité extérieure, le thermostat et la façon dont le compresseur est régulé déterminent le confort quotidien… et une bonne part de la consommation.",
    },
    { type: 'illustration', name: 'clim-outdoor', caption: 'L’unité extérieure : à l’ombre, ventilée et accessible' },

    { type: 'heading', text: 'Le bruit : vibrations et pression sonore' },
    {
      type: 'text',
      text: "Un climatiseur produit du bruit (ventilateurs, compresseur) qui gêne les occupants et parfois les voisins. Il se transmet par l’air (condenseur près d’une fenêtre) ou par vibration de la structure (unité posée sur un balcon). L’unité extérieure doit donc reposer sur une dalle désolidarisée ou des silentblocs, et les tubes frigorifiques être fixés par des colliers souples en caoutchouc.",
    },
    fig('p086_0', 'Figure 4.5 — fixation rigide (vibrations transmises) contre collier flexible et silentbloc'),
    {
      type: 'text',
      text: 'Le niveau sonore annoncé par le constructeur est indicatif (conditions standard). Pour vérifier le niveau réellement perçu par l’occupant, on part de la puissance acoustique Lw de l’appareil (notice) :',
    },
    { type: 'formula', text: 'Lp = Lw − 5 log V − 10 log r + 3   (dB(A))' },
    {
      type: 'bullets',
      items: [
        'Lp : niveau de pression acoustique au point choisi (oreille de l’occupant).',
        'Lw : niveau de puissance acoustique de l’appareil ; V : volume de la pièce (m³) ; r : distance à l’appareil (m).',
        'Plus la pièce est grande et l’occupant loin, plus le niveau baisse. On compare Lp au maximum du tableau 3.1.',
      ],
    },
    fig('p087_0', 'Figure 4.6 — puissance acoustique Lw de la source et pression sonore Lp chez l’occupant'),

    { type: 'heading', text: 'Placer l’unité extérieure (le condenseur)' },
    {
      type: 'text',
      text: "Sa position conditionne l’efficacité, la fiabilité et la durée de vie de l’appareil. Mieux vaut accepter quelques mètres de liaisons frigorifiques et électriques en plus pour la mettre au bon endroit. Les erreurs à ne pas commettre :",
    },
    {
      type: 'bullets',
      items: [
        'En plein soleil : plus l’air est chaud, plus le condenseur peine. Sur une toiture à revêtement foncé, la surface dépasse 70 °C ! Une cour ombragée et ventilée est idéale.',
        'Face aux vents dominants : le ventilateur doit lutter contre le vent pour évacuer l’air chaud.',
        'Sur une toiture inaccessible : si une échelle de pompier est nécessaire, l’entretien sera abandonné.',
        'Au sol près des parterres : feuilles, terre et poussières encrassent vite les ailettes.',
        'En façade visible : intégrez les unités à l’architecture (position non visible).',
      ],
    },
    fig('p097', 'Page 82 du guide — emplacement de l’unité extérieure : attention à l’efficacité énergétique'),

    { type: 'heading', text: 'Le thermostat et la consigne' },
    {
      type: 'text',
      text: "Le thermostat d’ambiance commande le compresseur. Placez-le à un endroit représentatif de la température moyenne du local : loin des lampes, des fenêtres, du soleil et du jet de soufflage. Laisser le ventilateur intérieur tourner en continu (même compresseur arrêté) améliore le confort en brassant l’air.",
    },
    {
      type: 'bullets',
      items: [
        'Zone de confort en été, air calme, tenue légère : 23 à 26 °C.',
        'Écart maximal de 6 °C avec l’extérieur pour éviter le choc thermique : 32 °C dehors → consigne d’au moins 26 °C.',
        'Ne jamais régler à 22 °C quand il fait 32 °C dehors : inconfortable ET coûteux.',
        'Ajoutez une programmation (arrêt hors occupation, relance anticipée) et une commande accessible : une télécommande au plafond n’est jamais réglée.',
      ],
    },
    fig('p099_0', 'Figure 4.20 — la consigne intérieure suit la température extérieure'),

    { type: 'heading', text: 'Tout ou rien contre inverter' },
    {
      type: 'text',
      text: "Un climatiseur est dimensionné pour l’heure la plus chaude : le reste du temps, il travaille à charge partielle. En régulation classique MARCHE/ARRÊT, le compresseur démarre à pleine puissance puis s’arrête : la température oscille et le rendement est mauvais.",
    },
    fig('p100_0', 'Figure 4.21 — régulation marche/arrêt : la température oscille autour de la consigne'),
    {
      type: 'text',
      text: "Avec un compresseur à vitesse variable (« INVERTER »), la régulation ajuste la vitesse du compresseur à l’écart entre consigne et température du local. La puissance suit le besoin, la température reste stable, le rendement est préservé et le démarrage se fait à basse vitesse — donc sans pointe de courant.",
    },
    fig('p101_0', 'Figure 4.22 — régulation INVERTER : vitesse variable, température stable'),
    { type: 'note', text: 'Multi-split (une unité extérieure, plusieurs unités intérieures) : chaque local doit avoir sa propre régulation, et l’inverter adapte la production aux besoins réels de l’ensemble.' },

    { type: 'heading', text: 'La régulation du condenseur' },
    {
      type: 'text',
      text: "Paradoxe : les locaux à forte charge interne (salles informatiques) sont climatisés même quand il fait frais. Le condenseur devient alors trop efficace, la pression chute, l’évaporateur perd de la puissance, et la sécurité basse pression peut arrêter l’appareil. Un climatiseur qui doit fonctionner sous 17 °C extérieurs doit avoir un ventilateur de condenseur à vitesse variable (au minimum en tout ou rien), piloté par un pressostat ou un thermostat.",
    },

    { type: 'heading', text: 'Condenseur à air ou à eau ?' },
    { type: 'subheading', text: 'Le condenseur à air' },
    {
      type: 'text',
      text: "Le plus courant : des tubes de cuivre (9 à 16 mm) à ailettes d’aluminium (pas de 1 à 4 mm), refroidis par un ou plusieurs ventilateurs. En ambiance marine ou industrielle, on protège les ailettes contre la corrosion (film plastique, traitements de type Blygold…). Les armoires à condenseur à air existent en compact (4 à 120 kW, assez bruyantes), en split avec condenseur séparé sur le toit (12 à 220 kW) et en rooftop (7 à 350 kW).",
    },
    { type: 'warning', text: "Le guide donne deux plages pour les rooftops : 7 à 120 kW au chapitre 3, 7 à 350 kW au chapitre 4. Les deux existent selon les constructeurs ; pour un avant-projet, retenez 7 à 120 kW comme gamme courante." },
    fig('p103_0', 'Figure 4.23 — armoire de climatisation avec condenseur à l’extérieur'),
    { type: 'subheading', text: 'Le condenseur à eau' },
    {
      type: 'text',
      text: "Deux tubes de cuivre concentriques enroulés en spirale : l’eau circule dans l’un, le fluide se condense dans l’autre, à contre-courant (ou échangeur à plaques). L’eau est ensuite refroidie dans une tour, souvent sur le toit, ce qui éloigne le bruit du local.",
    },
    fig('p103_1', 'Figure 4.24 — tube d’échangeur coaxial à contre-courant'),
    fig('p104_0', 'Figure 4.25 — armoire à condenseur refroidi par un circuit d’eau pulsée et une tour'),
    {
      type: 'table',
      headers: ['Type de tour', 'Principe', 'Point d’attention'],
      rows: [
        ['Tour ouverte', 'L’eau pulvérisée devant un ventilateur s’évapore en partie et se refroidit', 'L’eau au contact de l’air va au condenseur : corrosion, tartre, légionelles'],
        ['Tour fermée', 'L’eau du condenseur reste dans des tubes arrosés par une autre eau', 'Plus de corrosion côté condenseur'],
        ['Dry cooler', 'Tour fermée non arrosée, refroidie par l’air des ventilateurs', 'Pas de consommation d’eau, moins performant'],
      ],
    },
    fig('p104_1', 'Figure 4.26 — tour ouverte'),
    fig('p105_0', 'Figure 4.27 — tour fermée'),
    fig('p105_1', 'Figure 4.28 — dry cooler (aérorefroidisseur)'),
    {
      type: 'table',
      headers: ['', 'Condenseur à eau', 'Condenseur à air'],
      rows: [
        ['Rendement', 'Meilleur', 'Moins bon'],
        ['Encombrement, bruit', 'Plus compact, plus silencieux', 'Plus volumineux, plus bruyant'],
        ['Eau', 'Consomme de l’eau, tartre, corrosion', 'Aucune eau'],
        ['Entretien', 'Traitement d’eau, tours', 'Simple et économique'],
        ['Quand le choisir', 'Rivière, forage fiable, eau assez froide', 'Cas général en climatisation individuelle'],
      ],
    },
    { type: 'note', text: 'Avec les systèmes split, le condenseur à air s’est imposé : économie totale d’eau, pas de canalisations hydrauliques, entretien facile.' },
    { type: 'heading', text: "Exercices" },
    {
      type: 'exercise',
      question: "Un climatiseur a une puissance acoustique Lw = 55 dB(A). Il est installé dans un bureau de 60 m² × 3 m ; l’occupant est à 3 m. Quel niveau entend-il ? Est-ce acceptable pour un petit bureau ?",
      solution: [
        "V = 180 m³ ; Lp = 55 − 5 log 180 − 10 log 3 + 3.",
        "5 log 180 = 11,3 ; 10 log 3 = 4,8 → Lp = 55 − 11,3 − 4,8 + 3 ≈ 42 dB(A).",
        "Petit bureau : 30 / 35 / 40 dB(A) → trop bruyant même en niveau « minimal ». Choisir un appareil plus silencieux ou l’éloigner de l’occupant.",
      ],
    },
    {
      type: 'exercise',
      question: "Une salle informatique doit être climatisée toute l’année, y compris les nuits d’harmattan à 15 °C. Quel équipement faut-il prévoir sur le condenseur, et pourquoi ?",
      solution: [
        "Sous 17 °C extérieurs, le condenseur devient trop efficace : la pression chute, l’évaporateur perd de la puissance et la sécurité basse pression peut arrêter l’appareil.",
        "Il faut une régulation du ventilateur de condenseur (vitesse variable ou au minimum tout ou rien), pilotée par pressostat ou thermostat.",
      ],
    },
  ],
};
