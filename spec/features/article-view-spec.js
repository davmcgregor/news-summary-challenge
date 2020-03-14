describe('ArticleView', () => {
  var articleView = new ArticleView

  var headline = 'headline';
  var summary = 'I\'m the first paragraph';
  var url = 'URL';
  var image = 'image';

  var article = new Article(headline, url, image, summary)


  it('can return a string of html to display an article', function () {
    expect(articleView.articleHTML(article)).toEq('<div><p id="headlines">headline</p><img src="image"><br><p id="summary"> I\'m the first paragraph</p><br><p><a href="URL">Click To Read Full Story</a></p></div>');
  });
});
