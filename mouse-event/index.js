//eventListen = Listen for specific events to create interactive web pages;
// events: click, mouseover,  mouseout
// .addEventListener(event, callback) ;


const myBox = document.getElementById("myBox");

myBox.addEventListener("click", event => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = " OUCH 😳";

})

myBox.addEventListener("mouseover", event => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = " Don't Do it 😱";

})
myBox.addEventListener("mouseout", event => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click Me 😋";

})


const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = " OUCH 😳";

})

myButton.addEventListener("mouseover", event => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = " Don't Do it 😱";

})
myButton.addEventListener("mouseout", event => {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = "Click Me 😋";

})

/*
myButton.addEventListener("click", event => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = " OUCH 😳";

})

myButton.addEventListener("mouseover", event => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = " Don't Do it 😱";

})
myButton.addEventListener("mouseout", event => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click Me 😋";

})
  */
