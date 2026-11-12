import type { CourseSection, FlatLesson } from './course';

/**
 * The air-conditioning course told as four projects. Ousmane Cissé, HVAC engineer at Lumen Ingénierie,
 * works with Awa Diallo (electrical engineer); the reference lessons of climCourse.ts are the "fiches".
 */
export const CLIM_STORY_SECTIONS: CourseSection[] = [
  {
    id: 'cv',
    icon: '🏡',
    title: 'Les splits de la villa Mensah',
    titleEn: 'The splits of the Mensah villa',
    intro: 'Les Mensah veulent des chambres fraîches sans facture ruineuse. Du confort au bilan pièce par pièce, du choix des splits à leur mise en service.',
    introEn: 'The Mensahs want cool bedrooms without a ruinous bill. From comfort to the room-by-room load, from choosing the splits to commissioning them.',
    lessons: [
      {
        id: 'cv-brief',
        title: 'Le confort, ça se mesure',
        titleEn: 'Comfort can be measured',
        transition: 'Les consignes sont fixées. Ousmane peut maintenant calculer ce que chaque pièce va recevoir comme chaleur.',
        transitionEn: 'The set points are agreed. Ousmane can now calculate how much heat each room will receive.',
      },
      {
        id: 'cv-load',
        title: 'Le bilan thermique pièce par pièce',
        titleEn: 'The room-by-room heat load',
        transition: 'Chaque pièce a son besoin en watts. Reste à trouver, dans les catalogues, l’appareil qui le couvre vraiment.',
        transitionEn: 'Each room has its requirement in watts. Now the catalogues must yield a unit that truly covers it.',
      },
      {
        id: 'cv-select',
        title: 'Choisir les splits',
        titleEn: 'Choosing the splits',
        transition: 'Les splits sont commandés. Il faut maintenant les poser sans gâcher leur performance.',
        transitionEn: 'The splits are ordered. Now they must be installed without spoiling their performance.',
      },
      {
        id: 'cv-install',
        title: 'Poser et mettre en service',
        titleEn: 'Installing and commissioning',
        transition: 'La villa est fraîche. Chez Tropica, Ibrahim a un autre besoin : garder ses jus à 2 °C.',
        transitionEn: 'The villa is cool. At Tropica, Ibrahim has another need: keeping his juice at 2 °C.',
      },
    ],
  },
  {
    id: 'ct',
    icon: '🧊',
    title: 'La chambre froide de Tropica',
    titleEn: 'Tropica’s cold room',
    intro: 'Ibrahim Traoré veut stocker sa production de jus au froid. Le cycle frigorifique en vrai : bilan d’une chambre froide, diagramme enthalpique, compresseurs, fluides et dépannage.',
    introEn: 'Ibrahim Traoré wants to store his juice production in the cold. The refrigeration cycle for real: cold-room load, pressure–enthalpy chart, compressors, refrigerants and troubleshooting.',
    lessons: [
      {
        id: 'ct-load',
        title: 'Le bilan d’une chambre froide',
        titleEn: 'The cold-room load',
        transition: 'Ousmane connaît la puissance à produire. Il faut maintenant choisir les températures du cycle.',
        transitionEn: 'Ousmane knows the capacity to produce. Now the cycle temperatures must be chosen.',
      },
      {
        id: 'ct-cycle',
        title: 'Le cycle sur le diagramme enthalpique',
        titleEn: 'The cycle on the pressure–enthalpy chart',
        transition: 'Le cycle est tracé. Place aux machines qui vont le réaliser, et au fluide qui va y circuler.',
        transitionEn: 'The cycle is drawn. On to the machines that will run it, and the refrigerant that will flow in it.',
      },
      {
        id: 'ct-equipment',
        title: 'Compresseurs, évaporateurs et fluides',
        titleEn: 'Compressors, evaporators and refrigerants',
        transition: 'La chambre tourne. Un an plus tard, Paul appelle : la température monte et le compresseur ne s’arrête plus.',
        transitionEn: 'The cold room is running. A year later, Paul calls: the temperature is rising and the compressor never stops.',
      },
      {
        id: 'ct-service',
        title: 'Sécurités, étanchéité et dépannage',
        titleEn: 'Safety devices, leak-tightness and troubleshooting',
        transition: 'Troisième projet : un immeuble de bureaux, où l’on climatise des centaines de personnes et leurs ordinateurs.',
        transitionEn: 'Third project: an office building, where hundreds of people and their computers must be cooled.',
      },
    ],
  },
  {
    id: 'co',
    icon: '🏢',
    title: 'L’immeuble de bureaux Kora',
    titleEn: 'The Kora office building',
    intro: 'Kora Assurances construit son siège : cinq étages de bureaux vitrés. Bilan par façade, choix d’un VRV, air neuf et humidité, gaines, diffuseurs et régulation.',
    introEn: 'Kora Assurances is building its head office: five floors of glazed offices. Load by façade, choosing a VRF system, fresh air and humidity, ducts, diffusers and controls.',
    lessons: [
      {
        id: 'co-load',
        title: 'Bilan par façades et heure de pointe',
        titleEn: 'Load by façade and peak hour',
        transition: 'Le besoin est connu, zone par zone. Quel système pour le couvrir ?',
        transitionEn: 'The requirement is known, zone by zone. Which system should cover it?',
      },
      {
        id: 'co-system',
        title: 'Split, VRV ou eau glacée ?',
        titleEn: 'Split, VRF or chilled water?',
        transition: 'Le VRV est retenu. Mais les bureaux ont aussi besoin d’air neuf, et cet air tropical est chargé d’eau.',
        transitionEn: 'VRF is chosen. But the offices also need fresh air, and that tropical air is laden with water.',
      },
      {
        id: 'co-air',
        title: 'Air neuf, humidité et récupération d’énergie',
        titleEn: 'Fresh air, humidity and energy recovery',
        transition: 'L’air est traité. Reste à le distribuer sans courant d’air ni bruit, et à piloter le tout.',
        transitionEn: 'The air is treated. It must now be distributed without draughts or noise, and the whole system controlled.',
      },
      {
        id: 'co-ducts',
        title: 'Gaines, diffuseurs, bruit et régulation',
        titleEn: 'Ducts, diffusers, noise and controls',
        transition: 'Dernier projet, le plus grand : un hôtel de 120 chambres, où le froid est produit dans une centrale à eau glacée.',
        transitionEn: 'Last and largest project: a 120-room hotel, where cooling comes from a chilled-water plant.',
      },
    ],
  },
  {
    id: 'ch',
    icon: '🏨',
    title: 'L’hôtel Lagune Bleue',
    titleEn: 'The Lagune Bleue hotel',
    intro: 'Nadia Haddad ouvre un hôtel de 120 chambres en bord de lagune. Le froid centralisé : bilan avec foisonnement, groupes d’eau glacée, réseau hydraulique, ventilo-convecteurs, CTA et exploitation.',
    introEn: 'Nadia Haddad is opening a 120-room lagoon-side hotel. Central cooling: load with diversity, chillers, hydronic network, fan coils, air handling units and operation.',
    lessons: [
      {
        id: 'ch-concept',
        title: 'Le bilan de l’hôtel et le choix de l’eau glacée',
        titleEn: 'The hotel load and the choice of chilled water',
        transition: 'La puissance de la centrale est fixée. Il faut choisir les groupes qui la produiront, et leur redondance.',
        transitionEn: 'The plant capacity is set. The chillers that will produce it, and their redundancy, must be chosen.',
      },
      {
        id: 'ch-chillers',
        title: 'Les groupes d’eau glacée',
        titleEn: 'The chillers',
        transition: 'L’eau glacée est produite. Il faut maintenant l’amener dans 120 chambres avec le bon débit.',
        transitionEn: 'The chilled water is produced. It must now reach 120 rooms at the right flow rate.',
      },
      {
        id: 'ch-hydraulics',
        title: 'Le réseau d’eau glacée',
        titleEn: 'The chilled-water network',
        transition: 'L’eau arrive dans chaque local. Reste à choisir les appareils qui rafraîchiront l’air, et à penser à l’exploitation.',
        transitionEn: 'Water reaches every room. The units that will cool the air must now be chosen, with operation in mind.',
      },
      {
        id: 'ch-terminals',
        title: 'Ventilo-convecteurs, CTA et exploitation',
        titleEn: 'Fan coils, air handling units and operation',
      },
    ],
  },
];

export const CLIM_STORY_FLAT_LESSONS: FlatLesson[] = CLIM_STORY_SECTIONS.flatMap((section, sectionIndex) =>
  section.lessons.map((lesson, indexInSection) => ({ lesson, section, sectionIndex, indexInSection, number: indexInSection + 1 })),
);
