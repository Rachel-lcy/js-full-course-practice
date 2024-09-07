// string methods = allow you to manipulate and work with text(strings)

//let userName = "RachelRui";
//console.log(userName.charAt(0));
//R

//console.log(userName.indexOf("l"));
//5

//console.log(userName.lastIndexOf("R"));
//6

//console.log(userName.length);
//9
//userName = userName.trim();
//返回一个新字符串，其中去除了开头和结尾的所有空白字符，不改变原字符串。

//userName = userName.toUpperCase();
//RACHELRUI

//userName = userName.toLowerCase();
//rachelrui

//userName = userName.repeat(3);
//RachelRuiRachelRuiRachelRui

//console.log(userName);
/*
let result = userName.startsWith(" ");
//console.log(result);
//false  not stat with space

if (result) {
  console.log("Your username can't begin with ''");
}
else {
  console.log(userName);
}
*/

let phoneNumber = "123-456-789";

phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);
//123456789



