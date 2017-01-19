let productArr = [];

module.exports = (function(){

  function all() {
    return productArr;
  }

  function add(obj) {
    productArr.push(obj);
  }

  function getById(id) {
    for(let i = 0; i < productArr.length; i++) {
      if(productArr[i].id === id) {
        return productArr[i];
      }
    }
  }

  function editById(id, obj) {
    for(let i = 0; i < productArr.length; i++) {
      if(productArr[i].id === id) {
        productArr[i].name = obj.name;
        productArr[i].price = obj.price;
        productArr[i].inventory = obj.inventory;
      }
    }
  }

  function deleteById(id) {
    for(let i = 0; i < productArr.length; i++) {
      if(productArr[i].id === id) {
        productArr.splice(i, 1);
      }
    }
  }

  return {
    all: all,
    add: add,
    getById: getById,
    editById: editById,
    deleteById: deleteById
  };

})();