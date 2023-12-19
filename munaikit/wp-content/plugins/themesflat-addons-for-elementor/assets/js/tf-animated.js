(function( $ ) {
    "use strict";

    var themesflat_animation_fadeup = function (container, item) {
        $(window).scroll(function () {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(container).each(function (index, value) {
                var objectBottom = $(this).offset().top + $(this).outerHeight() * 0.1;
                
                if (objectBottom < windowBottom) { 
                    var seat = $(this).find(item);
                    for (var i = 0; i < seat.length; i++) {
                        (function (index) {
                            setTimeout(function () {
                                seat.eq(index).addClass('tfanimated');
                            }, 200 * index);
                        })(i);
                    }
                }
            });
        }).scroll();
    };
    
    var themesflat_animation_classes_fadeup = function () {
        themesflat_animation_fadeup(".wrap-blog-article.blog-list .item", "article");
        themesflat_animation_fadeup(".wrap-blog-article.blog-gird", ".item");
        themesflat_animation_fadeup(".tf-posts", ".item");
        themesflat_animation_fadeup(".tf-animated-column-elementor", ".elementor-column");
        themesflat_animation_fadeup(".tf-animated-item", ".elementor-widget-container");
    };

    var themesflat_animation_mousemove = function (container, element) {
        $(container).mousemove(function(e){
            var amountMovedX = (e.pageX * 1 / 50);
            var amountMovedY = (e.pageY * 0.1 / 20);
            $(this).find(element).css({
              '-webkit-transform' : 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)',
              '-moz-transform'    : 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)',
              '-ms-transform'     : 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)',
              '-o-transform'      : 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)',
              'transform'         : 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
            });
        });
    };
    var themesflat_animation_mousemove_classes = function () {
        themesflat_animation_mousemove("body",".animation-mouse");
    };

    $(function() {
        themesflat_animation_classes_fadeup();
        themesflat_animation_mousemove_classes();
    });

})(jQuery);