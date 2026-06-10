import { createClient, type SanityClient } from '@sanity/client';

/*
  Sanity data layer (env-gated).

  Until the project ID is set in the environment, `sanityEnabled` is false and the
  pages keep using the local content in src/data/content.ts and src/content/*.
  Once PUBLIC_SANITY_PROJECT_ID (and optionally SANITY_READ_TOKEN) are set — e.g. in
  Vercel's project env — the helpers below return live CMS content and pages can switch
  their source with no structural change.

  Env vars:
    PUBLIC_SANITY_PROJECT_ID   (not secret)
    PUBLIC_SANITY_DATASET      (defaults to "production")
    SANITY_READ_TOKEN          (secret — only needed for draft/preview reads)
*/
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const token = import.meta.env.SANITY_READ_TOKEN;

export const sanityEnabled = Boolean(projectId);

export const client: SanityClient | null = sanityEnabled
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-10-01',
      useCdn: !token,
      token: token || undefined,
    })
  : null;

// GROQ queries — ready for when pages switch to Sanity.
export const queries = {
  posts: `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc){
    "slug": slug.current, title, excerpt, author, publishedAt, tags, featured
  }`,
  caseStudies: `*[_type == "caseStudy" && !(_id in path("drafts.**"))] | order(publishedAt desc){
    "slug": slug.current, title, client, summary, metrics, publishedAt, featured
  }`,
  siteSettings: `*[_type == "siteSettings"][0]`,
};

export async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  if (!client) return fallback;
  try {
    return await client.fetch<T>(query);
  } catch {
    return fallback;
  }
}
