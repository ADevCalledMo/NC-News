
exports.up = function(knex) {
  console.log("creating topics table...")
  return knex.schema.createTable('topics', (table) =>{
    table.string("slug").primary().unique().notNullable();
    table.string("description").notNullable();
  })
};

exports.down = function(knex) {
  console.log("dropping topics table...")
  return knex.schema.dropTable('topics')
};
