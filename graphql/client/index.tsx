import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { getDataFromTree } from '@apollo/client/react/ssr';
import Head from 'next/head';
import React from 'react';
import { getCookie } from 'utils';
import { NextPageContext, NextPage } from 'next';
import { AppContext } from 'next/app';

let globalApolloClient: ApolloClient<NormalizedCacheObject> = null;

/**
 * Create new apollo client
 * This will ALWAYS happen on the server
 * On the client, it might create or reuse
 * the apollo client on the browser
 */

function initApolloClient(ctx: Partial<NextPageContext>, initialState?: NormalizedCacheObject) {
    // A new client is created for each server-side request
    // This will ensure data is not shared over connections
    if (typeof window === 'undefined') {
        return createApolloClient(ctx, initialState);
    }

    // Reuse client on the client-side
    if (!globalApolloClient) {
        globalApolloClient = createApolloClient(ctx, initialState);
    }
    return globalApolloClient;
}

/**
 * Creates and configures ApolloClient
 * @param {Object} [initialState={}]
 */
export function createApolloClient(ctx: Partial<NextPageContext>, initialState?: NormalizedCacheObject) {
    const ssrMode = typeof window === 'undefined';

    const cache = new InMemoryCache({
        dataIdFromObject: (o) => {
            return o.id as any;
            // ? `${o.__typename}:${o.id}` : null;
        },
    }).restore(initialState);

    return new ApolloClient({
        ssrMode,
        cache,
        headers: {
            authorization: `Bearer ${getCookie('token', ctx?.req?.headers?.cookie)}`,
        },
        credentials: 'same-origin',
        uri: process.env.GRAPHQL_ENDPOINT,
    });
}

/**
 * Create and provide the ApolloClient to the NextJS PageTree
 * Usage: Wrap a PageComponent using the HOC pattern
 */
export function withApollo(PageComponent: NextPage, { ssr = true }: { ssr?: boolean } = {}) {
    const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
        const client = apolloClient || initApolloClient(undefined, apolloState);
        return (
            <ApolloProvider client={client}>
                <PageComponent {...pageProps} />
            </ApolloProvider>
        );
    };

    // Set the display name
    if (process.env.NODE_ENV !== 'production') {
        const displayName = PageComponent.displayName || PageComponent.name || 'Component';

        if (displayName === 'App') {
            console.warn('This Apollo HOC only works with PageComponents');
        }

        WithApollo.displayName = `withApollo(${displayName})`;
    }

    if (ssr || PageComponent.getInitialProps) {
        WithApollo.getInitialProps = async (appContext: AppContext) => {
            const { AppTree, ctx } = appContext;
            /**
             * Initialize ApolloClient, add it to the ctx object
             * This allows it to be used in `PageComponent.getInitialProps`
             */
            const apolloClient = (ctx.apolloClient = initApolloClient({
                req: ctx?.req,
                res: ctx?.res,
            }));
            // Run the wrapped getInitialProps methods
            let pageProps = {};
            if (PageComponent.getInitialProps) {
                pageProps = await PageComponent.getInitialProps(ctx);
            }
            // Check if running on the server only
            if (typeof window === 'undefined') {
                // If redirecting, the response is finished
                // This means there is no need to continue rendering
                if (ctx?.res?.finished) {
                    return pageProps;
                }

                // When ssr is enabled (ssr = true)
                if (ssr) {
                    try {
                        // Run all graphql queries
                        await getDataFromTree(<AppTree pageProps={{ ...pageProps, apolloClient }} />);
                    } catch (err) {
                        // Prevent Graphql errors from crashing SSR
                        // Errors will be handled via the data.errors prop
                        // TODO: Hanlde server side errors with 4xx, 5xx pages
                        console.error('Error handling getDataFromTree', err);
                    }
                    // Since componentDidUnmount is not called by getDataFromTree,
                    // Head side effects need to be cleared manually
                    Head.rewind();
                }
            }
            // Extract query data from the apollo store
            const apolloState = apolloClient.cache.extract();

            return {
                ...pageProps,
                apolloState,
            };
        };
    }

    return WithApollo;
}
