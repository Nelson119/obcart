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
	    $('[data-toggle="tooltip"]').each(function(){
	    	$(this).attr('title', $(this).html());
		}).tooltip(); 

		$('.collapse-button a').on('click', function(){
			$('i', this).toggleClass('fa-compress').parents('.collapse-content').toggleClass('collapsed');
		});

		$('#btnBack').on('click', function(){
			history.go(-1);
		});
		$('#twzipcode, #twzipcode2, #twzipcode3, #twzipcode4').twzipcode().on('change.twzipcode keyup.twzipcode blur.twzipcode', function(e){
			console.log(this)
			$(this).find('[name=district]').selectpicker('destroy').selectpicker();
			$(this).find('[name=county]').selectpicker('destroy').selectpicker();
			$('#twzipcode, #twzipcode2').find('[data-role=district]').addClass('col-xs-6 col-sm-6');
			$('#twzipcode3, #twzipcode4').find('[data-role=district]').addClass('col-xs-6 col-sm-6');
			$('#twzipcode, #twzipcode2').find('[data-role=county]').addClass('col-xs-6 col-sm-6');
			$('#twzipcode3, #twzipcode4').find('[data-role=county]').addClass('col-xs-6 col-sm-6');
		});

		$('[name=county]').selectpicker().on('change', function(){
			$(this).parents('.row').find('[data-role=district]').selectpicker('destroy').selectpicker();
			$('#twzipcode, #twzipcode2').find('[data-role=district]').addClass('col-xs-6 col-sm-6');
			$('#twzipcode3, #twzipcode4').find('[data-role=district]').addClass('col-xs-6 col-sm-6');
			$('#twzipcode, #twzipcode2').find('[data-role=county]').addClass('col-xs-6 col-sm-6');
			$('#twzipcode3, #twzipcode4').find('[data-role=county]').addClass('col-xs-6 col-sm-6');
		}).trigger('change');

		
		$('#countries_states1').on('change.bfhselectbox', function(e){
			if($('#countries_states1').val() === 'TW'){
				$('#states1').hide();
			}else{
				$('#states1').show();
			}
			if($('#countries_states1').val() === 'TW'){
				$('#twzipcode').removeClass('hide-children');
			}else{
				$('#twzipcode').addClass('hide-children');
			}
		}).trigger('change.bfhselectbox');

		
		$('#countries_states2').on('change.bfhselectbox', function(e){
			if($('#countries_states2').val() === 'TW'){
				$('#states2').hide();
			}else{
				$('#states2').show();
			}
			if($('#countries_states2').val() === 'TW'){
				$('#twzipcode2').removeClass('hide-children');
			}else{
				$('#twzipcode2').addClass('hide-children');
			}
		}).trigger('change.bfhselectbox');

		
		$('#countries_states3').on('change.bfhselectbox', function(e){
			if($('#countries_states3').val() === 'TW'){
				$('#states3').hide();
			}else{
				$('#states3').show();
			}
			if($('#countries_states3').val() === 'TW'){
				$('#twzipcode3').removeClass('hide-children');
			}else{
				$('#twzipcode3').addClass('hide-children');
			}
		}).trigger('change.bfhselectbox');

		
		$('#countries_states4').on('change.bfhselectbox', function(e){
			if($('#countries_states4').val() === 'TW'){
				$('#states4').hide();
			}else{
				$('#states4').show();
			}
			if($('#countries_states4').val() === 'TW'){
				$('#twzipcode4').removeClass('hide-children');
			}else{
				$('#twzipcode4').addClass('hide-children');
			}
		}).trigger('change.bfhselectbox');

		$('.donate-type').selectpicker();

		//收件人姓名電話地址與購買人相同
		$('#sameas1').on('change', function(e){
			var ischecked = $(this).is(':checked');
			var $paymentForm = $('#paymentForm');
			var $shipmentForm = $('#shipmentForm');
			if(ischecked){
				$paymentForm.removeClass('col-sm-6').addClass('col-sm-12');
				// 姓名 地址 labal位置不動
				$('.form-labels', $paymentForm).removeClass('col-sm-2').addClass('col-sm-1');
				//姓名 縣市下拉 調整
				$('.form-fields.col-sm-4, .btn-group.col-sm-4', $paymentForm)
					.removeClass('col-sm-4').addClass('col-sm-5');

				//街道門牌 位置
				$('.form-fields.col-sm-10.col-sm-offset-2', $paymentForm)
					.removeClass('col-sm-10 col-sm-offset-2').addClass('col-sm-11 col-sm-offset-1');
				$shipmentForm.addClass('fade');
			} else{
				$paymentForm.addClass('col-sm-6').removeClass('col-sm-12');
				// 姓名 地址 labal位置不動
				$('.form-labels', $paymentForm).addClass('col-sm-2').removeClass('col-sm-1');
				//姓名 縣市下拉 調整
				$('.form-fields.col-sm-5, .btn-group.col-sm-5', $paymentForm)
					.addClass('col-sm-4').removeClass('col-sm-5');
				//街道門牌 位置
				$('.form-fields.col-sm-11.col-sm-offset-1', $paymentForm)
					.addClass('col-sm-10 col-sm-offset-2').removeClass('col-sm-11 col-sm-offset-1');
				$shipmentForm.removeClass('fade');
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
