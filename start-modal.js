'use strict';
const startModal = document.querySelector('.start-modal');
const startBtn = document.querySelector('.start-btn');

const playerName1 = document.querySelector('#name--0');
const playerName2 = document.querySelector('#name--1');

const enteredName1 = document.querySelector('#name-player1');
const enteredName2 = document.querySelector('#name-player2');

startBtn.addEventListener('click', function () {
  startModal.classList.add('hidden');
  if (enteredName1.value && enteredName2.value) {
    playerName1.textContent = enteredName1.value;
    playerName2.textContent = enteredName2.value;
  }
});
