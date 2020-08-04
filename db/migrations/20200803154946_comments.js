exports.up = function(knex) {
    return knex.schema.createTable('comments', (table) =>{
        table.unique('comment_id').primary(),
        table.string('author').references("user", "username"),
        table.string('article_id').references("articles", "article_id"),
        table.integer('votes').defaultTo(0),
        table.timestamp('created_at'),
        table.string('body')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('comments')
  };
  