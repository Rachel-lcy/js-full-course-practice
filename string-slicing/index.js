//string slicing = creating a substring from a portion of another string
// string.slicing(start,end)

/*
const fullName = "Rachel Hu";
let firstName = fullName.slice(0, 6);
//Rachel
console.log(firstName);
let lastName = fullName.slice(7, 9);
console.log(lastName);
//Hu

let firstChar = fullName.slice(0, 1);
console.log(firstChar);
//R

let lastChar = fullName.slice(-1);
console.log(lastChar);
//u

*/

const email = "hurui.lcy@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));
//indexOf() 是一个用于查找子字符串或字符在字符串中首次出现位置的方法。
console.log(username);
//hurui.lcy
console.log(extension);
//@gmail.com