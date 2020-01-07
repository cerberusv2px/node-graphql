import { ApolloServer } from 'apollo-server-express';
import { BookModule, UserModule } from './modules';
import Api from './api.schema';

const typeDefs = [
  Api,
  UserModule.Users,
  BookModule.Books,
];

const resolvers = [
  UserModule.UserResolver,
  BookModule.BookResolver
];

export default new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  context: ({req, connection}) => {
    if (connection) {
      return connection.context;
    }
  },
  instropection: true,
  playground: (process.env.NODE_ENV === 'production') ? null : true
});
