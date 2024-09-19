import { contentfulClient } from './contentful';
import type { EntryFieldTypes } from 'contentful';

export interface Blog {
    contentTypeId: 'PostFeedLayout';
    fields: {
        title: EntryFieldTypes.Text;
        slug: EntryFieldTypes.Text;
        locale: EntryFieldTypes.Text;
    };
}

export async function getStaticPaths() {
    const entries = await contentfulClient.getEntries<Blog>({
        content_type: 'PostFeedLayout'
    });

    return entries.items.map(({ fields }) => {
        console.log(fields.slug, fields.locale);
        return {
            params: { slug: fields.slug, lang: fields.locale },
            props: { title: fields.title }
        };
    });
}