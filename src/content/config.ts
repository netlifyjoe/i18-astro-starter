// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const articleCollection = defineCollection({
    type: 'data', // v2.5.0 and later
    schema: z.object({
        id: z.string(),
        title: z.string(),
        markdown_content: z.string().optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'articles': articleCollection,
};