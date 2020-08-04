exports.up = function(knex) {
  return knex.schema.createTable("articles", table => {
    console.log("creating articles table...");
    table.increments("article_id");
    table.string("title").notNullable();
    table.string("body", 2000).notNullable();
    table.integer("votes").defaultTo(0);
    table.string("topic").references("topics.slug");
    table.string("author").references("users.username");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  console.log("dropping articles table...")
  return knex.schema.dropTable("articles");
};










  