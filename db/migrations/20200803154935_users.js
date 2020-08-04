exports.up = function(knex) {
    return knex.schema.createTable('users', (table) =>{
        table.unique('username').primary(),
        table.text('avatar_url'),
        table.text('name')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users')
  };
  