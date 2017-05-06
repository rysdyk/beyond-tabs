window.onscroll = function(){
  if ( window.pageYOffset > 106) {
    document.querySelector('.keys').classList.add('fixed');
  } else {
    document.querySelector('.keys').classList.remove('fixed');
  }
};
