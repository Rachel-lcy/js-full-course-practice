// Number Guessing Game
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {

  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);
  //console.log(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid a number");
  }
  else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a valid a number");
  }
  else {
    attempts++;
    if (guess < answer) {
      window.alert("TOO LOW! TRY AGAIN");
    }
    else if (guess > answer) {
      window.alert("TOO HIGH! TRY AGAIN");
    }
    else {
      window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts};`);
      running = false;
    }
  }
}