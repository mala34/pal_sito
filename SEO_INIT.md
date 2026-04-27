# SEO_INIT — Guida Universale per Ottimizzare una Landing / Portale

Questa guida descrive tutti i passi necessari per ottimizzare SEO, performance e indicizzazione di qualsiasi sito web o landing page, dalla prima implementazione al monitoraggio continuo.

---

## 1. Meta Tag fondamentali

Ogni pagina DEVE avere nel `<head>`:

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>{titolo pagina} — {brand}</title>
<meta name="description" content="{descrizione}" />
<meta name="robots" content="max-image-preview:large" />
<link rel="canonical" href="{URL completo della pagina}" />
```

### Regole di lunghezza

| Tag | Min | Max | Note |
|---|---|---|---|
| `<title>` | 30 char | **60 char** | Brand + keyword principale. Google tronca oltre 60 |
| `meta description` | 70 char | **155 char** | Keyword + call to action. Deve invogliare al click |
| H1 | — | — | **Una sola H1 per pagina**, con keyword principale |
| URL | — | — | Breve, leggibile, tutto minuscolo, trattini (mai underscore) |

### Title tag: formato consigliato
```
{Keyword Principale} — {Brand}
```
Esempio: `Badge di cantiere — Persone al Lavoro`

---

## 2. Open Graph (OG) — Social sharing

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="{URL canonico}" />
<meta property="og:title" content="{titolo}" />
<meta property="og:description" content="{descrizione}" />
<meta property="og:image" content="{URL assoluto immagine}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="it_IT" />
<meta property="og:site_name" content="{Brand}" />
```

### OG Image — Specifiche

| Proprieta | Valore |
|---|---|
| **Dimensioni** | **1200 x 630 px** (rapporto 1.91:1) |
| Formato | JPG o PNG |
| Peso max | < 300 KB (ideale < 150 KB) |
| Contenuto | Logo + titolo + visual. Testo leggibile anche in miniatura |
| Fallback | Se non specificata per pagina, usa immagine default del sito |

> Google, Facebook, LinkedIn, Twitter usano tutti 1200x630. E' lo standard universale.

---

## 3. Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{titolo}" />
<meta name="twitter:description" content="{descrizione}" />
<meta name="twitter:image" content="{URL assoluto immagine 1200x630}" />
<!-- Opzionali -->
<meta name="twitter:site" content="@tuoaccount" />
<meta name="twitter:creator" content="@tuoaccount" />
```

---

## 4. Favicon e icone per tutti i dispositivi

### File necessari nella cartella `public/`

| File | Dimensione | Uso |
|---|---|---|
| `favicon.ico` | 32x32 | Browser desktop (formato ICO, contiene 16x16 e 32x32) |
| `favicon-16x16.png` | 16x16 | Tab browser |
| `favicon-32x32.png` | 32x32 | Tab browser |
| `apple-touch-icon.png` | **180x180** | iOS (iPhone/iPad) "Aggiungi a Home" |
| `android-chrome-192x192.png` | 192x192 | Android, PWA |
| `android-chrome-512x512.png` | 512x512 | Android splash screen, PWA |
| `mstile-270x270.png` | 270x270 | Windows tile (opzionale) |

### Tag HTML nel `<head>`

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="msapplication-TileImage" content="/mstile-270x270.png" />
<meta name="msapplication-TileColor" content="{colore brand}" />
<meta name="theme-color" content="{colore brand}" />
```

### Generatore consigliato
Usa [realfavicongenerator.net](https://realfavicongenerator.net/) — carica il logo e genera tutti i formati + il codice HTML.

### site.webmanifest

```json
{
  "name": "{Nome Completo Brand}",
  "short_name": "{Abbreviazione}",
  "icons": [
    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "{colore brand primario}",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

---

## 5. Structured Data (Schema.org / JSON-LD)

Inserire nel `<head>` come `<script type="application/ld+json">`.

### Schema minimo per un sito/landing

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tuosito.it/#organization",
      "name": "{Nome Brand}",
      "alternateName": ["{variante1}", "{variante2}"],
      "url": "https://tuosito.it/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tuosito.it/logo.png"
      },
      "email": "{email}",
      "telephone": "{telefono}",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "{via}",
        "addressLocality": "{citta}",
        "postalCode": "{cap}",
        "addressCountry": "IT"
      },
      "sameAs": [
        "https://www.linkedin.com/company/{slug}",
        "https://www.facebook.com/{slug}"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://tuosito.it/#website",
      "url": "https://tuosito.it/",
      "name": "{Nome Brand}",
      "inLanguage": "it-IT",
      "publisher": { "@id": "https://tuosito.it/#organization" }
    },
    {
      "@type": "WebPage",
      "@id": "{URL pagina corrente}#webpage",
      "url": "{URL pagina corrente}",
      "name": "{titolo pagina}",
      "description": "{descrizione pagina}",
      "inLanguage": "it-IT",
      "isPartOf": { "@id": "https://tuosito.it/#website" }
    }
  ]
}
```

### Schema aggiuntivi per tipo di sito

| Tipo sito | Schema da aggiungere |
|---|---|
| Software/SaaS | `SoftwareApplication` con `offers`, `applicationCategory`, `keywords` |
| E-commerce | `Product` con `offers`, `aggregateRating` |
| Blog | `Article` o `BlogPosting` con `author`, `datePublished` |
| Attivita locale | `LocalBusiness` con `openingHours`, `geo` |
| FAQ page | `FAQPage` con `mainEntity` (abilita rich snippet) |
| Breadcrumb | `BreadcrumbList` con `itemListElement` |

### Validazione
- Google: https://search.google.com/test/rich-results
- Schema.org: https://validator.schema.org/

---

## 6. robots.txt

Posizione: `public/robots.txt` (root del sito)

```
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: AhrefsBot
Allow: /

User-agent: SemrushBot
Allow: /

User-agent: *
Allow: /

Sitemap: https://tuosito.it/sitemap-index.xml
```

### Regole
- `Allow: /` = permetti tutto
- `Disallow: /admin/` = blocca percorsi privati
- Non mettere MAI `noindex` sulle pagine che devono rankare
- Dichiarare esplicitamente i bot principali

---

## 7. Sitemap XML

### Opzione A: auto-generata (consigliata)
- Astro: `@astrojs/sitemap` in `astro.config.mjs`
- Next.js: `next-sitemap`
- Deve contenere TUTTE le pagine indicizzabili

### Opzione B: manuale
`public/sitemap.xml` con formato:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tuosito.it/</loc>
    <lastmod>2026-04-25</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tuosito.it/funzionalita/</loc>
    <lastmod>2026-04-25</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

### Post-deploy
- Aggiornare `lastmod` SOLO sulle pagine effettivamente modificate
- Inviare tramite Google Search Console e Bing Webmaster Tools

---

## 8. Canonical URL

Ogni pagina deve avere:
```html
<link rel="canonical" href="{URL preferito completo}" />
```

### Regole
- Scegliere UNA forma: con o senza `www`, con o senza trailing slash
- Redirect 301 da tutte le varianti verso la forma canonica
- Redirect 301 da HTTP a HTTPS

---

## 9. Heading Hierarchy (H1-H6)

| Regola | Dettaglio |
|---|---|
| **Una sola H1** per pagina | Deve contenere la keyword principale |
| H2 per sezioni | Keyword secondarie e varianti |
| H3 per sottosezioni | Approfondimenti |
| Mai saltare livelli | Da H1 a H3 senza H2 = errore |
| Homepage | L'H1 deve descrivere il prodotto/servizio principale |

---

## 10. Immagini — Ottimizzazione completa

### Attributi obbligatori su ogni `<img>`

```html
<img
  alt="Descrizione pertinente con keyword se naturale"
  src="/images/nome-file.jpg"
  width="800"
  height="450"
  loading="lazy"
  class="..."
/>
```

| Attributo | Regola |
|---|---|
| `alt` | Descrittivo, con keyword se pertinente. Mai vuoto (tranne icone decorative) |
| `width` + `height` | **Sempre presenti**. Prevengono layout shift (CLS). Usare le dimensioni reali |
| `loading="lazy"` | Su TUTTE le immagini sotto il fold |
| `loading="eager"` | Solo sull'immagine hero / above the fold (o omettere, e' il default) |
| `fetchpriority="high"` | Solo sull'immagine hero / LCP (Largest Contentful Paint) |

### Formati e compressione

| Formato | Quando usarlo |
|---|---|
| **WebP** | Formato preferito. Supportato ovunque. Ottimo rapporto qualita/peso |
| **AVIF** | Migliore compressione, supporto in crescita |
| JPG | Fallback universale per foto |
| PNG | Solo per immagini con trasparenza |
| SVG | Icone e loghi (vettoriale, peso zero) |

### Target peso
- Immagini hero: < 200 KB
- Immagini contenuto: < 150 KB
- Icone/loghi: < 30 KB
- Totale pagina immagini: < 1 MB

### Strumenti di compressione
- [Squoosh](https://squoosh.app/) — online, gratuito
- [TinyPNG](https://tinypng.com/) — batch
- Sharp (Node.js) — build time

---

## 11. Font — Caricamento non-blocking

```html
<!-- Preconnect al server font -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Font con display=swap (non blocca il rendering) -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400..800&display=swap" rel="stylesheet" />
```

### Regole
- `display=swap` e' fondamentale — mostra testo subito con font fallback
- Caricare solo i weight necessari (non tutti)
- Considerare font-subsetting per ridurre peso
- `font-display: swap` nel CSS per font self-hosted

---

## 12. Performance (Core Web Vitals)

Google usa questi 3 metriche come fattore di ranking:

### LCP (Largest Contentful Paint) — target < 2.5s
- [ ] Immagine hero ottimizzata e con `fetchpriority="high"`
- [ ] Font non-blocking (`display=swap`)
- [ ] Nessun CSS/JS render-blocking nel `<head>`
- [ ] CDN per servire gli asset

### INP (Interaction to Next Paint) — target < 200ms
- [ ] JavaScript minimo e differito (`defer`, `async`)
- [ ] Nessun long task nel main thread
- [ ] Event handler leggeri

### CLS (Cumulative Layout Shift) — target < 0.1
- [ ] `width` e `height` su **tutte** le immagini
- [ ] Font con `font-display: swap`
- [ ] Nessun contenuto iniettato dinamicamente sopra il fold

### Strumenti di verifica
- [PageSpeed Insights](https://pagespeed.web.dev/)
- Lighthouse (Chrome DevTools > Lighthouse)
- Web Vitals extension per Chrome

---

## 13. Contenuto — Linee guida per il testo

### Lunghezza contenuto per pagina

| Tipo pagina | Parole minime | Target |
|---|---|---|
| Homepage | 500 | 800-1200 |
| Pagina servizio/prodotto | 600 | 800-1500 |
| Blog post | 800 | 1000-2000 |
| Landing page campagna | 300 | 500-800 |
| FAQ page | 500 | 800+ |

### Best practice contenuto
- Keyword principale nel **primo paragrafo** (entro le prime 100 parole)
- Keyword density naturale: 1-3% (non forzare)
- Usare sinonimi e varianti (LSI keywords)
- Frasi brevi, paragrafi da 2-3 righe
- Bold sulle keyword importanti (con `<strong>`, non `<b>`)
- Ogni pagina deve linkare almeno 2-3 altre pagine del sito (link interni)

### Anchor text
- Descrittivi: "scopri le funzionalita" > "clicca qui"
- Le pagine importanti devono ricevere piu link interni

---

## 14. Link interni

| Regola | Dettaglio |
|---|---|
| Ogni pagina linka 2-3 pagine interne | Aiuta Google a scoprire tutte le pagine |
| Anchor text descrittivi | Mai "clicca qui" o "leggi di piu" senza contesto |
| Menu di navigazione | Link alle sezioni principali |
| Footer | Link a privacy, cookie, contatti, pagine legali |
| Breadcrumb | Se il sito ha gerarchia, aggiungere breadcrumb con schema |

---

## 15. HTTPS e Redirect

| Regola | Come |
|---|---|
| Tutto su HTTPS | Certificato SSL attivo |
| HTTP -> HTTPS | Redirect 301 |
| www -> non-www (o viceversa) | Redirect 301. Scegliere UNA forma |
| Nessun contenuto misto | Tutti gli asset (img, css, js) su HTTPS |
| Vecchi URL -> nuovi | Redirect 301 se cambiano gli URL |

---

## 16. Multilingua (se applicabile)

```html
<link rel="alternate" hreflang="it" href="https://tuosito.it/" />
<link rel="alternate" hreflang="en" href="https://tuosito.it/en/" />
<link rel="alternate" hreflang="x-default" href="https://tuosito.it/" />
```

### Regole hreflang
- Presenti nell'`<head>` E nella sitemap
- Bidirezionali: se IT punta a EN, EN deve puntare a IT
- `x-default` = lingua/regione di fallback

---

## 17. Checklist pre-lancio

### Tecnica
- [ ] HTTPS attivo con redirect da HTTP
- [ ] Redirect www <-> non-www
- [ ] robots.txt con link alla sitemap
- [ ] Sitemap XML generata e funzionante
- [ ] Canonical URL su ogni pagina
- [ ] Nessun `noindex` sulle pagine pubbliche
- [ ] Nessun link rotto (href="#" o 404)
- [ ] JSON-LD Schema.org validato

### Meta tag
- [ ] Title unico per ogni pagina (< 60 char)
- [ ] Meta description unica (< 155 char)
- [ ] Open Graph completo con immagine 1200x630
- [ ] Twitter Card
- [ ] `meta robots max-image-preview:large`

### Immagini
- [ ] Alt text su tutte le immagini
- [ ] width + height su tutte le immagini
- [ ] loading="lazy" sotto il fold
- [ ] fetchpriority="high" sull'hero
- [ ] Formato WebP dove possibile
- [ ] Peso < 200 KB per immagine

### Icone
- [ ] favicon.ico (32x32)
- [ ] apple-touch-icon (180x180)
- [ ] android-chrome (192x192 + 512x512)
- [ ] site.webmanifest con colori brand corretti

### Struttura
- [ ] Una sola H1 per pagina con keyword
- [ ] Gerarchia H1 > H2 > H3 rispettata
- [ ] Link interni tra le pagine (2-3 per pagina)
- [ ] Anchor text descrittivi

### Performance
- [ ] LCP < 2.5s (PageSpeed Insights)
- [ ] CLS < 0.1
- [ ] INP < 200ms
- [ ] Font non-blocking
- [ ] JS differito

### Contenuto
- [ ] Keyword nel primo paragrafo
- [ ] Almeno 500+ parole per pagina
- [ ] Testi unici (no contenuto duplicato)

---

## 18. Checklist post-lancio

### Subito (giorno 1)
- [ ] Verificare sito su Google Search Console
- [ ] Inviare sitemap su Google Search Console
- [ ] Richiedere indicizzazione delle pagine principali
- [ ] Verificare sito su Bing Webmaster Tools
- [ ] Inviare sitemap a Bing

### Prima settimana
- [ ] Installare Google Analytics 4
- [ ] Verificare indicizzazione (site:tuosito.it su Google)
- [ ] Testare pagine con PageSpeed Insights
- [ ] Validare structured data con Google Rich Results Test
- [ ] Testare OG image con https://www.opengraph.xyz/

### Primo mese
- [ ] Creare profili social (LinkedIn, Facebook) + aggiornare sameAs nel JSON-LD
- [ ] Creare Google Business Profile (se sede fisica)
- [ ] Registrarsi su directory di settore (Capterra, GetApp, G2)
- [ ] Monitorare Search Console: impressioni, click, errori

### Continuo
- [ ] Monitorare posizioni keyword target ogni settimana
- [ ] Controllare errori di indicizzazione in Search Console
- [ ] Aggiornare lastmod nella sitemap ad ogni modifica contenuto
- [ ] Richiedere reindicizzazione dopo modifiche importanti
- [ ] Pubblicare contenuti freschi (blog, FAQ, guide)
- [ ] Ottenere backlink da siti autorevoli del settore

---

## 19. Procedura post-deploy (ogni modifica contenuto)

1. **Aggiornare `lastmod`** nella sitemap sulle pagine modificate
2. **Build e deploy**
3. **Google Search Console** > Controllo URL > Richiedi indicizzazione
4. **Verificare dopo 2-3 giorni** che la scansione sia aggiornata

---

## 20. Errori da evitare

| Errore | Perche e' grave |
|---|---|
| Keyword stuffing | Google penalizza. Scrivi per le persone, non per i bot |
| Contenuto duplicato | Stessa pagina da URL diversi senza canonical |
| Link rotti (404) | Google penalizza i dead link |
| Contenuto troppo scarso | Pagine < 300 parole rankano male |
| Title/description duplicati | Ogni pagina deve avere valori UNICI |
| Ignorare il mobile | Google usa mobile-first indexing |
| Cambiare URL senza redirect | Redirect 301 dal vecchio al nuovo URL |
| Comprare backlink | Google penalizza i link artificiali |
| Ignorare Search Console | E' la fonte di verita, controllala ogni settimana |
| Immagini senza alt/dimensioni | Penalizza accessibilita e CLS |

---

## 21. Strumenti gratuiti

| Strumento | Cosa fa |
|---|---|
| [Google Search Console](https://search.google.com/search-console) | Impressioni, click, posizione, errori indicizzazione |
| [Bing Webmaster Tools](https://www.bing.com/webmasters) | Come Search Console per Bing |
| [Google Analytics 4](https://analytics.google.com) | Traffico, comportamento utenti, conversioni |
| [PageSpeed Insights](https://pagespeed.web.dev/) | Performance e Core Web Vitals |
| [Rich Results Test](https://search.google.com/test/rich-results) | Validazione JSON-LD / structured data |
| [OpenGraph.xyz](https://www.opengraph.xyz/) | Preview OG image e meta tag |
| [realfavicongenerator.net](https://realfavicongenerator.net/) | Generatore favicon per tutti i dispositivi |
| [Squoosh](https://squoosh.app/) | Compressione immagini online |
| [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) | Backlink e audit SEO (gratuito per il proprio sito) |
