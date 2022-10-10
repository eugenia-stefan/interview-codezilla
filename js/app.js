(function ($) {

    'use strict';

	// STICKY
	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();

	    if (scroll >= 50) {
	        $(".sticky").addClass("nav-sticky");
	    } else {
	        $(".sticky").removeClass("nav-sticky");
	    }
	});

	// scrollspy
	$("#mySidenav").scrollspy({
	    offset: 70
	});

	/* Add your code after this line */

})(jQuery)
