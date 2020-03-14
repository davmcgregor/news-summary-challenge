'use strict';

(function() {

  var articleController = new ArticleController(ArticleList, ArticleListView);

  window.addEventListener('load', function() {
    articleController.loadContent();
  })

})();