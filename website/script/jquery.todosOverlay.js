(function($){

$("body").append((
	"<div id=\"overlayDiv\">"+
		"<div id=\"overlayRelative\">"+
			"<div id=\"overlayClose\"></div>"+
			"<img id=\"overlayLoader\" src=\"image/loader.gif\" />"+
			"<img id=\"overlayImage\" />"+
			"<div id=\"overlayPlus\">"+
				"<div id=\"overlayPrevious\" class=\"overlayKey\"></div>"+
				"<div id=\"overlayNext\" class=\"overlayKey\"></div>"+	
				"<p id=\"overlayTitle\"></p>"+
			"</div>"+
		"</div>"+
	"</div>"+
	"<div id=\"fixedDiv\"></div>"
));
var $overlay = $("#overlayDiv").click(function(e) {
		$overlay.trigger(e.target.className == "overlayKey"? "change" : "minimize", [e.target.id == "overlayNext"? 1 : -1])
		
	}).bind("change", function(e, increment) {
		$CurrentContainer.find("img:eq("+ (parseInt($CurrentTarget.data("imageOrder")) + increment) + ")").trigger("click");
		
	}).bind("minimize", function() {
		// Cache useful values
		var overlayWidth = $overlay.data("width");
		$overlay.animate({
			width: 0,
			height: 0,
			left: "+=" + overlayWidth /2,
			top: "+=" + overlayWidth /Format /2
		}).queue(function() {			
			$overlay.hide().dequeue();
		});
		
	}),
	$image = $("#overlayImage").load(function() {
		clearInterval(Load);
		$image.css({
			width: "90%"
		}).animate({opacity: 1});
	}),
	$plus = $('#overlayPlus'),
	$title = $("#overlayTitle").hover(function() {
			if($overlay.hasClass("maximized"))
				$title.stop().animate({opacity: .1});
		}, function() {
			if($overlay.hasClass("maximized"))
				$title.stop().animate({opacity: .8});
		}).css("opacity", .8),
	$fixed = $("#fixedDiv"),
	Format,
	Load,
	$CurrentTarget,
	$CurrentContainer;
	
$.fn.extend({
	todosOverlay: function(o) {
		return this.each(function() {
			var $this = $(this),
				options = $.extend({}, $.todosOverlay.defaults, o);
			$this.click(function(e) {
				if(e.target.tagName == "IMG") {
					var target = e.target,
						// Prepare/reset the overlay for a new image as soon as possible
						_$image = $image.css({
								width: "auto",
								opacity: 0,
								display: "block"
							}).attr("src", ""),
						_$plus = $plus.hide(),
						_$overlay = $overlay.removeClass("maximized"),
						// Cache useful values
						$target = $(target),						
						title = $target.attr("title"),
						overlayWidth = options.width,
						// Create new vars
						targetPosition = $target.position(),
						targetWidth = $target.width(),
						targetHeight = $target.height(),
						fixedPosition = $fixed.position();
					_$image.attr("src", target.src.replace(options.regex, options.replace));
					// Make sure that the load event fires even from cache 
					Load = setInterval(function() {
						if(_$image.width() != 0)
							_$image.trigger("load");
					}, 200);
					$title.text(title).css({display: "block", visibility: title? "visible" : "hidden"});
					$CurrentTarget = $target;
					$CurrentContainer = $(this);
					Format = targetWidth / targetHeight;
					_$overlay.data("width", options.width)
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
					}).queue(function() {
						_$plus.fadeIn();
						_$overlay.addClass("maximized").dequeue();
					});
				}
			}).find("img").each(function(i) {
				$(this).data("imageOrder", i);
			});
		});
	}
});

$(window).keydown(function(e) {
		if($overlay.is(":visible"))
		switch(e.keyCode) {
			case 37:
				// previous
				$overlay.trigger("change", [-1]);
				return false;
				break;
			case 39:
				// next
				$overlay.trigger("change", [1]);
				return false;
				break;
			case 27:
				// escape
				$overlay.trigger("minimize");
				return false;
				break;
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