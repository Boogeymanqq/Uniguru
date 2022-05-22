"use strict";

const $showIcon = document.querySelector(".js-burger");
const $hideIcon = document.querySelector(".js-mobile-close");
const $mobileNav = document.querySelector(".js-mobile");
const $itemNav = document.querySelectorAll(".js-items");

console.log($itemNav);

function showNavigation() {
  document.body.style.overflow = "hidden";
  $mobileNav.style.transform = "translateX(0)";
}

function hideNavigation() {
  setTimeout(() => {
    document.body.style.overflow = "";
    $mobileNav.style.transform = "translateX(100%)";
  }, 350);
}

$showIcon.addEventListener("click", showNavigation);
$hideIcon.addEventListener("click", hideNavigation);

$itemNav.forEach((elem) => {
  elem.addEventListener("click", hideNavigation);
});
