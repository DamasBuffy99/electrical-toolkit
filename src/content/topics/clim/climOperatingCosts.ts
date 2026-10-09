import { TopicContent } from '../../types';
import { fig } from './fig';

export const climOperatingCostsContent: TopicContent = {
  title: 'Coûts d’exploitation, efficacité et maintenance',
  subtitle: 'Rendement de Carnot, consommation annuelle, coefficient d’exploitation et contrats d’entretien',
  blocks: [
    {
      type: 'text',
      text: "Une installation de climatisation coûte bien plus cher à faire fonctionner pendant 15 ou 20 ans qu’à acheter. Pour comparer des solutions, il faut savoir estimer ce qu’elle consommera chaque année, comprendre d’où viennent les pertes, et organiser l’entretien.",
    },
    { type: 'illustration', name: 'clim-energy', caption: 'La consommation d’une année, poste par poste' },

    { type: 'heading', text: 'Le rendement d’un compresseur' },
    {
      type: 'text',
      text: 'Le cycle idéal de Carnot donne la meilleure efficacité théoriquement possible entre une source froide (évaporateur, To) et une source chaude (condenseur, Tc), en kelvins :',
    },
    { type: 'formula', text: 'Efficacité théorique : Eth = To / (Tc − To)' },
    { type: 'formula', text: 'Efficacité réelle : Er = Po / Pw   (froid produit / puissance réellement absorbée)' },
    { type: 'formula', text: 'Rendement de Carnot : Nc = Er / Eth' },
    {
      type: 'text',
      text: 'Exemple : évaporation à 5 °C (278 K), condensation à 45 °C (318 K) → Eth = 278 / 40 ≈ 7. Un compresseur dont le rendement de Carnot est 0,5 donne un COP réel d’environ 3,5. On voit tout l’intérêt de rapprocher To et Tc : évaporateur pas trop froid (consigne raisonnable) et condenseur bien ventilé, à l’ombre.',
    },
    fig('p055_0', 'Tableau 2.1 — rendement de Carnot usuel des compresseurs (pistons, scroll, vis, centrifuges)'),

    { type: 'heading', text: 'Ce qui consomme dans une installation' },
    {
      type: 'table',
      headers: ['Poste', 'Symbole', 'Calcul'],
      rows: [
        ['Compresseur', 'Cc', 'Σ Pa × heures de marche, régime par régime'],
        ['Auxiliaires permanents (ventilateurs, pompes)', 'Cp', '(Pv + Pp) × heures d’utilisation'],
        ['Auxiliaires non permanents (résistance de carter, électrovanne, ventilateur de condenseur)', 'Cnp', 'Prc × heures d’arrêt + Pvm × heures de marche'],
        ['Dégivrage', 'Cd', 'Puissance × durée × nombre de dégivrages'],
      ],
    },
    { type: 'formula', text: 'C (kWh/an) = Cc + Cp + Cnp + Cd' },
    {
      type: 'text',
      text: "Le compresseur ne tourne pas à pleine puissance toute l’année : il suit les besoins de froid BF. Ses heures de marche dépendent du taux de charge et du rendement de production de froid RPF, qui s’effondre à très faible charge (marche/arrêt fréquents) :",
    },
    { type: 'formula', text: 'hc = nh × BF / (RPF × Qo)   et   Cc = Σ Pa × hc' },
    fig('p064_0', 'Rendement de production de froid (RPF) selon le taux de fonctionnement BF/Qo'),
    fig('p063_0', 'Puissance frigorifique et puissance absorbée selon les températures d’évaporation et de condensation'),
    { type: 'note', text: 'Un mauvais entretien, de mauvais réglages, une charge de fluide incorrecte ou une machine mal adaptée aux besoins augmentent fortement la consommation globale.' },

    { type: 'heading', text: 'Le coefficient d’exploitation (COE)' },
    {
      type: 'text',
      text: "Le COP décrit la machine à un instant donné ; le COE juge l’installation sur toute l’année, auxiliaires et pertes compris :",
    },
    { type: 'formula', text: 'EF annuelle = Σ BF × heures   (énergie froid utile, kWh)' },
    { type: 'formula', text: 'COE = EF annuelle / C annuelle' },
    {
      type: 'bullets',
      items: [
        'Les normes américaines préconisent un COE > 3 pour une climatisation efficace.',
        'Aux États-Unis, une installation de climatisation dont l’efficacité saisonnière est inférieure à 2,9 est interdite.',
        'Plus l’installation est performante, bien réglée et bien entretenue, plus le COE est élevé.',
      ],
    },

    { type: 'heading', text: 'Exemple : une installation de 10 kW sur un an' },
    {
      type: 'text',
      text: 'Une installation frigorifique de 10 kW maximum fonctionne toute l’année (8 760 h), à évaporation −10 °C, avec trois régimes de condensation (50, 40 et 30 °C) selon la température extérieure. Les besoins varient de 1 à 10 kW.',
    },
    fig('p065', 'Calcul détaillé régime par régime : taux de fonctionnement, RPF, heures de marche, consommation'),
    {
      type: 'table',
      headers: ['Poste', 'Hypothèse', 'kWh/an'],
      rows: [
        ['Compresseur Cc', '5 091 h de marche au total', '29 556'],
        ['Ventilateur d’évaporateur (permanent)', '0,5 kW × 8 760 h', '4 380'],
        ['Ventilateur condenseur + électrovanne + résistance de carter', '(0,3 + 0,01) × 5 091 + 0,02 × 3 669', '1 651'],
        ['Dégivrage', '6 kW × 0,25 h × 4/jour × 365 j', '2 188'],
        ['Total C', '', '37 775'],
      ],
    },
    { type: 'warning', text: "Coquilles dans les tableaux de l’exemple : certaines durées et énergies ont perdu un zéro à l’impression (150 h au lieu de 1 500 h, 1 350 kWh au lieu de 13 500, 1 600 au lieu de 16 000, 1 050 au lieu de 10 500). Le total de 61 120 kWh n’est juste qu’avec les valeurs complètes. Le dégivrage fait exactement 6 × 0,25 × 4 × 365 = 2 190 kWh (le guide arrondit à 2 188)." },
    { type: 'formula', text: 'EF = 61 120 kWh/an  →  COE = 61 120 / 37 775 = 1,62' },
    {
      type: 'note',
      text: 'Ce COE de 1,62 est celui d’une installation de froid négatif (évaporation à −10 °C). En climatisation, l’évaporation est positive (≈ +5 °C) et le COE saisonnier doit dépasser 3. Retenez surtout la méthode… et que les auxiliaires et le dégivrage pèsent ici 22 % de la consommation !',
    },
    fig('p067', 'Page 52 du guide — énergie froid annuelle et efficacité moyenne de l’exemple'),
    { type: 'illustration', name: 'clim-energy', caption: 'Récapitulatif de l’exemple' },

    { type: 'heading', text: 'Le coût global d’exploitation' },
    { type: 'formula', text: 'CGEx = CE (énergie) + CM (entretien et maintenance)' },
    {
      type: 'text',
      text: 'Le coût de l’énergie dépend surtout du tarif (heures pleines, de pointe…). Mais un contrat d’entretien sérieux fait baisser CE : un condenseur propre, une charge de fluide correcte et des réglages justes peuvent faire gagner des dizaines de pourcents.',
    },

    { type: 'heading', text: 'Organiser l’entretien' },
    {
      type: 'text',
      text: "L’exploitation peut être confiée au personnel de l’établissement (en comptant toutes les charges salariales) ou à une entreprise spécialisée. Deux types de contrats :",
    },
    {
      type: 'table',
      headers: ['Contrat', 'Engagement', 'Contenu'],
      rows: [
        ['Contrat d’entretien', 'De moyens', 'Le prestataire réalise des visites et opérations définies pour maintenir l’installation en état normal de marche.'],
        ['Contrat d’exploitation', 'De résultats', 'Le prestataire garantit un résultat (température dans les locaux…) et choisit ses moyens. Tranquillité totale du client.'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Conduite et entretien courant : démarrage, arrêt, réglages, entretien de routine.',
        'Gestion de l’énergie : le prestataire prend en charge la fourniture d’énergie — au forfait, ajustée à la température extérieure, ou selon les arrêts pour panne.',
        'Garantie totale : renouvellement et gros entretien des matériels contre un forfait annuel, sur 10 ans maximum.',
        'Possibilité de télésurveillance ou télégestion avec délais d’intervention garantis (jusqu’à 24 h/24, 365 j/an).',
      ],
    },
    {
      type: 'note',
      text: 'À la réception d’une installation, exigez : les plans et schémas d’exécution, la notice de fonctionnement et de réglage, la notice d’entretien et de diagnostic, et la liste des pièces de rechange préconisées.',
    },
    { type: 'illustration', name: 'clim-cycle', caption: 'Pour finir : un cycle bien réglé, un condenseur propre, une consigne raisonnable' },
    { type: 'heading', text: "Exercices" },
    {
      type: 'exercise',
      question: "Un compresseur (rendement de Carnot 0,5) évapore à 5 °C. Comparez son COP si le condenseur est à 50 °C (en plein soleil) ou à 40 °C (à l’ombre, bien ventilé).",
      solution: [
        "To = 278 K. À 50 °C : Eth = 278 / 45 = 6,18 → COP ≈ 0,5 × 6,18 = 3,1.",
        "À 40 °C : Eth = 278 / 35 = 7,94 → COP ≈ 4,0.",
        "Un condenseur bien placé améliore le COP d’environ 28 % : autant d’électricité en moins.",
      ],
    },
    {
      type: 'exercise',
      question: "Un ventilateur d’évaporateur de 0,3 kW tourne en permanence. Le compresseur ne fonctionne que 4 000 h/an. Combien économise-t-on en asservissant le ventilateur au compresseur ?",
      solution: [
        "En permanence : 0,3 × 8 760 = 2 628 kWh/an.",
        "Asservi : 0,3 × 4 000 = 1 200 kWh/an.",
        "Économie : 1 428 kWh/an (mais le brassage d’air s’arrête : à décider selon le confort recherché).",
      ],
    },
    {
      type: 'exercise',
      question: "Une installation de climatisation produit 120 000 kWh de froid par an et consomme 45 000 kWh d’électricité. Calculez son COE et concluez.",
      solution: [
        "COE = 120 000 / 45 000 = 2,67.",
        "C’est inférieur à 3 (et même à 2,9, seuil d’interdiction aux États-Unis) : vérifier l’entretien (condenseur, filtres, charge en fluide), les réglages et les auxiliaires.",
      ],
    },
  ],
};
