import { TopicContent } from '../types';

export const villaBasicsContent: TopicContent = {
  title: 'Volts, ampères, watts : expliquer au client',
  subtitle: 'Koffi veut comprendre son futur contrat et sa future facture. Awa lui explique tension, courant, puissance et énergie avec des images simples, puis avec les vrais chiffres de sa maison.',
  blocks: [
    { type: 'scene', text: 'Semaine 2 · Chez les Mensah, autour d’un café' },
    {
      type: 'objectives',
      items: [
        'Relier tension, courant et puissance.',
        'Distinguer kW et kVA (cos φ).',
        'Comparer monophasé et triphasé.',
        'Passer de la puissance à l’énergie et à la facture.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '230 / 400 V', label: 'monophasé / triphasé' },
        { value: '960 kWh', label: 'consommation mensuelle estimée' },
        { value: '≈ 100 000 FCFA', label: 'facture mensuelle, ordre de grandeur' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Le distributeur me demande combien de kVA je veux. Un collègue me dit de prendre le maximum, un autre le minimum. Et je ne comprends pas la différence entre kW, kVA et kWh…',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Prenons l’image de l’eau. La tension, c’est la pression dans le tuyau. Le courant, c’est le débit. La puissance, c’est ce que l’eau peut faire tourner. Et l’énergie, c’est l’eau totale consommée sur le mois : c’est elle que vous payez.',
    },
    { type: 'illustration', name: 'water-analogy', caption: 'Tension = pression, courant = débit : l’analogie hydraulique' },

    { type: 'heading', text: 'Tension, courant, puissance' },
    {
      type: 'table',
      headers: ['Grandeur', 'Unité', 'Image', 'Chez les Mensah'],
      rows: [
        ['Tension U', 'volt (V)', 'la pression', '230 V entre une phase et le neutre'],
        ['Courant I', 'ampère (A)', 'le débit', '6,5 A pour le chauffe-eau'],
        ['Puissance P', 'watt (W)', 'ce que l’on fait tourner', '1 500 W pour le chauffe-eau'],
        ['Énergie E', 'wattheure (Wh, kWh)', 'l’eau consommée sur la durée', '3 kWh par jour pour le chauffe-eau'],
      ],
    },
    { type: 'formula', text: 'P = U × I     et     E = P × t' },
    {
      type: 'text',
      text: 'Awa fait le calcul devant eux avec le chauffe-eau : 1 500 W sous 230 V, cela fait environ 6,5 A. S’il chauffe 2 heures par jour, il consomme 1,5 kW × 2 h = 3 kWh par jour.',
    },
    { type: 'formula', text: 'Chauffe-eau : I = \\frac{1 500}{230} ≈ 6,5 A   ;   E = 1,5 kW × 2 h = 3 kWh' },

    { type: 'heading', text: 'kW ou kVA : pourquoi deux unités ?' },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Et le « VA » alors ? Si le chauffe-eau fait 1 500 W, il fait aussi 1 500 VA ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Pour lui, oui : une résistance transforme tout le courant en chaleur. Mais un moteur, comme le compresseur de votre clim ou votre pompe, fait circuler en plus un courant « magnétique » qui ne produit pas de travail. Le câble et le compteur doivent quand même le transporter. Les kVA mesurent tout ce que le câble transporte ; les kW, seulement ce qui travaille.',
    },
    { type: 'illustration', name: 'power-triangle', caption: 'Puissance active (kW), réactive (kvar) et apparente (kVA)' },
    { type: 'formula', text: 'P (W) = S (VA) × cos φ   ;   I = \\frac{P}{U × cos φ}' },
    {
      type: 'text',
      text: 'Exemple : le climatiseur du séjour absorbe 1 800 W avec un cos φ de 0,9. Le courant est donc 1 800 / (230 × 0,9) ≈ 8,7 A, un peu plus que les 7,8 A qu’on calculerait en oubliant le cos φ. C’est pour cela que les abonnements, les transformateurs et les groupes électrogènes se comptent en kVA.',
    },
    { type: 'formula', text: 'Clim séjour : I = \\frac{1 800}{230 × 0,9} ≈ 8,7 A' },

    { type: 'heading', text: 'Monophasé ou triphasé' },
    {
      type: 'text',
      text: 'Le réseau public distribue trois phases décalées dans le temps. Entre une phase et le neutre, on mesure 230 V ; entre deux phases, 400 V. Une maison peut être raccordée sur une seule phase (monophasé) ou sur les trois (triphasé).',
    },
    { type: 'illustration', name: 'phases', caption: 'Trois phases décalées : 230 V phase-neutre, 400 V entre phases' },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Le triphasé, c’est comme avoir trois tuyaux d’arrivée au lieu d’un. Vos appareils restent tous en 230 V, mais on les répartit sur les trois phases. Chaque câble transporte trois fois moins, et une coupure sur une phase ne plonge pas toute la maison dans le noir. On décidera ensemble après le bilan de puissance.',
    },
    { type: 'formula', text: 'U_{entre phases} = √3 × U_{phase-neutre} = 1,732 × 230 ≈ 400 V' },

    { type: 'heading', text: 'La puissance n’est pas l’énergie' },
    {
      type: 'text',
      text: 'Pour finir, Awa distingue les deux chiffres qui comptent pour les Mensah : la puissance souscrite (en kVA), qui fixe ce que la maison peut tirer en même temps, et l’énergie consommée (en kWh), qui fait la facture. C’est comme la vitesse maximale d’une voiture et les kilomètres parcourus dans le mois.',
    },
    {
      type: 'table',
      headers: ['Usage', 'Calcul', 'kWh / jour'],
      rows: [
        ['3 clims de chambre', '3 × 0,9 kW × 8 h × 60 % de marche', '13,0'],
        ['Clim du séjour', '1,8 kW × 5 h × 60 %', '5,4'],
        ['Chauffe-eau', '1,5 kW × 2 h', '3,0'],
        ['Frigo + congélateur', '0,3 kW × 24 h × 40 %', '2,9'],
        ['TV, ordinateurs, divers', '0,35 kW × 6 h', '2,1'],
        ['Éclairage LED', '0,36 kW × 5 h', '1,8'],
        ['Four, micro-ondes', 'moyenne', '1,5'],
        ['Pompe du forage', '1,4 kW × 1 h', '1,4'],
        ['Lave-linge', 'moyenne', '1,0'],
        ['Total', '', '≈ 32 kWh/jour, soit ≈ 960 kWh/mois'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'Plus de la moitié pour la clim !',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Oui, environ 57 %. C’est pour ça que je vous conseillerai des climatiseurs inverter bien classés, une consigne raisonnable et des fenêtres protégées du soleil. Un degré de consigne en plus, c’est quelques pourcents de facture en moins chaque mois.',
    },
    {
      type: 'regional',
      text: 'La facture se calcule généralement par tranches de consommation, avec une redevance d’abonnement qui dépend des kVA souscrits. À titre d’ordre de grandeur, un kWh résidentiel coûte souvent autour de 100 à 130 FCFA selon le pays et la tranche : 960 kWh par mois représentent donc environ 100 000 FCFA, hors taxes. Vérifiez la grille du distributeur (SBEE, CEET, CIE, Senelec…) et pensez aux compteurs à prépaiement, très répandus.',
    },
    { type: 'fiche', id: 'electrical-basics', why: 'Tension, courant, puissance, cos φ, monophasé et triphasé en détail.' },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Tension = pression, courant = débit, puissance = ce qui travaille, énergie = ce qu’on paie.',
        'P = U × I × cos φ : les moteurs (clim, pompe) demandent plus de courant que leurs watts ne le laissent croire.',
        'On souscrit des kVA (puissance simultanée) et on paie des kWh (énergie sur la durée).',
        'En triphasé, les appareils restent en 230 V mais se répartissent sur trois phases.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un fer à repasser de 1 000 W fonctionne 30 minutes par jour. Quel courant absorbe-t-il, et combien consomme-t-il par mois ?',
      solution: ['I = 1 000 / 230 ≈ 4,3 A (résistance : cos φ = 1).', 'E = 1 kW × 0,5 h × 30 jours = 15 kWh par mois.'],
    },
    {
      type: 'exercise',
      question: 'La pompe absorbe 1,4 kW avec un cos φ de 0,8. Quel courant ? Quelle puissance apparente ?',
      solution: ['I = 1 400 / (230 × 0,8) ≈ 7,6 A.', 'S = P / cos φ = 1 400 / 0,8 = 1 750 VA, soit 1,75 kVA.'],
    },
  ],
};
