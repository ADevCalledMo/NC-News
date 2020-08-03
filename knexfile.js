const ENV = process.env.NODE_ENV || 'development';

const baseConfig = {
  client: 'pg',
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
};

const customConfig = {
  development: {
    connection: {
      database: 'nc_news',
      username: "mozes",
      password: "secret"
    }
  },
  test: {
    connection: {
      database: 'nc_news_test',
      username: "mozes",
      password: "secret"
    }
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };
