/**
 * @param  {object} knex
 * @return {Promise}
 */

const TABLE_NAME = 'users';

exports.up = (knex) => {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments();
    table.string('name').notNullable();
    table.string('address').notNullable();
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
