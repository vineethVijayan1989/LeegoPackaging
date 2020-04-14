$(document).ready(function() {
  var bHeight, bWidth, block, bname, closeBtn, closeContent, content, expand, openContent, updateValues, wHeight, wWidth, xVal, yVal;

  block = $('.blocks__block');

  bname = $('.blocks__name');

  content = $('.blocks-content__content');

  closeBtn = $('.blocks__content-close');

  wHeight = $(window).outerHeight();

  wWidth = $(window).outerWidth();

  bHeight = block.outerHeight();

  bWidth = block.outerWidth();

  xVal = Math.round(wWidth / bWidth) + 0.03;

  yVal = wHeight / bHeight + 0.03;

  openContent = function(num) {
    var aContent;
    content.css({
      'transition': 'all 0.3s 0.4s ease-out',
      '-webkit-transition': 'all 0.3s 0.4s ease-out'
    });
    aContent = content.eq(num);
    aContent.addClass('active');
  };

  closeContent = function() {
    bname.css('opacity', '1');
    content.css({
      'transition': 'all 0.1s 0 ease-out',
      '-webkit-transition': 'all 0.1s 0 ease-out'
    });
    block.css({
      'transform': 'scale(1)',
      '-webkit-transform': 'scale(1)'
    });
    block.removeClass('active');
    content.removeClass('active');
  };

  updateValues = function() {
    var yVal;
    var xVal;
    var bWidth;
    var bHeight;
    var wWidth;
    var wHeight;
    var aBlock;
    if (block.hasClass('active')) {
      aBlock = $('.blocks__block.active');
      wHeight = $(window).height();
      wWidth = $(window).width();
      bHeight = block.height();
      bWidth = block.width();
      xVal = Math.round(wWidth / bWidth) + 0.03;
      yVal = wHeight / bHeight + 0.03;
      aBlock.css({
        'transform': 'scale(' + xVal + ',' + yVal + ')',
        '-webkit-transform': 'scale(' + xVal + ',' + yVal + ')'
      });
    }
  };

  $(window).on('resize', updateValues);

  $('.blocks__name').click (function(){
   var aBlock, num;
    num = $(this).index();
    aBlock = block.eq(num);
    if (!aBlock.hasClass('active')) {
      bname.css('opacity', '0');
      aBlock.css({
        'transform': 'scale(' + xVal + ',' + yVal + ')',
        '-webkit-transform': 'scale(' + xVal + ',' + yVal + ')'
      });
      aBlock.addClass('active');
      openContent(num);
    }
  });


console.log(mymap);
closeBtn.on('click', closeContent);  
var mymap = L.map('mapid').setView([11.127123, 78.656894], 6.5);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidmluZWV0aHZpaiIsImEiOiJjazh6a2lvOWsxanB3M25va29tZmw3cmhwIn0.bhmQRTlPKObI0FgV29YZFQ'
}).addTo(mymap);

var marker = L.marker([11.677788, 78.134351]).addTo(mymap);
marker.bindPopup("<b>Grand Aqua</b>").openPopup();
var marker2 = L.marker([12.136402, 78.162555]).addTo(mymap);
marker2.bindPopup("<b>Sri Aqua packers</b>").openPopup();
var marker3 = L.marker([11.013475, 77.011653]).addTo(mymap);
marker3.bindPopup("<b>Udayam packers</b>").openPopup();  
 
});