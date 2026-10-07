import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const hvacMechanicalContent: TopicContent = {
  title: 'Charges CVC, pompes et sécurité incendie',
  subtitle: "Les équipements mécaniques que l'ingénieur électricien doit alimenter, et comment estimer la climatisation",
  blocks: [
    {
      type: 'text',
      text: "Une grande partie de la puissance d'un bâtiment part dans les équipements mécaniques : climatisation, ventilation, pompes, sécurité incendie. L'ingénieur électricien doit les connaître pour les alimenter, les protéger et les compter dans l'estimation de charge.",
    },

    { type: 'heading', text: '1 · Estimer rapidement la climatisation' },
    {
      type: 'table',
      headers: ['Zone (hauteur 3 m)', 'Par surface', 'Par volume'],
      rows: [
        ['Fermée', '1 HP pour 10 m²', 'HP = volume (m³) / 30'],
        ['Ouverte', '1 HP pour 8 m²', 'HP = volume (m³) / 25'],
      ],
    },
    {
      type: 'bullets',
      items: [
        "Disjoncteur : habituellement 1,25 × I_rated, mais 2,5 × I_rated pour la climatisation à cause du fort courant de démarrage.",
        "Interrupteur-sectionneur : même calibre que le disjoncteur, ou plus.",
        'Climatiseurs monophasés courants : 1,5 · 2,25 · 2,5 · 3 · 4 · 5 HP. Au-delà de 5 HP, ils sont triphasés.',
      ],
    },
    { type: 'formula', text: 'Exemple : bureau fermé de 40 m² → 40 / 10 = 4 HP' },
    { type: 'image', source: SLIDES['gen-32'], caption: 'Règles d’estimation de la climatisation' },

    { type: 'heading', text: '2 · Comment fonctionne un climatiseur' },
    {
      type: 'bullets',
      items: [
        'Compresseur (unité extérieure) : comprime le fluide frigorigène, qui monte à ≈ 80 °C.',
        "Condenseur : le fluide cède sa chaleur à l'air extérieur et se liquéfie (≈ 50 °C).",
        'Détendeur : la pression et la température chutent fortement (≈ 5 °C).',
        "Évaporateur (unité intérieure) : le fluide absorbe la chaleur de la pièce et s'évapore (≈ 10 °C), puis retourne au compresseur.",
      ],
    },
    { type: 'image', source: SLIDES['cond-68'], caption: 'Compresseur et condenseur' },
    { type: 'image', source: SLIDES['cond-69'], caption: 'Détendeur et évaporateur' },

    { type: 'heading', text: '3 · Systèmes à détente directe (DX)' },
    {
      type: 'text',
      text: "Le fluide frigorigène circule directement entre l'unité extérieure et l'unité intérieure.",
    },
    {
      type: 'bullets',
      items: [
        'Sans gaine : fenêtre, split mural, console au sol, cassette au plafond.',
        'Avec gaine : split central (gainable), unité packagée (rooftop).',
      ],
    },
    { type: 'image', source: SLIDES['cond-72'], caption: 'Système DX' },
    { type: 'image', source: SLIDES['cond-75'], caption: 'Split system' },
    { type: 'image', source: SLIDES['cond-77'], caption: 'Cassette' },
    { type: 'image', source: SLIDES['cond-78'], caption: 'Split central gainable' },

    { type: 'heading', text: "4 · Système à eau glacée (chiller)" },
    {
      type: 'text',
      text: "Pour les grosses puissances (hypermarchés, bureaux, usines) : le groupe d'eau glacée refroidit de l'eau, distribuée par pompes vers les batteries froides.",
    },
    {
      type: 'table',
      headers: ['Équipement', 'Rôle'],
      rows: [
        ['Chiller à air', 'En toiture ou en extérieur bien ventilé'],
        ['Chiller à eau', 'En local technique ou sous-sol'],
        ['Ventilo-convecteur (FCU)', 'Unité terminale dans chaque pièce'],
        ["Centrale de traitement d'air (AHU)", 'Traite et souffle l’air dans de grandes zones'],
        ["Centrale d'air neuf (FAHU)", "Apporte l'air extérieur traité"],
        ['Pompe eau glacée', 'Fait circuler l’eau du chiller vers les FCU/AHU'],
      ],
    },
    {
      type: 'note',
      text: '📌 Été : ventilateurs FCU + AHU + pompes + chiller. Hiver : ventilateurs FCU + AHU + chauffage. On dimensionne le transformateur sur les charges d’été, et le tableau divisionnaire sur les charges d’hiver.',
    },
    { type: 'image', source: SLIDES['cond-81'], caption: 'Système à eau glacée' },
    { type: 'image', source: SLIDES['cond-84'], caption: 'Ventilo-convecteur (FCU)' },
    { type: 'image', source: SLIDES['cond-87'], caption: "Centrale de traitement d'air (AHU)" },
    { type: 'image', source: SLIDES['cond-93'], caption: 'Charges été / hiver' },

    { type: 'heading', text: '5 · Ventilation, pompes et moteurs' },
    {
      type: 'table',
      headers: ['Équipement', 'Où', 'Rôle'],
      rows: [
        ["Extracteur d'air", 'Cuisines, salles de bain', "Évacue l'humidité, les odeurs, les fumées"],
        ['Désenfumage', 'Local groupe, parking, escaliers', 'Évacue fumée et gaz chauds en cas d’incendie'],
        ['Ventilateur de surpression', 'Escaliers, gaines d’ascenseur', 'Maintient une surpression pour empêcher la fumée d’entrer'],
        ['Sèche-mains', 'Toilettes publiques', 'Résistance + soufflerie'],
        ['Chauffe-eau', 'Cuisines, salles de bain', 'Résistance'],
        ['Pompe de relevage (eaux usées)', 'Sous-sols, parkings', "Remonte les eaux usées là où la gravité ne suffit pas"],
        ['Surpresseur (eau domestique)', 'Grands bâtiments', 'Maintient la pression aux étages supérieurs'],
      ],
    },
    {
      type: 'text',
      text: "Le tableau MCC (Motor Control Center) regroupe la commande de plusieurs moteurs : disjoncteurs, relais thermiques, contacteurs et relais.",
    },
    { type: 'image', source: SLIDES['cond-98'], caption: 'Désenfumage' },
    { type: 'image', source: SLIDES['cond-99'], caption: 'Ventilateur de surpression' },
    { type: 'image', source: SLIDES['cond-106'], caption: 'Tableau MCC' },

    { type: 'heading', text: '6 · Systèmes de lutte contre l’incendie' },
    {
      type: 'table',
      headers: ['Système', 'Feux traités', 'Où'],
      rows: [
        ['Sprinklers (eau)', 'Classe A (bois, papier, tissu)', 'Bureaux, hôtels, logements · pas pour liquides, électricité, métaux'],
        ['CO₂', 'Classes B (liquides) et C (électrique)', 'Locaux électriques, data centers · ne laisse pas de résidu'],
        ['Mousse', 'Classe B (liquides inflammables)', 'Usines chimiques, stockage de carburant'],
        ['Agents propres (FM-200, Novec 1230)', 'Classes A, B et C', 'Salles serveurs, musées, laboratoires'],
      ],
    },
    {
      type: 'note',
      text: '💡 Les pompes incendie sont des charges de sécurité : elles doivent rester alimentées par le groupe électrogène.',
    },
    { type: 'image', source: SLIDES['cond-109'], caption: 'Sprinklers' },
    { type: 'image', source: SLIDES['cond-112'], caption: 'Extinction CO₂' },
    { type: 'image', source: SLIDES['cond-114'], caption: 'Agents propres' },
  ],
};
