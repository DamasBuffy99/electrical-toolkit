import { TopicContent } from '../../types';

export const pvDesignStepsContent: TopicContent = {
  title: 'Méthode : dimensionner un système PV hors réseau',
  subtitle: 'Les composants, le trajet DC → AC, et les 6 étapes de calcul',
  blocks: [
    {
      type: 'text',
      text: "Un système PV hors réseau (off-grid) alimente une maison sans réseau électrique. Les panneaux produisent l'énergie, le régulateur charge les batteries, et l'onduleur fournit le courant alternatif aux appareils.",
    },
    { type: 'illustration', name: 'pv-system', caption: 'Panneaux → régulateur → batteries → onduleur → maison' },

    { type: 'heading', text: "Le trajet de l'énergie : DC puis AC" },
    {
      type: 'bullets',
      items: [
        'Panneaux → régulateur → batteries : courant continu (DC).',
        "Batteries → onduleur → maison : l'onduleur convertit le DC en courant alternatif (AC) pour les appareils.",
      ],
    },
    { type: 'text', text: 'On dimensionne les composants dans cet ordre, chaque étape utilisant le résultat de la précédente :' },
    {
      type: 'bullets',
      items: [
        '1 → Définir les charges',
        "2 → Dimensionner l'onduleur",
        '3 → Dimensionner les panneaux',
        '4 → Dimensionner les batteries',
        '5 → Dimensionner le régulateur de charge',
        '6 → Raccorder les panneaux (série / parallèle)',
      ],
    },
    { type: 'illustration', name: 'pv-system', caption: 'Le système complet' },

    { type: 'heading', text: '1 · Définir les charges' },
    {
      type: 'text',
      text: "On liste chaque appareil avec sa quantité, sa puissance et son nombre d'heures d'utilisation par jour.",
    },
    { type: 'formula', text: 'Énergie (Wh) = Nombre × Puissance (W) × Heures' },
    {
      type: 'bullets',
      items: [
        'La somme des puissances donne la puissance totale (W) → sert pour l’onduleur.',
        "La somme des énergies donne l'énergie journalière (Wh/jour) → sert pour les panneaux et les batteries.",
      ],
    },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'loads' }, caption: 'Ce que la maison consomme' },

    { type: 'heading', text: "2 · Dimensionner l'onduleur" },
    {
      type: 'bullets',
      items: [
        "Un onduleur est nécessaire dès qu'il faut une sortie en courant alternatif (AC).",
        "Sa puissance ne doit jamais être inférieure à la puissance totale des appareils.",
        'Il doit avoir la même tension nominale que les batteries (12, 24 ou 48 V).',
        "Système autonome : il doit supporter la puissance totale utilisée en même temps.",
        "Système raccordé au réseau (grid-tie) : sa puissance d'entrée doit être égale à celle du champ PV.",
      ],
    },
    { type: 'formula', text: 'P_continue onduleur = 1,25 à 1,3 × P_totale des charges' },
    {
      type: 'text',
      text: "Les moteurs, compresseurs, réfrigérateurs, pompes et machines à laver ont un fort courant de démarrage : l'onduleur doit le supporter. Leur puissance de démarrage (surge) est indiquée sur leur étiquette ; à défaut, on prend 3 à 4 fois leur puissance.",
    },
    { type: 'formula', text: 'P_pointe = charges sans moteur + (3 à 4) × charges à moteur' },
    {
      type: 'table',
      headers: ['Tension du système', 'Installation'],
      rows: [
        ['12 V DC', "Petites installations, charges jusqu'à 1200 W"],
        ['24 V DC', 'Installations moyennes, 1200 W à 2000 W'],
        ['48 V ou 96 V DC', 'Grandes installations, plus de 2000 W'],
      ],
    },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'inverter' }, caption: "L'onduleur : de la batterie (DC) à la maison (AC)" },
    {
      type: 'note',
      text: "💡 Préférer un onduleur à onde sinusoïdale pure : son signal est identique à celui du réseau. L'onde modifiée (en créneaux) coûte moins cher mais fait chauffer et bourdonner moteurs et réfrigérateurs.",
    },
    { type: 'illustration', name: 'pv-waveforms', caption: 'Onde pure vs onde modifiée' },

    { type: 'heading', text: '3 · Dimensionner les panneaux' },
    {
      type: 'text',
      text: "Les panneaux doivent produire plus que l'énergie des charges : on applique un facteur de sécurité de 1,3 pour couvrir les pertes du système et le fait que les panneaux ne travaillent pas aux conditions optimales STC (25 °C, 1000 W/m², AM 1,5).",
    },
    { type: 'formula', text: 'E_panneaux = 1,3 × E_charges (Wh/jour)' },
    {
      type: 'text',
      text: "Les heures de soleil crête (PSH) ramènent l'ensoleillement d'une journée à un nombre d'heures équivalentes à 1000 W/m². Elles dépendent du lieu (cartes d'ensoleillement).",
    },
    { type: 'formula', text: 'P_panneaux (W) = E_panneaux / heures de soleil crête' },
    { type: 'formula', text: 'Nombre de panneaux = P_panneaux / P_un panneau (arrondi au-dessus)' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'panels' }, caption: 'Les panneaux produisent l’énergie du jour' },
    { type: 'illustration', name: 'pv-stc', caption: 'Pourquoi le facteur 1,3' },
    { type: 'illustration', name: 'peak-sun-hours', props: { hours: 5 }, caption: 'Exemple : 5 heures de soleil crête' },

    { type: 'heading', text: '4 · Dimensionner les batteries' },
    {
      type: 'text',
      text: "Le froid réduit la capacité des batteries. La fiche technique donne la capacité à basse température : on en déduit un coefficient de correction.",
    },
    { type: 'formula', text: 'Coef. température = capacité à T_min / capacité nominale (25 °C)' },
    { type: 'formula', text: 'Ah = (E × jours d’autonomie) / (DoD × V_système × coef. température)' },
    {
      type: 'bullets',
      items: [
        'DoD = profondeur de décharge (ex. 0,8 = 80 %). Plus on décharge, moins la batterie fait de cycles.',
        'Batteries en série = V_système / V_batterie',
        'Chaînes en parallèle = Ah requis / Ah d’une batterie (arrondi au-dessus)',
        'Total = batteries en série × chaînes en parallèle',
      ],
    },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'batteries' }, caption: 'Les batteries stockent pour la nuit et les jours sans soleil' },
    { type: 'illustration', name: 'battery-bank', props: { series: 2, parallel: 2, battV: 12, battAh: 200 }, caption: 'Exemple : banc 24 V de 4 batteries 12 V 200 Ah' },

    { type: 'heading', text: '5 · Dimensionner le régulateur de charge (MPPT)' },
    {
      type: 'text',
      text: "Un régulateur MPPT se désigne par « tension PV max / courant de charge max » : un 150/70 accepte 150 V côté panneaux et charge jusqu'à 70 A.",
    },
    {
      type: 'bullets',
      items: [
        'La puissance des panneaux doit être ≤ à la puissance PV nominale du régulateur pour la tension du système.',
        'Le courant de charge doit être suffisant pour ne pas perdre de puissance :',
      ],
    },
    { type: 'formula', text: 'I_charge max = P_panneaux / V_système ≤ courant de charge du régulateur' },
    {
      type: 'text',
      text: "Les batteries doivent aussi supporter ce courant. Avec plusieurs chaînes en parallèle, il se répartit entre elles :",
    },
    { type: 'formula', text: 'I par chaîne = I_charge / nombre de chaînes en parallèle ≤ courant de charge recommandé' },
    { type: 'formula', text: 'Exemple (notes) : 1800 W / 24 V = 75 A → 4 groupes en parallèle : 75 / 4 = 18,75 A chacun' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'controller' }, caption: 'Le régulateur charge les batteries' },

    { type: 'heading', text: 'Note importante : la plage MPPT' },
    {
      type: 'bullets',
      items: [
        'Le nombre de panneaux en série dépend de la plage de tension MPPT du régulateur.',
        'On vise une tension de panneaux au milieu de cette plage.',
        "Si la plage MPPT n'est pas donnée, on prend la moitié de la tension PV maximale en circuit ouvert.",
      ],
    },
    {
      type: 'text',
      text: "Une tension trop basse empêche le régulateur de bien fonctionner : il a besoin d'une tension PV nettement au-dessus de celle de la batterie.",
    },
    { type: 'formula', text: 'Exemple : plage « V_bat + 2 V à 72 V » avec une batterie 24 V → 26 à 72 V → milieu ≈ 49 V' },
    { type: 'illustration', name: 'mppt-window', props: { max: 100, design: 49, rangeMin: 26, rangeMax: 72 }, caption: 'Viser le milieu de la plage MPPT' },

    { type: 'heading', text: '6 · Raccorder les panneaux' },
    { type: 'formula', text: 'Panneaux en série = V_conception / Voc d’un panneau (arrondi)' },
    { type: 'formula', text: 'Chaînes en parallèle = nombre total de panneaux / panneaux en série' },
    {
      type: 'text',
      text: "Par temps froid, la tension Voc des panneaux augmente : il faut vérifier qu'elle reste sous la tension maximale du régulateur.",
    },
    { type: 'formula', text: 'Voc à froid = N_série × (Voc + |coef. V| × (25 − T_min)) < Voc max du régulateur' },
    {
      type: 'text',
      text: "Si le coefficient de température n'est pas sur la fiche technique, on utilise le facteur de la table NEC 690.7(A) :",
    },
    { type: 'formula', text: 'Voc à froid = N_série × Voc × facteur NEC' },
    {
      type: 'table',
      headers: ['Température ambiante (°C)', 'Facteur'],
      rows: [
        ['24 à 20', '1,02'],
        ['19 à 15', '1,04'],
        ['14 à 10', '1,06'],
        ['9 à 5', '1,08'],
        ['4 à 0', '1,10'],
        ['−1 à −5', '1,12'],
        ['−6 à −10', '1,14'],
        ['−11 à −15', '1,16'],
        ['−16 à −20', '1,18'],
        ['−21 à −25', '1,20'],
        ['−26 à −30', '1,21'],
        ['−31 à −35', '1,23'],
        ['−36 à −40', '1,25'],
      ],
    },
    { type: 'formula', text: 'I_entrée régulateur = Isc × chaînes en parallèle × 1,25 (ou 1,3) < Isc max du régulateur' },
    { type: 'subheading', text: 'Exemple (notes) : 2 panneaux en série, 3 chaînes en parallèle' },
    { type: 'formula', text: 'Voc à froid = 2 × 38,9 × 1,02 = 79,3 V < 150 V ✓' },
    { type: 'formula', text: 'I_entrée = 3 × 1,25 × 10,07 = 37,76 A' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'wiring' }, caption: 'Les panneaux raccordés au régulateur' },
    { type: 'illustration', name: 'pv-array', props: { series: 2, parallel: 3, voc: 38.9 }, caption: '2 panneaux en série × 3 chaînes en parallèle' },
    {
      type: 'note',
      text: "⚠️ Toujours comparer la tension à froid et le courant d'entrée aux limites de la fiche technique du régulateur.",
    },
  ],
};
