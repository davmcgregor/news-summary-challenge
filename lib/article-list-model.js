'use strict';

(function (exports) {
  exports.ArticleList = function () {
    var _articles = [];

    function showArticles() {
      return _articles;
    }

    function addArticle(headline, summary, URL, image) {
      var newArticle = new Article(headline, summary, URL, image)
      _articles.push(newArticle)
    }

    return {
      showArticles,
      addArticle
    };
  };
})(this);