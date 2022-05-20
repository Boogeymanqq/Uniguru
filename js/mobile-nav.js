"use strict";

const $showIcon = document.querySelector(".js-burger");
const $hideIcon = document.querySelector(".js-mobile-close");
const $mobileNav = document.querySelector(".js-mobile");
const $itemNav = Array.from(document.querySelectorAll(".js-items"));

function showNavigation() {
  document.body.style.overflow = "hidden";
  $mobileNav.style.transform = "translateX(0)";
}

function hideNavigation() {
  document.body.style.overflow = "";
  $mobileNav.style.transform = "translateX(100%)";
}

$showIcon.addEventListener("click", showNavigation);
$hideIcon.addEventListener("click", hideNavigation);

$itemNav.forEach((elem) => {
  elem.addEventListener("click", function () {
    document.body.style.overflow = "";
    $mobileNav.style.transform = "translateX(100%)";
  });
  // return elem.removeEventListener("click", function () {
  //   document.body.style.overflow = "";
  //   $mobileNav.style.transform = "translateX(100%)";
  // });
});
