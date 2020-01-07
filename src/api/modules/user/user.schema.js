import { gql } from 'apollo-server-express';

const Users = gql`
  input UserInput {
    name: String!
    address: String!
  }

  type User {
    id: Int
    name: String
    address: String
    books: [Book]
  }
`;

export default Users;
