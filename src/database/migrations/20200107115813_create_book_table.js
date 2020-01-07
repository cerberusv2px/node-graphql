/**
 * @param  {object} knex
 * @return {Promise}
 */

const TABLE_NAME = 'books';

exports.up = (knex) => {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments();
    table.string('name').notNullable();
    table.integer('user_id').references('users.id');
    table.boolean('status').defaultTo(true);
    table.integer('created_by');
    table.integer('updated_by');
    table.timestamps(false, true);
  });
};

/**
 * @param  {object} knex
 * @return {Promise}
 */
exports.down = (knex) => {
  return knex.schema.dropTable(TABLE_NAME);
};
