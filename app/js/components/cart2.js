'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $ */
app.partial.cart2 = function(){


	var container = $('#container'), page = {path: 'cart2'};
	container.on('page:update:cart2' , function(page, menu){
		$('.collapse-button a').on('click', function(){
			$('i', this).toggleClass('fa-compress').parents('.collapse-content').toggleClass('collapsed');
		});

		$('#btnBack').on('click', function(){
			history.go(-1);
		});

		$('#twzipcode').twzipcode();
		$('#twzipcode2').twzipcode();
		$('[name=zipcode]').attr('readonly', 'readonly');

	});

	if($('#content.cart2').length){
		$('#container').trigger('page:update:cart2', null);
	}




};
