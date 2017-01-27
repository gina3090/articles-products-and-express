const express = require('express');
const router = express.Router();
const products = require('../db/products');

const PG_PASS = process.env.PG_PASS;
const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_products',
  user: 'articles_products_user',
  password: PG_PASS
});

router.get('/', (req, res) => {
  db.any("SELECT * FROM products")
    .then(product => {
      console.log(product);
    })
    .catch(err => console.error(err));
});

router.post('/new', (req, res) => {
  db.none("INSERT INTO products (name, price, inventory) VALUES ($1, $2, $3)", ['apple', 1, 1])
    .then(product => {
      console.log(product);
    })
    .catch(err => console.error(err));
});

router.get('/:id', (req, res) => {
  db.one("SELECT * FROM products WHERE id = $1", 1)
    .then(product => {
      console.log(product);
    })
    .catch(err => console.error(err));  
});

router.put('/:id/edit', (req, res) => {
  db.one("UPDATE products SET name = $1, price = $2, inventory = $3 WHERE id = $4", ['banana', 2, 2, 1])
    .then(product => {
      console.log(product);
    })
    .catch(err => console.error(err));
});

router.delete('/:id/delete', (req, res) => {
  db.none("DELETE FROM products WHERE id = $1", 2)
    .then(product => {
      console.log(product);
    })
    .catch(err => console.error(err));
});

// let productArr = [];
// let counter = {"id": 0};

// router.get('/', (req, res) => {
//   productArr = products.all();
//   res.json(productArr);
//   // res.render('index');
// });

// router.post('/new', (req, res) => {
//   let id = ++counter.id;
//   let newObj = {
//     "id": id,
//     "name": req.body.name,
//     "price": req.body.price,
//     "inventory": req.body.inventory
//   };
//   products.add(newObj);
//   if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('price') && req.body.hasOwnProperty('inventory')) {
//     res.redirect('/products');
//   } else {
//     res.redirect('/new');
//   }
// });

// router.get('/:id', (req, res) => {
//   let id = parseInt(req.params.id);
//   res.send(products.getById(id));
// });

// router.put('/:id/edit', (req, res) => {
//   let id = parseInt(req.params.id);
//   let editObj = {
//       "name": req.body.name,
//       "price": req.body.price,
//       "inventory": req.body.inventory
//   };
//   products.editById(id, editObj);
//   if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('price') && req.body.hasOwnProperty('inventory')) {
//     res.redirect('/products');
//   } else {
//     res.redirect('/edit/:id');
//   }
// });

// router.delete('/:id/delete', (req, res) => {
//   let id = parseInt(req.params.id);
//   products.deleteById(id);
//   if(productArr.indexOf(id) === -1) {
//     res.redirect('/products');
//   } else {
//     res.redirect('/:id');
//   }
// });

module.exports = router;