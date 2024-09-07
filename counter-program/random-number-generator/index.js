// Random number generator
/*
let randomNum = Math.random();
let randomNum1 = Math.floor(Math.random() * 6);
//随即数据从1 到6，不包含6
console.log(randomNum1); 
*/

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 100;
let randomNum;
myButton.onclick = function () {
  randomNum = Math.floor(Math.random() * max) + min;
  myLabel.textContent = randomNum;
}