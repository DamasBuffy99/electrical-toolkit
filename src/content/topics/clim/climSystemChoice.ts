import { TopicContent } from '../../types';
import { fig } from './fig';

export const climSystemChoiceContent: TopicContent = {
  title: 'Quel système pour quel bâtiment ?',
  subtitle: 'Puissance, bruit, climat, individuel ou centralisé : la grille de choix',
  blocks: [
    {
      type: 'text',
      text: "Le bilan thermique donne une puissance. Il reste à choisir la famille d’équipements : un climatiseur par pièce, une armoire pour une grande salle, ou une centrale pour tout le bâtiment. Quatre critères guident ce choix : la puissance, le bruit, le climat et le type de bâtiment.",
    },
    { type: 'illustration', name: 'clim-systems', caption: 'Trois familles selon la puissance frigorifique' },

    { type: 'heading', text: '1 · Le niveau de puissance' },
    { type: 'subheading', text: 'Les climatiseurs individuels à détente directe' },
    {
      type: 'text',
      text: 'Le « window » (monobloc posé dans un mur ou une fenêtre) et le « split » (unité intérieure + unité extérieure reliées par des tubes frigorifiques) couvrent les petits locaux : 0,75 à 2,2 kW électriques, environ 1,8 à 7 kW de froid, 300 à 1 000 m³/h d’air soufflé. COP supérieur à 2,3 pour un window, à 2,6 pour un split.',
    },
    { type: 'illustration', name: 'clim-systems', props: { highlight: 'small' }, caption: 'Window et split mural : les petits locaux' },
    { type: 'subheading', text: 'L’armoire de climatisation' },
    {
      type: 'text',
      text: 'Une armoire est un grand appareil posé au sol, de 4 à 140 kW, soufflant 1 000 à 20 000 m³/h. Elle peut être monobloc ou split, à détente directe ou à eau glacée, et peut régler l’humidité (salles informatiques, blocs opératoires). COP > 2,5 si le condenseur est refroidi par air, > 3,5 s’il est refroidi par eau.',
    },
    { type: 'illustration', name: 'clim-systems', props: { highlight: 'medium' }, caption: 'Splits et armoires : de 2,5 à 75 kW' },
    { type: 'subheading', text: 'Les centrales' },
    {
      type: 'bullets',
      items: [
        'Rooftop (centrale de toiture unizone) : 7 à 120 kW, 1 500 à 20 000 m³/h, posé sur le toit.',
        'Centrale multizone : 35 à 460 kW, jusqu’à 100 000 m³/h, dessert 6 à 20 zones.',
        'Centrale à eau glacée : un groupe produit de l’eau froide distribuée à des terminaux (ventilo-convecteurs, CTA) — voir la section « La climatisation centralisée ».',
      ],
    },
    { type: 'illustration', name: 'clim-systems', props: { highlight: 'large' }, caption: 'Au-delà de 75 kW : centrales' },
    {
      type: 'table',
      headers: ['Puissance frigorifique', 'Équipement recommandé'],
      rows: [
        ['≤ 2,5 kW', 'Window ou split'],
        ['2,5 à 75 kW', 'Split system ou armoire'],
        ['> 75 kW', 'Armoire ou centrale de climatisation'],
      ],
    },
    {
      type: 'note',
      text: 'Le guide insiste : si aucune puissance du marché ne correspond, préférez l’appareil juste inférieur plutôt que le supérieur, et ne dépassez jamais 5 % de coefficient de sécurité.',
    },
    fig('p071', 'Page 56 du guide — recommandations selon la puissance et choix d’un système centralisé'),

    { type: 'heading', text: '2 · Individuel ou centralisé ?' },
    {
      type: 'table',
      headers: ['', 'Climatiseurs individuels', 'Centrale'],
      rows: [
        ['Investissement', 'Faible', 'Élevé'],
        ['Pose et maintenance', 'Simples, techniciens locaux', 'Main-d’œuvre qualifiée'],
        ['Bruit, courants d’air', 'Souvent gênants', 'Maîtrisés (appareils hors des locaux)'],
        ['Qualité d’air (air neuf, filtration, humidité)', 'Peu maîtrisée', 'Maîtrisée'],
        ['Façade', 'Dégradée (unités partout)', 'Préservée'],
        ['Efficacité énergétique', 'Moyenne', 'Meilleure si bien conçue'],
      ],
    },
    {
      type: 'text',
      text: 'En Afrique, on choisit le plus souvent des climatiseurs individuels pour leur faible coût et leur simplicité. Le centralisé est recommandé quand :',
    },
    {
      type: 'bullets',
      items: [
        'la charge est importante et doit respecter l’architecture du bâtiment ;',
        'on veut un meilleur confort : température, humidité, bruit, qualité de l’air ;',
        'on vise une meilleure efficacité énergétique et des coûts d’exploitation réduits sur la durée ;',
        'l’application est technique (hôpital, industrie) ou exige une régulation fine.',
      ],
    },
    {
      type: 'text',
      text: 'On préfère un traitement par gaines (un appareil pour plusieurs locaux) si les besoins des locaux sont similaires, si leurs charges sont trop petites pour les appareils du marché, si un faux plafond permet de passer les gaines (≥ 400 mm) ou si le bruit doit être très bas. On préfère des appareils indépendants si les locaux ont des horaires ou des orientations différents.',
    },
    {
      type: 'note',
      text: 'Pour le résidentiel et le petit tertiaire, le guide recommande le système « confort-zone » : débit d’air variable sur 8 à 12 zones réglées chacune par sa sonde. Limite : 500 m² par système.',
    },

    { type: 'heading', text: '3 · Le bruit' },
    {
      type: 'text',
      text: "Un climatiseur a des pièces mobiles (compresseur, ventilateurs) qui font du bruit. Il faut connaître le niveau existant, celui qu’ajoutera l’équipement, et la limite à ne pas dépasser selon l’activité. La courbe du Dr Wisner classe les ambiances en 4 zones, de la zone IV (travail intellectuel non gêné) à la zone I (risque de surdité).",
    },
    fig('p073_0', 'Figure 3.1 — courbe du docteur Wisner : les 4 zones de gêne selon la fréquence'),
    {
      type: 'table',
      headers: ['Local (tableau 3.1)', 'Niveau max dB(A) : grand standing / moyen / minimal'],
      rows: [
        ['Chambre d’hôtel (nuit)', '25 / 30 / 35'],
        ['Petit bureau, salle de réunion', '30 / 35 / 40'],
        ['Bureau paysager', '35 / 40 / 45'],
        ['Salle de cours', '30 / 35 / 40'],
        ['Cafétéria', '35 / 40 / 50'],
      ],
    },
    fig('p074_0', 'Tableau 3.1 — niveau de bruit recommandé par type de local'),
    {
      type: 'text',
      text: 'Les climatiseurs se situent entre 30 et 50 dB à 125 Hz. Le window est le plus bruyant : compresseur et condenseur sont dans le local. Le split, qui met le compresseur dehors, est nettement plus silencieux.',
    },
    fig('p087_1', 'Figure 4.7 — niveau de bruit intérieur et extérieur : splits contre windows'),

    { type: 'heading', text: '4 · Le climat' },
    {
      type: 'text',
      text: 'Le climat agit surtout à travers le bilan. Mais en climat sec on peut rafraîchir l’air en l’humidifiant (ventifraîcheur, refroidissement adiabatique), alors qu’en climat humide on n’a pas le choix : il faut refroidir ET déshumidifier avec une machine frigorifique.',
    },
    { type: 'illustration', name: 'clim-comfort', caption: 'Humide : déshumidifier ; sec : on peut rafraîchir par évaporation' },

    { type: 'heading', text: '5 · Ce qu’on rencontre réellement en Afrique' },
    {
      type: 'bullets',
      items: [
        'Bâtiments commerciaux et banques moyennes : splits dans les bureaux, armoires ou rooftops dans les grandes salles (guichets, showrooms).',
        'Beaucoup d’hôtels et d’immeubles de bureaux : windows ou splits partout — mauvaise solution esthétique et énergétique.',
        'Grands hôtels des métropoles : centrales à eau glacée avec ventilo-convecteurs, de loin les plus utilisées.',
        'Immeubles de bureaux et grandes banques : systèmes à débit de réfrigérant variable (VRV/VRF), environ 50 % plus chers que l’eau glacée à l’investissement, mais en plein essor.',
        'Petits supermarchés : plusieurs armoires à condensation par eau sur une même tour de refroidissement.',
      ],
    },
    fig('p130_0', 'Tableau 5.3 — destinations courantes des différents systèmes'),
    fig('p128_0', 'Tableau 5.1 — destinations et applications des différents types d’installations'),
    {
      type: 'note',
      text: 'Aucun système ne répond à tous les cas : chaque projet mérite une étude qui pèse contraintes de construction, service rendu, budget d’investissement ET d’exploitation, confort et efficacité énergétique.',
    },
    { type: 'heading', text: "Exercices" },
    {
      type: 'exercise',
      question: "Proposez une famille de système pour : (a) un bureau isolé de 2 kW ; (b) une banque avec un hall de guichets de 40 kW et 10 bureaux de 3 kW ; (c) un hôtel de 300 chambres.",
      solution: [
        "(a) ≤ 2,5 kW : window ou, mieux, split (plus silencieux).",
        "(b) Splits dans les bureaux ; armoire ou rooftop pour le hall de 40 kW (configuration typique des banques moyennes en Afrique).",
        "(c) Centrale à eau glacée avec ventilo-convecteurs dans les chambres : on peut couper les chambres inoccupées et les remettre vite en température.",
      ],
    },
    {
      type: 'exercise',
      question: "Un hôtel « grand standing » veut climatiser ses chambres avec des climatiseurs de fenêtre. Quel critère s’y oppose ?",
      solution: [
        "Le bruit : la nuit, une chambre grand standing doit rester sous 25 dB(A) (tableau 3.1).",
        "Le window a compresseur et condenseur dans la pièce : c’est l’appareil le plus bruyant. Il faut un split, ou mieux des ventilo-convecteurs.",
      ],
    },
  ],
};
