import { TopicContent } from '../../types';
import { fig } from './fig';

export const climBuildingContent: TopicContent = {
  title: 'Concevoir un bâtiment qui chauffe moins',
  subtitle: 'Confort, enveloppe, orientation, protections solaires, inertie, isolation, vitrages et éclairage',
  blocks: [
    {
      type: 'text',
      text: "Le frigoriste arrive souvent trop tard : l’architecte a déjà dessiné de grandes baies vitrées à l’Ouest et un toit en tôle foncée… et il ne reste qu’à installer une climatisation énorme. Les vraies économies se décident à la conception du bâtiment, pour toute sa durée de vie.",
    },
    { type: 'illustration', name: 'clim-building', caption: 'Orientation, auvents, couleurs claires, isolation : la climatisation commence par l’architecture' },

    { type: 'heading', text: 'Le confort, première source d’économie' },
    {
      type: 'bullets',
      items: [
        'Zone de confort retenue : 20 à 27 °C et 20 à 80 % d’humidité.',
        'Une consigne fixe de 24 °C / 50 % impose de grosses charges. Une consigne flottante de 24 à 27 °C, suivant la température extérieure, économise beaucoup et réduit le choc thermique.',
        'Une installation voit son COP baisser d’environ 3 % par degré de consigne en moins ; une marge de 1 à 2 °C sur la consigne est tolérable.',
        'Mouvement d’air : il n’est ressenti qu’à partir de 0,2 m/s ; en ventilation, 1,5 m/s est une vitesse moyenne conseillée et 5 m/s devient inconfortable.',
      ],
    },
    fig('p158_0', 'Figure 6.1 — zone de confort et types de climat'),

    { type: 'heading', text: 'L’air neuf : juste ce qu’il faut' },
    {
      type: 'text',
      text: "Il faut renouveler l’air pour l’hygiène (O₂ ≈ 20,7 %, CO₂ ≈ 0,03 % ; évacuer odeurs, micro-organismes, vapeur d’eau). Les normes proposent 30 m³/h par personne (20 % d’insatisfaits) ; en Afrique, 20 m³/h est un bon compromis. Au-delà, on refroidit de l’air chaud et humide pour rien.",
    },
    {
      type: 'bullets',
      items: [
        'Les infiltrations par les fentes des fenêtres et portes sont un renouvellement « subi » : 5 m³/h par mètre de fente pour une porte en bois, jusqu’à 110 m³/h pour une porte métallique mal ajustée par vent fort.',
        'Des joints réduisent ces infiltrations de 35 à 40 %. Les portes de magasin ouvertes en permanence sont un gouffre (jusqu’à 300 m³/h par m²).',
        'Le taux de CO₂ d’une salle de réunion bondée dépasse vite les limites : adaptez le débit à l’occupation réelle.',
      ],
    },
    fig('p160_0', 'Tableau 6.1 — infiltrations d’air par les fenêtres selon le vent'),
    fig('p165_0', 'Figure 6.6 — évolution du CO₂ dans une salle occupée'),

    { type: 'heading', text: 'Le rayonnement des parois et l’effet de serre' },
    {
      type: 'text',
      text: "Même avec un air à la bonne température, des murs ou un plafond chauds rendent inconfortable : un écart de +3 °C entre parois et air suffit. L’occupant ressent une température résultante, moyenne de l’air et des parois :",
    },
    { type: 'formula', text: 'T ressentie = (T air + T parois) / 2' },
    fig('p162_0', 'Figure 6.2 — rayonnement des parois et confort thermique'),
    {
      type: 'text',
      text: "Le soleil qui traverse une vitre est absorbé par les murs et le mobilier, puis restitué à l’air en partie tout de suite, en partie plus tard (apports déphasés) : c’est l’effet de serre, à éviter absolument sous les tropiques. Les ouvertures à l’Est et à l’Ouest y sont particulièrement propices.",
    },
    fig('p163_0', 'Figure 6.3 — gains solaires instantanés et retardés à travers les vitres'),

    { type: 'heading', text: 'Arrêter le soleil avant la vitre' },
    {
      type: 'bullets',
      items: [
        'Dispositifs horizontaux (auvents, casquettes) : contre le soleil haut de midi, sur les façades Nord et Sud.',
        'Dispositifs verticaux (lames, joues) : contre le soleil rasant du matin et de l’après-midi.',
        'Sur un bâtiment existant : stores et rideaux. Un store extérieur est le plus efficace ; un rideau intérieur doit être clair et réfléchissant.',
        'Végétation, vérandas, débords de toiture ombragent aussi murs et toiture.',
      ],
    },
    fig('p164_0', 'Figure 6.4 — dispositifs d’ombrage horizontaux, verticaux et mixtes'),
    fig('p164_1', 'Figure 6.5 — exemple de façade protégée par des brise-soleil (Martinique)'),

    { type: 'heading', text: 'L’enveloppe : forme, orientation, couleurs' },
    {
      type: 'text',
      text: 'Le bâtiment reçoit la chaleur du soleil (Qr = ε·S·Φs) et de l’air chaud (Qc = h·S·(Te − Tpe)). Les deux sont proportionnelles à sa surface : le premier réflexe est de réduire la surface exposée.',
    },
    {
      type: 'bullets',
      items: [
        'Forme compacte : faible rapport surface / volume.',
        'Axe long orienté Est-Ouest : les grandes façades regardent le Nord et le Sud, les pignons Est et Ouest sont petits et peu percés.',
        'Masques : auvents, stores, vérandas, végétation.',
        'Ouvertures en nombre et surface limités.',
        'Revêtements extérieurs clairs (toit et murs).',
      ],
    },
    fig('p167_0', 'Figure 6.6 — compacité et forme : bon et mauvais bâtiment'),
    fig('p173_0', 'Figure 6.9 — à Ouagadougou, les façades Est et Ouest reçoivent 2 à 3 fois plus que le Nord'),
    { type: 'note', text: 'Règle d’or : placez les ouvertures au Nord ou au Sud (le Nord reçoit le moins d’énergie dans l’hémisphère nord) et protégez-les du soleil direct.' },

    { type: 'heading', text: 'Inertie et isolation' },
    {
      type: 'text',
      text: "La diffusivité D = λ / (ρ·c) dit à quelle vitesse la chaleur traverse un matériau. Un bâtiment lourd (inertie) stocke la chaleur : il écrête les pics de température intérieure et les retarde de plusieurs heures. On classe les bâtiments par leur masse par m² : légers < 75 kg/m², moyens 75 à 300, lourds > 300.",
    },
    fig('p168_1', 'Figure 6.7 — amortissement et déphasage de la température intérieure grâce à l’inertie'),
    {
      type: 'text',
      text: "L’isolation (laine de verre, polystyrène, polyuréthane, kapok, fibres de coton) freine le passage de la chaleur. On isole en priorité la toiture et les façades très ensoleillées. Inutile d’isoler les cloisons entre locaux climatisés en même temps. Attention aux ponts thermiques : la chaleur contourne l’isolant par la cloison ou la dalle non isolée.",
    },
    fig('p171_0', 'Tableau 6.9 — coefficients k de différentes structures de paroi'),
    fig('p172_0', 'Figure 6.8 — pont thermique : la chaleur passe par la cloison non isolée'),
    {
      type: 'table',
      headers: ['Élément (tableau 6.17)', 'Flux habituel (W/m²)', 'Objectif (W/m²)'],
      rows: [
        ['Fenêtres à vitrage simple', '180', '50'],
        ['Murs', '100', '35'],
        ['Toitures', '130', '40'],
      ],
    },

    { type: 'heading', text: 'Choisir les vitrages' },
    {
      type: 'text',
      text: "Un bon vitrage laisse passer la lumière (visible) mais pas la chaleur (infrarouge) : c’est un vitrage sélectif. Son surcoût est vite amorti dans un bâtiment climatisé. Les coefficients à comparer :",
    },
    {
      type: 'bullets',
      items: [
        'τvis : transmission de la lumière visible (à maximiser).',
        'CGS : coefficient de gain solaire, transmission totale de chaleur ; CO = 0,87 × CGS : coefficient d’ombrage par rapport à une vitre claire de 5 mm (à minimiser).',
        'Ke = τvis / CO : efficacité lumineuse. Plus il est grand, plus la vitre éclaire sans chauffer.',
      ],
    },
    {
      type: 'table',
      headers: ['Vitrage (tableau 6.16)', 'τvis', 'CGS', 'CO', 'Ke'],
      rows: [
        ['Clair simple 5 mm', '0,89', '0,83', '0,96', '0,93'],
        ['Clair + revêtement sélectif', '0,70', '0,45', '0,50', '1,40'],
        ['Clair + revêtement sélectif gris', '0,40', '0,38', '0,44', '0,91'],
      ],
    },
    fig('p179_1', 'Tableau 6.16 — propriétés de vitrages du commerce'),
    { type: 'formula', text: 'Rapport ouvertures / murs (ROM) conseillé : 1/3 sur les façades Nord et Sud, 1/4 sur les façades Est et Ouest' },

    { type: 'heading', text: 'L’éclairage : deux fois gagnant' },
    {
      type: 'text',
      text: "Chaque watt d’éclairage devient un watt de chaleur que le climatiseur doit retirer : économiser sur l’éclairage économise donc aussi sur la climatisation. On éclaire au niveau requis par l’activité, avec les lampes les plus efficaces.",
    },
    fig('p175_0', 'Figure 6.11 — niveau d’éclairement requis par activité (lux)'),
    {
      type: 'table',
      headers: ['Lampe (tableau 6.12)', 'Efficacité (lm/W)', 'Durée de vie (h)'],
      rows: [
        ['Incandescence standard', '5 – 17', '1 000 – 3 000'],
        ['Halogène', '18 – 25', '1 000 – 3 000'],
        ['Fluorescent tube droit ou en U', '65 – 110', '7 500 – 20 000'],
        ['Fluocompacte', '25 – 55', '7 500 – 20 000'],
        ['Sodium haute pression', '45 – 110', '7 500 – 40 000'],
      ],
    },
    fig('p177_0', 'Tableau 6.13 — chaleur générée par 1 000 lumens : 57 W en incandescence, 12 à 15 W en fluorescent'),
    fig('p175_1', 'Tableau 6.11 — densités de puissance d’éclairage (W/m²) : 10,5 pour des bureaux'),

    { type: 'heading', text: 'Les ratios pour juger un bâtiment' },
    fig('p177_1', 'Tableau 6.14 — gains thermiques courants, moyens et maximum à rechercher par poste'),
    { type: 'formula', text: 'Ro = Consommation électrique annuelle (kWh) / Surface climatisée (m²)' },
    {
      type: 'table',
      headers: ['Bâtiment (code ivoirien, tableau 6.18)', 'Ro de référence (kWh/m².an)'],
      rows: [
        ['Grand immeuble de bureaux', '160'],
        ['Petit immeuble de bureaux', '150'],
        ['Grand hôtel', '180'],
        ['Hôpital', '250'],
        ['Centre commercial', '200'],
        ['Appartement (grand immeuble)', '130'],
      ],
    },
    fig('p181_0', 'Tableau 6.18 — ratios proposés par le code ivoirien de qualité énergétique'),
    {
      type: 'note',
      text: 'Pour convaincre un maître d’ouvrage, complétez Ro par des ratios financiers : coût d’exploitation par m² et par an, coût de réalisation par m². Un investissement en isolation, protections solaires ou vitrages sélectifs se justifie par les économies d’exploitation.',
    },
  ],
};
