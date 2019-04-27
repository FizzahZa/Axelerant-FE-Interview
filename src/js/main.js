$(document).ready(function() {
  jQuery('.slider').slick({
    infinite: false,
    dots: true,
    arrows: false,
    speed: 300,
    mobileFirst: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.cross').hide();
  $('.hamburger').click(function() {
    $('.header_navbar').slideToggle('slow', function() {
      $('.hamburger').hide();
      $('.cross').show();
    });
  });

  $('.cross').click(function() {
    $('.header_navbar').slideToggle('slow', function() {
      $('.cross').hide();
      $('.hamburger').show();
    });
  });
});
