// Switch = can be an efficient replacement to many else if statements
/*
let day = "5";
switch (day) {
  case 1:
    console.log("It is the Monday!");
    break;
  case 2:
    console.log("It is the Tuesday!");
    break;
  case 3:
    console.log("It is the Wednesday!");
    break;
  case 4:
    console.log("It is the Thursday!");
    break;
  case 5:
    console.log("It is the Friday!");
    break;
  case 6:
    console.log("It is the Saturday!");
    break;
  case 7:
    console.log("It is the Sunday!");
    break;
  default:
    console.log(`${day} is not a day`)
}
*/
let testScore = 50;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testScore >= 60:
    letterGrade = "D";
    break;
  default:
    letterGrade = "F";
}
console.log(letterGrade);