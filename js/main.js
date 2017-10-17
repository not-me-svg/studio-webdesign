/* DOCUMENT READY */
$(document).ready(function() {

	$(window).scroll(function(){                          

    });

	/* PARALLAX */
	$('.aliens').hover(
		function() {
			$(this).parallaxify({
				positionProperty: 'transform',
				responsive: true,
				motionType: 'natural',
				mouseMotionType: 'gaussian',
				motionAngleX: 80,
				motionAngleY: 80,
				alphaFilter: 0.5,
				adjustBasePosition: true,
				alphaPosition: 0.025,
			});
		},
		function(){
	        $(this).parallaxify('destroy');
	    }
	);

	/* SLICK SLIDER */
	$('.testimonial-box').slick({
		dots: false,
		arrows: false,
		infinite: true,
  		autoplay: true,
  		autoplaySpeed: 2000,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	/* ISOTOPE */
	$('.events-container').isotope({
		itemSelector: '.grid-item',
		layoutMode: 'packery',
		percentPosition: true,
		packery: {
		  gutter: '.gutter-sizer'
		}
	});	

	/* SCROLL REVEAL */

	window.sr = ScrollReveal();
	sr.reveal('.place-box.right', { 
		duration: 500,
		delay: 300,
		origin: 'right',
		scale: 1
		});

	sr.reveal('.place-box.left', { 
		duration: 500,
		delay: 300,
		origin: 'left',
		scale: 1
		});

	sr.reveal('.grid-item', { duration: 500 }, 300);

	/* SMOOTH SCROLL */
	smoothScroll.init({
		speed: 1500, // Integer. How fast to complete the scroll in milliseconds
		easing: 'easeInOutQuart', // Easing pattern to use
		offset: 110, // Integer. How far to offset the scrolling anchor location in pixels
	});

	/* WINDOW RESIZE */

	$(window).resize(function(){

		/* ISOTOPE */
		$('.events-container').isotope({
			itemSelector: '.grid-item',
			layoutMode: 'packery',
			percentPosition: true,
			packery: {
			  gutter: '.gutter-sizer'
			}
		});	
	});
});
