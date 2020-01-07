import { ApolloServer } from 'apollo-server-express';
import { userModule } from './modules';
import Api from './api.schema';

const typeDefs = [
  userModule.Users,
  Api
];

const resolvers = [
  userModule.UserResolver
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
