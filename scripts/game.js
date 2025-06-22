let positionLeft = 350;
let positionRight = 0;
let character = document.getElementById("character");

function moveLeft(){
    if(positionLeft>0){
        positionLeft = positionLeft-5;
        character.style.left = positionLeft + "px";
    }
    console.log(positionLeft); 
}

function moveRight(){
    if(positionLeft>0){
        positionLeft = positionLeft+5;
        character.style.left = positionLeft + "px";
    }
    console.log(positionLeft); 

}

//set interval
let interval;
let moving = false; // Flag to prevent multiple intervals

document.addEventListener("keydown", event => {
    if (!moving) {
        if (event.key === "ArrowLeft") {
            interval = setInterval(moveLeft, 10); // Adjust 10 for smoother movement
            moving = true;
        } else if (event.key === "ArrowRight") {
            interval = setInterval(moveRight, 10); // Adjust 10 for smoother movement
            moving = true;
        }
    }
});

document.addEventListener("keyup", event => {
    clearInterval(interval);
    moving = false;
});