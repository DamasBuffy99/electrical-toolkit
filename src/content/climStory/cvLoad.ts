import { TopicContent } from '../types';
import { fig } from '../topics/clim/fig';

export const cvLoadContent: TopicContent = {
  title: 'Le bilan thermique pièce par pièce',
  subtitle: 'Combien de chaleur faut-il retirer de chaque pièce à l’heure la plus chaude ? Ousmane passe les murs, les vitres, les occupants, l’éclairage, les appareils et l’air neuf au crible, puis remplit la feuille de bilan de la villa.',
  blocks: [
    { type: 'scene', text: 'Semaine 3 · Bureau d’études' },
    {
      type: 'objectives',
      items: [
        'Identifier les apports sensibles et latents d’un local.',
        'Calculer les apports par les parois, les vitrages, les occupants et l’air neuf.',
        'Remplir une feuille de bilan thermique et lire ses totaux (W, BTU/h, W/m², SHR).',
        'Savoir pourquoi chaque pièce a son heure de pointe.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '4,9 kW', label: 'séjour, à 16 h' },
        { value: '1,4 à 1,9 kW', label: 'chacune des trois chambres' },
        { value: '≈ 9,7 kW', label: 'total de la villa' },
        { value: '0,81', label: 'facteur de chaleur sensible' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'Le vendeur au marché dit qu’il faut 1 000 BTU par mètre carré. Pourquoi faire tout un calcul ?',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'Avec sa règle, la chambre du nord et le séjour plein ouest auraient la même clim par mètre carré. Or l’une reçoit le soleil du soir à travers une baie vitrée et l’autre presque rien. Le bilan prend chaque source de chaleur une par une : c’est ce qui évite la clim trop petite qui tourne sans arrêt, et la trop grosse qui laisse la chambre moite.',
    },

    { type: 'heading', text: '1 · D’où vient la chaleur ?' },
    { type: 'illustration', name: 'clim-heat-gains', caption: 'Les apports d’un local : extérieurs (parois, vitrages, air) et intérieurs (occupants, éclairage, appareils)' },
    {
      type: 'table',
      headers: ['Apport', 'Sensible (chauffe l’air)', 'Latent (humidifie l’air)'],
      rows: [
        ['Murs et toiture', 'transmission + soleil absorbé', '—'],
        ['Vitrages', 'transmission + soleil direct', '—'],
        ['Occupants', '≈ 65 à 75 W par personne au repos', '≈ 45 à 55 W par personne'],
        ['Éclairage, appareils', 'toute la puissance électrique', 'cuisson, bouilloire…'],
        ['Air neuf, infiltrations', 'q × Δθ × 0,33', 'q × Δω × 840'],
      ],
    },
    {
      type: 'text',
      text: 'La chaleur sensible fait monter le thermomètre ; la chaleur latente est de la vapeur d’eau qu’il faudra condenser sur l’évaporateur. Sous les tropiques, l’air neuf apporte souvent plus de latent que de sensible : c’est ce qui rend un local « moite » si la clim est mal choisie.',
    },

    { type: 'heading', text: '2 · Le séjour, ligne par ligne' },
    {
      type: 'calc',
      title: 'Apports du séjour (36 m², baie ouest protégée, pointe à 16 h)',
      steps: [
        { label: 'Murs extérieurs : transmission (k ≈ 2,5 W/m²·K, 30 m² opaques)', formula: 'Q = k × S × Δθ = 2,5 × 30 × 6 = 450 W' },
        { label: 'Soleil absorbé par le mur ouest et la toiture isolée (tables α, F, R_m du guide)', formula: 'Q ≈ 270 + 580 = 850 W  ;  portes, cloisons ≈ 200 W' },
        { label: 'Vitrages : baie protégée (920 W) + fenêtre sud et transmission', formula: 'Q_{vitrages} ≈ 1 500 W' },
        { label: 'Occupants : 5 personnes au repos', formula: 'Q_S = 5 × 75 = 375 W   ;   Q_L = 5 × 55 = 275 W' },
        { label: 'Éclairage LED (étape électrique) et appareils (TV, box)', formula: 'Q = 120 + 200 = 320 W' },
        { label: 'Infiltrations : 0,5 volume par heure de 101 m³', formula: 'q = 50 m³/h   ;   Q_S = 50 × 6 × 0,33 = 99 W   ;   Q_L = 50 × 0,0147 × 840 = 617 W' },
      ],
      result: 'Sensible 3 794 W + latent 892 W = 4 686 W ; avec 5 % de marge : ≈ 4,9 kW',
    },
    fig('p029_0', 'Tableau 1.9 du guide IEPF — coefficients k des parois, toitures et vitrages'),
    fig('p031_1', 'Tableau 1.14a — rayonnement sur murs et vitrages, heure par heure : on lit la ligne de l’heure de pointe'),
    fig('p034_0', 'Tableau 1.16 — chaleur sensible et latente dégagée par les personnes selon l’activité'),
    {
      type: 'note',
      text: 'Pourquoi 16 h pour le séjour et pas midi ? Le soleil d’ouest frappe la baie l’après-midi, et la toiture restitue la chaleur accumulée avec plusieurs heures de retard. Une chambre à l’est a sa pointe le matin. Pour un split par pièce, on dimensionne chaque pièce à sa propre pointe ; pour une machine commune à plusieurs pièces, on chercherait l’heure où la somme est maximale.',
    },

    { type: 'heading', text: '3 · La feuille de bilan de la villa' },
    {
      type: 'heatLoadSheet',
      sheet: {
        project: 'Villa Mensah',
        location: 'Ville côtière, Afrique de l’Ouest',
        outdoor: '32 °C · 25,5 g/kg',
        indoor: '26 °C · 50 % (10,8 g/kg)',
        peakHour: 'séjour 16 h · chambres 17 h',
        margin: 0.05,
        rooms: [
          { name: 'Séjour (ouest)', area: 36, walls: 1500, glazing: 1500, people: 375, lighting: 120, equipment: 200, air: 99, peopleLat: 275, airLat: 617, selected: 'Split 18 000 BTU/h', selectedW: 5280 },
          { name: 'Chambre 1 (parents)', area: 16, walls: 700, glazing: 450, people: 140, lighting: 40, equipment: 60, air: 44, peopleLat: 90, airLat: 272, selected: 'Split 9 000 BTU/h', selectedW: 2640 },
          { name: 'Chambre 2', area: 12, walls: 600, glazing: 400, people: 70, lighting: 30, equipment: 50, air: 34, peopleLat: 45, airLat: 210, selected: 'Split 9 000 BTU/h', selectedW: 2640 },
          { name: 'Chambre 3 (est)', area: 12, walls: 550, glazing: 350, people: 70, lighting: 30, equipment: 50, air: 34, peopleLat: 45, airLat: 210, selected: 'Split 9 000 BTU/h', selectedW: 2640 },
        ],
      },
    },
    {
      type: 'calc',
      title: 'Lire les totaux',
      steps: [
        { label: 'Facteur de chaleur sensible : part du sensible dans le total', formula: 'SHR = \\frac{Q_S}{Q_S + Q_L} = \\frac{7 496}{9 260} ≈ 0,81' },
        { label: 'Ratio moyen de la villa', formula: '\\frac{9 723 W}{76 m²} ≈ 128 W/m²' },
        { label: 'Conversion pour les catalogues', formula: '1 W = 3,412 BTU/h   →   4 920 W ≈ 16 800 BTU/h pour le séjour' },
      ],
      result: 'Séjour : 16 800 BTU/h → appareil de 18 000 BTU/h ; chambres : 4 800 à 6 400 BTU/h → plus petit modèle, 9 000 BTU/h',
    },
    {
      type: 'note',
      text: 'Le SHR dit à l’appareil ce qu’on attend de lui. À 0,81, il doit retirer près de 20 % de sa puissance sous forme d’eau. Un appareil qui refroidit trop vite l’air (trop gros, en marche/arrêt) n’a pas le temps de condenser : la pièce est froide et moite. C’est un argument de plus pour la technologie inverter, que l’on verra à l’étape suivante.',
    },
    {
      type: 'decision',
      title: 'Méthode de calcul',
      choice: 'Bilan détaillé local par local à l’heure de pointe de chacun, marge de 5 %',
      reasons: [
        'Les ratios au mètre carré ignorent l’orientation : le séjour ouest demande 137 W/m², la chambre 3 à l’est 117 W/m².',
        'Une marge de 5 % suffit quand chaque apport est calculé ; les marges cumulées à chaque ligne font acheter des machines trop grosses.',
      ],
      rejected: 'La règle du vendeur (≈ 1 000 BTU/h par m²) : 36 000 BTU/h pour le séjour, deux fois trop, avec un air moite garanti.',
    },
    { type: 'fiche', id: 'clim-heat-gains', why: 'Chaque apport expliqué : parois, vitrages, occupants, éclairage, air neuf.' },
    { type: 'fiche', id: 'clim-load-method', why: 'La méthode pas à pas et la feuille de calcul du guide IEPF.' },
    { type: 'fiche', id: 'clim-load-example', why: 'Un exemple complet : un bureau à Douala.' },

    { type: 'heading', text: '4 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Méthodes de calcul des charges',
      rows: [
        { norm: 'Guide IEPF', rule: 'Méthode manuelle par apports (k × S × Δθ, α × F × S × R, tables solaires par latitude), feuille de calcul en annexe.', result: 'méthode utilisée ici' },
        { norm: 'ASHRAE (RTS, CLTD)', rule: 'Méthode des séries temporelles radiantes : tient compte de l’inertie, heure par heure, sur 24 h.', result: 'logiciels type HAP, TRACE' },
        { norm: 'EN ISO 52016-1', rule: 'Calcul horaire des besoins et des charges des bâtiments (cadre européen).', result: 'logiciels de simulation' },
        { norm: 'Règles de marché', rule: 'Ratios en BTU/h par m² ou W/m², sans orientation ni occupation.', result: 'avant-projet seulement' },
      ],
    },
    {
      type: 'regional',
      text: 'Dans beaucoup de villas, les toitures en tôle ou les dalles non isolées font exploser le bilan des pièces sous toit : une dalle de béton nue au soleil peut apporter 40 à 60 W/m² de plus que la toiture isolée des Mensah. Isoler la toiture (5 cm de polystyrène ou une double toiture ventilée) coûte souvent moins qu’un split de taille supérieure, et il protège aussi les pièces non climatisées.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Le bilan additionne les apports sensibles (parois, vitrages, occupants, éclairage, appareils, air) et latents (occupants, air, cuisson).',
        'Chaque pièce a son heure de pointe ; l’orientation change tout.',
        'La feuille de bilan donne le total en W, en BTU/h, le ratio en W/m² et le facteur de chaleur sensible.',
        'Une marge globale de 5 % suffit si chaque apport est calculé.',
        'Le latent de l’air neuf pèse lourd sous les tropiques.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'On installe un ordinateur de jeu de 400 W dans la chambre 2. Que devient son bilan ? Le 9 000 BTU/h suffit-il ?',
      solution: ['Total : (1 184 + 400 + 255) × 1,05 ≈ 1 930 W, soit environ 6 600 BTU/h.', 'Le 9 000 BTU/h (2,64 kW) suffit encore largement.'],
    },
    {
      type: 'exercise',
      question: 'La chambre 1 est occupée par 3 personnes au lieu de 2. Quel apport supplémentaire, sensible et latent ?',
      solution: ['Une personne au repos : environ 70 W sensibles et 45 W latents.', 'Total de la chambre : (1 434 + 70 + 362 + 45) × 1,05 ≈ 2 010 W : toujours couvert par le 9 000 BTU/h.'],
    },
    {
      type: 'exercise',
      question: 'Pourquoi le latent de l’air neuf (617 W) est-il six fois plus grand que son sensible (99 W) dans le séjour ?',
      solution: [
        'Q_S = q × Δθ × 0,33 avec Δθ = 6 °C seulement ; Q_L = q × Δω × 840 avec Δω = 14,7 g/kg, un écart d’humidité très important.',
        'L’air tropical est chaud mais surtout très humide : chaque mètre cube qui entre apporte beaucoup d’eau à condenser.',
      ],
    },
  ],
};
