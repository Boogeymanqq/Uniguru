$(document).ready(function () {
  $(".profiles__slider").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 577,
        settings: {
          focusOnSelect: false,
          slidesToShow: 1,
          arrows: true,
          dots: false,
          autoplay: false,
          prevArrow: '<div class="slider-arrow slider-arrow_left"></div>',
          nextArrow: '<div class="slider-arrow slider-arrow_right"></div>',
        },
      },
    ],
  });
});
