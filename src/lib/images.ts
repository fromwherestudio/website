import type { ImageMetadata } from 'astro';

/* =================================================================
   Résolution des images de projets.

   Dépose simplement tes visuels dans  src/assets/projets/
   (formats acceptés : jpg, jpeg, png, webp, avif), puis renseigne
   le nom du fichier dans `image` (data.ts / portfolio.ts).
   Astro s'occupe automatiquement de l'optimisation (redimension,
   format moderne, chargement rapide).

   Si le fichier n'existe pas encore, le composant affiche le
   placeholder hachuré — aucun risque de casser le build.
   ================================================================= */

const projets = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/projets/*.{jpg,jpeg,png,webp,avif}',
  { eager: true }
);

export function resolveProjectImage(name?: string): ImageMetadata | undefined {
  if (!name) return undefined;
  const entry = Object.entries(projets).find(([path]) => path.endsWith('/' + name));
  return entry?.[1].default;
}
