const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const enterBtn = document.querySelector(".enter-btn");
const homePopup = document.querySelector(".home-popup");
const main = document.querySelector(".main");
const exitBtn = document.querySelector(".exit-btn");

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

document.querySelectorAll(".nav-link").forEach((e) => {
  e.addEventListener("click", closeMenu);
});
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

enterBtn.onclick = () => {
  homePopup.classList.add("active");
  main.classList.add("active");
};

exitBtn.onclick = () => {
  homePopup.classList.remove("active");
  main.classList.remove("active");
};
