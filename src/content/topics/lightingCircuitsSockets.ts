import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const lightingCircuitsSocketsContent: TopicContent = {
  title: 'Circuits d’éclairage, interrupteurs et prises',
  subtitle: 'Câbler les luminaires, choisir les interrupteurs, implanter les prises et les regrouper en circuits',
  blocks: [
    {
      type: 'text',
      text: "Les luminaires sont placés : il faut maintenant les commander (interrupteurs), les regrouper en circuits, puis implanter les prises selon le mobilier. Ces circuits alimenteront ensuite le panel schedule.",
    },

    { type: 'heading', text: '1 · Les interrupteurs' },
    {
      type: 'table',
      headers: ['Interrupteur', 'Usage'],
      rows: [
        ['Simple allumage, 1 touche (one way – one gang)', "Commande un groupe de luminaires depuis un point"],
        ['Simple allumage, 2 touches (one way – two gang)', 'Commande deux groupes séparés depuis un point'],
        ['Étanche (wet areas)', 'Zones humides : salles de bain, WC — jamais un interrupteur standard près de la douche'],
        ['Va-et-vient (two way)', 'Commande les mêmes luminaires depuis deux endroits : escaliers, couloirs, grandes pièces, chambres'],
        ['Variateur (dimmer)', "Règle l'intensité lumineuse"],
      ],
    },
    {
      type: 'note',
      text: '📐 Hauteur de pose : 120 cm (≈ 48 in) en standard ; 90 cm (36 in) pour l’accessibilité en fauteuil roulant. Distance de la porte : 10 cm, côté ouverture, pour le trouver dans le noir.',
    },
    { type: 'image', source: SLIDES['cond-32'], caption: 'Simple allumage, 1 touche' },
    { type: 'image', source: SLIDES['cond-33'], caption: 'Simple allumage, 2 touches' },
    { type: 'image', source: SLIDES['cond-34'], caption: 'Zones humides : interrupteur étanche, à l’extérieur de la douche' },
    { type: 'image', source: SLIDES['cond-35'], caption: 'Va-et-vient : couloirs et escaliers' },
    { type: 'image', source: SLIDES['cond-36'], caption: 'Légende des symboles d’interrupteurs' },
    { type: 'image', source: SLIDES['cond-38'], caption: 'Hauteur et distance de la porte' },

    { type: 'heading', text: '2 · Le circuit va-et-vient' },
    {
      type: 'text',
      text: "Chaque interrupteur va-et-vient a 3 bornes : une commune (COM) et deux « navettes » (L1, L2). La phase arrive sur le COM du premier interrupteur, les deux navettes relient les interrupteurs, et le COM du second part vers la lampe. Basculer n'importe lequel des deux change l'état de la lampe.",
    },
    { type: 'image', source: SLIDES['cond-41'], caption: 'Schéma du va-et-vient' },
    { type: 'image', source: SLIDES['cond-42'], caption: 'Bornes COM, L1 et L2' },

    { type: 'heading', text: '3 · Les circuits d’éclairage' },
    {
      type: 'bullets',
      items: [
        'Sur le plan : liaisons en lignes droites ou en U ; la flèche de chaque circuit pointe vers le tableau.',
        'Au plus 1 200 VA et 10 luminaires par circuit.',
        'Facteur de puissance : 0,95 pour les LED, 0,8 pour les fluorescents.',
        'Protection : disjoncteur ou fusible de 5 ou 6 A (sinon 10 A avec du câble 3 mm²).',
        'BS 7671 : longueur maximale d’un circuit d’éclairage 53 m, avec du câble 1,5 mm².',
        'Code saoudien : 1 000 W par disjoncteur 10 A, 1 500 W par disjoncteur 16 A.',
      ],
    },
    { type: 'formula', text: 'Exemple : 8 luminaires LED de 36 W → 288 W / 0,95 ≈ 303 VA → un seul circuit (≤ 1 200 VA, ≤ 10 luminaires)' },
    { type: 'image', source: SLIDES['cond-44'], caption: 'Circuits d’éclairage sur le plan' },

    { type: 'heading', text: '4 · Les types de prises' },
    {
      type: 'table',
      headers: ['Prise', 'Calibre', 'Puissance de calcul', 'Usage'],
      rows: [
        ['Simple', '10 ou 16 A', '180 VA (IEC, NEC) à 250 VA (EC)', 'Usage général, IP20'],
        ['Double (duplex)', '10 ou 16 A', '360 VA à 500 VA', 'TV, ordinateurs'],
        ['Étanche', '10 ou 16 A', 'Comme une simple', 'Cuisines, salles de bain, extérieur — IP54'],
        ['Commandée (switched)', '10 ou 16 A', 'Comme une simple', 'Prise avec interrupteur'],
        ['Ondulée (UPS)', '10 ou 16 A', 'Comme une simple', 'Charges critiques (ordinateurs), alimentée par l’ASI'],
        ['De puissance', '16, 20, 32 A…', 'Selon l’appareil', 'Lave-linge, lave-vaisselle, frigo, micro-ondes, sèche-mains'],
        ['Triphasée', 'Selon la machine', 'Selon la machine', 'Usines, hôpitaux'],
      ],
    },
    {
      type: 'text',
      text: "NEC 220.14(I) : chaque prise simple ou multiple sur un même support compte pour au moins 180 VA ; un bloc de 4 prises ou plus compte pour au moins 90 VA par prise.",
    },
    { type: 'image', source: SLIDES['cond-47'], caption: 'Prise simple' },
    { type: 'image', source: SLIDES['cond-48'], caption: 'Prise double' },
    { type: 'image', source: SLIDES['cond-49'], caption: 'NEC 220.14(I)' },
    { type: 'image', source: SLIDES['cond-53'], caption: 'Prises de puissance' },

    { type: 'heading', text: '5 · Hauteurs et types de pose' },
    {
      type: 'table',
      headers: ['Pose', 'Hauteur / IP', 'Où'],
      rows: [
        ['Murale', '30 à 40 cm du sol fini', 'Usage général'],
        ['Murale haute', '120 cm', 'Cuisines (plan de travail), TV'],
        ['Au sol', 'IP67', 'Bureaux en open space'],
        ['Dans le mobilier', 'IP65', 'Postes de travail'],
        ['En colonne', '—', 'Bâtiments administratifs'],
        ['En goulotte', '—', 'Hôpitaux, blocs opératoires'],
        ['Au plafond', '—', 'Équipements suspendus'],
      ],
    },
    { type: 'image', source: SLIDES['cond-56'], caption: 'Prise murale à 30–40 cm' },
    { type: 'image', source: SLIDES['cond-58'], caption: 'Prise au sol (IP67)' },
    { type: 'image', source: SLIDES['cond-61'], caption: 'Goulotte (hôpitaux)' },

    { type: 'heading', text: '6 · Implanter les prises et former les circuits' },
    {
      type: 'bullets',
      items: [
        "L'implantation dépend du mobilier.",
        'Bureaux : pour chaque poste, une prise double normale + une prise double secourue.',
        'Pièce sans mobilier : une prise tous les 3,6 m, à 1,8 m des murs.',
        'Couloirs : une prise de service tous les 6 m.',
        'Locaux peu utilisés (stockage, locaux techniques) : une prise près de la porte et une sur le mur opposé.',
        'Toilettes publiques : une prise de puissance pour le sèche-mains + une prise étanche de service.',
        'Salle de bain privée : une prise étanche près du lavabo.',
        'Cuisine : deux prises de puissance (selon les appareils) + une prise normale par mur.',
        'TV et ordinateurs : une prise double.',
        'Prises dos à dos sur un même mur : décaler d’au moins 15 cm pour limiter le passage du son.',
      ],
    },
    {
      type: 'table',
      headers: ['Règle de circuit', 'Valeur'],
      rows: [
        ['Puissance max par circuit de prises', '2 000 VA'],
        ['Avec 250 VA par prise (EC)', '8 prises simples ou 4 doubles par circuit'],
        ['NEC, circuit 20 A', '10 prises au maximum'],
      ],
    },
    { type: 'image', source: SLIDES['cond-63'], caption: 'Répartition des prises' },
    { type: 'image', source: SLIDES['cond-64'], caption: 'Règles de distribution et de circuits' },
  ],
};
