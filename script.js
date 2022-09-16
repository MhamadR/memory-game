const cards = document.querySelectorAll(".card");
const result = document.getElementById("game-score");

let score = 0;
let hasFlippedCard = false;
let firstCard, secondCard;

cards.forEach((card) => card.addEventListener("click", flipCard));

function flipCard() {
  console.log(this);
  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlippedCard = false;
  checkForMatch();
}

function hideCards() {
  firstCard.classList.add("hide");
  secondCard.classList.add("hide");
}
