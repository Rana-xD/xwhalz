var SOLWHALZ;
if (!SOLWHALZ) SOLWHALZ = {};
if (!SOLWHALZ.common) SOLWHALZ.common = {};

(function (){
    var ns = SOLWHALZ.common;
    var mediaQuery = matchMedia('(max-width: 679px)');
    const $window = $(window);

    ns.mediaQuery = mediaQuery;
    ns.$window = $window;

    /* -----------------------------------------------------
    Scroll Animations
    ----------------------------------------------------- */
    ns.scrollReveal = function () {
        var controller = new ScrollMagic.Controller();

        $('.fadein').each(function () {
            addTrigger(this, this)
        });

        function addTrigger(trigger, element) {
            new ScrollMagic.Scene({
                triggerElement: trigger,
                triggerHook: 0.9,
                reverse: false
            })
                .setClassToggle(element, 'animate')
                .addTo(controller);

        }
    };

    /* -----------------------------------------------------
    Header HAM
    ----------------------------------------------------- */
    ns.navManager = function () {

        var $navButton = $('.header-sp-btn');
        var $nav = $('.header-menu');
        var $body = $('body');
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

})();


$(function(){
    SOLWHALZ.common.scrollReveal();
    SOLWHALZ.common.navManager();
});
