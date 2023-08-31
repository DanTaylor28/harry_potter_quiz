const enterBtn = document.querySelector(".enter-btn");
const homePopup = document.querySelector(".home-popup");
const main = document.querySelector(".main");

enterBtn.onclick = () => {
  homePopup.classList.add("active");
  main.classList.add("active");
};
