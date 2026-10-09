import { TopicContent } from '../../types';

export const abcSpecialContent: TopicContent = {
  title: 'Poutres climatiques, salles blanches, data centers et légionellose',
  subtitle: 'Les locaux et les risques qui demandent des solutions particulières',
  blocks: [
    {
      type: 'text',
      text: "Certains locaux ne se traitent pas comme un bureau ordinaire : très fortes charges (salles serveurs), exigences de propreté (salles blanches), recherche d’un confort silencieux sans courant d’air (poutres climatiques). Et dans toute installation avec de l’eau tiède et stagnante, il faut maîtriser le risque de légionellose.",
    },
    { type: 'illustration', name: 'tech-datacenter', caption: 'Allée froide, allée chaude : l’organisation des data centers' },

    { type: 'heading', text: 'Les poutres climatiques' },
    {
      type: 'bullets',
      items: [
        'Utilisées dans les bureaux, établissements recevant du public et hôpitaux : pas de filtre, pas de ventilateur, pas de bac à condensats, très peu d’entretien.',
        'Poutre active (à induction) : l’air neuf traité est injecté dans un plénum (50 à 100 Pa) et aspire par effet Venturi l’air de la pièce à travers une batterie chaude ou froide ; l’air mélangé est soufflé lentement. Débit d’air neuf réglable par sonde de CO₂.',
        'Poutre passive : convection naturelle seulement (l’air refroidi descend), uniquement en froid ; mise en régime plus lente.',
        'Eau : vitesse 0,2 à 0,3 m/s (au-delà, bruit), eau chaude ≤ 60 °C.',
        'Il ne faut jamais condenser : contact de feuillure de fenêtre (arrêt si fenêtre ouverte), sonde de condensation sur l’arrivée d’eau froide, température d’eau au-dessus du point de rosée.',
      ],
    },
    {
      type: 'warning',
      text: "Le livre donne pour les poutres actives une eau froide minimale « 1,5 °C sous le point de rosée » (16,5 °C pour un point de rosée de 18 °C), tout en voulant « éviter toute condensation » — et pour les poutres passives 0,5 °C AU-DESSUS du point de rosée. Une eau plus froide que le point de rosée fait condenser les tubes : retenez qu’il faut rester au-dessus du point de rosée de la pièce (avec une petite marge), pour les deux types.",
    },

    { type: 'heading', text: 'Les salles blanches' },
    {
      type: 'bullets',
      items: [
        'Enceintes où l’on contrôle la température, l’hygrométrie et le nombre de particules (électronique, pharmacie, santé, agroalimentaire, spatial). Norme ISO 14644 (classes d’empoussièrement).',
        'Surpression : empêcher les polluants d’entrer (électronique, pharmacie). Dépression : empêcher les contaminants de sortir (laboratoires de virologie), entrées et sorties d’air par filtres absolus.',
        'CTA dédiées : filtration en cascade (grossier → fin → absolu en bout de chaîne), batteries chaude et froide, ventilateurs centrifuges à forte pression disponible.',
        'Taux de brassage (débit soufflé / volume) bien plus élevé qu’en climatisation de confort, pour diluer les contaminants.',
      ],
    },

    { type: 'heading', text: 'Climatiser un data center' },
    {
      type: 'bullets',
      items: [
        'Les baies informatiques dégagent couramment de l’ordre de 2 kW par m² : on ne climatise plus la salle en entier, mais au plus près des serveurs.',
        'Allées froides / allées chaudes : l’air froid arrive par le faux plancher devant les baies (allée froide), traverse les serveurs et ressort à l’arrière (allée chaude), repris en partie haute.',
        'Confinement de l’allée froide (portes, plafond, obturation entre baies) : température homogène, moins de brassage, compresseurs moins sollicités.',
        'Free-cooling direct (air extérieur filtré), indirect (échangeur air/air) ou par eau glycolée (« free chilling ») quand l’écart avec l’extérieur est grand (≈ 15 K). L’humidité doit être maîtrisée (risques électrostatiques).',
        'Exemple de séquence : sous 18 °C dehors, mélange air neuf / air repris ; entre 18 et 20 °C, 100 % air neuf ; au-delà de 25 °C, plus de free-cooling.',
        'Tendances : plaques froides à liquide sur les composants, voire immersion des serveurs dans une huile diélectrique.',
      ],
    },
    { type: 'illustration', name: 'tech-datacenter', caption: 'Le confinement de l’allée froide évite que l’air chaud se mélange à l’air froid' },

    { type: 'heading', text: 'Légionellose et climatisation' },
    {
      type: 'bullets',
      items: [
        'La légionellose est une pneumonie grave causée par la bactérie Legionella, transmise par inhalation d’aérosols d’eau contaminée (douches, tours de refroidissement, humidificateurs).',
        'Conditions de prolifération : eau entre 25 et 40 °C, stagnante, avec oxygène, tartre et biofilm.',
        'Sources en climatisation : tours de refroidissement ouvertes surtout, bacs à condensats encrassés ou mal vidangés, humidificateurs, batteries et filtres sales des grosses installations.',
        'Prévention : bacs propres et bien en pente (pas d’eau stagnante), filtres changés, batteries nettoyées avec des produits chlorés bactéricides, traitement d’eau des tours par un spécialiste (chlore, dioxyde de chlore, biocides, biodispersants, chocs thermiques).',
        'Pour l’eau chaude sanitaire, un choc thermique à plus de 70 °C pendant quelques minutes détruit la bactérie.',
      ],
    },
    { type: 'note', text: 'Rappel des seuils pour une tour (leçon « Condenseur, détendeur, évaporateur ») : au-delà de 10 000 UFC/l de Legionella, arrêt immédiat, vidange, nettoyage et désinfection.' },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Dans un bureau à 24 °C et 70 % d’HR (point de rosée ≈ 18 °C), quelle température minimale d’eau froide faut-il envoyer dans des poutres climatiques ?',
      solution: ['L’eau doit rester au-dessus du point de rosée : au minimum ≈ 18,5 °C (marge de 0,5 K).', 'C’est pourquoi les poutres demandent un air neuf déshumidifié par la CTA : en climat humide, sans air neuf sec, le point de rosée de la pièce monte et les poutres perdent leur puissance.'],
    },
    {
      type: 'exercise',
      question: 'Une salle serveurs de 40 m² de baies. Quelle puissance frigorifique d’ordre de grandeur, et quelle organisation conseillez-vous ?',
      solution: ['≈ 2 kW/m² × 40 m² ≈ 80 kW de froid.', 'Allées froides et chaudes avec confinement de l’allée froide, soufflage par faux plancher, reprise en partie haute ; redondance (N+1) des machines pour la disponibilité.'],
    },
  ],
};
