DROP USER IF EXISTS "articles_products_user";

CREATE USER articles_products_user;

DROP DATABASE IF EXISTS "articles_products";

CREATE DATABASE articles_products OWNER "articles_products_user";

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO articles_products_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO articles_products_user;

\c articles_products;

DROP TABLE IF EXISTS "products";

CREATE TABLE products (
  id serial PRIMARY KEY NOT NULL,
  name text NULL,
  price integer NULL,
  inventory integer NULL
);