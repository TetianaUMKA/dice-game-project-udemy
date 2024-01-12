'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const totalScore0El = document.querySelector('#score--0');
const totalScore1El = document.getElementById('score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

diceEl.classList.add('hidden');
totalScore0El.textContent = 0;
totalScore1El.textContent = 0;

const totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const showCurrent = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
};

const showTotal = function () {
  document.getElementById(`score--${activePlayer}`).textContent =
    totalScores[activePlayer];
};

const currentTheme = function () {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

rollBtn.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    showCurrent();
  } else {
    currentScore = 0;
    showCurrent();
    currentTheme();
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

holdBtn.addEventListener('click', function () {
  totalScores[activePlayer] += currentScore;
  showTotal();
  currentScore = 0;
  showCurrent();
  currentTheme();
  activePlayer = activePlayer === 0 ? 1 : 0;
  if (totalScores[activePlayer] >= 100) {
  }
});

newGameBtn.addEventListener('click', function () {
  currentScore = 0;
  totalScores = 0;
  showCurrent();
  showTotal();
  currentTheme();
});
