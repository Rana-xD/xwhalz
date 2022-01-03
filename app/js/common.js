var SOLWHALZ;
if (!SOLWHALZ) SOLWHALZ = {};
if (!SOLWHALZ.common) SOLWHALZ.common = {};

(function (){
    var allAnimations = [];
    var ns = SOLWHALZ.common;
    var mediaQuery = matchMedia('(max-width: 679px)');
    const $window = $(window);

    ns.mediaQuery = mediaQuery;
    ns.$window = $window;
    ns.allAnimations = allAnimations ?? [];

    /* -----------------------------------------------------
    Scroll Animations
    ----------------------------------------------------- */
    ns.scrollReveal = function () {
        var animations = $('.fade-in-down, .fade-in-up');
        animations.each(function () {
            var animation = this;
            var y = 100;

            if ($(animation).hasClass('fade-in-down')) {
                y *= -1;
            }

            gsap.set(animation, {y: y});
            allAnimations.push(gsap.to(animation, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: animation,
                }
            }));
        });

        function handleScroll() {
            if ($window.scrollTop() === 0)
            {
                // remove previous animation to avoid the memory leak
                allAnimations.forEach(function (animation) {
                    animation.kill();
                    // null means removing obj ref
                    animation = null;
                });
                allAnimations = [];

                // restart all animations
                SOLWHALZ.common.scrollReveal();
                SOLWHALZ.top.roadMapAnimationTL.restart();

            }
        }

        function debounce(method, delay) {
            clearTimeout(method._tId);
            method._tId= setTimeout(function(){
                method();
            }, delay);
        }
        $window.on('scroll', function () {
            debounce(handleScroll, 100);
        });
    };

    /* -----------------------------------------------------
    Header HAM
    ----------------------------------------------------- */
    ns.navManager = function () {

        var $navButton = $('.header-sp-btn');
        var $nav = $('.header-menu');
        var $body = $('.fake-cover');
        var isNavOpen = false;

        navHandle(mediaQuery);

        mediaQuery.addListener(navHandle);

        function navHandle(mq) {
            isNavOpen = false;

            if (mq.matches) {
            } else { //pc
                $nav.removeClass('-active');
                $navButton.removeClass('-active');
                $body.removeClass('-active');
            }
        }

        $navButton.on('click', function () {
            if (isNavOpen) {
                $nav.removeClass('-active');
                $navButton.removeClass('-active');
                $body.removeClass('-active');
                isNavOpen = false;
            } else {
                $nav.addClass('-active');
                $navButton.addClass('-active');
                $body.addClass('-active');
                isNavOpen = true;
            }
        });

    }

    /* -----------------------------------------------------
    Header HAM
    ----------------------------------------------------- */
    ns.headerMenu = function () {
        if (mediaQuery.matches) {
            //sp
            $('.header-menu--item').click(function (e) {
                $('.header-menu--item').removeClass('-active');
                $(this).addClass('-active');
            })

            $('.header-menu--item').on('mouseover', function (e) {
                $(this).addClass('-active');
            })

            $('.header-menu--item').on('mouseleave', function (e) {
                $(this).removeClass('-active');
            })
        }
    }

})();


$(function(){
    SOLWHALZ.common.scrollReveal();
    SOLWHALZ.common.navManager();
    SOLWHALZ.common.headerMenu();
});
