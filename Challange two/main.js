// recuperer les element html

const myInput = document.getElementById('myDollar');

const onBouton = document.getElementById('myBouton');

const numPerson = document.getElementById('person');

const myReset = document.getElementById('reset_btn');

const myText = document.getElementById('text');


function calculSomme() {

var inputValeur = parseInt(document.getElementById('myDollar').value);

var inputPerson = parseInt(document.getElementById('person').value);

var poucentage1 = 15;

var poucentage2 = 5;
var poucentage3 = 10;
var poucentage4 = 25;
var poucentage5 = 40;

var poucentage6 = 50;



var resultat =( inputValeur / inputPerson * poucentage1 || 
(inputValeur / inputPerson * poucentage2) || 
(inputValeur / inputPerson * poucentage3) ||
(inputValeur / inputPerson * poucentage4) ||
(inputValeur / inputPerson * poucentage5) ||
(inputValeur / inputPerson * poucentage6)) / 100;

myText.innerText = `${resultat}`;


   
}

calculSomme();

function affichage() {
    
 inputValeur.forEach(element => {
     console.log(inputValeur);
      let parent = element.parentElement
    

      if(element.value = ''){
          element.style.borderColor = 'red';
          parent.querySelector("small").innerText = 'remplir ce champ';
          validat = false;
      }
    
     
     });
    }

//effacer l'operation d'un input 

function effacerInput() {

    document.getElementById('myDollar').value = "";
    document.getElementById('person').value = "";

    
}















































