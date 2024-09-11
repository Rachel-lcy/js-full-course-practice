//Temperature Conversion Program

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert() {
  if (toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";

    //result.textContent = "You select to Fahrenheit";
  }
  else if (toCelsius.checked) {
    //result.textContent = "You select to Celsius";
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  }
  else {
    result.textContent = "Select a unit";
  }
}