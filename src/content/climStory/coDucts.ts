import { TopicContent } from '../types';
import { fig } from '../topics/clim/fig';

export const coDuctsContent: TopicContent = {
  title: 'Gaines, diffuseurs, bruit et régulation',
  subtitle: 'L’air est traité ; il faut l’amener dans chaque bureau sans courant d’air, sans bruit et sans condensation, puis piloter dix groupes VRV, 70 unités intérieures et une centrale d’air neuf comme un seul système. Ousmane dimensionne les gaines avec l’abaque, choisit les diffuseurs et rédige l’analyse fonctionnelle de la régulation.',
  blocks: [
    { type: 'scene', text: 'Mois 6 · Plans d’exécution, avec Didier Kouassi et Awa' },
    {
      type: 'objectives',
      items: [
        'Dimensionner une gaine par la vitesse et vérifier sa perte de charge sur l’abaque.',
        'Calculer la puissance d’un ventilateur et son SFP.',
        'Choisir des diffuseurs : débit, portée, vitesse résiduelle, bruit.',
        'Éviter la condensation sur les gaines froides.',
        'Organiser la régulation et la supervision (GTB) d’un bâtiment climatisé.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '800 × 500 mm', label: 'colonne d’air neuf, 7 m/s' },
        { value: '≈ 3 kW', label: 'ventilateur de soufflage, SFP ≈ 1,1' },
        { value: 'NR 30', label: 'objectif acoustique en salle de réunion' },
        { value: '50 mm', label: 'd’isolant sur les gaines en toiture' },
        { value: '60 %', label: 'limite de puissance VRV sur groupe électrogène' },
      ],
    },

    { type: 'heading', text: '1 · Dimensionner les gaines' },
    {
      type: 'text',
      text: 'On choisit d’abord une vitesse d’air raisonnable : trop lente, la gaine est énorme et chère ; trop rapide, elle siffle et le ventilateur consomme. Le guide IEPF donne les vitesses recommandées selon l’emplacement. La section en découle, puis l’abaque donne la perte de charge par mètre.',
    },
    fig('p143_0', 'Tableau 5.7 du guide IEPF — vitesses d’air recommandées au départ des réseaux (tôle et fibre de verre)'),
    {
      type: 'calc',
      title: 'Colonne et branches d’air neuf',
      steps: [
        { label: 'Colonne montante : 10 000 m³/h à 7 m/s', formula: 'S = \\frac{10 000}{3 600 × 7} ≈ 0,40 m²   →   800 × 500 mm' },
        { label: 'Diamètre équivalent de la gaine rectangulaire (pour lire l’abaque)', formula: 'D_e = 1,3 × \\frac{(a × b)^{0,625}}{(a + b)^{0,25}} ≈ 690 mm' },
        { label: 'Branche d’étage : 2 000 m³/h à 5 m/s', formula: 'S = \\frac{2 000}{3 600 × 5} ≈ 0,11 m²   →   circulaire Ø 375 mm' },
        { label: 'Branche de la salle de réunion : 750 m³/h à 4 m/s', formula: 'S ≈ 0,052 m²   →   Ø 250 mm' },
      ],
      result: 'Pertes de charge lues sur l’abaque : ≈ 0,8 Pa/m dans la colonne, ≈ 1 Pa/m dans les branches',
    },
    fig('p141_0', 'Figure 5.32 du guide — abaque des pertes de charge de l’air dans les conduits circulaires : on entre par le débit et le diamètre'),
    {
      type: 'calc',
      title: 'Ventilateur de soufflage de la centrale',
      steps: [
        { label: 'Pertes de charge du chemin le plus défavorable', formula: 'roue 150 + filtres 200 + batterie 150 + caloduc 80 + réseau 160 + bouche 30 = 770 Pa' },
        { label: 'Puissance absorbée (rendement global ≈ 0,7)', formula: 'P = \\frac{q × Δp}{η} = \\frac{2,78 × 770}{0,7} ≈ 3,1 kW' },
        { label: 'Puissance spécifique du ventilateur', formula: 'SFP = \\frac{P}{q} = \\frac{3,1}{2,78} ≈ 1,1 kW/(m³/s)' },
      ],
      result: 'SFP ≈ 1,1 : dans la meilleure classe courante (SFP 2 ou mieux) ; ventilateurs EC à vitesse variable',
    },

    { type: 'heading', text: '2 · Diffuseurs, confort et bruit' },
    { type: 'illustration', name: 'clim-airflow', props: { variant: 'good' }, caption: 'Le jet suit le plafond et retombe doucement : moins de 0,2 m/s dans la zone occupée' },
    fig('p145_0', 'Figure 5.33 — types de diffuseurs : multicône, hélicoïdal, perforé, linéaire, buse, grille, bouche de sol'),
    {
      type: 'calc',
      title: 'Diffuseurs de la salle de réunion (60 m²)',
      steps: [
        { label: 'Air à diffuser : unité intérieure (1 000 m³/h) + air neuf (jusqu’à 750 m³/h)', formula: 'q ≈ 1 750 m³/h' },
        { label: '4 diffuseurs plafonniers à 4 voies, 600 × 600', formula: 'q ≈ 440 m³/h par diffuseur' },
        { label: 'Portée à 0,25 m/s lue au catalogue, pour une maille de 3,5 m', formula: 'L ≈ 2,2 m ≤ \\frac{3,5}{2} + 0,5' },
        { label: 'Niveau sonore au catalogue à ce débit', formula: 'NR ≈ 27 ≤ NR 30 ✓' },
      ],
      result: '4 diffuseurs à 4 voies : jets qui se rejoignent sans tomber sur les têtes, et un niveau sonore compatible avec une salle de réunion',
    },
    fig('p074_0', 'Tableau 3.1 du guide — niveaux de bruit recommandés par type de local'),
    fig('p088_0', 'Tableau 4.1 — vitesses maximales de l’air dans la zone d’occupation'),

    { type: 'heading', text: '3 · Gaines froides et condensation' },
    {
      type: 'calc',
      title: 'Isolant de la gaine d’air neuf en toiture',
      steps: [
        { label: 'Air dans la gaine 18 °C ; dehors 32 °C, point de rosée ≈ 28 °C', formula: 'il faut θ_{surface} > 28 °C' },
        { label: 'Résistances : isolant 50 mm (λ = 0,035) et échange extérieur (h ≈ 8 W/m²·K)', formula: 'R_{ins} = \\frac{0,05}{0,035} ≈ 1,43   ;   R_{se} = \\frac{1}{8} = 0,125' },
        { label: 'Température de surface de l’isolant', formula: 'θ_s = 32 − (32 − 18) × \\frac{0,125}{1,43 + 0,125} ≈ 30,9 °C > 28 °C ✓' },
        { label: 'Avec seulement 13 mm d’isolant', formula: 'θ_s ≈ 28,5 °C : à peine au-dessus de la rosée, ✗ au moindre défaut' },
      ],
      result: '50 mm d’isolant avec pare-vapeur et tôle de protection en toiture ; 25 mm dans les plafonds (air repris à 26 °C, rosée ≈ 15 °C)',
    },

    { type: 'heading', text: '4 · Régulation et supervision' },
    {
      type: 'table',
      headers: ['Fonction', 'Comment', 'Gain'],
      rows: [
        ['Programmation horaire', 'marche 7 h – 19 h, relance 30 min avant l’arrivée', 'pas de froid la nuit et le week-end'],
        ['Consigne 26 °C ± 1 °C', 'réglable par l’occupant dans cette plage seulement', 'confort sans dérive'],
        ['Dérogation', 'bouton « réunion tardive » : 2 h de marche', 'pas de clim oubliée'],
        ['Ventilation à la demande', 'sonde de CO₂ + registre en salle de réunion', 'débit d’air neuf moyen divisé par deux'],
        ['Délestage sur groupe', 'contact de l’inverseur vers la GTB : VRV limités à 60 %', 'le groupe n’est pas surchargé'],
        ['Comptage', 'énergie par étage et par système', 'suivi, détection des dérives'],
        ['Alarmes', 'défauts VRV, filtres encrassés, détecteurs R32', 'maintenance avant la panne'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Le délestage est essentiel pour moi : sur le groupe électrogène, si les dix VRV redémarrent ensemble à pleine puissance, le groupe cale. Je t’envoie le contact « sur groupe » de l’inverseur, et la GTB limite les compresseurs à 60 % tant qu’on n’est pas revenu sur le réseau.',
    },
    {
      type: 'decision',
      title: 'Architecture de régulation',
      choice: 'Contrôleur central VRV relié à la GTB par une passerelle BACnet ; analyse fonctionnelle écrite et testée à la réception',
      reasons: [
        'Un seul poste pour piloter, programmer, surveiller et compter : l’exploitant de Kora n’a pas à jongler entre les logiciels.',
        'BACnet est un protocole ouvert : un autre intégrateur pourra reprendre le système.',
        'L’analyse fonctionnelle décrit chaque séquence (démarrage, délestage, alarmes) : elle sert de contrat et de liste d’essais.',
      ],
      rejected: 'Des télécommandes individuelles seules : chacun règle à 18 °C, personne n’éteint le soir.',
    },
    { type: 'fiche', id: 'abc-control', why: 'Régulation : du tout-ou-rien au PID et à la GTB.' },
    { type: 'fiche', id: 'clim-room-air', why: 'Bien diffuser l’air dans le local.' },
    { type: 'fiche', id: 'clim-central-networks', why: 'Gaines et tuyauteries : vitesses et pertes de charge.' },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Réseaux d’air et régulation',
      rows: [
        { norm: 'EN 1505 / EN 12237 / EN 1507', rule: 'Dimensions et classes d’étanchéité des conduits circulaires et rectangulaires.', result: 'classe C exigée' },
        { norm: 'SMACNA / ASHRAE Fundamentals', rule: 'Construction des conduits, méthodes de dimensionnement (perte de charge constante, regain statique).', result: 'même démarche' },
        { norm: 'EN 12599 / ASHRAE 111', rule: 'Mesures et réglages (équilibrage) à la réception : débits à ± 10 %.', result: 'rapport d’équilibrage' },
        { norm: 'EN ISO 52120-1 (ex-EN 15232) / ISO 16484, ASHRAE 135', rule: 'Classes d’automatisation A à D ; protocole BACnet.', result: 'classe B visée' },
      ],
    },
    {
      type: 'regional',
      text: 'Beaucoup de bâtiments de la région ont une GTB installée mais jamais exploitée : personne n’a été formé, les mots de passe sont perdus, les alarmes sont ignorées. Ousmane fait inscrire au marché une formation de l’équipe de Kora, un an d’assistance et la remise de l’analyse fonctionnelle à jour. Une GTB qui fonctionne économise couramment 10 à 20 % de l’énergie de climatisation.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Gaine : vitesse recommandée → section → diamètre équivalent → perte de charge sur l’abaque.',
        'Puissance du ventilateur = débit × pression ÷ rendement ; le SFP mesure son efficacité.',
        'Diffuseur : débit, portée et vitesse résiduelle dans la zone occupée, niveau sonore.',
        'Une gaine froide sous un air chaud et humide doit être isolée au-delà du point de rosée, avec pare-vapeur.',
        'Régulation : horaires, consignes bornées, ventilation à la demande, délestage, comptage, alarmes.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Une branche doit transporter 3 000 m³/h à 5 m/s. Quel diamètre de conduit circulaire ?',
      solution: ['S = 3 000 / (3 600 × 5) ≈ 0,167 m².', 'D = √(4 × 0,167 / π) ≈ 0,46 m : on prend 450 ou 500 mm selon l’abaque et le bruit.'],
    },
    {
      type: 'exercise',
      question: 'Le filtre de la centrale s’encrasse et sa perte de charge passe de 200 à 400 Pa. Que devient la puissance du ventilateur à débit constant ?',
      solution: ['Δp = 770 + 200 = 970 Pa.', 'P = 2,78 × 970 / 0,7 ≈ 3,9 kW au lieu de 3,1 kW : + 25 %. D’où l’alarme de filtre encrassé.'],
    },
  ],
};
