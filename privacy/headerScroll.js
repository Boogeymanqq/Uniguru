"use strict";

const $header = document.querySelector(".js-header-sticky");
const $sticky = $header.offsetTop;
const $headerLogo = document.querySelector(".js-header-logo");
const $navigationItems = document.querySelectorAll(".js-desk-items");

window.addEventListener("scroll", function () {
  if (window.scrollY > $sticky) {
    $header.classList.add("sticky");
  } else {
    $header.classList.remove("sticky");
  }
});
