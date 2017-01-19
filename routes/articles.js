const express = require('express');
const router = express.Router();
const articles = require('../db/articles');

let articleArr = [];

router.get('/', (req, res) => {
  articleArr = articles.all();
  res.json(articleArr);
  // res.render('index');
});

router.post('/new', (req, res) => {
  let newObj = {
    "title": req.body.title,
    "body": req.body.body,
    "author": req.body.author,
    "urlTitle": encodeURI(req.body.title)
  };
  articles.add(newObj);
  if(req.body.hasOwnProperty('title') && req.body.hasOwnProperty('body') && req.body.hasOwnProperty('author') && req.body.hasOwnProperty('urlTitle')) {
    res.redirect('/articles');
  } else {
    res.redirect('/new');
  }
});

router.get('/:title', (req, res) => {
  let title = req.params.title;
  res.send(articles.getByTitle(title));
});

router.put('/:title', (req, res) => {
  let title = req.params.title;
  let editObj = {
    "title": req.body.title,
    "body": req.body.body,
    "author": req.body.author,
    "urlTitle": encodeURI(req.body.title)
  };
  articles.editByTitle(title, editObj);
  if(req.body.hasOwnProperty('title') && req.body.hasOwnProperty('body') && req.body.hasOwnProperty('author') && req.body.hasOwnProperty('urlTitle')) {
    res.redirect('/articles');
  } else {
    res.redirect('/:title/edit');
  }
});

router.delete('/:title', (req, res) => {
  let title = req.params.title;
  articles.deleteByTitle(title);
  if(articleArr.indexOf(title) === -1) {
    res.redirect('/articles');
  } else {
    res.redirect('/:title');
  }
});

module.exports = router;