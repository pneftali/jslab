/* 
 *	Author	: Neftali Papelleras
 *	Date	: 26 July 2012
 *	Version : 1.1
 *	Git		: https://github.com/pneftali/jslab
 *	Demo	: http://jsfiddle.net/pneftali/vBeM7/
 *--------------------------------------------*/

;(function($) {

    var methods = {
        init: function(that, settings) {
            var toggle_state = 'more',                
                min_height = $(settings.target + ' ' + settings.inner).parent().height(),
                max_height = $(settings.target + ' ' + settings.inner).height(),
                current_height;

            return that.bind('click.togol', function() {

                var this_link = this;

                if (toggle_state === 'more') {
                    current_height = max_height;
                    toggle_state = 'less';
                } else {
                    current_height = min_height;
                    toggle_state = 'more';
                }

                $(settings.target).animate({
                    height: current_height + 'px'
                }, settings.speed, settings.easing, function() {

                    $(this_link).toggleClass('aLess'); // adds or removes 'aLess' class
                    $(this_link).text(toggle_state).append('<b>&nbsp;</b>');
                    settings.stop.call(this);
                });

            });
        }
    };

    $.fn.togol = function(options) {

        var settings = $.extend({
            'target': '#content',
            'inner': '.inner-content',
            'easing': 'linear',
            'speed': 1000,
            stop: function() {}
        }, options);

        return methods.init(this, settings);

    };

})(jQuery);