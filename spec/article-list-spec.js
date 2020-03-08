'use strict';

describe ('ArticleList', () => {
  var list = new ArticleList()
  it ('is created with an empty list array', () => {
    expect(list.showArticles().length).toEq(0)
  })
})