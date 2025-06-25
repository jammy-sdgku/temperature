
function convertTemperatureRange(){
    console.log("Assignment 4");
     
    let start  = document.getElementById("startValue").value;
    let end  = document.getElementById("endValue").value;
    let scale = document.getElementById("scale").value;
    
    document.getElementById("title").innerHTML=`List of temperature conversions starting with ${start}°${scale} and ending with ${end}°${scale}`;
    
    for(let i=start; i<=end; i ++){
        let cTemp = (i - 32) * 5/9;
        let fTemp = (i * 9/5) + 32;
        if (scale == "C"){
            document.getElementById("result").innerHTML +=`<li>${i}°C to ${fTemp.toFixed()}°F</li>`;
            console.log(`${i}°C to ${fTemp.toFixed()}°F`);
        }else{
            document.getElementById("result").innerHTML +=`<li> ${i}°F to ${cTemp.toFixed()}°C </li>`;
            console.log(`${i}°F to ${cTemp.toFixed()}°C`);
        }
    }
}




        
       