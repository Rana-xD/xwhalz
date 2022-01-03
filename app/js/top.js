var SOLWHALZ;
if (!SOLWHALZ) SOLWHALZ = {};
if (!SOLWHALZ.top) SOLWHALZ.top = {};

(function () {
    var ns = SOLWHALZ.top;
    ns.roadMapAnimationTL = null;
    ns.roadMapAnimationST = null;

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
        var treeTl = gsap.timeline();
        var treeST = ScrollTrigger.create({
            animation: treeTl,
            trigger: $('.top-roadmap--content')
        });
        tree.each(function () {
            var item = this;
            treeTl.add(function () {
                const itemTl = gsap.timeline();
                var icon = $(item).find('.top-roadmap--item-icon')
                var texts = $(item).find('.top-roadmap--item-text--inner');
                var textInners = $(item).find('.top-roadmap--item-text--inner-sub');
                var convo = $(item).find('.top-roadmap--item-text--convo');
                var bar = $(item).find('.top-roadmap--item-bar');

                gsap.set(icon, {y: 0, opacity: 1});
                if ($(item).hasClass('top-roadmap--item__left')) {
                    gsap.set(texts, {x: '110%'});
                    gsap.set(textInners, {x: '-100%', opacity: 0});
                } else {
                    gsap.set(texts, {x: '-110%'});
                    gsap.set(textInners, {x: '100%', opacity: 0});
                }
                gsap.set(convo, {x: 0, opacity: 0});
                gsap.set(bar, {y: 0, opacity: 0});

                itemTl.from(icon, {
                    y: -100,
                    opacity: 0,
                    duration: 0.5
                });
                itemTl.to([texts, textInners], {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 0.1
                });
                itemTl.to(convo, {
                    opacity: 1,
                    duration: 0.5
                }, '<');
                itemTl.to(bar, {
                    y: 0,
                    opacity: 1,
                    delay: 0.5,
                });
                return itemTl;
            }());

        });
        SOLWHALZ.top.roadMapAnimationTL = treeTl;
        SOLWHALZ.top.roadMapAnimationST = treeST;
    }

    /* -----------------------------------------------------
    Top hero
    ----------------------------------------------------- */
    ns.hero = function () {
        gsap.from($('.top-hero--img'), {
            x: '-100%',
            duration: 1,
            scrollTrigger: {
                trigger: $('.top-hero')
            }
        })
    }

})();


$(function () {
    SOLWHALZ.top.showcasesSlider();
    SOLWHALZ.top.roadmapAnimation();
    SOLWHALZ.top.hero();
});
