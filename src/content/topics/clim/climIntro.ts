import { TopicContent } from '../../types';
import { fig } from './fig';

export const climIntroContent: TopicContent = {
  title: 'Climatiser en zone tropicale : confort et climats',
  subtitle: 'Ce qu’on veut obtenir dans un local, et pourquoi le climat change tout',
  blocks: [
    {
      type: 'text',
      text: "Climatiser, ce n’est pas « faire du froid » au hasard : c’est maintenir dans un local une température ET une humidité où les occupants se sentent bien, en consommant le moins d’électricité possible. Ce cours s’appuie sur le guide de l’IEPF « Efficacité énergétique de la climatisation en région tropicale », écrit à partir de mesures faites en Afrique de l’Ouest et centrale.",
    },
    { type: 'illustration', name: 'clim-comfort', caption: 'Le confort : ni trop chaud, ni trop humide' },

    { type: 'heading', text: 'Le problème : des installations surdimensionnées' },
    {
      type: 'text',
      text: "En Afrique, beaucoup d’installations sont calculées avec des méthodes et des données faites pour l’Europe ou les États-Unis (Carrier, Airwell…). Résultat : des climatiseurs trop puissants, chers à l’achat, qui consomment trop et déshumidifient mal. Le surdimensionnement est le défaut n°1.",
    },
    {
      type: 'bullets',
      items: [
        'Trop puissant = l’appareil démarre et s’arrête sans cesse : l’air est refroidi mais reste humide (moiteur).',
        'Trop puissant = abonnement électrique et facture plus élevés pour rien.',
        'Trop faible = le local n’atteint jamais la consigne aux heures chaudes.',
      ],
    },
    { type: 'note', text: 'Objectif du cours : dimensionner « juste », avec des données climatiques locales, puis choisir et installer le bon équipement.' },

    { type: 'heading', text: 'Les quatre climats tropicaux' },
    {
      type: 'text',
      text: 'Le guide classe les villes en zones climatiques. Chaque zone pose un problème différent :',
    },
    {
      type: 'table',
      headers: ['Climat', 'Villes types', 'Problème principal'],
      rows: [
        ['Tropical humide', 'Douala, Abidjan, Cotonou, Lomé', 'Chaleur + forte humidité (> 80 %)'],
        ['Transition / littoral', 'Dakar', 'Chaleur modérée, humidité variable'],
        ['Tropical sec', 'Garoua, Korhogo, Bamako', 'Forte chaleur, air plus sec'],
        ['Désertique / sahélien', 'Niamey, N’Djamena, Ouagadougou', 'Très forte chaleur (~40 °C), air très sec'],
      ],
    },
    fig('p017_1', 'Tableau 1.1 du guide — les villes retenues pour l’étude, par zone climatique'),
    {
      type: 'note',
      text: "Retenez : en climat humide, le climatiseur doit refroidir ET déshumidifier (enlever de l’eau de l’air). En climat sec, il doit surtout refroidir.",
    },

    { type: 'heading', text: 'Les conditions extérieures de base' },
    {
      type: 'text',
      text: "On ne dimensionne pas pour la journée moyenne, mais pour le mois le plus chaud, appelé « mois de base » : février en climat humide (Douala, Abidjan), mars en climat sec (Garoua), avril en climat désertique (Ouagadougou). On y relève les températures « sèche » (thermomètre normal) et « humide » (qui traduit l’humidité de l’air).",
    },
    {
      type: 'table',
      headers: ['Ville', 'T sèche (°C)', 'T humide (°C)'],
      rows: [
        ['Douala', '32', '29'],
        ['Abidjan', '32,5', '27,5'],
        ['Garoua', '39,8', '23,7'],
        ['Korhogo', '36', '22,5'],
        ['Ouagadougou', '39', '29,5'],
      ],
    },
    fig('p020_0', 'Tableau 1.3 — conditions de base extérieures (avec vent dominant)'),
    {
      type: 'text',
      text: 'Comparez Douala et Garoua : 32 °C à Douala, mais une température humide de 29 °C (air presque saturé d’eau) ; 40 °C à Garoua, mais une température humide de 24 °C (air sec). Même puissance de froid, problèmes opposés.',
    },

    { type: 'heading', text: 'Les conditions intérieures : où est le confort ?' },
    {
      type: 'text',
      text: "Le confort thermique dépend de la température de l’air, de son humidité, de sa vitesse, du rayonnement des parois, mais aussi de l’activité et de l’habillement. Des études menées au Cameroun et en Côte d’Ivoire (selon la norme ASHRAE 55-81) donnent les conditions de confort recommandées pour des employés de bureau légèrement vêtus :",
    },
    {
      type: 'table',
      headers: ['Ville', 'T intérieure (°C)', 'Humidité relative (%)'],
      rows: [
        ['Douala', '26', '51,3'],
        ['Abidjan', '24,5', '65'],
        ['Lagos', '26', '50'],
        ['Garoua', '28,5', '51,9'],
        ['Korhogo', '26,5', '50'],
      ],
    },
    fig('p021_0', 'Tableau 1.4 — conditions intérieures de confort optimal recommandées'),
    {
      type: 'text',
      text: 'Ce n’est pas un point unique mais une plage : à Douala, on reste confortable entre 23,9 et 28,3 °C ; à Abidjan entre 24,2 et 28 °C. Plus largement, la zone de confort tropicale va d’environ 20 à 27 °C avec 20 à 80 % d’humidité.',
    },
    fig('p021_1', 'Tableau 1.5 — zones de confort thermique de Douala et Abidjan'),
    fig('p158_0', 'Figure 6.1 — zone de confort et types de climat (diagramme de l’air humide)'),

    { type: 'heading', text: 'Pourquoi ne pas régler à 18 °C ?' },
    {
      type: 'bullets',
      items: [
        'Choc thermique : passer de 32 °C dehors à 18 °C dedans rend malade. On limite l’écart à environ 6 °C.',
        'Consommation : chaque degré en moins coûte environ 3 % de performance (COP) en plus à la machine.',
        'Confort : une consigne entre 24 et 26 °C (voire « flottante » entre 24 et 27 °C) suffit sous les tropiques.',
      ],
    },
    { type: 'formula', text: 'Consigne intérieure ≥ Température extérieure − 6 °C   (ex. 32 °C dehors → 26 °C dedans)' },
    { type: 'illustration', name: 'clim-comfort', caption: 'Douala (humide) et Garoua (sec) ramenés vers la zone de confort' },

    { type: 'heading', text: 'L’air neuf et l’humidité : deux notions clés' },
    {
      type: 'bullets',
      items: [
        "Humidité relative (HR) : pourcentage de vapeur d’eau dans l’air par rapport au maximum possible à cette température. 100 % = air saturé (brouillard).",
        "Teneur en eau (ω) : masse d’eau par kg d’air sec, en kg/kg. C’est elle qu’on utilise dans les calculs (ex. Douala dehors : ω = 0,0255 ; dedans : 0,0108).",
        'Air neuf : on doit renouveler l’air pour l’hygiène (O₂, CO₂, odeurs) — environ 20 à 30 m³/h par personne. Cet air chaud et humide est une grosse charge à traiter.',
      ],
    },
    {
      type: 'note',
      text: 'À retenir : un bon projet de climatisation commence par les bonnes données — ville, mois de base, conditions extérieures et intérieures. Tout le reste du calcul en découle.',
    },
  ],
};
