// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://JohnFSDev.github.io/adr-collections-web/',
  integrations: [tailwind()]
});