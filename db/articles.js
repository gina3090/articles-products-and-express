let articleArr = [];

module.exports = (function(){

  function all() {
    return articleArr;
  }

  function add(obj) {
    articleArr.push(obj);
  }

  function getByTitle(title) {
    for(let i = 0; i < articleArr.length; i++) {
      if(articleArr[i].title === title) {
        return articleArr[i];
      }
    }
  }

  function editByTitle(title, obj) {
    for(let i = 0; i < articleArr.length; i++) {
      if(articleArr[i].title === title) {
        articleArr[i].title = obj.title;
        articleArr[i].body = obj.body;
        articleArr[i].author = obj.author;
        articleArr[i].urlTitle = encodeURI(obj.title);
      }
    }
  }

  function deleteByTitle(title) {
    for(let i = 0; i < productArr.length; i++) {
      if(articleArr[i].title === title) {
        articleArr.splice(i, 1);
      }
    }
  }

  return {
    all: all,
    add: add,
    getByTitle: getByTitle,
    editByTitle: editByTitle,
    deleteByTitle: deleteByTitle,
  };

})();