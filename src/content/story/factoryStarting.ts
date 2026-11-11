import { TopicContent } from '../types';

export const factoryStartingContent: TopicContent = {
  title: 'Démarrer un moteur sans tout faire tomber',
  subtitle: 'Au démarrage, un moteur appelle six à huit fois son courant. Sur le transformateur, ça passe ; sur le groupe électrogène, ça peut tout arrêter. Awa choisit un mode de démarrage pour chaque machine.',
  blocks: [
    { type: 'scene', text: 'Mois 1 · Salle de réunion de l’usine' },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'team',
      text: 'Quand le compresseur démarre pendant qu’on est sur le groupe, tout s’éteint : les automates de la ligne d’embouteillage décrochent et il faut tout relancer. On a fini par interdire de démarrer le compresseur pendant les coupures.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'C’est exactement le problème du démarrage direct. Le moteur à l’arrêt se comporte presque comme un court-circuit : pendant quelques secondes, il tire environ sept fois son courant nominal. Le transformateur le supporte, mais votre groupe, beaucoup moins puissant en court-circuit, voit sa tension s’effondrer.',
    },
    { type: 'illustration', name: 'motor-start', caption: 'Courant de démarrage selon le mode : direct, étoile-triangle, démarreur progressif, variateur' },

    { type: 'heading', text: '1 · Combien le démarrage fait-il chuter la tension ?' },
    {
      type: 'text',
      text: 'Une estimation simple : la chute de tension au démarrage vaut à peu près la puissance appelée au démarrage divisée par la puissance de court-circuit de la source. Plus la source est « forte », moins elle bouge.',
    },
    { type: 'formula', text: 'ΔU (%) ≈ \\frac{S_{démarrage}}{S_{cc}} × 100' },
    { type: 'formula', text: 'Compresseur en direct : I_d ≈ 7 × 98 ≈ 690 A   ;   S_{démarrage} = √3 × 400 × 690 ≈ 478 kVA' },
    {
      type: 'table',
      headers: ['Source', 'Puissance de court-circuit', 'Chute au démarrage direct'],
      rows: [
        ['Transformateur 400 kVA (u_k = 4 %)', '400 / 0,04 = 10 MVA', '478 / 10 000 ≈ 5 % : acceptable'],
        ['Groupe 250 kVA (réactance ≈ 15 %)', '250 / 0,15 ≈ 1,7 MVA', '478 / 1 670 ≈ 29 % : le groupe décroche'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'Donc mon groupe est trop petit ? Il faudrait un 600 kVA ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Ce serait la solution la plus chère. On peut plutôt adoucir le démarrage. Si le compresseur n’appelle plus que trois fois son courant, la chute sur le groupe tombe autour de 12 % : les automates tiennent et votre groupe actuel suffit.',
    },

    { type: 'heading', text: '2 · Les modes de démarrage' },
    {
      type: 'table',
      headers: ['Mode', 'Courant d’appel', 'Couple au démarrage', 'Pour quoi ?'],
      rows: [
        ['Direct', '6 à 8 × In', 'maximal', 'petits moteurs, réseau fort ; simple et robuste'],
        ['Étoile-triangle', '≈ 2,3 × In, avec un pic au passage', 'réduit (≈ 1/3)', 'machines qui démarrent à vide ; moteur couplable en triangle'],
        ['Démarreur progressif', '≈ 3 × In, réglable', 'réduit, progressif', 'pompes, compresseurs, ventilateurs ; pas de variation de vitesse ensuite'],
        ['Variateur de fréquence', '≈ 1,2 × In', 'nominal dès l’arrêt', 'quand la vitesse doit varier ; économies d’énergie'],
      ],
    },
    { type: 'illustration', name: 'tech-stardelta', caption: 'L’étoile-triangle : 230 V par enroulement au démarrage, 400 V en marche' },
    { type: 'fiche', id: 'voltage-drop', why: 'Chute de tension et cas des moteurs au démarrage.' },

    { type: 'heading', text: '3 · Le choix pour chaque machine' },
    {
      type: 'table',
      headers: ['Machine', 'Mode retenu', 'Pourquoi'],
      rows: [
        ['Compresseur 55 kW', 'démarreur progressif', 'il démarre en charge réduite ; on limite l’appel à 3 × In pour pouvoir le relancer sur groupe'],
        ['Pompes de process 15 kW', 'direct', '7 × 28 ≈ 200 A seulement : la chute reste faible, même sur groupe (≈ 8 %)'],
        ['Convoyeurs 7,5 kW', 'variateur', 'la vitesse de la ligne doit s’ajuster à la remplisseuse'],
        ['Groupe froid', 'démarreur du fabricant', 'fourni et garanti avec la machine'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'team',
      text: 'Pourquoi pas des variateurs partout, alors ? C’est le plus doux.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Parce qu’un variateur coûte plus cher, chauffe, demande de la ventilation et produit des harmoniques qui perturbent le réseau. Il se justifie quand la vitesse doit varier : là, il fait même économiser de l’énergie. Pour une pompe qui tourne toujours à la même vitesse, le démarrage direct est imbattable en simplicité.',
    },
    {
      type: 'note',
      text: 'Une règle de prudence : on évite les démarrages simultanés. L’automate de l’usine décale les démarrages de quelques secondes après une coupure, pour que le groupe n’ait jamais à encaisser deux appels en même temps.',
    },
    {
      type: 'regional',
      text: 'Avec des coupures quotidiennes, chaque redémarrage de l’usine sur le groupe puis sur le réseau multiplie les démarrages de moteurs. C’est pour cela qu’en Afrique de l’Ouest on dimensionne les démarrages en pensant d’abord au groupe électrogène, le maillon le plus faible.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Un démarrage direct appelle 6 à 8 fois le courant nominal pendant quelques secondes.',
        'Chute de tension au démarrage ≈ S de démarrage / S de court-circuit de la source : un groupe est bien plus sensible qu’un transformateur.',
        'Étoile-triangle et démarreur progressif réduisent l’appel ; le variateur le supprime et permet de faire varier la vitesse.',
        'On choisit machine par machine, et on décale les démarrages.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Avec le démarreur progressif réglé à 3 × In, quelle chute de tension le compresseur provoque-t-il sur le groupe de 250 kVA ?',
      solution: [
        'I_d = 3 × 98 ≈ 294 A ; S = √3 × 400 × 294 ≈ 204 kVA.',
        'ΔU ≈ 204 / 1 670 ≈ 12 % : la tension reste au-dessus du seuil où les automates décrochent (souvent −15 %).',
      ],
    },
    {
      type: 'exercise',
      question: 'Pourquoi l’étoile-triangle ne conviendrait-il pas à une pompe qui doit démarrer contre une forte pression ?',
      solution: [
        'En étoile, le couple de démarrage tombe à environ un tiers du couple direct.',
        'Si la pompe demande un fort couple dès l’arrêt, le moteur n’accélère pas assez en étoile ; au passage en triangle, il subit un nouvel appel violent. On préfère alors un démarreur progressif ou un variateur.',
      ],
    },
  ],
};
