"use strict";

const $header = document.querySelector(".js-header-sticky");
const $sticky = $header.offsetTop;
const $headerLogo = document.querySelector(".js-header-logo");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > $sticky) {
    $header.classList.add("sticky");
    $headerLogo.style.opacity = 1;
  } else {
    $header.classList.remove("sticky");
    $headerLogo.style.opacity = 0;
  }
});
