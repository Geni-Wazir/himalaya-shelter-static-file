(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) {
            $('.navbar-area').addClass("is-sticky");
        } else {
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    // Go to top button visibility
    $(function () {
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });

        $('.go-top').on('click', function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });

    // Meanmenu plugin for mobile navigation
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1199"
    });

    // Toggle responsive menu container
    $(".others-option-for-responsive .dot-menu").on("click", function () {
        $(".others-option-for-responsive .container .container").toggleClass("active");
    });

    // Search overlay toggle
    $(".others-options .search-box").on("click", function () {
        $(".search-overlay").toggleClass("search-overlay-active");
    });

    $(".search-overlay-close").on("click", function () {
        $(".search-overlay").removeClass("search-overlay-active");
    });

    // Language selection handling
    $(".language-option").each(function () {
        var each = $(this);
        each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
        var allOptions = $(".language-dropdown-menu").children('a');
        each.find(".language-dropdown-menu").on("click", "a", function () {
            allOptions.removeClass('selected');
            $(this).addClass('selected');
            $(this).closest(".language-option").find(".lang-name").html($(this).text());
        });
    });

    // Initialize WOW.js for animations
    new WOW().init();

    // Owl carousel configuration (example for one instance)
    $('.home_two_banner_slider_wrapper').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 4000,
        animateOut: 'slideOutLeft',
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: { items: 1 },
            1000: { items: 1 }
        }
    });

    // OTP Input handling
    document.querySelectorAll(".otSc").forEach(function (otpEl) {
        otpEl.addEventListener("keyup", backSp);
        otpEl.addEventListener("keypress", function () {
            var nexEl = this.nextElementSibling;
            nexEl.focus();
        });
    });

    function backSp(backKey) {
        if (backKey.keyCode == 8) {
            var prev = this.previousElementSibling.focus();
        }
    }

    // Preloader fade out after window load
    jQuery(window).on('load', function () {
        jQuery(".preloader").fadeOut(500);
    });

})(jQuery);
