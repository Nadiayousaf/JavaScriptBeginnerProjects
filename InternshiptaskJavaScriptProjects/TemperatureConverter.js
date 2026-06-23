function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function formatTemperature(value, unit) {
  return `${value} ${unit}`;
}

console.log(celsiusToFahrenheit(25)); 
console.log(fahrenheitToCelsius(77)); 

console.log(formatTemperature(77, "F")); 
console.log(formatTemperature(25, "C")); 
