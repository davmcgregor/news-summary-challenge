'use strict';

(function (exports) {
  exports.ArticleList = function () {
    var _articles = [];

    function showArticles() {
      return _articles;
    }

    return {
      showArticles
    };
  };
})(this);