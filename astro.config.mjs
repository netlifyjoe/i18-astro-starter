import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false
        })
    ],
    output: 'hybrid',
    adapter: netlify(),
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'jp'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    trailingSlash: 'never',
    build: {
        format: 'directory'
    },
    sites: [
        {
            name: 'en',
            url: 'https://i18-astro-starter.semoneytronic.com',
        },
        {
            name: 'jp',
            url: 'https://i18-astro-starter-jp.semoneytronic.com',
        },
    ],
});