import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    users: [User]
    userById(id: Int!): User
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`;

export default typeDefs;
