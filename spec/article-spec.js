'use strict';

describe('Article', () => {
  var article = new Article()
  it('is created with a headline', () => {
    expect(article.showHeadline()).toEq("This is test headline number 1")
  })

  it('returns a summary of the story', function () {
    expect(article.showSummary()).toEq("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper tortor ut lacinia gravida. Duis feugiat condimentum risus et luctus. Donec imperdiet tristique eros et pharetra. Pellentesque lobortis tempor turpis quis convallis. Proin semper in lacus et interdum. Sed dapibus venenatis nunc at gravida. Donec sed pulvinar erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed euismod odio. In semper tellus id mollis molestie. Maecenas in est nec eros dictum vestibulum cursus nec purus. Sed porttitor sit amet ipsum in eleifend. Sed ullamcorper leo ipsum.")
  })

  it('has a link to the full story', function () {
    expect(article.showURL()).toEq("https://www.theguardian.com/uk")
  })
})