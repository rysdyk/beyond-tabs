$(window).scroll(function(){
  if ( $(window).scrollTop() > 106) {
    $('.keys').addClass('fixed');
  } else {
    $('.keys').removeClass('fixed');
  }
});
