const cardTitle = document.querySelectorAll(".disciplines__card-title");
const cards = document.querySelectorAll(".disciplines__card");
const cardList = document.querySelectorAll(".disciplines__list");
const textBlock = document.querySelectorAll(".disciplines__text");
const button = document.querySelectorAll(".disciplines-btn");

for (let i = 0; i <= cardTitle.length - 1; i++) {
  cardTitle[i].addEventListener("click", function (e) {
    cardTitle[i].classList.toggle("js-disciplines__card-title");
    for (let i = 0; i <= cards.length - 1; i++) {
      const card = cards[i];

      if (e.target === cardTitle[i]) {
        console.log(e.target);
        card.classList.toggle("js-disciplines-card");
      }
    }
    for (let i = 0; i <= cardList.length; i++) {
      const list = cardList[i];

      if (e.target === cardTitle[i]) {
        list.classList.toggle("js-disciplines-list");
      }
    }
    for (let i = 0; i <= textBlock.length; i++) {
      const text = textBlock[i];
      if (e.target === cardTitle[i]) {
        text.classList.toggle("js-disciplines-text");
      }
    }
    for (let i = 0; i <= button.length; i++) {
      const btn = button[i];
      if (e.target === cardTitle[i]) {
        btn.classList.toggle("js-btn");
      }
    }
  });
}
