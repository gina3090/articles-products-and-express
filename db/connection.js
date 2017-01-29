const PG_PASS = process.env.PG_PASS;
const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_products',
  user: 'articles_products_user',
  password: PG_PASS
});

module.exports = db;