'use strict';

(function (exports) {
  exports.Article = function (headline, URL, image, summary) {
    var headline = headline;
    var URL = URL;
    var image = image;
    var summary = summary;
  
    function showHeadline() {
      return headline;
    }

    function showSummary() {
      return summary;
    }

    function showURL() {
      return URL;
    }

    function showImage() {
      return image;
    }

    return {
      showHeadline,
      showSummary,
      showURL,
      showImage
    };
  };
})(this);