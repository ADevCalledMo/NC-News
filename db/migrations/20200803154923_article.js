exports.up = function(knex) {
    return knex.schema.createTable('articles', (table) =>{
        table.unique('article_id').primary(),
        table.string('title'),
        table.string('body'),
        table.integer('votes').defaultTo(0),
        table.string('topic').references("topics", "slug"),
        table.text('author').references("users", "username"),
        table.timestamp('created_at')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('articles')
  };
  