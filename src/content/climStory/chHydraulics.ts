import { TopicContent } from '../types';
import { fig } from '../topics/clim/fig';

export const chHydraulicsContent: TopicContent = {
  title: 'Le réseau d’eau glacée',
  subtitle: 'Cinquante mètres cubes d’eau à 7 °C par heure doivent atteindre 120 chambres et trois centrales de traitement d’air, chacune avec le bon débit. Ousmane dessine le réseau, dimensionne tuyauteries et pompes, choisit les vannes, le vase d’expansion et l’isolant qui empêchera les tuyaux de « pleurer » dans les faux plafonds.',
  blocks: [
    { type: 'scene', text: 'Mois 5 · Bureau d’études, avec Didier Kouassi (plans d’exécution)' },
    {
      type: 'objectives',
      items: [
        'Choisir une architecture hydraulique : primaire / secondaire ou primaire variable.',
        'Dimensionner les tuyauteries par la vitesse et calculer la hauteur manométrique des pompes.',
        'Comprendre l’autorité des vannes et l’équilibrage.',
        'Dimensionner le vase d’expansion et l’isolation anti-condensation.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: 'DN 125', label: 'collecteur principal, ≈ 1,1 m/s' },
        { value: '≈ 190 kPa', label: 'hauteur des pompes secondaires' },
        { value: '5,5 kW', label: 'pompe secondaire à variateur' },
        { value: '80 L', label: 'vase d’expansion' },
        { value: '19 / 40 mm', label: 'isolant intérieur / extérieur' },
      ],
    },

    { type: 'heading', text: '1 · L’architecture du réseau' },
    { type: 'illustration', name: 'clim-central', props: { highlight: 'water' }, caption: 'Boucle primaire autour des groupes, boucle secondaire vers les terminaux, séparées par une bouteille de découplage' },
    {
      type: 'text',
      text: 'Chaque groupe a besoin d’un débit d’eau constant dans son évaporateur, alors que les terminaux demandent un débit variable selon l’occupation. La solution classique sépare deux boucles : une boucle primaire à débit constant autour des groupes, une boucle secondaire à débit variable vers les terminaux, reliées par une bouteille de découplage où les deux débits peuvent différer sans se gêner.',
    },
    fig('p148_0', 'Tableau 5.11 du guide IEPF — critique des différents réseaux hydrauliques'),
    {
      type: 'decision',
      title: 'Architecture hydraulique',
      choice: 'Primaire à débit constant (une pompe par groupe) et secondaire à débit variable (deux pompes à variateur, dont une en secours), bouteille de découplage',
      reasons: [
        'Robuste et facile à exploiter : chaque groupe a son débit garanti, quel que soit le comportement des terminaux.',
        'La pompe secondaire ralentit quand les chambres sont vides : l’énergie de pompage suit l’occupation.',
        'L’équipe de Félix comprend et peut dépanner ce schéma.',
      ],
      rejected: 'Primaire variable (sans boucle secondaire) : moins de pompes et un peu moins d’énergie, mais une régulation délicate du débit minimal des groupes, risquée sans exploitant spécialisé.',
    },
    { type: 'fiche', id: 'abc-hydraulics', why: 'Réseaux hydrauliques : débits, pompes, vannes et équilibrage.' },

    { type: 'heading', text: '2 · Dimensionner les tuyauteries' },
    fig('p149_0', 'Tableau 5.12 du guide — vitesses maximales dans les tuyauteries d’eau glacée (acier et cuivre)'),
    {
      type: 'calc',
      title: 'Diamètres, du collecteur à la chambre',
      steps: [
        { label: 'Collecteur secondaire : 50 m³/h, DN 125 (section 0,0123 m²)', formula: 'v = \\frac{50}{3 600 × 0,0123} ≈ 1,1 m/s ✓' },
        { label: 'Colonne d’une aile : 60 chambres × 0,32 m³/h × 0,8, DN 65 (0,0033 m²)', formula: 'q ≈ 15,4 m³/h   ;   v = \\frac{15,4}{3 600 × 0,0033} ≈ 1,3 m/s ✓' },
        { label: 'Branchement d’une chambre : 0,32 m³/h, tube de 15 mm intérieur', formula: 'v = \\frac{0,32}{3 600 × 0,000177} ≈ 0,5 m/s ✓' },
      ],
      result: 'Vitesses sous les maximums du guide : pas de bruit d’écoulement, pertes de charge de 150 à 300 Pa/m',
    },
    {
      type: 'calc',
      title: 'Hauteur et puissance de la pompe secondaire',
      steps: [
        { label: 'Circuit le plus défavorable : 300 m de tuyauterie aller-retour à ≈ 250 Pa/m, accessoires + 30 %', formula: 'Δp_{réseau} ≈ 300 × 250 × 1,3 ≈ 98 kPa' },
        { label: 'Terminal : batterie 25 kPa, vanne de régulation 30 kPa, filtre et équilibrage 20 kPa', formula: 'Δp_{terminal} ≈ 75 kPa' },
        { label: 'Total avec 10 % de marge', formula: 'H ≈ (98 + 75) × 1,1 ≈ 190 kPa  (≈ 19 m de colonne d’eau)' },
        { label: 'Puissance absorbée (rendement global 0,6)', formula: 'P = \\frac{q_v × H}{η} = \\frac{0,0139 × 190 000}{0,6} ≈ 4,4 kW  →  moteur 5,5 kW' },
      ],
      result: 'Pompe secondaire 50 m³/h sous 19 m, moteur 5,5 kW avec variateur',
    },

    { type: 'heading', text: '3 · Vannes et équilibrage' },
    {
      type: 'text',
      text: 'Sans équilibrage, l’eau prend le chemin le plus facile : les chambres proches des pompes reçoivent trop, celles du bout de l’aile pas assez. Chaque vanne de régulation doit aussi avoir assez « d’autorité » : la perte de charge qu’elle crée, ouverte, doit peser au moins la moitié de celle du circuit qu’elle commande, sinon elle ne régule presque rien sur la première moitié de sa course.',
    },
    {
      type: 'calc',
      title: 'Autorité de la vanne d’un ventilo-convecteur',
      steps: [
        { label: 'Vanne de régulation ouverte : 30 kPa ; batterie et branchement : 25 kPa', formula: 'β = \\frac{Δp_{vanne}}{Δp_{vanne} + Δp_{circuit}} = \\frac{30}{30 + 25} ≈ 0,55 ≥ 0,5 ✓' },
      ],
      result: 'Autorité suffisante : la vanne régule sur toute sa course',
    },
    {
      type: 'decision',
      title: 'Vannes des terminaux',
      choice: 'Vannes de régulation indépendantes de la pression (PICV) sur chaque ventilo-convecteur et chaque batterie de CTA',
      reasons: [
        'Chaque vanne limite elle-même le débit à sa valeur réglée, quelle que soit la pression du réseau : le réseau s’équilibre tout seul.',
        'Mise en service plus rapide, et pas de déséquilibre quand une aile est fermée pour travaux.',
        'Autorité de 1 par construction : régulation stable même à faible charge.',
      ],
      rejected: 'Vannes classiques + vannes d’équilibrage manuelles : moins chères à l’achat, mais un équilibrage long, à refaire à chaque modification.',
    },

    { type: 'heading', text: '4 · Vase d’expansion et isolation' },
    {
      type: 'calc',
      title: 'Vase d’expansion',
      steps: [
        { label: 'Volume d’eau : tuyauteries ≈ 4,5 m³, terminaux et CTA ≈ 0,7 m³, groupes ≈ 0,8 m³', formula: 'V ≈ 6 m³' },
        { label: 'Dilatation entre 7 °C et 35 °C (installation arrêtée en plein soleil)', formula: 'V_e ≈ 0,6 % × 6 000 ≈ 36 L' },
        { label: 'Pression absolue de gonflage (hauteur statique 20 m + 0,3 bar) et pression finale avant soupape', formula: 'P_0 = 3,3 bar   ;   P_f = 6,5 bar' },
        { label: 'Volume nominal du vase', formula: 'V_n = V_e × \\frac{P_f}{P_f − P_0} = 36 × \\frac{6,5}{3,2} ≈ 73 L  →  80 L' },
      ],
      result: 'Vase de 80 L, soupape de sûreté tarée à 6 bar, maintien de pression et remplissage avec disconnecteur',
    },
    {
      type: 'calc',
      title: 'Isolation des tuyauteries à 7 °C',
      steps: [
        { label: 'Dans les faux plafonds (air 26 °C, point de rosée ≈ 15 °C), 19 mm d’isolant (λ = 0,036)', formula: 'θ_s = 26 − 19 × \\frac{0,125}{0,53 + 0,125} ≈ 22,4 °C > 15 °C ✓' },
        { label: 'En terrasse (air 32 °C, point de rosée ≈ 28 °C), 40 mm d’isolant', formula: 'θ_s = 32 − 25 × \\frac{0,125}{1,11 + 0,125} ≈ 29,5 °C > 28 °C ✓' },
      ],
      result: '19 mm à l’intérieur, 40 mm avec habillage aluminium dehors ; pare-vapeur continu, y compris aux supports',
    },
    {
      type: 'note',
      text: 'Le point faible n’est presque jamais l’épaisseur, mais la continuité : un collier métallique posé directement sur le tube, une vanne laissée nue, et la condensation goutte sur les plafonds des chambres. Didier dessine des cales isolantes à chaque support et des coquilles démontables sur les vannes.',
    },
    {
      type: 'bullets',
      items: [
        'Remplissage à l’eau adoucie, inhibiteur de corrosion, filtre et séparateur de boues et d’air sur le retour.',
        'Pas de glycol : l’eau ne gèle jamais sous ce climat, et le glycol réduirait l’échange.',
        'Purgeurs aux points hauts, vidanges aux points bas, vannes d’isolement par aile pour intervenir sans tout vidanger.',
      ],
    },
    { type: 'fiche', id: 'clim-central-networks', why: 'Groupe d’eau glacée, gaines et tuyauteries.' },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Réseaux hydrauliques',
      rows: [
        { norm: 'Guide IEPF', rule: 'Vitesses maximales dans les tuyauteries d’eau glacée selon le diamètre et le matériau.', result: '≈ 1 à 2 m/s' },
        { norm: 'ASHRAE Fundamentals / Handbook Systems', rule: 'Dimensionnement des réseaux (perte de charge 100 à 400 Pa/m), pompes, systèmes primaire/secondaire.', result: '150 à 300 Pa/m retenus' },
        { norm: 'EN 12828 / EN 13831', rule: 'Conception des installations à eau ; vases d’expansion à membrane.', result: 'vase 80 L, soupape 6 bar' },
        { norm: 'EN ISO 12241', rule: 'Calcul de l’isolation thermique des tuyauteries, dont la prévention de la condensation.', result: '19 / 40 mm' },
      ],
    },
    {
      type: 'regional',
      text: 'Les pompes et vannes importées mettent des semaines à arriver : Félix garde en stock une pompe secondaire complète, des moteurs de vanne et des joints. Autre réalité locale : les coupures. À chaque retour du réseau, l’automate redémarre d’abord les pompes, puis un groupe, puis les autres, avec quelques minutes d’écart, pour ne pas faire caler le groupe électrogène.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Primaire à débit constant autour des groupes, secondaire à débit variable vers les terminaux, bouteille de découplage entre les deux.',
        'Tuyauteries choisies par la vitesse (1 à 2 m/s) ; hauteur de pompe = circuit le plus défavorable + terminal + marge.',
        'Puissance de pompe = débit × pression ÷ rendement ; le variateur fait suivre la charge.',
        'Autorité des vannes ≥ 0,5, ou vannes indépendantes de la pression.',
        'Vase d’expansion dimensionné sur la dilatation ; isolation continue avec pare-vapeur.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'La nuit, la pompe secondaire ne fait passer que 25 m³/h. Si la hauteur nécessaire tombe à 60 kPa, quelle puissance absorbe-t-elle ?',
      solution: ['P = (25 / 3 600) × 60 000 / 0,55 ≈ 0,76 kW.', 'Contre 4,4 kW à la pointe : c’est tout l’intérêt du variateur.'],
    },
    {
      type: 'exercise',
      question: 'Une vanne de régulation ne crée que 10 kPa face à un circuit de 40 kPa. Quelle autorité ? Conséquence ?',
      solution: ['β = 10 / (10 + 40) = 0,2.', 'Trop faible : la vanne laisse passer presque tout le débit dès qu’elle s’entrouvre, la température oscille. Il faut une vanne plus petite (plus de perte de charge) ou une vanne indépendante de la pression.'],
    },
  ],
};
