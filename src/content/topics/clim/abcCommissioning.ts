import { TopicContent } from '../../types';

export const abcCommissioningContent: TopicContent = {
  title: 'Mise en service, charge en fluide et relevés de référence',
  subtitle: 'Démarrer une installation dans l’ordre, la charger correctement et savoir à quoi ressemblent des valeurs saines',
  blocks: [
    {
      type: 'text',
      text: "Une mise en service méthodique évite de griller un compresseur au premier démarrage. Ensuite, une charge en fluide bien faite et un relevé complet servent de référence pour toute la vie de l’installation : lors d’une panne, on compare aux valeurs du jour de la mise en service.",
    },
    { type: 'illustration', name: 'tech-manifold', props: { mode: 'charge' }, caption: 'Charge en fluide : bouteille sur balance, voie centrale du manifold' },

    { type: 'heading', text: 'La mise en service, pas à pas' },
    {
      type: 'note',
      text: "La veille (ou quelques heures avant), mettre sous tension les résistances de carter : l’huile chaude ne contient pas de fluide et ne moussera pas au démarrage.",
    },
    {
      type: 'bullets',
      items: [
        '1. Mesurer les tensions en tête d’installation : entre phases, phase-neutre, phase-terre.',
        '2. Vérifier les raccordements de puissance et de commande (schéma en main) et resserrer les connexions.',
        '3. Inspection visuelle : tuyauteries frigorifiques et hydrauliques, gaines, turbines, courroies.',
        '4. Alimenter par le disjoncteur général, protections des organes ouvertes ; les fermer une à une, sauf compresseur et commande.',
        '5. Actionner les contacteurs des ventilateurs et pompes pour contrôler les sens de rotation, puis les débits d’air et d’eau.',
        '6. Poser le manifold sur les vannes de service ; essayer la télécommande « à blanc », compresseur hors tension.',
        '7. Mettre le compresseur sous tension ; pour un scroll triphasé, vérifier qu’il crée bien un écart de pression (sinon inverser deux phases).',
        '8. Démarrer dans le mode voulu et vérifier la séquence du fabricant (pompe, pré-ventilation, vanne 4 voies…).',
        '9. Compléter la charge si nécessaire (supplément par mètre de liaison au-delà de la longueur préchargée).',
        '10. Mesurer l’intensité de chaque moteur à la pince ampèremétrique.',
        '11. Faire le relevé complet : pressions, températures, ΔT sur les échangeurs, surchauffe, sous-refroidissement.',
        '12. Essais des sécurités : coupure BP (vanne d’aspiration fermée), coupure HP (condenseur obturé ou ventilateur arrêté), défauts électriques.',
        '13. Observer 3 ou 4 cycles marche/arrêt complets.',
      ],
    },

    { type: 'heading', text: 'Charger en fluide frigorigène' },
    {
      type: 'bullets',
      items: [
        'Idéalement, on connaît la charge (plaque, notice) et on la PÈSE. Sinon, on charge en suivant les indicateurs.',
        'Matériel : bouteille, balance, manifold à microvannes, thermomètre à contact, pompe à vide.',
        'Tirer au vide les flexibles, raccorder la bouteille (tête en haut ou en bas selon la phase voulue) sur la balance.',
        'Installation à l’arrêt et sous vide : précharge par la HP et la BP, en s’arrêtant avant l’équilibre des pressions.',
        'Démarrer, puis compléter côté BP : en VAPEUR pour un fluide pur ou azéotrope ; en LIQUIDE, par petites quantités, pour un zéotrope (R407C, R410A), sinon sa composition change.',
        'S’arrêter quand le voyant ne bulle presque plus, puis affiner avec les indicateurs ci-dessous, en surveillant l’intensité du compresseur.',
      ],
    },
    {
      type: 'table',
      headers: ['Indicateur', 'Valeur visée'],
      rows: [
        ['Sous-refroidissement', '4 à 7 K (charge correcte)'],
        ['Surchauffe', '4 à 8 K (évaporateur bien alimenté)'],
        ['Voyant liquide', 'presque plus de bulles'],
        ['Intensité du compresseur', 'inférieure à l’intensité nominale'],
        ['Conduite liquide', 'tiède au toucher'],
      ],
    },
    { type: 'illustration', name: 'tech-sh-sc', caption: 'Les deux mesures qui valident la charge' },
    {
      type: 'note',
      text: "Charger en saison fraîche : la HP est basse et le circuit paraît bien chargé. On simule l’été en masquant partiellement le condenseur avec un carton : la HP monte (sans atteindre la coupure), le voyant doit à peine buller et l’intensité rester sous la nominale.",
    },

    { type: 'heading', text: 'Régler la surchauffe d’un détendeur thermostatique' },
    {
      type: 'bullets',
      items: [
        'D’abord vérifier la charge (sous-refroidissement correct) et la position du bulbe ; HP aussi stable que possible.',
        'Ouvrir le détendeur par 1/4 de tour (sens antihoraire) jusqu’au « pompage » : la BP et la température au bulbe oscillent.',
        'Refermer par 1/4 puis 1/8 de tour (sens horaire), en attendant quelques minutes à chaque fois, jusqu’à disparition du pompage : on est à la plus petite surchauffe stable.',
        'Impossible d’obtenir le pompage → détendeur ou orifice trop petit, manque de charge, ou prédétente. Impossible de le supprimer → détendeur trop gros ou évaporateur trop petit.',
      ],
    },

    { type: 'heading', text: 'Les relevés de référence' },
    {
      type: 'table',
      headers: ['Climatisation air/air', 'Écart normal'],
      rows: [
        ['Condenseur : entrée air → sortie air', '5 à 10 K'],
        ['Condenseur : T condensation − entrée air', '11 à 15 K'],
        ['Évaporateur : entrée air → sortie air', '6 à 10 K'],
        ['Évaporateur : entrée air − T évaporation', '15 à 20 K'],
        ['Surchauffe', '5 à 8 K'],
        ['Sous-refroidissement', '4 à 7 K'],
      ],
    },
    {
      type: 'table',
      headers: ['Autres cas', 'Écart normal'],
      rows: [
        ['Condenseur à eau perdue : entrée → sortie eau', '10 à 15 K (T cond. ≈ sortie eau + 5 à 7 K)'],
        ['Condenseur sur tour : entrée → sortie eau', '≈ 5 K'],
        ['Évaporateur à eau (groupe d’eau glacée) : entrée → sortie', '4 à 6 K ; T évap. ≈ sortie eau − 5 K'],
        ['Chambre froide, évaporateur ventilé', 'T évap. 8 à 10 K sous la température de la chambre'],
      ],
    },
    {
      type: 'note',
      text: 'Ces valeurs viennent de l’expérience de terrain et varient selon les fabricants et les conditions : elles servent à repérer une anomalie, pas à remplacer la notice. Conservez votre relevé de mise en service dans le carnet de l’installation.',
    },

    { type: 'heading', text: 'Mesurer un débit d’air' },
    {
      type: 'bullets',
      items: [
        'Anémomètre à hélice : axe parallèle au flux ; balayer toute la section ou mesurer en 4 points (petite bouche) ou 9 points et plus (grande), puis faire la moyenne.',
        'Anémomètre à fil chaud : précis aux faibles vitesses ; avec un cône de mesure pour capter tout le débit d’un diffuseur.',
        'Dans une gaine : plusieurs points de mesure sur la section, moyenne.',
      ],
    },
    { type: 'formula', text: 'Débit (m³/h) = vitesse moyenne (m/s) × section libre (m²) × 3 600' },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Sur une bouche de 30 × 40 cm, vous mesurez 2 ; 0,9 ; 1,4 et 1,9 m/s en 4 points. Quel débit ?',
      solution: ['Vitesse moyenne = (2 + 0,9 + 1,4 + 1,9) / 4 = 1,55 m/s.', 'Section = 0,30 × 0,40 = 0,12 m².', 'Débit = 1,55 × 0,12 × 3 600 ≈ 670 m³/h.'],
    },
    {
      type: 'exercise',
      question: 'Relevé d’un split : air entrant 26 °C, soufflé 17 °C, évaporation 8 °C ; air extérieur 35 °C, condensation 48 °C ; surchauffe 6 K, sous-refroidissement 5 K. L’appareil est-il sain ?',
      solution: ['Évaporateur : ΔT air 9 K (6–10 ✓), entrée air − évaporation 18 K (15–20 ✓).', 'Condenseur : 48 − 35 = 13 K (11–15 ✓).', 'Surchauffe et sous-refroidissement dans les plages : l’appareil fonctionne normalement ; ce relevé devient sa référence.'],
    },
  ],
};
