# Images du portfolio

Déposez vos images ici avec EXACTEMENT ces noms (ou changez les chemins dans `src/data/portfolio.ts`).
Tant qu'une image manque, un cadre en pointillés s'affiche à sa place.

| Fichier | Où | Format conseillé |
|---|---|---|
| `public/images/profile.jpg` | Hero — déjà ajoutée (photo extraite du CV) | 4:5 — 800 x 1000 px |
| `public/images/about.jpg` | Section About (desktop) | 3:4 — 600 x 800 px |
| `public/images/logos/ciments-du-maroc.png` | Logo Ciments du Maroc | carré — 256 x 256 px |
| `public/images/logos/forum-international-computer.png` | Logo Forum International Computer | carré — 256 x 256 px |
| `public/images/projects/agentic-kg-rag.jpg` | Projet 01 | 16:10 — 1600 x 1000 px |
| `public/images/projects/bibliotheque-mobile.jpg` | Projet 02 | 16:10 |
| `public/images/projects/recruitment-platform.jpg` | Projet 03 | 16:10 |
| `public/images/projects/database-design.jpg` | Projet 04 | 16:10 |

Les autres projets (sans `featured: true`) s'affichent en liste compacte, sans image.
Formats acceptés : .jpg, .png, .webp (adaptez l'extension dans `portfolio.ts`).
Pour masquer les cadres vides avant la mise en ligne : `showImagePlaceholders = false` dans `portfolio.ts`.
Après avoir ajouté une image, relancez `npm run dev` (ou redéployez sur Vercel).
