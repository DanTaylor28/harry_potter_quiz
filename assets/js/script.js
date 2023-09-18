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
const optionList = document.querySelector(".option-list");
const resultBox = document.querySelector(".result-box");

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
  questionCounter(1);
  headerScore();
};

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    displayQuestions(questionCount);

    questionNumb++;
    questionCounter(questionNumb);
    nextBtn.classList.remove("active");
  } else {
    displayResultBox();
  }
};

// Retrieves the questions & options from the array.
function displayQuestions(index) {
  const questionText = document.querySelector(".question-text");
  // Inserts correct question index & text into the below variable.
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  let optionTags = `<div class="option"><span>${questions[index].options[0]}</span></div>
  <div class="option"><span>${questions[index].options[1]}</span></div>
  <div class="option"><span>${questions[index].options[2]}</span></div>
  <div class="option"><span>${questions[index].options[3]}</span></div>`;

  // Sets value of optionList to above html with correct user choices.
  optionList.innerHTML = optionTags;

  // Loops over optionList and assigns an onclick which calls optionClicked(this)
  // to each option in optionList.
  const option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionClicked(this)");
  }
}

function optionClicked(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  let allOptions = optionList.children.length;

  // Below code determines whether the userAnswer is correct and assigns
  // a class of either correct or incorrect depending on this.
  if (userAnswer == correctAnswer) {
    answer.classList.add("correct");
    userScore += 1;
    headerScore();
  } else {
    answer.classList.add("incorrect");

    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent == correctAnswer) {
        optionList.children[i].setAttribute("class", "option correct");
      }
    }
  }

  // Below for loop assigns the disabled class to all options after the user
  // has made a selection, which then prevents any future pointer events on
  // them therefore disabling them.
  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
  }

  nextBtn.classList.add("active");
}

function questionCounter(index) {
  // Retrieves necessary class.
  const questionTotal = document.querySelector(".question-total");
  // Sets questionTotal to the corresponding question number.
  questionTotal.textContent = `Question ${index} of ${questions.length}`;
}

function headerScore() {
  // Retrieve necessary class
  const scoreSpan = document.querySelector(".header-score");
  //   Update user score in the quiz heading
  scoreSpan.textContent = `Score: ${userScore} / ${questions.length}`;
}

function displayResultBox() {
  quizBox.classList.remove("active");
  resultBox.classList.add("active");

  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `You Scored ${userScore} out of ${questions.length}`;

  const circularValue = document.querySelector(".circular-value");
  const progressValue = document.querySelector(".progress-value");

  let progressStartValue = -1;
  let progressEndValue = (userScore / questions.length) * 100;
  let speed = 20;

  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    circularValue.style.background = `conic-gradient(#740001 ${
      progressStartValue * 3.6
    }deg, rgba(255, 255, 255, .1) 0deg)`;
    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
