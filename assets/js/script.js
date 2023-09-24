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
const tryAgainBtn = document.querySelector(".tryAgain-btn");
const homeBtn = document.querySelector(".home-btn");
const timeText = document.querySelector(".timer-text");
const timeCount = document.querySelector(".timer-sec");
const timeLine = document.querySelector(".time-line");
const soundIcon = document.getElementById("sound-icon");

const correctAudio = new Audio("assets/audio/correct.mp3");
const incorrectAudio = new Audio("assets/audio/incorrect.mp3");

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

  // Calls game functions
  displayQuestions(0);
  questionCounter(1);
  headerScore();
  startTimer(15);
  startTimerLine(0);
};

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;
let timeValue = 15;
let widthValue = 0;

// Increments question count & displays next question in array as long as
// there is one, if not display result box.
nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    displayQuestions(questionCount);

    questionNumb++;
    questionCounter(questionNumb);
    timeText.textContent = "Time Left";
    startTimer(timeValue);
    startTimerLine(widthValue);
    nextBtn.classList.remove("active");
  } else {
    displayResultBox();
  }
};

// Restarts quiz from beginning, resetting the score and question number.
tryAgainBtn.onclick = () => {
  resultBox.classList.remove("active");
  nextBtn.classList.remove("active");
  quizBox.classList.add("active");

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;

  // Calls game functions again.
  displayQuestions(questionCount);
  questionCounter(questionNumb);
  timeText.textContent = "Time Left";
  startTimer(timeValue);
  startTimerLine(widthValue);
  headerScore();
};

// Removes all active classes and resets game scores.
homeBtn.onclick = () => {
  quizSection.classList.remove("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;

  displayQuestions(questionCount);
  questionCounter(questionNumb);
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

  clearInterval(counter);
  timeText.textContent = "Time Off";
  clearInterval(counterLine);

  // Below code determines whether the userAnswer is correct and assigns
  // a class of either correct or incorrect depending on this.
  if (userAnswer == correctAnswer) {
    answer.classList.add("correct");
    userScore += 1;
    headerScore();
    correctAudio.play();
  } else {
    answer.classList.add("incorrect");
    incorrectAudio.play();

    // Below code executes if incorrect answer given. Loops over all options
    // and sets correct class to correct answer to highlight in green for
    // user to see.
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
  // Update user score in the quiz heading
  scoreSpan.textContent = `Score: ${userScore} / ${questions.length}`;
}

function displayResultBox() {
  quizBox.classList.remove("active");
  resultBox.classList.add("active");

  // Updates score-text with users total score.
  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `You Scored ${userScore} out of ${questions.length}`;

  const circularValue = document.querySelector(".circular-value");
  const progressValue = document.querySelector(".progress-value");

  // Value of -1, prevents progress bar from continuously spinning if
  // user scores 0.
  let progressStartValue = -1;
  // EndValue equates to percentage of questions the user answered correctly.
  let progressEndValue = (userScore / questions.length) * 100;
  // Speed at which progress bar moves.
  let speed = 20;

  // Interval starts increasing the startValue which fills up circular
  // progress bar using the conic-gradient background style.
  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    circularValue.style.background = `conic-gradient(#740001 ${
      progressStartValue * 3.6
    }deg, rgba(255, 255, 255, .1) 0deg)`;
    // When startValue == endValue, clear the interval ie Stop progress
    // bar spinning when at 100%.
    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}

function startTimer(time) {
  let correctAnswer = questions[questionCount].answer;
  let allOptions = optionList.children.length;

  // Timer that counts down in 1 second increments.
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;

    //  Clear timer and update text when timer reaches zero.
    if (time < 0) {
      clearInterval(counter);
      timeText.textContent = "Time Off";

      // If timer reaches 0, assign 'correct' class to correct answer &
      // disable all options.
      for (let i = 0; i < allOptions; i++) {
        if (optionList.children[i].textContent == correctAnswer) {
          optionList.children[i].setAttribute("class", "option correct");
        }
        optionList.children[i].classList.add("disabled");
      }
      nextBtn.classList.add("active");
    }
  }
}

function startTimerLine(time) {
  // Speed timeline progresses set to 37.
  counterLine = setInterval(timer, 37);
  function timer() {
    time += 1;
    // As time progresses, so too does px width.
    timeLine.style.width = time + "px";
    // Chnage color to red when px width > 350
    if (time > 350) {
      timeLine.style.background = "#ae0001";
    }
    // Clear interval when width is entire length of results box ie 436px.
    if (time > 436) {
      clearInterval(counterLine);
    }
  }
  // Change color back to green in prep for next question.
  timeLine.style.background = "#00a63d";
}

function muteSound() {
  if (correctAudio.muted == false) {
    correctAudio.muted = true;
    incorrectAudio.muted = true;
    soundIcon.classList.remove("fa-volume-high");
    soundIcon.classList.add("fa-volume-xmark");
  } else {
    correctAudio.muted = false;
    incorrectAudio.muted = false;
    soundIcon.classList.remove("fa-volume-xmark");
    soundIcon.classList.add("fa-volume-high");
  }
}

// Media query to ensure timeline functions correctly on mobile devices.
const mediaQuery = window.matchMedia("(max-width: 440px)");
if (mediaQuery.matches) {
  function startTimerLine(time) {
    counterLine = setInterval(timer, 56);
    function timer() {
      time += 1;
      timeLine.style.width = time + "px";
      if (time > 230) {
        timeLine.style.background = "#ae0001";
      }
      if (time > 288) {
        clearInterval(counterLine);
      }
    }
    timeLine.style.background = "#00a63d";
  }
}
