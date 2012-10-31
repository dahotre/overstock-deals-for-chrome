$(document).ready(function(){

  $.get("http://www.overstock.com/deal-of-the-day", function(data) {
    var dodContainer = $(data).find('#deal-of-the-day');
    if (dodContainer.length > 0) {
      var dodTitle = $(dodContainer).find('h1').text();
      var dodImgSrc = $(dodContainer).find('.prod-image img').attr('src');
      var dodSave = $(dodContainer).find('.prod-compare').text();
      var dodPrice = $(dodContainer).find('.prod-holder h2>span').first().text();
      $("#dodProductName").html(dodTitle);
      $("#dodImage").attr("src", dodImgSrc);
      $("#dodSave").html(dodSave);
      $("#dodPrice").html(dodPrice);
      if (dodTitle.length > 0) {
        $('#dodLogo').css('display', 'block');
      }
    }
    else {
      $('#noDod').css('display', 'block');
    }
  });

  $("#search").keypress(function(e) {
    if(e.keyCode == 13) {
      chrome.tabs.create({'url':"http://www.overstock.com/search?keywords=" + $(this).val()});
    }
  });

  $.get("http://www.overstock.com/club-o-exclusives", function(data) {
    var coContainer = $(data).find('#club-o-deals-tabbed');

    var tab = $(coContainer).find('#tab0 ul.product-layout li.product').first();
    if (tab.length > 0) {
      var coImg = $(tab).find('.pro-thumb img').attr('src');
      var coTitle = $(tab).find('.pro-name').text();
      var coPrice = $(tab).find('.price strong').text();
      var coBack = $(tab).find('.rewards strong').text();
      var coSrc = $(tab).find('.pro-name a').attr('href');
      $('#coImg0').attr('src', coImg);
      $('#coTitle0').html(coTitle);
      $('#coPrice0').html(coPrice);
      $('#coBack0').html('Earn ' + coBack);
      $('.coSrc0').attr('href', coSrc);

      var tab = $(coContainer).find('#tab1 ul.product-layout li.product').first();
      var coImg = $(tab).find('.pro-thumb img').attr('src');
      var coTitle = $(tab).find('.pro-name').text();
      var coPrice = $(tab).find('.price strong').text();
      var coBack = $(tab).find('.rewards strong').text();
      var coSrc = $(tab).find('.pro-name a').attr('href');
      $('#coImg1').attr('src', coImg);
      $('#coTitle1').html(coTitle);
      $('#coPrice1').html(coPrice);
      $('#coBack1').html('Earn ' + coBack);
      $('.coSrc1').attr('href', coSrc);

      var tab = $(coContainer).find('#tab2 ul.product-layout li.product').first();
      var coImg = $(tab).find('.pro-thumb img').attr('src');
      var coTitle = $(tab).find('.pro-name').text();
      var coPrice = $(tab).find('.price strong').text();
      var coBack = $(tab).find('.rewards strong').text();
      var coSrc = $(tab).find('.pro-name a').attr('href');
      $('#coImg2').attr('src', coImg);
      $('#coTitle2').html(coTitle);
      $('#coPrice2').html(coPrice);
      $('#coBack2').html('Earn ' + coBack);
      $('.coSrc2').attr('href', coSrc);
    }
    else {
      $('#clubORow').css('display', 'none');
      $('#noClubORow').css('display', 'block');
    }

  });

});

chrome.browserAction.setBadgeText({text:String('')});
