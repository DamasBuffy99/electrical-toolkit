import { TopicContent } from '../../types';

export const abcHeatpumpsContent: TopicContent = {
  title: 'Pompes à chaleur, réversibilité et performances saisonnières',
  subtitle: 'Vanne 4 voies, COP, SEER et SCOP, sources de chaleur, dégivrage, bivalence et loi d’eau',
  blocks: [
    {
      type: 'text',
      text: "Une pompe à chaleur (PAC) est un climatiseur capable d’inverser son cycle : elle puise la chaleur dehors (air, sol, eau) pour la restituer dedans. Sous les tropiques, on l’utilise surtout en mode froid (« climatiseur réversible »), mais ses notions — vanne 4 voies, dégivrage, SEER — servent sur tous les appareils actuels.",
    },
    { type: 'illustration', name: 'tech-4way', caption: 'La vanne 4 voies échange les rôles des deux échangeurs' },

    { type: 'heading', text: 'La vanne 4 voies (vanne d’inversion de cycle)' },
    {
      type: 'bullets',
      items: [
        'Elle se compose d’une vanne principale à tiroir et d’une petite vanne pilote commandée par une bobine ; la vanne pilote, par de petits capillaires, fait coulisser le tiroir grâce à la différence de pression HP/BP.',
        'Le refoulement et l’aspiration du compresseur sont raccordés de part et d’autre ; les deux échangeurs de chaque côté de l’aspiration.',
        'Deuxième rôle : le dégivrage de la batterie extérieure en hiver, en inversant le cycle quelques minutes.',
        'Elle a besoin d’un écart de pression suffisant (≈ 1 bar) pour basculer.',
      ],
    },

    { type: 'heading', text: 'Les coefficients de performance' },
    { type: 'formula', text: 'COP = énergie restituée / énergie électrique consommée   (ex. 9 000 W / 3 000 W = 3)' },
    {
      type: 'bullets',
      items: [
        'COP constructeur : mesuré en laboratoire (air extérieur à 7 °C pour une PAC air, eau de nappe à 10 °C pour une PAC eau/eau).',
        'COP global : inclut ventilateurs, pompes et dégivrages.',
        'COP annuel : performance réelle sur toute une saison.',
        'EER (coefficient d’efficacité frigorifique) : froid produit / électricité consommée, en mode climatisation.',
        'SEER (froid) et SCOP (chaud) : coefficients saisonniers européens pour les appareils ≤ 12 kW, calculés sur une année type. Exemples d’exigences minimales (2014) : SEER 4,6 et SCOP 3,8 pour un appareil < 6 kW avec un fluide de GWP > 150.',
      ],
    },
    { type: 'formula', text: 'SEER = froid fourni sur l’année (kWh) / électricité consommée (kWh)' },
    {
      type: 'warning',
      text: "Le livre définit l’EER comme « énergie absorbée / énergie consommée », ce qui ne veut rien dire. Il faut lire : EER = puissance frigorifique PRODUITE / puissance électrique consommée (c’est le COP en mode froid ; en unités américaines, BTU/h par watt).",
    },
    {
      type: 'bullets',
      items: [
        'Plus l’écart entre source froide et source chaude est grand, plus le COP baisse.',
        'Une PAC air/air perd 30 à 35 % de sa puissance par −10 à −15 °C dehors.',
        'COP typiques : 3 à 3,5 en air/air, jusqu’à 5 voire 6 en eau/eau.',
      ],
    },

    { type: 'heading', text: 'Les sources froides et chaudes' },
    {
      type: 'table',
      headers: ['Source froide', 'Avantages', 'Inconvénients'],
      rows: [
        ['Air', 'facile à capter', 'température variable, givrage, faible chaleur volumique (0,34 Wh/m³.K) → gros ventilateurs'],
        ['Sol (capteurs horizontaux à 1 m, ou sondes verticales de 30 à 100 m)', 'température stable', 'coût du forage ou surface nécessaire (≈ 1,5 × la surface chauffée)'],
        ['Eau (nappe, rivière, lac)', 'très bon COP : l’eau transporte ~3 500 fois plus d’énergie que l’air à volume égal', 'puits, autorisations, minéraux ; échangeur intermédiaire conseillé'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Émetteurs (sources chaudes) : ventilo-convecteurs (peu d’inertie, mais réversibles pour la climatisation), radiateurs basse température (départ 45–50 °C), plancher chauffant (30–35 °C, idéal : +3 % de COP par degré de départ en moins).',
        'Un ballon tampon évite les courts cycles quand le volume d’eau est faible.',
      ],
    },

    { type: 'heading', text: 'Le dégivrage' },
    {
      type: 'text',
      text: "Par temps froid et humide (dès ≈ 4–5 °C dehors), l’humidité gèle sur la batterie extérieure qui sert d’évaporateur : le givre isole et bloque l’air. La régulation (sonde sur la batterie ou pressostat BP) déclenche un dégivrage : arrêt du ventilateur extérieur, inversion de la vanne 4 voies — la batterie devient condenseur et fond le givre — puis retour en mode chaud.",
    },
    { type: 'note', text: 'Dans les régions tropicales, le dégivrage ne concerne guère que les PAC des zones d’altitude ; mais le même principe sert aux chambres froides et vitrines réfrigérées.' },

    { type: 'heading', text: 'Les types de pompes à chaleur' },
    {
      type: 'table',
      headers: ['Type', 'Principe', 'COP indicatif'],
      rows: [
        ['Air/air', 'split ou multisplit réversible', '2,5 à 3,5'],
        ['Air/eau', 'unité extérieure + module hydraulique (basse température 40–55 °C, haute température 65–80 °C)', '2,5 à 3,5'],
        ['Sol/sol, sol/eau', 'évaporateur à détente directe enterré (tubes cuivre gainés)', '3 à 4'],
        ['Eau glycolée/eau', 'capteurs enterrés + échangeurs à plaques', '3 à 4,5'],
        ['Eau/eau', 'eau de nappe ou de puits', '4 à 6'],
        ['Chauffe-eau thermodynamique', 'PAC sur un ballon d’eau chaude sanitaire (jusqu’à 65 °C)', '2 à 3,5'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'PAC haute température : compresseur à injection de vapeur (EVI), circuits en cascade (R410A + R134a) ou deux compresseurs en série.',
        'Chauffe-eau thermodynamique : jusqu’à 70 % d’économie par rapport à un ballon électrique ; consigne ≤ 50 °C pour garder un bon COP ; ne pas surdimensionner le ballon.',
      ],
    },

    { type: 'heading', text: 'Bivalence et loi d’eau' },
    {
      type: 'bullets',
      items: [
        'Point de bivalence : température extérieure où la puissance de la PAC ne couvre plus les besoins (intersection de la courbe de la PAC et de la droite des déperditions), souvent entre 0 et −5 °C.',
        'Monovalent : la PAC seule. Mono-énergétique : PAC ≈ 80 % + appoint électrique. Bivalent : PAC 50–60 % + chaudière, en parallèle (les deux ensemble) ou en alternatif (l’une puis l’autre).',
        'Loi d’eau : la température de départ s’ajuste à la température extérieure (sonde au nord), éventuellement corrigée par une sonde d’ambiance ; une pente par type d’émetteur.',
        'Une bouteille de découplage rend indépendants le débit de la PAC et celui des émetteurs.',
      ],
    },
    { type: 'formula', text: 'Pente de la loi d’eau = (T eau − T ambiante) / (T ambiante − T extérieure)   ex. (50 − 20) / (20 − (−5)) = 1,2' },
    {
      type: 'bullets',
      items: [
        'Pièges : PAC sous- ou surdimensionnée (+3 % de consommation), loi d’eau mal réglée (jusqu’à +10 %), dégivrage mal paramétré, volume d’eau insuffisant (courts cycles).',
        'Bon réglage : différentiel ≤ 3 K, écart entrée/sortie d’eau de la PAC ≤ 5 à 6 K.',
      ],
    },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Deux splits de 3,5 kW : A affiche un SEER de 6,1, B de 4,6. Ils fournissent chacun 5 000 kWh de froid par an, l’électricité coûte 100 FCFA/kWh. Quelle économie annuelle avec A ?',
      solution: ['A : 5 000 / 6,1 ≈ 820 kWh ; B : 5 000 / 4,6 ≈ 1 087 kWh.', 'Économie : ≈ 267 kWh/an, soit ≈ 26 700 FCFA par an et par appareil.'],
    },
    {
      type: 'exercise',
      question: 'Une PAC fonctionne en mode froid, mais un technicien constate que la batterie intérieure est chaude et l’extérieure froide. Quelle pièce suspecter ?',
      solution: ['La vanne 4 voies est restée (ou a basculé) en position chauffage : bobine non alimentée ou défectueuse, tiroir bloqué, ou écart HP/BP insuffisant pour la faire basculer.', 'On vérifie la tension à la bobine, puis les températures des tubes de la vanne (diagnostic détaillé dans la leçon « Diagnostic des pannes »).'],
    },
  ],
};
