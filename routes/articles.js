const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const articles = require('../db/articles');

router.get('/new', (req, res) => {
  res.render('partials/new-article');
});

router.get('/:title/edit', (req, res) => {
  let urltitle = encodeURI(req.body.title);
  articles.editByTitle(req.body.title, req.body.body, req.body.author, urltitle)
    .then(article => {
      res.render('partials/edit-article', {article: article});
    })
    .catch(err => console.error(err));
});

router.get('/:title/delete', (req, res) => {
  let urltitle = encodeURI(req.body.title);
  articles.deleteByTitle(urltitle)
    .then(article => {
      res.redirect('/articles');
    })
    .catch(err => console.error(err));
});

router.get('/:title', (req, res) => {
  let urltitle = encodeURI(req.body.title);
  articles.getByTitle(urltitle)
    .then(article => {
      res.render('partials/article', {article: article});
    })
    .catch(err => console.error(err));
});

router.get('/', (req, res) => {
  articles.all()
    .then(articles => {
      res.render('partials/article', {articles: articles});
    })
    .catch(err => console.error(err));
});

router.post('/new', (req, res) => {
  articles.add(req.body.title, req.body.body, req.body.author)
    .then(article => {
      res.redirect('/articles');
    })
    .catch(err => console.error(err));
});

router.put('/:title/edit', (req, res) => {
  let urltitle = encodeURI(req.body.title);
  articles.editByTitle(req.body, urltitle)
    .then(article => {
      res.redirect('/articles');
    })
    .catch(err => console.error(err));
});

router.delete('/:title/delete', (req, res) => {
  let urltitle = encodeURI(req.body.title);
  articles.deleteByTitle(urltitle)
    .then(article => {
      res.redirect('/articles');
    })
    .catch(err => console.error(err));
});

module.exports = router;