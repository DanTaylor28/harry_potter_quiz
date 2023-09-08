const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const enterBtn = document.querySelector(".enter-btn");
const homePopup = document.querySelector(".home-popup");
const main = document.querySelector(".main");
const exitBtn = document.querySelector(".exit-btn");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const nextBtn = document.querySelector(".next-btn");

// EventListener to check for when hamburger icon is clicked & call
// mobileMenu function
hamburger.addEventListener("click", mobileMenu);
// Function to toggle the navMenu when hamburger is clicked.
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// EventListener listening out for a click on any of the navLinks and
// calls closeMenu function when click occurs
document.querySelectorAll(".nav-link").forEach((e) => {
  e.addEventListener("click", closeMenu);
});
// Closes the hamburger menu
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Assigns active class to homePopup & main classes to reveal the popup &
// blur contents of the main class.
enterBtn.onclick = () => {
  homePopup.classList.add("active");
  main.classList.add("active");
};

// Removes active class from homePopup & main to hide popup & remove
// blur.
exitBtn.onclick = () => {
  homePopup.classList.remove("active");
  main.classList.remove("active");
};

// Adds active class to show quiz section and remove the home popup & blur
continueBtn.onclick = () => {
  quizSection.classList.add("active");
  homePopup.classList.remove("active");
  main.classList.remove("active");
  quizBox.classList.add("active");

  displayQuestions(0);
};

let questionCount = 0;

nextBtn.onclick = () => {
  questionCount++;
  displayQuestions(questionCount);
};

function displayQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;
}
