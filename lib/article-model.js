'use strict';

(function (exports) {
  exports.Article = function () {
    var _headline = "This is test headline number 1"
    var _summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper tortor ut lacinia gravida. Duis feugiat condimentum risus et luctus. Donec imperdiet tristique eros et pharetra. Pellentesque lobortis tempor turpis quis convallis. Proin semper in lacus et interdum. Sed dapibus venenatis nunc at gravida. Donec sed pulvinar erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed euismod odio. In semper tellus id mollis molestie. Maecenas in est nec eros dictum vestibulum cursus nec purus. Sed porttitor sit amet ipsum in eleifend. Sed ullamcorper leo ipsum."
    var _URL = "https://www.theguardian.com/uk"
    var _image = "https://i.guim.co.uk/img/media/ad53a2b159050700ae0414f7c877634c6f9d394b/0_233_5202_3121/master/5202.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=e50b217fe53589727e9da28fd0609394" 

    function showHeadline() {
      return _headline;
    }

    function showSummary() {
      return _summary;
    }

    function showURL() {
      return _URL;
    }

    function showImage() {
      return _image;
    }

    return {
      showHeadline,
      showSummary,
      showURL,
      showImage
    };
  };
})(this);