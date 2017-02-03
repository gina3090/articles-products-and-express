const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const products = require('../db/products');

router.get('/new', (req, res) => {
  res.render('partials/new-product');
});

router.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  products.editById(req.body, id)
    .then(product => {
      res.render('partials/edit-product', {product: product});
    })
    .catch(err => console.error(err));
});

router.get('/:id/delete', (req, res) => {
  let id = req.params.id;
  products.deleteById(id)
    .then(product => {
      res.redirect('/products');
    })
    .catch(err => console.error(err));
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  products.getById(id)
    .then(product => {
      res.render('partials/product', {product: product});
    })
    .catch(err => console.error(err));
});

router.get('/', (req, res) => {
  products.all()
    .then(products => {
      res.render('partials/product', {products: products});
    })
    .catch(err => console.error(err));
});

router.post('/new', (req, res) => {
  products.add(req.body.name, req.body.price, req.body.inventory)
    .then(product => {
      res.redirect('/products');
    })
    .catch(err => console.error(err));
});

router.put('/:id/edit', (req, res) => {
  let id = req.params.id;
  products.editById(req.body, id)
    .then(product => {
      res.redirect('/products');
    })
    .catch(err => console.error(err));
});

router.delete('/:id/delete', (req, res) => {
  let id = req.params.id;
  products.deleteById(id)
    .then(product => {
      res.redirect('/products');
    })
    .catch(err => console.error(err));
});

module.exports = router;