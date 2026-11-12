import { TopicContent } from '../types';

export const buildingTeamContent: TopicContent = {
  title: 'Toute une équipe autour du projet',
  subtitle: 'Sur la villa, Awa concevait et surveillait, Moussa réalisait. Sur un immeuble, chaque rôle devient un métier à part entière. Fatou découvre qui elle va engager, dans quel ordre, et pourquoi chacun est indispensable.',
  blocks: [
    { type: 'scene', text: 'Mois 2 · Bureau de Fatou Sow' },
    {
      type: 'objectives',
      items: [
        'Connaître les acteurs d’un projet collectif et leur ordre d’entrée.',
        'Distinguer conception, supervision, travaux, achats et plans d’exécution.',
        'Comprendre le rôle du bureau de contrôle et le circuit des documents.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '2', label: 'ingénieurs côté bureau d’études' },
        { value: '3', label: 'ingénieurs côté entreprise' },
        { value: '1', label: 'bureau de contrôle indépendant' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Pour la villa des Mensah, il y avait vous et un électricien. Ici, mon architecte me parle d’appel d’offres, de bureau de contrôle, de superviseur… J’ai l’impression de payer beaucoup de monde pour la même chose.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Sur une maison, une même personne peut tenir plusieurs rôles. Sur un immeuble de seize logements avec un poste de transformation, ce n’est plus possible : il y a trop de plans, trop de matériel et trop de risques. Chacun a un métier précis, et surtout, ceux qui contrôlent ne sont pas ceux qui construisent.',
    },
    { type: 'illustration', name: 'org-chart', caption: 'La promotrice et les sociétés qu’elle engage' },

    { type: 'heading', text: '1 · Dans quel ordre Fatou engage chacun' },
    {
      type: 'table',
      headers: ['Ordre', 'Qui', 'Pour quoi faire', 'Dans ce projet'],
      rows: [
        ['1', 'Le bureau d’études (consultant)', 'concevoir le projet et rédiger le dossier d’appel d’offres', 'Lumen Ingénierie : Awa Diallo (conception), Marc Adjovi (supervision)'],
        ['2', 'L’entreprise (entrepreneur)', 'acheter le matériel et construire', 'Électra BTP, retenue après appel d’offres'],
        ['3', 'Le superviseur', 'surveiller le chantier pour le compte de Fatou : qualité, sécurité, délais', 'souvent le même bureau d’études : ici Marc Adjovi'],
        ['En parallèle', 'Le bureau de contrôle', 'vérifier, en organisme indépendant, la conformité aux normes et à la sécurité', 'Ndeye Faye, inspectrice'],
      ],
    },
    {
      type: 'text',
      text: 'Le bureau d’études passe en premier : sans plans, aucune entreprise ne peut chiffrer. Awa produit donc un dossier de consultation (plans, cahier des charges, bordereau des quantités). Trois entreprises répondent ; Fatou retient Électra BTP, la mieux disante sur la technique et le prix. Ce n’est qu’ensuite que le chantier démarre, sous la supervision de Marc.',
    },
    { type: 'fiche', id: 'project-parties', why: 'Les acteurs et l’ordre dans lequel le propriétaire les engage.' },

    { type: 'heading', text: '2 · Côté bureau d’études : deux ingénieurs' },
    { type: 'illustration', name: 'eng-design', caption: 'L’ingénieure de conception, au bureau' },
    {
      type: 'table',
      headers: ['Poste', 'Personne', 'Son travail sur la Résidence'],
      rows: [
        ['Ingénieure de conception', 'Awa Diallo', 'bilan de puissance, poste, colonnes, protections, câbles, plans et cahier des charges'],
        ['Ingénieur de supervision', 'Marc Adjovi', 'sur le chantier chaque semaine : vérifie que l’entreprise réalise ce qui est dessiné, approuve le matériel et les plans d’exécution, réceptionne'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Marc Adjovi (supervision)',
      role: 'team',
      text: 'Madame Sow, je suis vos yeux sur le chantier. Quand l’entreprise voudra changer un matériel ou un tracé, c’est moi qui vérifierai que ça respecte la conception d’Awa, et je vous dirai si ça change le coût ou la sécurité.',
    },
    { type: 'illustration', name: 'eng-supervision', caption: 'L’ingénieur de supervision, sur le chantier' },

    { type: 'heading', text: '3 · Côté entreprise : trois ingénieurs' },
    {
      type: 'table',
      headers: ['Poste', 'Personne', 'Son travail sur la Résidence'],
      rows: [
        ['Ingénieur travaux (exécution)', 'Rachid Bamba', 'organise les équipes d’électriciens, le planning, la sécurité du chantier ; fait poser ce qui est approuvé'],
        ['Ingénieure bureau technique (achats)', 'Clarisse Houndé', 'consulte les fournisseurs, compare les offres, prépare les demandes d’approbation du matériel'],
        ['Ingénieur shop drawings', 'Didier Kouassi', 'transforme les plans de conception en plans d’exécution détaillés, adaptés au bâtiment réel et au matériel acheté'],
      ],
    },
    { type: 'illustration', name: 'eng-technical-office', caption: 'Le bureau technique : fournisseurs, offres, approbations' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Pourquoi refaire des plans, puisque Madame Diallo en a déjà fait ?',
    },
    {
      type: 'dialogue',
      speaker: 'Didier Kouassi (shop drawings)',
      role: 'team',
      text: 'Les plans de conception disent quoi faire : « une colonne montante de 35 mm² dans la gaine ». Mes plans disent comment le faire avec le matériel réellement acheté : le modèle exact du coffret, ses dimensions, la position des fixations, le passage entre les poutres. Ils sont soumis à Marc pour approbation avant toute pose.',
    },
    { type: 'illustration', name: 'eng-shop-drawing', caption: 'Les shop drawings : comment réaliser, avec le matériel acheté' },

    { type: 'heading', text: '4 · Le bureau de contrôle' },
    {
      type: 'text',
      text: 'Le bureau de contrôle est un organisme indépendant, ni du côté du concepteur ni du côté de l’entreprise. Il examine les plans, assiste aux essais et rédige un rapport de conformité. Pour un immeuble d’habitation avec poste de transformation, l’assureur, la banque de Fatou ou l’administration peuvent l’exiger.',
    },
    {
      type: 'dialogue',
      speaker: 'Ndeye Faye (bureau de contrôle)',
      role: 'team',
      text: 'Je ne conçois rien et je ne construis rien : je vérifie. Si je trouve un écart avec la norme, j’émets une « réserve ». Le bâtiment n’est réceptionné qu’une fois toutes les réserves levées.',
    },

    { type: 'heading', text: '5 · Le circuit des documents' },
    {
      type: 'bullets',
      items: [
        'Awa (conception) → plans de conception et cahier des charges.',
        'Clarisse (achats) → demande d’approbation de chaque matériel (fiche technique du fabricant) → Marc approuve ou refuse.',
        'Didier (shop drawings) → plans d’exécution → Marc approuve.',
        'Rachid (travaux) → fait poser selon les plans approuvés.',
        'Marc et Ndeye → essais, réserves, réception.',
        'Didier → plans de récolement, tels que construits, remis à Fatou.',
      ],
    },
    { type: 'illustration', name: 'drawings-evolution', caption: 'Des plans de conception aux plans de récolement' },
    { type: 'fiche', id: 'drawings-coordination', why: 'Plans de conception, shop drawings et plans de récolement.' },
    {
      type: 'note',
      text: 'Sur la villa des Mensah, ces rôles existaient aussi, mais tenus par moins de personnes : Awa concevait et supervisait ; l’entreprise de Moussa achetait, dessinait le détail et réalisait. Plus le projet grandit, plus les rôles se séparent.',
    },
    {
      type: 'regional',
      text: 'Les marchés publics et les projets financés par une banque imposent presque toujours un appel d’offres, une mission de supervision et un contrôle technique. Les organismes de contrôle agréés diffèrent selon les pays : renseignez-vous dès le début, car leur avis peut conditionner l’assurance du bâtiment et le raccordement par le distributeur.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Ordre d’engagement : bureau d’études, puis entreprise (après appel d’offres), supervision pendant le chantier ; le bureau de contrôle intervient en parallèle.',
        'Côté bureau d’études : ingénieur de conception et ingénieur de supervision.',
        'Côté entreprise : ingénieur travaux, ingénieur bureau technique (achats) et ingénieur shop drawings.',
        'Le matériel et les plans d’exécution sont approuvés par la supervision avant d’être posés.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Rachid veut poser les coffrets de palier avant que Didier ait fait approuver ses plans, « pour gagner du temps ». Que répond Marc ?',
      solution: [
        'Non : sans plan approuvé, rien ne garantit que le coffret, ses dimensions et ses fixations correspondent à la conception et au matériel approuvé.',
        'Si la pose est refusée ensuite, il faudra démonter : on perd plus de temps qu’on n’en gagne. Marc s’engage plutôt à examiner les plans rapidement.',
      ],
    },
    {
      type: 'exercise',
      question: 'Pourquoi le superviseur est-il payé par Fatou, et non par l’entreprise ?',
      solution: [
        'Il doit pouvoir refuser un travail ou un matériel sans conflit d’intérêts. S’il était payé par l’entreprise, il serait juge et partie.',
        'C’est la même logique pour le bureau de contrôle, indépendant des deux.',
      ],
    },
  ],
};
