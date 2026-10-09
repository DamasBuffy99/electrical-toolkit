import { TopicContent } from '../../types';

export const abcHydraulicsContent: TopicContent = {
  title: 'Réseaux hydrauliques : débits, pompes, vannes et équilibrage',
  subtitle: 'Le groupe d’eau glacée côté eau, les ventilo-convecteurs, la boucle d’eau, les pompes, les vannes 2 et 3 voies',
  blocks: [
    {
      type: 'text',
      text: "Dans une installation à eau glacée, une grande partie des pannes et des surconsommations vient du réseau d’eau : débit trop faible ou trop fort, filtre bouché, air dans le circuit, vanne mal choisie, réseau déséquilibré. Cette leçon donne les bases d’hydraulique et les réglages de terrain.",
    },
    { type: 'illustration', name: 'clim-central', props: { highlight: 'water' }, caption: 'Le réseau d’eau glacée relie le groupe aux ventilo-convecteurs et aux CTA' },

    { type: 'heading', text: 'Le groupe d’eau glacée, côté eau' },
    {
      type: 'text',
      text: "Régime de confort courant : 7 °C au départ, 12 °C au retour. L’eau peut être glycolée. Les tuyauteries sont en acier noir isolé (ou en PVC haute densité).",
    },
    {
      type: 'table',
      headers: ['Organe', 'Rôle et contrôle'],
      rows: [
        ['Vase d’expansion', 'absorbe les variations de volume d’eau ; prégonflé (azote) à la hauteur statique : 10 m = 1 bar'],
        ['Disconnecteur', 'protège le réseau d’eau potable du remplissage contre les retours'],
        ['Soupape de sécurité', 'tarée à 3 ou 4 bar ; ne doit pas fuir'],
        ['Filtre à tamis', 'protège l’évaporateur ; à nettoyer au moins une fois par an ou si Δp > 0,4 bar'],
        ['Circulateurs', 'vérifier le sens de rotation, l’absence de bruit (cavitation, air)'],
        ['Contrôleur de débit (flow switch)', 'arrête le groupe si le débit manque ; à tester chaque année'],
        ['Sonde antigel', 'protège l’évaporateur contre le gel'],
        ['Purgeurs', 'ne doivent laisser sortir que de l’air'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Vérifier le débit par l’écart de température : ≈ 5 K entre entrée et sortie au débit nominal.',
        'Écart < 3 K : trop de débit (réduire la vitesse de pompe, régler une vanne d’équilibrage).',
        'Écart > 7 K : débit insuffisant (filtre, pompe, vannes) — un débit trop faible peut détruire l’échangeur par le gel.',
        'Pendant une récupération de fluide frigorigène, laisser tourner la pompe d’eau : le fluide qui se détend refroidit l’échangeur et pourrait le geler.',
      ],
    },

    { type: 'heading', text: 'Ventilo-convecteurs et boucle d’eau' },
    {
      type: 'table',
      headers: ['Configuration', 'Principe', 'Usage'],
      rows: [
        ['2 tubes', 'une batterie, eau froide l’été, chaude l’hiver', 'locaux de charges semblables ; inconfort en mi-saison'],
        ['2 tubes 2 fils', 'eau glacée + résistance électrique', 'chaud et froid simultanés, mais consommation électrique'],
        ['4 tubes', 'deux batteries, deux réseaux', 'confort maximal, installation lourde'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Régulation d’un VC : arrêt du ventilateur (simple mais peu confortable), ou vanne 2 ou 3 voies modulante pilotée par une sonde d’ambiance ou de reprise.',
        'PAC sur boucle d’eau : des PAC eau/air dans chaque local sur une boucle maintenue entre 18 et 40 °C ; en mi-saison, les locaux climatisés réchauffent la boucle qui chauffe les autres. Débit réglé pour un écart de 5 à 7 K sur chaque PAC.',
      ],
    },

    { type: 'heading', text: 'Notions d’hydraulique' },
    {
      type: 'bullets',
      items: [
        'Écoulement laminaire (lent, filets parallèles à l’axe) ou turbulent (rapide, désordonné), selon le nombre de Reynolds : en dessous d’environ 2 000 laminaire, au-dessus turbulent.',
        'Pertes de charge linéaires : frottement dans les tubes, proportionnelles à la longueur et à peu près au carré de la vitesse.',
        'Pertes de charge singulières : coudes, tés, vannes, échangeurs, batteries.',
        'Pression statique (hauteur d’eau, sans écoulement) + pression dynamique (vitesse) = pression totale.',
        'Hauteur manométrique totale (HMT) : la pression que la pompe doit fournir pour vaincre les pertes de charge du réseau.',
      ],
    },
    { type: 'formula', text: '1 bar ≈ 10 m de colonne d’eau (mCE) ; 1 mmCE ≈ 10 Pa' },
    {
      type: 'warning',
      text: "Le livre décrit l’écoulement laminaire comme une trajectoire « perpendiculaire à l’axe » du tuyau : c’est PARALLÈLE à l’axe. Et le passage laminaire/turbulent n’est pas brutal à 2 000 : entre 2 000 et 4 000 environ, c’est une zone critique instable.",
    },

    { type: 'heading', text: 'Les pompes et circulateurs' },
    {
      type: 'bullets',
      items: [
        'Rotor noyé : simple, sans entretien, mais rendement faible (résidentiel, petit tertiaire).',
        'Rotor sec : moteur séparé, étanchéité par presse-étoupe (légère fuite voulue) ou garniture mécanique ; meilleur rendement.',
        'Deux pompes en série : les hauteurs s’additionnent. En parallèle : les débits s’additionnent.',
        'Cavitation : à l’aspiration, si la pression descend à la pression de vapeur, des bulles se forment et implosent → bruit, vibrations, érosion, perte de débit.',
        'Choix : débit + HMT, puis la courbe constructeur la plus proche du point de fonctionnement.',
      ],
    },
    { type: 'formula', text: 'Débit Q (m³/h) = P (kW) / (1,16 × ΔT)' },
    { type: 'note', text: 'Pour une petite installation, on estime les pertes de charge à environ 20 mmCE par mètre de tuyauterie ; au-delà, on utilise les abaques.' },

    { type: 'heading', text: 'Les vannes' },
    {
      type: 'bullets',
      items: [
        'Vanne à boule (quart de tour) et vanne papillon : vannes d’ARRÊT, peu de pertes de charge, pas faites pour régler un débit.',
        'Vanne à opercule : arrêt ; en position intermédiaire elle vibre et s’abîme.',
        'Vanne à siège (clapet, pointeau) : la vanne de RÉGLAGE par excellence.',
        'Vanne 3 voies en mélange : débit constant dans l’émetteur, température variable (chauffage).',
        'Vanne 3 voies en décharge (répartition) : température constante, débit variable dans la batterie ; débit total constant côté production (climatisation).',
        'Vanne 2 voies : débit variable dans tout le réseau ; à associer à des pompes à vitesse variable.',
        'Servomoteurs : 2 points (tout ou rien), 3 points (ouvre, ferme, s’arrête), ou proportionnels 0–10 V sous 24 V (3 V = 30 % d’ouverture).',
      ],
    },
    { type: 'illustration', name: 'tech-3way', caption: 'Vanne 3 voies en mélange et en décharge' },
    {
      type: 'table',
      headers: ['Caractéristique', 'Signification'],
      rows: [
        ['DN / PN', 'diamètre nominal / pression nominale de la bride'],
        ['Kv', 'débit (m³/h) qui crée 1 bar de perte de charge dans la vanne'],
        ['Kvs', 'Kv vanne grande ouverte (valeur catalogue)'],
        ['Kvo', 'débit de fuite vanne fermée, en % du Kvs'],
        ['Δp max', 'différence de pression maximale vanne fermée (étanchéité)'],
      ],
    },
    { type: 'formula', text: 'Autorité aV = Δp vanne ouverte / (Δp vanne + Δp batterie)   — viser 0,5 à 0,7' },
    {
      type: 'warning',
      text: "Le livre écrit que pour une vanne neuve « le Kvs doit être inférieur à 0,05 % du Kv ». Il s’agit du Kvo : le débit de fuite vanne fermée doit être inférieur à environ 0,05 % du Kvs.",
    },

    { type: 'heading', text: 'Bouteille de découplage, vase d’expansion, équilibrage' },
    {
      type: 'bullets',
      items: [
        'Bouteille de découplage : rend indépendants le circuit de production (débit constant) et les circuits d’émetteurs (débits variables). Débit primaire > secondaire (≈ +15 %) → « casse-pression », mêmes températures de départ. Débit primaire < secondaire → « mélange », départ secondaire plus froid (en chauffage).',
        'Règle des 3 D : diamètre de bouteille ≥ 3 × celui du tube principal, piquages espacés de 3 diamètres ; vitesse ≈ 0,1 m/s dans la bouteille. Verticale, purgeur en haut, vidange (décantation) en bas, isolée.',
        'En eau glacée, la faible différence de densité favorise les mélanges parasites : un simple by-pass est parfois préférable.',
        'Vase d’expansion (« flexcon ») : 1 m³ d’eau se dilate de près de 4 % entre 10 et 80 °C ; monté sur le retour, sans vanne d’isolement manœuvrable. En climatisation, on remplit à une pression proche du tarage de la soupape (l’eau se contracte en refroidissant).',
        'Équilibrage : sans lui, les émetteurs proches de la pompe reçoivent trop d’eau et les plus éloignés pas assez (inconfort, bruit, +10 à 15 % d’énergie). Méthodes par le calcul, par la mesure des débits (vannes à prises de pression et appareil de mesure) ou par les températures de retour.',
      ],
    },
    { type: 'note', text: 'Astuce de terrain : un coup sec en haut puis en bas d’un vase d’expansion doit sonner différemment (gaz d’un côté, eau de l’autre) ; sinon la membrane est percée.' },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Une batterie froide de 50 kW fonctionne en régime 7/12 °C. Quel débit d’eau faut-il ?',
      solution: ['ΔT = 5 K ; Q = 50 / (1,16 × 5) ≈ 8,6 m³/h.'],
    },
    {
      type: 'exercise',
      question: 'Une vanne 3 voies a une perte de charge de 15 mCE grande ouverte ; la batterie en a 10 mCE au même débit. L’autorité est-elle correcte ?',
      solution: ['aV = 15 / (15 + 10) = 0,6 : dans la plage conseillée 0,5 à 0,7, la régulation sera précise.'],
    },
    {
      type: 'exercise',
      question: 'Sur un groupe d’eau glacée, l’eau entre à 12 °C et sort à 9,5 °C. Que concluez-vous ?',
      solution: ['Écart 2,5 K (< 3 K) : trop de débit pour la puissance échangée.', 'Réduire la vitesse de la pompe ou régler la vanne d’équilibrage pour revenir vers 5 K.'],
    },
  ],
};
