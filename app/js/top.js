var SOLWHALZ;
if (!SOLWHALZ) SOLWHALZ = {};
if (!SOLWHALZ.top) SOLWHALZ.top = {};

(function () {
    var ns = SOLWHALZ.top;

    var mediaQuery = matchMedia('(max-width: 679px)');

    /* -----------------------------------------------------
    Top showcases slider
    ----------------------------------------------------- */
    ns.showcasesSlider = function () {
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
                autoplay: true,
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

    /* -----------------------------------------------------
    Top showcases slider
    ----------------------------------------------------- */
    ns.roadmapAnimation = function () {
        var tree = $('.top-roadmap--item');
        var treeTl = gsap.timeline({
                duration: 1,
                scrollTrigger: {
                    trigger: $('.top-roadmap--content'),
                }
            }
        );
        tree.each(function () {
            var item = this;
            treeTl.add(function () {
                const itemTl = gsap.timeline();
                itemTl.from($(item).find('.top-roadmap--item-icon'), {
                    y: -100,
                    opacity: 0
                });
                itemTl.to($(item).find('.top-roadmap--item-text--inner, .top-roadmap--item-text--inner-sub'), {
                    x: 0,
                    y: 0,
                    opacity: 1,
                });
                itemTl.to($(item).find('.top-roadmap--item-text--convo'), {
                    opacity: 1,
                }, '<');
                itemTl.from($(item).find('.top-roadmap--item-bar'), {
                    y: -50,
                    opacity: 0,
                    delay: 0.5
                });
                return itemTl;
            }());

        });
    }

})();


$(function () {
    SOLWHALZ.top.showcasesSlider();
    SOLWHALZ.top.roadmapAnimation();
});
