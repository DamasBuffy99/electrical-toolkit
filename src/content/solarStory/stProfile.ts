import { TopicContent } from '../types';

export const stProfileContent: TopicContent = {
  title: 'Autoconsommer sans injecter',
  subtitle: 'Tropica paie près de 100 millions de FCFA d’électricité par an et son toit reste vide. Ibrahim Traoré veut des panneaux, mais le distributeur refuse toute injection sur son réseau. Fanta Coulibaly part du profil de charge de l’usine pour fixer la bonne puissance.',
  blocks: [
    { type: 'scene', text: 'Mois 1 · Usine Tropica, avec Ibrahim Traoré et Paul Ndiaye (maintenance)' },
    {
      type: 'objectives',
      items: [
        'Établir le profil de charge d’un site industriel, jour ouvré et jour chômé.',
        'Dimensionner une centrale en autoconsommation à partir de la charge minimale de jour.',
        'Comprendre le principe de l’injection zéro : compteur, régulation, sécurités.',
        'Estimer l’énergie perdue par écrêtement les jours de faible charge.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '≈ 3 MWh/j', label: 'consommation d’un jour de production' },
        { value: '120 kW', label: 'charge minimale de jour, en semaine' },
        { value: '99 kWc / 80 kW', label: 'champ PV / onduleurs' },
        { value: '≈ 9 %', label: 'production écrêtée sur l’année (dimanches, arrêts)' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'Depuis l’extension, la facture a encore grimpé. J’ai 1 200 m² de toit qui ne servent à rien. Mais le distributeur m’a prévenu : pas un kilowattheure ne doit repartir sur son réseau, sinon il me coupe.',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'C’est ce qu’on appelle l’autoconsommation sans injection. Ça se fait très bien, à une condition : que chaque kilowattheure produit soit consommé sur place à l’instant même. La question n’est donc pas « combien de panneaux tiennent sur le toit », mais « combien l’usine consomme quand le soleil brille ».',
    },

    { type: 'heading', text: '1 · Le profil de charge de l’usine' },
    {
      type: 'text',
      text: 'Paul a posé un analyseur de réseau sur l’arrivée du TGBT pendant deux semaines. Fanta en tire les puissances moyennes absorbées par atelier, le jour (6 h – 18 h) et la nuit (18 h – 6 h), pour un jour de production en deux équipes (6 h – 22 h).',
    },
    {
      type: 'consumptionSheet',
      sheet: {
        project: 'Usine Tropica — jour de production',
        note: 'Puissances moyennes absorbées mesurées, et non puissances de plaque.',
        items: [
          { name: 'Compresseur d’air (55 kW, démarreur progressif)', power: 40000, qty: 1, hDay: 12, hNight: 4, surge: 120000 },
          { name: 'Pompes de process (15 kW)', power: 11000, qty: 4, hDay: 12, hNight: 4 },
          { name: 'Groupe froid de la chambre froide', power: 20000, qty: 1, hDay: 12, hNight: 12 },
          { name: 'Pasteurisateur (résistances)', power: 60000, qty: 1, hDay: 10, hNight: 3 },
          { name: 'Convoyeurs et remplisseuse', power: 5500, qty: 2, hDay: 12, hNight: 4 },
          { name: 'Pompe de nettoyage en place (NEP)', power: 11000, qty: 1, hDay: 2, hNight: 1 },
          { name: 'Éclairage, bureaux, climatisation', power: 18000, qty: 1, hDay: 10, hNight: 2 },
        ],
      },
    },
    {
      type: 'table',
      headers: ['Heure', 'Charge jour ouvré (kW)', 'PV ciel clair (kW)', 'Charge dimanche (kW)', 'PV autorisé dimanche (kW)'],
      rows: [
        ['7 h', '150', '8', '30', '8'],
        ['8 h', '175', '25', '30', '25'],
        ['9 h', '190', '45', '30', '27'],
        ['10 h', '200', '62', '30', '27'],
        ['11 h', '195', '74', '30', '27'],
        ['12 h', '190', '78', '30', '27'],
        ['13 h', '185', '76', '30', '27'],
        ['14 h (relève)', '120', '66', '30', '27'],
        ['15 h', '195', '50', '30', '27'],
        ['16 h', '180', '32', '30', '27'],
        ['17 h', '170', '14', '30', '14'],
        ['Total', '≈ 2 000 kWh', '530 kWh', '≈ 330 kWh', '263 kWh'],
      ],
    },
    {
      type: 'note',
      text: 'Deux enseignements. En semaine, l’usine ne descend jamais sous 120 kW en journée, même à la relève de 14 h : tout ce que produiront 80 kW d’onduleurs sera consommé. Le dimanche, seule la chambre froide tourne (≈ 30 kW) : la moitié de la production d’une journée ensoleillée devra être bridée.',
    },

    { type: 'heading', text: '2 · Combien de kilowatts-crête ?' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'panels' }, caption: 'Sans batterie ni injection, la production doit suivre la consommation à chaque instant' },
    {
      type: 'calc',
      title: 'Puissance de la centrale',
      steps: [
        { label: 'Charge minimale de jour en semaine, moins 10 kW de marge de régulation', formula: 'P_{AC} ≤ 120 − 10 = 110 kW' },
        { label: 'Pan sud du toit : 600 m², moins les retraits et cheminements pompiers', formula: '≈ 470 m² utiles  →  180 modules de 2,58 m²' },
        { label: 'Puissance crête', formula: '180 × 550 = 99 000 Wc ≈ 99 kWc' },
        { label: 'Deux onduleurs réseau de 40 kW', formula: 'P_{AC} = 80 kW ≤ 110 kW ✓   ;   ratio \\frac{99}{80} ≈ 1,24' },
      ],
      result: '99 kWc et 80 kW d’onduleurs : aucun écrêtement les jours de production',
    },
    {
      type: 'decision',
      title: 'Taille de la centrale',
      choice: '≈ 100 kWc sur le pan sud, 2 onduleurs réseau de 40 kW, sans batterie',
      reasons: [
        'La puissance AC reste sous la charge minimale de jour : en semaine, tout est autoconsommé.',
        'Le pan sud suffit ; le pan nord (perte de 6 à 8 % à 10° de pente) reste une réserve pour une phase 2.',
        'Pas de batterie : l’usine consomme surtout de jour, le stockage ne serait pas rentable au prix actuel du kWh.',
      ],
      rejected: '200 kWc sur les deux pans : écrêtement aussi en semaine dès que la charge baisse, et plus de 25 % de la production perdue les dimanches et pendant l’arrêt annuel.',
    },
    { type: 'fiche', id: 'pv-inverter-types', why: 'Onduleur réseau, hybride ou autonome : lequel pour l’autoconsommation ?' },

    { type: 'heading', text: '3 · Ne jamais injecter : l’injection zéro' },
    {
      type: 'text',
      text: 'Un compteur de puissance est posé sur l’arrivée du transformateur, avec trois transformateurs de courant 600/5 A. Un contrôleur lit la puissance importée en permanence et ajuste la consigne des onduleurs pour que l’usine importe toujours un peu du réseau. Si la charge chute, les onduleurs réduisent leur production en moins d’une seconde.',
    },
    {
      type: 'calc',
      title: 'La régulation un dimanche ensoleillé',
      steps: [
        { label: 'Consigne : garder au moins 3 kW d’import', formula: 'P_{PV} ≤ P_{charge} − 3 = 30 − 3 = 27 kW' },
        { label: 'Énergie bridée sur la journée (tableau)', formula: '530 − 263 = 267 kWh  →  50 %' },
        { label: 'Jours non ouvrés : 52 dimanches + 13 jours fériés et d’arrêt, journée moyenne de 376 kWh', formula: '65 × 376 × 0,5 ≈ 12 MWh/an' },
        { label: 'Production annuelle attendue (étape 4)', formula: '\\frac{12}{139} ≈ 9 %' },
      ],
      result: 'Environ 9 % de la production perdue par l’injection zéro : le prix à payer pour se passer de batterie',
    },
    {
      type: 'table',
      headers: ['Sécurité', 'Réglage', 'Rôle'],
      rows: [
        ['Consigne d’import minimal', '3 kW', 'marge contre les variations rapides de charge'],
        ['Perte de communication compteur ↔ onduleurs', 'onduleurs à 0 W en moins de 5 s', 'aucune injection si la mesure disparaît'],
        ['Relais de retour de puissance (ANSI 32)', 'export > 2 kW pendant 2 s', 'ouvre le disjoncteur de la centrale en dernier recours'],
        ['Délestage brutal d’une machine de 60 kW', 'onduleurs réduits en < 1 s', 'export bref, toléré par le relais temporisé'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'team',
      text: 'Et si le pasteurisateur déclenche d’un coup à midi ? On passe de 190 à 130 kW en un instant, avec 78 kW de soleil.',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'On importe toujours 52 kW, il ne se passe rien. Le seul cas délicat, c’est le dimanche ou à l’arrêt d’une équipe : c’est là que la régulation travaille. Et si elle échoue, le relais de retour de puissance ouvre la centrale avant que le distributeur ne voie quoi que ce soit.',
    },
    { type: 'fiche', id: 'pv-design-steps', why: 'Les étapes de conception d’une installation photovoltaïque.' },

    { type: 'heading', text: '4 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Autoconsommation et limitation d’injection',
      rows: [
        { norm: 'France — Enedis (CACSI)', rule: 'Même sans injection, l’installation est déclarée au gestionnaire de réseau par une convention d’autoconsommation sans injection.', result: 'déclaration obligatoire' },
        { norm: 'IEC 62116', rule: 'Essai de protection contre l’îlotage des onduleurs raccordés au réseau.', result: 'onduleurs certifiés' },
        { norm: 'UL 1741 (PCS) / IEEE 1547-2018', rule: 'Systèmes de contrôle de puissance : limitation d’export certifiée, temps de réponse.', result: 'pratique nord-américaine' },
        { norm: 'Réglementation nationale', rule: 'Autoproduction déclarée au ministère ou au régulateur ; accord écrit du distributeur sur l’absence d’injection.', result: 'dossier de Tropica' },
      ],
    },
    {
      type: 'regional',
      text: 'Dans plusieurs pays d’Afrique de l’Ouest, le cadre de l’injection des autoproducteurs (rachat, comptage net) est encore en construction, et les distributeurs refusent souvent l’injection par crainte pour la stabilité de leurs réseaux. L’injection zéro, avec compteur à l’arrivée et relais de retour de puissance, est devenue la norme de fait pour les toitures industrielles. Le jour où un tarif de rachat existera, il suffira de modifier la consigne.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'En autoconsommation sans batterie, la puissance AC se fixe sur la charge minimale pendant les heures de soleil.',
        'L’injection zéro repose sur un compteur à l’arrivée, une régulation rapide des onduleurs et un relais de retour de puissance en secours.',
        'Les jours de faible charge, la production est bridée : il faut chiffrer cette perte.',
        'La surface du toit n’est qu’une limite ; c’est le profil de charge qui dimensionne.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Pendant l’arrêt annuel de deux semaines, seuls les bureaux et la chambre froide tournent (45 kW). Quelle puissance PV le contrôleur autorise-t-il ? Et à quelle heure commence l’écrêtement par ciel clair ?',
      solution: ['P_PV ≤ 45 − 3 = 42 kW.', 'Le tableau donne 45 kW à 9 h : l’écrêtement commence peu avant 9 h et dure jusque vers 15 h.'],
    },
    {
      type: 'exercise',
      question: 'Ibrahim propose de supprimer la marge de 3 kW pour gagner de l’énergie. Quel est le risque ?',
      solution: ['À la moindre baisse de charge, l’usine exporte avant que la régulation ne réagisse.', 'Le relais ANSI 32 finirait par ouvrir la centrale plusieurs fois par jour : on perdrait bien plus que 3 kW.'],
    },
  ],
};
