const bookBtn = document.getElementById("show");
const teachBtn = document.getElementById("hide");

const show = document.querySelector(".formBook");
const hide = document.querySelector(".formTeach");

teachBtn.addEventListener("click", function () {
  hide.style.display = "block";
  show.style.display = "none";

  teachBtn.classList.add("active");
  bookBtn.classList.remove("active");
});

bookBtn.addEventListener("click", function () {
  hide.style.display = "none";
  show.style.display = "block";
  teachBtn.classList.remove("active");
  bookBtn.classList.add("active");
});
