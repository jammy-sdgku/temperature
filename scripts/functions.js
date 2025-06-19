console.log("Functions");

let firstName = "James";
let lastName = "Jones";

//concatenation
console.log("Hello " + firstName + " " + lastName + ", welcome");
console.log(`Hello ${firstName} ${lastName}, welcome`);

// 1. functions declartion
function sayHello(){
    console.log("Hello Cohort 59");
}

// 2. Call the function
sayHello()

//example #2 with 1 parameter (inputs)
function greet(name){
    console.log(`Hello ${name}, welcome!`);
}


greet("Tim");
greet("Alex");

//example #3 with 2 parameters (inputs)
function greet2(name1="someone" ,name2){
    console.log(`Hello ${name1} and ${name2}, welcome!`);
}

greet2("John", "Smith");
greet2("Bob", "Joe");

//challenge #1
function doubleNumber(number){
    console.log(number * 2);
}
doubleNumber(11);

function doubleNumber2(number){
    let total = number * 2;
    console.log(`The double of ${number} is ${total}`);
}
doubleNumber2(11);

//example #4 with prompt
function welcome(){
    let name2 = prompt("Enter your name");
    let age = prompt("Enter your age: ");

    console.log(`Welcome ${name2} - age ${age}`);
}

//example #5 default parameters
function add(num1=0, num2=0){
    console.log(`The total is ${num1 + num2}`);
}

add(3,5);
add();
add(4);

//Challenge 2
function combineNames(firstName= "Unknown", lastName= "Unknown"){
    console.log(`The combined name is ${firstName} ${lastName}.`)
}

combineNames("General", "Lee");
combineNames("General");
combineNames();

//Challenge 3
function convertToSeconds(minutes){
    minCon = minutes * 60;
    console.log(`${minutes} minutes converts to ${minCon} seconds.`);
}
convertToSeconds(1);
convertToSeconds(10);
convertToSeconds(60);

//alternate for challenge 3
function convertToSeconds2(){
    let minutes = prompt("Enter minutes here: ");
    minCon = minutes * 60;
    //console.log(`${minutes} minutes converts to ${minCon} seconds.`);
    document.getElementById("results").innerHTML += `<p>${minutes} minutes converts to ${minCon} seconds.</p>`;
}