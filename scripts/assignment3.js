
console.log("assignment #3, Temperature");


function temp(){
let temperature = prompt("Please Enter Temperature: ");
let scale = prompt("Fahrenheit or Celsius: ")
let cTemp = (temperature - 32) * 5/9;
let fTemp = (temperature * 9/5) + 32;

    if (scale == "Celsius"){
        console.log(`The temperature in Fahrenheit is ${fTemp}`);
        console.log(`The conversion of ${cTemp} °C to Fahrenheit is ${fTemp} °F`);
            if (fTemp < 60){
                result.style.color = "DodgerBlue";
            }else if (fTemp < 80){
                result.style.color = "black";
            }else {
                result.style.color = "red";
            }
        document.getElementById("result").innerHTML=`The conversion of ${temperature} °C to Fahrenheit is ${fTemp.toFixed()} °F`;
    }else {
        console.log(`The temperature in Celsius is ${cTemp}`);
        console.log(`The conversion of ${fTemp} °F to Fahrenheit is ${cTemp} °C`);
            if (cTemp < 15){
                result.style.color = "DodgerBlue";
            }else if (cTemp < 27){
                result.style.color = "black";
            }else {
                result.style.color = "red";
            }
        document.getElementById("result").innerHTML=`The conversion of ${temperature} °F to Celsius is ${cTemp.toFixed()} °C`;   
        }
}


 