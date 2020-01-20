// ===== CONSTANT / STARTING VALUES =====
let startT = 5; // duration of the game in seconds
let plusT = 5; // additional time
let numWine = 3; // number of wine


// ===== KEYBOARD =====

function setKeys(e) {
    // set keys to be used to move character
    // spacebar for jumping
    const pressedKey = e.code;
    if (pressedKey === "Space") {
        jumpChar();
    }
}


// ===== CHARACTER =====

function setChar() {
    // generate character after countdown
    const charBox = document.getElementById("char-container");
    const character = document.createElement("img");
    character.className = "med-icon "; // there must be a space to separate the classes being added
    character.className += "pulse";
    character.setAttribute("id", "character");
    character.src = "images/me.png";
    charBox.append(character);

    // position character
    // character.style.gridColumn = "1/2";
    // character.style.gridRow = "10/11";
}

function jumpChar() {
    // character movement
    const character = document.getElementById("character");

}


// ===== GENERATE SHEEP & OBSTACLES =====
function generateItems() {

}



// ===== FLOATING SHEEP =====

function setFloaters() {
    // position floating sheep
}


// ===== OBSTACLES =====

function setObstacles() {
    // position obstacles
}


// ===== SHEEP COUNTER =====

function setCounter() {
    // set HTML sheep counter
    let numSpan = document.getElementById("counter");
    numSpan.textContent = `${countSheep()}`
}

function countSheep() {
    // increase number whenever character collides with sheep
    // must return a number
    return 10; // test
}


// ===== WINE =====

function serveWine() {
    // changes color when more time is needed
    let wine = document.querySelector(".wine");
    wine.src="/images/bw-wine.png";
    wine.classList.remove("wine");
}

function addTime(numSheep,wines) {
    // adds more time when necessary
    // let numSheep = 10;
    // let numWine = 3; // number of wine at the start
    if (numSheep() < 50 && wines > 0) {
        serveWine();
        startTimer(plusT); // adds 10 more seconds
        debugger
    } 
    else {
        winOrLose();
    }

}


// ===== REACTIONS PER COLLISION=====

function changeFace() {
    // changes face at the bottom
}

function printMsg() {
    // prints message per each collision
}



// ===== WIN OR LOSE =====

function winOrLose() {

}


// ===== TIMER =====

function startTimer(num) { 
    // starts 30s timer
    let wines = 3;
    let timer = setInterval(() => {
        num--;
        document.getElementById("timer").textContent = num;
        if (num <= 0) {
            clearInterval(timer); // stops timer
            wines --;
            addTime(countSheep,wines);
            debugger
        }
    }, 1000);
}

function countDown() {
    let printDiv = document.getElementById("print-container");
    let sec = document.getElementById("countdown").textContent;
    let counter = setInterval(() => {
        sec--;
        document.getElementById("countdown").textContent = sec;
        if (sec <= 0) {
            clearInterval(counter); // stops the counter
            printDiv.innerHTML = ""; // clears the countdown container
            // calls the ff functions after countdown:
            startTimer(startT); // duration of the game
            setChar();
        }
    }, 1000);
    
}


// ============================================
// CALL FUNCTIONS

function initialize() {
    // houses main functions
    window.onload = countDown;
    window.onkeydown = setKeys;
    
}

initialize();


// countdown 321 before game starts
// Add when there is time:
// Add function for sleep props that can make character invincible for a few sec