'use strict';
let score = 5;
let highestScore = 0;
let ramdomNum = Math.floor(Math.random() * 20 + 1);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const Userscores = function (userScore) {
  document.querySelector('.score').textContent = userScore;
};
const randomSelectNumber = function (randomSelectNumber) {
  document.querySelector('.number').textContent = randomSelectNumber;
};
const userGuessNum = function (guess) {
  document.querySelector('.guess').textContent = guess;
};
// check answer
function checkAnswer() {
  console.log(score);
  console.log(typeof score);
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('Please choose a number between 1 to 20');
  } else if (ramdomNum === guess) {
    console.log(`guess value is ${guess}`);
    randomSelectNumber(ramdomNum);
    displayMessage("You' re right");
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    compareScore(score, highestScore);
  } else if (ramdomNum !== guess) {
    if (score > 1) {
      displayMessage(guess > ramdomNum ? 'Too high' : 'Too low');
      score--;
      Userscores(score);
    } else {
      failure();
    }
  }
}

document.querySelector('.check').addEventListener('click', function () {
  checkAnswer();
  console.log(ramdomNum);
});

// compare score
function compareScore(current, highest) {
  if (current >= highest) {
    highest = current;
    document.querySelector(
      '.label-highscore'
    ).textContent = `Hightest Score: ${current}`;
  }
}
// failure
function failure() {
  displayMessage('You lose!');
  Userscores(0);
  document.body.style.backgroundColor = 'red';
}
// restart the game
document.querySelector('.again').addEventListener('click', function () {
  ramdomNum = Math.floor(Math.random() * 20 + 1);
  console.log(`new random number is ${ramdomNum}`);
  score = 5;
  document.querySelector('.score').textContent = score;
  randomSelectNumber('?');
  userGuessNum('');
  displayMessage('Start guessing...');
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
