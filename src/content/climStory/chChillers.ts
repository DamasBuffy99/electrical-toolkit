import { TopicContent } from '../types';
import { fig } from '../topics/clim/fig';

export const chChillersContent: TopicContent = {
  title: 'Les groupes d’eau glacée',
  subtitle: 'Trois groupes de 150 kW, mais lesquels ? Refroidis par air ou par eau, à quelle température d’eau, avec quel rendement saisonnier ? Ousmane compare les offres avec Félix, calcule les débits d’eau et transforme la chaleur rejetée par les groupes en eau chaude pour les chambres.',
  blocks: [
    { type: 'scene', text: 'Mois 3 · Analyse des offres, avec Félix Amoussou et Clarisse Houndé' },
    {
      type: 'objectives',
      items: [
        'Choisir entre groupe refroidi par air et groupe refroidi par eau avec tour.',
        'Choisir le régime d’eau glacée (7/12 °C) et en déduire les débits.',
        'Comparer des groupes par leur EER et leur rendement saisonnier.',
        'Récupérer la chaleur des groupes pour l’eau chaude sanitaire.',
        'Lire la liste des équipements d’une centrale de froid.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '7 / 12 °C', label: 'régime d’eau glacée' },
        { value: '25,8 m³/h', label: 'débit d’eau par groupe de 150 kW' },
        { value: 'EER 3,1', label: 'à 35 °C ; rendement saisonnier ≈ 4,6' },
        { value: '≈ 536 kWh/j', label: 'd’eau chaude récupérée sur les groupes' },
        { value: '≈ 170 kW', label: 'électriques pour toute la centrale' },
      ],
    },

    { type: 'heading', text: '1 · Refroidi par air ou par eau ?' },
    fig('p136_0', 'Figures 5.26 et 5.27 du guide IEPF — groupe de condensation par air et par eau'),
    fig('p138_0', 'Figures 5.30 et 5.31 — condenseur à air et tour de refroidissement'),
    {
      type: 'calc',
      title: 'Ce que consommerait une tour de refroidissement',
      steps: [
        { label: 'Chaleur à rejeter : froid produit + travail des compresseurs', formula: 'Q_k ≈ 293 × 1,25 ≈ 366 kW à la pointe' },
        { label: 'Eau évaporée dans la tour (chaleur latente ≈ 2 450 kJ/kg)', formula: '\\frac{366}{2 450} ≈ 0,15 kg/s ≈ 0,54 m³/h' },
        { label: 'Avec les purges de déconcentration (×1,3) sur 14 h de pointe', formula: '≈ 0,7 × 14 ≈ 10 m³ d’eau par jour' },
      ],
      result: 'Environ 10 m³ d’eau traitée par jour, plus un risque de légionelles à maîtriser en permanence',
    },
    {
      type: 'decision',
      title: 'Type de groupes',
      choice: 'Groupes refroidis par air, compresseurs scroll, fluide R32, installés sur une terrasse technique côté ville',
      reasons: [
        'Pas de tour : pas de consommation d’eau, pas de traitement chimique, pas de légionelles près d’un hôtel.',
        'Installation et maintenance simples, compétences disponibles localement.',
        'Le R32 reste dehors, dans les groupes : aucune contrainte de charge dans le bâtiment.',
      ],
      rejected: 'Groupes à condensation par eau et tour ouverte : EER de 5 à 6 au lieu de 3, mais 10 m³ d’eau par jour, un risque sanitaire et une maintenance lourde.',
    },

    { type: 'heading', text: '2 · Le régime d’eau et les débits' },
    {
      type: 'text',
      text: 'L’eau quitte les groupes à 7 °C et y revient à 12 °C. Pourquoi si froid ? Pour déshumidifier, la batterie d’un ventilo-convecteur doit être plus froide que le point de rosée de la chambre (environ 15 °C à 26 °C et 50 %). Avec de l’eau à 7 °C, la surface des ailettes descend vers 10 à 12 °C : l’humidité condense. Avec de l’eau à 12 °C, on refroidirait l’air sans le sécher.',
    },
    { type: 'formula', text: 'q_v (m³/h) = \\frac{P (kW) × 3 600}{ρ × c_p × Δθ} ≈ \\frac{0,86 × P}{Δθ}' },
    {
      type: 'calc',
      title: 'Débits d’eau glacée',
      steps: [
        { label: 'Un groupe de 150 kW, écart 5 K', formula: 'q_v = \\frac{0,86 × 150}{5} ≈ 25,8 m³/h' },
        { label: 'Centrale à sa pointe foisonnée (293 kW)', formula: 'q_v = \\frac{0,86 × 293}{5} ≈ 50 m³/h' },
        { label: 'Un ventilo-convecteur de chambre (1,85 kW)', formula: 'q_v = \\frac{0,86 × 1,85}{5} ≈ 0,32 m³/h' },
      ],
      result: '25,8 m³/h par groupe, 50 m³/h dans le réseau à la pointe, 0,32 m³/h par chambre',
    },
    {
      type: 'note',
      text: 'Le « syndrome du petit ΔT » guette les centrales mal réglées : si l’eau revient à 9 °C au lieu de 12 °C (vannes ouvertes en grand, terminaux encrassés), l’écart tombe à 2 K et il faut 2,5 fois plus de débit pour la même puissance. Les pompes consomment davantage et les groupes ne sont jamais pleinement chargés.',
    },

    { type: 'heading', text: '3 · Comparer les offres' },
    {
      type: 'table',
      headers: ['Donnée', 'Offre A', 'Offre B', 'Commentaire'],
      rows: [
        ['Puissance à 35 °C, eau 12/7 °C', '150 kW', '152 kW', 'équivalent'],
        ['EER à pleine charge', '3,1', '2,8', 'avantage A'],
        ['Rendement saisonnier (SEER, EN 14825)', '4,6', '3,9', 'c’est lui qui compte : la centrale tourne surtout à charge partielle'],
        ['Puissance à 40 °C dehors', '139 kW', '135 kW', 'les 3 groupes couvrent encore 293 kW'],
        ['Niveau sonore à 10 m', '62 dB(A)', '58 dB(A)', 'avantage B, côté ville sans gêne'],
        ['Prix', '1,00', '0,90', 'avantage B'],
      ],
    },
    {
      type: 'calc',
      title: 'Coût d’exploitation sur 15 ans',
      steps: [
        { label: 'Froid produit par an : 293 kW × 3 500 heures équivalentes à pleine charge', formula: 'E_f ≈ 1 025 000 kWh de froid' },
        { label: 'Électricité avec l’offre A (SEER 4,6) et l’offre B (SEER 3,9)', formula: 'E_A ≈ 223 000 kWh   ;   E_B ≈ 263 000 kWh' },
        { label: 'Écart annuel à 110 FCFA/kWh', formula: '40 000 × 110 ≈ 4,4 millions de FCFA par an' },
      ],
      result: 'Sur 15 ans, l’offre A économise environ 66 millions de FCFA : bien plus que l’écart de prix d’achat',
    },
    {
      type: 'decision',
      title: 'Choix des groupes',
      choice: 'Offre A (SEER 4,6), avec option « bas niveau sonore » sur les ventilateurs',
      reasons: [
        'Le rendement saisonnier, mesuré à charge partielle, décide de la facture pendant 15 ans.',
        'L’option acoustique (ventilateurs ralentis la nuit) rapproche l’offre A de l’offre B sur le bruit.',
      ],
      rejected: 'Offre B : 10 % moins chère, mais 18 % d’électricité en plus chaque année.',
    },
    { type: 'fiche', id: 'abc-compressors', why: 'Technologies de compresseurs et variation de puissance.' },
    { type: 'fiche', id: 'clim-operating-costs', why: 'Coûts d’exploitation, efficacité et maintenance.' },

    { type: 'heading', text: '4 · Transformer la chaleur rejetée en eau chaude' },
    {
      type: 'calc',
      title: 'Eau chaude sanitaire de l’hôtel',
      steps: [
        { label: 'Besoin : 120 chambres, 2 clients, 60 L à 60 °C par personne et par jour', formula: 'V = 120 × 2 × 60 ≈ 14,4 m³/j' },
        { label: 'Énergie pour chauffer l’eau de 28 à 60 °C', formula: 'E = \\frac{14 400 × 4,186 × 32}{3 600} ≈ 536 kWh/j' },
        { label: 'Désurchauffeur sur le groupe de tête (≈ 15 % de la chaleur rejetée)', formula: 'P_{récup} ≈ 0,15 × 200 ≈ 30 kW   →   18 h de marche suffisent' },
        { label: 'Économie annuelle, face à des chauffe-eau électriques', formula: '536 × 365 × 110 ≈ 21,5 millions de FCFA par an' },
      ],
      result: 'La chaleur que les groupes jetaient dehors chauffe presque toute l’eau des chambres',
    },
    {
      type: 'decision',
      title: 'Production d’eau chaude',
      choice: 'Désurchauffeur sur le groupe de tête, ballons de stockage à 60 °C, appoint électrique pour les jours de faible charge',
      reasons: [
        'L’énergie est gratuite : elle était perdue dans l’air.',
        'Le groupe de tête tourne presque en permanence dans un hôtel : la récupération est disponible quand on en a besoin.',
        'Le stockage à 60 °C protège contre les légionelles, avec un appoint pour garantir la température.',
      ],
      rejected: '120 chauffe-eau électriques individuels : 536 kWh par jour sur le réseau ou le groupe électrogène, et 120 appareils à entretenir.',
    },
    { type: 'fiche', id: 'abc-heatpumps', why: 'Pompes à chaleur, récupération et performances saisonnières.' },

    { type: 'heading', text: '5 · La liste des équipements de la centrale' },
    {
      type: 'equipmentSchedule',
      schedule: {
        title: 'Centrale de froid Lagune Bleue',
        project: 'Hôtel Lagune Bleue',
        conditions: 'eau 12/7 °C, air 35 °C (EN 14511)',
        rows: [
          { tag: 'GF-1', location: 'Terrasse technique', type: 'Groupe d’eau glacée à air, scroll R32, désurchauffeur', cooling: 150, refrigerant: 'R32', supply: '400 V 3~ 50 Hz', power: 48.4, current: 82, protection: 'MCCB 125 A', note: 'groupe de tête, récupération ECS' },
          { tag: 'GF-2', location: 'Terrasse technique', type: 'Groupe d’eau glacée à air, scroll R32', cooling: 150, refrigerant: 'R32', supply: '400 V 3~ 50 Hz', power: 48.4, current: 82, protection: 'MCCB 125 A', note: 'rotation hebdomadaire' },
          { tag: 'GF-3', location: 'Terrasse technique', type: 'Groupe d’eau glacée à air, scroll R32', cooling: 150, refrigerant: 'R32', supply: '400 V 3~ 50 Hz', power: 48.4, current: 82, protection: 'MCCB 125 A', note: 'secours (N+1)' },
          { tag: 'PP-1/2/3', location: 'Local pompes', type: '3 pompes primaires 25,8 m³/h', cooling: 0, supply: '400 V 3~ 50 Hz', power: 3.3, current: 6.3, protection: '3 × DM 2,5–4 A', note: 'une par groupe' },
          { tag: 'PS-1/2', location: 'Local pompes', type: 'Pompes secondaires 50 m³/h, variateur', cooling: 0, supply: '400 V 3~ 50 Hz', power: 5.5, current: 10.5, protection: 'DM + variateur', note: '1 en service, 1 en secours' },
          { tag: 'CTA-1/2/3', location: 'Combles techniques', type: 'CTA hall, restaurant, conférence (eau glacée)', cooling: 0, airflow: 11000, supply: '400 V 3~ 50 Hz', power: 9.0, current: 16.5, protection: '3 × DM', note: 'conférence : débit selon CO₂' },
          { tag: 'CAN-CH', location: 'Toiture', type: 'Centrale d’air neuf des chambres 3 600 m³/h, caloduc', cooling: 0, airflow: 3600, supply: '400 V 3~ 50 Hz', power: 2.0, current: 3.8, protection: 'DM', note: 'air séché vers les 120 chambres' },
        ],
      },
    },
    {
      type: 'calc',
      title: 'Lecture du bas de la liste',
      steps: [
        { label: 'Puissance électrique des équipements en service à pleine charge (sans la pompe de secours)', formula: '3 × 48,4 + 3,3 + 5,5 + 9,0 + 2,0 ≈ 165 kW' },
        { label: 'Rendement global de la centrale à pleine charge', formula: '\\frac{450}{165} ≈ 2,7' },
      ],
      result: 'Awa garde ses 180 kW réservés au TGBT secouru, avec une marge de 8 %',
    },

    { type: 'heading', text: '6 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Performances et sécurité sanitaire',
      rows: [
        { norm: 'EN 14511 / EN 14825', rule: 'EER à pleine charge et rendement saisonnier (SEER) des groupes d’eau glacée.', result: 'EER 3,1 ; SEER 4,6' },
        { norm: 'AHRI 550/590', rule: 'Performances des groupes ; IPLV (rendement pondéré à charge partielle).', result: 'équivalent du SEER' },
        { norm: 'ASHRAE 90.1', rule: 'Rendements minimaux des groupes refroidis par air et par eau, à pleine et à charge partielle.', result: 'offre A conforme' },
        { norm: 'ASHRAE 188 / guides OMS', rule: 'Gestion du risque légionelles : tours, eau chaude ≥ 60 °C au stockage, ≥ 50 °C aux points d’usage.', result: 'pas de tour ; ECS à 60 °C' },
      ],
    },
    {
      type: 'regional',
      text: 'Sur une terrasse exposée au soleil et à l’air marin, les groupes perdent de la puissance et vieillissent vite : Ousmane les place côté ville, à l’abri d’un auvent qui laisse passer l’air, avec des batteries traitées anticorrosion. Il demande aussi la plage de fonctionnement jusqu’à 46 °C et un contrat de maintenance avec le distributeur local du fabricant.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Groupe à air : simple, sans eau ; groupe à eau avec tour : meilleur rendement, mais eau, traitement et légionelles.',
        'Régime 7/12 °C pour pouvoir déshumidifier ; débit q_v ≈ 0,86 × P / Δθ.',
        'Comparer les groupes sur leur rendement saisonnier, pas seulement sur l’EER nominal.',
        'La chaleur rejetée par les groupes peut produire l’eau chaude sanitaire.',
        'La liste des équipements donne la puissance électrique de la centrale au lot électricité.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Le régime passe à 6/12 °C (écart 6 K). Quel débit pour un groupe de 150 kW ? Quel intérêt ?',
      solution: ['q_v = 0,86 × 150 / 6 ≈ 21,5 m³/h au lieu de 25,8.', '17 % de débit en moins : pompes et tuyauteries plus petites, mais les groupes produisent un peu plus froid, donc avec un EER légèrement inférieur.'],
    },
    {
      type: 'exercise',
      question: 'En exploitation, l’eau revient à 9,5 °C au lieu de 12 °C. Quel débit faut-il pour transporter 293 kW ?',
      solution: ['Δθ = 9,5 − 7 = 2,5 K.', 'q_v = 0,86 × 293 / 2,5 ≈ 101 m³/h : le double du débit prévu. Les pompes ne suivent pas, certaines chambres manquent de froid : il faut corriger les vannes et l’équilibrage.'],
    },
  ],
};
