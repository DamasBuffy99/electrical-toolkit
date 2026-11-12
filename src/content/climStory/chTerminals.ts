import { TopicContent } from '../types';
import { fig } from '../topics/clim/fig';

export const chTerminalsContent: TopicContent = {
  title: 'Ventilo-convecteurs, CTA et exploitation',
  subtitle: 'L’eau glacée est au pied de chaque chambre. Ousmane choisit les ventilo-convecteurs pour le silence, les relie à la carte-clé, traite l’air neuf des chambres, des salles et de la cuisine, protège l’eau chaude contre les légionelles, puis remet à Félix les indicateurs qui lui diront si sa centrale vieillit bien.',
  blocks: [
    { type: 'scene', text: 'Mois 14 · Réception de l’hôtel, avec Nadia Haddad et Félix Amoussou' },
    {
      type: 'objectives',
      items: [
        'Choisir un ventilo-convecteur : puissance totale et sensible, débit d’eau, bruit.',
        'Réduire la consommation des chambres avec la carte-clé et les contacts de fenêtre.',
        'Traiter l’air des grandes salles et de la cuisine.',
        'Prévenir le risque de légionelles.',
        'Suivre la performance d’une centrale avec quelques indicateurs.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '2,1 kW', label: 'ventilo-convecteur de chambre, vitesse moyenne' },
        { value: 'NR 28', label: 'niveau sonore dans la chambre' },
        { value: '≈ − 28 %', label: 'd’énergie des chambres grâce à la carte-clé' },
        { value: '≈ 0,9 kW/TR', label: 'objectif de performance de la centrale' },
        { value: '≈ 890 FCFA', label: 'de froid par nuitée' },
      ],
    },

    { type: 'heading', text: '1 · Le ventilo-convecteur de la chambre' },
    fig('p119_1', 'Figure 5.14 du guide IEPF — intégration d’un ventilo-convecteur dans une chambre d’hôtel : faux plafond de l’entrée, soufflage vers la fenêtre'),
    {
      type: 'calc',
      title: 'Choix au catalogue (chambre côté lagune)',
      steps: [
        { label: 'Besoin de la chambre (feuille de bilan, avec marge)', formula: 'Q = 1,85 kW, dont sensible ≈ 1,36 kW' },
        { label: 'Modèle « taille 2 », vitesse moyenne, eau 7/12 °C', formula: 'Q_{tot} = 2,1 kW   ;   Q_{sens} = 1,6 kW   ;   340 m³/h   ;   NR 28' },
        { label: 'Même modèle en grande vitesse', formula: 'Q_{tot} = 2,6 kW mais NR 35 : trop bruyant pour dormir' },
        { label: 'Débit d’eau réglé sur la vanne indépendante de la pression', formula: 'q_v = \\frac{0,86 × 2,1}{5} ≈ 0,36 m³/h' },
      ],
      result: 'Ventilo-convecteur gainable taille 2, dimensionné en vitesse moyenne : la grande vitesse reste une réserve pour la mise en froid',
    },
    fig('p074_0', 'Tableau 3.1 du guide — niveaux de bruit recommandés : chambres d’hôtel parmi les plus exigeants'),
    {
      type: 'decision',
      title: 'Terminaux des chambres',
      choice: 'Ventilo-convecteur gainable dans le faux plafond de l’entrée, dimensionné en vitesse moyenne, soufflage vers la fenêtre, reprise sous le faux plafond',
      reasons: [
        'Le bruit de la machine reste dans l’entrée, loin du lit ; le jet longe le plafond vers la fenêtre, là où arrive la chaleur.',
        'Choisir en vitesse moyenne garantit le silence la nuit, avec une réserve de puissance en journée.',
        'Accès de maintenance par une trappe dans le couloir de la chambre, sans déranger le client.',
      ],
      rejected: 'Ventilo-convecteur mural apparent : moins cher, mais bruyant près du lit et peu esthétique pour un hôtel de cette catégorie.',
    },

    { type: 'heading', text: '2 · La carte-clé et le balcon' },
    {
      type: 'table',
      headers: ['État de la chambre', 'Ventilo-convecteur', 'Consigne'],
      rows: [
        ['Non louée (réception)', 'arrêt, vanne fermée', '—'],
        ['Louée, client absent (carte retirée)', 'petite vitesse', '28 °C, humidité limitée'],
        ['Client présent', 'automatique', '24 à 26 °C au choix du client'],
        ['Porte du balcon ouverte (contact)', 'arrêt après 1 min', 'évite de refroidir… la lagune'],
      ],
    },
    {
      type: 'calc',
      title: 'Économie de la gestion par carte-clé',
      steps: [
        { label: 'Chambres non louées : 20 % du temps, climatisation arrêtée', formula: 'gain ≈ 20 %' },
        { label: 'Chambres louées, clients absents ≈ 40 % de la journée, consigne relevée à 28 °C (≈ − 25 % pendant ces heures)', formula: 'gain ≈ 0,8 × 0,4 × 0,25 ≈ 8 %' },
      ],
      result: 'Environ 28 % d’énergie en moins sur les chambres, qui représentent près de 60 % du froid de l’hôtel',
    },
    {
      type: 'note',
      text: 'Le contact de porte-fenêtre n’est pas un gadget : un balcon ouvert sur une chambre à 24 °C fait entrer de l’air à 32 °C saturé d’eau, qui condense sur la batterie, déborde du bac et tache le plafond. C’est la première cause de réclamations techniques dans les hôtels de bord de mer.',
    },

    { type: 'heading', text: '3 · Air neuf, grandes salles et cuisine' },
    {
      type: 'table',
      headers: ['Zone', 'Traitement', 'Points clés'],
      rows: [
        ['Chambres', 'centrale d’air neuf 3 600 m³/h, air séché à 9,5 g/kg, 30 m³/h par chambre', 'régulateurs de débit constant ; extraction par la salle de bain'],
        ['Hall', 'CTA à débit constant, recyclage + air neuf', 'légère surpression : pas d’air chaud par les portes'],
        ['Restaurant', 'CTA 6 000 m³/h, air neuf selon CO₂', 'surpression par rapport à la cuisine : les odeurs restent en cuisine'],
        ['Conférence', 'CTA 5 000 m³/h, air neuf selon CO₂ (150 à 3 750 m³/h)', 'batterie dimensionnée pour un SHR bas (≈ 0,3)'],
        ['Cuisine', 'non climatisée : hottes 8 000 m³/h, air de compensation filtré, rafraîchissement localisé des postes', '20 % de l’air compensé vient du restaurant'],
      ],
    },
    fig('p118_0', 'Figures 5.10 et 5.11 du guide — fonctionnement et vue d’un ventilo-convecteur'),
    { type: 'fiche', id: 'abc-airside', why: 'CTA, rooftop, free-cooling, filtration et ventilateurs.' },

    { type: 'heading', text: '4 · Légionelles et eau chaude' },
    {
      type: 'bullets',
      items: [
        'Stockage de l’eau chaude à 60 °C au moins, boucle de distribution à 55 °C, retour jamais sous 50 °C.',
        'Chambres inoccupées : écoulement hebdomadaire des robinets et douches pour éviter l’eau stagnante.',
        'Bacs à condensats des ventilo-convecteurs en pente, nettoyés et désinfectés une fois par an.',
        'Pas de tour de refroidissement : le principal réservoir de légionelles d’une installation de climatisation a été écarté dès la conception.',
        'Procédure écrite de choc thermique (70 °C) en cas d’analyse positive.',
      ],
    },
    { type: 'fiche', id: 'abc-special', why: 'Poutres climatiques, salles blanches, data centers et légionellose.' },

    { type: 'heading', text: '5 · Exploiter et suivre la centrale' },
    {
      type: 'calc',
      title: 'Ce que coûte le froid de l’hôtel',
      steps: [
        { label: 'Électricité des groupes (froid annuel ÷ rendement saisonnier)', formula: '\\frac{1 025 000}{4,6} ≈ 223 000 kWh' },
        { label: 'Pompes, CTA et ventilo-convecteurs', formula: '≈ 60 000 kWh' },
        { label: 'Coût annuel à 110 FCFA/kWh', formula: '283 000 × 110 ≈ 31 millions de FCFA' },
        { label: 'Nuitées par an (120 chambres, 80 % d’occupation)', formula: '120 × 0,8 × 365 ≈ 35 000   →   ≈ 890 FCFA de froid par nuitée' },
      ],
      result: 'Le froid coûte moins de 900 FCFA par nuitée : un chiffre que Nadia peut suivre chaque mois',
    },
    {
      type: 'table',
      headers: ['Indicateur', 'Valeur cible', 'Ce qu’une dérive signale'],
      rows: [
        ['kW électriques par TR de froid (centrale)', '≈ 0,9 à 1,1', 'condenseurs encrassés, mauvais séquencement'],
        ['Écart départ / retour d’eau glacée', '≈ 5 K', '< 3 K : vannes ou terminaux défaillants (petit ΔT)'],
        ['Heures de marche par groupe', 'équilibrées', 'rotation non faite, un groupe s’use plus vite'],
        ['Consommation de froid par nuitée', 'stable à saison égale', 'portes de balcon, cartes-clés contournées'],
        ['Appoint électrique de l’eau chaude', 'faible', 'récupération sur le groupe de tête hors service'],
      ],
    },
    {
      type: 'decision',
      title: 'Exploitation',
      choice: 'Contrat de maintenance préventive, supervision de la centrale avec ces cinq indicateurs, et un rapport mensuel à la direction',
      reasons: [
        'Une centrale bien conçue perd 15 à 25 % de performance en quelques années sans suivi.',
        'Les indicateurs traduisent la technique en chiffres de gestion que Nadia comprend.',
        'Félix et son équipe ont été formés pendant les essais : ils savent lire les tendances et réagir.',
      ],
      rejected: 'Maintenance « quand ça casse » : moins chère la première année, plus chère toutes les suivantes.',
    },
    { type: 'fiche', id: 'clim-operating-costs', why: 'Coûts d’exploitation, efficacité et maintenance.' },
    { type: 'fiche', id: 'abc-commissioning', why: 'Mise en service et relevés de référence.' },

    { type: 'heading', text: '6 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Terminaux, hygiène et exploitation',
      rows: [
        { norm: 'EN 1397', rule: 'Essais des ventilo-convecteurs à eau : puissance totale et sensible, débit d’air, bruit.', result: 'données de catalogue fiables' },
        { norm: 'Eurovent / AHRI 440', rule: 'Certification des performances des ventilo-convecteurs.', result: 'puissances certifiées' },
        { norm: 'ASHRAE 188 / EN 806', rule: 'Gestion du risque légionelles et installations d’eau sanitaire.', result: '60 °C stockage, 50 °C retour' },
        { norm: 'ISO 50001 / ASHRAE 100', rule: 'Management de l’énergie, indicateurs et amélioration continue.', result: 'kW/TR et kWh par nuitée suivis' },
      ],
    },
    {
      type: 'regional',
      text: 'Dans les hôtels de la région, la carte-clé est souvent contournée par une simple carte de visite glissée dans le lecteur. Ousmane fait installer des lecteurs qui reconnaissent les cartes de l’hôtel, et la GTB compare la consommation par chambre : une chambre « toujours occupée » alors qu’elle est libre à la réception se repère immédiatement.',
    },

    { type: 'heading', text: '7 · Bilan du parcours climatisation' },
    {
      type: 'table',
      headers: ['Projet', 'Ce qu’il a ajouté'],
      rows: [
        ['1 · Villa Mensah', 'confort, conditions de base, bilan pièce par pièce, choix des splits, inverter, R32, pose et mise en service'],
        ['2 · Chambre froide Tropica', 'produits et portes, temps de marche, diagramme enthalpique, centrale de compresseurs, fluides, dépannage et sécurités'],
        ['3 · Bureaux Kora', 'zones et façades, foisonnement, VRV, sécurité des A2L, air neuf déshumidifié et récupération, gaines, diffuseurs, GTB'],
        ['4 · Hôtel Lagune Bleue', 'centrale à eau glacée N+1, groupes, réseau hydraulique, ventilo-convecteurs, carte-clé, eau chaude récupérée, exploitation'],
      ],
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Un ventilo-convecteur se choisit en vitesse moyenne, sur la puissance totale et sensible, avec un niveau sonore adapté au local.',
        'Carte-clé et contacts de fenêtre : la climatisation ne travaille que quand quelqu’un en profite.',
        'Grandes salles : CTA avec air neuf selon le CO₂ ; cuisine : ventilée, compensée, pas climatisée.',
        'Légionelles : eau chaude à 60 °C, pas d’eau stagnante, pas de tour si on peut l’éviter.',
        'Une centrale se pilote avec des indicateurs : kW/TR, écart de température, coût par nuitée.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un ventilo-convecteur donne 2,1 kW à 340 m³/h. L’air entre à 26 °C ; à quelle température sort-il si sa puissance sensible est de 1,6 kW ?',
      solution: ['Δθ = Q_S / (0,34 × q) = 1 600 / (0,34 × 340) ≈ 13,8 °C.', 'L’air sort vers 12 °C : assez froid pour sécher l’air, d’où la condensation dans le bac.'],
    },
    {
      type: 'exercise',
      question: 'La centrale consomme 52 kW électriques pour produire 150 kW de froid. Quel indicateur en kW/TR ? Est-ce bon ?',
      solution: ['150 kW = 150 / 3,517 ≈ 42,7 TR.', '52 / 42,7 ≈ 1,22 kW/TR : au-dessus de la cible (0,9 à 1,1). On vérifie l’encrassement des condenseurs et le séquencement des groupes.'],
    },
  ],
};
