$(document).ready(function () {
  $(".portfolio__slider").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 376,
        settings: {
          focusOnSelect: false,
          slidesToShow: 1,
          arrows: true,
          dots: false,
          prevArrow: '<div class="slider-arrow slider-arrow_left"></div>',
          nextArrow: '<div class="slider-arrow slider-arrow_right"></div>',
        },
      },
    ],
  });
});
