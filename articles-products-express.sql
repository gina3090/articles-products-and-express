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
  name varchar(25) NULL,
  price integer NULL,
  inventory integer NULL
);

DROP TABLE IF EXISTS "articles";

CREATE TABLE articles (
  id serial PRIMARY KEY NOT NULL,
  title varchar(50) NULL,
  body varchar(100) NULL,
  author varchar(50) NULL,
  urltitle varchar(100) NULL
);