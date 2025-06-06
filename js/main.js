(function ($) {
    "use strict";

    var nav = $('nav');
    var navHeight = nav.outerHeight();

    /* -- Navbar Transparente no Início e Escura ao Rolar -- */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Botão do menu mobile
    $('.navbar-toggler').on('click', function () {
        $('.navbar').toggleClass('scrolled'); // Garante visibilidade no mobile
    });

    /* -- Back to Top Button -- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    /* -- Smooth Scroll para âncoras -- */
    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    /* -- Fecha menu mobile ao clicar em um link -- */
    $('.js-scroll').on("click", function () {
        $('.navbar-collapse').collapse('hide');
    });

    /* -- Scrollspy para marcar seção ativa na navbar -- */
    $('body').scrollspy({
        target: '#mainNav',
        offset: navHeight
    });

    /* -- Inicializa contadores numéricos -- */
    $('.counter').counterUp({
        delay: 15,
        time: 2000
    });

    /* -- Lazy Load Owl Carousel do Portfólio -- */
    const lazyLoadCarousel = () => {
        const portfolioSection = document.querySelector("#portfolio");
        if (!portfolioSection) {
            console.warn("Portfolio section not found.");
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                $("#portfolio-carousel").owlCarousel({
                    items: 3,
                    margin: 20,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    responsive: {
                        0: { items: 1 },
                        576: { items: 2 },
                        992: { items: 3 },
                        1440: { items: 4 },
                        1920: { items: 5 }
                    }
                });

                observer.disconnect();
            }
        });

        observer.observe(portfolioSection);
    };

    if ('IntersectionObserver' in window) {
        lazyLoadCarousel();
    } else {
        console.warn("IntersectionObserver not supported. Initializing carousel immediately.");
        $("#portfolio-carousel").owlCarousel({
            items: 3,
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: { items: 1 },
                576: { items: 2 },
                992: { items: 3 },
                1440: { items: 4 },
                1920: { items: 5 }
            }
        });
    }

    /* -- Inicializa Owl Carousel nos Testemunhos -- */
    $('#testimonial-mf').owlCarousel({
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 }
        }
    });

})(jQuery);

/* Dynamic footer year */
document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    document.querySelectorAll('.article-content pre').forEach(pre => {
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.setAttribute('aria-label', 'Copy code');
        btn.textContent = 'Copy';
        pre.appendChild(btn);
        btn.addEventListener('click', () => {
            const code = pre.querySelector('code');
            if (code) {
                navigator.clipboard.writeText(code.innerText).then(() => {
                    btn.textContent = 'Copied!';
                    setTimeout(() => btn.textContent = 'Copy', 2000);
                });
            }
        });
    });

});
