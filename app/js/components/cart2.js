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

		$('#twzipcode, #twzipcode2, #twzipcode3, #twzipcode4').twzipcode();
		$('[name=district]');

		$('[name=county]').selectpicker().on('change', function(){
			$(this).parents('.row').find('[name=district]').selectpicker('destroy').selectpicker();
			$('#twzipcode, #twzipcode2').find('[name=district]').parents('.btn-group').addClass('col-xs-6 col-sm-6');
			$('#twzipcode3, #twzipcode4').find('[name=district]').parents('.btn-group').addClass('col-xs-6 col-sm-3');
			$('#twzipcode, #twzipcode2').find('[name=county]').parents('.btn-group').addClass('col-xs-4 col-sm-4');
			$('#twzipcode3, #twzipcode4').find('[name=county]').parents('.btn-group').addClass('col-xs-4 col-sm-2');
		}).trigger('change');

		$('[name=zipcode]').attr('readonly', 'readonly').each(function(i,d){
			// var $clone = $(this).clone();
			// $(this).parents('.row').find('.btn-group:first').clone().html('').appendTo($(this).parents('.row')).append($clone);
			// $(this).on('change', function(){
			// 	console.log($(this).val())
			// 	$clone.val($(this).val());
			// });
		});
		$('.donate-type').selectpicker();

		$('#sameas1').on('change', function(e){
			var ischecked = $(this).is(':checked');
			var $paymentForm = $('#paymentForm');
			var $shipmentForm = $('#shipmentForm');
			if(ischecked){
				$paymentForm.removeClass('col-sm-6').addClass('col-sm-12');
				$('.form-labels', $paymentForm).removeClass('col-sm-2').addClass('col-sm-1');
				$('.form-fields.col-sm-10.col-sm-offset-2', $paymentForm)
					.removeClass('col-sm-10').addClass('col-sm-11')
					.removeClass('col-sm-offset-2').addClass('col-sm-offset-1');
				$('.form-fields.col-sm-4', $paymentForm).removeClass('col-sm-4').addClass('col-sm-5');
				$('.form-fields.col-sm-10', $paymentForm).removeClass('col-sm-10').addClass('col-sm-11');
				$shipmentForm.addClass('hide');
			} else{
				$paymentForm.addClass('col-sm-6').removeClass('col-sm-12');
				$('.form-labels', $paymentForm).addClass('col-sm-2').removeClass('col-sm-1');
				$('.form-fields.col-sm-11.col-sm-offset-1', $paymentForm)
					.addClass('col-sm-10').removeClass('col-sm-11')
					.addClass('col-sm-offset-2').removeClass('col-sm-offset-1');
				$('.form-fields.col-sm-5', $paymentForm).addClass('col-sm-4').removeClass('col-sm-5');
				$('.form-fields.col-sm-11', $paymentForm).addClass('col-sm-10').removeClass('col-sm-11');
				$shipmentForm.removeClass('hide');
			}
		});


		//電子發票、捐贈發票表單 切換

		$('[name=receiptMethod]').on('click', function(){
			var target = '#' + $('[name=receiptMethod]:checked').val();
			$('.receipt-method-collapse').not(target).addClass('collapsing');
			$(target).removeClass('collapsing');
		});

		//捐贈發票表單類型
		$('[name=receiptMethod1Type]').on('click', function(){
			var target = '#' + $('[name=receiptMethod1Type]:checked').val();
			$('.donate-type').not(target).attr('disabled', 'disabled').attr('readonly', 'readonly');
			$('.donate-type').not(target).not('select').val('');
			$('.donate-type').not(target).not('input').val('7505');
			$(target).removeAttr('disabled').removeAttr('readonly');
		});

		//電子發票載具 切換
		$('[name=receiptMethod2Type]').on('click', function(){
			var target = '#' + $('[name=receiptMethod2Type]:checked').val();
			$('.receipt-carrier').not(target).addClass('collapsing');
			$(target).removeClass('collapsing');
		});

		//會員載具姓名電話地址與購買人相同
		$('#sameas2').on('change', function(e){
			var ischecked = $(this).is(':checked');

			if(ischecked){
				$('#' + this.value).addClass('collapsing');
			}else{
				$('#' + this.value).removeClass('collapsing');
			}
		});

		//三聯式發票姓名電話地址與購買人相同
		$('#sameas3').on('change', function(e){
			var ischecked = $(this).is(':checked');

			if(ischecked){
				$('#' + this.value).addClass('collapsing');
			}else{
				$('#' + this.value).removeClass('collapsing');
			}
		});

	});

	if($('#content.cart2').length){
		$('#container').trigger('page:update:cart2', null);
	}




};
