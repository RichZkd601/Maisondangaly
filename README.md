# Maison d'Angaly — site vitrine

Site one-page haut de gamme pour la **Maison d'Angaly**, ostréiculteurs & table de la mer à **Cancale, Baie du Mont-Saint-Michel**.

Design éditorial luxe (Playfair Display + Inter), palette nacre / encre / or / marine, expérience de scroll immersive et ludique, **SEO-first**, 100 % statique (aucune dépendance, aucun build).

## Aperçu rapide

```bash
# Depuis le dossier du projet
python3 -m http.server 8099
# puis ouvrez http://127.0.0.1:8099/
```
(ou ouvrez simplement `index.html` dans un navigateur.)

## Structure

```
index.html              Page principale (sémantique + JSON-LD)
favicon.svg             Icône (coquille + perle)
site.webmanifest        Manifest PWA
robots.txt / sitemap.xml SEO technique
SEO-AUDIT.md            Audit SEO complet + feuille de route ⭐
assets/
  css/styles.css        Design system
  css/placeholders.css  Couleurs de blur-up (auto-générées)
  js/main.js            Interactions (scroll, parallax, reveals, menu…)
  img/                  Images WebP responsives + .jpg (OG) + manifest/lqip
```

## Fonctionnalités

- **Scroll immersif & ludique** : hero Ken Burns + parallax, révélations au défilement, étape « De la mer à l'assiette » épinglée avec progression, bandeaux marquee, compteurs animés, curseur sur-mesure + boutons magnétiques (desktop).
- **Réservation** : CTA `mailto:` pré-rempli (date / horaire / convives) dans la section *Le Restaurant* et en bas de page, + clic-to-call.
- **Performance** : WebP responsive, lazy-load, dimensions réservées (CLS≈0), hero préchargé, JS `defer` vanilla.
- **Accessibilité** : contrastes, focus clavier, `prefers-reduced-motion`, `alt` descriptifs, navigation sémantique.
- **SEO** : title/description optimisés, Open Graph/Twitter, données structurées `Restaurant`+`Organization`, sitemap image, hiérarchie de titres.

## ⚠️ À personnaliser avant mise en ligne

Remplacez les **valeurs provisoires** (détail complet dans `SEO-AUDIT.md` §1) :
- E-mail de réservation : `reservations@maison-dangaly.com`
- Téléphone : `02 99 00 00 00`
- Adresse : `Port de la Houle, 35260 Cancale` + coordonnées GPS (JSON-LD)
- Horaires d'ouverture
- Liens Instagram / Facebook (footer + JSON-LD `sameAs`)

## Photos

11 photos ont été intégrées (plateaux, huîtres, feu de bois, tri, parcs, terrasse, coucher de soleil), converties en WebP responsive.

**Les 22 photos professionnelles (série drone / Suzette · Klervia Buan)** n'ont pas pu être importées automatiquement : le connecteur Google Drive est limité à **10 Mo/fichier** et ces images font 12–16 Mo. Deux options :
1. **Ré-exporter** ces photos sous 10 Mo (qualité « élevée » ≈ 2500 px suffit largement pour le web) puis les redéposer dans le dossier Drive — elles seront converties et intégrées.
2. Autoriser (whitelist) le domaine du site dans la politique réseau pour les récupérer depuis le site existant.

### Ajouter / remplacer une image
1. Déposez le fichier source dans un dossier accessible.
2. Régénérez les variantes WebP avec le script fourni (nécessite `pip install pillow pillow-heif`) — voir l'historique de génération, ou demandez-moi de relancer le traitement.
3. Les noms sémantiques utilisés : `coucher-soleil-estran`, `parcs-baie`, `tri-huitres`, `paniers-coquillages`, `terrasse-mer`, `huitres-plateau`, `plateau-fruits-mer`, `plateau-homard`, `feu-de-bois`, `huitres-grillees`, `grillades-feu`.

## Déploiement (HTTPS gratuit recommandé)

**Netlify / Vercel / Cloudflare Pages** (glisser-déposer le dossier ou connecter le repo) : SSL + CDN + compression automatiques.
- Configurez la redirection `http → https` et une seule version du domaine (`www` conseillé).
- Pointez le domaine `maison-dangaly.com` vers l'hébergeur.

Puis suivez la **checklist de lancement** dans `SEO-AUDIT.md` §8.

---
*Photographies © Suzette / Klervia Buan & Maison d'Angaly.*
