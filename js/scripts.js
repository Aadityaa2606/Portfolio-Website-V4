/* Description: Custom JS file */

(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	// jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        if ($(window).width() < 768) { // Adjust the width as needed for your definition of "mobile screens"
            $(document).on('click', 'a.page-scroll', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 600, 'easeInOutExpo');
                event.preventDefault();
            });
        }
    });
    

    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // hover in desktop mode
    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);

// loading animation
var loader = document.getElementById("preloader")
window.addEventListener("load", function () {
    loader.style.display = "none"
    const header = document.querySelector('.bg-img');
    const text1 = document.querySelector('.header .row .col-lg-6 .text-container .h1-large');
    const text2 = document.querySelector('.header .row .col-lg-6 .text-container .h1-small');
    const text3 = document.querySelector('.header .row .col-lg-6 .text-container .btn-solid-lg');
    const text4 = document.querySelector('.header .row .col-lg-6 .text-container .btn-outline-lg');
    const nav = document.querySelector('nav');

    const tl = new TimelineMax();

    tl.fromTo(header, 1, {filter: "blur(20px)"}, {filter: "blur(0px)", ease:Power2.easeInOut})
    .fromTo(text3, 0.5, {opacity: "0", y: "50"}, {opacity: "1", y: "0", ease:Power2.easeInOut}, "-=0.4")
    .fromTo(text4, 0.5, {opacity: "0", y: "50"}, {opacity: "1", y: "0", ease:Power2.easeInOut}, "-=0.3")
    .fromTo(text1, 0.5, {opacity: "0", x: "100"}, {opacity: "1", x: "0", ease:Power2.easeInOut}, "-=0.6")
    .fromTo(text2, 0.5, {opacity: "0", x: "100"}, {opacity: "1", x: "0", ease:Power2.easeInOut}, "-=0.5")
    
    if (window.innerWidth > 768){
        tl.fromTo(nav, 1.5, {opacity: "0"}, {opacity: "1", ease:Power2.easeInOut})
        
    }
})

function openTab(th)
{
    window.open(th.name,'_blank');
}

