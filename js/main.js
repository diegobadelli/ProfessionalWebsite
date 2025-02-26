(function ($) {
	"use strict";
	var nav = $('nav');
	var navHeight = nav.outerHeight();

	$('.navbar-toggler').on('click', function () {
		if (!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	})



	// Back to top button
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

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
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

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
		var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	// Lazy Load Portfolio Carousel
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
						0: { items: 1 }, // Phones
						576: { items: 2 }, // Small tablets
						992: { items: 3 }, // Larger tablets and small desktops
						1440: { items: 4 }, // High-resolution desktops
						1920: { items: 5 } // Ultra-wide screens
					}
				});

				observer.disconnect(); // Stop observing after initializing the carousel
			}
		});

		observer.observe(portfolioSection);
	};


	// Check browser support and initialize
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
				0: { items: 1 }, // Phones
				576: { items: 2 }, // Small tablets
				992: { items: 3 }, // Larger tablets and small desktops
				1440: { items: 4 }, // High-resolution desktops
				1920: { items: 5 } // Ultra-wide screens
			}
		});

	}

	window.addEventListener('scroll', function () {
		const hero = document.querySelector('.hero-section');
		let scrollPosition = window.scrollY;
		hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
	});

	document.addEventListener('DOMContentLoaded', function () {
		const video = document.querySelector('.video-bg');
		video.load();
	});


	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);
