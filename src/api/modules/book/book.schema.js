import { gql } from 'apollo-server-express';

const Books = gql`
  input BookInput {
    name: String!
    userId: Int!
  }

  type Book {
    id: Int
    name: String
  }
`;

export default Books;
