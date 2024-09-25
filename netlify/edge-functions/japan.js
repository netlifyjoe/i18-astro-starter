const japan = async (request, context) => {
    let path = new URL(request.url).pathname;

    if (context.geo?.country?.code === 'US') {
        path = `/jp${path}`;
        console.log("path", path);
    }

    return new URL(path, request.url);
};

export const config = {
    path: '/articles'
};

export default japan;
