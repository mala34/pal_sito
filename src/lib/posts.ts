import { getCollection } from "astro:content";

type Post = Awaited<ReturnType<typeof getCollection<"posts">>>[number];

/** Sort by ordine (ascending, lower first) then by date (descending, newest first) */
function sortPosts(a: Post, b: Post): number {
  const oa = a.data.ordine ?? 999;
  const ob = b.data.ordine ?? 999;
  if (oa !== ob) return oa - ob;
  return b.data.date.getTime() - a.data.date.getTime();
}

export async function getNotizie() {
  const posts = await getCollection("posts");
  return posts.filter((p) => p.data.tipo === "notizia").sort(sortPosts);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
