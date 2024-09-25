const japan = async (request, context) => {
    const path = context.geo?.country?.code === 'US' ? '/jp/articles' : '/articles';
    return new URL(path, request.url);
};

export const config = {
    path: '/articles'
};

export default japan;
