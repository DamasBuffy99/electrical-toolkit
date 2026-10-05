import { TopicContent } from '../../types';

export const pvDesignStepsContent: TopicContent = {
  title: "Méthodologie de dimensionnement PV",
  subtitle: "Les 6 étapes pour concevoir un système solaire photovoltaïque",
  blocks: [
    {
      type: 'text',
      text: "Un système PV autonome (hors-réseau ou hybride) se dimensionne dans un ordre précis : chaque étape dépend du résultat de la précédente.",
    },
    {
      type: 'image',
      source: require('../../../../assets/diagrams/solar/pv_design_steps.png'),
      caption: 'Les 6 étapes de conception',
      height: 620,
    },
    {
      type: 'note',
      text: "📸 Section en cours de complétion — j'ajouterai les captures du cours pour préciser certains points dès qu'elles seront disponibles.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Câblage des panneaux : vérifications avant branchement' },
    {
      type: 'bullets',
      items: [
        "Choisir la tension en circuit ouvert (Voc) du panneau à partir de sa fiche technique (datasheet), en tenant compte du demi-courant de court-circuit ou de la plage de température définie par la norme applicable (ex. NEC).",
        "Vérifier le nombre de panneaux à mettre en série.",
        "Vérifier le nombre de chaînes de panneaux à mettre en parallèle.",
        "S'assurer que cette configuration reste compatible avec les limites d'entrée du régulateur de charge choisi.",
      ],
    },
    { type: 'formula', text: 'Voc_total = Nb_panneaux_série × Voc_panneau × coefficient_correction_température' },
    {
      type: 'text',
      text: 'Exemple : 2 panneaux en série, Voc = 38.9 V, coefficient de correction (froid) = 1.09 :',
    },
    { type: 'formula', text: '2 × 38.9 × 1.09 = 79.3 V < 150 V (tension max admissible en entrée du régulateur)' },
    { type: 'formula', text: 'I_entrée_régulateur = Isc_panneau × Nb_chaînes_parallèle × facteur_sécurité (1.25 ou 1.3)' },
    {
      type: 'text',
      text: 'Exemple : Isc = 10.07 A, 3 chaînes en parallèle, facteur de sécurité 1.25 :',
    },
    { type: 'formula', text: '3 × 1.25 × 10.07 = 37.76 A' },
    {
      type: 'note',
      text: '⚠️ Toujours comparer ces deux résultats (tension et courant) aux limites maximales indiquées sur la fiche technique du régulateur de charge ou de l\'onduleur solaire utilisé.',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Dimensionnement du régulateur de charge' },
    {
      type: 'text',
      text: "Le régulateur se choisit à partir de la puissance totale des panneaux et de la tension du système (batteries).",
    },
    { type: 'formula', text: 'Courant de charge max = Puissance totale des panneaux (W) / Tension du système (V)' },
    {
      type: 'text',
      text: 'Exemple : 1800 W de panneaux sur un système 24 V :',
    },
    { type: 'formula', text: '1800 / 24 = 75 A' },
    {
      type: 'note',
      text: "⚠️ Ce courant doit rester dans la limite admissible des batteries utilisées — vérifier le courant de charge maximal sur leur fiche technique. Si le calibre standard disponible est insuffisant, passer au régulateur de calibre supérieur.",
    },
    {
      type: 'text',
      text: "Si les batteries sont réparties en plusieurs groupes en parallèle, le courant se répartit entre ces groupes — à vérifier individuellement contre le courant de charge maximal par batterie.",
    },
    { type: 'formula', text: 'Exemple (4 groupes en parallèle) : 75 / 4 = 18.75 A par groupe' },
  ],
};
