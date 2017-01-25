
(function ($) {
 //  	'use strict';

	// var form = $('#form1');

	// var name = form.find('.name');
	// var sample = form.find('.sample');

	// // input.keypress(function(event){
	// //     var char = String.fromCharCode(event.which)
	// //     var txt = $(this).val()

	// //     if (! txt.match(/[^a-zA-Z0-9 _]/g,'')){
	// //         $(this).val(txt.replace(char, ''));
	// //     }
	// // });

	// // The function you currently have
	
	// characteHandler(name);
	// characteHandler(sample);

	// function characteHandler(input){
	// 	input.keypress(function (e) {
	// 	    var allowedChars = new RegExp("^[a-zA-Z0-9_\ ]+$");
	// 	    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	// 	    if (allowedChars.test(str)) {
	// 	        return true;
	// 	    }
	// 	    e.preventDefault();
	// 	    return false;
	// 	}).keyup(function() {
	// 	    // the addition, which whill check the value after a keyup (triggered by Ctrl+V)
	// 	    // We take the same regex as for allowedChars, but we add ^ after the first bracket : it means "all character BUT these"
	// 	    var forbiddenChars = new RegExp("[^a-zA-Z0-9\- ]", 'g');
	// 	    if (forbiddenChars.test($(this).val())) {
	// 	        $(this).val($(this).val().replace(forbiddenChars, ''));
	// 	    }
	// 	});
	// }


})(jQuery);