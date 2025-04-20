// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Thompson6626.github.io',
  base: 'ComoEnCasa',
  vite: {
    plugins: [tailwindcss()]
  }
});