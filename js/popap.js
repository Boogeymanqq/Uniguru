"use strict";

const popapOpen = document.querySelector(".popap-link");
const popapClose = document.querySelector(".popap__close");
const popap = document.querySelector("#popap");
const popapBlock = document.querySelector(".popap__block");

popapOpen.addEventListener("click", open);

function open(e) {
  e.preventDefault();
  popap.removeAttribute("hidden");
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", escHandle);
}

popapClose.addEventListener("click", close);

function close() {
  popap.setAttribute("hidden", "");
  document.body.style.overflow = "";
  document.removeEventListener("keydown", escHandle);
}

popapBlock.addEventListener("click", (e) => e.stopPropagation());

function escHandle(e) {
  if (e.key === "Escape") close();
}
