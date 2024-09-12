//for each = method used to iterate over the elements of an array and apply a specific function(callback) to each element

//            array.forEach(callback)
//            Element.index,array are provided

let fruits = ["apple", "mango", "pineapple", "dragon fruit"];

fruits.forEach(capitalize);
//fruits.forEach(upperCase);
fruits.forEach(display);


function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}


function capitalize(element, index, array) {
  array[index] = element.charAt[0].toUpperCase() + element.slice(1);
}


function display(element) {
  console.log(element);
}