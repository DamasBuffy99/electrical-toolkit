import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const panelScheduleContent: TopicContent = {
  title: 'Panel Schedule',
  subtitle: 'Du câblage brut au tableau électrique complètement dimensionné',
  blocks: [
    {
      type: 'text',
      text: "Le panel schedule (tableau de répartition) documente chaque circuit d'un panneau, sa phase, son disjoncteur et son câble — jusqu'à l'arrivée principale. Voici la méthode complète en 3 étapes, illustrée avec un panneau réel (DB-F, TPN+PE 36 voies, 220/380V).",
    },
    {
      type: 'image',
      source: require('../../../assets/diagrams/panel_schedule_workflow.png'),
      caption: 'Les 3 étapes de construction du panel schedule',
      height: 460,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Préparer le tableau' },
    {
      type: 'bullets',
      items: [
        'Le panel schedule liste tous les circuits et la charge que chacun alimente (fichier Excel ou AutoCAD). Chaque circuit a son propre disjoncteur et son propre câble.',
        'Configurations courantes : tableaux de 6, 12, 18, 24, 30, 36, 42 ou 48 circuits.',
        'Disjoncteur d’arrivée (incoming) : coupe et protège tout le tableau. Disjoncteurs de départ (outgoing) : protègent chacun un circuit.',
      ],
    },
    {
      type: 'table',
      headers: ['Réserve', 'Part des circuits', 'Signification'],
      rows: [
        ['Spare', '20 %', 'Disjoncteurs installés mais non raccordés'],
        ['Space', '10 %', 'Emplacements libres, sans disjoncteur, pour plus tard'],
      ],
    },
    { type: 'image', source: SLIDES['cond-188'], caption: 'Le panel schedule' },
    { type: 'image', source: SLIDES['cond-189'], caption: 'Spare et space' },
    { type: 'image', source: SLIDES['cond-190'], caption: 'Configurations de tableaux' },
    { type: 'image', source: SLIDES['cond-192'], caption: 'Disjoncteurs d’arrivée et de départ' },

    { type: 'heading', text: '🔷 Étape 1 — Équilibrer les phases R/Y/B' },
    {
      type: 'text',
      text: "Pour chaque circuit : nom, section de câble, nombre de pôles, calibre du disjoncteur de départ, et kVA sur la phase concernée (R, Y ou B).",
    },
    { type: 'formula', text: 'Bus R/Y/B [kVA] = Σ (kVA des circuits sur cette phase)' },
    { type: 'formula', text: 'Moyenne [kVA] = (Bus R + Bus Y + Bus B) / 3' },
    { type: 'formula', text: 'Déséquilibre % = max(|Bus_R−Moy|, |Bus_Y−Moy|, |Bus_B−Moy|) / Moy × 100' },
    {
      type: 'note',
      text: '🎯 Selon ANSI C84.1, le déséquilibre de courant ne doit pas dépasser 5 % de la moyenne des phases. Même règle pour le déséquilibre de tension.',
    },
    { type: 'image', source: SLIDES['cond-191'], caption: 'Équilibre des phases (ANSI C84.1)' },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Étape 2 — Facteurs de demande & recalibrage' },
    {
      type: 'text',
      text: 'Regrouper les charges connectées par catégorie (éclairage, prises, climatisation…) et appliquer le facteur de demande de chaque catégorie.',
    },
    { type: 'formula', text: 'Demande totale [kVA] = Σ (charge connectée × FD par catégorie)' },
    {
      type: 'table',
      headers: ['Catégorie (exemple DB-F)', 'Connecté', 'Règle', 'Demande'],
      rows: [
        ['Éclairage', '0,87 kVA', 'FD = 1', '0,87 kVA'],
        ['Prises', '18,75 kVA', '10 premiers kVA à 100 %, reste à 50 % (NEC 220.44)', '10 + 0,5 × 8,75 = 14,38 kVA'],
        ['Climatisation', '35,85 kVA', 'FD = 1', '35,85 kVA'],
        ['Chauffe-eau', '2 kVA', 'FD = 1', '2 kVA'],
        ['Réfrigérateur', '2 kVA', 'FD = 1', '2 kVA'],
        ['Total', '59,47 kVA', '', '55,1 kVA'],
      ],
    },
    { type: 'formula', text: 'Demande + 15% = Demande × 1.15' },
    { type: 'formula', text: 'Ampères de ligne = (Demande [kVA] × 1000) / (√3 × Tension)' },
    { type: 'formula', text: 'Exemple : 55,1 × 1000 / (√3 × 380) = 83,7 A · Demande + 15 % = 63,4 kVA' },
    {
      type: 'note',
      text: "⚠️ Important : recalculer chaque disjoncteur de départ selon sa charge réelle une fois les facteurs de demande appliqués — ne pas garder un calibre uniforme par défaut (ex : 16A partout). Le disjoncteur principal doit aussi être redimensionné : MCB pour une faible demande, MCCB au-delà d'environ 80A.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Étape 3 — Dimensionner les câbles' },
    {
      type: 'text',
      text: "Une fois les calibres de disjoncteurs finalisés, choisir la section de chaque câble de départ selon les tables d'ampacité, puis dimensionner le câble d'arrivée (alimentation) pour supporter la Demande + 15%.",
    },
    {
      type: 'text',
      text: "Exemple réel (panneau DB-F) : demande de 55 kVA → disjoncteur principal MCCB 125A → câble d'arrivée 3×50+1×25+1×25 mm² (type CU/XLPE/PVC, avec conducteur de terre séparé).",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Champs de référence rapide' },
    {
      type: 'table',
      headers: ['Champ', 'Signification'],
      rows: [
        ['Short Ckt. Rating', 'Tenue au court-circuit du panneau (ex: 16kA)'],
        ['TPN+PE', 'Triple pôle + neutre + terre de protection'],
        ['Mounting', 'Encastré / apparent'],
      ],
    },
  ],
};
