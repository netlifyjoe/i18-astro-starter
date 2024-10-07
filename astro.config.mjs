import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import dotenv from 'dotenv';
dotenv.config();

const locales = process.env.SUPPORTED_LOCALES.split(',');
const defaultLocale = process.env.DEFAULT_LOCALE;

function getLocaleFallback() {
    let fallback = {};
    locales.forEach((locale) => {
        if (locale != defaultLocale) {
            fallback[locale] = process.env.DEFAULT_LOCALE;
        }
    });

    return fallback;
}

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
        defaultLocale: defaultLocale,
        locales: locales,
        // routing: "manual"
        fallback: getLocaleFallback(),
        routing: {
            fallbackType: 'rewrite'
        }
    },
    trailingSlash: 'ignore',
    server: { port: 3000 }
});
