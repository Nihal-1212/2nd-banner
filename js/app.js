$(function () {
  //---*** loader - S ***---/
  $(window).on('load', function () {
    $('#preloader').hide(2000);
  })
  //---*** loader - E ***---/
  //---*** banner - S ***---/
  $('.slide_banner').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1500,
    dots: true,
    dotsClass:'slider_dots'
  });
  //---*** banner - E ***---/
  //---*** new product - S ***---/
  $('.product_slider').slick({
    slidesToShow:4,
    prevArrow:'<i class="fa-solid fa-chevron-left slide_icon"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right slide_icon"></i>',
  })
  //---*** new product - E ***---/
})