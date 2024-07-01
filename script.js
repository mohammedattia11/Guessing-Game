'use strict';
/*
used DRY Principle to implement this code
1. get a random number between 1 and 20 and store it in a variable
2. handling input and button using event
3. add conditions to check whether the random number matches the the input number
4. score decreases when the guessed number isn't correct [empty , low , high] > by making two variables one for score and the other for new score
5. when the user reach 0 he lose the game
6. manipulate style with green page if number is correct and red when score became 0
7. Again (reset button)
  1. reset the color 
  2. reset score
  3. reset the input field
  4. reset the header
*/
//--------------------------------logic part-------------------------------------------
const randomNumber = function() {
  return Math.trunc(Math.random() * 20) + 1;
}
const gameOver = function () {
  document.querySelector('.message').textContent = 'You Lost the game 🫠!';
  score.textContent = 0;
  body.style.backgroundColor = '#f62b2b';
  mainHeader.textContent = 'Game Over !';
};
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}
let secretNumber = randomNumber() // number between 1 and 20 ✅
const score = document.querySelector('.score');
let newScore = Number(score.textContent); //20 number
const body = document.querySelector('body');
const mainHeader = document.querySelector('h1');
const highScore = document.querySelector('.highscore');

document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);

  if (guessedNumber === secretNumber) {
    displayMessage('You are Correct 🎉') ;
    body.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    if (newScore > Number(highScore.textContent)) {
      highScore.textContent = newScore;
    }
  } else if (!guessedNumber) {
    if (newScore > 1) {
      displayMessage('Please Enter the number ✋')
      newScore--;
      score.textContent = newScore;
    } else {
      gameOver();
    }
  } else if (guessedNumber !== secretNumber) {
    if (newScore > 1) {
      guessedNumber > secretNumber
        ? (displayMessage('Too High 📈'))
        : (displayMessage('Too Low 📉'));
      newScore--;
      score.textContent = newScore;
    } else {
      gameOver();
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  body.style.backgroundColor = '#151718';
  secretNumber = randomNumber();
  score.textContent = 20;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  mainHeader.textContent = 'Guess My Number!';
  newScore = 20;
});

