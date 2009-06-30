(function($){

$("body").append((
	"<div id=\"overlayDiv\">"+
		"<div id=\"overlayRelative\">"+
			"<img id=\"overlayClose\" src=\"image/close.png\" />"+
			"<img id=\"overlayLoader\" src=\"image/loader.gif\" />"+
			"<img id=\"overlayImage\" />"+
		"</div>"+
	"</div>"+
	"<div id=\"fixedDiv\"></div>"
));
var $overlay = $("#overlayDiv").bind("click close", function() {
		// Cache useful values
		var overlayWidth = $overlay.data("width");
		$overlay.animate({
			width: 0,
			height: 0,
			left: "+=" + overlayWidth /2,
			top: "+=" + overlayWidth /Format /2
		}).queue(function() {
			$overlay.css("display", "none");
			$image.css({
				width: "auto"
			}).attr("src", "");
			$overlay.dequeue();
		});		
	}),
	$image = $("#overlayImage").load(function() {
		$image.css({
			width: "90%"
		}).animate({opacity: 1});		
	}),
	$fixed = $("#fixedDiv"),
	Format;
	
$.fn.extend({
	todosOverlay: function(options) {
		return this.each(function() {
			var $this = $(this),
				options = $.extend({}, $.todosOverlay.defaults, options);
			$this.click(function(e) {
				if(e.target.tagName == "IMG") {
					var target = e.target, 
						$target = $(target),
						targetPosition = $target.position(),
						targetWidth = $target.width(),
						targetHeight = $target.height(),
						fixedPosition = $fixed.position(),
						// Cache usefull values
						overlayWidth = options.width,
						_$image = $image.attr("src", target.src.replace(options.regex, options.replace))
							.css({
								opacity: 0,
								display: "block"
							});
					Format = targetWidth / targetHeight;
					$overlay.data("width", options.width)
					// Move the overlay over the clicked image
					.css({
						left: targetPosition.left,
						top: targetPosition.top,
						width: $target.width(),
						height: $target.height(),
						display: "block"
					// Animate the overlay to the center of the viewport
					}).animate({
						top: fixedPosition.top + 100,
						left: fixedPosition.left - 300,
						width: overlayWidth,
						height: overlayWidth / Format
					});
				}
			});
		});
	}
});

$.todosOverlay = {
	defaults: {
		width: 600,
		regex: /_?thumbnail_?/,
		replace: ""
	}
};

})(jQuery);
