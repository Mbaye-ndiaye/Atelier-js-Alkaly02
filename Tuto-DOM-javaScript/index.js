// SELECTEUR
document.querySelector('h4').style.background="red";

// Click event
const questionContainer = document.querySelector(
    ".click-even");
questionContainer.addEventListener('click', () => {
    console.log("Click !");
})


/*const btn1 = document.querySelector("#btn-1");
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
    
    console.log(cgv.checked);
    if (Cgv.checked) {
        //Afficher le contenu des variables
    } else {
        alert("Veuillez accepter les CGV")
    }
})

*/
