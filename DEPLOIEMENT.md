# Déploiement & contenu — guide pas à pas

## 1. Mettre le code sur GitHub

> Sert de « coffre-fort » du code et de source pour Vercel (déploiement auto).

1. Va sur **https://github.com/new** et crée un dépôt :
   - Nom : `fromwhere-site` (par exemple)
   - **Ne coche RIEN** (pas de README, pas de .gitignore) — le projet en a déjà.
   - Clique **Create repository**.
2. GitHub affiche une page « …or push an existing repository ». Dans le terminal, **depuis le dossier `fromwhere-site`**, lance (remplace `TON-COMPTE`) :

   ```bash
   git remote add origin https://github.com/TON-COMPTE/fromwhere-site.git
   git branch -M main
   git push -u origin main
   ```

   La première fois, une fenêtre s'ouvre pour te connecter à GitHub — accepte.
3. Rafraîchis la page GitHub : ton code est en ligne. ✅

> Par la suite, pour publier une modif : `git add -A && git commit -m "ma modif" && git push`
> (ou demande-moi, je le fais).

## 2. Déployer sur Vercel (gratuit, redéploiement automatique)

1. Va sur **https://vercel.com** → **Sign Up** → **Continue with GitHub**.
2. **Add New… → Project** → importe le dépôt `fromwhere-site`.
3. Vercel détecte **Astro** tout seul (build : `npm run build`, sortie : `dist`). Laisse les réglages par défaut.
4. Clique **Deploy**. Au bout d'~1 min, le site est en ligne sur une adresse `…vercel.app`.
5. **Magie** : à chaque `git push`, Vercel redéploie automatiquement la nouvelle version.

### Ajouter ton vrai domaine (plus tard)
Dans le projet Vercel → **Settings → Domains** → ajoute `fromwherestudio.be` (ou autre).
Vercel te donne les enregistrements DNS à mettre chez ton registrar. C'est aussi à ce
moment qu'on pourra brancher **Resend** (emails depuis ton domaine) si tu veux passer
au-delà de Web3Forms.

---

## 3. Ajouter / remplacer les images des projets

Les visuels sont gérés **dans le projet** : Astro les optimise (redimension, WebP,
chargement rapide) et Vercel les sert via son CDN. Rien d'autre à installer.

**Pour ajouter une image à un projet :**

1. Dépose le fichier dans **`src/assets/projets/`**
   (formats : `.jpg`, `.png`, `.webp` ; idéalement large, ex. 1280×720 pour les use cases).
2. Renseigne son nom de fichier dans les données :
   - Use cases de la page d'accueil → `src/data.ts` (champ `image`)
   - Projets de la page Dossiers → `src/portfolio.ts` (champ `image` de chaque projet)

   Exemple :
   ```ts
   image: 'house-of-vibes.jpg',
   ```
3. C'est tout : l'image remplace automatiquement le placeholder hachuré.
   Si tu ne mets pas d'`image`, le placeholder reste affiché (aucun risque de casse).

> Une **image d'exemple** est actuellement branchée sur « House of Vibes »
> (`src/assets/projets/exemple-house-of-vibes.png`). Supprime-la / remplace-la
> quand tu as les vrais visuels.

### Et les vidéos (showreel, épisodes) ?
À héberger sur **YouTube ou Vimeo**, puis on intègre le lecteur dans la page
(streaming fluide et gratuit). On ne stocke jamais de grosses vidéos dans le projet.
