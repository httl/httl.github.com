$(function () {
  $('div.more-info').each(function(index, element) {
    var elementObject = $(element).hide();
    $(document.createElement("a")).
      attr("href", "#").
      attr("class", "more-info-control").
      html('more...').
      click(function() {
        var showing = elementObject.css('display') == 'none';
        (showing ? elementObject.slideDown : elementObject.slideUp).call(elementObject, 300);
        $(this).html(showing ? "hide" : "more…");
        return false;
      })
      .insertAfter(elementObject);
  });
});

$(function(){
	var docIndex = document.getElementById('docIndex')
	if (docIndex) {
		var index = "";
		var outlines = $(":header")
		for (var i = 1; i < outlines.length; i ++) {
			var outline = outlines[i];
			var name = outline.innerHTML;
			if (name != "&lt;HTTL/&gt;") {
	 	        outline.outerHTML = "<a name=\"" + name + "\"></a>" + outline.outerHTML;
	 	        var pad = parseInt(outline.tagName.substring(1));
	 	        for (var j = 1; j < pad; j ++) {
	 	        	index += "&nbsp;&nbsp;&nbsp;&nbsp;";
	 	        }
		        index += "<a href=\"#" + name + "\">" + name + "</a><br/>";
		    }
		}
		docIndex.innerHTML = index + docIndex.innerHTML;
	}
	if (window.screen.width < 600) {
		var docUp = document.getElementById('docUp')
		if (docUp) {
			docUp.style.right = '2px';
			docUp.style.bottom = '2px';
		}
		var headline = document.getElementById('headline')
		if (headline) {
			headline.style.width = '160px';
		}
	}
});

window.addEventListener("scroll", function(e) {
	var docUp = document.getElementById('docUp')
	if (docUp) {
		var scrollTop = document.body.scrollTop;
		if (scrollTop > 200) {
			docUp.style.display = "";
		} else {
			docUp.style.display = "none";
		}
	}
}, false);