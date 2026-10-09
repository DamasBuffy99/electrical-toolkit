import { TopicContent } from '../../types';

export const abcPhysicsContent: TopicContent = {
  title: 'Chaleur, pression et changements d’état',
  subtitle: 'Les lois physiques que le frigoriste utilise tous les jours, parfois sans le savoir',
  blocks: [
    {
      type: 'text',
      text: "Un climatiseur n’est qu’une application astucieuse de quelques lois physiques : la chaleur va du chaud vers le froid, un liquide qui s’évapore absorbe beaucoup d’énergie, et la température d’ébullition dépend de la pression. Cette leçon, tirée de « l’ABC de la climatisation », pose ces bases avant d’ouvrir le circuit frigorifique.",
    },
    { type: 'illustration', name: 'tech-heating-curve', caption: '1 kg d’eau : la chaleur sensible fait monter la température, la chaleur latente change l’état' },

    { type: 'heading', text: 'Chaleur et température : deux choses différentes' },
    {
      type: 'bullets',
      items: [
        'La chaleur est une énergie : celle de l’agitation des molécules. Elle se mesure en joules (J, kJ) ; une puissance thermique en watts (1 W = 1 J/s).',
        'La température mesure le niveau d’agitation (°C, ou kelvins : T(K) = T(°C) + 273).',
        'Spontanément, la chaleur va toujours du corps chaud vers le corps froid (Clausius). Deux corps à la même température n’échangent rien.',
        'Pour la faire aller du froid vers le chaud — c’est le but d’un climatiseur — il faut une machine et du travail : le compresseur.',
      ],
    },
    {
      type: 'warning',
      text: "Le livre attribue l’impossibilité du transfert spontané du froid vers le chaud au « premier principe » de la thermodynamique. C’est en fait le SECOND principe (énoncé de Clausius). Le premier principe dit que l’énergie se conserve : c’est lui qui donne Q2 = Q1 + W au condenseur.",
    },

    { type: 'heading', text: 'Les trois modes de transfert de chaleur' },
    {
      type: 'bullets',
      items: [
        'Conduction : à travers un solide (un mur, la paroi d’un tube). Plus l’écart de température est grand, plus le flux est fort (loi de Fourier). Les bons conducteurs électriques (cuivre, aluminium) sont aussi de bons conducteurs thermiques : c’est pour cela qu’on fait les échangeurs en cuivre et aluminium.',
        'Convection : dans un fluide (air, eau) qui se met en mouvement. L’air chaud, plus léger, monte : c’est la stratification des grands volumes.',
        'Rayonnement : sans contact, même dans le vide — le soleil sur une façade.',
      ],
    },
    { type: 'illustration', name: 'clim-heat-gains', caption: 'Les apports d’un local combinent les trois modes : conduction, convection, rayonnement' },

    { type: 'heading', text: 'Chaleur sensible et chaleur latente' },
    {
      type: 'text',
      text: "Chauffer 1 litre d’eau de 0 à 100 °C demande 419 kJ : c’est de la chaleur sensible, on la « sent » au thermomètre (4,18 kJ par kg et par degré). Mais pour transformer ensuite cette eau en vapeur, il faut 2 257 kJ supplémentaires… sans que la température bouge de 100 °C : c’est la chaleur latente de vaporisation, plus de 5 fois plus grande.",
    },
    {
      type: 'table',
      headers: ['Changement d’état', 'Sens', 'Chaleur latente de l’eau'],
      rows: [
        ['Fusion / solidification', 'solide ⇄ liquide', '335 kJ/kg'],
        ['Vaporisation / condensation (liquéfaction)', 'liquide ⇄ gaz', '2 257 kJ/kg (à 100 °C)'],
        ['Sublimation', 'solide → gaz directement', '—'],
      ],
    },
    {
      type: 'note',
      text: "C’est tout le secret du froid : un fluide qui s’évapore dans l’évaporateur absorbe énormément de chaleur à température constante. Et en climatisation, la puissance totale = puissance sensible (baisser la température de l’air) + puissance latente (condenser sa vapeur d’eau).",
    },
    {
      type: 'warning',
      text: "Le livre écrit la chaleur latente de fusion de la glace « 335 kJ/kg.K ». L’unité correcte est le kJ/kg : une chaleur latente ne dépend pas d’un écart de température, puisque celle-ci reste constante pendant le changement d’état.",
    },

    { type: 'heading', text: 'La pression : absolue, relative, vide' },
    { type: 'formula', text: 'P = F / S   (1 Pa = 1 N/m² ; 1 bar = 100 000 Pa ; 1 psi ≈ 0,069 bar)' },
    {
      type: 'bullets',
      items: [
        'Pression atmosphérique au niveau de la mer : 1,013 bar. Elle baisse avec l’altitude.',
        'Pression relative : celle qu’affiche le manomètre du frigoriste, dont le zéro est la pression atmosphérique. Elle peut être négative (dépression).',
        'Pression absolue : mesurée depuis le vide parfait, toujours positive.',
      ],
    },
    { type: 'formula', text: 'p absolue = p relative + 1,013 bar' },
    { type: 'illustration', name: 'tech-pressure', caption: 'Les deux échelles de pression : les diagrammes de fluides utilisent la pression absolue' },
    {
      type: 'warning',
      text: "Le livre donne à un endroit une pression atmosphérique de « 1,033 bar » et ailleurs 1,013 bar. La bonne valeur est 1,013 bar (= 1 atmosphère). Le chiffre 1,033 correspond à l’ancienne unité kg/cm² (1 atm = 1,033 kgf/cm²).",
    },
    {
      type: 'text',
      text: 'Instruments : baromètre (pression atmosphérique), manomètre à tube de Bourdon ou électronique (pressions du circuit), vacuomètre (vide, de 0 à −1 bar relatif ou en mbar absolus).',
    },

    { type: 'heading', text: 'Pression et température d’ébullition sont liées' },
    {
      type: 'text',
      text: "L’eau bout à 100 °C au niveau de la mer, mais à 85 °C à 4 800 m d’altitude. Dans un récipient fermé contenant du liquide et sa vapeur, la pression dépend uniquement de la température : c’est la pression de saturation. C’est pour cela que les manomètres de frigoriste portent, pour chaque fluide, une échelle de températures : lire la pression, c’est lire la température d’évaporation ou de condensation.",
    },
    {
      type: 'note',
      text: "Cette relation ne vaut que s’il reste du liquide. Si tout le liquide s’est évaporé, la pression n’est plus liée à la température (vapeur surchauffée). Inversement, en tirant au vide un circuit, on fait bouillir l’eau qu’il contient à basse température : c’est le principe de la déshydratation par le vide.",
    },

    { type: 'heading', text: 'Les quatre lois des gaz' },
    {
      type: 'table',
      headers: ['Loi', 'Énoncé', 'Usage du frigoriste'],
      rows: [
        ['Charles', 'à pression constante, le volume croît avec la température', 'principe de la montgolfière'],
        ['Gay-Lussac', 'à volume constant, p1/T1 = p2/T2 (T en kelvins)', 'essai d’étanchéité à l’azote : corriger la pression lue selon la température'],
        ['Boyle-Mariotte', 'à température constante, p1·V1 = p2·V2', 'compression d’un gaz'],
        ['Dalton', 'la pression d’un mélange est la somme des pressions partielles', 'de l’air dans le circuit ajoute sa pression : HP trop haute (incondensables)'],
      ],
    },
    { type: 'formula', text: 'Essai d’étanchéité : p2 attendue = p1 × T2 / T1   (T en K)' },

    { type: 'heading', text: 'Carnot, moteur thermique et pompe à chaleur' },
    {
      type: 'text',
      text: "Sadi Carnot (1824) a montré qu’une machine thermique a besoin de deux sources : une chaude et une froide. Le moteur transforme une partie de la chaleur qui « descend » du chaud vers le froid en travail. La pompe à chaleur — et donc le climatiseur — fait l’inverse : elle consomme du travail pour faire « remonter » la chaleur du froid vers le chaud.",
    },
    { type: 'illustration', name: 'clim-cycle', caption: 'La machine frigorifique : du travail (W) pour pomper la chaleur du froid vers le chaud' },

    { type: 'heading', text: 'Faire du froid sans compresseur ?' },
    {
      type: 'bullets',
      items: [
        'Absorption : un couple de fluides (eau + bromure de lithium, ou ammoniac + eau). Un bouilleur chauffé (gaz, solaire, chaleur perdue) sépare le fluide frigorigène, qui se condense, se détend et s’évapore comme d’habitude ; un absorbeur le réabsorbe. Pas de compresseur, mais une source de chaleur.',
        'Effet Peltier : un courant continu traversant des semi-conducteurs crée une face chaude et une face froide. Silencieux et compact, mais réservé aux très petites puissances (glacières 12 V, électronique).',
      ],
    },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Votre manomètre BP affiche 4,5 bar. Quelle est la pression absolue ? Et en psi ?',
      solution: ['p abs = 4,5 + 1,013 ≈ 5,5 bar.', 'En psi : 4,5 bar relatif ≈ 4,5 / 0,069 ≈ 65 psi (relatif, « psig »).', 'Pour lire un diagramme enthalpique, on utilise la pression absolue (5,5 bar).'],
    },
    {
      type: 'exercise',
      question: 'Un circuit est mis sous 30 bar d’azote à 20 °C. Le lendemain, il fait 28 °C et vous lisez 30,5 bar. Y a-t-il une fuite ?',
      solution: [
        'Loi de Gay-Lussac en kelvins : T1 = 293 K, T2 = 301 K.',
        'Pression attendue (en absolu) : 31,0 × 301 / 293 ≈ 31,8 bar abs, soit ≈ 30,8 bar relatif.',
        'On lit 30,5 bar : 0,3 bar de moins que prévu → suspicion de petite fuite. Recontrôler les raccords et attendre une nouvelle mesure à température comparable.',
      ],
    },
    {
      type: 'exercise',
      question: 'Combien d’énergie faut-il pour chauffer 1 kg d’eau de 20 à 100 °C, puis pour l’évaporer entièrement ? Que retenez-vous ?',
      solution: ['Chauffage : 4,18 × 80 ≈ 334 kJ.', 'Évaporation : 2 257 kJ.', 'L’évaporation demande près de 7 fois plus d’énergie : c’est pourquoi l’évaporation d’un fluide est un moyen si puissant d’absorber de la chaleur.'],
    },
  ],
};
