"use strict";

const $header = document.querySelector(".js-header-sticky");
const $sticky = $header.offsetTop;
const $headerLogo = document.querySelector(".js-header-logo");
const $navigationItems = document.querySelectorAll(".js-desk-items");

window.addEventListener("scroll", function () {
  if (window.scrollY > $sticky) {
    $header.classList.add("sticky");
    if (window.scrollY >= 700) {
      $headerLogo.style.opacity = 1;
      $headerLogo.style.transition = "0.2s linear";
    }
  } else {
    $header.classList.remove("sticky");
    $headerLogo.style.opacity = 0;
  }
  if (window.scrollY < 700) {
    $headerLogo.style.opacity = 0;
    $headerLogo.style.transition = "0.2s linear";
  }
});

function toggleUnderline() {
  $navigationItems.forEach((e) => {
    e.style.borderBottom = "1px solid #fff";
  });
}

$headerLogo.addEventListener("click", () => {
  window.scroll(0, 0);
  toggleUnderline();
});

$navigationItems.forEach((elem) => {
  elem.addEventListener("click", () => {
    toggleUnderline();
    elem.style.borderBottom = 0;
  });
});
