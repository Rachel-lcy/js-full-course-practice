/*
console.log('Hello');
console.log('I like pizza');

//window.alert('This is an alter!');
//window.alert('I like pizza');


document.getElementById("myH1").textContent = 'Hello';
document.getElementById('myP').textContent = 'I like Pizza!';

//This ia a comment

/*
  This
  is
  a
  comment

*/
//THE ABOVE IS THE FIRST CLASS!!!


/*
let x;
x = 100;

console.log(x);

let y = 123;

let age = 25;
let price = 10.99;

console.log(typeof age);

console.log(age);
console.log(price);
console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);

let firstName = 'Hu';
console.log(`Your name is ${firstName}`);

let favoriteFood = 'pizza';
console.log(`Your favorite food is ${favoriteFood};`);


let online = true;
console.log(typeof online);
console.log(`Bro is online: ${online}`);

let forSale = true;
console.log(`Is this card for sale: ${forSale}`);



let fullName = "Rachel Hu";
let age = 25;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `enrolled: ${isStudent}`;

//THE ABOVE IS THE second CLASS!!!
*/

//let students = 30;

//students = students + 1; 
//students = students - 1; students -= 1
//students = students * 2; students *=2
//students = students / 2; students /=2
//students = students ** 2; students **=2

//let extraStudents = students % 3;
//% 是modulus operation 它返回两个数字相除后的余数

/*
students += 1;
students *= 2;
students /= 2;
students **= 2;
简写模式
*/

//students++;
//students--;

/*
let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);
//THE ABOVE IS THE third CLASS!!!
*/

//let username;
//username = window.prompt("what's your username?")
//console.log(username);
/*
let username;
document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${username}`
  //console.log(username);
}
  4: Accept user input
*/

//5:Type conversion
/*
let age = window.prompt("How old are you?");
age = Number(age);
age += 1;
console.log(age, typeof age);


let x = "0";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

//6:Constants-const
//const = a variable that can't bu changed
/*
const PI = 3.14159
let radius;
let circumference;

//radius = window.prompt('Enter the radius of a circle');



document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value
  radius = Number(radius);
  circumference = 2 * PI * radius;

  document.getElementById("myH3").textContent = circumference + "cm";
}
*/


//7:Math object