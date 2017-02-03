const db = require('../db/connection');

module.exports = (function(){

  function all() {
    return db.any("SELECT * FROM articles");
  }

  function add(title, body, author) {
    return db.none(`INSERT INTO articles (title, body, author, urltitle) VALUES ('${title}', '${body}', '${author}', '${encodeURI(title)}')`);
  }

  function getByTitle(urltitle) {
    return db.one(`SELECT * FROM products WHERE urltitle = ${urltitle}`);
  }

  function editByTitle(req, urltitle) {
    return db.none(`UPDATE articles SET
      title = '${req.title}',
      body = '${req.body}',
      author = '${req.author}' WHERE urltitle = '${urltitle}'`);
  }

  function deleteByTitle(urltitle) {
    return db.none(`DELETE FROM products WHERE urltitle = ${urltitle}`);
  }

  return {
    all: all,
    add: add,
    getByTitle: getByTitle,
    editByTitle: editByTitle,
    deleteByTitle: deleteByTitle,
  };

})();