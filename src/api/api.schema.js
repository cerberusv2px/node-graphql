import { gql } from 'apollo-server-express';
import { BookModule, UserModule } from './modules';

const typeDefs = gql`
  type Query{
    ${UserModule.UserApi.UserQuery}
    ${BookModule.BookApi.BookQuery}
  }
  
  type Mutation {
    ${UserModule.UserApi.UserMutation}
    ${BookModule.BookApi.BookMutation}
  }
`;

export default typeDefs;
