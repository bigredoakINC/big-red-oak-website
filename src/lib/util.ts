// Prefix an internal path with the configured base (so links work on GitHub Pages
// where the site lives under /big-red-oak-website/). External URLs pass through.
export function withBase(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) {
    return path;
  }
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
