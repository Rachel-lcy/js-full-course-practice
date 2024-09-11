// function = A section of reusable code.
//         Declare code once , use it whenever you want.
//         Call the function to execute that code.

/*
function happyBirthday() {
  console.log("Happy Birthday to You1");
  console.log("Happy Birthday to You2")
  console.log("Happy Birthday to You3")
  console.log("Happy Birthday to You4")
}

happyBirthday();


function happyBirthday(username, age) {
  console.log("Happy Birthday to You1");
  console.log(`Happy Birthday to ${username}`)
  console.log("Happy Birthday to You3")
  console.log(`You are ${age} years old`)
}

happyBirthday("Rachel", 18);
happyBirthday("Emely", 30);

function add(x, y) {
  //let result = x + y;
  //return result;
  return x + y;
}
function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

*/

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
  // return number % 2 ===0 ? true : false;
}

function isValidEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }

  return email.includes("@") ? true : false;
}
console.log(isValidEmail("hurui.lcy@gmail.com"));