//For-Loops

console.log("testing for loops");

/*for (let i=0; i<4; i++){
    document.writeln("My for is working, value=" +i);
}
*/

/*
for(let i=1; i<=10; i++){
    document.writeln(`<p>${i}</p>`);
}
*/

/*
for(let i=2; i<21; i+=2){
    document.writeln("Myfor is working")
    console.log("value = "+i);
}
*/

//Multiple table with const number
function multiTable(){
    const num  = 2;
    document.writeln("<h2>Multiplication Table</h2>")
    for(let i=1; i<=10; i++){
        document.writeln(`<p>${num} x ${i} = ${num*i}</p>`);
        console.log(`<p>${num} x ${i} = ${num*i}</p>`);
    }
}

//prompt for number
function multiTable2(){
    const num  = prompt("Enter the number: ");
    document.writeln(`<h2>Multiplication Table for ${num}</h2>`)
    for(let i=1; i<=10; i++){
        document.writeln(`<p>${num} x ${i} = ${num*i}</p>`);
        console.log(`<p>${num} x ${i} = ${num*i}</p>`);
    }
}

//prompt for number and use id on html
function multiTable3(){
    const num  = prompt("Enter the number: ");
    document.getElementById("title").innerHTML=`Multiplication Table for ${num}`;
    for(let i=1; i<=10; i++){
        document.getElementById("result").innerHTML=`${num} x ${i} = ${num*i}`;
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

/*
//While Loop
//start, stop, increment

console.log("-----WHILE-----")
let i=0; //start
while(i<=4){ //stop
    console.log(i);
    i++; //increment
}

*/

/*

//Do While
console.log("-----DO WHILE-----")
let j=0; //start
do{
    console.log(j);
    j++; //increment
}while(j<=4); //Stop

*/

//while function
function startCountDown(){
    let seconds = 10;
    let result ="";
    while(seconds>0){
        result += `<p>Launching in .....${seconds}</p>`;
        seconds--;
    }
    document.getElementById("results").innerHTML=result;
}

//do-while function
function passPrompt(){
    let correctPass = "1234";
    let userInput;
    let result = "Simulating password input";

    do{
        userInput = prompt("Enter password: ");
        result += "<p>User input was: " + userInput + "</p>";
    }while(userInput !== correctPass)

    result += "<p>Welcome to the system</p>";
    document.getElementById("results").innerHTML=result;
}

//loop function
function showProducts(){
    let products = ["laptop","display","camera","speaker"];// array
    let result ="";

    for(let i=0;i<products.length;i++){
        result += `<li> ${products[i]} </li>`; 
    }
    document.getElementById("results").innerHTML=result; 
}