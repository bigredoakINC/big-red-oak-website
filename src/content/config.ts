import { defineCollection, z } from 'astro:content';

// Blog posts → Clean Currents. The AI Content Agent will eventually create these
// (as Sanity docs); for v1 they are local Markdown so the site runs with no CMS.
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedAt: z.coerce.date(),
    author: z.string().default('Big Red Oak'),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// Case studies → Our Work.
const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    summary: z.string(),
    cover: z.string().optional(),
    metrics: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    publishedAt: z.coerce.date(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, work };
