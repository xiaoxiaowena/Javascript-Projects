'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, gameOn;

const init = function () {
  currentScore = 0;
  activePlayer = 0; //player 0 or player1
  scores = [0, 0];
  //final scores for both players
  // starting conditions
  diceEl.classList.add('hidden');
  gameOn = true;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  document.getElementById('name--0').textContent = 'Player 1';
  document.getElementById('name--1').textContent = 'Player 2';
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player-active');
  player1El.classList.remove('player-active');
  diceEl.classList.remove('hidden');
};
init();
btnRoll.addEventListener('click', function () {
  if (gameOn) {
    // random dice roll
    const dice = Math.floor(Math.random() * 6) + 1;
    // display image of dice after rolling
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // check for num 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      console.log(`player ${activePlayer} 's score is ${currentScore}`);
    } else {
      //  if true switch to another player
      switchPlayer();
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    }
    console.log(`current score is ${currentScore}`);
  }
});

btnHold.addEventListener('click', function () {
  if (gameOn) {
    // check if current score pass 5, announce the winner
    scores[activePlayer] += currentScore;
    //display scores
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[`${activePlayer}`];
    //check score
    if (scores[activePlayer] > 5) {
      gameOn = false;
      document.getElementById(`name--${activePlayer}`).textContent = `Player ${
        activePlayer + 1
      } is the winner!`;
      // add winner background
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      // dice image disappear
      diceEl.classList.add('hidden');
    } else {
      //switch to the next player
      // set final score display
      switchPlayer();
    }
  }
});
//reset the game
// btnNew.addEventListener('click',)
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // if player 0 then 1 or is 0
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnNew.addEventListener('click', init);
