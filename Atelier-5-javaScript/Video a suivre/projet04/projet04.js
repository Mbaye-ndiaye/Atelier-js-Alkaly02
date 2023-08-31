//------------- creer un chronometre--------------------------------------------------

// ======================Variable for buttons=====================================================

//----------- document.querySelector----------------------------------
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resteBtn');


// varibale  for time values======================

let seconds = 0;
let minutes = 0;
let hours = 0;

// Stop Watch function-----------------------

function stopWatch() {
    seconds++

    if(seconds / 60 === 1){
        seconds = 0
        minutes++;

        if(minutes / 60 === 1) {
            minutes = 0;
            hours++
        }
    }

    let displayTimer = document.getElementById('timer').innerText =
     hours + ":" + minutes + ":" + seconds;
}

window.setInterval(stopWatch, 1000)

//------------ document/getElementById-----------------------------


//------------------ addEventlistener---------------------------


//------------------ is statements------------------------------

//-------------- toString-----------------------------


//------------------ setInterval---------------------------

//------------------- innerHtml-------------------------