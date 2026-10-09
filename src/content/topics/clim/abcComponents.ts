import { TopicContent } from '../../types';

export const abcComponentsContent: TopicContent = {
  title: 'Organes annexes et sécurités du circuit',
  subtitle: 'Déshydrateur, voyant, bouteilles, électrovanne, résistance de carter, pressostats et régulateurs',
  blocks: [
    {
      type: 'text',
      text: "Autour des quatre organes principaux, une série de composants protège le compresseur, garde le circuit propre et sec, et maintient les pressions dans des limites saines. Le technicien doit savoir à quoi sert chacun, où il se monte et comment il se règle.",
    },
    { type: 'illustration', name: 'clim-cycle', props: { highlight: 'valve' }, caption: 'Sur la ligne liquide, avant le détendeur : déshydrateur, voyant, électrovanne' },

    { type: 'heading', text: 'Le déshydrateur' },
    {
      type: 'bullets',
      items: [
        'Il assèche le circuit (l’humidité crée des acides, dégrade l’huile, gèle dans le détendeur), neutralise les acides et filtre les particules (tamis ≈ 12 µm).',
        'Agents : alumine activée, gel de silice, tamis moléculaire (absorbe jusqu’à 20 % de son poids d’eau, laisse passer les molécules de fluide mais pas celles d’eau).',
        'Types : classique, « burn-out » (nettoyage après un compresseur grillé), déshydrateur-bouteille, cartouche (liquide ou aspiration), bi-flow pour les pompes à chaleur.',
        'Montage plutôt vertical, entrée en haut, dans le sens de la flèche ; il reste bouché jusqu’au dernier moment.',
        'Un écart de température entre son entrée et sa sortie (≈ 2 °C) signale qu’il est colmaté.',
      ],
    },

    { type: 'heading', text: 'Le voyant liquide' },
    {
      type: 'bullets',
      items: [
        'Il montre l’état du fluide dans la ligne liquide : des bulles indiquent un manque de fluide ou une vaporisation partielle (prédétente).',
        'Sa pastille change de couleur avec l’humidité : verte = circuit sec ; virage vers le jaune = humidité, changer le déshydrateur (anti-acide).',
        'Monté sur le retour d’huile d’un séparateur, il permet de vérifier que l’huile revient au carter.',
      ],
    },

    { type: 'heading', text: 'Bouteilles et électrovanne' },
    {
      type: 'bullets',
      items: [
        'Réservoir (bouteille) liquide : après le condenseur, il absorbe les variations de volume de fluide selon la saison et le détendeur, et peut stocker toute la charge pendant une intervention (vanne de départ liquide, tube plongeur).',
        'Électrovanne (vanne solénoïde) sur la ligne liquide : coupe l’alimentation de l’évaporateur à l’arrêt (pas de migration de liquide) et permet le pump down. Montée horizontale, bobine en haut, sens de la flèche respecté ; une bobine alimentée hors de son tube grille en quelques minutes.',
        'Bouteille anti-coup de liquide (ACL) : à l’aspiration du compresseur (entre la vanne 4 voies et le compresseur sur une PAC), elle piège et réévapore le liquide ; son tube plongeur a un petit trou de retour d’huile.',
        'Distributeur de liquide : répartit le fluide d’un détendeur vers plusieurs circuits d’un gros évaporateur ; monté vertical, tubes de même longueur, détendeur à égalisation externe obligatoire.',
      ],
    },
    { type: 'formula', text: 'Volume du réservoir ≈ (0,2 × V condenseur + 0,8 × V évaporateur + V ligne liquide) × 1,25' },

    { type: 'heading', text: 'Protéger le compresseur et ses huiles' },
    {
      type: 'bullets',
      items: [
        'Résistance de carter : maintient l’huile ≈ 20 °C au-dessus de l’ambiante quand le compresseur est à l’arrêt (alimentée par un contact auxiliaire fermé à l’arrêt). Sans elle, le fluide migre vers le point le plus froid — le carter — (principe de la « paroi froide »), se dissout dans l’huile, et au démarrage l’huile mousse et part : défaut de graissage.',
        'Séparateur d’huile : au refoulement, il récupère l’huile entraînée (force centrifuge, changement de direction) et la renvoie au carter par un flotteur.',
        'Échangeur liquide/vapeur : sous-refroidit le liquide avec les vapeurs froides aspirées, améliore la production frigorifique.',
        'Silencieux de refoulement (muffler) : réduit les pulsations des compresseurs à pistons, qui font vibrer et casser les tuyauteries ; monté juste après le compresseur.',
        'Éliminateur de vibrations (« anaconda ») : flexible inox tressé qui absorbe vibrations et dilatations.',
        'Clapet de retenue : fluide dans un seul sens (court-circuiter le détendeur inutilisé d’une PAC, dégivrage par gaz chauds).',
      ],
    },

    { type: 'heading', text: 'Les pressostats' },
    {
      type: 'table',
      headers: ['Pressostat', 'Rôle', 'Réglage type'],
      rows: [
        ['BP de sécurité', 'arrête le compresseur si la BP chute (fuite, détendeur, manque de débit)', 'coupure ≥ 0,2 bar relatif : jamais sous la pression atmosphérique (entrée d’air humide)'],
        ['BP de régulation (pump down)', 'arrête le compresseur quand l’électrovanne a vidé l’évaporateur', 'ex. chambre 0/+2 °C au R134a : enclenchement 1,2 bar, différentiel 1 bar'],
        ['HP de sécurité', 'coupe si la HP monte trop (condenseur sale, ventilateur HS)', 'coupure ≤ 0,9 × PS (pression maxi admissible) ; obligatoire dès 2,5 kg de fluide, doublé au-delà de 100 kg'],
        ['HP de régulation', 'pilote les ventilateurs du condenseur', 'variation de tension (triac) ou de fréquence, signal 0–10 V'],
        ['Différentiel d’huile', 'coupe si la pression de la pompe à huile est insuffisante', 'avec temporisation au démarrage'],
      ],
    },
    {
      type: 'note',
      text: "Préréglez les pressostats au banc avec une bouteille d’azote, un détendeur et un manomètre avant de les monter : vous gagnerez du temps. Vocabulaire : « cut-in » = enclenchement, « cut-out » = coupure.",
    },
    {
      type: 'warning',
      text: "Le livre inverse les termes pour le pressostat HP (« enclenchement = cut out, coupure = cut in »). Ils ne changent pas selon le pressostat : cut-out = coupure (ouverture du contact), cut-in = enclenchement (réarmement), pour la BP comme pour la HP. Sur un pressostat HP, le cut-out est simplement la valeur HAUTE.",
    },

    { type: 'heading', text: 'Les régulateurs de pression' },
    {
      type: 'bullets',
      items: [
        'Régulateur de pression d’évaporation (type KVP) : en sortie d’un évaporateur, il empêche sa pression de descendre sous un minimum quand plusieurs évaporateurs à températures différentes partagent un compresseur.',
        'Régulateur de démarrage (type KVL) : près du compresseur, il limite la pression d’aspiration au démarrage (après dégivrage ou long arrêt) pour ne pas surcharger le moteur.',
        'Régulateur de capacité (injection de gaz chauds) : by-pass refoulement → aspiration quand la BP descend trop.',
        'Régulateur de pression de condensation : entre condenseur à air et bouteille, avec un clapet différentiel, il maintient une HP suffisante quand il fait frais.',
      ],
    },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Installation au R134a, compresseur dont la PS (pression maxi admissible) correspond à 60 °C, soit environ 16 bar. Région où l’été atteint 35 °C. Proposez les réglages du pressostat HP de sécurité par les deux méthodes du livre.',
      solution: [
        'Méthode PS : coupure ≤ 0,9 × 16 = 14,4 bar.',
        'Méthode « à l’ancienne » : enclenchement = 35 + 15 = 50 °C ≈ 12,2 bar ; coupure = 50 + 10 = 60 °C ≈ 16 bar.',
        'Les deux méthodes ne donnent pas le même résultat : on retient la plus prudente (14,4 bar) et on suit toujours la notice du constructeur.',
      ],
    },
    {
      type: 'exercise',
      question: 'Condenseur 10 L, évaporateur 6 L, ligne liquide 2 L. Quel volume de réservoir liquide prévoir ?',
      solution: ['(0,2 × 10 + 0,8 × 6 + 2) × 1,25 = (2 + 4,8 + 2) × 1,25 = 11 L.'],
    },
  ],
};
