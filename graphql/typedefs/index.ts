import { gql, DocumentNode } from 'apollo-boost';
import { GraphQLSchema } from './schema';
// type definitions for queries and mutations here
export interface IGraphQLTypes {
    ADD_USER: DocumentNode;
    FETCH_USERS: DocumentNode;
}

export const GraphQLTypes: IGraphQLTypes = {
    ADD_USER: gql`
        mutation addNewUser($input: ${GraphQLSchema.USER_SCHEMA}!) {
            addNewUser(input: $input) {
                id
                name
                avatar
            }
        }
    `,
    FETCH_USERS: gql`
        query retrieveUsers {
            id
            name
            avatar
        }
    `,
};
