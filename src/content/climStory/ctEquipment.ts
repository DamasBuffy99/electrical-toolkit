import { TopicContent } from '../types';
import { fig } from '../topics/clim/fig';

export const ctEquipmentContent: TopicContent = {
  title: 'Compresseurs, évaporateurs et fluides',
  subtitle: 'Le cycle est tracé ; il faut maintenant des machines. Ousmane choisit une centrale à trois compresseurs scroll, des évaporateurs adaptés au givre, un condenseur généreux et un fluide qui respecte l’amendement de Kigali, puis remet la liste des équipements à Awa et à Clarisse.',
  blocks: [
    { type: 'scene', text: 'Mois 8 · Revue des offres, avec Ibrahim, Paul et Clarisse Houndé' },
    {
      type: 'objectives',
      items: [
        'Comparer les technologies de compresseurs selon la puissance.',
        'Choisir entre un groupe unique et une centrale à plusieurs compresseurs.',
        'Choisir un évaporateur (écart de température, pas d’ailettes, dégivrage) et un détendeur.',
        'Choisir un fluide frigorigène selon la sécurité, l’environnement et la disponibilité.',
        'Lire la liste des équipements d’une installation frigorifique.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '3 × 20 kW', label: 'compresseurs scroll en centrale' },
        { value: '33 / 66 / 100 %', label: 'étages de puissance' },
        { value: 'R513A', label: 'A1, PRP 631' },
        { value: '≈ 29 kW', label: 'puissance électrique totale' },
        { value: '≈ 28 t éq. CO₂', label: 'charge de fluide : contrôle annuel' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Clarisse Houndé (achats)',
      role: 'team',
      text: 'Le moins cher, c’est un seul gros groupe de condensation de 60 kW. L’offre avec trois compresseurs coûte 15 % de plus. Qu’est-ce qu’on achète avec ces 15 % ?',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'La continuité, d’abord : si l’unique compresseur casse, vingt tonnes de jus se réchauffent. Avec trois, on perd un tiers de la puissance et les chambres tiennent. Et l’efficacité : la nuit, quand il n’y a plus de produits à refroidir, un seul compresseur suffit, au lieu d’un gros qui démarre et s’arrête sans cesse.',
    },

    { type: 'heading', text: '1 · Quel compresseur ?' },
    {
      type: 'table',
      headers: ['Technologie', 'Plage courante', 'Points forts', 'Limites'],
      rows: [
        ['Piston (hermétique, semi-hermétique)', '0,5 à 100 kW', 'robuste, réparable (semi-hermétique)', 'bruit, vibrations, rendement moyen'],
        ['Scroll (spirale)', '5 à 60 kW par unité', 'silencieux, peu de pièces, bon rendement', 'non réparable, sensible aux coups de liquide'],
        ['Vis', '100 à 1 500 kW', 'grandes puissances, variation de puissance continue', 'coût, rendement à faible charge'],
        ['Centrifuge', 'au-delà de 1 MW', 'très bon rendement à pleine charge', 'eau glacée de grands bâtiments'],
      ],
    },
    fig('p134_1', 'Tableau 5.4 du guide IEPF — technologies de compresseur, d’évaporateur et de condenseur selon la puissance'),
    fig('p136_1', 'Figures 5.28 et 5.29 — compresseur à pistons et compresseur centrifuge'),
    {
      type: 'decision',
      title: 'Architecture de production',
      choice: 'Centrale de 3 compresseurs scroll de 20 kW sur aspiration commune, le premier à vitesse variable',
      reasons: [
        'Redondance : avec un compresseur en panne, il reste 40 kW, assez pour maintenir les chambres pendant la réparation.',
        'Étages 33, 66 et 100 %, affinés par la vitesse variable : la puissance suit la charge, de la nuit calme à l’arrivée des palettes.',
        'Scroll : silencieux, rendement élevé dans cette plage, pièces courantes chez les distributeurs.',
      ],
      rejected: 'Un groupe unique de 60 kW : 15 % moins cher, mais une seule panne met en danger tout le stock, et des cycles courts la nuit.',
    },
    { type: 'fiche', id: 'abc-compressors', why: 'Technologies de compresseurs, inverter et lubrification.' },

    { type: 'heading', text: '2 · Évaporateurs, détendeurs et régulation' },
    {
      type: 'table',
      headers: ['Choix', 'Chambre +2 °C', 'Chambre +10 °C'],
      rows: [
        ['Évaporateurs', '2 évaporateurs cubiques de 21 kW', '1 évaporateur cubique de 18 kW'],
        ['Écart air / fluide', '8 K (évaporation −6 °C)', '8 K (évaporation +2 °C)'],
        ['Pas d’ailettes', '6 mm : le givre ne bouche pas la batterie', '4 à 5 mm (pas de givre)'],
        ['Dégivrage', 'naturel, compresseurs à l’arrêt (air de la chambre > 0 °C)', 'non nécessaire'],
        ['Détendeur', 'électronique : surchauffe stable malgré la charge variable', 'électronique'],
        ['Particularité', '—', 'régulateur de pression d’évaporation : garde +2 °C malgré l’aspiration commune à −6 °C'],
      ],
    },
    {
      type: 'note',
      text: 'Le dégivrage naturel fonctionne parce que l’air de la chambre est au-dessus de 0 °C : en arrêtant le froid quelques minutes, les ventilateurs font fondre le givre. Pour une chambre négative (−18 °C), il faudrait des résistances électriques ou des gaz chauds, soit plusieurs kilowatts de plus au bilan.',
    },
    { type: 'fiche', id: 'abc-components', why: 'Organes annexes et sécurités du circuit.' },

    { type: 'heading', text: '3 · Quel fluide frigorigène ?' },
    {
      type: 'table',
      headers: ['Fluide', 'PRP', 'Sécurité', 'Pour la chambre de Tropica'],
      rows: [
        ['R404A', '3 922', 'A1', 'historique, interdit dans les installations neuves en Europe ; à éviter'],
        ['R449A', '1 397', 'A1', 'remplaçant direct du R404A, PRP encore élevé'],
        ['R513A', '631', 'A1', 'températures positives, non inflammable, disponible'],
        ['R290 (propane)', '3', 'A3', 'charge limitée dans un bâtiment occupé : groupe extérieur et boucle d’eau glycolée'],
        ['R744 (CO₂)', '1', 'A1', 'excellent en climat tempéré, rendement faible au-delà de 30 °C dehors'],
        ['R717 (ammoniac)', '0', 'B2L (toxique)', 'grandes installations industrielles, personnel qualifié'],
      ],
    },
    {
      type: 'decision',
      title: 'Fluide de la centrale',
      choice: 'R513A',
      reasons: [
        'Non inflammable (A1) : pas de contrainte de charge dans le hall où circulent les chariots.',
        'PRP de 631, trois à six fois moins que les fluides historiques ; compatible avec la trajectoire de Kigali.',
        'Bonnes performances aux températures positives et pièces disponibles localement.',
      ],
      rejected: 'CO₂ : rendement trop faible avec 35 à 40 °C dehors, pressions de 100 bar et compétences rares. Propane : imposerait une boucle d’eau glycolée et 10 % de rendement en moins.',
    },
    { type: 'fiche', id: 'abc-refrigerants', why: 'Fluides frigorigènes, huiles, PRP et réglementation.' },

    { type: 'heading', text: '4 · La liste des équipements' },
    {
      type: 'equipmentSchedule',
      schedule: {
        title: 'Froid Tropica',
        project: 'Usine Tropica',
        conditions: 'évaporation −6 °C, condensation 47 °C, air 35 °C',
        rows: [
          { tag: 'CF-1', location: 'Salle des machines', type: 'Centrale 3 compresseurs scroll (1 à vitesse variable)', cooling: 60, refrigerant: 'R513A', supply: '400 V 3~ 50 Hz', power: 25.4, current: 43, protection: 'MCCB 63 A + 3 DM', note: 'démarrages décalés de 30 s' },
          { tag: 'EV-1', location: 'Chambre +2 °C', type: 'Évaporateur cubique 21 kW', cooling: 0, airflow: 12000, refrigerant: 'R513A', supply: '400 V 3~ 50 Hz', power: 0.5, current: 1.0, protection: 'DM 1–1,6 A', note: 'ailettes 6 mm, dégivrage naturel' },
          { tag: 'EV-2', location: 'Chambre +2 °C', type: 'Évaporateur cubique 21 kW', cooling: 0, airflow: 12000, refrigerant: 'R513A', supply: '400 V 3~ 50 Hz', power: 0.5, current: 1.0, protection: 'DM 1–1,6 A', note: 'ailettes 6 mm, dégivrage naturel' },
          { tag: 'EV-3', location: 'Chambre +10 °C', type: 'Évaporateur cubique 18 kW', cooling: 0, airflow: 10000, refrigerant: 'R513A', supply: '400 V 3~ 50 Hz', power: 0.5, current: 1.0, protection: 'DM 1–1,6 A', note: 'régulateur de pression d’évaporation' },
          { tag: 'CD-1', location: 'Toiture, côté nord', type: 'Condenseur à air 85 kW, ventilateurs EC', cooling: 0, airflow: 30000, refrigerant: 'R513A', supply: '400 V 3~ 50 Hz', power: 2.4, current: 4.2, protection: 'C10 3P', note: 'écart 12 K, à l’ombre, nettoyage mensuel' },
        ],
      },
    },
    {
      type: 'calc',
      title: 'Lecture du bas de la liste',
      steps: [
        { label: 'Puissance électrique totale', formula: 'P = 25,4 + 3 × 0,5 + 2,4 ≈ 29,3 kW' },
        { label: 'Rendement global de l’installation (ventilateurs compris)', formula: 'EER = \\frac{60}{29,3} ≈ 2,05' },
        { label: 'Courant total pour le départ du TGBT', formula: 'I = \\frac{29 300}{\\sqrt{3} × 400 × 0,85} ≈ 50 A' },
      ],
      result: 'Awa confirme : départ 63 A au TGBT de Tropica, câble 5G16 mm², démarrages des compresseurs décalés',
    },
    {
      type: 'note',
      text: 'Les évaporateurs et le condenseur ne « produisent » pas de froid : ils échangent celui que produit la centrale. Ils figurent dans la liste pour leur débit d’air, leur alimentation et leur protection, mais leur puissance n’est pas additionnée à celle de la centrale.',
    },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Fluides et réglementation',
      rows: [
        { norm: 'Protocole de Montréal + amendement de Kigali', rule: 'Élimination des HCFC (R22) et réduction progressive des HFC ; calendrier différencié pour les pays en développement.', result: 'privilégier les PRP faibles' },
        { norm: 'Règlement UE 2024/573', rule: 'Interdiction des fluides à PRP élevé dans la plupart des équipements de réfrigération neufs ; contrôles selon les t éq. CO₂.', result: '45 kg × 631 ≈ 28 t : contrôle annuel' },
        { norm: 'EN 378 / ISO 5149', rule: 'Limites de charge selon la classe du fluide et l’occupation du local ; salle des machines.', result: 'A1 : pas de limite dans le hall' },
        { norm: 'ASHRAE 15 / 34', rule: 'Sécurité des installations et classes des fluides (Amérique du Nord).', result: 'R513A = A1' },
      ],
    },
    {
      type: 'regional',
      text: 'Le R22 circule encore dans beaucoup d’installations ouest-africaines et les fluides de contrebande ou mal étiquetés existent : exigez des bouteilles d’origine, avec certificat. Les bureaux nationaux de l’ozone (souvent au ministère de l’environnement) recensent les importations et organisent la formation des frigoristes. Pour une usine, un contrat de maintenance avec un frigoriste qui possède une station de récupération est indispensable.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Piston, scroll, vis, centrifuge : chaque technologie a sa plage de puissance.',
        'Plusieurs compresseurs en centrale : redondance et puissance qui suit la charge.',
        'Évaporateur : écart de température selon le produit, pas d’ailettes selon le givre, dégivrage selon la température de la chambre.',
        'Fluide : sécurité (A1, A2L, A3, B2L), PRP, performances au climat local et disponibilité.',
        'La liste des équipements donne au lot électricité la puissance et les protections de chaque moteur.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un compresseur tombe en panne un jour de livraison de 20 t de jus. Quelle puissance reste-t-il, et combien de temps faut-il pour refroidir le jus ?',
      solution: [
        'Il reste 40 kW sur 60 kW.',
        'En tournant 24 h sur 24, les deux compresseurs fournissent 40 kW, presque le besoin moyen sans marge (40,8 kW) : le jus est refroidi en un peu plus de 20 h, mais sans réserve ni pause pour dégivrer. Les chambres tiennent le temps de la réparation, à condition de limiter les ouvertures de portes.',
      ],
    },
    {
      type: 'exercise',
      question: 'La charge de la centrale est de 45 kg de R449A au lieu de R513A. Combien de tonnes équivalent CO₂ ?',
      solution: ['45 × 1 397 ≈ 63 t éq. CO₂.', 'Au-delà de 50 t : contrôle d’étanchéité tous les 6 mois en Europe, et une taxe ou des restrictions croissantes : le R513A divise ce chiffre par plus de deux.'],
    },
  ],
};
