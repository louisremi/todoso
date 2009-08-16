/*
 * JavaScript file created by Rockstarapps Concatenation
*/

/*
 * START OF FILE - /closest/jquery.closest.js
 */
(function(jQuery){

// This shortTermMemory will contain the last parsed simple selector.
// To be usefull it needs to be accessed faster than it would take to re-parse the selector.
// Selectors are to complex to serve as keys of a hash, and a bi-dimensional array would be too slow.
// I'm wondering if .data() would be fast enough for that purpose.
var shortTermMemory = [];
	
jQuery.fn.extend({
	closest: function( selector, context ) {
		var pos = jQuery.expr.match.POS.test( selector ) ? jQuery(selector) : null,
			closer = 0,
			re,
			memory,
			split;
		// Look for simple selectors such as "div", ".class" or "div.class"
		if (!pos) {
			memory = shortTermMemory;
			// If the selector has not previously been parsed
			if (selector != memory[0]) {
				// We will parse the selector and stop parsing as soon as possible, to do as few tests as possible
				re = /^(?:[\w\u00c0-\uFFFF-]|\\.)*$/;
				split = selector.split('.');
				if (split.length < 3) {
					// The selector begins with a tag (memory[1] = TAG) or with a "." (memory[1] = true)
					if (memory[1] = split[0] != ""? (re.test(split[0])? split[0] : false) : true) {
						// The second part of the selector is a class (memory[2] = class) or there is no second part (memory[2] = true)
						if(memory[2] = split[1]? (re.test(split[1])? " " + split[1] + " " : false) : true) {
							// If we arrived that far, we found a simple selector
							memory[0] = selector;
							shortTermMemory = memory;
						} else memory[0] = false;
					} else memory[0] = false;
				} else memory[0] = false;
			}			
		}

		return this.map(function(){
			var cur = this;
			while ( cur && cur.ownerDocument && cur !== context ) {
				// the selector was a position
				if ( pos? pos.index(cur) > -1 : (
				// the selector was simple
				memory[0]? ( (memory[1] === true || jQuery.nodeName(cur, memory[1])) && (memory[2] === true || (" " + cur.className + " ").indexOf(memory[2]) != -1))
				// The selector was complex
				: jQuery(cur).is(selector))) {
					jQuery.data(cur, "closest", closer);
					return cur;
				}
				cur = cur.parentNode;
				closer++;
			}
		});
	}
});

})(jQuery);
/*
 * END OF FILE - /closest/jquery.closest.js
 */

/*
 * START OF FILE - /closest/jquery.overandout.js
 */
(function($){
	
$.fn.extend({
	_mouseover: $.fn.mouseover,	
	mouseover: function(fn, expr) {
		return this.each(function(i, el) {
			$(this)._mouseover(function(e) {
				if(expr) {
					var closest = $(e.target).closest(expr, this),
						relatedClosest;
					if(closest.length) {
						 relatedClosest = $(e.relatedTarget).closest(expr, this);
						 if(!relatedClosest.length || closest[0] != relatedClosest[0])
						 	fn(e, closest);
					}
				} else fn(e);				
			});
		});
	},
	_mouseout: $.fn.mouseout,
	mouseout: function(fn, expr) {
		return this.each(function(i, el) {
			$(this)._mouseout(function(e) {
				if(expr) {
					var closest = $(e.target).closest(expr, this),
						relatedClosest;
					if(closest.length) {
						 relatedClosest = $(e.relatedTarget).closest(expr, this);
						 if(!relatedClosest.length || closest[0] != relatedClosest[0])
						 	fn(e, closest);
					}
				} else fn(e);
			});
		});
	}
});
	
})(jQuery);
/*
 * END OF FILE - /closest/jquery.overandout.js
 */

/*
 * JavaScript file created by Rockstarapps Concatenation
*/
