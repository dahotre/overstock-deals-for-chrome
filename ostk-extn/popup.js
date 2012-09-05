jQuery(function($){
	$.getJSON("http://www.dahotre.com/deals.json",
	function(data) {
		$.each(data, function(key, val){
			if (key=='dodImage') {
				$("#dodImage").attr("src", val);
			}
			else if(key=="dodTitle") {
				$("#dodProductName").html(val);
			}
			else if(key=="dodSave") {
				$("#dodSave").html(val);
			}
			else if(key=="dodPrice") {
				$("#dodPrice").html(val);
			}
			else if (key=='buzzImage') {
				$("#buzzImage").attr("src", val);
			}
			else if(key=="buzzTitle") {
				$("#buzzProductName").html(val);
				$("#buzz-buy-image").attr("src", "http://ak2.ostkcdn.com/images/mxc/120711_buzz_buy_icon.png");
				$('.separator').append("<hr />");
			}
			else if(key=="buzzSave") {
				$("#buzzSave").html('Possible Extra Rewards: ' + val +'%');
			}
			else if(key=="buzzPrice") {
				$("#buzzPrice").html(val);
			}
		});
	});

	$('#preloader').remove();

	$("#search").keypress(function(e) {
		if(e.keyCode == 13) {
			chrome.tabs.create({'url':"http://www.overstock.com/search?keywords=" + $(this).val()});
		}
	});

});

chrome.browserAction.setBadgeText({text:String('')});
