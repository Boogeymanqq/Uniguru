"use strict";
const up = document.querySelector(".up");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 600) {
    up.style.opacity = 1;
  } else {
    up.style.opacity = 0;
  }
});
