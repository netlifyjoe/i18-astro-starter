
export function getLocalizedString(key, language = 'en') {
    const languageStrings = {
        en: {
            home: 'Home',
            revalidation: 'Revalidation',
            imagecdn: 'Image CDN',
            edgefunctions: 'Edge Functions',
            blobs: 'Blobs',
            articles: 'Articles',
            connect: 'Connect'
        },
        es: {
            home: 'Hogar',
            revalidation: 'Revalidación',
            imagecdn: 'Imagen CDN',
            edgefunctions: 'Funciones de borde',
            blobs: 'Manchas',
            articles: 'Artículos',
            connect: 'Connect'
        },
        jp: {
            home: '家',
            revalidation: '再検証',
            imagecdn: '画像CDN',
            edgefunctions: 'エッジ機能',
            blobs: 'ブロブ',
            articles: '記事',
            connect: 'Connect'
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