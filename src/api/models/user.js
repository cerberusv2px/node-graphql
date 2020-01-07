import Model from '../../database/db';
import { Book } from '.';

const TABLE_NAME = 'users';

export default class User extends Model {
  static get tableName() {
    return TABLE_NAME;
  }

  static get relationMappings() {
    return {
      books: {
        relation: Model.HasManyRelation,
        modelClass: Book,
        join: {
          from: 'users.id',
          to: 'books.user_id'
        }
      }
    };
  }

  get hasTimestamps() {
    return true;
  }
}
