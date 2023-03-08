import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	experimental: {
	  assets: true
	 }
	site: 'https://astro-test-2-1.paulapplegate.com',
	integrations: [mdx(), sitemap()],
});
