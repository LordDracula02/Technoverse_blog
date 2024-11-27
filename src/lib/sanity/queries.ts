import { client } from "@/sanity/lib/client";

export async function getCategories() {
  const query = `*[_type == "category"] {
    _id,
    title,
    description,
    "slug": slug.current
  }`;
  
  return client.fetch(query);
}

export async function getPosts(category?: string) {
  const query = category
    ? `*[_type == "post" && references(*[_type=="category" && slug.current == $category]._id)] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        mainImage,
        publishedAt,
        "categories": categories[]->{ title, "slug": slug.current },
        "author": author->{ name, "slug": slug.current }
      }`
    : `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        mainImage,
        publishedAt,
        "categories": categories[]->{ title, "slug": slug.current },
        "author": author->{ name, "slug": slug.current }
      }`;
  
  const params = category ? { category } : {};
  return client.fetch(query, params);
}
