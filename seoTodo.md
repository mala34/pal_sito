# SEO Checklist — Persone al Lavoro (personeallavoro.it)

Ultimo aggiornamento: 2026-04-25

---

## Stato attuale

### Fatto
- [x] Title tag unici per ogni pagina (< 60 char)
- [x] Meta description unica per ogni pagina
- [x] H1 unico per pagina (homepage: H1 solo in Hero, About usa H2)
- [x] Canonical URL dinamico su ogni pagina
- [x] Open Graph completo (type, url, title, description, image, locale, site_name)
- [x] Twitter Card (summary_large_image)
- [x] Google Fonts con preconnect + display=swap (non-blocking)
- [x] robots.txt con Allow esplicito per Googlebot, Bingbot, AhrefsBot, SemrushBot + link sitemap
- [x] Sitemap XML auto-generata (@astrojs/sitemap)
- [x] Nessun `noindex` sulle pagine che devono rankare
- [x] Nessun link rotto (href="#" o 404)
- [x] URL puliti, leggibili, tutto minuscolo con trattini
- [x] Schema.org JSON-LD: Organization, SoftwareApplication, WebSite, WebPage
- [x] alternateName nel JSON-LD ("PAL", "Persone al lavoro")
- [x] meta robots max-image-preview:large
- [x] site.webmanifest con brand, icone 192+512, theme_color #FF6600
- [x] HTTPS attivo
- [x] Redirect www -> non-www (https://personeallavoro.it)
- [x] Favicon completo: favicon.ico, 16x16, 32x32, apple-touch-icon 180x180, android-chrome 192+512
- [x] `<link rel="manifest">` linkato nel head
- [x] `<meta name="theme-color" content="#FF6600">` presente
- [x] `<meta name="msapplication-TileColor">` presente
- [x] `width` e `height` su tutte le immagini (previene CLS)
- [x] `loading="lazy"` su immagini sotto il fold
- [x] `fetchpriority="high"` sull'immagine hero
- [x] Link interni tra le pagine (ogni pagina linka 2-3 pagine correlate)

### Da fare — Codice (quando avrai i materiali)
- [ ] OG Image dedicata 1200x630 px (serve il file in public/)
- [ ] Popolare `sameAs` nel JSON-LD (dopo creazione profili social)
- [ ] Aggiungere sezione FAQ alla homepage (rich snippet potenziali)
- [ ] Espandere contenuto testuale delle pagine (target 800-1000 parole)

### Da fare — Azioni esterne (non codice)
- [ ] Verificare/configurare Google Search Console per personeallavoro.it
- [ ] Inviare sitemap tramite Google Search Console
- [ ] Richiedere indicizzazione su Google Search Console
- [ ] Registrare sito su Bing Webmaster Tools
- [ ] Creare profili social (LinkedIn, Facebook) per Persone al Lavoro / Lapsy
- [ ] Creare Google Business Profile (sedi Bologna e Spilamberto)
- [ ] Ottenere primi backlink (directory software: Capterra, GetApp)

### Da fare — Lungo termine
- [ ] Aggiungere sezione blog al sito
- [ ] Scrivere articoli blog targetizzando keyword long-tail
- [ ] Creare landing page dedicate per keyword principali

---

## Keyword Strategy per Persone al Lavoro

| Keyword | Tipo | Note |
|---|---|---|
| persone al lavoro | Brand | Da raggiungere #1 |
| gestione personale cantiere | Principale | Targetizzare in H1 e title |
| badge cantiere | Principale | Pagina dedicata esistente |
| presenze cantiere | Long-tail | Nel contenuto |
| software gestione presenze | Long-tail | Da targetizzare |
| gestione HR cantiere | Long-tail | Da targetizzare |
| app presenze cantiere | Long-tail | Pagina app esistente |
| multilingue cantiere AI | Long-tail (USP) | Pagina dedicata esistente |
| sicurezza artificiale cantiere | Long-tail (USP) | Pagina dedicata esistente |
| software gestione personale | Generica | Servono backlink |

---

## Note

- Il sito era precedentemente su WordPress con AIOSEO plugin
- Ora e' su Astro 6 SSG — tutto il SEO e' implementato nativamente
- Dominio: https://personeallavoro.it (senza www)
- App login: https://app.personeallavoro.it/login
