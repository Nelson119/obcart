'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $, _ */
app.partial.cart1 = function(){

    //運送及付款設定
	var shipments = [
		{
			label:"台灣及離島",
			regionId: 1,
			freeShip: 1000,
			options:[
				{
					label: "7-11 取貨",
					image: '../img/7-11.png',
					shipmentId: 1,
					fee: 120,
					payments:[{
						label: "信用卡付款",
						image: "../img/visa.png",
						paymentId: 1
					}, {
						label: "超商代收",
						image: '../img/7-11.png',
						paymentId: 2
					}, {
					// 	label: "PayPal",
					// 	image: "../img/paypal.png",
					// 	paymentId: 3,
					// }, {
						label: "支付寶",
						image: "../img/alipay.png",
						paymentId: 4
					}, {
						label: "LinePay",
						image: "../img/line.png",
						paymentId: 5
					}]
				}, {
					label: "便利達康取貨(OK、萊爾富、全家)",
					image: '../img/shipment2.png',
					shipmentId: 2,
					fee: 130,
					payments:[{
						label: "信用卡付款",
						image: "../img/visa.png",
						paymentId: 1
					}, {
						label: "超商代收",
						image: '../img/shipment2.png',
						paymentId: 6
					}, {
						label: "PayPal",
						image: "../img/paypal.png",
						paymentId: 3
					}, {
						label: "支付寶",
						image: "../img/alipay.png",
						paymentId: 4
					}, {
						label: "LinePay",
						image: "../img/line.png",
						paymentId: 5
					}]
				}, {
					label: "黑貓宅急便",
					image: '../img/cat.jpg',
					shipmentId: 3,
					fee: 140,
					payments:[{
						label: "信用卡付款",
						image: "../img/visa.png",
						paymentId: 1
					}, {
						label: "宅急便代收",
						image: "../img/cat.jpg",
						paymentId: 2
					}, {
						label: "PayPal",
						image: "../img/paypal.png",
						paymentId: 3
					}, {
						label: "支付寶",
						image: "../img/alipay.png",
						paymentId: 4
					}, {
						label: "LinePay",
						image: "../img/line.png",
						paymentId: 5
					}]
				}
			]
		}, {
			label:"中國",
			regionId: 2,
			options:[
				{
					label: "海外運送",
					fee: 200,
					image: '../img/oversea.jpg',
					shipmentId: 4,
					payments:[{
						label: "信用卡付款",
						image: "../img/visa.png",
						paymentId: 1
					}, {
						label: "PayPal",
						image: "../img/paypal.png",
						paymentId: 3
					}, {
						label: "支付寶",
						image: "../img/alipay.png",
						paymentId: 4
					}]
				}
			]
		}, {
			label:"香港",
			regionId: 3,
			options:[
				{
					label: "海外運送",
					image: '../img/oversea.jpg',
					shipmentId: 5,
					fee: 300,
					payments:[{
						label: "信用卡付款",
						image: "../img/visa.png",
						paymentId: 1
					}, {
						label: "PayPal",
						image: "../img/paypal.png",
						paymentId: 3
					}, {
						label: "支付寶",
						image: "../img/alipay.png",
						paymentId: 4
					}]
				}
			]
		}, {
			label:"澳門",
			regionId: 4,
			options:[
				{
					label: "海外運送",
					image: '../img/oversea.jpg',
					shipmentId: 6,
					fee: 400,
					payments:[{
						label: "信用卡付款",
						image: "../img/visa.png",
						paymentId: 1
					}, {
						label: "PayPal",
						image: "../img/paypal.png",
						paymentId: 3
					}, {
						label: "支付寶",
						image: "../img/alipay.png",
						paymentId: 4
					}]
				}
			]
		}, {
			label:"新加坡",
			regionId: 5,
			options:[
				{
					label: "海外運送",
					image: '../img/oversea.jpg',
					shipmentId: 7,
					fee: 500,
					payments:[{
						label: "信用卡付款",
						image: "../img/visa.png",
						paymentId: 1
					}, {
						label: "PayPal",
						image: "../img/paypal.png",
						paymentId: 3
					}, {
						label: "支付寶",
						image: "../img/alipay.png",
						paymentId: 4
					}]
				}
			]
		}, {
			label:"馬來西亞",
			regionId: 6,
			options:[
				{
					label: "海外運送",
					image: '../img/oversea.jpg',
					shipmentId: 8,
					fee: 600,
					payments:[{
						label: "信用卡付款",
						image: "../img/visa.png",
						paymentId: 1
					}, {
						label: "PayPal",
						image: "../img/paypal.png",
						paymentId: 3
					}, {
						label: "支付寶",
						image: "../img/alipay.png",
						paymentId: 4
					}]
				}
			]
		}, {
			label:"泰國",
			regionId: 7,
			options:[
				{
					label: "海外運送",
					image: '../img/oversea.jpg',
					shipmentId: 9,
					fee: 700,
					payments:[{
						label: "信用卡付款",
						image: "../img/visa.png",
						paymentId: 1
					}, {
						label: "PayPal",
						image: "../img/paypal.png",
						paymentId: 3
					}, {
						label: "支付寶",
						image: "../img/alipay.png",
						paymentId: 4
					}]
				}
			]
		}, {
			label:"越南",
			regionId: 8,
			options:[
				{
					label: "海外運送",
					image: '../img/oversea.jpg',
					shipmentId: 10,
					fee: 800,
					payments:[{
						label: "信用卡付款",
						image: "../img/visa.png",
						paymentId: 1
					}, {
						label: "PayPal",
						image: "../img/paypal.png",
						paymentId: 3
					}, {
						label: "支付寶",
						image: "../img/alipay.png",
						paymentId: 4
					}]
				}
			]
		}, {
			label:"美國",
			regionId: 9,
			options:[
				{
					label: "海外運送",
					image: '../img/oversea.jpg',
					shipmentId: 11,
					fee: 900,
					payments:[{
						label: "信用卡付款",
						image: "../img/visa.png",
						paymentId: 1
					}, {
						label: "PayPal",
						image: "../img/paypal.png",
						paymentId: 3
					}, {
						label: "支付寶",
						image: "../img/alipay.png",
						paymentId: 4
					}]
				}
			]
		}, {
			label:"菲律賓",
			regionId: 10,
			options:[
				{
					label: "海外運送",
					image: '../img/oversea.jpg',
					shipmentId: 12,
					fee: 1000,
					payments:[{
						label: "信用卡付款",
						image: "../img/visa.png",
						paymentId: 1
					}, {
						label: "PayPal",
						image: "../img/paypal.png",
						paymentId: 3
					}, {
						label: "支付寶",
						image: "../img/alipay.png",
						paymentId: 4
					}]
				}
			]
		}, {
			label:"杜拜",
			regionId: 11,
			options:[
				{
					label: "海外運送",
					image: '../img/oversea.jpg',
					shipmentId: 13,
					fee: 1100,
					payments:[{
						label: "信用卡付款",
						image: "../img/visa.png",
						paymentId: 1
					}, {
						label: "PayPal",
						image: "../img/paypal.png",
						paymentId: 3
					}, {
						label: "支付寶",
						image: "../img/alipay.png",
						paymentId: 4
					}]
				}
			]
		}, {
			label:"加拿大",
			regionId: 12,
			options:[
				{
					label: "海外運送",
					image: '../img/oversea.jpg',
					shipmentId: 14,
					fee: 1200,
					payments:[{
						label: "信用卡付款",
						image: "../img/visa.png",
						paymentId: 1
					}, {
						label: "PayPal",
						image: "../img/paypal.png",
						paymentId: 3
					}, {
						label: "支付寶",
						image: "../img/alipay.png",
						paymentId: 4
					}]
				}
			]
		}, {
			label:"澳洲",
			regionId: 13,
			options:[
				{
					label: "海外運送",
					image: '../img/oversea.jpg',
					shipmentId: 15,
					fee: 1300,
					payments:[{
						label: "信用卡付款",
						image: "../img/visa.png",
						paymentId: 1
					}, {
						label: "PayPal",
						image: "../img/paypal.png",
						paymentId: 3
					}, {
						label: "支付寶",
						image: "../img/alipay.png",
						paymentId: 4
					}]
				}
			]
		}
	];

	var container = $('#container'), page = {path: 'cart1'};
	container.on('page:update:cart1' , function(page, menu){

	    $('[data-toggle="tooltip"]').each(function(){
	    	$(this).attr('title', $(this).html());
		}).tooltip(); 


		// for(var i = 1; i<=20; i++){
		// 	var option = document.createElement('option');
		// 	$(option).attr('value', i).attr('data-qty', i).html(i);
		// 	$('.qty').append(option);
		// }

		$(shipments).each(function(index, element){
			var option = document.createElement('option');
			$(option)
				.attr('value', index)
				.attr('data-region-id', element.regionId)
				.attr('data-free-ship', element.freeShip)
				.html(element.label);
				$('[name=region]').append(option);
		});

		console.log('region rendered');

		$('[name=region]').selectpicker();

		$('[name=region]').on('change', function(){
			var regionId = Number( $('option:selected', this).attr('data-region-id') );
			var region = _(shipments)
			.find({'regionId': regionId});
			// console.log(region)
			$('[name=shipment] option').remove();
			_(region.options).each(function(element, index){
				var option = document.createElement('option');
				$(option)
					.attr('value', index)
					.attr('data-shipment-id', element.shipmentId)
					.attr('data-shipment-fee', element.shipmentFee)
					.attr('data-content', element.label + ' <img src="'+element.image+'">')
					.html(element.label);
				$('[name=shipment]').append(option);
			});
			if($('[name=shipment] option').length == 1){
				$('[name=shipment]')
					.attr('readonly','readonly')
					.attr('disabled','disabled');
			}else{
				$('[name=shipment]')
					.removeAttr('readonly')
					.removeAttr('disabled');
			}
			$('[name=shipment]').selectpicker('destroy').selectpicker();
			$('[name=shipment]').trigger('change');
		}).trigger('change');

		$('[name=shipment]').on('change', function(){
			var regionId = Number( $('[name=region] option:selected').attr('data-region-id') );
			var shipmentId = Number( $('option:selected', this).attr('data-shipment-id') );
			var region = _(shipments)
			.find({
				'regionId': regionId
			});
			var shipment = _.find(region.options, {
				'shipmentId': shipmentId
			});
			$('[name=payment] option').remove();
			_(shipment.payments).each(function(element, index){
				var option = document.createElement('option');
				$(option)
					.attr('value', index)
					.attr('data-payment-id', element.paymentId)
					.attr('data-content', element.label + ' <img src="'+element.image+'">')
					.html(element.label);
				$('[name=payment]').append(option);
			});
			$('[name=payment]').selectpicker('destroy').selectpicker();
			$('.shipment-thumb').attr('src', shipment.image);
			$('.shipment-fee').html(shipment.fee);
		}).trigger('change');

		$('#btnBack').on('click', function(){
			history.go(-1);
		});

	}).trigger('page:update:cart1', null);


	function updateAmount(){
		var amount;
	}

};
