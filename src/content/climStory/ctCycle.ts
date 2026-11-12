import { TopicContent } from '../types';
import { fig } from '../topics/clim/fig';

export const ctCycleContent: TopicContent = {
  title: 'Le cycle sur le diagramme enthalpique',
  subtitle: 'À quelle température faire évaporer le fluide ? À quelle température le condenser ? Ousmane trace le cycle de la chambre froide sur le diagramme enthalpique, en tire le débit de fluide, la puissance du compresseur et le rendement, et montre à Paul ce que coûte un condenseur encrassé.',
  blocks: [
    { type: 'scene', text: 'Mois 7 · Bureau d’études' },
    {
      type: 'objectives',
      items: [
        'Choisir les températures d’évaporation et de condensation à partir des températures d’air.',
        'Placer les quatre points du cycle et lire les enthalpies.',
        'Calculer l’effet frigorifique, le travail de compression, le débit et le COP.',
        'Mesurer l’effet d’une condensation trop haute.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '−6 °C / 47 °C', label: 'évaporation / condensation' },
        { value: '139 kJ/kg', label: 'effet frigorifique' },
        { value: '0,43 kg/s', label: 'débit de fluide pour 60 kW' },
        { value: 'COP 2,6', label: 'au compresseur' },
        { value: '− 20 %', label: 'de rendement avec un condenseur encrassé' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'client',
      text: 'Le fournisseur me demande la « température d’évaporation ». La chambre est à 2 °C : c’est 2 °C, non ?',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'Non : pour que la chaleur passe de l’air au fluide, le fluide doit être plus froid que l’air. Tout le jeu consiste à choisir cet écart. Trop petit, il faut un évaporateur énorme ; trop grand, on dessèche les produits et le compresseur travaille plus. On va le voir sur le diagramme.',
    },

    { type: 'heading', text: '1 · Choisir les températures du cycle' },
    {
      type: 'calc',
      title: 'Températures de fonctionnement',
      steps: [
        { label: 'Évaporation : 8 K sous l’air de la chambre, pour garder les produits humides', formula: 'θ_0 = 2 − 8 = −6 °C' },
        { label: 'Condensation : 12 K au-dessus de l’air extérieur (condenseur à air)', formula: 'θ_k = 35 + 12 = 47 °C' },
        { label: 'Surchauffe à la sortie de l’évaporateur (protège le compresseur)', formula: 'SH = 6 K' },
        { label: 'Sous-refroidissement à la sortie du condenseur (liquide sans bulles au détendeur)', formula: 'SC = 4 K' },
      ],
      result: 'Cycle : évaporation −6 °C, condensation 47 °C, surchauffe 6 K, sous-refroidissement 4 K',
    },
    fig('p134_0', 'Tableau 5.5 du guide IEPF — écarts de température usuels pour le calcul des échangeurs'),
    {
      type: 'note',
      text: 'Un écart de 8 K est un compromis courant pour les fruits et les boissons. Pour de la viande ou des fleurs, très sensibles au dessèchement, on descend à 5 ou 6 K avec un évaporateur plus grand. Pour des produits emballés hermétiquement, on peut monter à 10 K.',
    },

    { type: 'heading', text: '2 · Le cycle sur le diagramme' },
    { type: 'illustration', name: 'ph-cycle', caption: 'Le cycle de la chambre à 2 °C : évaporation (4 → 1), compression (1 → 2), condensation (2 → 3), détente (3 → 4)' },
    {
      type: 'table',
      headers: ['Point', 'État', 'Pression', 'Enthalpie'],
      rows: [
        ['1', 'vapeur surchauffée, aspiration du compresseur (−6 °C + 6 K)', '≈ 2,7 bar', 'h_1 ≈ 400 kJ/kg'],
        ['2', 'vapeur chaude au refoulement (≈ 80 °C)', '≈ 13,5 bar', 'h_2 ≈ 453 kJ/kg'],
        ['3', 'liquide sous-refroidi (43 °C) avant le détendeur', '≈ 13,5 bar', 'h_3 ≈ 261 kJ/kg'],
        ['4', 'mélange liquide-vapeur après détente (h constante)', '≈ 2,7 bar', 'h_4 = h_3 ≈ 261 kJ/kg'],
      ],
    },
    {
      type: 'calc',
      title: 'Ce que le diagramme permet de calculer',
      steps: [
        { label: 'Effet frigorifique : chaleur prise par 1 kg de fluide dans l’évaporateur', formula: 'q_0 = h_1 − h_4 = 400 − 261 = 139 kJ/kg' },
        { label: 'Travail de compression (rendement isentropique ≈ 0,7)', formula: 'w = h_2 − h_1 = 453 − 400 = 53 kJ/kg' },
        { label: 'Chaleur rejetée au condenseur', formula: 'q_k = h_2 − h_3 = 453 − 261 = 192 kJ/kg = q_0 + w' },
        { label: 'Débit de fluide pour 60 kW', formula: 'q_m = \\frac{Q_0}{q_0} = \\frac{60}{139} ≈ 0,43 kg/s' },
        { label: 'Puissance du compresseur et coefficient de performance', formula: 'P = q_m × w ≈ 0,43 × 53 ≈ 22,9 kW   ;   COP = \\frac{q_0}{w} = \\frac{139}{53} ≈ 2,6' },
      ],
      result: '60 kW de froid pour ≈ 23 kW sur l’arbre du compresseur ; le condenseur rejette ≈ 83 kW',
    },
    fig('p082_0', 'Figure 4.2 du guide IEPF — le cycle dans le diagramme pression-enthalpie : efficacité = effet frigorifique ÷ travail'),
    {
      type: 'note',
      text: 'Les enthalpies sont arrondies et lues sur le diagramme du R513A (fluide choisi à l’étape suivante), proche de celui du R134a. Un logiciel de fabricant donne les mêmes résultats à quelques pourcents près ; l’intérêt du diagramme est de comprendre d’où viennent ces chiffres.',
    },

    { type: 'heading', text: '3 · Le prix d’un condenseur encrassé' },
    { type: 'illustration', name: 'ph-cycle', props: { variant: 'hot' }, caption: 'En pointillé : le même cycle avec un condenseur encrassé qui condense à 55 °C' },
    {
      type: 'calc',
      title: 'Condensation à 55 °C au lieu de 47 °C',
      steps: [
        { label: 'Liquide plus chaud avant le détendeur', formula: 'h_3 = h_4 ≈ 274 kJ/kg   →   q_0 = 400 − 274 = 126 kJ/kg  (− 9 %)' },
        { label: 'Compression plus haute', formula: 'h_2 ≈ 460 kJ/kg   →   w = 60 kJ/kg  (+ 13 %)' },
        { label: 'Nouveau coefficient de performance', formula: 'COP = \\frac{126}{60} = 2,1  au lieu de 2,6' },
      ],
      result: 'Environ 20 % d’électricité en plus pour le même froid, et 9 % de puissance en moins : chaque kelvin de condensation coûte 2 à 3 %',
    },
    {
      type: 'decision',
      title: 'Conception du condenseur',
      choice: 'Condenseur à air surdimensionné (écart 12 K), à l’ombre de la toiture, ventilateurs à vitesse variable et nettoyage mensuel',
      reasons: [
        'Le condenseur est l’endroit où l’on gagne ou perd le plus de rendement en climat chaud.',
        'La vitesse variable maintient une condensation basse quand il fait frais la nuit, sans descendre sous le minimum du détendeur.',
        'Poussière, pollen et graisses de l’usine encrassent vite les ailettes : Paul l’inscrit au planning de maintenance.',
      ],
      rejected: 'Un condenseur au plus juste (écart 18 K), posé sur le toit en tôle : 15 % de consommation en plus toute l’année.',
    },
    { type: 'fiche', id: 'abc-mollier', why: 'Le diagramme enthalpique et le bilan du cycle en détail.' },
    { type: 'fiche', id: 'clim-cycle', why: 'Comment un climatiseur fabrique du froid.' },
    { type: 'fiche', id: 'abc-exchangers', why: 'Condenseur, détendeur, évaporateur : surchauffe et sous-refroidissement.' },

    { type: 'heading', text: '4 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Performances des machines frigorifiques',
      rows: [
        { norm: 'EN 12900', rule: 'Conditions de référence des compresseurs frigorifiques (évaporation, condensation, surchauffe, sous-refroidissement).', result: 'comparer des catalogues à conditions égales' },
        { norm: 'EN 13215', rule: 'Performances des groupes de condensation (« condensing units »).', result: 'puissance à −6 / 35 °C ext.' },
        { norm: 'AHRI 540 / 520', rule: 'Équivalents nord-américains pour compresseurs et groupes de condensation.', result: 'même logique' },
        { norm: 'ISO 817', rule: 'Désignation et classification des fluides frigorigènes.', result: 'R513A : A1' },
      ],
    },
    {
      type: 'regional',
      text: 'Les catalogues européens donnent souvent les puissances pour 32 °C d’air au condenseur ; sur un toit sahélien ou un quai exposé, l’air aspiré dépasse 40 °C. Vérifiez la plage de fonctionnement du groupe (certains se mettent en sécurité haute pression au-delà de 43 °C) et lisez la puissance à la vraie température d’air.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Le fluide s’évapore quelques kelvins sous l’air de la chambre et se condense une douzaine de kelvins au-dessus de l’air extérieur.',
        'Sur le diagramme : évaporation et condensation horizontales, détente verticale (h constante), compression qui monte vers la droite.',
        'q_0 = h_1 − h_4 ; w = h_2 − h_1 ; COP = q_0 / w ; débit = puissance / q_0.',
        'Surchauffe et sous-refroidissement protègent le compresseur et le détendeur.',
        'Chaque kelvin de condensation en trop coûte 2 à 3 % de consommation.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Quel débit de fluide faut-il pour la seule chambre à fruits (≈ 15 kW installés), avec le même cycle ?',
      solution: ['q_m = 15 / 139 ≈ 0,11 kg/s.', 'Elle est alimentée par la même centrale, avec un évaporateur et un régulateur de pression qui lui sont propres.'],
    },
    {
      type: 'exercise',
      question: 'Le sous-refroidissement passe de 4 K à 8 K (h_3 ≈ 255 kJ/kg). Que deviennent q_0 et le COP ?',
      solution: ['q_0 = 400 − 255 = 145 kJ/kg (+ 4 %).', 'Le travail ne change pas : COP = 145 / 53 ≈ 2,7. Le sous-refroidissement est un gain gratuit, s’il est obtenu par le condenseur.'],
    },
  ],
};
