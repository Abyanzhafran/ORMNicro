window.requestAnimationFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 10);
    };
})();


var scrollEngine = function () {
  var amount = 0;
  var scrollInProgess = false;
  var tailOff = 16;

  function evaluate(functionName) {
    amount = amount - Math.ceil(amount / tailOff);
    if (amount > 0) {
      requestAnimationFrame(functionName);
    } else {
      scrollInProgess = false;
    }
  }

  function scroll(timestamp) {
    window.scrollBy(0, Math.ceil(amount / tailOff));
    evaluate(scroll);
  }

  function scrollUp(timestamp) {
    window.scrollBy(0, -Math.ceil(amount / tailOff));
    evaluate(scrollUp);
  }

  return {
    setTailoff: function (tailAmount) {
      tailOff = tailAmount;
    },
    scrollToElementById: function (id, offset) {
      if (!scrollInProgess) {
        if (offset === undefined) {
          offset = 0;
        }
        scrollInProgess = true;
        var alreadyScrolled = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        amount = document.getElementById(id).offsetTop - alreadyScrolled;
        amount = amount - offset;
        if (amount >= 0) {
          requestAnimationFrame(scroll);
        } else {
          amount = -amount;
          requestAnimationFrame(scrollUp);
        }
      }
    }
  };
}();


function handleClick(e) {
  e.preventDefault();
  var idSplit = this.getAttribute('href').split('#');
  if (idSplit.length > 1) {
    scrollEngine.scrollToElementById(idSplit[1], 20);
  }
}

var links = document.querySelectorAll('[href^=\'#\']');
var limit = links.length;
for (var n = 0; n < limit; n++) {
  links[n].addEventListener('click', handleClick);
}
