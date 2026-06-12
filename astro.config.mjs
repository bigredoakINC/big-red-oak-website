import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Host-aware config.
// - Production = Firebase Hosting: build with DEPLOY_TARGET=firebase → served from
//   root at the real domain (SITE_URL, default https://bigredoak.com).
// - Interim preview = GitHub Pages: default build → served under /big-red-oak-website/
//   at https://bigredoakinc.github.io/big-red-oak-website/
// The Firebase deploy workflow sets DEPLOY_TARGET=firebase and SITE_URL.
const isFirebase = process.env.DEPLOY_TARGET === 'firebase';

export default defineConfig({
  site: isFirebase
    ? (process.env.SITE_URL || 'https://bigredoak.com')
    : 'https://bigredoakinc.github.io',
  base: isFirebase ? undefined : '/big-red-oak-website',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
