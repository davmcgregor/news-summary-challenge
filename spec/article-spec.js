'use strict';

describe('Article', () => {

  var headline = "This is test headline number 1"
  var summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper tortor ut lacinia gravida. Duis feugiat condimentum risus et luctus. Donec imperdiet tristique eros et pharetra. Pellentesque lobortis tempor turpis quis convallis. Proin semper in lacus et interdum. Sed dapibus venenatis nunc at gravida. Donec sed pulvinar erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed euismod odio. In semper tellus id mollis molestie. Maecenas in est nec eros dictum vestibulum cursus nec purus. Sed porttitor sit amet ipsum in eleifend. Sed ullamcorper leo ipsum."
  var URL = "https://www.theguardian.com/uk"
  var image = "https://i.guim.co.uk/img/media/ad53a2b159050700ae0414f7c877634c6f9d394b/0_233_5202_3121/master/5202.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=e50b217fe53589727e9da28fd0609394" 

  var article = new Article(headline, summary, URL, image)

  it('is created with a headline', () => {
    expect(article.showHeadline()).toEq("This is test headline number 1")
  })

  it('returns a summary of the story', function () {
    expect(article.showSummary()).toEq("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper tortor ut lacinia gravida. Duis feugiat condimentum risus et luctus. Donec imperdiet tristique eros et pharetra. Pellentesque lobortis tempor turpis quis convallis. Proin semper in lacus et interdum. Sed dapibus venenatis nunc at gravida. Donec sed pulvinar erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed euismod odio. In semper tellus id mollis molestie. Maecenas in est nec eros dictum vestibulum cursus nec purus. Sed porttitor sit amet ipsum in eleifend. Sed ullamcorper leo ipsum.")
  })

  it('has a link to the full story', function () {
    expect(article.showURL()).toEq("https://www.theguardian.com/uk")
  })

  it('has an image attached to the story', function () {
    expect(article.showImage()).toEq("https://i.guim.co.uk/img/media/ad53a2b159050700ae0414f7c877634c6f9d394b/0_233_5202_3121/master/5202.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=e50b217fe53589727e9da28fd0609394")
  })
})