// JavaScript Document
$(window).load(function(){
  // will fade out the whole DIV that covers the website.
  jQuery(".preloader").fadeOut("slow");
});

jQuery(document).ready(function ($) {
  'use strict';

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $('.page-scroll').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });


  // collapsed menu close on click
  $(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
      $(this).collapse('hide');
    }
  });

  // add white background to nav with scrolling
  if ($(window).scrollTop() > 50) {
    $(".sticky-navigation").addClass("NavBg");
  }
  else {
    $(".sticky-navigation").removeClass("NavBg");
  }
  $(window).scroll(function(){
    if ($(window).scrollTop() > 50) {
      $(".sticky-navigation").addClass("NavBg");
      $('.navbar-brand').fadeIn();
    }
    else {
      $(".sticky-navigation").removeClass("NavBg");
      $('.navbar-brand').fadeOut();
    }
  });

  var devices = ['iphone6 silver',
    'iphone6 black',
    'iphone6 gold',
    'iphone5s silver',
    'iphone5s black',
    'iphone5s gold',
    'iphone5c white',
    'iphone5c red',
    'iphone5c yellow',
    'iphone5c green',
    'iphone5c blue',
    'nexus5',
    'lumia920 black',
    'lumia920 white',
    'lumia920 yellow',
    'lumia920 red',
    'lumia920 blue',
    's5 white',
    's5 black',
    'htc-one'
  ];
  $('.marvel-device').each(function(index, phone) {
    var skin = devices[~~(Math.random() * devices.length)];
    $(phone).addClass(skin);
  })
  // screenshots carousel 
  jQuery(function() {

    jQuery('#allinone_carousel_sweet').allinone_carousel({
      skin: 'sweet',
      width: 1140,
      height: 800,
      responsive:true,
      autoPlay: 5,
      resizeImages:true,
      autoHideBottomNav:false,
      //easing:'easeOutBounce',
      numberOfVisibleItems:5,
      elementsHorizontalSpacing:180,
      elementsVerticalSpacing:50,
      verticalAdjustment:0,
      animationTime:0.5,
      circleLeftPositionCorrection:50,
      circleTopPositionCorrection:20,
      circleLineWidth:1,
      circleColor:"#29282B",
      behindCircleColor:"#999999",
      nextPrevMarginTop:25,
      bottomNavMarginBottom:-50
    });
  });

  // input , text area placeholder on browsers
  $('input, textarea').placeholder();

}); // end Document.ready

/* wow animation put it after Document.ready  */
wow = new WOW({mobile: false});
wow.init();

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-79843176-1', 'auto');
ga('send', 'pageview');
