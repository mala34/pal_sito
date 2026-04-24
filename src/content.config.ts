import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    tipo: z.enum(["notizia"]),
    categoria: z.string(),
    date: z.coerce.date(),
    ordine: z.number().nullish(),
    image: z.string().nullish(),
    description: z.string().nullish(),
  }),
});

export const collections = { posts };
