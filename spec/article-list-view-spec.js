describe('ArticleListView', () => {
  var headline = 'headline'
  var body = '<div><p>I\'m the first paragraph</p> <p>I\'m the second paragraph</p></div>';
  var URL = 'URL'
  var image = 'image'

  var articleList = new ArticleList()
  articleList.addArticle(headline, summary, URL, body);
  var articleListView = new ArticleListView(articleList);
  
  it('can return a string of html to display all articles with links to the full story', () => {
    expect(articleListView.allHeadlinesHTML()).toEq('<div><ul><li><div><p id="headlines">headline</p><img src="image"><br><p><a href="URL">Click To Read</a></p></div></li></ul></div>')
  })
})