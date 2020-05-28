import ApolloClient, { Operation } from 'apollo-boost';

const readFromCookies = (key: string) => {
    const c = decodeURIComponent(document.cookie);
    let d: string | string[];

    const e = {};
    if (c.length < 1) {
        return false;
    }
    if (c.indexOf(';') !== -1) {
        d = c.split(';');
    } else {
        d = c;
    }

    if (typeof d === 'string') {
        e[d.split('=')[0].trim()] = d.split('=')[1].trim();
    } else {
        d.map((p) => (e[p.split('=')[0].trim()] = p.split('=')[1].trim()));
    }

    if (typeof key !== 'undefined') {
        return e[key];
    }
    return e;
};

export const client = new ApolloClient({
    uri: process.env.GRAPHQL_ENDPOINT,
    request: (operation: Operation) => {
        // read token from cookies
        const token = readFromCookies('token');

        operation.setContext({
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
});
