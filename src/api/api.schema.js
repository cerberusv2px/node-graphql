import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    users: [User]
    userById(id: Int!): User
    books: [Book]
  }

  type Mutation {
    createUser(input: UserInput): User
    createBook(input: BookInput): Book
  }
`;

export default typeDefs;
