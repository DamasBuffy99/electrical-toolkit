import { TopicContent } from '../types';
import { fig } from '../topics/clim/fig';

export const coSystemContent: TopicContent = {
  title: 'Split, VRV ou eau glacée ?',
  subtitle: 'Avec 65 kW par étage et 323 kW pour le bâtiment, plusieurs systèmes sont possibles. Ousmane les compare devant Jean-Marc, retient un VRV par étage, le dimensionne avec son taux de connexion et vérifie que le fluide R32 reste sûr dans les petits bureaux.',
  blocks: [
    { type: 'scene', text: 'Mois 3 · Comité technique de Kora, avec Awa Diallo' },
    {
      type: 'objectives',
      items: [
        'Comparer splits, VRV et eau glacée sur des critères techniques et économiques.',
        'Comprendre le fonctionnement d’un VRV : un groupe extérieur, plusieurs unités intérieures, un réseau frigorifique.',
        'Dimensionner un système VRV : foisonnement, taux de connexion, longueurs.',
        'Vérifier la charge de fluide admise dans le plus petit local desservi.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '2 × 22,4 kW', label: 'groupes VRV par étage' },
        { value: '125 % / 104 %', label: 'taux de connexion des deux circuits' },
        { value: '9 kg', label: 'de R32 par circuit' },
        { value: '2,0 kg', label: 'admis sans mesure dans un bureau de 12 m²' },
        { value: 'EER ≈ 3,6', label: 'à pleine charge, bien plus à charge partielle' },
      ],
    },

    { type: 'heading', text: '1 · Trois familles de systèmes' },
    { type: 'illustration', name: 'clim-systems', props: { highlight: 'medium' }, caption: 'De 2,5 à 75 kW par système : le domaine des splits, multisplits et VRV' },
    {
      type: 'table',
      headers: ['Critère', 'Splits individuels', 'VRV (débit de réfrigérant variable)', 'Eau glacée + ventilo-convecteurs'],
      rows: [
        ['Nombre d’unités extérieures', '≈ 50 sur les façades', '10 en toiture', '2 groupes + pompes'],
        ['Régulation par zone', 'oui, mais sans coordination', 'oui, centralisée', 'oui, centralisée'],
        ['Efficacité à charge partielle', 'moyenne', 'très bonne (compresseurs inverter)', 'bonne, dépend des pompes'],
        ['Fluide dans les plafonds', 'peu', 'oui : charge à vérifier', 'non : de l’eau'],
        ['Domaine habituel', 'jusqu’à ≈ 50 kW', '50 à 400 kW', 'au-delà de 300 à 500 kW'],
        ['Coût d’installation (indice)', '1', '≈ 1,5', '≈ 1,8'],
      ],
    },
    fig('p129_0', 'Tableau 5.2 du guide IEPF — appréciation des systèmes : couverture des charges, confort, frais de fonctionnement'),
    {
      type: 'dialogue',
      speaker: 'Jean-Marc Kouadio (Kora Assurances)',
      role: 'client',
      text: 'L’hôtel d’à côté a une centrale à eau glacée. On dit que c’est ce qui se fait de mieux. Pourquoi pas nous ?',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'Pour un hôtel de 120 chambres, oui, et je vous en reparlerai sur un autre projet. Pour 323 kW de bureaux qui ne fonctionnent que le jour, l’eau glacée coûterait 20 % de plus, demanderait un local technique, des pompes et une équipe qui sait les entretenir. Le VRV fait aussi bien ici, avec des groupes en toiture et une régulation par zone très fine.',
    },
    {
      type: 'decision',
      title: 'Système de climatisation',
      choice: 'VRV froid seul (la récupération de chaleur est inutile sous ce climat), deux circuits par étage, et une centrale d’air neuf séparée',
      reasons: [
        'Puissance du bâtiment (≈ 320 kW) dans le domaine naturel du VRV, avec un excellent rendement à charge partielle.',
        'Une unité intérieure par sous-zone, pilotée individuellement : fin des querelles entre façades.',
        'Groupes extérieurs regroupés en toiture : façades libres, maintenance au même endroit.',
      ],
      rejected: 'Splits individuels (façades encombrées, aucune gestion centrale, air neuf non traité) ; eau glacée (plus chère à cette échelle, locaux et compétences supplémentaires).',
    },
    { type: 'fiche', id: 'clim-system-choice', why: 'Quel système pour quel bâtiment ?' },
    { type: 'fiche', id: 'abc-split-vrv', why: 'Split, multisplit et VRV en pratique.' },

    { type: 'heading', text: '2 · Dimensionner un VRV' },
    {
      type: 'text',
      text: 'Un VRV relie un groupe extérieur à inverter à plusieurs unités intérieures par un réseau de cuivre avec des dérivations (« raccords Y »). Chaque unité intérieure a son détendeur électronique ; le groupe ajuste sa vitesse à la demande totale. Comme toutes les zones ne sont pas à leur pointe en même temps, la somme des unités intérieures peut dépasser la puissance du groupe : c’est le taux de connexion.',
    },
    {
      type: 'calc',
      title: 'Circuit A de l’étage : nord + est + réunion',
      steps: [
        { label: 'Besoins des zones sans l’air neuf (traité à part)', formula: '10,5 + 9,6 + 4,6 = 24,7 kW' },
        { label: 'Les trois zones ne sont pas à leur pointe en même temps (est le matin, réunion intermittente)', formula: '24,7 × 0,8 ≈ 19,8 kW  →  groupe de 22,4 kW' },
        { label: 'Unités intérieures choisies', formula: '4 × 2,8 + 2 × 5,6 + 1 × 5,6 = 28,0 kW' },
        { label: 'Taux de connexion (limite du fabricant : 50 à 130 %)', formula: '\\frac{28,0}{22,4} = 125 % ✓' },
      ],
      result: 'Circuit A : groupe 22,4 kW, 7 unités intérieures, connexion 125 %. Circuit B (sud + ouest) : 23,2 kW pour 22,4 kW, soit 104 %',
    },
    {
      type: 'table',
      headers: ['Contrainte du réseau VRV (ordre de grandeur constructeur)', 'Limite', 'Kora'],
      rows: [
        ['Longueur réelle la plus longue', '165 m', '≈ 55 m'],
        ['Dénivelé groupe – unité intérieure', '50 m (groupe au-dessus)', '≈ 18 m pour le 1er étage'],
        ['Après le premier raccord, jusqu’à l’unité la plus éloignée', '40 m', '≈ 32 m'],
        ['Taux de connexion', '50 à 130 %', '104 à 125 %'],
      ],
    },

    { type: 'heading', text: '3 · Le fluide dans les plafonds : combien par bureau ?' },
    {
      type: 'calc',
      title: 'Charge du circuit A face au plus petit bureau desservi',
      steps: [
        { label: 'Charge du circuit : usine + complément pour 55 m de liaisons', formula: 'm = 5,5 + 3,5 = 9,0 kg de R32' },
        { label: 'Plus petit local desservi : bureau individuel de 12 m², hauteur 2,7 m', formula: 'V = 12 × 2,7 ≈ 32 m³' },
        { label: 'Limite de concentration du R32 (EN 378, sans mesure particulière)', formula: '0,061 kg/m³ × 32 m³ ≈ 2,0 kg < 9,0 kg  ✗' },
        { label: 'Même calcul avec du R410A (A1, limite 0,44 kg/m³)', formula: '0,44 × 32 ≈ 14 kg ≥ 9,0 kg ✓' },
      ],
      result: 'Avec du R32, il faut des mesures de sécurité dans les petits bureaux ; le R410A passerait, mais avec un PRP trois fois plus élevé',
    },
    {
      type: 'decision',
      title: 'Fluide du VRV',
      choice: 'VRV au R32, avec détecteurs de fuite dans les locaux de moins de 30 m² et vannes d’isolement automatiques sur les dérivations (kit de sécurité du fabricant)',
      reasons: [
        'PRP de 675 au lieu de 2 088 : trois fois moins d’impact en cas de fuite, conforme à la trajectoire de Kigali.',
        'Les mesures prévues par la norme des appareils (IEC 60335-2-40, annexe GG) et l’EN 378 permettent la charge de 9 kg : en cas de fuite, la vanne isole l’unité et la ventilation se met en marche.',
        'Deux circuits par étage au lieu d’un : la charge par circuit reste modérée.',
      ],
      rejected: 'R410A : plus simple aujourd’hui, mais en réduction progressive, de plus en plus cher à recharger pendant les 15 ans de vie du système.',
    },

    { type: 'heading', text: '4 · La liste des équipements d’un étage' },
    {
      type: 'equipmentSchedule',
      schedule: {
        title: 'VRV étage type Kora',
        project: 'Siège Kora Assurances',
        conditions: '35 °C ext. ; 27 °C / 19 °C int. (catalogue)',
        rows: [
          { tag: 'UE-A', location: 'Toiture', type: 'Groupe VRV inverter 22,4 kW', cooling: 22.4, refrigerant: 'R32', supply: '400 V 3~ 50 Hz', power: 5.6, current: 9.5, protection: 'C20 3P · ID 300 mA', note: 'nord + est + réunion, connexion 125 %' },
          { tag: 'UE-B', location: 'Toiture', type: 'Groupe VRV inverter 22,4 kW', cooling: 22.4, refrigerant: 'R32', supply: '400 V 3~ 50 Hz', power: 5.6, current: 9.5, protection: 'C20 3P · ID 300 mA', note: 'sud + ouest, connexion 104 %' },
          { tag: 'UI-N ×4', location: 'Bureaux nord', type: 'Cassettes 4 voies 2,8 kW', cooling: 0, airflow: 2600, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 0.16, current: 0.8, protection: 'C10 commun', note: 'détecteur de fuite dans les bureaux < 30 m²' },
          { tag: 'UI-E ×2', location: 'Bureaux est', type: 'Gainables 5,6 kW', cooling: 0, airflow: 2000, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 0.3, current: 1.4, protection: 'C10 commun', note: 'reprise en plénum' },
          { tag: 'UI-R ×1', location: 'Salle de réunion', type: 'Gainable 5,6 kW', cooling: 0, airflow: 1000, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 0.15, current: 0.7, protection: 'C10 commun', note: 'air neuf sec de la CTA' },
          { tag: 'UI-S ×3', location: 'Bureaux sud', type: 'Cassettes 4 voies 4,0 kW', cooling: 0, airflow: 2400, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 0.15, current: 0.7, protection: 'C10 commun', note: '' },
          { tag: 'UI-O ×2', location: 'Bureaux ouest', type: 'Gainables 5,6 kW', cooling: 0, airflow: 2000, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 0.3, current: 1.4, protection: 'C10 commun', note: 'reprise en plénum' },
        ],
      },
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Dix groupes de 5,6 kW en toiture, soit 56 kW, plus les unités intérieures sur les tableaux d’étage. Je prévois un tableau « CVC » en toiture alimenté depuis le TGBT, et un différentiel 300 mA par groupe : les variateurs des compresseurs ont des courants de fuite que les 30 mA supporteraient mal.',
    },
    { type: 'fiche', id: 'abc-electric', why: 'Moteurs, démarrages, protections et variateurs des installations de climatisation.' },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Fluides inflammables dans les locaux occupés',
      rows: [
        { norm: 'EN 378-1', rule: 'Limites de charge selon la classe du fluide, le type d’occupation et le volume du plus petit local ; mesures supplémentaires permettant d’aller au-delà.', result: 'R32 : 0,061 kg/m³ sans mesure' },
        { norm: 'IEC 60335-2-40 (annexe GG)', rule: 'Charges plus élevées d’A2L admises avec détection, ventilation ou vannes d’isolement.', result: '9 kg avec kit de sécurité' },
        { norm: 'ISO 5149-1', rule: 'Équivalent international de l’EN 378.', result: 'même approche' },
        { norm: 'ASHRAE 15 / UL 60335-2-40', rule: 'Règles nord-américaines équivalentes pour les A2L (détection, ventilation, limites).', result: 'même approche' },
      ],
    },
    {
      type: 'regional',
      text: 'Le VRV exige un installateur formé par le fabricant : brasures sous azote, raccords Y orientés correctement, tirage au vide long, charge calculée au gramme près. Exigez la mise en service par le fabricant ou son représentant agréé, sinon la garantie tombe. Prévoyez aussi les pièces de rechange critiques (cartes électroniques des groupes) : les délais d’importation peuvent dépasser un mois.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Splits pour les petites puissances, VRV de 50 à 400 kW environ, eau glacée au-delà : la frontière dépend aussi de l’usage et des compétences locales.',
        'Un VRV se dimensionne zone par zone, puis groupe par groupe avec un foisonnement et un taux de connexion.',
        'Les longueurs et dénivelés du réseau frigorifique sont limités par le fabricant.',
        'Avec un fluide A2L, on vérifie la charge face au plus petit local desservi et on ajoute des mesures si nécessaire.',
        'La liste des équipements donne à l’électricien les puissances, les courants et les protections, y compris le type de différentiel.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un circuit VRV de 28 kW alimente des unités intérieures totalisant 38 kW. Le taux de connexion est-il admis ?',
      solution: ['38 / 28 ≈ 136 %.', 'Au-delà de 130 % : non. Il faut un groupe plus gros ou répartir les unités sur un autre circuit.'],
    },
    {
      type: 'exercise',
      question: 'Quelle surface minimale de local permettrait d’accepter 9 kg de R32 sans mesure, avec 2,7 m sous plafond ?',
      solution: ['V ≥ 9 / 0,061 ≈ 148 m³.', 'Surface ≥ 148 / 2,7 ≈ 55 m² : seule la salle de réunion et les plateaux ouverts conviennent, pas les bureaux individuels.'],
    },
  ],
};
