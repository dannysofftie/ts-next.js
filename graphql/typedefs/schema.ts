import { gql } from 'apollo-boost';
import { DocumentNode } from 'graphql';

// schema definitions here
export interface IGraphQLSchema {
    USER_SCHEMA: DocumentNode;
}
export const GraphQLSchema: IGraphQLSchema = {
    USER_SCHEMA: gql`
        type User {
            id: String
            name: String
        }
    `,
};
