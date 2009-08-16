(function($){
	
$.fn.extend({
	// We need a faster hasClass by the way
	hasClass: function( selector ) {
		return !!selector && (" " + this[0].className + " ").indexOf(" " +selector + " ") != -1; 
	},
	grid: function() {
		var $this = $(this);
		
		return $this.css('width', $this.height() / 3 * 4)
        .bind('distributeUnits', function() {
			var $this = $(this),
				$article = $("article.content"),
				$units,
				length;
			// Now is the proper time to append the fragment
			$article.prepend($this.data('fragment'));
			// $this.find("article.content > div") doesn't work in Opera
			$units = $article.children();
			length = $units.length;
			$units.each(function(i, el) {
				i++;
				if(i < length)
					$this.queue(function() {
						$(el).animate({
							top: Math.floor(i /3) * 33 + 4 + "%",
							left: i % 3 * 33 + 2 + "%"
						}, 200).queue(function() {
							// Turn the position unit back to %
							$this.dequeue();
							$(this).dequeue();
						});							
					});
			});
            
        }).bind("maximize", function() {
			
			
		}).bind("minimize", function() {
			
			
		}).bind("select", function() {
			
			
		}).resize(function() {
			
		
		}).click(function() {
			
		}).dblclick(function(e) {
			if($(this).hasClass)
			$closest = $(e.target).closest("article");
			if($closest.length) {
				var wrapPosition = $closest.parent().position();
				// Take the clicked article out of the current content and turn it into a new content
				$newWrap = $closest.hide().appendTo(this)
				.removeClass('unit').addClass('content')
				.find("section").addClass('unit')
				.siblings("div.section").andSelf().wrapAll('<div class="unitWrap"></div>')
				.parent().css({top: wrapPosition.top, left: wrapPosition.left});
				$closest.show();
				// Hide the previous content
				$(this).find("div.content").fadeOut();
				// Hide the fake sections and move it to the top-left corner of the content
				$newWrap.find("div.section").animate({
					top: 0,
					left: 0,
					opacity: 0
				// The following animation should be fired only once!
				}).eq(0).queue(function() {
					// There is a bug in jQuery or Webkit here
					$newWrap.animate({
						top: "4%",
						left: "2%"
					}).queue(function() {
						$closest.data('ready')?
							$closest.trigger('distributeUnits') :
							$closest.data('ready', true);
						$(this).dequeue();
						$this.removeClass('mainView').addClass('articleView');
					});
					$(this).dequeue();
				});
			}
        });
	}
});

})(jQuery);