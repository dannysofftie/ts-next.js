import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { useMemo } from 'react';

const readFromCookies = (key: string) => {
    if (typeof window === 'undefined') {
        return {};
    }

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

// On the client, we store the Apollo Client in the following variable.
// This prevents the client from reinitializing between page transitions.
let apolloClient: ApolloClient<NormalizedCacheObject> = null;

const token = readFromCookies('token');

export const createApolloClient = (initialstate?: NormalizedCacheObject) => {
    return new ApolloClient({
        uri: process.env.GRAPHQL_ENDPOINT,
        credentials: 'same-origin',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        cache: new InMemoryCache({
            // @ts-ignore
            dataIdFromObject: (obj) => {
                return obj.id;
            },
        }).restore(initialstate),
    });
};

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {NormalizedCacheObject} initialState
 */
export function initApolloClient(initialState?: NormalizedCacheObject) {
    const client = apolloClient ?? createApolloClient(initialState);

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') {
        return client;
    }

    // Create the Apollo Client once in the client
    if (!apolloClient) {
        apolloClient = client;
    }

    return client;
}

export function useApollo(initialState) {
    return useMemo(() => initApolloClient(initialState), [initialState]);
}
