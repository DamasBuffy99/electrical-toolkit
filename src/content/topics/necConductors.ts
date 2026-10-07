import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const necConductorsContent: TopicContent = {
  title: 'NEC : conducteurs, moteurs et conduits',
  subtitle: 'Dimensionner les conducteurs de branche, de moteurs, de feeders et d’arrivée, puis les conduits',
  blocks: [
    {
      type: 'text',
      text: "Après les protections, le NEC fixe la section minimale des conducteurs. L'idée est la même partout : partir du courant de charge (avec 125 % pour le continu), appliquer les facteurs de correction, puis respecter la température des bornes.",
    },

    { type: 'heading', text: '1 · Conducteurs de branche (NEC 210.19)' },
    {
      type: 'bullets',
      items: [
        "(a) Ampacité ≥ charge non continue + 125 % de la charge continue.",
        "(b) Ampacité ≥ charge maximale à desservir, après facteurs de correction.",
        "On retient la plus grande des deux. Exception : avec un dispositif listé 100 %, ampacité ≥ continu + non continu.",
        'Un conducteur neutre non raccordé à une protection peut être dimensionné à 100 % (NEC 215).',
      ],
    },
    { type: 'image', source: SLIDES['nec-41'], caption: 'Facteurs de correction NEC' },

    { type: 'heading', text: '2 · Facteurs de correction et neutre (NEC 310.15)' },
    {
      type: 'bullets',
      items: [
        "Si plusieurs ampacités s'appliquent le long d'un circuit, on prend la plus faible (sauf si la portion la plus faible fait moins de 3 m et moins de 10 % du circuit).",
        "Un neutre qui ne transporte que le déséquilibre ne compte pas comme conducteur actif.",
        "En circuit 3 fils (2 phases + neutre d'un réseau étoile 4 fils), le neutre compte.",
        'Avec des charges non linéaires (harmoniques), le neutre compte toujours.',
        'Le conducteur de terre (PE) ne compte jamais.',
      ],
    },

    { type: 'heading', text: '3 · Température des bornes (NEC 110.14)' },
    {
      type: 'text',
      text: "L'ampacité retenue ne doit pas dépasser la température de la borne la plus faible du circuit.",
    },
    {
      type: 'table',
      headers: ['Circuit', 'Colonne d’ampacité à utiliser'],
      rows: [
        ['≤ 100 A, ou conducteurs 14 à 1 AWG', '60 °C (75 °C pour les moteurs de design B, C, D)'],
        ['> 100 A, ou conducteurs > 1 AWG', '75 °C'],
      ],
    },
    {
      type: 'note',
      text: "📌 Un 8 AWG THHN 90 °C est limité à 40 A sur des bornes 60 °C, à 50 A sur des bornes 75 °C. Marquage des cosses : AL7CU = 75 °C, AL9CU = 90 °C.",
    },
    {
      type: 'text',
      text: "NEC 240.4(B) : si l'ampacité du câble ne correspond pas à un calibre normalisé, on peut prendre le calibre normalisé supérieur, jusqu'à 800 A (et pas pour une branche de plusieurs prises).",
    },
    { type: 'image', source: SLIDES['nec-46'], caption: 'NEC 110.14 : température des bornes' },
    { type: 'image', source: SLIDES['nec-47'], caption: 'Bornes ≤ 100 A et > 100 A' },
    { type: 'image', source: SLIDES['nec-48'], caption: 'NEC 240.4(B)' },

    { type: 'heading', text: '4 · Exemples de correction' },
    { type: 'subheading', text: 'Exemple 1 : 2 AWG THHN cuivre dans un conduit à 50 °C' },
    { type: 'formula', text: '130 A × 0,82 = 106,6 A' },
    { type: 'formula', text: 'Avec 6 conducteurs dans le conduit : 106,6 × 0,8 = 85,28 A' },
    { type: 'subheading', text: 'Exemple 2 : feeder 200 A d’éclairage fluorescent, 40 °C, bornes 75 °C' },
    {
      type: 'bullets',
      items: [
        'Charge non linéaire → le neutre compte : 4 conducteurs actifs → facteur 0,8.',
        'Correction de température : 0,88 (colonne 75 °C), 0,91 (colonne 90 °C).',
      ],
    },
    { type: 'formula', text: '75 °C : 200 / (0,88 × 0,8) = 284 A → 300 kcmil (285 A)' },
    { type: 'formula', text: '90 °C : 200 / (0,91 × 0,8) = 274,7 A → 250 kcmil (290 A)' },
    { type: 'formula', text: 'Vérification : 0,91 × 0,8 × 290 = 211 A < 255 A (250 kcmil à 75 °C) ✓' },
    { type: 'note', text: '💡 Le câble 90 °C permet de descendre d’une section (300 → 250 kcmil) : c’est son principal avantage.' },
    { type: 'image', source: SLIDES['nec-54'], caption: 'Exemple 1' },
    { type: 'image', source: SLIDES['nec-55'], caption: 'Exemple 1 avec 6 conducteurs' },
    { type: 'image', source: SLIDES['nec-57'], caption: 'Exemple 2' },
    { type: 'image', source: SLIDES['nec-58'], caption: 'Exemple 2 : vérification à 75 °C' },

    { type: 'heading', text: '5 · Conducteurs d’un moteur (NEC 430.22)' },
    { type: 'formula', text: 'Ampacité ≥ 1,25 × FLC (tables 430.248 / 430.250)' },
    { type: 'formula', text: 'Moteur 7,5 HP, 230 V tri : FLC = 22 A → 22 × 1,25 = 27,5 A → 10 AWG (35 A à 75 °C)' },
    { type: 'formula', text: 'Moteur 2 HP, 230 V mono : FLC = 12 A → 12 × 1,25 = 15 A → 14 AWG (20 A)' },
    {
      type: 'text',
      text: "Démarrage étoile-triangle (NEC 430.22 et 430.44) : côté ligne, 125 % du FLC ; entre le démarreur et le moteur, chaque enroulement porte 58 % du courant (1/√3), donc 1,25 × 58 % = 72 % du FLC. Relais thermique : FLA × 0,577 × 1,15 ou 1,25.",
    },
    { type: 'image', source: SLIDES['nec-61'], caption: 'Moteur 7,5 HP' },
    { type: 'image', source: SLIDES['nec-62'], caption: 'Moteur 2 HP' },
    { type: 'image', source: SLIDES['nec-20'], caption: 'Démarrage étoile-triangle' },
    { type: 'image', source: SLIDES['nec-21'], caption: 'Conducteurs à 58 % / 72 %' },

    { type: 'heading', text: '6 · Feeder de plusieurs moteurs (NEC 430.24)' },
    {
      type: 'bullets',
      items: [
        '125 % du FLC du plus gros moteur',
        '+ la somme des FLC des autres moteurs',
        '+ 100 % de la charge non continue hors moteurs',
        '+ 125 % de la charge continue hors moteurs',
      ],
    },
    { type: 'formula', text: 'Moteurs 20 HP (27 A) + 10 HP (14 A), 460 V : 27 × 1,25 + 14 = 47,75 ≈ 48 A → 6 AWG (55 A à 60 °C)' },
    { type: 'image', source: SLIDES['nec-64'], caption: 'NEC 430.24' },
    { type: 'image', source: SLIDES['nec-66'], caption: 'Exemple de feeder moteurs' },

    { type: 'heading', text: '7 · Climatisation (NEC 440)' },
    {
      type: 'bullets',
      items: [
        "On utilise le courant de la plaque (RLA) ou le courant de sélection (BCSC), le plus grand des deux.",
        'Un seul compresseur : ampacité ≥ 125 % de ce courant.',
        'Plusieurs : Σ compresseurs + Σ autres moteurs + 25 % du plus gros.',
        'Compresseur en étoile-triangle : 72 % entre démarreur et moteur.',
      ],
    },
    { type: 'formula', text: '1,25 × 27 + 2,2 = 36 A    ·    1,25 × 22,1 + 1,8 = 29,4 A    ·    1,25 × 16 + 1,3 = 21,3 A' },
    { type: 'image', source: SLIDES['nec-71'], caption: 'Exemple : 1,25 × 27 + 2,2 = 36 A' },

    { type: 'heading', text: '8 · Conducteurs d’arrivée (NEC 230.42)' },
    {
      type: 'bullets',
      items: [
        'Ampacité ≥ charge non continue + 125 % de la charge continue, et ≥ charge maximale après correction.',
        'Exceptions : neutre non protégé à 100 % ; dispositif + ensemble listés 100 %.',
        'NEC 230.9 : 2 à 6 disjoncteurs peuvent servir de protection ; leur somme peut dépasser l’ampacité des conducteurs si la charge calculée ne la dépasse pas.',
      ],
    },
    { type: 'formula', text: 'Exemple 1 : 32 450 VA / 240 V = 135 A → 1/0 AWG cuivre (colonne 75 °C)' },
    {
      type: 'text',
      text: "Exemple 2 : 3 conducteurs + neutre (charges non linéaires) dans un même conduit à 35 °C, isolant 90 °C, bornes 75 °C. Charge réelle 95 500 VA ; facteurs 0,7 (groupement) et 0,96 (température).",
    },
    { type: 'formula', text: '95 500 / 0,7 / 0,96 = 142 000 VA → 142 000 / (480 × √3) = 171 A → 2/0 AWG (195 A à 90 °C)' },
    { type: 'formula', text: 'Vérification : 0,7 × 0,96 × 195 = 131 A ≤ 175 A (2/0 à 75 °C, limite des bornes) ✓' },
    { type: 'image', source: SLIDES['nec-79'], caption: 'Conducteurs d’arrivée : exemple 2' },
    { type: 'image', source: SLIDES['nec-80'], caption: 'Application des facteurs de correction' },

    { type: 'heading', text: '9 · Conduits (NEC chapitre 9)' },
    {
      type: 'table',
      headers: ['Nombre de conducteurs', 'Remplissage max (Table 1)'],
      rows: [
        ['1', '53 %'],
        ['2', '31 %'],
        ['Plus de 2', '40 %'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Les conducteurs de terre et de liaison comptent dans le remplissage (avec leurs dimensions réelles).',
        'Manchons courts (≤ 600 mm) entre boîtes : remplissage jusqu’à 60 %, sans facteur de groupement.',
        'Si le calcul donne une décimale ≥ 0,8, on arrondit au conducteur supérieur.',
      ],
    },
    { type: 'subheading', text: 'Exemple 1 : 10 conducteurs mixtes dans un conduit RMC' },
    { type: 'formula', text: '4 × 12 AWG THWN (0,0133 in²) + 3 × 8 AWG TW (0,0437 in²) + 3 × 6 AWG THW (0,0726 in²)' },
    { type: 'formula', text: '0,0532 + 0,1311 + 0,2178 = 0,4021 in² → RMC 1¼ in (0,610 in² à 40 %)' },
    { type: 'subheading', text: 'Exemple 2 : combien de 10 AWG THHN dans un RMC 1¼ in ?' },
    { type: 'formula', text: '0,610 / 0,0211 = 28,9 → 29 conducteurs' },
    { type: 'image', source: SLIDES['nec-82'], caption: 'Table 1 : pourcentage de remplissage' },
    { type: 'image', source: SLIDES['nec-86'], caption: 'Manchons ≤ 600 mm : 60 %' },
    { type: 'image', source: SLIDES['nec-89'], caption: 'Exemple 1 : surfaces des conducteurs' },
    { type: 'image', source: SLIDES['nec-90'], caption: 'Exemple 1 : choix du RMC 1¼ in' },
    { type: 'image', source: SLIDES['nec-92'], caption: 'Exemple 2 : 29 conducteurs' },
  ],
};
