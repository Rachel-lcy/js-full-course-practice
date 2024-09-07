//if statements = if a condition is true, execute some code 
//if Notification, do something else
/*
let age = 25;
if (age >= 18) {
  console.log("You are old enough to enter this site");
} else {
  console.log("You must be 18+ to enter this site");
}


let time = 9;

if (time < 12) {
  console.log("Good morning");
} else {
  console.log("Good afternoon");
}

let isStudent = false;
if (isStudent) {
  console.log("You are a student!");
} else {
  console.log("You are not a student!");
}
  
let age = 16;
let hasLicense = false;

if (age >= 16) {
  console.log("You are old enough to drive!")
  if (hasLicense) {
    console.log("You have your license!")
  } else {
    console.log("You do not have your license!")
  }

} else {
  console.log("You must be 16+ to have a license!")
}
  */
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
mySubmit.onclick = function () {

  age = myText.value;
  age = Number(age);

  if (age >= 100) {

    resultElement.textContent = `You are too OLD to enter this site;`;
  }
  else if (age == 0) {

    resultElement.textContent = `You can't enter. You were just born;`;
  }
  else if (age >= 18) {

    resultElement.textContent = `You are old enough to enter this site`;
  }
  else if (age < 0) {

    resultElement.textContent = `Your age can't be below 0;`;
  }

  else {
    console.log("");
    resultElement.textContent = `You must be 18+ to enter this site;`;
  }

}



