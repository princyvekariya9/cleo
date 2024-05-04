$(document).ready(function(){

  // scrolling
        
  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

  });

   // loader start
    setTimeout(function(){
      $('.preloader').fadeOut();
    },3000);
  // loader end

    AOS.init();
  });

  // top to bottom scrol button
  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


