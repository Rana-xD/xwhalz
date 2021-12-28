var SOLWHALZ;
if (!SOLWHALZ) SOLWHALZ = {};
if (!SOLWHALZ.top) SOLWHALZ.top = {};

(function (){
    var ns = SOLWHALZ.top;


    /* -----------------------------------------------------
    Top showcases slider
    ----------------------------------------------------- */
    ns.showcasesSlider = function() {
        var $slide = $('#top-showcases--slider');

        $slide.slick({
            infinite: true,
            slidesToShow: 3,
            autoplay: true,
            pauseOnHover: false,
            arrows: true,
            dots: false,
            appendArrows: $('.top-showcases--arrow-wrapper'),
            nextArrow: '<div class="top-showcases--arrow top-showcases--arrow__right"></div>',
            prevArrow: '<div class="top-showcases--arrow top-showcases--arrow__left"></div>'
        });
    }

})();


$(function(){
    SOLWHALZ.top.showcasesSlider();
});
