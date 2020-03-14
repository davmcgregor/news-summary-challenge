'use strict';

(function() {

  var articleController = new ArticleController(ArticleList, ArticleListView, ArticleView);

  window.addEventListener('load', function() {
    articleController.loadContent();
  })

})();