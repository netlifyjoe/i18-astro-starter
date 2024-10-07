// stackbit.config.ts
import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from "@stackbit/cms-git";

// import Models from './.stackbit/models';

let contentSources = [
    new GitContentSource({
        rootPath: __dirname,
        contentDirs: ["src/content"],
        useFileIds: true,
        models: [
            {
                name: "Article",
                type: "page",
                urlPath: "/articles/create/{slug}",
                filePath: "src/content/articles/{slug}.json",
                fields: [
                    // {
                    //     name: "slug",
                    //     type: "slug",
                    //     required: true
                    // },
                    {
                        name: "title",
                        type: "string",
                        required: true
                    },
                ]
            }
        ],
        assetsConfig: {
            referenceType: "static",
            staticDir: "public",
            uploadDir: "images",
            publicPath: "/"
        }
    })
];

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0",
    ssgName: "astro",
    nodeVersion: "20",
    experimental: {
        ssg: {
            name: "Astro",
            logPatterns: {
                up: ["is ready", "astro"],
            },
            directRoutes: {
                "socket.io": "socket.io",
            },
            passthrough: ["/vite-hmr/**"],
        },
    },
    contentSources
});