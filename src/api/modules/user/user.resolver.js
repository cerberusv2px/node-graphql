import * as userController from './user.controller';

const UserResolver = {
  Query: {
    users: userController.getUsers,
    userById: userController.getUserById
  },
  Mutation: {
    createUser: userController.saveUser
  }
};

export default UserResolver;
