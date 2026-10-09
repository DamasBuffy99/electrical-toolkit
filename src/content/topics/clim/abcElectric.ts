import { TopicContent } from '../../types';

export const abcElectricContent: TopicContent = {
  title: 'Moteurs, démarrages, protections et variateurs',
  subtitle: 'L’électricité appliquée aux climatiseurs : lire un schéma, démarrer et protéger un moteur, faire varier sa vitesse',
  blocks: [
    {
      type: 'text',
      text: "Un frigoriste passe autant de temps sur l’électricité que sur le fluide : la plupart des pannes « qui ne démarrent pas » sont électriques. Les bases générales (tension, courant, puissance, régimes de neutre, câbles) sont dans l’onglet « Notes de cours » ; ici on se concentre sur ce qui est propre aux climatiseurs.",
    },
    { type: 'illustration', name: 'tech-stardelta', caption: 'Le démarrage étoile-triangle divise par 3 le courant d’appel' },

    { type: 'heading', text: 'Lire un schéma de climatisation' },
    {
      type: 'bullets',
      items: [
        'Schéma unifilaire : un trait pour plusieurs conducteurs (vue d’ensemble). Multifilaire : tous les conducteurs, puissance et commande séparées.',
        'Repérage des contacts auxiliaires : le chiffre des unités donne la fonction — 1-2 contact à ouverture, 3-4 à fermeture, 5-6 et 7-8 contacts temporisés. Les pôles de puissance sont repérés 1 à 6 (8 en tétrapolaire).',
        'Lettres usuelles : KM contacteur, KA relais, F protection, Q disjoncteur/sectionneur, S commande (thermostat, pressostat), B capteur, M moteur, C condensateur, Y électrovanne, T transformateur, X bornier.',
        'La « chaîne de sécurité » (arrêt d’urgence, pressostats HP et BP, relais thermiques…) est câblée en série avant la bobine du contacteur compresseur.',
        'Auto-maintien : un contact du relais en parallèle sur le bouton marche ; après un défaut, il faut réarmer volontairement.',
      ],
    },

    { type: 'heading', text: 'Le moteur asynchrone triphasé' },
    {
      type: 'bullets',
      items: [
        'Stator : trois enroulements à 120° qui créent un champ tournant. Rotor : cage d’écureuil (le plus courant) ou bobiné.',
        'Le rotor tourne un peu moins vite que le champ : c’est le glissement (2 à 5 %).',
        'Couplage selon la plaque : un moteur 230/400 V se couple en étoile sur un réseau 400 V ; un moteur 400/690 V se couple en triangle sur 400 V.',
        'cos φ typique ≈ 0,8 ; rendement = puissance utile / puissance absorbée.',
      ],
    },
    { type: 'formula', text: 'Ns = 60 × f / p   ;   P absorbée = √3 × U × I × cos φ   ;   I ≈ P / (√3 × U × cos φ)' },
    { type: 'note', text: 'Raccourci de terrain en 400 V triphasé : I (A) ≈ P (W) / 600. Pratique, mais approximatif.' },

    { type: 'heading', text: 'Limiter le courant de démarrage' },
    {
      type: 'bullets',
      items: [
        'Au démarrage direct, un moteur appelle 4 à 8 fois son intensité nominale : chutes de tension, déclenchements.',
        'Étoile-triangle : démarrage en étoile (tension réduite) puis passage en triangle après temporisation ; 3 contacteurs. Seulement pour un moteur dont le couplage triangle correspond à la tension du réseau (400/690 V sur 400 V).',
        'Part-winding (enroulements séparés) : deux bobinages indépendants (50/50 ou 66/33) alimentés l’un après l’autre (< 1 s) ; attention à les câbler pour tourner dans le même sens.',
        'Dahlander : moteur à deux vitesses (50/100 %) pour extracteurs et CTA.',
        'Démarreur progressif ou variateur de fréquence : la solution moderne.',
      ],
    },

    { type: 'heading', text: 'Les moteurs monophasés et les condensateurs' },
    {
      type: 'bullets',
      items: [
        'Deux enroulements : principal (gros fil, faible résistance) et de démarrage (fil fin, plus résistant). Résistance mesurée entre les bornes extrêmes = somme des deux.',
        'Démarrage par CTP (thermistance) : alimente l’enroulement de démarrage 1 à 2 s puis le coupe en chauffant ; faible couple, pour les circuits à capillaire (pressions égalisées à l’arrêt).',
        'PSC : condensateur permanent en série avec l’enroulement auxiliaire ; petits compresseurs et ventilateurs.',
        'RSIR : relais d’intensité ou de tension qui coupe l’enroulement de démarrage. CSIR : même chose avec un condensateur de démarrage (fort couple, détendeur thermostatique).',
        'Condensateur permanent (au papier/film) : faible capacité, reste sous tension. Condensateur de démarrage (électrolytique) : forte capacité (> 100 µF), ne doit JAMAIS rester sous tension.',
        'Un condensateur gonflé est hors service. Toujours le décharger (court-circuit des bornes avec une résistance ou un outil isolé) avant de le manipuler.',
      ],
    },
    { type: 'formula', text: 'Capacité d’un condensateur en service (50 Hz) : C (µF) ≈ 3 185 × I / U' },

    { type: 'heading', text: 'Les protections' },
    {
      type: 'table',
      headers: ['Protection', 'Contre quoi', 'À savoir'],
      rows: [
        ['Fusible gG / aM', 'surcharges / courts-circuits', 'aM « accompagnement moteur » : tolère l’appel de démarrage'],
        ['Sectionneur à fusibles', 'isole et protège l’armoire', 'contact de précoupure dans la commande'],
        ['Relais thermique', 'surcharge prolongée, marche sur 2 phases', 'trois bilames ; pas de pouvoir de coupure (agit sur la bobine du contacteur) ; réglé à l’intensité plaquée, jamais au-dessus'],
        ['Disjoncteur moteur (magnétothermique)', 'surcharge (thermique réglable) et court-circuit (magnétique 3 à 15 In)', 'nombreux accessoires (contacts auxiliaires, bobine à manque de tension)'],
        ['Disjoncteur différentiel (DDR)', 'défaut d’isolement : protège les personnes', '30 mA (personnes) ou 300 mA (incendie)'],
        ['Relais de surchauffe à thermistances (type Kriwan)', 'échauffement des enroulements du compresseur', 'sondes CTP dans le bobinage ; coupure vers 100 °C, réarmement ≈ 90 °C'],
        ['Protections multifonctions', 'surchauffe, manque de phase, rotor bloqué, pression d’huile…', 'historique des défauts, communication Modbus'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Contacteur : bobine (24 à 400 V, alternatif ou continu), pôles de puissance, contacts auxiliaires ; on le choisit selon la tension de bobine, la tension et la puissance du récepteur, le pouvoir de coupure.',
        'Causes de surintensité : sous-tension, surcharge mécanique (roulements), marche sur deux phases, surdébit d’un ventilateur, démarrages trop fréquents.',
      ],
    },

    { type: 'heading', text: 'Moteurs EC, moteurs pas à pas et variateurs' },
    {
      type: 'bullets',
      items: [
        'Moteur EC (à commutation électronique) : moteur à courant continu sans balais à aimants permanents, alimenté en alternatif via son électronique ; vitesse pilotée en 0–10 V ou PWM ; jusqu’à 40 % d’économie par rapport à un moteur asynchrone. Ventilateurs de condenseurs, d’évaporateurs, d’extracteurs.',
        'Moteur pas à pas (aimant permanent) : chaque impulsion fait tourner d’un pas (ex. 1,8°, soit 200 pas/tour) ; c’est le moteur des détendeurs électroniques.',
        'Variateur par hachage de phase (triac) : découpe la sinusoïde ; pour petits ventilateurs hélicoïdes ou tangentiels ; le moteur chauffe davantage à basse vitesse.',
        'Variateur de fréquence : redresseur + filtre + onduleur (PWM) + commande (rampes, protections, bus). Câbles moteur blindés contre les parasites.',
        '80 % de l’électricité industrielle passe dans des moteurs : réduire leur vitesse au juste besoin est très rentable.',
      ],
    },

    { type: 'heading', text: 'Transformateurs et câbles' },
    {
      type: 'bullets',
      items: [
        'Les transformateurs de commande abaissent le 230 ou 400 V en 24 V (télécommande, régulation) ; ils changent tension et intensité, pas la fréquence. Courant disponible : I = VA / V (100 VA / 24 V ≈ 4,2 A).',
        'Section d’un câble : elle doit limiter l’échauffement ET la chute de tension (3 % en éclairage, 5 % pour un moteur) ; la résistance croît avec la longueur et diminue avec la section.',
      ],
    },
    { type: 'formula', text: 'Monophasé : S (mm²) = 2 × ρ × L × I / ΔU   ;   Triphasé : S = √3 × ρ × L × I × cos φ / ΔU   (ρ cuivre ≈ 0,0225 Ω·mm²/m en service)' },
    {
      type: 'warning',
      text: "Une formule de câble du livre écrit la chute de tension en MULTIPLICATION (« S = 2 × R × L × (I/1000) × e »). La chute de tension admissible doit être au DÉNOMINATEUR : plus on accepte de chute de tension, plus la section peut être petite. Le calcul détaillé des câbles est traité dans le cours électrique (leçon « Chute de tension »).",
    },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un compresseur triphasé 400 V absorbe 7,5 kW avec un cos φ de 0,82. Quelle intensité ? À quelle valeur régler son relais thermique ?',
      solution: ['I = 7 500 / (1,732 × 400 × 0,82) ≈ 13,2 A (le raccourci 7 500/600 donne 12,5 A).', 'Le relais thermique se règle à l’intensité nominale PLAQUÉE sur le moteur, jamais au-dessus (pas à l’intensité mesurée si elle est différente).'],
    },
    {
      type: 'exercise',
      question: 'Un ventilateur monophasé 230 V absorbe 0,6 A en marche avec son condensateur permanent. Quelle capacité approximative attendre ?',
      solution: ['C ≈ 3 185 × 0,6 / 230 ≈ 8,3 µF : on vérifie que le condensateur en place porte une valeur voisine (par exemple 8 µF ± 5 %).'],
    },
    {
      type: 'exercise',
      question: 'Un moteur 400/690 V doit être démarré en étoile-triangle sur un réseau 400 V. Est-ce possible ? Et un moteur 230/400 V ?',
      solution: ['400/690 V : oui, il fonctionne en triangle sous 400 V, on peut donc démarrer en étoile puis passer en triangle.', '230/400 V : non, il fonctionne déjà en étoile sous 400 V ; le passer en triangle l’alimenterait en surtension.'],
    },
  ],
};
