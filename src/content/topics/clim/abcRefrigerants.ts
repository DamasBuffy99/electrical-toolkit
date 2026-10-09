import { TopicContent } from '../../types';

export const abcRefrigerantsContent: TopicContent = {
  title: 'Fluides frigorigènes et huiles',
  subtitle: 'Familles de fluides, ODP, GWP, TEWI, réglementation, sécurité et huiles compatibles',
  blocks: [
    {
      type: 'text',
      text: "Un fluide frigorigène est choisi pour ses qualités thermodynamiques, mais aussi pour son impact sur la couche d’ozone et sur le climat, sa toxicité et son inflammabilité. Le choix du fluide impose ensuite l’huile du compresseur et les précautions de manipulation.",
    },
    { type: 'illustration', name: 'tech-ph', caption: 'Chaque fluide a son propre diagramme enthalpique et ses propres pressions' },

    { type: 'heading', text: 'Les familles de fluides' },
    {
      type: 'table',
      headers: ['Famille', 'Exemples', 'Points forts', 'Points faibles'],
      rows: [
        ['Inorganiques (série 700)', 'R717 ammoniac, R744 CO₂, eau', 'sans effet sur l’ozone ni presque sur le climat', 'NH₃ toxique et corrosif ; CO₂ à très hautes pressions'],
        ['Hydrocarbures (série 600)', 'R290 propane, R600a isobutane', 'bons fluides, faible impact', 'inflammables'],
        ['CFC (ex. R12)', '—', '—', 'détruisent l’ozone : interdits'],
        ['HCFC (ex. R22)', '—', 'longtemps le standard des splits', 'détruisent l’ozone : interdits en Europe depuis 2015, en voie de disparition ailleurs'],
        ['HFC', 'R410A, R407C, R134a, R404A, R32', 'pas d’effet sur l’ozone', 'fort effet de serre (GWP élevé) : quotas en baisse'],
        ['HFO', 'R1234yf, R1234ze', 'GWP très faible (vie de ~11 jours dans l’air)', 'légèrement inflammables, produits de décomposition à surveiller'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Série 400 : mélanges zéotropes, avec glissement de température → toujours charger en phase LIQUIDE.',
        'Série 500 : mélanges azéotropes, sans glissement, se comportent comme un fluide pur.',
        'R410A (50 % R32 + 50 % R125) : splits et PAC récents. R407C (R32/R125/R134a) : remplacement du R22, fort glissement. R134a : froid, eau glacée, climatisation automobile. R404A / R507 : froid commercial basse température. R600a : réfrigérateurs domestiques.',
        'R717 (ammoniac) : froid industriel depuis plus d’un siècle, de plus en plus en groupes d’eau glacée. R744 (CO₂) : en cascade, non toxique et ininflammable, mais pressions très élevées.',
      ],
    },

    { type: 'heading', text: 'Ozone, effet de serre : ODP, GWP, TEWI' },
    {
      type: 'bullets',
      items: [
        'La couche d’ozone (20 à 50 km d’altitude) filtre les ultraviolets. Les fluides chlorés (CFC, HCFC) la détruisent.',
        'L’effet de serre maintient la Terre à +15 °C en moyenne ; les gaz fluorés à fort GWP l’amplifient.',
        'ODP (potentiel de destruction de l’ozone) : référence R11 = 1.',
        'GWP ou PRG (potentiel de réchauffement global) : référence CO₂ = 1, sur 100 ans.',
        'TEWI : impact total d’une installation sur sa durée de vie, effet direct (fuites) + effet indirect (électricité consommée).',
      ],
    },
    { type: 'formula', text: 'TEWI = GWP × m × f × n  +  E × n × A   (kg éq. CO₂)' },
    {
      type: 'text',
      text: 'm : charge (kg) ; f : taux de fuite annuel ; n : durée de vie (ans) ; E : consommation (kWh/an) ; A : émission de CO₂ par kWh du réseau. Une machine très efficace mais qui fuit, ou étanche mais énergivore, a un mauvais TEWI.',
    },
    {
      type: 'warning',
      text: "Le livre écrit que l’ODP « ne concerne que les fluides contenant du fluor (CFC, HCFC) ». C’est le CHLORE (et le brome) qui détruit l’ozone. Les HFC contiennent du fluor mais pas de chlore : leur ODP est nul. Le fluor est, lui, en cause dans le fort GWP.",
    },

    { type: 'heading', text: 'La réglementation (exemple européen F-Gas)' },
    {
      type: 'bullets',
      items: [
        '« Phase down » : réduction progressive (2015 → 2030) des quantités de HFC à fort GWP mises sur le marché.',
        'Contrôles d’étanchéité selon la charge en tonnes équivalent CO₂ (charge × GWP) et non plus en kg : 5 à 50 t → tous les ans (2 ans avec détecteur) ; 50 à 500 t → tous les 6 mois ; au-delà → tous les 3 mois.',
        'Exemple : 5 t éq. CO₂ = 3,49 kg de R134a ou 2,39 kg de R410A.',
        'Étiquetage des installations, registre conservé 5 ans (fluide, quantités ajoutées et récupérées, contrôles), personnel certifié, récupération obligatoire des fluides.',
      ],
    },
    { type: 'note', text: 'Ces règles sont européennes. Dans les pays africains, le protocole de Montréal (sortie des HCFC comme le R22) et l’amendement de Kigali (réduction des HFC) s’appliquent avec leurs propres calendriers : renseignez-vous sur la réglementation nationale.' },

    { type: 'heading', text: 'Choisir un fluide' },
    {
      type: 'bullets',
      items: [
        'Thermodynamique : puissance frigorifique volumique élevée, température critique élevée, point de congélation bas, taux de compression < 10, pressions adaptées au matériel, miscibilité avec l’huile, stabilité.',
        'Environnement : ODP nul, GWP le plus faible possible.',
        'Sécurité : ininflammable, non toxique à faible concentration. L’ammoniac impose gants, masque et combinaison, et menace les nappes phréatiques.',
      ],
    },

    { type: 'heading', text: 'Manipuler les fluides en sécurité' },
    {
      type: 'bullets',
      items: [
        'Lunettes et gants obligatoires : un jet de fluide liquide gèle les yeux et la peau (rincer abondamment à l’eau).',
        'Risque d’asphyxie en local confiné : les fluides, plus lourds que l’air, chassent l’oxygène.',
        'Jamais de flamme sur du fluide : sa décomposition produit des gaz très toxiques ; attention avant tout brasage. L’huile du circuit, elle, est inflammable.',
        'Bouteilles : attachées pendant le transport, jamais jetées, jamais chauffées à la flamme, jamais au-dessus de 50 °C, remplies à 80 % maximum.',
      ],
    },

    { type: 'heading', text: 'Les huiles frigorifiques' },
    {
      type: 'table',
      headers: ['Huile', 'Fluides', 'À savoir'],
      rows: [
        ['Minérale', 'CFC, HCFC (R22), ammoniac', 'non miscible avec les HFC : mauvais retour d’huile'],
        ['Alkylbenzène (AB)', 'R22 et mélanges HCFC', 'stable, compatible avec la minérale'],
        ['Polyalphaoléfine (PAO)', 'R22, ammoniac en conditions extrêmes', '« minérale synthétique »'],
        ['Polyalkylèneglycol (PAG)', 'R134a en climatisation automobile', 'très hygroscopique'],
        ['Polyolester (POE)', 'HFC en froid et climatisation', 'excellente, mais avide d’humidité'],
      ],
    },
    {
      type: 'note',
      text: "L’huile POE absorbe l’humidité de l’air et peut alors se décomposer (hydrolyse) en acides : ne jamais laisser un bidon ouvert, toujours un déshydrateur anti-acide. Bon solvant, elle décolle les dépôts et sert aussi à rincer un circuit lors d’une conversion vers un HFC.",
    },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un split contient 1,8 kg de R410A (GWP ≈ 2 088). Quelle charge en tonnes équivalent CO₂ ? Est-il soumis au contrôle périodique selon la règle européenne ?',
      solution: ['1,8 × 2 088 ≈ 3 758 kg, soit 3,76 t éq. CO₂.', 'C’est sous le seuil de 5 t : pas de contrôle périodique obligatoire selon cette règle (le seuil de 2,39 kg de R410A correspond justement à 5 t).'],
    },
    {
      type: 'exercise',
      question: 'Calculez le TEWI sur 15 ans d’un climatiseur : 3 kg de R410A (GWP 2 088), 5 % de fuite par an, 4 000 kWh/an, réseau à 0,5 kg CO₂/kWh. Quel effet domine ?',
      solution: ['Direct : 2 088 × 3 × 0,05 × 15 ≈ 4 700 kg CO₂.', 'Indirect : 4 000 × 15 × 0,5 = 30 000 kg CO₂.', 'TEWI ≈ 34,7 t CO₂ : l’électricité domine. Améliorer le COP pèse ici plus lourd que changer de fluide (mais limiter les fuites reste obligatoire).'],
    },
  ],
};
