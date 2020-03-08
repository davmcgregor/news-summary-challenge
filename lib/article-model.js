'use strict';

(function (exports) {
  exports.Article = function () {
    var _headline = "This is test headline number 1"
    var _summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper tortor ut lacinia gravida. Duis feugiat condimentum risus et luctus. Donec imperdiet tristique eros et pharetra. Pellentesque lobortis tempor turpis quis convallis. Proin semper in lacus et interdum. Sed dapibus venenatis nunc at gravida. Donec sed pulvinar erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed euismod odio. In semper tellus id mollis molestie. Maecenas in est nec eros dictum vestibulum cursus nec purus. Sed porttitor sit amet ipsum in eleifend. Sed ullamcorper leo ipsum."

    function showHeadline() {
      return _headline;
    }

    function showSummary() {
      return _summary;
    }

    return {
      showHeadline,
      showSummary
    };
  };
})(this);