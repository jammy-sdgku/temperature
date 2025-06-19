
console.log("assignment #2, Temperature");

function temp(){
let cTemp = prompt("Please Enter Celcius: ");

let fTemp = (cTemp * 9/5) + 32;

console.log(`The temperature in Celsius is ${cTemp}`)
console.log(`The conversion of ${cTemp} °C Celcius to Fahrenheit is ${fTemp} °F`);

document.getElementById("result").innerHTML=`The conversion of ${cTemp} °C to Fahrenheit is ${fTemp} °F`;
}

