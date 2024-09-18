
export function getLocalizedString(key, language = 'en') {
    const languageStrings = {
        en: {
            home: 'Home',
            revalidation: 'Revalidation',
            imagecdn: 'Image CDN',
            edgefunctions: 'Edge Functions',
            blobs: 'Blobs',
            contentful: 'Contentful'
        },
        es: {
            home: 'Hogar',
            revalidation: 'Revalidación',
            imagecdn: 'Imagen CDN',
            edgefunctions: 'Funciones de borde',
            blobs: 'Manchas',
            contentful: 'Contento'
        },
        jp: {
            home: '家',
            revalidation: '再検証',
            imagecdn: '画像CDN',
            edgefunctions: 'エッジ機能',
            blobs: 'ブロブ',
            contentful: '充実した'
        }
    };

    if (!languageStrings.hasOwnProperty(language)) {
        console.warn(`Language '${language}' not found. Falling back to English.`);
        language = 'en';
    }

    if (!languageStrings[language].hasOwnProperty(key)) {
        console.warn(`Key '${key}' not found in ${language}. Returning key.`);
        return key;
    }

    return languageStrings[language][key];
}