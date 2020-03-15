'use strict';

(function (exports) {
  exports.ArticleList = function () {
    var articles = [];

    function allArticles() {
      return articles;
    };

    function addArticle(headline, URL, image, body) {
      // var summary = summarize(body)
      var article = new Article(headline, URL, image, body)
      articles.push(article)
    }

    // function summarize(body) {
    //   var firstParagraphRegExp = /<p>(.+?)<\/p>/;
    //   var summary = body.match(firstParagraphRegExp);
    //   try {
    //     return summary.shift();
    //   } catch (error) {
    //     return error.message = '<p>Sorry, there is no summary available for this article</p>'
    //   }
    // };

    return {
      allArticles,
      addArticle
    }
  }
})(this);