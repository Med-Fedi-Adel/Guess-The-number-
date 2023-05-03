'use strict';

//Math.trunc <=> Math.floor
let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;

//Clicking check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.number').textContent = guess;

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'NO NUMBER!';
  }

  //Mid game
  if (score > 1) {
    //When the player wins
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Number!';

      const highNumberScore = Number(
        document.querySelector('.highscore').textContent
      );

      if (highNumberScore < score) {
        document.querySelector('.highscore').textContent = score;
      }

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      //When the guess is too high
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;

      //When the guess is too low
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    //When the game is lost
  } else {
    document.querySelector('.message').textContent = 'You lost the game';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#FF0000';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //Restore the initial text Content of the indicator
  document.querySelector('.message').textContent = 'Start guessing...';

  //Restore the initial score
  score = 20;
  document.querySelector('.score').textContent = score;

  //Restore the initial content of the guessing box
  document.querySelector('.number').textContent = '?';

  //Restore the width of guessing box
  document.querySelector('.number').style.width = '15rem';

  //restore the background color
  document.querySelector('body').style.backgroundColor = '#222';

  //Regenerate another random nmber
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);

  //Emty guess box
  document.querySelector('.guess').value = '';
});
