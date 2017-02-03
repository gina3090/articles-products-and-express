const db = require('../db/connection');

module.exports = (function(){

  function all() {
    return db.any("SELECT * FROM products ORDER BY id ASC");
  }

  function add(name, price, inventory) {
    return db.none(`INSERT INTO products (name, price, inventory) VALUES ('${name}', '${price}', '${inventory}')`);
  }

  function getById(id) {
    return db.one(`SELECT * FROM products WHERE id = ${id}`);
  }

  function editById(req, id) {
    return db.none(`UPDATE products SET
      name = '${req.name}',
      price = '${req.price}',
      inventory = '${req.inventory}' WHERE id = '${id}'`);
  }

  function deleteById(id) {
    return db.none(`DELETE FROM products WHERE id = ${id}`);
  }

  return {
    all: all,
    add: add,
    getById: getById,
    editById: editById,
    deleteById: deleteById
  };

})();