'use strict';

(function (exports) {
  exports.Article = function () {
    var _headline = "This is test headline number 1"

    function showHeadline() {
      return _headline;
    }

    return {
      showHeadline: showHeadline
    };
  };
})(this);