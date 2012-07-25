(function ( $ ) {
	
	var methods = {
		init: function( settings ) {
			var toggle_state 	= 'more',
				min_height		= $( settings.target+ ' .inner-content' ).parent().height(),
				max_height 		= $( settings.target+ ' .inner-content' ).height();				

			return function() {

				var this_link 		= this;

				if(toggle_state === 'more'){
					current_height	= max_height;
					toggle_state 	= 'less';
				} else{
					current_height 	= min_height;
					toggle_state 	= 'more';
				}
				console.log( settings.target );
				$( settings.target ).animate({
					height: current_height+'px'
				}, 1000, function(){

					$( this_link ).toggleClass('aLess'); // adds or removes 'aLess' class
					$( this_link ).text(toggle_state).append('<b>&nbsp;</b>');
				})				
			}
		}
	}

	$.fn.togol = function( options ) {

		var settings = $.extend( {
			'target' : null
		}, options );

	    // Method calling logic
	    if ( methods[options] ) {
	      	return methods[ option ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof options === 'object' || ! options ) {
	      	return methods.init.apply( this, arguments );
	    } else {
	      	$.error( 'Method ' +  options + ' does not exist on jQuery.tooltip' );
	    }    
	    
	};
})( jQuery );













