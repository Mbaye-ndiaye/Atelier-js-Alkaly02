// SELECTEUR
document.querySelector('h4').style.background="red";

// Click event
 const questionContainer = document.querySelector(
    ".click-even");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

if(questionContainer){

questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-clicked");

});

}

btn1.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "green"
});
btn2.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "red";
});

//------------------Mouse Events------------------------

const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) Translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

if(questionContainer){
questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});
}

if (questionContainer){   
questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink";
});
}

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)";
});


//============================keypress=======================

const keypressContainer = document.querySelector(".keypress")
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;

    if (e.key === "j" ) {
      keypressContainer.style.background = "pink";  
    }else if (e.key === "h"){
        keypressContainer.style.background = "teal";
    }else{
        keypressContainer.style.background = "red";
    }
});

//============================Scroll  Event==========================================

const nav= document.querySelector("nav");
 
window.addEventListener("scroll", () => {
    console.log(window.scrollY);

    if(window.scrollY > 120) {
        nav.style.top = 0;
    }else{
        nav.style.top = "-50px";
    }
});

//=================================form Events==========================================

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector('form')
let pseudo = "";
let langage = "";
inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
});

select.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // console.log(cgv.checked);
    if (Cgv.checked) {
        document.querySelector('form > div').innerText =    `
        <h3>Pseudo : ${pseudo}</h3>  <h4>Langage prefere : ${langage}</h4>
        `;

        //Afficher le contenu des variables
    } else {
        alert("Veuillez accepter les CGV");
    }
});

//=======================Load event===============================================

window.addEventListener("load", () => {
    console.log("Document Chargé !");
});

//=========================================================
const boxes = document.querySelectorAll(".box");

console.log(boxes);
boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.style.transform = "scale(0.7)";
    });
});

//----------------------------------
// addEventlister vs onclick
document.body.onlick = function() {
    console.log("Scrool !");
}

 /*Bubbling => fin (de base l'eventlistener est parametre en mode
Bubbling)*/


document.body.addEventListener("click", () => {
    console.log("click 1 !");
});

//Usecapture
document.body.addEventListener(
    "click",
    () => {
        console.log("click 2 !");
    },
    true
);
//---------------------------------------------------------------------
//Stop propagation
questionContainer.addEventListener("click", () => {
    alert ("test !");
    e.stopPropagation();
});

// removeEventlistener
//------------------------------------
// BOM
 window.open("http://google.com", "cours js", "height=600,width=800")

//window.close()

//Evenements adosses a window
// alert("hello")
// confirm
btn2.addEventListener('click', () => {
    confirm("Voulez vous vraiment vous tromper ?")
});

// prompt 

btn1.addEventListener("click", () => {
    let answer = prompt('Entrez votre nom !');

    questionContainer.innerHTML = "<h3>Bravo " + answer + "</h3>"
});


setTimeout(() => {
    questionContainer.style.bordeRadius = '300px'
}, 2000);

let interval = setInterval(() => {
    document.body.innerHTML +=`
    <div class="box"> <h2>Nouvelle Boite !</h2> 
    </div>
    `;
}, 1000)

document.body.addEventListener("click", (e) => {
    clearInterval(interval);
});

// Location

// console.log(lacation.href);
// console.log(lacation.href);
// console.log(lacation.href);
// console.log(lacation.href);

// window.onload = () => {
//     location.href = "http://twitter.fr";
// };


window.history.back();
history.go(-2);

//------------------------------------------------------------------
//setProperty

window.addEventListener('mousemove', (e) => {
    console.log(e);
    nav.style.setProperty("--x", e.layerX + "px");
    nav.style.setProperty("--Y", e.layerY + "px");
});