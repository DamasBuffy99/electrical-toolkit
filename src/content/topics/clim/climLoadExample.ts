import { TopicContent } from '../../types';
import { fig } from './fig';

export const climLoadExampleContent: TopicContent = {
  title: 'Exemple complet : un bureau à Douala',
  subtitle: 'Le bilan d’un bureau de 60 m², le choix du split et la puissance à souscrire',
  blocks: [
    {
      type: 'text',
      text: "On veut climatiser des bureaux identiques au rez-de-chaussée d’un immeuble à Douala (Cameroun). On calcule un seul bureau, de 10 m × 6 m et 3 m sous plafond, occupé de 8 h à 12 h et de 13 h à 18 h.",
    },
    fig('p042_0', 'Figure 1.2 — plan du local (10 m × 6 m), murs extérieurs de 20 cm, cloisons de 10 cm'),

    { type: 'heading', text: 'Le cahier des charges' },
    {
      type: 'bullets',
      items: [
        'Murs extérieurs : parpaings creux de 20 cm, enduit sable des deux côtés, peinture blanche.',
        'Cloisons : parpaings creux de 10 cm, enduites, blanches.',
        'Plancher : béton 15 cm + chape + moquette marron ; plafond : béton 20 cm blanc, local non climatisé au-dessus.',
        'Porte en bois 1 m × 2 m ; fenêtre 1 m × 1,5 m à châssis métallique avec store extérieur en toile écrue.',
        'Éclairage par tubes fluorescents ; équipements de bureau courants.',
      ],
    },
    {
      type: 'table',
      headers: ['Conditions', 'Température', 'Humidité', 'Teneur en eau ω'],
      rows: [
        ['Extérieur (Douala, base)', '32 °C', '83 %', '0,0255 kg/kg'],
        ['Intérieur (confort)', '26 °C', '51 %', '0,0108 kg/kg'],
        ['Écart', 'Δθ = 6 °C', '', 'Δω = 0,0147 kg/kg'],
      ],
    },

    { type: 'heading', text: 'Étape 1 · L’heure de calcul' },
    {
      type: 'text',
      text: 'Les murs Nord, Sud et Ouest sont ensoleillés. Leurs apports sont maximaux à 12 h (Nord), 13 h (Sud) et 14 h (Ouest). Le mur Sud est le plus grand et le bureau est occupé l’après-midi : on fait le bilan à 13 h.',
    },
    fig('p031_1', 'Tableau 1.14a — rayonnement à 4° Nord en février : on lit les valeurs de la ligne 13 h'),

    { type: 'heading', text: 'Étape 2 · Transmission à travers les parois' },
    { type: 'formula', text: 'QStr = k × S × Δθ' },
    {
      type: 'table',
      headers: ['Paroi', 'k', 'S (m²)', 'Δθ', 'QStr (W)'],
      rows: [
        ['Mur Nord', '2,09', '30', '6', '376'],
        ['Mur Sud', '2,09', '28', '6', '351'],
        ['Mur Ouest', '2,09', '16,5', '6', '207'],
        ['Mur Est (cloison vers local non climatisé)', '2,37', '18', '6 − 3 = 3', '128'],
        ['Vitrage Ouest', '5', '1,5', '6', '45'],
        ['Plafond (local non climatisé au-dessus)', '1,14', '60', '6 − 3 = 3', '205'],
        ['Porte en bois', '3,94', '2', '6', '47'],
        ['Total', '', '', '', '1 359'],
      ],
    },
    { type: 'note', text: 'Le plancher sur terre-plein n’apporte rien : Δθ = 20 − 26 < 0, le sol est plus frais que le local.' },
    fig('p043', 'Le calcul détaillé dans le guide (page 28) : transmission puis rayonnement'),

    { type: 'heading', text: 'Étape 3 · Rayonnement solaire' },
    { type: 'formula', text: 'Murs : QSRm = α × F × S × Rm   ;   Vitrage : QSRv = α × g × S × Rv' },
    {
      type: 'table',
      headers: ['Paroi', 'α', 'F ou g', 'S', 'R (W/m²)', 'Q (W)'],
      rows: [
        ['Mur Nord (blanc)', '0,4', 'F = 0,105', '30', '256', '322'],
        ['Mur Sud (blanc)', '0,4', 'F = 0,105', '28', '352', '413'],
        ['Mur Ouest (blanc)', '0,4', 'F = 0,105', '16,5', '335', '232'],
        ['Vitrage Ouest + store écru', '0,86', 'g = 0,28', '1,5', '288', '104'],
        ['Porte bois (foncée)', '0,7', 'F = 0,197', '2', '352', '97'],
        ['Total', '', '', '', '', '1 168'],
      ],
    },
    {
      type: 'text',
      text: 'F = 0,105 s’obtient en interpolant le tableau 1.12 pour k = 2,09 (k = 2 → 0,10 ; k = 3 → 0,15). Pour la porte, k = 3,94 donne F ≈ 0,197.',
    },

    { type: 'heading', text: 'Étape 4 · Air neuf, occupants, éclairage, appareils' },
    { type: 'subheading', text: 'Renouvellement d’air (ventilation naturelle : 1 volume/h = 180 m³/h)' },
    { type: 'formula', text: 'QSr = 180 × (32 − 26) × 0,33 = 356 W' },
    { type: 'formula', text: 'QLr = 180 × (0,0255 − 0,0108) × 0,84 × 1000 = 2 222 W' },
    { type: 'subheading', text: 'Occupants (0,1 pers/m² × 60 m² = 6 personnes, public mixte −10 %)' },
    { type: 'formula', text: 'QSoc = 6 × 63 × 0,9 = 340 W   ;   QLoc = 6 × 59 × 0,9 = 318 W' },
    { type: 'subheading', text: 'Éclairage fluorescent (16 W/m²)' },
    { type: 'formula', text: 'Qécl = 16 × 60 = 960 W' },
    { type: 'subheading', text: 'Équipements (avec coefficient d’utilisation)' },
    {
      type: 'table',
      headers: ['Appareil', 'Puissance', 'cu', 'Sensible (W)', 'Latent (W)'],
      rows: [
        ['Ordinateur', '250 W', '100 %', '250', ''],
        ['Photocopieuse', '750 W', '20 %', '150', ''],
        ['Fax', '62 W', '15 %', '9,3', ''],
        ['Chaîne stéréo', '40 W', '10 %', '4', ''],
        ['Cafetière', '750 / 300 W', '25 %', '188', '75'],
        ['Imprimante', '52 W', '15 %', '8', ''],
        ['Total', '', '', '609,3', '75'],
      ],
    },
    fig('p044', 'Page 29 du guide — air neuf, occupants, éclairage et équipements'),

    { type: 'heading', text: 'Étape 5 · Le bilan' },
    {
      type: 'table',
      headers: ['Poste', 'Sensible (W)', 'Latent (W)'],
      rows: [
        ['Transmission', '1 359', ''],
        ['Rayonnement solaire', '1 168', ''],
        ['Renouvellement d’air', '356', '2 222'],
        ['Occupants', '340', '318'],
        ['Éclairage', '960', ''],
        ['Équipements', '609', '75'],
        ['Total', 'QS = 4 792', 'QL = 2 615'],
      ],
    },
    { type: 'formula', text: 'QT = QS + QL = 4 792 + 2 615 = 7 407 W ≈ 7,4 kW de froid' },
    {
      type: 'bullets',
      items: [
        'Puissance de déshumidification = QL = 2,61 kW, soit environ 3,76 litres d’eau à retirer par heure.',
        'Facteur de chaleur sensible : 4 792 / 7 407 ≈ 0,65. Très bas : à Douala, plus d’un tiers de la charge sert à sécher l’air !',
        'L’air neuf seul pèse 2 578 W, soit 35 % du bilan : maîtriser les infiltrations (portes fermées, fenêtres étanches) est essentiel.',
      ],
    },
    fig('p046_0', 'Figure 1.3 — répartition des apports calculée par le logiciel du guide : murs ensoleillés 43 %, éclairage 20 %'),

    { type: 'heading', text: 'Étape 6 · Choisir le climatiseur' },
    {
      type: 'text',
      text: 'Dans le catalogue du constructeur, on retient un split « froid seul » dont la puissance est juste au-dessus du bilan :',
    },
    {
      type: 'table',
      headers: ['Caractéristique', 'Valeur'],
      rows: [
        ['Puissance frigorifique', '8 500 W (29 000 BTU/h)'],
        ['Débit d’air', '1 200 à 900 m³/h'],
        ['Niveau sonore', '41 / 49 dB(A)'],
        ['Puissance absorbée', '3 280 W'],
        ['Calibre fusible', '32 A'],
        ['Liaison frigorifique max.', '25 m'],
      ],
    },
    { type: 'formula', text: 'COP = 8 500 / 3 280 ≈ 2,6  →  conforme au minimum conseillé pour un split (> 2,6)' },
    fig('p045', 'Page 30 du guide — sélection du split et puissance à souscrire'),

    { type: 'heading', text: 'Étape 7 · La puissance à souscrire' },
    { type: 'formula', text: 'Pat = 3 280 × Ks (1) × Ku (1) = 3 280 W' },
    { type: 'formula', text: 'cos φ = 0,8 → tan φ = 0,75 → Qat = 3 280 × 0,75 = 2 460 var' },
    { type: 'formula', text: 'Sa = √(3 280² + 2 460²) = 4 100 VA' },
    {
      type: 'note',
      text: 'On souscrira 4,1 kVA pour ce bureau. Bilan : 7,4 kW de froid calculés → split de 8,5 kW → 3,3 kW électriques → 4,1 kVA d’abonnement. Gardez bien en tête ces trois puissances différentes.',
    },
  ],
};
