import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const generatorUpsAtsContent: TopicContent = {
  title: 'Groupe électrogène, ATS et ASI (UPS)',
  subtitle: "Assurer l'alimentation quand le réseau tombe : secours, basculement et onduleur",
  blocks: [
    {
      type: 'text',
      text: "Quand le réseau est coupé, trois équipements prennent le relais : le groupe électrogène fournit l'énergie de secours, l'inverseur automatique (ATS) bascule les charges dessus, et l'ASI (UPS) alimente sans aucune coupure les charges critiques.",
    },

    { type: 'heading', text: '1 · Le groupe électrogène : types (ISO 8528-1)' },
    {
      type: 'table',
      headers: ['Régime', 'Charge moyenne', 'Heures / an', 'Applications'],
      rows: [
        ['Secours (standby)', '≤ 70 %, variable', '≈ 200 h', 'Secours de bâtiment en cas de coupure'],
        ['Prime à durée limitée', '≤ 60 %', '500 h', 'Location, alimentation temporaire'],
        ['Prime (principal)', '60 – 70 %, variable', 'Illimité', 'Industrie, pompage, chantier, écrêtage'],
        ['Continu', '70 – 100 %, constante', 'Illimité', 'Production de base, cogénération'],
      ],
    },
    { type: 'formula', text: 'Facteur de charge = kWh produits / (kW × jours × 24)' },
    {
      type: 'text',
      text: "Pour le dimensionnement, le cours utilise l'outil en ligne Cummins PowerSuite : on y saisit les charges (moteurs, éclairage…) et il propose le groupe adapté.",
    },
    { type: 'image', source: SLIDES['gen-5'], caption: 'Régimes ISO 8528-1', focus: { x: 0.0, y: 0.22, w: 0.48, h: 0.76 } },

    { type: 'heading', text: '2 · Conditions du site' },
    {
      type: 'bullets',
      items: [
        "Le moteur a besoin d'une quantité d'air précise : altitude, température et humidité changent la densité de l'air, donc la puissance disponible.",
        'Facteurs à vérifier : température ambiante, altitude, atmosphère corrosive, humidité, poussière.',
        "Température : NEMA suppose 40 °C ambiant au maximum, avec 10 °C de marge pour le point chaud des enroulements. Classes courantes F et H.",
        "Altitude : plus on monte, moins l'air est dense → on applique la courbe de déclassement du fabricant.",
      ],
    },
    {
      type: 'table',
      headers: ['Classe', 'Échauffement', 'Régime'],
      rows: [
        ['F', '105 °C', 'Prime'],
        ['H', '125 °C', 'Prime'],
        ['F', '130 °C', 'Secours'],
        ['H', '150 °C', 'Secours'],
      ],
    },
    {
      type: 'text',
      text: "Réponse transitoire : à chaque prise ou délestage de charge, la vitesse, la tension et la fréquence varient brièvement. ISO 8528 classe les groupes de G1 (charges simples : éclairage) à G4 (informatique, exigences sévères).",
    },
    { type: 'image', source: SLIDES['gen-9'], caption: 'Échauffement des classes F et H' },
    { type: 'image', source: SLIDES['gen-10'], caption: 'Courbe de déclassement altitude / température' },
    { type: 'image', source: SLIDES['gen-12'], caption: 'Classes de performance ISO 8528' },

    { type: 'heading', text: "3 · L'inverseur automatique de sources (ATS)" },
    {
      type: 'text',
      text: "L'ATS assure l'alimentation continue d'une charge à partir de l'une de deux sources : N = source normale (réseau), R = source de réserve (groupe).",
    },
    {
      type: 'bullets',
      items: [
        '1 → Le réseau tombe.',
        "2 → L'ATS bascule la charge sur le groupe dès que sa tension et sa fréquence sont stables.",
        "3 → Au retour du réseau, l'ATS renvoie la charge sur le réseau.",
        'Le basculement et le retour peuvent être automatiques ou manuels.',
      ],
    },
    {
      type: 'note',
      text: "📌 Calibre : l'ATS a le même calibre que le disjoncteur général du tableau (ex. disjoncteur 100 A → ATS 100 A). Gamme courante : 32 A à 800 A, 50/60 Hz.",
    },
    { type: 'image', source: SLIDES['cond-19'], caption: 'ATS : entrée réseau, entrée groupe, sortie charge' },
    { type: 'image', source: SLIDES['cond-20'], caption: 'Séquence de basculement' },
    { type: 'image', source: SLIDES['cond-21'], caption: 'Arrangements à deux sources' },
    { type: 'image', source: SLIDES['cond-22'], caption: 'Arrangements à trois sources' },

    { type: 'heading', text: "4 · L'ASI (UPS) : principe" },
    {
      type: 'text',
      text: "Une ASI fournit une alimentation sans coupure pendant un temps limité, grâce à ses batteries, et protège contre les surtensions. On l'utilise pour les charges critiques : hôpitaux, centres de données, éclairage de sécurité, ordinateurs.",
    },
    {
      type: 'bullets',
      items: [
        'Redresseur / chargeur : convertit le réseau AC en DC, charge les batteries et alimente l’onduleur.',
        "Onduleur : recrée la tension AC pour la charge.",
        "Contacteur statique (bypass) : en cas de défaut ou de surcharge de l'ASI, bascule la charge sur le réseau sans coupure.",
      ],
    },
    { type: 'image', source: SLIDES['gen-42'], caption: 'Schéma de base d’une ASI' },

    { type: 'heading', text: '5 · Les trois technologies d’ASI' },
    {
      type: 'table',
      headers: ['Type', 'Fonctionnement', 'Rendement · usage'],
      rows: [
        ['VFI — double conversion (online)', "Tout passe par redresseur + onduleur ; l'onduleur fonctionne en permanence. Sortie totalement isolée du réseau.", 'Meilleure protection · centres de données'],
        ['VI — line interactive', "Le réseau alimente directement la charge ; l'onduleur en parallèle corrige les creux et filtre les pics.", '≈ 98 %'],
        ['VFD — standby (offline)', "L'onduleur est arrêté et démarre à la coupure (10 à 12 ms, 2 ms pour les modèles récents).", "Jusqu'à 99 % · mauvais choix pour les serveurs"],
      ],
    },
    { type: 'image', source: SLIDES['gen-44'], caption: 'VFI : double conversion' },
    { type: 'image', source: SLIDES['gen-46'], caption: 'VI : line interactive' },
    { type: 'image', source: SLIDES['gen-48'], caption: 'VFD : standby' },

    { type: 'heading', text: '6 · ASI conventionnelle ou modulaire' },
    {
      type: 'bullets',
      items: [
        "Conventionnelle (standalone) : tout dans un seul appareil avec batteries intégrées ; pas d'extension possible.",
        "Modulaire : modules en rack ; on en ajoute quand la charge augmente, et un module en panne se retire sans interrompre le service.",
      ],
    },
    { type: 'image', source: SLIDES['cond-12'], caption: 'ASI conventionnelle' },
    { type: 'image', source: SLIDES['cond-13'], caption: 'ASI modulaire' },

    { type: 'heading', text: "7 · Dimensionner une ASI" },
    {
      type: 'bullets',
      items: [
        "1 → Lister les équipements à secourir.",
        '2 → Relever leurs ampères et volts (étiquette) : VA = A × V. Si la puissance est en W, VA = W / cos φ (≈ 0,9 pour les serveurs).',
        "3 → Multiplier par le nombre d'équipements et additionner.",
        '4 → Multiplier le total par 1,2 pour les extensions futures.',
      ],
    },
    { type: 'formula', text: 'Exemple : 10 serveurs de 450 W à cos φ 0,9 → 10 × 500 VA = 5 000 VA → × 1,2 = 6 000 VA → ASI 6 kVA' },
    {
      type: 'table',
      headers: ['Avantages', 'Inconvénients'],
      rows: [
        ['Aucune coupure au basculement', 'Ne peut pas alimenter de grosses charges (batteries)'],
        ['Meilleure pour les équipements critiques qu’un groupe', 'Batteries de mauvaise qualité → remplacements fréquents'],
        ['Silencieuse, maintenance moins chère qu’un groupe', 'Installation par un professionnel'],
      ],
    },
    {
      type: 'note',
      text: "📐 Installation : 0 à 600 mm du mur · plus de 500 mm libres au-dessus (sinon échauffement) · plus de 1 000 mm devant pour ouvrir la porte.",
    },
    { type: 'image', source: SLIDES['cond-17'], caption: 'Méthode de dimensionnement' },
    { type: 'image', source: SLIDES['gen-53'], caption: 'Encombrement et dégagements' },
  ],
};
