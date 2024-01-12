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

totalScore0El.textContent = 0;
totalScore1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let totalScore = 0;

const showCurrent = function () {
  currentScore0El.textContent = currentScore;
};

const showTotal = function () {
  totalScore0El.textContent = totalScore;
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
  }
});

holdBtn.addEventListener('click', function () {
  totalScore += currentScore;
  showTotal();
  currentScore = 0;
  showCurrent();
});

newGameBtn.addEventListener('click', function () {
  currentScore = 0;
  totalScore = 0;
  showCurrent();
  showTotal();
});
