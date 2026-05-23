// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://MadeByEmKo.github.io',
  base: process.env.GITHUB_ACTIONS ? '/hostines-ab' : '/',
  output: 'static',
});
