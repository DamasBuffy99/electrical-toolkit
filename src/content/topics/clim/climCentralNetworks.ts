import { TopicContent } from '../../types';
import { fig } from './fig';

export const climCentralNetworksContent: TopicContent = {
  title: 'Groupe d’eau glacée, gaines et tuyauteries',
  subtitle: 'Choisir la centrale, le fluide, les compresseurs, puis dimensionner les réseaux d’air et d’eau',
  blocks: [
    {
      type: 'text',
      text: "Une centrale ne se choisit pas sur catalogue en cinq minutes : c’est un projet qui suit un cycle de vie, de l’analyse des besoins jusqu’à l’exploitation. Cette leçon parcourt le matériel de production (groupe, compresseurs, tours) puis les deux réseaux qui transportent le froid : l’air (gaines) et l’eau (tuyauteries).",
    },
    { type: 'illustration', name: 'clim-central', props: { highlight: 'chiller' }, caption: 'Le groupe d’eau glacée, cœur de la centrale' },
    fig('p131_0', 'Figure 5.25 — courbe de vie d’un projet : besoins, conception, montage, réalisation, exploitation'),

    { type: 'heading', text: 'Le fluide frigorigène' },
    {
      type: 'bullets',
      items: [
        'R22 : longtemps le plus utilisé (connu, bon marché), mais il détruit la couche d’ozone et est interdit par le protocole de Montréal. Dans les installations existantes, priorité à l’étanchéité (liaisons soudées).',
        'NH₃ (ammoniac) : excellent et sans impact sur l’ozone ni le climat (ODP et GWP nuls), à encourager dans les centrales à eau glacée… mais dangereux s’il est manipulé par des techniciens non formés.',
        'Hydrocarbures : peuvent être produits localement, meilleurs que les chlorofluorés pour l’environnement, moins efficaces que l’ammoniac.',
      ],
    },
    {
      type: 'text',
      text: 'Les tuyauteries frigorifiques sont en cuivre (fluides halogénés) ou en acier (ammoniac, gros diamètres). On les dimensionne par la méthode des vitesses ou avec les abaques des constructeurs (puissance, températures d’évaporation et de condensation, surchauffe, sous-refroidissement).',
    },

    { type: 'heading', text: 'Choisir le groupe d’eau glacée' },
    {
      type: 'text',
      text: "Un groupe est défini par ses températures d’eau glacée aller et retour (souvent 7/12 °C), le fluide de refroidissement du condenseur et sa puissance. Attention à distinguer :",
    },
    { type: 'formula', text: 'P brute = P utile (besoins des terminaux) + P pompage + apports thermiques des tuyauteries' },
    { type: 'note', text: 'En avant-projet, on majore P utile d’environ 5 % ; ces postes sont recalculés au projet final. Mieux vaut fractionner la puissance en 2 ou 3 groupes en parallèle : on suit la charge et on continue de fonctionner pendant l’entretien d’un groupe.' },
    fig('p134_1', 'Tableau 5.4 — technologies de compresseur, évaporateur et condenseur selon la puissance'),
    fig('p134_0', 'Tableau 5.5 — écarts de températures pour le calcul des échangeurs'),
    {
      type: 'bullets',
      items: [
        'Économie d’eau : préférez les condenseurs à air ou les aéroréfrigérants.',
        'Énergie : bon COP des compresseurs, échangeurs et auxiliaires bien dimensionnés.',
        'Faites un comparatif technico-économique groupe à air / groupe à eau, et pensez à la maintenance dès la conception.',
        'À la commande, fournissez tout : site et accès, puissances max et min, températures d’eau, conditions extérieures extrêmes, alimentation électrique et démarrage, régulation, encombrement, niveau sonore…',
      ],
    },
    fig('p136_0', 'Figures 5.26 et 5.27 — groupe de condensation par air et par eau'),

    { type: 'heading', text: 'Compresseurs, condenseurs et tours' },
    {
      type: 'text',
      text: "Les grandes centrales africaines (hôtels, banques) fonctionnent souvent depuis plus de 20 ans avec des compresseurs à pistons ouverts ou centrifuges, des technologies rustiques. Les compresseurs à vis, très performants, ont parfois fini à l’arrêt faute de maintenance adaptée. Le guide conseille donc des technologies rustiques, ou des vis testées en usine avec formation du personnel.",
    },
    fig('p136_1', 'Figures 5.28 et 5.29 — compresseur à pistons et compresseur centrifuge'),
    {
      type: 'bullets',
      items: [
        'Condenseurs évaporatifs : très efficaces en zone humide (côte).',
        'Tours de refroidissement : fonctionnent mieux en zone chaude et sèche (Sahel). Évitez les tours ouvertes (tartre, entretien permanent).',
        'Deux tours en parallèle, chacune capable des 2/3 de la charge, facilitent la maintenance.',
        'Placez la tour à l’ombre, dans une zone bien aérée, pour éviter qu’elle ne recycle son propre air chaud.',
        'Évaporateurs : surveillez la régulation de température d’eau, le calorifuge des tuyauteries (sinon condensation dans les faux plafonds) et la corrosion.',
      ],
    },
    fig('p138_0', 'Figures 5.30 et 5.31 — condenseur à air et tour de refroidissement'),

    { type: 'heading', text: 'Le réseau d’air : les gaines' },
    {
      type: 'text',
      text: "On commence par placer les bouches sur les plans, puis on trace le réseau en unifilaire avec l’architecte (poutres, poteaux, faux plafonds), en prévoyant les registres d’équilibrage, les clapets coupe-feu, les trappes de visite et l’évacuation des condensats des batteries.",
    },
    {
      type: 'table',
      headers: ['Climat', 'Gaines recommandées'],
      rows: [
        ['Tropical humide', 'Tôle galvanisée isolée : 50 mm de laine de verre au soufflage, 25 mm à la reprise, avec pare-vapeur. Pas de panneaux en fibre de verre (détruits en 3 à 5 ans par l’humidité).'],
        ['Sahélien', 'Tôle, panneaux de fibre de verre (silencieux mais plus de pertes de charge) ou contre-plaqué.'],
        ['Pratique locale', 'Gaines en staff (plâtre), peu chères (8 000 à 15 000 F CFA/m² en 2000), mais rarement équipées d’organes d’équilibrage et jamais nettoyées.'],
      ],
    },
    { type: 'subheading', text: 'Les pertes de charge' },
    { type: 'formula', text: 'Linéaires : ΔPl = j × L   (j en Pa/m lu sur l’abaque, L en m)' },
    { type: 'formula', text: 'Singulières (coudes, tés…) : ΔPs = ζ × ρ × V² / 2' },
    { type: 'warning', text: "Coquille dans le guide : la perte de charge singulière y est imprimée ΔPs = (ζ·ρ·V²) / (2·j). La formule correcte est ΔPs = ζ·ρ·V²/2 (le guide l’écrit d’ailleurs correctement, 0,5·ζ·ρ·V², pour les circuits d’eau)." },
    { type: 'formula', text: 'Diamètre équivalent d’une gaine rectangulaire a × b : φe = 1,265 × [ (a·b)³ / (a + b) ]^0,2' },
    fig('p141_0', 'Figure 5.32 — abaque des pertes de charge de l’air dans les conduits circulaires'),
    { type: 'subheading', text: 'Trois méthodes de dimensionnement' },
    {
      type: 'table',
      headers: ['Méthode', 'Principe', 'Pour'],
      rows: [
        ['Vitesse', 'On fixe la vitesse V : section S = D / V', 'Petits réseaux (3-4 bouches : boutiques, bureaux)'],
        ['Égal frottement', 'Même perte de charge unitaire j sur le trajet le plus défavorable', 'Immeubles, réseaux moyens'],
        ['Regain de pression statique', 'Les sections compensent les pertes de chaque tronçon', 'Grands réseaux à vitesse élevée'],
      ],
    },
    fig('p143_0', 'Tableau 5.7 — vitesses d’air recommandées au départ des réseaux (tôle / fibre de verre)'),
    {
      type: 'text',
      text: 'Ordres de grandeur au départ du réseau : 3 à 3,5 m/s pour des appartements de luxe ou un hôpital, 4 à 4,5 m/s pour des bureaux, 6 m/s pour des restaurants ou banques, 8 à 10 m/s en industrie. Plus la vitesse est faible, moins il y a de bruit et de consommation des ventilateurs.',
    },
    fig('p145_0', 'Figure 5.33 — types de diffuseurs : multicône, hélicoïdal, perforé, linéaire, buse, grille, bouche de sol'),
    fig('p146_0', 'Tableau 5.9 — performances indicatives des bouches : débit, charge maximale, écart de soufflage'),
    {
      type: 'bullets',
      items: [
        'Équilibrage à 3 niveaux (bouches, conduits secondaires, conduits principaux) avec volets, iris, papillons… : chaque bouche doit recevoir son débit.',
        'Ventilateurs : gros consommateurs ! Ne surdimensionnez pas leurs moteurs. Centrifuges à action (rendement 60–75 %, peu bruyants) ou à réaction (75–85 %).',
        'Clapets coupe-feu entre locaux : fermeture automatique à 70–72 °C, ou sur détection de fumée pour les feux électriques.',
      ],
    },

    { type: 'heading', text: 'Le réseau d’eau glacée' },
    {
      type: 'text',
      text: 'Une eau de départ trop froide entraîne surconsommation, pertes en ligne et condensations coûteuses : un régime légèrement plus élevé est souvent préférable.',
    },
    {
      type: 'table',
      headers: ['Réseau (tableau 5.11)', 'Principe', 'En Afrique tropicale'],
      rows: [
        ['2 tubes', 'Un aller d’eau glacée, un retour', 'Adapté : simple, peu coûteux, pas besoin de chauffage'],
        ['3 tubes', 'Aller froid, aller chaud, retour commun', 'À proscrire : mélange chaud/froid, gaspillage'],
        ['4 tubes', 'Deux circuits complets chaud et froid', 'À proscrire : trop onéreux et énergivore'],
      ],
    },
    fig('p148_0', 'Tableau 5.11 — critique des différents réseaux hydrauliques'),
    {
      type: 'bullets',
      items: [
        'Tuyauteries : PVC (sans soudure mais cher, importé), cuivre (bon mais cher) ou acier noir — le guide conseille l’acier noir de bonne qualité, avec inhibiteurs de corrosion et filtre.',
        'Vitesses maximales (tableau 5.12) : ~0,5 m/s en DN 15, ~1 m/s en DN 50, 1,5 m/s en DN 100 et plus.',
        'Pertes de charge ≈ proportionnelles au carré du débit : ΔP = k × D².',
        'Régulation par vannes 2 ou 3 voies sur le débit, ou par la température d’entrée d’eau.',
        'Équilibrage : défaut très fréquent, qui crée inconfort et surconsommation.',
        'Pompes : choisies sur hauteur manométrique et débit ; réglage par variation de vitesse (le mieux), changement de roue, bridage ou by-pass.',
      ],
    },
    { type: 'warning', text: "Coquille dans le tableau 5.12 : pour le DN 100, le diamètre extérieur est imprimé 14,3 mm ; il faut lire 114,3 mm." },
    fig('p149_0', 'Tableau 5.12 — vitesses maximales dans les tuyauteries d’eau glacée (acier et cuivre)'),

    { type: 'heading', text: 'Le bruit des centrales' },
    {
      type: 'text',
      text: 'Presque chaque composant est à la fois source et atténuateur de bruit. Un ventilateur est le plus silencieux à son point de rendement maximal ; les gaines isolées, les bouches et les silencieux atténuent. Dans le local technique : supports antivibratiles, manchettes souples, silencieux sur les gaines.',
    },
    fig('p154_1', 'Figure 5.37 — protection contre les bruits émis par un local technique'),
    { type: 'heading', text: "Exercices" },
    {
      type: 'exercise',
      question: "Les ventilo-convecteurs d’un hôtel demandent 400 kW. Quelle puissance de groupe retenir en avant-projet, et comment la répartir ?",
      solution: [
        "P brute ≈ P utile × 1,05 = 420 kW (pompage et apports des tuyauteries).",
        "Fractionner en 2 groupes de 210 kW (ou 3 de 140 kW) en parallèle : on suit la charge à mi-saison et on garde du froid pendant l’entretien d’un groupe.",
      ],
    },
    {
      type: 'exercise',
      question: "Une gaine de bureaux transporte 3 600 m³/h. Dimensionnez-la par la méthode de la vitesse (4 m/s). Quel est le diamètre équivalent d’une gaine rectangulaire de 600 × 400 mm ?",
      solution: [
        "Débit : 3 600 / 3 600 = 1 m³/s ; S = 1 / 4 = 0,25 m² → par exemple 500 × 500 mm ou un conduit circulaire de Ø 564 mm.",
        "φe = 1,265 × [ (0,6 × 0,4)³ / (0,6 + 0,4) ]^0,2 = 1,265 × (0,013 82)^0,2 ≈ 1,265 × 0,425 ≈ 0,54 m.",
        "La gaine 600 × 400 équivaut donc à un conduit circulaire d’environ 540 mm pour les pertes de charge.",
      ],
    },
  ],
};
