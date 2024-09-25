const japan = async (request, context) => {
    let path = new URL(request.url).pathname;

    if (context.geo?.country?.code === 'US') {
        path = `/jp${path}`;
    }

    // Remove trailing slash if it exists
    path = path.endsWith('/') ? path.slice(0, -1) : path;

    return new URL(path, request.url);
};

export const config = {
    path: '/articles'
};

export default japan;
