'use strict';

(function (exports) {
  exports.ArticleView = function () {

    function articleHTML(article) {
      var html = '<div><p id="headlines">' + article.showHeadline() + '</p>' +
        '<img src="' + article.showImage() + '"><br>' +
        '<p id="summary"> ' + article.showSummary() + '</p><br><p>' +
        '<a href="' + article.showURL() + '">Click To Read Full Story</a></p></div>';
      return html
    }

    return {
      articleHTML
    };
  };
})(this);