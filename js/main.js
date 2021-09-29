
// scrollbar
function scrollProgress() {
  var currentState = document.body.scrollTop || document.documentElement.scrollTop;
  var pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrollStatePercentage = (currentState / pageHeight) * 100;
  document.querySelector(".page-scroll-indicator > .progress").style.width = scrollStatePercentage + "%";
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
window.onscroll = function () { scrollProgress() };

var invert = function(doInvert){
  if(doInvert) {
    $('body').addClass('invert')
    $('#dark-mode').text('â€” On')
    $('.animsition-link').each(function(element){
      var link = $(this).attr('href');
      var pos = link.indexOf("#");
      if(pos > 0) {
        link = link.slice(0,pos) + "?i=invert" + link.slice(pos);
      }
      else {
        link += "?i=invert";
      }
      console.log(link,pos)
      $(this).attr('href',link);
    });
    }
  else{
    $('body').removeClass('invert')
    $('#dark-mode').text('â€” Off')
    $('.animsition-link').each(function(element){
      $(this).attr('href',$(this).attr('href').replace('?i=invert',''));
    });
  }
  console.log($('.animsition-link').attr('href'));
}

// AOS
AOS.init({
  duration: 1000,
})

jQuery(document).ready(function($){
  'use strict';

if(getUrlParameter('i') == 'invert') invert(true);

 $('#dark-mode').on('click',function(){
   if($('body').hasClass('invert')){
     invert(false)
   }
   else {
     invert(true)
   }
 })
  // Animsition
  $(".animsition").animsition();

  // Scrollax
  $.Scrollax();

  // First Smooth scroll
  var $root = $('html, body');

  $('a.js-smoothscrolllanding[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 40
    }, 1000);

    return false;
  });

  // Smooth scroll
  var $root = $('html, body');

  $('a.js-smoothscroll[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 40
    }, 500);

    return false;
  });

  // Owl
  $('.wide-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: false,
    items: 1,
    autoheight: true,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
  });

  // Show menu
  if ($(window).width() > 768 ) {
    $('body').removeClass('menu-open');
    $('.js-templateux-menu').css('display', 'block');
  }
  // Window Resize
  $(window).resize(function(){
    var $this = $(this);
    $('.js-templateux-menu li').removeClass('staggard');
    $('.js-toggle-menu').removeClass('is-active');
    if ($this.width() > 768 ) {
      $('body').removeClass('menu-open');
      $('.js-templateux-menu').css('display', 'block');

    } else {
      if ($this.width() < 768 ) {
        $('.js-templateux-menu').css('display', 'none');
      }
    }
  });

  // Hamburger Button
  $('.js-toggle-menu').on('click', function(e){
  	e.preventDefault();

    var $this = $(this);

    if ($('body').hasClass('menu-open')) {
      $this.removeClass('is-active');
      $('body').removeClass('menu-open');
      $('.js-templateux-menu li').removeClass('staggard');
    } else {
      $this.addClass('is-active');
      $('body').addClass('menu-open');

      $('.js-templateux-menu li').each(function(k){
        var $this = $(this);
        setTimeout(function(){
          $this.addClass('staggard');
        }, 100 * k );
      });

    }

  	if ( $('.templateux-menu').is(':visible') ) {
  		$('.js-templateux-menu').fadeOut(300);
  	} else {
  		$('.js-templateux-menu').fadeIn(300);
  	}
  })
});