const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const products = require('./routes/products');
const articles = require('./routes/articles');

const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'app'
});

app.engine('.hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/products', products);
app.use('/articles', articles);

app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;