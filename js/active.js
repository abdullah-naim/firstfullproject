$(document).ready(function(){



    $('#mobile-menu-active').meanmenu({
      meanScreenWidth:'991',
      meanMenuContainer:'.mobile-menu',
    });
  
    
$('.slider-active').slick({
    infinite: true,
    slidesToShow: 1,
    dots:false,
    autoplay: true,
    arrows:false,
    dots:false,
    slidesToScroll: 1

  });
  $('.testimonial-active').slick({
    infinite: true,
    slidesToShow: 1,
    dots:true,
    autoplay: true,
    arrows:false,
    slidesToScroll: 1

  });
  $('.product-active').slick({
    infinite: true,
    slidesToShow: 5,
    dots:false,
    autoplay: true,
    arrows:false,
    slidesToScroll: 1

  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

});