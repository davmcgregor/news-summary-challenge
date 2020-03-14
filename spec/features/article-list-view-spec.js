describe('ArticleListView', () => {
  var headline = 'headline'
  var body = '<div><p>I\'m the first paragraph</p> <p>I\'m the second paragraph</p></div>';
  var URL = 'URL'
  var image = 'image'

  var articleList = new ArticleList()
  articleList.addArticle(headline, URL, image, body);
  var articleListView = new ArticleListView(articleList);
  
  it('can return a string of html to display all articles with links to the full story', () => {
    expect(articleListView.allArticlesHTML()).toEq('<div><article><p id="headlines">headline</p><img src="image"><br><p><a href="URL">Click To Read Full Story</a></p></article></div>')
  })
})