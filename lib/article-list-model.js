'use strict';

(function (exports) {
  exports.ArticleList = function () {
    var _articles = [];

    function showArticles() {
      return _articles;
    };

    function addArticle(headline, URL, image, body) {
      var summary = summarize(body)
      var article = new Article(headline, URL, image, summary)
      articles.push(article)
    }

    function summarize(body) {
      var firstParagraphRegExp = /<p>(.+?)<\/p>/;
      summary = body.match(firstParagraphRegExp);
      try {
        return summary.shift();
      } catch (error) {
        return error.message = '<p>Sorry, there is no summary available for this article</p>'
      }
    };

    return {
      showArticles,
      addArticle,
      firstParagraphRegExp,
      summary
    };
  };
})(this);