// Categories for blog posts / notizie
export const categorieNotizie: Record<string, string> = {
  "prodotto": "Aggiornamenti Prodotto",
  "funzionalita": "Nuove Funzionalità",
  "cantiere": "Badge di Cantiere",
  "ai": "Intelligenza Artificiale",
  "sicurezza": "Sicurezza sul Lavoro",
  "news": "News",
};

// Get display label from slug
export function getCategoriaLabel(slug: string): string {
  return categorieNotizie[slug] || slug;
}
