import { DocumentNode, gql } from 'apollo-boost';

export interface IGraphQLTypes {
    SIGNIN_USER: DocumentNode;
    FETCH_USERS: DocumentNode;
}

export const GraphQLTypes: IGraphQLTypes = {
    SIGNIN_USER: gql`
        mutation addNewUser($input: User!) {
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
