import { TopicContent } from '../types';
import { fig } from '../topics/clim/fig';

export const cvSelectContent: TopicContent = {
  title: 'Choisir les splits',
  subtitle: 'Un « 18 000 BTU » ne fournit pas toujours 18 000 BTU/h. Ousmane lit les catalogues, corrige la puissance selon les températures réelles, compare inverter et tout-ou-rien, choisit le fluide, puis dresse la liste des équipements qu’Awa attend pour ses circuits.',
  blocks: [
    { type: 'scene', text: 'Semaine 4 · Comparaison des offres, avec Koffi et Awa' },
    {
      type: 'objectives',
      items: [
        'Lire une fiche de catalogue : puissance nominale, conditions d’essai, EER et SEER.',
        'Corriger la puissance selon les températures intérieure et extérieure.',
        'Choisir entre inverter et tout-ou-rien, et choisir le fluide frigorigène.',
        'Établir la liste des équipements et la transmettre au lot électricité.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '5,28 kW', label: 'séjour : 18 000 BTU/h nominal' },
        { value: '≈ 5,0 kW', label: 'garantis à 38 °C dehors' },
        { value: 'SEER 6,1', label: 'inverter, contre ≈ 2,8 en tout-ou-rien' },
        { value: '≈ 150 000 FCFA', label: 'économisés par an sur le séjour' },
        { value: 'R32', label: 'fluide retenu (PRP 675)' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'J’ai deux devis. L’un propose des « 2 CV » à prix cassé, l’autre des splits inverter de marque, 30 % plus chers. Ce sont les mêmes appareils, non ?',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'Le « CV » n’est pas une unité de froid : chaque vendeur y met ce qu’il veut. Je compare seulement des kilowatts ou des BTU/h mesurés selon une norme, avec la puissance électrique absorbée en face. Et je regarde ce que l’appareil fournit chez vous, pas dans le laboratoire.',
    },

    { type: 'heading', text: '1 · Lire un catalogue' },
    fig('p069', 'Page 54 du guide IEPF — unités : 1 kW froid = 3 412 BTU/h ; le « CV » commercial vaut environ 8 000 à 9 000 BTU/h selon les vendeurs'),
    {
      type: 'table',
      headers: ['Donnée du catalogue', 'Signification', 'Ce qu’Ousmane vérifie'],
      rows: [
        ['Puissance frigorifique nominale', 'mesurée à 27 °C / 19 °C humide dedans, 35 °C dehors (ISO 5151, condition T1)', 'kW ou BTU/h, pas « CV »'],
        ['Puissance absorbée', 'électricité consommée dans ces conditions', 'pour l’EER et pour Awa'],
        ['EER', 'froid ÷ électricité, au point nominal', '≥ 3,2 pour un bon split'],
        ['SEER', 'efficacité moyenne sur une saison (EN 14825)', 'c’est elle qui fait la facture'],
        ['Plage de fonctionnement', 'températures extérieures admises', 'jusqu’à 43 °C au moins (T3 si possible)'],
        ['Puissance mini / maxi (inverter)', 'plage de modulation', 'mini sous la charge des chambres'],
      ],
    },
    fig('p063_0', 'Abaque du guide — puissance frigorifique et puissance absorbée selon les températures d’évaporation et de condensation : plus il fait chaud dehors, moins la machine produit de froid'),
    {
      type: 'calc',
      title: 'Puissance réelle du 18 000 BTU/h dans le séjour',
      steps: [
        { label: 'Puissance nominale (35 °C dehors, 27 °C / 19 °C humide dedans)', formula: 'Q_{nom} = 5,28 kW' },
        { label: 'Consigne 26 °C à 50 % (température humide ≈ 18,7 °C) : facteur du catalogue', formula: 'f_{int} ≈ 0,98' },
        { label: 'Vague de chaleur à 38 °C dehors : facteur du catalogue', formula: 'f_{ext} ≈ 0,96' },
        { label: 'Liaison frigorifique de 8 m au lieu de 5 m de référence', formula: 'f_{liaison} ≈ 0,99' },
        { label: 'Puissance disponible', formula: 'Q = 5,28 × 0,98 × 0,96 × 0,99 ≈ 4,92 kW ≥ 4,92 kW ✓' },
      ],
      result: 'Le 18 000 BTU/h couvre le séjour même un jour de 38 °C, sans marge de plus : un 15 000 BTU/h aurait été trop juste',
    },

    { type: 'heading', text: '2 · Inverter ou tout-ou-rien ?' },
    {
      type: 'text',
      text: 'Un split tout-ou-rien démarre à pleine puissance, refroidit, s’arrête, puis redémarre quand la température remonte. Un split inverter fait varier la vitesse de son compresseur : il ralentit quand la pièce approche de la consigne et tourne longtemps à faible puissance, là où il a le meilleur rendement.',
    },
    fig('p100_0', 'Figure 4.21 du guide — régulation marche/arrêt : la température oscille autour de la consigne'),
    fig('p101_0', 'Figure 4.22 — régulation inverter : vitesse variable, température stable'),
    {
      type: 'calc',
      title: 'Ce que rapporte l’inverter dans le séjour',
      steps: [
        { label: 'Froid produit sur l’année : 4,9 kW de pointe, charge moyenne 50 %, 8 h/j', formula: 'E_f = 4,9 × 0,5 × 8 × 365 ≈ 7 150 kWh de froid' },
        { label: 'Électricité consommée avec un tout-ou-rien (SEER ≈ 2,8)', formula: 'E = \\frac{7 150}{2,8} ≈ 2 550 kWh' },
        { label: 'Avec un inverter (SEER ≈ 6,1)', formula: 'E = \\frac{7 150}{6,1} ≈ 1 170 kWh' },
        { label: 'Économie à environ 110 FCFA/kWh', formula: '(2 550 − 1 170) × 110 ≈ 152 000 FCFA par an' },
      ],
      result: 'Le surcoût de l’inverter (≈ 100 000 FCFA pour le séjour) est remboursé en moins d’un an',
    },
    {
      type: 'decision',
      title: 'Technologie des splits',
      choice: 'Splits muraux inverter, EER ≥ 3,2 et SEER ≥ 6, plage jusqu’à 46 °C',
      reasons: [
        'Les chambres demandent 1,4 à 1,9 kW, mais le plus petit modèle fait 2,64 kW : seul un inverter peut descendre vers 0,9 kW sans s’arrêter sans cesse.',
        'En tournant longtemps à basse vitesse, il condense mieux : l’air est sec, la consigne de 26 °C paraît fraîche.',
        'Faible courant de démarrage : rien ne vacille dans la maison, et Awa garde ses calibres de 16 A.',
      ],
      rejected: 'Les « 2 CV » tout-ou-rien du premier devis : moins chers à l’achat, mais une facture deux fois plus lourde et des chambres moites.',
    },

    { type: 'heading', text: '3 · Quel fluide frigorigène ?' },
    {
      type: 'table',
      headers: ['Fluide', 'PRP (effet de serre, CO₂ = 1)', 'Sécurité (ISO 817)', 'Statut'],
      rows: [
        ['R22', '1 810', 'A1', 'interdit dans le neuf (couche d’ozone)'],
        ['R410A', '2 088', 'A1', 'en réduction (amendement de Kigali)'],
        ['R32', '675', 'A2L (faiblement inflammable)', 'standard actuel des splits'],
        ['R290 (propane)', '3', 'A3 (inflammable)', 'petites charges, en développement'],
      ],
    },
    {
      type: 'decision',
      title: 'Fluide frigorigène',
      choice: 'R32',
      reasons: [
        'PRP trois fois plus faible que le R410A, meilleure efficacité, charge plus petite (≈ 0,8 kg pour le séjour).',
        'Disponible chez tous les grands fabricants et connu des frigoristes locaux.',
        'Sa légère inflammabilité impose des règles de charge maximale par pièce, vérifiées à l’étape suivante.',
      ],
      rejected: 'R410A : en voie de réduction, recharges de plus en plus chères. R290 : excellent pour l’environnement, mais encore rare et exigeant pour l’installateur.',
    },
    { type: 'fiche', id: 'abc-refrigerants', why: 'Fluides, classes de sécurité, PRP et réglementation.' },

    { type: 'heading', text: '4 · La liste des équipements' },
    {
      type: 'text',
      text: 'La liste des équipements résume tout ce que les autres intervenants doivent savoir : le menuisier pour les percements, le maçon pour les supports, et Awa pour les circuits électriques. Le courant indiqué est le courant maximal de plaque, celui qui sert à choisir les protections.',
    },
    {
      type: 'equipmentSchedule',
      schedule: {
        title: 'Climatisation villa Mensah',
        project: 'Villa Mensah',
        conditions: 'ISO 5151 T1 : 35 °C ext., 27 °C / 19 °C int.',
        rows: [
          { tag: 'UI-01', location: 'Séjour', type: 'Split mural inverter 18 000 BTU/h', cooling: 5.28, airflow: 850, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 1.64, current: 8.7, protection: 'C16 · ID4 type A', note: 'UE-01 façade sud, liaison 8 m' },
          { tag: 'UI-02', location: 'Chambre 1', type: 'Split mural inverter 9 000 BTU/h', cooling: 2.64, airflow: 500, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 0.82, current: 4.3, protection: 'C16 · ID4 type A', note: 'UE-02 sous débord, liaison 5 m' },
          { tag: 'UI-03', location: 'Chambre 2', type: 'Split mural inverter 9 000 BTU/h', cooling: 2.64, airflow: 500, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 0.82, current: 4.3, protection: 'C16 · ID4 type A', note: 'UE-03 sous débord, liaison 6 m' },
          { tag: 'UI-04', location: 'Chambre 3', type: 'Split mural inverter 9 000 BTU/h', cooling: 2.64, airflow: 500, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 0.82, current: 4.3, protection: 'C16 · ID4 type A', note: 'UE-04 façade nord, liaison 4 m' },
        ],
      },
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Parfait : 8,7 A pour le séjour et 4,3 A par chambre, c’est ce que j’avais prévu avec des circuits de 16 A en 2,5 mm². Et puisque ce sont des inverter, j’ai bien fait de passer le différentiel ID 4 en type A.',
    },
    {
      type: 'note',
      text: 'Installé : 13,2 kW de froid pour un bilan de 9,7 kW. Ce n’est pas un surdimensionnement : chaque pièce a son appareil, et les chambres sont limitées par le plus petit modèle du marché. Comme elles ne sont pas à leur pointe en même temps que le séjour, la puissance électrique appelée reste proche du bilan d’Awa (10,2 kW retenus pour toute la maison).',
    },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Mesurer la performance d’un climatiseur',
      rows: [
        { norm: 'ISO 5151', rule: 'Essais des climatiseurs non gainés ; conditions T1 (35 °C ext.) et T3 (46 °C ext.) pour les climats chauds.', result: 'puissance nominale à 35 °C' },
        { norm: 'EN 14511 / EN 14825', rule: 'EER au point nominal ; SEER sur une saison type, charge partielle comprise.', result: 'SEER ≥ 6 exigé' },
        { norm: 'ISO 16358', rule: 'Facteur de performance saisonnier (CSPF), utilisé en Asie et adaptable aux climats tropicaux.', result: 'équivalent du SEER' },
        { norm: 'AHRI 210/240', rule: 'Étiquetage américain : SEER2 en BTU/Wh (≈ 3,41 × la valeur en W/W).', result: 'SEER2 20 ≈ 5,9 W/W' },
      ],
    },
    {
      type: 'regional',
      text: 'Le marché ouest-africain regorge de splits vendus en « CV » sans fiche technique, parfois avec une étiquette de puissance gonflée. Plusieurs pays de la CEDEAO ont adopté ou préparent des exigences minimales d’efficacité et des étiquettes énergétiques pour les climatiseurs (le Ghana l’impose depuis longtemps) : exigez l’étiquette, la puissance en kW et la plage de température extérieure. Un appareil limité à 43 °C peut se mettre en sécurité lors des pics de chaleur du Sahel.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'On compare des kW (ou BTU/h) mesurés selon une norme, jamais des « CV ».',
        'La puissance d’un catalogue est donnée à 35 °C dehors : on la corrige pour les conditions réelles.',
        'L’EER donne l’efficacité au point nominal, le SEER celle de la saison : c’est le SEER qui fait la facture.',
        'L’inverter module sa puissance : indispensable quand l’appareil le plus petit dépasse le besoin.',
        'R32 aujourd’hui, avec ses règles de charge ; R410A en déclin.',
        'La liste des équipements fournit au lot électricité les courants et les protections.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un split affiche 12 000 BTU/h et 1,10 kW absorbés. Quel EER ? Est-il bon ?',
      solution: ['12 000 / 3 412 ≈ 3,52 kW de froid.', 'EER = 3,52 / 1,10 ≈ 3,2 : correct pour un split ; un bon inverter atteint 3,5 à 4.'],
    },
    {
      type: 'exercise',
      question: 'Le catalogue donne 0,90 comme facteur à 43 °C dehors. Le 18 000 BTU/h couvre-t-il encore le séjour à 43 °C ?',
      solution: ['Q = 5,28 × 0,98 × 0,90 × 0,99 ≈ 4,61 kW < 4,92 kW.', 'Non : la pièce montera de 1 à 2 °C au-dessus de la consigne pendant ces heures exceptionnelles. C’est acceptable sur une base à 32 °C, à condition de le dire au client.'],
    },
  ],
};
