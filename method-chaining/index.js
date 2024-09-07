// method chaining = calling one method after another in one continuous line of code.
let username = window.prompt("Enter Your Username:");
// --------NO method chaining


username = username.trim();
//trim() 是字符串的方法，用于移除字符串开头和结尾的空白字符（包括空格、制表符、换行符等）。
let letter = username.charAt(0);
letter = letter.toUpperCase();

extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

username = letter + extraChars;
console.log(username);

//---------method chaining 

username = username.trim().charAt(0).toUpperCase()
  + username.trim().slice(1).toLowerCase();

console.log(username);