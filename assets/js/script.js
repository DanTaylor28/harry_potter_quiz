const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const enterBtn = document.querySelector(".enter-btn");
const homePopup = document.querySelector(".home-popup");
const main = document.querySelector(".main");
const exitBtn = document.querySelector(".exit-btn");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");

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

continueBtn.onclick = () => {
  quizSection.classList.add("active");
  homePopup.classList.remove("active");
  main.classList.remove("active");
};
