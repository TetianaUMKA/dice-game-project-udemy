'use strict';

const rulesModal = document.querySelector('.rules-modal');
const rulesText = document.querySelector('.rules-text');
const openRulesBtn = document.querySelector('.open-rules-btn');
const closeRulesBtn = document.querySelector('.close-rules-btn');

openRulesBtn.addEventListener('click', function () {
  rulesText.textContent = `The user rolls the dice if the dice shows number greater then 1 we can rolls one more time till we don't click the hold button. When we click the hold button the current score added to the total score. But if the dice shows 1 the current score become 0 and the player changes. The game continues till the total score will become 100. Who has the first get 100 will be the winner.`;
  rulesModal.classList.remove('hidden');
  openRulesBtn.classList.add('hidden');
});

closeRulesBtn.addEventListener('click', function () {
  rulesModal.classList.add('hidden');
  openRulesBtn.classList.remove('hidden');
});
