/* This is a neat little effect that fades the website in from white when it is loaded. This will work in unison with an 
animation effect if you have one. It also means the user won't see the pictures load which is nice. */

$(window).load(function () {
  $('.preloader').delay(400).fadeOut('slow');
})