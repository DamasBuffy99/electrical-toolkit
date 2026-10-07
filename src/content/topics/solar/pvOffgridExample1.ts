import { TopicContent } from '../../types';

export const pvOffgridExample1Content: TopicContent = {
  title: 'Exemple 1 : système PV hors réseau',
  subtitle: 'Une lampe, un ventilateur et un réfrigérateur au Canada — dimensionnement complet, étape par étape',
  blocks: [
    {
      type: 'text',
      text: "On applique la méthode à une petite maison isolée au Canada, avec trois appareils. À chaque étape : on calcule, on choisit un équipement réel, puis on vérifie sa fiche technique.",
    },
    { type: 'illustration', name: 'pv-system', caption: 'Le système à dimensionner' },

    { type: 'heading', text: '1 · Les charges' },
    {
      type: 'table',
      headers: ['Appareil', 'Nombre', 'Puissance', 'Heures/jour', 'Énergie'],
      rows: [
        ['Lampe', '1', '18 W', '4', '72 Wh'],
        ['Ventilateur', '1', '60 W', '2', '120 Wh'],
        ['Réfrigérateur', '1', '75 W', '12', '900 Wh'],
        ['Total', '', '153 W', '', '1092 Wh/jour'],
      ],
    },
    { type: 'formula', text: 'Ex. réfrigérateur : 1 × 75 W × 12 h = 900 Wh' },
    {
      type: 'text',
      text: "On retient deux résultats : 153 W de puissance totale (pour l'onduleur) et 1092 Wh/jour d'énergie (pour les panneaux et les batteries).",
    },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'loads' }, caption: '153 W et 1092 Wh/jour' },

    { type: 'heading', text: "2 · L'onduleur" },
    { type: 'text', text: 'Puissance continue : 30 % de plus que la puissance totale des charges.' },
    { type: 'formula', text: 'P_continue = 1,3 × 153 = 198,9 W' },
    {
      type: 'text',
      text: "Puissance de pointe : le réfrigérateur a un compresseur (moteur), on compte 4 fois sa puissance au démarrage. La lampe et le ventilateur sont pris à leur puissance normale.",
    },
    { type: 'formula', text: 'P_pointe = 18 + 60 + 4 × 75 = 378 W' },
    { type: 'text', text: "Avec 153 W de charges (moins de 1200 W), on choisit un système en 12 V." },
    {
      type: 'table',
      headers: ['Victron Phoenix 12/250 (onde pure)', 'Fiche technique', 'Besoin', ''],
      rows: [
        ['Puissance continue (25 °C)', '250 W', '198,9 W', '✓'],
        ['Puissance de pointe', '400 W', '378 W', '✓'],
        ['Tension batterie', '12 V (modèle 12/250)', '12 V', '✓'],
        ['Sortie AC', '230 V', '—', ''],
      ],
    },
    { type: 'note', text: '💡 « 12/250 » = 12 V côté batterie, 250 W de puissance continue.' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'inverter' }, caption: 'Onduleur 250 W, 12 V' },
    { type: 'illustration', name: 'pv-waveforms', caption: 'Onde sinusoïdale pure : adaptée au compresseur du frigo' },

    { type: 'heading', text: '3 · Les panneaux' },
    { type: 'formula', text: 'E_panneaux = 1092 × 1,3 = 1419,6 Wh/jour' },
    {
      type: 'text',
      text: "Au Canada (sur la carte d'ensoleillement du cours), on compte 2 heures de soleil crête par jour :",
    },
    { type: 'formula', text: 'P_panneaux = 1419,6 / 2 = 709,8 W' },
    {
      type: 'table',
      headers: ['SunPower SPR-200-BLK-U', 'Valeur'],
      rows: [
        ['Puissance STC', '200 W'],
        ['Imp / Vmp', '5 A / 40 V'],
        ['Isc (court-circuit)', '5,4 A'],
        ['Voc (circuit ouvert)', '47,8 V'],
        ['Coef. température Voc', '−0,065 V/K'],
        ['Coef. température Isc / puissance', '0,02 %/K / −0,38 %/K'],
        ['Fusible série / tension système max', '15 A / 1000 V'],
      ],
    },
    { type: 'formula', text: 'Nombre = 709,8 / 200 = 3,55 → 4 panneaux → 4 × 200 = 800 W' },
    {
      type: 'note',
      text: "💡 Le lieu change tout : sur la même carte, l'Afrique de l'Ouest est dans les zones de 5 à 6 heures. Avec 5 h, il suffirait de 1419,6 / 5 ≈ 284 W, soit 2 panneaux de 200 W.",
    },
    { type: 'illustration', name: 'peak-sun-hours', props: { hours: 2 }, caption: 'Canada : 2 heures de soleil crête' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'panels' }, caption: '4 panneaux de 200 W' },

    { type: 'heading', text: '4 · Les batteries' },
    {
      type: 'table',
      headers: ['Victron LFP-Smart 12,8/330 (LiFePO4)', 'Valeur'],
      rows: [
        ['Tension nominale', '12,8 V'],
        ['Capacité à 25 °C', '330 Ah'],
        ['Capacité à 0 °C', '260 Ah'],
        ['Capacité à −20 °C', '160 Ah'],
        ['Cycles à 80 % / 70 % / 50 % de DoD', '2500 / 3000 / 5000'],
      ],
    },
    {
      type: 'text',
      text: "La température la plus basse du site est −20 °C : la batterie ne fournit plus que 160 Ah au lieu de 330 Ah.",
    },
    { type: 'formula', text: 'Coef. température = 160 / 330 = 0,48' },
    { type: 'formula', text: 'Ah = (1419,6 × 2 jours) / (0,8 × 12 V × 0,48) = 616,15 Ah' },
    { type: 'formula', text: 'En série = 12 / 12 = 1 · En parallèle = 616,15 / 330 = 1,86 → 2' },
    { type: 'formula', text: 'Total = 1 × 2 = 2 batteries → banc 12 V, 660 Ah' },
    {
      type: 'note',
      text: "💡 Autre façon de faire (annotée dans le cours) : calculer sans le coefficient, 1419,6 × 2 / (0,8 × 12) ≈ 296 Ah ≈ 300 Ah, puis diviser par la capacité à −20 °C : 300 / 160 ≈ 1,9 → 2 batteries. Même résultat.",
    },
    { type: 'illustration', name: 'battery-bank', props: { series: 1, parallel: 2, battV: 12, battAh: 330 }, caption: '2 batteries 12 V 330 Ah en parallèle = 12 V, 660 Ah' },

    { type: 'heading', text: '5 · Le régulateur de charge' },
    { type: 'text', text: 'Panneaux : 800 W · Système : 12 V. On choisit un Victron SmartSolar MPPT 150/70 :' },
    {
      type: 'table',
      headers: ['SmartSolar MPPT 150/70', 'Fiche technique', 'Notre système', ''],
      rows: [
        ['Tension batterie', '12/24/48 V auto', '12 V', '✓'],
        ['Courant de charge nominal', '70 A', '67 A', '✓'],
        ['Puissance PV nominale à 12 V', '1000 W', '800 W', '✓'],
        ['Courant de court-circuit PV max', '50 A (30 A max par connecteur MC4)', '13,5 A (étape 6)', '✓'],
        ['Tension PV max en circuit ouvert', '150 V (conditions les plus froides)', '101,45 V (étape 6)', '✓'],
      ],
    },
    {
      type: 'text',
      text: "Le courant de charge du régulateur doit suffire pour ne perdre aucune puissance :",
    },
    { type: 'formula', text: 'I_charge max = 800 / 12 = 67 A ≤ 70 A ✓' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'controller' }, caption: 'MPPT 150/70' },
    {
      type: 'text',
      text: "Les batteries doivent supporter ce courant. Avec 2 batteries en parallèle, chacune reçoit la moitié :",
    },
    { type: 'formula', text: '67 / 2 = 33,5 A par batterie' },
    {
      type: 'table',
      headers: ['LFP-Smart 12,8/330 — charge', 'Valeur'],
      rows: [
        ['Courant de charge maximal', '400 A'],
        ['Courant de charge recommandé', '≤ 150 A'],
        ['Tension de charge', '14 à 14,4 V (14,2 V recommandé)'],
      ],
    },
    { type: 'formula', text: '33,5 A < 150 A recommandé ✓' },
    { type: 'illustration', name: 'battery-bank', props: { series: 1, parallel: 2, battV: 12, battAh: 330, current: 67 }, caption: '67 A répartis : 33,5 A par batterie' },

    { type: 'heading', text: '6 · Le raccordement des panneaux' },
    {
      type: 'text',
      text: "Victron ne donne pas de plage MPPT : on vise la moitié de la tension PV maximale en circuit ouvert.",
    },
    { type: 'formula', text: 'V_conception = 150 / 2 = 75 V' },
    { type: 'formula', text: 'En série = 75 / 47,8 = 1,57 → 2 panneaux' },
    { type: 'formula', text: 'En parallèle = 4 / 2 = 2 chaînes' },
    { type: 'illustration', name: 'pv-array', props: { series: 2, parallel: 2, voc: 47.8 }, caption: '2 panneaux en série × 2 chaînes' },
    {
      type: 'text',
      text: "On a arrondi vers le haut (2 panneaux en série) : il faut vérifier la tension par grand froid. Entre 25 °C et −20 °C, l'écart est de 45 K :",
    },
    { type: 'formula', text: 'Voc à froid = 2 × (47,8 + 0,065 × (25 + 20)) = 101,45 V < 150 V ✓' },
    { type: 'text', text: 'Sans coefficient de température, avec la table NEC 690.7(A) (facteur 1,18 entre −16 et −20 °C) :' },
    { type: 'formula', text: 'Voc à froid = 2 × 47,8 × 1,18 = 112,8 V < 150 V ✓' },
    { type: 'text', text: 'Enfin, le courant d’entrée du régulateur :' },
    { type: 'formula', text: 'I_entrée = 1,25 × 2 × 5,4 = 13,5 A < 50 A ✓' },
    { type: 'illustration', name: 'mppt-window', props: { max: 150, design: 75, cold: 101.45, nec: 112.8 }, caption: 'Toutes les tensions restent sous 150 V' },

    { type: 'heading', text: 'Bilan du système' },
    {
      type: 'table',
      headers: ['Composant', 'Choix'],
      rows: [
        ['Tension du système', '12 V'],
        ['Onduleur', 'Victron Phoenix 12/250, onde pure (250 W, pointe 400 W)'],
        ['Panneaux', '4 × SunPower 200 W = 800 W (2 en série × 2 en parallèle)'],
        ['Batteries', '2 × LiFePO4 12,8 V 330 Ah en parallèle = 12 V, 660 Ah'],
        ['Régulateur', 'Victron SmartSolar MPPT 150/70'],
      ],
    },
    { type: 'illustration', name: 'pv-system', caption: 'Le système dimensionné' },
  ],
};
