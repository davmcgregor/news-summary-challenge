'use strict';


describe('Article', () => {
  var article = new Article()
  it('is created with a headline', () => {
    expect(article.showHeadline()).toEq("This is test headline number 1")
  })
})