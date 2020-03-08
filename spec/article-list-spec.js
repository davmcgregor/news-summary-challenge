'use strict';

describe ('ArticleList', () => {

  var headline = 'headline'
  var summary = 'summary'
  var URL = 'URL'
  var image = 'image'

  var articleList = new ArticleList()

  it ('is created with an empty list array', () => {
    expect(articleList.showArticles().length).toEq(0)
  })

  it ('creates and stores articles', function () {
    articleList.addArticle(headline, summary, URL, image)
    expect(articleList.showArticles().length).toEq(1)
  })

})