import { TopicContent } from '../types';

export const villaPlansContent: TopicContent = {
  title: 'Lire les plans de l’architecte',
  subtitle: 'Un plan d’architecte contient déjà la moitié des réponses de l’électricien : surfaces, usage des pièces, mobilier, sens des portes, zones humides.',
  blocks: [
    { type: 'scene', text: 'Semaine 1 · Bureau d’études' },
    {
      type: 'objectives',
      items: [
        'Lire un plan d’architecte avec les yeux d’un électricien.',
        'Reconnaître les symboles électriques usuels.',
        'Coordonner l’électricité avec la plomberie, la clim et la structure.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '160 m²', label: 'plan à équiper' },
        { value: '3', label: 'métiers à coordonner' },
        { value: '1 plan', label: 'qui fait foi pour le chantier' },
      ],
    },
    {
      type: 'text',
      text: 'Jules Agbo a envoyé les plans de la villa au format PDF et DWG. Awa les imprime en grand et les étale sur sa table. Avant de dessiner une seule prise, elle va « lire » le bâtiment comme le futur habitant le vivra.',
    },
    { type: 'illustration', name: 'villa-plan', props: { focus: 'rooms' }, caption: 'Le plan de la villa Mensah : 160 m², trois chambres, un forage au fond du jardin' },

    { type: 'heading', text: 'Ce qu’Awa cherche sur le plan' },
    {
      type: 'table',
      headers: ['Information du plan', 'Ce qu’elle en déduit'],
      rows: [
        ['Échelle (1/50, 1/100) et cotes', 'les longueurs de câbles, les surfaces pour l’éclairage'],
        ['Nom et usage de chaque pièce', 'le niveau d’éclairement et le nombre de prises'],
        ['Mobilier dessiné (lits, canapé, plan de travail)', 'où mettre prises et interrupteurs pour qu’ils restent accessibles'],
        ['Sens d’ouverture des portes', 'l’interrupteur se place côté poignée, pas derrière la porte'],
        ['Salle de bain, cuisine', 'zones humides : appareils étanches, distances à respecter'],
        ['Hauteur sous plafond, faux plafonds', 'type de luminaires, passage des gaines'],
        ['Façades et toiture', 'unités extérieures de clim, futurs panneaux solaires'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'Vous regardez même où sera le lit ? C’est vraiment utile ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Très utile. Une prise derrière la tête de lit sera cachée et inaccessible. Je mets plutôt une prise de chaque côté du lit, pour les lampes de chevet et les téléphones, et l’interrupteur à côté de la porte, du côté où la main se pose naturellement en entrant.',
    },
    { type: 'fiche', id: 'architectural-drawings', why: 'Les types de plans, les symboles et ce qu’on y lit.' },

    { type: 'heading', text: 'Les symboles qui parlent à l’électricien' },
    {
      type: 'text',
      text: 'Un plan d’architecte utilise une légende : escaliers, gaines techniques, portes et fenêtres. Awa repère surtout la gaine technique (le passage vertical des réseaux) et l’emplacement prévu pour le tableau, à l’entrée, près de la porte : c’est là que l’on doit pouvoir couper le courant vite en cas de problème.',
    },
    { type: 'illustration', name: 'plan-symbols', props: { variant: 'doors' }, caption: 'Portes et sens d’ouverture : l’interrupteur se met côté poignée' },
    {
      type: 'note',
      text: 'Le tableau électrique doit être facilement accessible, hors des zones humides et pas dans un placard fermé à clé. À l’entrée, il est trouvable par n’importe qui en cas d’urgence.',
    },

    { type: 'heading', text: 'Coordonner avec les autres métiers' },
    {
      type: 'text',
      text: 'Awa n’est pas seule sur le plan. Le plombier place le chauffe-eau, l’installateur de climatisation place les unités extérieures, le maçon prévoit les fourreaux. Elle organise une réunion de coordination avec Jules Agbo pour tout superposer.',
    },
    { type: 'illustration', name: 'coordination', props: { variant: 'mechanical' }, caption: 'Coordination : chaque métier superpose ses réseaux sur le plan de l’architecte' },
    {
      type: 'table',
      headers: ['Point de coordination', 'Décision prise en réunion'],
      rows: [
        ['Chauffe-eau', 'dans la buanderie, près de la SdB : prise spécialisée à 1,8 m, à proximité du ballon'],
        ['Unités extérieures de clim', 'sur la façade arrière, à l’ombre ; câbles et liaisons frigorifiques dans une goulotte commune'],
        ['Forage et pompe', 'fourreau enterré de 80 m entre la maison et le forage, posé avant le pavage'],
        ['Futur solaire', 'fourreau vide entre la toiture et le tableau'],
        ['Portail et éclairage extérieur', 'fourreaux le long de la clôture'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Jules Agbo (architecte)',
      role: 'team',
      text: 'Awa, le client voudrait un faux plafond dans le séjour. Ça te change quelque chose ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Oui, et en bien : je peux y passer les câbles et poser des plafonniers encastrés. Mais il me faut une trappe de visite près des boîtes de dérivation, sinon on ne pourra plus jamais y accéder.',
    },
    { type: 'fiche', id: 'drawings-coordination', why: 'Coordination entre architecte, structure et lots techniques.' },

    {
      type: 'regional',
      text: 'Les maisons sont souvent en blocs de ciment (parpaings) enduits : les câbles passent dans des gaines (ICTA) noyées dans des saignées, faites avant l’enduit. Il est courant que les plans d’architecte ne montrent pas le mobilier ; Awa demande alors au client un croquis de l’aménagement, même approximatif.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Le plan d’architecte donne surfaces, usages, mobilier, portes et zones humides : tout ce qu’il faut pour placer prises et lumières.',
        'Le tableau va à l’entrée, accessible, hors zone humide.',
        'Une réunion de coordination évite les conflits : chauffe-eau, clim, pompe, solaire, faux plafonds.',
        'Les fourreaux enterrés et les réservations se décident sur plan, avant le gros œuvre.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Sur un plan, une porte de chambre s’ouvre vers l’intérieur, poignée à droite en entrant. Où placez-vous l’interrupteur ?',
      solution: [
        'À droite de la porte, côté poignée, à environ 1,10 m du sol et à une quinzaine de centimètres du chambranle.',
        'Placé côté gonds, il serait caché derrière la porte ouverte.',
      ],
    },
    {
      type: 'exercise',
      question: 'Pourquoi décider du fourreau vers le forage avant le pavage de la cour ?',
      solution: [
        'Le câble de la pompe doit être enterré dans un fourreau (environ 60 à 80 cm de profondeur, avec un grillage avertisseur au-dessus).',
        'Une fois la cour pavée, il faudrait casser le pavage pour l’installer : on le pose pendant le terrassement, même si le câble n’est tiré que plus tard.',
      ],
    },
  ],
};
