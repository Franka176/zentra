import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const configuredSite = process.env.SITE_URL?.trim();
let site;

if (configuredSite) {
  const parsedSite = new URL(configuredSite);
  const isLocal = ['localhost', '127.0.0.1'].includes(parsedSite.hostname);

  if (parsedSite.protocol !== 'https:' && !(isLocal && parsedSite.protocol === 'http:')) {
    throw new Error('SITE_URL must use HTTPS, except for localhost development.');
  }
  if (parsedSite.pathname !== '/' || parsedSite.search || parsedSite.hash) {
    throw new Error('SITE_URL must contain only the site origin, without a path or query.');
  }

  site = parsedSite.origin;
}

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  integrations: site
    ? [sitemap({ filter: (page) => !page.endsWith('/robots.txt') })]
    : [],
});
