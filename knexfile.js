require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      port: "5432",
      user: "postgres",
      password: process.env.PG_PW,
      database: "knex_crud",
    },
    debug: true,
    pool: { min: 2, max: 5 },
  },
};
