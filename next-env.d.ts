/// <reference types="next" />
/// <reference types="next/types/global" />

import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

declare module 'next' {
    export interface NextPageContext {
        apolloClient?: ApolloClient<NormalizedCacheObject>;
    }
}
