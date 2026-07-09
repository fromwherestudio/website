/* =================================================================
   Page « Dossiers » — portfolio de la manière dont on travaille.
   6 dossiers (services) avec leur couleur (reprise de la landing),
   un pitch vendeur, la méthode en 3 temps, et des projets à montrer.

   ⚠️ Les textes ci-dessous sont des propositions « vendeuses » à
   remplacer / valider par le studio. Les projets sont des exemples.
   ================================================================= */

export type ShowcaseProject = {
  title: string;
  meta: string;    // type / format
  result: string;  // résultat « tampon » (vendeur)
  /** Optionnel : nom du fichier image dans src/assets/projets/ (ex. "go-electra.jpg").
   *  Si présent, l'image optimisée remplace le placeholder hachuré. */
  image?: string;
};

export type Platform = { name: string; note: string; color: string };

export type ServiceFolder = {
  id: string;
  n: string;          // 01..06
  cat: string;        // nom du service
  color: string;      // var CSS (même couleur que la landing)
  tabText: string;    // couleur de texte foncée pour contraste sur la couleur
  blurb: string;      // petite ligne sous le titre (dossier fermé)
  title: string;      // titre du dossier ouvert
  desc: string;       // descriptif « comment on travaille »
  steps: string[];    // méthode en 3 temps
  projects: ShowcaseProject[];
  /** Vitrine alternative (au lieu des projets) :
   *  - `platforms` : cartes de plateformes (ex. Ads → Meta / YouTube / TikTok)
   *  - `graphic: 'calendar'` : mini calendrier éditorial (ex. Stratégies) */
  platforms?: Platform[];
  graphic?: 'calendar';
};

export const folders: ServiceFolder[] = [
  {
    id: 'podcasts',
    n: '01',
    cat: 'Podcasts',
    color: 'var(--bleu)',
    tabText: '#1f3548',
    blurb: 'Décor signature · captation multi-cam · montage',
    title: 'On installe un format, pas un épisode.',
    desc: 'On transforme une conversation en rendez-vous qu’on attend. Décor signature, captation multi-caméra, son maîtrisé et un montage qui garde le rythme — épisode après épisode. Vous ne repartez pas avec un fichier : vous repartez avec un format qui fidélise, et tous les extraits qui le font tourner.',
    steps: ['Concept & décor sur-mesure', 'Captation multi-caméra + son pro', 'Montage long format + extraits verticaux'],
    projects: [
      { title: 'Sous le Capot', meta: 'SÉRIE · 24 ÉPISODES', result: '+180% d’abonnés en 6 mois', image: 'podcasts-p1.png' },
      { title: 'Tables Rondes BXL', meta: 'TALK MENSUEL · PLATEAU', result: '3 saisons · audience ×4', image: 'podcasts-p2.png' },
      { title: 'Le Brief', meta: 'PODCAST CORPORATE', result: 'Format hebdo internalisé', image: 'podcasts-p3.jpg' },
    ],
  },
  {
    id: 'reseaux',
    n: '02',
    cat: 'Réseaux sociaux',
    color: 'var(--lila)',
    tabText: '#2c2440',
    blurb: 'Formats courts · pensés pour le scroll',
    title: 'On pense pour le pouce, pas pour la télé.',
    desc: 'Des formats courts calibrés plateforme par plateforme, une accroche dès la première seconde, et un volume qui nourrit l’algorithme sans vous épuiser. Un seul jour de tournage peut alimenter un mois de contenu. Du contenu pensé pour être vu — pas juste posté.',
    steps: ['Ligne éditoriale + formats', '1 jour de tournage = 1 mois de contenu', 'Montage vertical + déclinaisons'],
    projects: [
      { title: 'Go Electra', meta: 'REELS · SÉRIE VERTICALE', result: '2,3M de vues cumulées', image: 'reseaux-p1.jpg' },
      { title: 'Vollenbak BXL', meta: 'TIKTOK · FOOD', result: '1 vidéo > 800K vues', image: 'reseaux-p2.png' },
      { title: 'Updated', meta: 'SHORTS · TECH', result: 'Cadence ×3 · CPM ÷2', image: 'reseaux-p3.jpg' },
    ],
  },
  {
    id: 'evenementiel',
    n: '03',
    cat: 'Événementiel',
    color: 'var(--vert)',
    tabText: '#26361d',
    blurb: 'Captation d’événements · aftermovies',
    title: 'On capture l’énergie d’un moment.',
    desc: 'Conférences, lancements, festivals, soirées : on couvre votre événement en multi-caméra et on en tire un aftermovie qui donne envie d’y être. Captation live, interviews à chaud, best-of réseaux — livrés vite, tant que l’émotion est encore fraîche.',
    steps: ['Repérage & plan de captation', 'Captation multi-caméra le jour J', 'Aftermovie + capsules réseaux'],
    projects: [
      { title: 'Tech Summit BXL', meta: 'CONFÉRENCE · AFTERMOVIE', result: '1 aftermovie · 40 capsules', image: 'event-p1.png' },
      { title: 'Solvay Awards', meta: 'SOIRÉE · CAPTATION LIVE', result: 'Live + best-of le lendemain', image: 'event-p2.jpg' },
      { title: 'Go Electra — Launch', meta: 'LANCEMENT PRODUIT', result: 'Teaser vu 500K fois', image: 'event-p3.jpg' },
    ],
  },
  {
    id: 'publicites',
    n: '04',
    cat: 'Publicités',
    color: 'var(--corail)',
    tabText: '#4a2419',
    blurb: 'Direction artistique · tournage ciné · multi-formats',
    title: 'On vend votre histoire en quelques secondes.',
    desc: 'Direction artistique forte, tournage cinéma et déclinaisons pour chaque écran — du 16:9 au 9:16. On conçoit le film de marque ET tous ses cut-downs, pour que le message vive partout où votre audience se trouve. Une pub qu’on n’a pas envie de skipper.',
    steps: ['Concept créatif + DA', 'Tournage (réal, lumière, déco)', 'Étalonnage + déclinaisons multi-formats'],
    projects: [
      { title: 'Intermarché', meta: 'FILM DE MARQUE', result: 'Spot national + 8 cut-downs', image: 'publicites-p1.png' },
      { title: 'Symington', meta: 'FILM INTERNATIONAL', result: 'Diffusé dans 5 pays', image: 'publicites-p2.png' },
      { title: 'Entier', meta: 'CAMPAGNE PRODUIT', result: 'ROAS ×4 au lancement', image: 'publicites-p3.png' },
    ],
  },
  {
    id: 'strategies',
    n: '05',
    cat: 'Stratégies',
    color: 'var(--jaune)',
    tabText: '#473a12',
    blurb: 'Ligne éditoriale · calendrier · objectifs',
    title: 'On commence là où les autres s’arrêtent : le plan.',
    desc: 'La création sans stratégie, c’est du bruit. On audite votre présence, on fixe un positionnement clair, puis on construit une ligne éditoriale, un calendrier et des formats par plateforme — avec des objectifs mesurables. On ne publie pas au hasard : on construit une présence.',
    steps: ['Audit + positionnement', 'Ligne éditoriale + calendrier', 'Pilotage & itérations mensuelles'],
    projects: [],
    graphic: 'calendar',
  },
  {
    id: 'ads',
    n: '06',
    cat: 'Ads',
    color: 'var(--kraft)',
    tabText: '#4a3a1e',
    blurb: 'Meta & TikTok · ciblage · A/B testing · reporting',
    title: 'On met du budget là où ça convertit.',
    desc: 'Création publicitaire, ciblage chirurgical, A/B testing et reporting clair sur Meta & TikTok. Chaque euro investi est suivi, lu et optimisé. Pas de magie, pas de promesses en l’air : de la méthode, des chiffres, et des ajustements en continu jusqu’à ce que la campagne performe.',
    steps: ['Création + ciblage', 'A/B testing + scaling', 'Reporting & optimisation continue'],
    projects: [],
    platforms: [
      { name: 'Meta', note: 'Facebook & Instagram Ads', color: 'var(--bleu)' },
      { name: 'YouTube', note: 'Vidéo & Shorts Ads', color: 'var(--corail)' },
      { name: 'TikTok', note: 'Spark Ads & For You', color: 'var(--lila)' },
    ],
  },
];
