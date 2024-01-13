'use strict';

const rulesModal = document.querySelector('.rules-modal');
const openRulesBtn = document.querySelector('.open-rules-btn');
const closeRulesBtn = document.querySelector('.close-rules-btn');

openRulesBtn.addEventListener('click', function () {
  rulesModal.classList.remove('hidden');
  openRulesBtn.classList.add('hidden');
});

closeRulesBtn.addEventListener('click', function () {
  rulesModal.classList.add('hidden');
  openRulesBtn.classList.remove('hidden');
});
