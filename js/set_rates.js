$(document).ready(function() {

var apiPath1 = "http://api.fixer.io/latest?base=";
var apiPath2 = "https://api.coindesk.com/v1/bpi/currentprice/USD.json";
var apiPath3 = "https://api.coindesk.com/v1/bpi/currentprice.json";

var lastRatesArray = [0,0,0,0,0,0,0,0];

  function set_rates(element_id, apiPath, base, quote){

	switch(element_id) {
		// Rates API for RUB
	    case "#EURRUB":
	        var api = apiPath + base;

		  	$.getJSON(api).then(function(json){
					var currencyData = json;
					var newRates = currencyData.rates[quote];
					$(element_id).text(newRates);

					if(newRates > lastRatesArray[0]){
						$(element_id).css('color', '#09b83e');
						// console.log("* " + newRates);
					}
					else if(newRates < lastRatesArray[0]){
						$(element_id).css('color', '#cd201f');
						// console.log("* " + newRates);
					}
					lastRatesArray[0] = newRates;
			});	      
	        break;
		// Rates API for RUB
	    case "#USDRUB":
	        var api = apiPath + base;

		  	$.getJSON(api).then(function(json){
					var currencyData = json;
					var newRates = currencyData.rates[quote];
					$(element_id).text(newRates);

					if(newRates > lastRatesArray[1]){
						$(element_id).css('color', '#09b83e');
						// console.log("* " + newRates);
					}
					else if(newRates < lastRatesArray[1]){
						$(element_id).css('color', '#cd201f');
						// console.log("* " + newRates);
					}
					lastRatesArray[1] = newRates;
			});	        
	        break;
		// Rates API for BTC
	    case "#BTCUSD":
	    	var api = apiPath;

	        $.getJSON(api).then(function(json){
	        		
					var currencyData = json;
					var newRates = (currencyData.bpi.USD.rate_float);
					$(element_id).text(newRates);

					if(newRates > lastRatesArray[2]){
						$(element_id).css('color', '#09b83e');
						// console.log("* " + newRates);
					}
					else if(newRates < lastRatesArray[2]){
						$(element_id).css('color', '#cd201f');
						// console.log("* " + newRates);
					}
					lastRatesArray[2] = newRates;
			});	  
	        break;
		// Rates API for EUR/USD
	    case "#EURUSD":
	    	var api = apiPath;

	        $.getJSON(api).then(function(json){
	        		
					var currencyData = json;
					var newRates = ((currencyData.bpi.USD.rate_float)/(currencyData.bpi.EUR.rate_float)).toFixed(5);
					$(element_id).text(newRates);

					if(newRates > lastRatesArray[3]){
						$(element_id).css('color', '#09b83e');
						// console.log("* " + newRates);
					}
					else if(newRates < lastRatesArray[3]){
						$(element_id).css('color', '#cd201f');
						// console.log("* " + newRates);
					}
					lastRatesArray[3] = newRates;
			});	  
	        break;
		// 	// // Rates API for EUR/JPY
		//  //    case "#EURJPY" & apiPath:
		//  //        $.getJSON(apiPath).then(function(json){
		        		
		// 	// 			var currencyData = json;
		// 	// 			// var lastRates;
		// 	// 			var newRates = (currencyData.value);
		// 	// 			$(element_id).text(newRates);

		// 	// 			if(newRates >= lastRates){
		// 	// 				$(element_id).css('color', '#09b83e');
		// 	// 				// console.log("* " + newRates);
		// 	// 			}
		// 	// 			else if(newRates < lastRates){
		// 	// 				$(element_id).css('color', '#cd201f');
		// 	// 				// console.log("* " + newRates);
		// 	// 			}
		// 	// 			lastRates = newRates;
		// 	// 	});	  
		//  //        break;
        		// Rates API for EUR/GBP
			    case "#EURGBP":
		    	var api = apiPath;

		        $.getJSON(api).then(function(json){
		        		
						var currencyData = json;
						var newRates = ((currencyData.bpi.GBP.rate_float)/(currencyData.bpi.EUR.rate_float)).toFixed(5);
						// var lastRates;
						$(element_id).text(newRates);

						if(newRates >= lastRatesArray[4]){
							$(element_id).css('color', '#09b83e');
							// console.log("* " + newRates);
						}
						else if(newRates < lastRatesArray[4]){
							$(element_id).css('color', '#cd201f');
							// console.log("* " + newRates);
						}
						lastRatesArray[4] = newRates;
				});	  
		        break;


	    default:
	        console.log("Something goes wrong in switch statement /set_rates.js");
	}
  }

	set_rates("#EURRUB",apiPath1,"EUR","RUB");
	set_rates("#USDRUB",apiPath1,"USD","RUB");
	set_rates("#BTCUSD",apiPath2);
	set_rates("#EURUSD",apiPath3);
	// set_rates("#EURJPY",apiPath);
	set_rates("#EURGBP",apiPath3);

	setInterval(function(){
		set_rates("#EURRUB",apiPath1,"EUR","RUB");
		set_rates("#USDRUB",apiPath1,"USD","RUB");
		set_rates("#BTCUSD",apiPath2);
		set_rates("#EURUSD",apiPath3);
		// set_rates("#EURJPY",apiPath);
		set_rates("#EURGBP",apiPath3);
	}, 6000);

	// Open - close form
  $( "#Add" ).click(function() {
  	$("#form").css("display", "block");
  });
    $( "#cancel" ).click(function() {
  	$("#form").css("display", "none");
  });

});