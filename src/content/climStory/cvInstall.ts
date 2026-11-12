import { TopicContent } from '../types';
import { fig } from '../topics/clim/fig';

export const cvInstallContent: TopicContent = {
  title: 'Poser et mettre en service',
  subtitle: 'Un bon split mal posé devient un mauvais split. Ousmane suit le chantier d’Ismaël Touré, le frigoriste : emplacement des unités, liaisons, condensats, tirage au vide, charge, sécurité du R32, puis les mesures de mise en service.',
  blocks: [
    { type: 'scene', text: 'Mois 5 · Chantier, avec Ismaël Touré (Polar Froid) et Moussa Keïta' },
    {
      type: 'objectives',
      items: [
        'Placer les unités intérieures et extérieures pour la performance et le confort.',
        'Réaliser les liaisons frigorifiques et l’évacuation des condensats.',
        'Éprouver, tirer au vide et charger un circuit dans les règles.',
        'Vérifier la charge maximale de R32 par pièce.',
        'Mettre en service et remettre au client les bonnes consignes d’entretien.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '≈ 2,6 L/h', label: 'condensats de la villa à la pointe' },
        { value: '≤ 500 µm Hg', label: 'vide à atteindre (≈ 67 Pa)' },
        { value: '6,2 kg', label: 'charge maxi de R32 admise dans le séjour' },
        { value: '≈ 12 °C', label: 'écart d’air entre reprise et soufflage' },
      ],
    },

    { type: 'heading', text: '1 · Où poser les unités ?' },
    { type: 'illustration', name: 'clim-outdoor', caption: 'L’unité extérieure doit respirer : à l’ombre, dégagée, sans recycler son propre air chaud' },
    {
      type: 'dialogue',
      speaker: 'Moussa Keïta (chef de chantier)',
      role: 'team',
      text: 'Pour l’unité du séjour, le plus simple c’est sur le toit, en plein soleil : personne ne la verra.',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'En plein soleil, sur une tôle à 60 °C, elle aspirerait de l’air à 40 °C et perdrait 10 à 15 % de puissance, juste aux heures où on en a besoin. Je la veux sur la façade sud, sous le débord de toiture, à 30 cm du mur et à un mètre de tout obstacle devant. On la verra un peu, mais elle travaillera bien.',
    },
    fig('p097', 'Page 82 du guide IEPF — emplacement de l’unité extérieure : attention à l’efficacité énergétique'),
    {
      type: 'table',
      headers: ['Unité', 'Bonne pratique', 'Pourquoi'],
      rows: [
        ['Intérieure', 'en haut du mur, soufflant le long du plafond, pas au-dessus du lit', 'éviter le jet froid sur les occupants'],
        ['Intérieure', 'reprise libre, à 15 cm au moins du plafond', 'le débit d’air nominal fait la puissance'],
        ['Extérieure', 'à l’ombre, ventilée, sans obstacle devant le ventilateur', 'condenser avec l’air le plus frais possible'],
        ['Extérieure', 'sur supports antivibratiles, loin des fenêtres des voisins', 'bruit et vibrations'],
      ],
    },
    { type: 'illustration', name: 'clim-airflow', props: { variant: 'good' }, caption: 'Soufflage le long du plafond : l’air froid retombe doucement dans la zone occupée' },

    { type: 'heading', text: '2 · Liaisons frigorifiques et condensats' },
    {
      type: 'text',
      text: 'Ismaël utilise du cuivre frigorifique déshydraté, cintré plutôt que soudé, avec des raccords évasés serrés à la clé dynamométrique. Les deux tubes (liquide et gaz) sont isolés séparément : sur le tube gaz, froid, l’humidité de l’air condenserait et goutterait dans le faux plafond. Pendant les brasures éventuelles, de l’azote circule dans le tube pour éviter les dépôts d’oxyde.',
    },
    {
      type: 'calc',
      title: 'Débit de condensats à évacuer',
      steps: [
        { label: 'Chaleur latente totale de la villa à la pointe (feuille de bilan)', formula: 'Q_L ≈ 1 760 W' },
        { label: 'Chaleur de condensation de l’eau', formula: 'L_v ≈ 2 450 kJ/kg' },
        { label: 'Eau condensée', formula: 'q_m = \\frac{1 760}{2 450 000} × 3 600 ≈ 2,6 kg/h' },
      ],
      result: 'Environ 2,6 litres par heure pour la villa, dont 1,3 L/h au séjour : une vingtaine de litres par jour',
    },
    {
      type: 'decision',
      title: 'Évacuation des condensats',
      choice: 'Tube PVC de 20 mm, pente d’au moins 1 %, siphon avant raccordement aux eaux usées ; séjour raccordé au réseau, chambres vers le jardin',
      reasons: [
        'Vingt litres par jour au pied d’un mur finissent par le dégrader : on les conduit loin des fondations.',
        'Le siphon empêche les odeurs d’égout de remonter dans l’unité intérieure.',
        'Pas de pompe de relevage : une pente naturelle ne tombe jamais en panne.',
      ],
      rejected: 'Laisser couler sur la façade, comme souvent : traces, mousses et sol glissant devant la porte.',
    },

    { type: 'heading', text: '3 · Épreuve, tirage au vide et charge' },
    {
      type: 'table',
      headers: ['Étape', 'Comment', 'Critère'],
      rows: [
        ['Épreuve d’étanchéité', 'azote sec à la pression indiquée par le fabricant (souvent 40 bar pour le R32)', 'pas de baisse en 24 h (corrigée de la température)'],
        ['Tirage au vide', 'pompe à vide + vacuomètre électronique', '≤ 500 µm Hg, puis tenue 15 min sans remonter au-delà d’environ 1 000 µm'],
        ['Ouverture des vannes', 'le fluide préchargé de l’unité extérieure remplit les liaisons', 'aucune fuite au détecteur'],
        ['Complément de charge', 'au-delà de la longueur préchargée (souvent 5 m)', 'environ 20 g/m de liaison liquide en 1/4"'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ismaël Touré (frigoriste)',
      role: 'team',
      text: 'Beaucoup de collègues « purgent à l’air » avec le fluide au lieu de tirer au vide. Ça va plus vite, mais l’humidité qui reste dans le circuit attaque l’huile et le compresseur meurt en deux ou trois ans.',
    },
    {
      type: 'calc',
      title: 'Complément de charge du séjour',
      steps: [
        { label: 'Longueur de liaison', formula: 'L = 8 m' },
        { label: 'Longueur préchargée en usine', formula: 'L_0 = 5 m' },
        { label: 'Complément (notice : 20 g/m)', formula: 'm = (8 − 5) × 20 = 60 g de R32' },
      ],
      result: 'Charge totale ≈ 0,80 + 0,06 = 0,86 kg, pesée sur balance et notée sur l’étiquette de l’unité',
    },

    { type: 'heading', text: '4 · Le R32 est légèrement inflammable : combien par pièce ?' },
    {
      type: 'text',
      text: 'Le R32 est classé A2L : il brûle difficilement et lentement, mais il brûle. Si tout le fluide fuyait dans une petite pièce, sa concentration pourrait atteindre la limite d’inflammabilité. La norme des climatiseurs (IEC 60335-2-40) limite donc la charge selon la surface de la pièce et la hauteur de l’unité.',
    },
    {
      type: 'calc',
      title: 'Charge maximale de R32 (unité murale à 1,8 m)',
      steps: [
        { label: 'Formule de la norme, LFL = 0,307 kg/m³ pour le R32', formula: 'm_{max} = 2,5 × LFL^{5/4} × h_0 × \\sqrt{A}' },
        { label: 'Séjour : A = 36 m²', formula: 'm_{max} = 2,5 × 0,229 × 1,8 × 6 ≈ 6,2 kg ≥ 0,86 kg ✓' },
        { label: 'Chambre : A = 12 m²', formula: 'm_{max} = 2,5 × 0,229 × 1,8 × \\sqrt{12} ≈ 3,6 kg ≥ 0,55 kg ✓' },
      ],
      result: 'Large marge : avec des splits individuels, le R32 ne pose pas de problème. Il en posera avec un VRV (projet 3)',
    },

    { type: 'heading', text: '5 · Mise en service et remise au client' },
    {
      type: 'table',
      headers: ['Relevé', 'Valeur au séjour', 'Ce qu’il prouve'],
      rows: [
        ['Température reprise / soufflage', '26,1 °C / 13,8 °C', 'écart ≈ 12 °C : la batterie échange bien'],
        ['Basse pression (R32)', '≈ 9 bar relatifs', 'évaporation vers 7 °C : charge correcte'],
        ['Intensité absorbée', '6,9 A en pleine vitesse', 'sous les 8,7 A de plaque'],
        ['Condensats', 'écoulement visible au regard', 'pente et siphon corrects'],
        ['Bruit intérieur', '≈ 35 dB(A) en petite vitesse', 'chambre et séjour silencieux'],
      ],
    },
    {
      type: 'calc',
      title: 'Vérifier la puissance avec un thermomètre',
      steps: [
        { label: 'Débit d’air en grande vitesse (notice)', formula: 'q = 850 m³/h' },
        { label: 'Puissance sensible échangée', formula: 'Q_S = 0,34 × q × Δθ = 0,34 × 850 × 12,3 ≈ 3 550 W' },
        { label: 'Avec le latent (SHR ≈ 0,8)', formula: 'Q ≈ \\frac{3 550}{0,8} ≈ 4,4 kW' },
      ],
      result: 'Cohérent avec la puissance attendue à charge partielle : l’appareil est sain',
    },
    {
      type: 'bullets',
      items: [
        'Esther reçoit le dossier : liste des équipements, schémas des liaisons, charges de fluide, fiches de mise en service, garanties.',
        'Filtres à nettoyer toutes les deux à quatre semaines ; entretien par un frigoriste une à deux fois par an (batteries, condensats, pressions).',
        'Consigne conseillée 26 °C, minimum 24 °C ; portes et fenêtres fermées quand la clim tourne.',
      ],
    },
    { type: 'fiche', id: 'abc-install', why: 'Tuyauterie, brasure, condensats, étanchéité et tirage au vide.' },
    { type: 'fiche', id: 'abc-commissioning', why: 'Mise en service, charge en fluide et relevés de référence.' },
    { type: 'fiche', id: 'clim-room-install', why: 'Bruit, unité extérieure, régulation et condenseur.' },

    { type: 'heading', text: '6 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Sécurité des installations frigorifiques',
      rows: [
        { norm: 'IEC 60335-2-40', rule: 'Climatiseurs et pompes à chaleur : charge maximale des fluides inflammables selon la surface et la hauteur d’installation.', result: 'R32 : 6,2 kg max au séjour' },
        { norm: 'EN 378 / ISO 5149', rule: 'Conception, construction et essais des systèmes frigorifiques ; limites de concentration par local.', result: 'épreuve, étiquetage, registre' },
        { norm: 'ASHRAE 15 / 34', rule: 'Sécurité des installations (15) et classification des fluides (34) en Amérique du Nord.', result: 'R32 = A2L' },
        { norm: 'Règlement UE 2024/573 (F-gas)', rule: 'Contrôles d’étanchéité à partir de 5 t éq. CO₂ ; personnel certifié ; récupération obligatoire.', result: '0,86 kg × 675 ≈ 0,58 t : pas de contrôle obligatoire' },
      ],
    },
    {
      type: 'regional',
      text: 'Les pays d’Afrique de l’Ouest appliquent le protocole de Montréal et l’amendement de Kigali : les HFC sont gelés puis réduits progressivement, et des programmes nationaux forment et certifient les frigoristes aux bonnes pratiques (récupération, fluides inflammables). Exigez un installateur formé au R32, une pompe à vide et un vacuomètre : ce sont les deux outils qui font la différence entre un split qui dure deux ans et un split qui dure quinze ans.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Unité extérieure à l’ombre et dégagée : quelques mètres de liaison en plus valent mieux que 15 % de puissance en moins.',
        'Liaisons isolées séparément, condensats en pente avec siphon : sous les tropiques, l’eau est partout.',
        'Azote, épreuve, vide à 500 µm, charge pesée : jamais de purge au fluide.',
        'Un fluide A2L se vérifie par la charge maximale admise dans la pièce.',
        'La mise en service se prouve par des relevés : écart de température, pressions, intensités.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Une liaison de 12 m relie le séjour à son unité extérieure (préchargée pour 5 m, 20 g/m). Quel complément de charge ?',
      solution: ['m = (12 − 5) × 20 = 140 g de R32.', 'À vérifier aussi : la longueur maximale et le dénivelé admis par la notice.'],
    },
    {
      type: 'exercise',
      question: 'Un bureau de 9 m² reçoit un split mural R32 chargé à 1,2 kg. La charge est-elle admise ?',
      solution: ['m_max = 2,5 × 0,229 × 1,8 × √9 ≈ 3,1 kg.', '1,2 kg ≤ 3,1 kg : oui.'],
    },
    {
      type: 'exercise',
      question: 'À la mise en service, l’air sort à 20 °C pour une reprise à 26 °C. Que suspectez-vous ?',
      solution: [
        'Un écart de 6 °C seulement : l’appareil échange mal.',
        'Causes possibles : manque de fluide (fuite, charge incomplète), filtre ou batterie encrassés, ventilateur en petite vitesse, unité extérieure qui recycle son air chaud. On contrôle les pressions avant d’ajouter du fluide.',
      ],
    },
  ],
};
