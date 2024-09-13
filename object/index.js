//object = a collection of related properties and/or methods.
// can represent real world objects(people, products, places)
//object = {key: value, function()}

const person1 = {
  firstName: "Rachel",
  lastName: "Hu",
  age: 34,
  isEmployed: false,
  sayHello: function () {
    console.log("Hi, I am Rachel Hu")
  },
  eat: function () {
    console.log("I am eating porridge")
  }
}
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.eat);

person1.sayHello();
const person2 = {
  firstName: "Percy",
  lastName: "Sun",
  age: 34,
  isEmployed: false,
}

console.log(person2.firstName);
console.log(person2.lastName);
