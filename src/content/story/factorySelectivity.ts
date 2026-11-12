import { TopicContent } from '../types';

export const factorySelectivityContent: TopicContent = {
  title: 'Court-circuit et sélectivité',
  subtitle: 'L’an dernier, un court-circuit sur une pompe a fait sauter le disjoncteur général : toute l’usine s’est arrêtée trois heures. Awa explique comment régler les protections pour que seul l’appareil en défaut s’arrête.',
  blocks: [
    { type: 'scene', text: 'Mois 3 · Bureau d’Ibrahim Traoré' },
    {
      type: 'objectives',
      items: [
        'Calculer le courant de court-circuit à chaque niveau.',
        'Connaître les trois façons d’obtenir la sélectivité.',
        'Régler les protections du TGBT et des départs.',
        'Coordonner avec le fusible MT.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '14,4 kA', label: 'court-circuit au TGBT' },
        { value: '0,2 s', label: 'retard du général' },
        { value: '0,1 s', label: 'retard du départ 400 A' },
        { value: '25 A', label: 'fusible MT' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'Ce jour-là, on a perdu 2 000 litres de jus en cours de pasteurisation, pour une seule pompe défectueuse. Je ne veux plus jamais revivre ça.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Ce que vous décrivez a un nom : un défaut de sélectivité. Quand un défaut survient, c’est la protection la plus proche qui doit couper, et elle seule. Si le disjoncteur général coupe en même temps que celui de la pompe, c’est que leurs réglages se chevauchent. On va les démêler.',
    },
    { type: 'illustration', name: 'factory-sld', props: { highlight: 'selectivity' }, caption: 'Un défaut sur une pompe : seul son départ doit s’ouvrir' },

    { type: 'heading', text: '1 · D’abord, combien d’ampères en court-circuit ?' },
    {
      type: 'text',
      text: 'Comme à la Résidence Les Palmiers, Awa calcule le courant de court-circuit à chaque niveau. Avec le nouveau transformateur de 400 kVA, il est bien plus fort.',
    },
    { type: 'formula', text: 'Au TGBT : I_{sc} ≈ \\frac{I_n}{u_k} = \\frac{577}{0,04} ≈ 14,4 kA' },
    {
      type: 'table',
      headers: ['Point', 'I_sc estimé', 'Pouvoir de coupure retenu'],
      rows: [
        ['TGBT (ACB général et départs)', '≈ 14 kA', '25 kA'],
        ['Armoire de la salle des machines (après 40 m de 150 mm²)', '≈ 11 kA', '25 kA (disjoncteurs-moteurs)'],
        ['Bornes d’une pompe (après 60 m de 6 mm²)', '≈ 0,9 kA', ''],
      ],
    },
    {
      type: 'text',
      text: 'Le courant de court-circuit chute fortement au bout du câble de 6 mm² de la pompe : sa résistance (environ 225 mΩ) domine tout le reste. C’est ce qui va permettre de séparer les protections.',
    },
    { type: 'fiche', id: 'short-circuit', why: 'Calcul du courant de court-circuit, niveau par niveau.' },

    { type: 'heading', text: '2 · Trois façons d’obtenir la sélectivité' },
    { type: 'illustration', name: 'selectivity', caption: 'Deux courbes de déclenchement qui ne se croisent pas : la sélectivité' },
    {
      type: 'table',
      headers: ['Méthode', 'Principe', 'Dans l’usine'],
      rows: [
        ['Par les courants (ampèremétrique)', 'le seuil magnétique de l’amont est au-dessus du plus fort défaut possible en aval', 'pompe : défaut ≈ 0,9 kA ; seuil du feeder 4 kA : le feeder ne bouge pas'],
        ['Par le temps (chronométrique)', 'l’amont attend un peu (100 à 200 ms) avant de couper', 'le général attend 200 ms, le feeder 100 ms'],
        ['Par les tables du fabricant', 'des essais garantissent la sélectivité entre deux modèles précis', 'Awa vérifie chaque paire de disjoncteurs dans les tables'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'Faire attendre le disjoncteur général pendant un court-circuit, ce n’est pas dangereux ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Deux dixièmes de seconde, c’est le temps qu’il faut au disjoncteur du départ pour couper avant lui. Le général et les jeux de barres sont choisis pour tenir ce court instant (on parle de tenue de courte durée). Et si le départ ne coupe pas, le général coupe quand même juste après : on garde toujours une protection de secours.',
    },

    { type: 'heading', text: '3 · Les réglages retenus' },
    {
      type: 'table',
      headers: ['Disjoncteur', 'Réglage long retard (surcharge)', 'Réglage court-circuit'],
      rows: [
        ['Pompe 15 kW (disjoncteur-moteur 32 A)', '28,3 A', 'instantané ≈ 13 × 32 ≈ 420 A'],
        ['Feeder de l’armoire (400 A)', '320 A', '4 kA, retard 100 ms'],
        ['Général TGBT (ACB 800 A)', '630 A', '6,3 kA, retard 200 ms'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Défaut aux bornes d’une pompe (≈ 0,9 kA) : seul le disjoncteur-moteur voit dépasser son seuil. La pompe s’arrête, le reste de l’usine continue.',
        'Défaut dans l’armoire (≈ 11 kA) : le feeder coupe après 100 ms ; le général, réglé à 200 ms, n’a pas le temps de réagir. La pasteurisation, alimentée par un autre départ, continue.',
        'Défaut au TGBT : seul le général peut couper. C’est le seul cas où toute l’usine s’arrête.',
      ],
    },
    {
      type: 'note',
      text: 'L’an dernier, le général était réglé sur son seuil minimal, sans retard : un défaut franc près de l’armoire dépassait à la fois le seuil du départ et le sien. Les deux ont coupé ensemble.',
    },

    { type: 'heading', text: '4 · Et en amont, le fusible MT' },
    {
      type: 'text',
      text: 'Côté 20 kV, le transformateur est protégé par des fusibles MT. Ils doivent tenir l’appel de courant à la mise sous tension du transformateur, et ne pas fondre pour un défaut basse tension que le disjoncteur général sait couper. Awa les choisit dans la table du fabricant du transformateur : 25 A pour 400 kVA en 20 kV, environ deux fois le courant nominal MT (11,5 A).',
    },
    { type: 'fiche', id: 'fuses', why: 'Fusibles BT et HT, calibres, coordination avec les disjoncteurs.' },
    { type: 'fiche', id: 'circuit-breaker', why: 'Réglages Ir, Im, retards et types de disjoncteurs.' },
    {
      type: 'regional',
      text: 'Le distributeur fixe souvent les réglages de la protection à la livraison MT : demandez-les avant de régler votre général, pour qu’ils soient sélectifs entre eux. Sinon, c’est le disjoncteur du distributeur qui coupe, et il faut attendre son agent pour réarmer.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Sélectivité : seule la protection la plus proche du défaut doit couper.',
        'On l’obtient par les seuils de courant, par des retards croissants vers l’amont, et on la vérifie dans les tables des fabricants.',
        'Le courant de court-circuit chute le long des câbles, ce qui aide à séparer les seuils.',
        'Tous les appareils doivent tenir le courant de court-circuit à leur emplacement, y compris pendant les retards.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un défaut franc survient sur le câble d’une pompe, tout près de l’armoire, avec un courant de 9 kA. Quels disjoncteurs le voient, et lequel coupe ?',
      solution: [
        '9 kA dépasse les trois seuils : celui du disjoncteur-moteur (420 A), celui du feeder (4 kA) et celui du général (6,3 kA).',
        'Les trois voient donc le défaut. Le disjoncteur-moteur coupe instantanément ; le feeder attendrait 100 ms et le général 200 ms : ils n’ont pas besoin d’agir.',
        'C’est la sélectivité chronométrique qui sauve la situation, à condition que le disjoncteur-moteur ait un pouvoir de coupure ≥ 11 kA.',
      ],
    },
    {
      type: 'exercise',
      question: 'Pourquoi ne pas régler le seuil du général à 15 kA, au-dessus de tout défaut possible, pour être sûr qu’il ne coupe jamais à tort ?',
      solution: [
        'Avec 14 kA au maximum au TGBT, un seuil de 15 kA ne serait jamais atteint : le général ne couperait plus aucun court-circuit, sauf par sa protection thermique, beaucoup trop lente.',
        'Il faut au contraire qu’il reste une protection de secours : on garde un seuil atteignable et on utilise le retard pour la sélectivité.',
      ],
    },
  ],
};
