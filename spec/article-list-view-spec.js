describe('ArticleListView', () => {
  var headline = 'headline'
  var summary = 'summary'
  var URL = 'URL'
  var image = 'image'

  var articleList = new ArticleList()
  articleList.addArticle(headline, summary, URL, image);
  articleListView = new ArticleListView(articleList);
  
  it('returns a string of HTML that represents the article list model', () => {
    expect(articleListView.html()).toEq('<div id="headlines"><ul><li id="0">headline</li></ul></div>')
  })
})