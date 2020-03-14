'use strict';

describe ('ArticleList', () => {

  var headline = 'headline'
  var body = '<div><p>I\'m the first paragraph</p> <p>I\'m the second paragraph</p></div>'
  var URL = 'URL'
  var image = 'image'

  var articleList = new ArticleList()

  it ('is created with an empty list array', () => {
    expect(articleList.showArticles().length).toEq(0)
  });

  it ('creates and stores articles', function () {
    articleList.addArticle(headline, URL, image, body)
    expect(articleList.showArticles().length).toEq(1)
  });

  it('summarizes the body of an article into the first paragraph', function () {
    body = '<div><p>I\'m the first paragraph</p> <p>I\'m the second paragraph</p></div>'
    articleList.addArticle(headline, url, image, body)
    expect(articleList.allArticles().shift().showSummary()).toEq('<p>I\'m the first paragraph</p>')
  });

  it('returns a error html string if the body can\'t be summarized', function () {
    articleList = new ArticleList()
    body = 'Body'
    articleList.addArticle(headline, url, image, body)
    expect(articleList.allArticles().shift().showSummary()).toEq('<p>Sorry, there is no summary available for this article</p>')
  });

})