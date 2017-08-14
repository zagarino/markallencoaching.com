(function () {
    var mqEvents = function (mediaChangeHandler) {
        var sheets = document.styleSheets;

        // Use the provided handler if present
        if (!mediaChangeHandler) {
            console.error('mqEvents needs a mediaChangeHandler to do its job.');
            return false;
        }

        for (var i = 0; i < sheets.length; i += 1) {
            var rules = sheets[i].cssRules;

            for (var j = 0; j < rules.length; j += 1) {
                // This Stackoverflow answer helped me figure out how
                // to check the type of object each rule was
                // http://stackoverflow.com/a/332429/368634
                if (rules[j].constructor === CSSMediaRule) {
                    var mql = window.matchMedia(rules[j].media.mediaText);
                    mql.addListener(mediaChangeHandler);
                    mediaChangeHandler(mql);
                }
            }
        }
    }

    // Yeah, this is a little shitty
    window.mqEvents = mqEvents;
}());


if (matchMedia) {
  var mq = window.matchMedia("(min-width: 500px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    // window width is at least 500px
  } else {
    // window width is less than 500px
  }

}

// media query change
function WidthChange(mq) {

	var msg = (mq.matches ? "more" : "less") + " than 500 pixels";
	document.getElementById("current").firstChild.nodeValue = msg;

}