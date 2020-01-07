import { userService } from '../../services';

export const getUsers = async () => {
  return userService
    .list()
    .then(users => users)
    .catch(err => {
      throw err;
    });
};

export const saveUser = async (_, { input }) => {
  return userService
    .save(input)
    .then(users => users)
    .catch(err => {
      throw err;
    });
};

export const getUserById = async (_, { id }) => {
  return userService
    .getById(id)
    .then(user => user)
    .catch(err => {
      throw err;
    });
};
