'use strict';

(function (exports) {
  exports.ArticleController = function (ArticleList, ArticleListView) {
    var articleList = new ArticleList;
    var articleListView = new ArticleListView(articleList);

    var makersDomain = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl='
    var guardianAPIRequest = 'guardian?apiRequestUrl='
    var url = 'http://content.guardianapis.com/search?'
    var allFields = 'show-fields=all'


    function loadContent() {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          articles = JSON.parse(this.responseText).response.results;
          updateArticleList(articles)
          showSingleArticle()
        };
      };
      xhttp.open("GET", makersDomain + guardianAPIRequest + url + allFields, true);
      xhttp.send()
    }

    function showSingleArticle() {
      var links = document.getElementsByTagName("IMG")
      var linksArray = Array.prototype.slice.call(links)
      linksArray.map((link) => {
        link.addEventListener('click', function () {
          hideArticlesView()
          showArticle(link)
          returnToArticlesView()
        });
      });
    };

    function updateArticleList(articles) {
      articles.map((article) => {
        console.log(article.fields.body)
        articleList.addArticle(article.webTitle, article.webUrl, article.fields.thumbnail, article.fields.body)
      })
      showCurrentArticleList()
    }

    function hideArticlesView() {
      articlesView = document.getElementById("articles-view");
      articlesView.style.display = 'none';
    }

    function showArticlesView() {
      var articlesView = document.getElementById("articles-view");
      articlesView.style.display = 'block';
    }

    function hideSingleArticleView() {
      var singleArticleView = document.getElementById("single-article-view");
      articlesView.style.display = 'none';
    }

    function showArticle(link) {
      var articleView = articleListView.singleArticleHTML(link)
      var singleArticleView = document.getElementById("single-article-view")
      singleArticleView.innerHTML = articleView
    }

    function showCurrentArticleList() {
      var html = articleListView.html();
      document.getElementById("articles-view").innerHTML = html
    }

    function returnToArticlesView() {
      var header = document.getElementById("header")
      header.addEventListener('click', function() {
        hideSingleArticleView()
        showArticlesView()
      });
    };

    return {
      loadContent,
      showSingleArticle
    }
  }
})(this);