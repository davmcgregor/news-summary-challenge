'use strict';

(function (exports) {
  exports.ArticleListView = function (articleList) {
    var articles = articleList.allArticles();

    function allArticlesHTML() {
      var html = '<div>';
      articles.map((article, index) => { 
        html += '<article><h2 id="headlines">' + (index + 1) + ") " + headlineHTML(article) + '</h2>' 
        + '<img src="' + imagesHTML(article) + '"><br>' + `<br><a href='#summary/${index}'>` + "Click To Read Summary" + `</a><p id='body/${index}'></p>` + '<p><a href="' + urlHTML(article) + '">' + "Click To Read Full Story" + '</a></p></article>'
      });
      return html + "</div>";
    }

    function returnSingleArticle(imageNode) {
      singleArticle
      articles.forEach((article) => {
        if (imageNode.outerHTML.search(article.featureImage()) === 10) {
          singleArticle = article
        };
      });
      return singleArticle
    };

    function headlineHTML(article) {
      return article.showHeadline()
    }

    function urlHTML(article) {
      return article.showURL()
    }

    function imagesHTML(article) {
      return article.showImage()
    }

    function summaryHTML(article) {
      return article.showSummary()
    }

    return {
      allArticlesHTML,
      returnSingleArticle
    }
  }
})(this);