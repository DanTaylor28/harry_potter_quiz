const enterBtn = document.querySelector(".enter-btn");
const homePopup = document.querySelector(".home-popup");
const main = document.querySelector(".main");
const exitBtn = document.querySelector(".exit-btn");

enterBtn.onclick = () => {
  homePopup.classList.add("active");
  main.classList.add("active");
};

exitBtn.onclick = () => {
  homePopup.classList.remove("active");
  main.classList.remove("active");
};
