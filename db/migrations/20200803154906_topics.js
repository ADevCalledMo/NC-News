
exports.up = function(knex) {
  return knex.schema.createTable('topics', (table) =>{
    table.unique('slug').primary(),
    table.text('description')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('topics')
};
