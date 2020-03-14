'use strict';

describe('Article', () => {

  var headline = "headline"
  var summary = "summary"
  var URL = "url"
  var image = "image" 

  var article = new Article(headline, URL)

  it('is created with a headline', () => {
    expect(article.showHeadline()).toEq("headline")
  })

  it('returns a summary of the story', function () {
    expect(article.showSummary()).toEq("summary")
  })

  it('has a link to the full story', function () {
    expect(article.showURL()).toEq("url")
  })

  it('has an image attached to the story', function () {
    expect(article.showImage()).toEq("Image")
  })
})