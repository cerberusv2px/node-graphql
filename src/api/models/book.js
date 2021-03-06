import Model from '../../database/db';

const TABLE_NAME = 'books';

export default class Book extends Model {
  static get tableName() {
    return TABLE_NAME;
  }

  static get modifiers() {
    return {
      defaultSelects(builder) {
        builder.select('id', 'name');
      }
    };
  }
}
