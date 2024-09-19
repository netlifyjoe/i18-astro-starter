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
        defaultLocale: "en",
        locales: ["en", "jp", "es"],
        // routing: "manual"
        fallback: {
            es: "en",
            jp: "en"
        },
        routing: {
            fallbackType: "rewrite",
        }
    },
    trailingSlash: 'never'
});
