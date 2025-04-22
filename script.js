const flashcards = [
  { term: "HTML", definition: "HyperText Markup Language" },
  { term: "CSS", definition: "Cascading Style Sheets" },
  { term: "JS", definition: "JavaScript" }
];

let currentIndex = 0;

const card = document.getElementById("flashcard");
const front = card.querySelector(".front");
const back = card.querySelector(".back");

function showCard(index) {
  front.textContent = flashcards[index].term;
  back.textContent = flashcards[index].definition;
  card.classList.remove("flipped");
}

function flipCard() {
  card.classList.toggle("flipped");
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  showCard(currentIndex);
}

function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  showCard(currentIndex);
}

// Показ первой карточки при загрузке
showCard(currentIndex);