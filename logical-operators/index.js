//Logical operators = used to combine or manipulate boolean values(true or false)

// and = &&
// or = ||
// not = !



/*
const temp = 25;
if (temp > 0 && temp <= 30) {
  console.log("The weather is GOOD!")
}
else {
  console.log("The weather is BAD!")
}
*/

/*
if (temp <= 0 || temp > 30) {
  console.log("The weather is GOOD!")
}
else {
  console.log("The weather is BAD!")
}
*/

const isSunny = false;

if (isSunny) {
  console.log("It is SUNNY");
}
else {
  console.log("It is CLOUDY")
}

if (!isSunny) {
  console.log("It is CLOUDY");
}
else {
  console.log("It is SUNNY")
}