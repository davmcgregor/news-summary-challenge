'use strict';

(function (exports) {
  exports.ArticleListView = function (articleList) {
    var articles = articleList.showArticles();

    function html() {
      var html = '<div id="headlines"><ul>';
      articles.map((article, index) => {
        html += '<li id="' + index + '">' + article.showHeadline() + '</li>'
        })
        return html + '</ul></div>'
      }
    return {
      html
    }
  }
})(this);