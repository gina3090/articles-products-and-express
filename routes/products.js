const express = require('express');
const router = express.Router();
const products = require('../db/products');

let productArr = [];
let counter = {"id": 0};

router.get('/', (req, res) => {
  productArr = products.all();
  res.json(productArr);
  // res.render('index');
});

router.post('/new', (req, res) => {
  let id = ++counter.id;
  let newObj = {
    "id": id,
    "name": req.body.name,
    "price": req.body.price,
    "inventory": req.body.inventory
  };
  products.add(newObj);
  if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('price') && req.body.hasOwnProperty('inventory')) {
    res.redirect('/products');
  } else {
    res.redirect('/new');
  }
});

router.get('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  res.send(products.getById(id));
});

router.put('/:id/edit', (req, res) => {
  let id = parseInt(req.params.id);
  let editObj = {
      "name": req.body.name,
      "price": req.body.price,
      "inventory": req.body.inventory
  };
  products.editById(id, editObj);
  if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('price') && req.body.hasOwnProperty('inventory')) {
    res.redirect('/products');
  } else {
    res.redirect('/edit/:id');
  }
});

router.delete('/:id/delete', (req, res) => {
  let id = parseInt(req.params.id);
  products.deleteById(id);
  if(productArr.indexOf(id) === -1) {
    res.redirect('/products');
  } else {
    res.redirect('/:id');
  }
});

module.exports = router;