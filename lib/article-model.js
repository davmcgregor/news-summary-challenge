'use strict';

(function (exports) {
  exports.Article = function (headline, summary, URL, image) {
    var _headline = headline;
    var _summary = summary;
    var _URL = URL;
    var _image = image;
  
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