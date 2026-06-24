/* =================================================================
   Contenu du site — centralisé ici pour faciliter les modifications.
   (Sur le long terme, ces listes sont de bonnes candidates pour un
    petit CMS ou des fichiers Markdown.)
   ================================================================= */

export type CaseStudy = {
  title: string;
  cat: string;
  tag: string;
  color: string;
  tabText: string;
  media: string;
  href: string;
  desc: string;
  /** Optionnel : noms des fichiers images dans src/assets/projets/, DANS L'ORDRE
   *  d'affichage (ex. ["house-of-vibes-1.png", "house-of-vibes-2.png"]).
   *  S'il y en a, la carte devient un carrousel ; sinon le placeholder s'affiche. */
  images?: string[];
};

export const cases: CaseStudy[] = [
  {
    title: 'House of Vibes',
    cat: 'PODCAST',
    tag: 'SÉRIE PODCAST · CAPTATION + MONTAGE',
    color: 'var(--bleu)',
    tabText: '#1f3548',
    media: '[ épisode 16:9 ]',
    href: '#',
    desc: 'Un format podcast vidéo récurrent : décor, captation multi-cam et déclinaisons réseaux.',
    images: ['house-of-vibes-1.png', 'house-of-vibes-2.png', 'house-of-vibes-3.png'],
  },
  {
    title: 'Intermarché',
    cat: 'PUBLICITÉ',
    tag: 'FILM DE MARQUE · TOURNAGE + POST',
    color: 'var(--corail)',
    tabText: '#4a2419',
    media: '[ film publicitaire ]',
    href: '#',
    desc: 'Un film publicitaire et ses déclinaisons : concept, tournage, montage, formats réseaux.',
    images: ['intermarche-1.png', 'intermarche-2.png', 'intermarche-3.png', 'intermarche-4.png', 'intermarche-5.png'],
  },
  {
    title: 'Qu’on se le dise',
    cat: 'ÉMISSION',
    tag: 'ERIC BOSCHMAN · PLATEAU + MONTAGE',
    color: 'var(--jaune)',
    tabText: '#473a12',
    media: '[ émission plateau ]',
    href: '#',
    desc: 'Une émission autour du vin et du goût : plateau, réalisation et habillage sur-mesure.',
  },
  {
    title: 'REM Heritage EU',
    cat: 'INTERVIEW',
    tag: 'CAPTATION · FORMAT LONG',
    color: 'var(--vert)',
    tabText: '#26361d',
    media: '[ interview ]',
    href: '#',
    desc: 'Des entretiens patrimoniaux filmés avec soin, son maîtrisé et montage rythmé.',
    images: ['rem-1.png', 'rem-2.png', 'rem-3.jpeg'],
  },
  {
    title: 'Symington',
    cat: 'PUBLICITÉ',
    tag: 'FILM DE MARQUE · INTERNATIONAL',
    color: 'var(--lila)',
    tabText: '#2c2440',
    media: '[ film de marque ]',
    href: '#',
    desc: 'Un film de marque haut de gamme : direction artistique, tournage et étalonnage.',
    images: ['symington-1.png', 'symington-2.png', 'symington-3.png', 'symington-4.png'],
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: 'Quels types de contenus produisez-vous ?',
    a: 'Podcasts vidéo, émissions, interviews, films publicitaires et formats courts pour les réseaux. On adapte le dispositif à votre objectif, du studio au tournage en décor réel.',
  },
  {
    q: 'Combien de temps prend un projet ?',
    a: 'Tout dépend du format. Un épisode de podcast se cale en quelques jours ; un film de marque demande quelques semaines entre pré-production, tournage et post-production. On fixe un rétroplanning clair dès le départ.',
  },
  {
    q: 'Travaillez-vous en dehors de Bruxelles ?',
    a: 'Oui. Le studio est à Bruxelles mais on se déplace partout en Belgique et à l’étranger selon les besoins du projet.',
  },
  {
    q: 'Proposez-vous aussi la stratégie et la diffusion ?',
    a: 'Oui. On ne s’arrête pas au montage : stratégie de contenu, calendrier de publication et accompagnement à l’acquisition font partie de l’offre globale.',
  },
  {
    q: 'À qui appartiennent les contenus livrés ?',
    a: 'Les contenus finaux vous appartiennent après livraison. Les conditions précises (rushes, droits musique, cessions) sont fixées dans le devis.',
  },
];

/* Marquee partenaires --------------------------------------------- */
const clients = [
  'Intermarché', 'Symington Family Estate', 'Le Tour de France du Sandwich', 'Go Electra',
  'Vollenbak BXL', 'Entier', 'Eric Boschman', 'Qu’on se le dise', 'European Commission',
  'Talk CEC', 'LaFabriek City Gate', 'EJA', 'EJCC', 'Acto Podcast', 'DUMB', 'Alster',
  'Marius la Nuit', 'Beyond Horizons', 'Solvay', 'À bon entendeur', 'Apac-W', 'Updated',
];

const palette = ['#C7B6E6', '#EFD27E', '#A6C6E2', '#AEC9A2', '#E8A492', '#F2EBDD'];

function hexA(hex: string, a: number): string {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

const withColor = clients.map((name, i) => ({
  name,
  color: hexA(palette[i % palette.length], 0.62),
}));

const half = Math.ceil(withColor.length / 2);
const a = withColor.slice(0, half);
const b = withColor.slice(half);

/* Liste dupliquée (x2) pour une boucle de défilement sans couture */
export const rowA = [...a, ...a];
export const rowB = [...b, ...b];
