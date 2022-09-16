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

function checkForMatch() {
  let isMatch = firstCard.dataset.language === secondCard.dataset.language;
  isMatch ? hideCards() : unflipCards();
  isMatch
    ? (result.innerText = ` Score: ${++score}`)
    : (result.innerText = `Score = ${--score}`);
}

function hideCards() {
  firstCard.classList.add("hide");
  secondCard.classList.add("hide");
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  }, 500);
}
