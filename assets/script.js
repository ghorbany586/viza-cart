//وقتی می خوای از jQuery استفاده کنی این رو حتما بنویس :

(function ($) {

    $(document).ready(function () {

        function menuscroll() {
            let navmenu = $('.nav-menu');
            if ($(window).scrollTop() > 50) {
                navmenu.addClass('is-scrolling');
            } else {
                navmenu.removeClass('is-scrolling');
            }
        }

        menuscroll();
        $(window).on('scroll', menuscroll);


        let sideNav = $('#navbar');
        sideNav.on('show.bs.collapse', function () {
            $(this).parents('.nav-menu').addClass('menu-is-open');
        })

        sideNav.on('hide.bs.collapse', function () {
            $(this).parents('.nav-menu').removeClass('menu-is-open');
        })

        $('#navbar .navbar-nav a').on('click', function (e) {
            let target = $(this.hash);
            if (target.length) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1024)
            }

        })

        $(document).on('click', 'ul .closebtn', function () {
            $('header ul').animate({
                right: "-100%"
            });
        });

        // Responsive Header
        $(document).on('click', '.btn-menu', function (e) {
            e.stopPropagation();
            document.getElementById("mySidenav").style.display = "block";
            $('.fixed-top .navigation .navbar-nav').animate({
                right: "0px"
            });
        });

        function closeNav() {
            $('.fixed-top .navigation .navbar-nav').animate({
                right: "-100%"
            });
            document.getElementById("mySidenav").style.display = "none";
        }
    });
    new Swiper('.comments-user .swiper-container', {
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 15,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

})(jQuery);

var swiper = new Swiper('.slide .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 15,
    breakpoints: {
        1240: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        370: {
            slidesPerView: 1,
            spaceBetween: 5,
        }
    },
    // Optional parameters
    autoplay: {
        delay: 2000,
    },

});
var swiper = new Swiper(".slide-item .swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var mySwiper = new Swiper('.slide-item .swiper-container', {
    autoplay: {
        delay: 2000,
    },
});
var swiper = new Swiper('.slide-home .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper('.items .item-product-last .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper('.last-article .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
    },

});
var swiper = new Swiper('.product-us .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 8,
    autoplay: {
        delay: 10000,
    },

});
