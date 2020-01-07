import { User } from '../models';

class UserService {
  async list() {
    try {
      return await User.query().withGraphFetched('[books(defaultSelects)]');
    } catch (err) {
      throw err;
    }
  }

  async save(user) {
    try {
      await User.query().insert(user);
    } catch (err) {
      throw err;
    }
  }

  async getById(id) {
    try {
      return await User.query().findById(id);
    } catch (err) {
      throw err;
    }
  }
}

const userService = new UserService();
export default userService;
