import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Interim deploy: GitHub Pages project site under the bigredoakINC user at:
//   https://bigredoakinc.github.io/big-red-oak-website/
// (Org `Big-Red-Oak` enforces SSO; the stored token isn't SSO-authorized yet, so
//  we publish under the user account for now and transfer to the org once it is.)
// When we move to Vercel + a custom domain, set `site` to the real domain and
// clear `base` (Vercel serves from root).
export default defineConfig({
  site: 'https://bigredoakinc.github.io',
  base: '/big-red-oak-website',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
