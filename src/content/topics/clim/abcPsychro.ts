import { TopicContent } from '../../types';

export const abcPsychroContent: TopicContent = {
  title: 'L’air humide : psychrométrie, séchage et humidification',
  subtitle: 'Température sèche et humide, point de rosée, enthalpie : lire et transformer l’air',
  blocks: [
    {
      type: 'text',
      text: "L’air que l’on climatise est un mélange d’air sec et de vapeur d’eau. La psychrométrie étudie ce mélange. Comprendre l’air humide, c’est comprendre pourquoi un climatiseur sèche l’air, pourquoi les tuyaux froids « suintent », et comment calculer une batterie froide.",
    },
    { type: 'illustration', name: 'tech-psychro', props: { variant: 'cooling' }, caption: 'Le passage de l’air dans une batterie froide, sur le diagramme de l’air humide' },

    { type: 'heading', text: 'Les grandeurs de l’air humide' },
    {
      type: 'table',
      headers: ['Grandeur', 'Définition', 'Unité'],
      rows: [
        ['Température sèche', 'celle du thermomètre ordinaire', '°C'],
        ['Température humide', 'celle d’un thermomètre à bulbe mouillé et ventilé (l’évaporation le refroidit)', '°C'],
        ['Point de rosée', 'température à laquelle la vapeur commence à se condenser', '°C'],
        ['Humidité absolue (teneur en eau ω)', 'masse de vapeur par kg d’air sec', 'g/kg ou kg/kg'],
        ['Humidité relative (HR)', 'vapeur présente / maximum possible à cette température', '%'],
        ['Enthalpie', 'énergie totale (sensible + latente) de l’air', 'kJ/kg d’air sec'],
        ['Volume spécifique', 'volume occupé par 1 kg d’air', 'm³/kg'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Quand on refroidit de l’air sans le sécher, son humidité absolue ne change pas mais son humidité relative AUGMENTE ; quand on le chauffe, elle baisse.',
        'L’humidité absolue reste constante tant qu’on ne descend pas sous le point de rosée.',
        'Le diagramme de l’air humide (diagramme psychrométrique) relie toutes ces grandeurs : deux d’entre elles suffisent à placer un point.',
      ],
    },

    { type: 'heading', text: 'Mesurer l’humidité' },
    {
      type: 'bullets',
      items: [
        'Psychromètre : deux thermomètres, l’un sec, l’autre entouré d’une mèche mouillée et ventilé. L’écart entre les deux donne l’humidité relative (réglette ou diagramme).',
        'Hygromètre à cheveu : le cheveu s’allonge avec l’humidité. Simple, peu précis.',
        'Hygromètre capacitif : un polymère absorbe l’eau et modifie un condensateur. Précis (≈ ±2 %), c’est celui des appareils numériques.',
        'Hygromètre résistif (chlorure de lithium) : moins fiable (≈ ±5 %).',
      ],
    },

    { type: 'heading', text: 'Les conditions de confort selon l’ABC' },
    {
      type: 'bullets',
      items: [
        'Température : 18 à 23 °C sans gêne pour la plupart des personnes ; la température des parois compte (air à 20 °C et murs à 15 °C → ressenti ≈ 18 °C).',
        'Humidité relative : idéale entre 30 et 65 %. À 22 °C, 40 à 65 % ne gênent personne ; à 24 °C et 82 %, on transpire abondamment.',
        'Air neuf : au moins 30 m³/h par adulte.',
        'Vitesse de l’air : la gêne apparaît à partir de 0,3 m/s.',
      ],
    },
    {
      type: 'warning',
      text: "Les deux livres divergent sur la température de confort : l’ABC (écrit pour l’Europe) donne 18 à 23 °C, le guide IEPF (mesures en Afrique tropicale) 23 à 28 °C, avec une consigne conseillée de 24 à 26 °C et au plus 6 °C sous la température extérieure. Sous les tropiques, retenez les valeurs IEPF : régler 20 °C coûte cher et crée un choc thermique.",
    },
    { type: 'illustration', name: 'clim-comfort', caption: 'La zone de confort tropicale (guide IEPF)' },

    { type: 'heading', text: 'Chauffer l’air' },
    {
      type: 'bullets',
      items: [
        'Batterie à eau chaude : serpentin cuivre à ailettes aluminium, eau et air à contre-courant, eau à ≈ 50 °C (chaudière ou PAC), réglée par vanne 2 ou 3 voies.',
        'Résistances électriques : monophasé jusqu’à 3 kW, triphasé au-delà, en plusieurs étages ou modulées par triac. Sécurités indispensables : thermostat incendie dans la gaine, thermostats de surchauffe (hypsothermes) sur les épingles, pressostat de débit d’air (pas de chauffe sans ventilation), post-ventilation temporisée.',
        'Condenseur de pompe à chaleur soufflant directement dans l’air.',
      ],
    },
    { type: 'formula', text: 'P (W) = 0,34 × débit (m³/h) × Δt (K)   — chauffage à humidité absolue constante' },

    { type: 'heading', text: 'Refroidir l’air : sensible ou avec séchage' },
    {
      type: 'bullets',
      items: [
        'Refroidissement sensible : surface de la batterie AU-DESSUS du point de rosée. Pas de condensation, ω constant, HR qui monte.',
        'Refroidissement avec déshumidification : surface SOUS le point de rosée. La vapeur se condense sur les ailettes et s’écoule au bac : ω baisse.',
        'Batterie à eau glacée : régime courant 6/12 °C ou 7/12 °C, eau éventuellement glycolée (antigel), ce qui réduit un peu l’échange.',
        'Batterie à détente directe : c’est l’évaporateur du circuit frigorifique.',
      ],
    },
    { type: 'formula', text: 'Débit massique Qm = Qv / v   (kg/s = m³/s ÷ m³/kg)' },
    { type: 'formula', text: 'Puissance de la batterie froide P = Qm × (h entrée − h sortie)   (kW)' },
    { type: 'illustration', name: 'tech-psychro', props: { variant: 'cooling' }, caption: 'A→R refroidissement sensible ; R→B condensation (séchage) ; B→C réchauffage' },

    { type: 'heading', text: 'Humidifier' },
    {
      type: 'table',
      headers: ['Procédé', 'Principe', 'À savoir'],
      rows: [
        ['Vapeur', 'résistance ou électrodes font bouillir l’eau, vapeur injectée en gaine', 'précis, hygiénique (eau bouillie)'],
        ['Ruissellement', 'l’eau coule sur un média alvéolaire traversé par l’air', 'refroidit l’air ; purge de déconcentration ; risque bactérien'],
        ['Pulvérisation', 'buses en fines gouttelettes + séparateur', 'débit important'],
        ['Ultrasons', 'membrane vibrante, brouillard très fin', 'surtout chez les particuliers'],
        ['Haute pression (≈ 80 bar)', 'nébulisation très fine d’eau traitée', 'humidification rapide'],
      ],
    },
    { type: 'illustration', name: 'tech-psychro', props: { variant: 'evaporative' }, caption: 'Humidifier un air chaud et sec le refroidit : c’est le ventifraîcheur du Sahel' },

    { type: 'heading', text: 'Déshumidifier' },
    {
      type: 'bullets',
      items: [
        'Par le froid : on refroidit sous le point de rosée, puis on réchauffe pour ne pas souffler trop froid (batterie électrique, eau chaude, ou condenseur dans un déshumidificateur). Exemple : air à 25 °C et 67 % séché sur la batterie froide, puis réchauffé à 35 °C : HR ≈ 30 %.',
        'Sous 15 °C ambiants, l’extraction devient difficile ; si le point de rosée visé est sous 5 °C, la batterie givre.',
        'Par adsorbant solide : roue dessicante (gel de silice ou tamis moléculaire) régénérée par de l’air chaud.',
        'Par absorbant liquide : solution de chlorure ou bromure de lithium pulvérisée, régénérée par la chaleur ; bactéricide, apprécié en hôpital.',
      ],
    },

    { type: 'heading', text: 'Les échangeurs et la récupération d’énergie' },
    {
      type: 'bullets',
      items: [
        'Trois circulations : contre-courant (la plus efficace), courants croisés, co-courant.',
        'Échange diphasique (évaporation, condensation) ou monophasique (chaleur sensible seule).',
        'Un bon échangeur : grande surface, faibles pertes de charge, flux bien répartis. Calcul par la méthode DTLM ou NUT.',
        'Roue thermique : récupère la chaleur (et l’humidité si elle est traitée dessicante) de l’air extrait pour traiter l’air neuf ; tourne lentement (≈ 20 tr/min), air à 1,5–4 m/s, à protéger par de bons filtres.',
      ],
    },
    { type: 'formula', text: 'P = K × S × ΔT   (K : coefficient d’échange, S : surface, ΔT : écart moyen)' },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Une batterie froide traite 2 000 m³/h d’air. L’enthalpie passe de 70 à 40 kJ/kg ; le volume spécifique au soufflage est 0,85 m³/kg. Quelle est sa puissance ?',
      solution: ['Qm = 2 000 / 3 600 / 0,85 ≈ 0,654 kg/s.', 'P = 0,654 × (70 − 40) ≈ 19,6 kW.'],
    },
    {
      type: 'exercise',
      question: 'Quelle puissance électrique faut-il pour réchauffer 1 500 m³/h d’air de 15 K ?',
      solution: ['P = 0,34 × 1 500 × 15 = 7 650 W ≈ 7,7 kW → alimentation triphasée (au-delà de 3 kW), en plusieurs étages.'],
    },
    {
      type: 'exercise',
      question: 'Un local est à 26 °C et 55 % d’HR (point de rosée ≈ 16 °C). Une tuyauterie d’eau glacée à 7 °C le traverse. Que se passe-t-il, et que faire ?',
      solution: ['Sa surface (≈ 7 °C) est bien sous le point de rosée : la vapeur de l’air se condense, le tube « goutte ».', 'Il faut l’isoler avec un isolant fermé, sans lame d’air, assez épais pour que sa face extérieure reste au-dessus de 16 °C.'],
    },
  ],
};
