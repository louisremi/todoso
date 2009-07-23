(function($){

$.fn.extend({
	verticalTab: function() {
		return this.each(function() {
			var $this = $(this)
				.mouseover(function(e) {
					if(e.target.tagName == "LI") {
						var href = $(e.target).children().attr("href");
						$this.find("div:visible").each(function(i, el) {
							var $el = $(el);
							if("#" + $el.attr("id") != href)
								$el.fadeOut();
						});
						$(href).stop(true, true).fadeIn();
					}
					clearTimeout(tabTimeout);
				}).mouseout(function(e) {
					tabTimeout = setTimeout(function() {
						$this.find("div:visible").fadeOut();
					}, 500);
				}),
				tabTimeout;
		});
	}	
});

})(jQuery);