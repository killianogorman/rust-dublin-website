import { z, defineCollection } from "astro:content";
const talksCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    event_location: z.string(),
    video_url: z.string(),
    slides_url: z.nullable(z.string()),
    tags: z.array(z.string()),
  }),
});
const peopleCollection = defineCollection({
  type: "content",
  schema: z.object({
    // slug: z.string(),
    name: z.string(),
    bio: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
    urls: z.array(z.string()),
    company_info: z.object({
      position: z.string(),
      name: z.string(),
      company_bio: z.string(),
    }),
  }),
});
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});

export const collections = {
  talks: talksCollection,
  people: peopleCollection,
  blog: postsCollection
};
