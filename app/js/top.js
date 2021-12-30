var SOLWHALZ;
if (!SOLWHALZ) SOLWHALZ = {};
if (!SOLWHALZ.top) SOLWHALZ.top = {};

(function (){
    var ns = SOLWHALZ.top;

    var mediaQuery = matchMedia('(max-width: 679px)');

    /* -----------------------------------------------------
    Top showcases slider
    ----------------------------------------------------- */
    ns.showcasesSlider = function() {
        $(document).ready(function () {
            var $slide = $('#top-showcases--slider');

            if (mediaQuery.matches) {
                //sp
            } else {//pc
                // Workaround to fix slick does not expand when there are only 3 items
                var slideCount = $(".top-showcases--item").length;
                if (slideCount <= 3) {
                    $slide.children().clone(true, true).appendTo(".top-showcases--slider");
                }
            }

            $slide.slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                // autoplay: true,
                pauseOnHover: false,
                arrows: true,
                dots: false,
                appendArrows: $('.top-showcases--arrow-wrapper'),
                nextArrow: '<div class="top-showcases--arrow top-showcases--arrow__right"></div>',
                prevArrow: '<div class="top-showcases--arrow top-showcases--arrow__left"></div>',
                responsive: [
                    {
                        breakpoint: 679,
                        settings: {
                            slidesToShow: 1,
                            // slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                            arrows: false
                        }
                    }
                ]
            });
        })
    }

})();


$(function(){
    SOLWHALZ.top.showcasesSlider();
});
