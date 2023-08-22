// recuperer les elements html
const ecran = document.querySelector('#ecran');
const touches = document.querySelectorAll('.button');
const inputFinal = document.querySelector('#recu');
const final = document.querySelector('#milier')


let valeurFinal;
let afficheBas = 0;



// afficher les choffres sur l'ecran
function nombres(nombre){
    afficheBas += nombre
    ecran.value += nombre
    valeurFinal = nombre    
}

// Additionner les nombres
function additionner (calcul){
    ecran.value = calcul
    afficheBas += calcul
    // afficher 2 em input
    inputFinal.value = valeurFinal
    
     //ecran.value = eval(ecran.value) 

    // valeurFinal += calcul
    // inputFinal = eval(afficheBas)
    // console.log(afficheBas);
}
// Soustraction
function soustraire(calcul){
     ecran.value = calcul
    afficheBas += calcul
    
    inputFinal.value = valeurFinal
}

// division les nombres

function diviser(calcul) {
    ecran.value = calcul
    afficheBas += calcul

    inputFinal.value = valeurFinal
    
}

// multiplier les nombres

function multiplier(calcul) {
    ecran.value = calcul
    afficheBas += calcul
    inputFinal.value = valeurFinal
    
}

 function resultat(nombre){
    // console.log(afficheBas);
      ecran.value = eval(afficheBas)
      resultat.addEventlistener('click', () =>{
        ecran.value += nombre
        // afficheBas += calcul;
       })
 }

 







































































































































































