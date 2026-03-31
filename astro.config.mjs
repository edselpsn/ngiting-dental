// @ts-check
import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';
import fs from 'fs';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
      server: {
    https: {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem'),
    },
  },
  },
});