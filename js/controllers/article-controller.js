'use strict';

(function (exports) {
  exports.ArticleController = function (ArticleList, ArticleListView, ArticleView) {
    var articleList = new ArticleList;
    var articleListView = new ArticleListView(articleList);
    var articleView = new ArticleView;

    var articlesContainer = document.getElementById("articles-view");
    var articleContainer = document.getElementById("single-article-view");
    var imageNodes = document.getElementsByTagName("IMG")

    var makersDomain = 'http://news-summary-api.herokuapp.com/';
    var guardianAPIRequest = 'guardian?apiRequestUrl=';
    var url = 'http://content.guardianapis.com/search?';
    var allFields = 'show-fields=all';


    function loadContent() {
      var articles = articlesJSON.response.results
      console.log(articles)
      updateArticleList(articles)
      // Guardian data stub
      // var xhttp = new XMLHttpRequest();
      // xhttp.onreadystatechange = function () {
      //   if (this.readyState == 4 && this.status == 200) {
      //     var articles = JSON.parse(this.responseText).response.results;
      //     updateArticleList(articles)
      //     showSingleArticle()
      //   };
      // };
      // xhttp.open("GET", makersDomain + guardianAPIRequest + url + allFields, true);
      // xhttp.send()
    }

    function showSingleArticle() {
      var imageArray = [].slice.call(imageNodes)
      imageArray.forEach((imageNode) => {
        imageNode.addEventListener('click', toggleArticleView.bind(imageNode));
      });
    };

    function toggleArticleView() {
      hideArticlesContainer();
      showArticle(this);
      returnToArticlesEventListener()
    }

    function updateArticleList(articles) {
      articles.forEach((article) => {
        articleList.addArticle(article.webTitle, article.webUrl, article.fields.thumbnail, article.fields.body)
      })
      showCurrentArticleList()
    }

    function showArticle(link) {
      showSingleArticleContainer()
      var articleObject = articleListView.returnSingleArticle(link)
      var articleHTML = articleView.articleHTML(articleObject)
      articleHTML += "<button id='back' type='button'>Back<button>"
      articleContainer.innerHTML = articleHTML
    }

    function showCurrentArticleList() {
      var html = articleListView.allArticlesHTML();
      articlesContainer.innerHTML = html
    }

    function returnToArticlesEventListener() {
      var header = document.getElementById("back")
      header.addEventListener('click', function() {
        hideSingleArticleContainer();
        showArticlesContainer();
      });
    };

    function hideArticlesContainer() {;
      articlesContainer.style.display = 'none';
    }

    function showArticlesContainer() {
      articlesContainer.style.display = 'block';
    }

    function hideSingleArticleContainer() {
      articleContainer.style.display = 'none';
    }

    function showSingleArticleContainer() {
      articleContainer.style.display = 'block';
    }

    return {
      loadContent,
      showSingleArticle,
    }
  }
})(this);