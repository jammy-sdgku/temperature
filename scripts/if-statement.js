console.log("Conditionals");

//if-statement (condition = y/n)
//if(condition){
//code to be executed//}

if (3<5){
    console.log("This is true");
}

let student1 = 45;
let student2 = 45;

if(student1 == student2){
    console.log("The values are the same");
}

//if-else statement
//if(condition){
//code to be executed if true
//}else{
//code to run//}

let isTrue=false;

if(isTrue==true){
    console.log("Yes");
}else{
    console.log("No");
}

let waterTemp = 102;

if (waterTemp >= 100){
    console.log("Boiling");
}else{
    console.log("not Boiling");
}

let age = 30;

if (age >21){
    console.log("You are an adult");
}else{
    console.log("You are underage");
}

//if-else statement
//if(condition1){
//code to be executed if true
//}else if(condition2{
//code to run//
//}else{
//code to run if conditions were false.
//}

//Challenge 1:

//let age1 = prompt("Enter age");

//if (age1 <13){
//    console.log("You are an child");
//}else if (age1 <21){
//    console.log("You are teenager");
//}else if (age1 <64){
 //   console.log("You are an Adult");
////}else{
 //   console.log("You are a senior");
//}

//Challenge 2:
//let color = prompt("Enter light color");

//if (color=="green"){
//    console.log("Go!");
//}else if (color=="yellow"){
//    console.log("Slow down");
//}else if (color=="red"){
//    console.log("Stop");
//}else{
//    console.log("look for policeman");
//}


//Challenge 3:
function ticketCalc(){
let age2 = prompt("Enter your age");
let price =0;

    if (age2 < 12){
        price = $5;
        console.log("Ticket cost $5");
    }else if (age2 > 12){
        console.log("Ticket cost $8");
    }else if (age2 >18){
        console.log("Ticket cost $10");
    }else{
        console.log("You get a senior ticket");
    }
    return "Your ticket price is " + price;
}
//document.write(ticketCalc());

//Challenge 4

function outfit(){
    let temp1 = prompt("What is the current temperature?: ");
    let outfit="";
    let p = document.getElementById("outfit");

    if (temp1 <= 15){
        outfit = "Jacket";
    }else if (temp1 <25){
        outfit = "Sweater";
    }else {
        outfit = "T-Shirt";
    }
    p.innerHTML = "You should wear: " + outfit;
}

//Switch use

let action = prompt("Choose and action: jump, run, attack or block");

switch(action){
    case "jump":
        console.log("You jumped the obstacle");
        break;
    case "run":
        console.log("You are running really fast");
        break;
    case "attack":
        console.log("You are attacking to attacker");
        break;
    case "block":
        console.log("You blocked the attack");
        break;
    default:
        console.log("Unknown action");
}