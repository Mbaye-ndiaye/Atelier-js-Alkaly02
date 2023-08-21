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
    
    // ecran.value = eval(ecran.value) 

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

function supprime() {
    valeurFinal.value = '';
    ecran.value = '';
    afficheBas = "";
}

 function resultat(){
    // console.log(afficheBas);
      ecran.value = eval(afficheBas)
 }

 




















































// document.addEventListener('keydown', (ecran) => {
//      touches.innerHtml = ecran;
//  })

// document.addEventListener('click', (e) => {
//      const valeur = e.target.dataset.key;
//      calculer(valeur);
    
//  })

//  const calculer = (valeur) => {
//      if (isteKeycodel.includes(valeur)) {
        
//           switch (valeur) {
          
//               case '103':
//                   ecran.textContent = "";
//                   break;

//               case '101':

//                   const calcul = eval(ecran.textContent);
//                   ecran.textContent = calcul;
//                   break;
//               default:
//               const indexKeycode = listeKeycode.indexOf(valeur);
//               const touche = touches[indexKeycode];
//               ecran.textContent += touche.innerHtml;
//           }
//      }
//  }


