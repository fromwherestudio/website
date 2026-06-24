# Site FromWhere Studio

Site vitrine de **FromWhere Studio** (production audiovisuelle · Bruxelles), construit avec
[Astro](https://astro.build). Recréé fidèlement à partir de la maquette « Claude Design ».

## Lancer le site en local

Une seule fois, installe les dépendances :

```bash
npm install
```

Puis, pour travailler et voir le site dans le navigateur :

```bash
npm run dev
```

Ouvre ensuite **http://localhost:4321** dans ton navigateur. Le site se recharge tout seul
quand tu modifies un fichier.

## Mettre le site en ligne (gratuit)

```bash
npm run build
```

Cela génère un dossier `dist/` contenant le site final. Deux options simples :

- **Netlify** ou **Vercel** : crée un compte gratuit, glisse-dépose le dossier `dist/`
  (ou connecte le dossier du projet) — le site est en ligne en ~2 minutes.
- N'importe quel hébergement web classique : envoie le contenu de `dist/` par FTP.

Pense à décommenter et renseigner l'URL finale dans `astro.config.mjs` (champ `site`)
une fois le domaine choisi — utile pour le référencement.

## Activer le formulaire de contact (1 minute)

Le formulaire « Un projet en tête ? » envoie les messages par email via
[Web3Forms](https://web3forms.com) (gratuit, sans serveur).

1. Va sur **https://web3forms.com**, entre l'email du studio, récupère ta clé d'accès gratuite.
2. Ouvre `src/components/ContactForm.astro`.
3. Remplace `VOTRE_CLE_WEB3FORMS_ICI` par ta clé.

Tant que la clé n'est pas renseignée, le formulaire affiche un message d'avertissement
au lieu d'envoyer (aucun risque).

## Modifier le contenu

- **Textes des productions, dossiers, FAQ, liste des clients** : `src/data.ts`
- **Coordonnées (email, téléphone, réseaux)** : `src/components/Contact.astro`
- **Couleurs et polices (tokens de design)** : `src/styles/global.css` (en haut, section `:root`)

## Médias à remplacer

Toutes les images/vidéos sont des **placeholders** (zones hachurées avec un libellé) :
showreel du hero, vignettes des dossiers (16:9), etc. Il suffira de les remplacer par les
vrais fichiers du studio dans les composants correspondants.

## Structure

```
src/
  pages/index.astro        → la page d'accueil (assemble les sections)
  layouts/Layout.astro     → en-tête HTML, polices, SEO, grain
  components/              → une section = un composant
  styles/global.css        → tokens de design + base
  data.ts                  → contenu éditable
public/                    → favicon et fichiers statiques
```
