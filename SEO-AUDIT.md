# Audit SEO & feuille de route — Maison d'Angaly
**Objectif : devenir n°1 sur Cancale / Baie du Mont-Saint-Michel pour l'ostréiculture, les fruits de mer et la table de la mer.**

> Mis à jour le 2026-06-29. Ce document sert de plan d'action. Cochez les cases au fur et à mesure.
> Légende priorité : 🔴 critique · 🟠 important · 🟢 bonus.

---

## 0. Résumé exécutif

Le nouveau site est conçu **SEO-first** : HTML sémantique, données structurées, performances élevées (WebP, lazy-load, dimensions réservées contre le CLS), méta complètes et balisage local. C'est une base technique « top 1 » prête à indexer.

Mais sur un secteur **local** (restaurant + producteur), **80 % du classement se joue HORS du site** :
1. **Google Business Profile** (fiche établissement) — le levier n°1 pour le pack local et Google Maps.
2. **Les avis clients** (volume, fraîcheur, note).
3. **La cohérence NAP** (Nom, Adresse, Téléphone) sur tout le web.
4. **Les backlinks locaux** (tourisme, presse, annuaires Bretagne).

La feuille de route ci-dessous traite les deux : le site **et** l'écosystème local.

---

## 1. ⚠️ À compléter avant mise en ligne (données réelles)

Le site contient des **valeurs provisoires** à remplacer par les vraies infos. Cherchez `reservations@maison-dangaly.com`, le téléphone et l'adresse dans les fichiers :

| Élément | Valeur actuelle (provisoire) | Où | Action |
|---|---|---|---|
| 🔴 E-mail réservation | `reservations@maison-dangaly.com` | `index.html` (×3), `sitemap`/JSON-LD | Mettre l'e-mail réel |
| 🔴 Téléphone | `02 99 00 00 00` / `+33299000000` | `index.html`, JSON-LD | Numéro réel |
| 🔴 Adresse | `Port de la Houle, 35260 Cancale` | `index.html`, JSON-LD | Adresse exacte |
| 🔴 Coordonnées GPS | `48.6766 / -1.8508` | JSON-LD `geo` | Lat/long exactes (clic droit sur Google Maps) |
| 🔴 Horaires | Jeu–Dim 12:00–14:30 / Ven–Sam 19:00–21:30 | `index.html`, JSON-LD | Horaires réels |
| 🟠 Réseaux sociaux | `#` (liens vides) | footer + JSON-LD `sameAs` | URLs Instagram / Facebook réelles |
| 🟠 Année de fondation / nb générations | « 3 générations » | section *La Maison* | Vérifier/ajuster le récit |
| 🟢 Photos pro (22) | non importées (>10 Mo) | voir `README.md` | Réduire <10 Mo et réimporter, ou whitelister le domaine |

> **Astuce e-mail :** un mailto fonctionne tout de suite, mais pour ne jamais perdre une demande, ajoutez plus tard un vrai formulaire (voir §7).

---

## 2. 🔴 SEO technique (déjà en place ✅ / à finaliser)

- [x] `<html lang="fr">` + encodage UTF-8
- [x] Balise `<title>` unique et descriptive (60 car.) avec mots-clés + localité
- [x] `meta description` engageante (155 car.) avec CTA
- [x] URL canonique
- [x] `meta robots: index, follow, max-image-preview:large`
- [x] Open Graph + Twitter Card (partage social soigné)
- [x] **Données structurées** JSON-LD `Restaurant` + `Organization` (rich results)
- [x] `robots.txt` + `sitemap.xml` (avec balisage image)
- [x] `site.webmanifest` + favicon SVG
- [x] Hiérarchie des titres propre : **un seul `<h1>`**, puis `h2`/`h3`
- [x] HTML5 sémantique (`header`, `nav`, `main`, `section`, `article`, `footer`)
- [x] `alt` descriptifs et riches en mots-clés sur **toutes** les images
- [ ] 🔴 **Mettre en ligne en HTTPS** (certificat SSL) — indispensable
- [ ] 🔴 Rediriger `http://` → `https://` et choisir **une seule** version (avec ou sans `www`) en 301
- [ ] 🔴 Vérifier le site dans **Google Search Console** + soumettre `sitemap.xml`
- [ ] 🟠 Créer aussi un compte **Bing Webmaster Tools**
- [ ] 🟠 Tester l'éligibilité aux résultats enrichis : <https://search.google.com/test/rich-results>
- [ ] 🟢 Générer un `favicon.ico` 32×32 (compat anciens navigateurs) en plus du SVG

---

## 3. 🔴 Performance & Core Web Vitals (facteur de classement)

Déjà optimisé dans ce site :
- [x] Images **WebP** responsives (`srcset`/`sizes`, 4 largeurs : 640/1080/1600/2200)
- [x] **Lazy-loading** des images sous la ligne de flottaison (`loading="lazy"`)
- [x] `width`/`height` + `aspect-ratio` → **zéro layout shift (CLS)**
- [x] Image hero **préchargée** (`preload` + `fetchpriority="high"`) → LCP rapide
- [x] Polices avec `preconnect` + `display=swap` (pas de texte invisible)
- [x] JS en `defer`, vanilla (0 dépendance, ~6 Ko)
- [x] Placeholders couleur (blur-up) → perception de vitesse
- [x] `prefers-reduced-motion` respecté (accessibilité + perf)

À faire après mise en ligne :
- [ ] 🔴 Passer **PageSpeed Insights** (mobile) : viser ≥ 90 / LCP < 2,5 s / CLS < 0,1 / INP < 200 ms
  → <https://pagespeed.web.dev/>
- [ ] 🟠 Activer la **compression** (Brotli/gzip) et le **cache navigateur** (headers `Cache-Control`) côté hébergeur
- [ ] 🟠 Servir via **CDN** (Netlify, Vercel, Cloudflare incluent gzip+CDN+SSL gratuitement)
- [ ] 🟢 Auto-héberger les polices Google (ou `font-display: optional`) pour gagner le dernier requête tierce

---

## 4. 🔴 SEO LOCAL — le plus important pour « être n°1 »

C'est **ici** que se gagne le classement sur « huîtres Cancale », « restaurant fruits de mer Cancale », « ostréiculteur Mont-Saint-Michel ».

### 4.1 Google Business Profile (ex Google My Business) 🔴🔴🔴
- [ ] **Revendiquer / créer** la fiche : <https://business.google.com/>
- [ ] Catégorie principale : **Restaurant de fruits de mer** ; secondaires : *Producteur d'huîtres*, *Marché aux poissons*, *Restaurant*
- [ ] NAP **exactement identique** au site (nom, adresse, téléphone)
- [ ] Horaires précis + horaires spéciaux (jours fériés, saison)
- [ ] Zone desservie : Cancale, Saint-Malo, Mont-Saint-Michel
- [ ] **Ajouter 20–30 photos** (les pros : drone, parcs, plateaux, feu de bois, équipe) — Google favorise les fiches riches en photos récentes
- [ ] Activer **messages**, **réservation**, lien menu, attributs (terrasse, accès PMR, etc.)
- [ ] Publier des **posts Google** réguliers (arrivages, événements, saison des huîtres)

### 4.2 Avis clients 🔴
- [ ] Mettre en place une **collecte d'avis** (QR code sur l'addition, lien court, relance e-mail)
- [ ] Objectif : **+4,5 ★** et un flux **régulier** d'avis (la fraîcheur compte)
- [ ] **Répondre à chaque avis** (positif comme négatif) — signal d'engagement fort
- [ ] Demander aux clients de **mentionner le plat/produit** (« plateau de fruits de mer », « huîtres grillées ») → mots-clés dans les avis

### 4.3 Cohérence NAP & annuaires 🟠
- [ ] Inscrire la même fiche (NAP identique) sur :
  - **TripAdvisor**, **TheFork/LaFourchette**, **Yelp**, **Petit Futé**
  - **Pages Jaunes**, **Google Maps**, **Apple Plans**, **Bing Places**
  - Annuaires **tourisme Bretagne** : Tourisme Cancale, Office de Tourisme Saint-Malo, Côtes d'Armor/Ille-et-Vilaine, *Bretagne Tourisme*
  - Filières : **CRC Bretagne Nord** (ostréiculture), guides « producteurs locaux »
- [ ] Vérifier qu'aucune ancienne fiche en doublon ne traîne (les fusionner/corriger)

---

## 5. 🟠 Stratégie de contenu & mots-clés

Le site actuel est une **page vitrine** (excellente pour la marque + le local). Pour dominer la longue traîne, créez progressivement des **pages dédiées** (chacune = 1 intention de recherche) :

| Page à créer | Mot-clé cible | Intention |
|---|---|---|
| 🟠 `/huitres-de-cancale` | huîtres de Cancale, acheter huîtres Cancale | Achat / produit |
| 🟠 `/restaurant-fruits-de-mer-cancale` | restaurant fruits de mer Cancale | Réservation |
| 🟠 `/vente-directe-huitres` | vente directe huîtres producteur | Achat sur place |
| 🟢 `/blog/calendrier-huitres` | quand manger des huîtres, mois en R | Informationnel |
| 🟢 `/blog/ouvrir-une-huitre` | comment ouvrir une huître | Informationnel (aimant à liens) |
| 🟢 `/baie-mont-saint-michel` | que faire baie Mont-Saint-Michel | Tourisme (capte les visiteurs) |

Bonnes pratiques par page :
- [ ] 1 `h1` unique, structure `h2/h3`, 500–1000 mots utiles
- [ ] Mot-clé dans : title, URL, h1, 1er paragraphe, alt d'image
- [ ] **Maillage interne** entre pages + retour vers la réservation
- [ ] FAQ en bas de page avec **données structurées `FAQPage`** (gagne des extraits enrichis)
- [ ] 🟢 Page **bilingue EN** pour capter les touristes (Mont-Saint-Michel = forte audience internationale)

---

## 6. 🟠 Off-page / notoriété (backlinks)

- [ ] Être **référencé par l'Office de Tourisme** de Cancale et de la Baie (lien fort, local, gratuit)
- [ ] Partenariats : hôtels, chambres d'hôtes, guides gastronomiques bretons → échanges de liens
- [ ] Presse locale (*Ouest-France*, *Le Télégramme*) : article = backlink d'autorité
- [ ] Blogs food / voyage : invitation dégustation contre article
- [ ] Inscription **producteurs locaux / circuits courts** (labels, marchés)
- [ ] 🟢 Cohérence réseaux sociaux (Instagram surtout : la photo de plateaux/feu de bois performe très bien)

---

## 7. 🟢 Conversion & suivi (transformer le trafic)

- [ ] CTA « Réserver » déjà présent partout (mailto pré-rempli ✅)
- [ ] 🟠 À terme : **formulaire de réservation** (Netlify Forms, Formspree, ou TheFork) pour ne rien perdre + confirmation auto
- [ ] 🟠 Installer **un outil de mesure respectueux** (Plausible/Matomo, ou GA4) + bannière cookies si GA4
- [ ] 🟠 Suivre les conversions : clics e-mail, clics téléphone, clics itinéraire
- [ ] 🟢 Ajouter un **clic-to-call** visible sur mobile (déjà : `tel:` actif)
- [ ] 🟢 Newsletter saisonnière (arrivages, fêtes de fin d'année = pic huîtres)

---

## 8. ✅ Checklist de lancement (ordre conseillé)

1. [ ] Remplacer toutes les **données provisoires** (§1)
2. [ ] Importer les **vraies photos** + photos pro (§ README)
3. [ ] Déployer en **HTTPS** sur Netlify/Vercel/OVH (§ README)
4. [ ] Choisir le domaine canonique (`www` ou non) + redirections 301
5. [ ] **Search Console** + soumettre `sitemap.xml` ; **Bing Webmaster**
6. [ ] Test **Rich Results** + **PageSpeed mobile**
7. [ ] **Google Business Profile** complet + 25 photos (§4.1)
8. [ ] Lancer la **collecte d'avis** (§4.2)
9. [ ] Inscriptions **annuaires + tourisme** avec NAP identique (§4.3)
10. [ ] Planifier le **contenu** (pages + posts Google) (§5)
11. [ ] Démarrer l'**acquisition de backlinks** locaux (§6)
12. [ ] Mettre en place le **suivi analytics** (§7)

---

### Indicateurs à suivre (mensuel)
- Position moyenne sur : *huîtres Cancale*, *restaurant fruits de mer Cancale*, *ostréiculteur Cancale*
- Apparitions & actions dans le **pack local** (vues fiche, itinéraires, appels)
- Nombre & note des **avis**
- Trafic organique (Search Console : impressions / clics / CTR)
- Core Web Vitals (Search Console → Signaux Web essentiels)

> Avec une base technique « top 1 » + une fiche Google soignée + des avis réguliers, la Maison d'Angaly a tous les atouts pour passer **devant la concurrence** sur Cancale et la Baie du Mont-Saint-Michel.
