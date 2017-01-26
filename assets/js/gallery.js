
(function ($) {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
	    columnWidth: '.grid-sizer'
	  }
	});
	// layout Isotope after each image loads
	$grid.imagesLoaded().progress( function() {
	    $('.parallax-window').imagesLoaded( function() {
		  	$grid.isotope('layout');
		});;
	});  

})(jQuery);