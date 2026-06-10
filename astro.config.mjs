import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Host-aware config.
// - On GitHub Pages (interim preview): served under /big-red-oak-website/ at
//   https://bigredoakinc.github.io/big-red-oak-website/
// - On Vercel (go-live): Vercel sets VERCEL=1 automatically, so we serve from root
//   and use the real domain (SITE_URL env, falling back to the vercel.app URL).
// Set SITE_URL in Vercel's project env to your final domain (e.g. https://bigredoak.com).
const onVercel = process.env.VERCEL === '1';

export default defineConfig({
  site: onVercel
    ? (process.env.SITE_URL || 'https://big-red-oak-website.vercel.app')
    : 'https://bigredoakinc.github.io',
  base: onVercel ? undefined : '/big-red-oak-website',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
