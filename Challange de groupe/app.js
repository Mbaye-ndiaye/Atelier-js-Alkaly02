const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

const dayOutput = document.querySelector("#DD");
const monthOutput = document.querySelector("#MM");
const yearOutput = document.querySelector("#YY");

const btn = document.querySelector(".sumbit_btn");

let aujourdhui = new Date();
let moisActuel = 1 + aujourdhui.getMonth();
let jourActuel = aujourdhui.getDate();
let anneeActuel = aujourdhui.getFullYear();



function validate() {
  const inputs = document.querySelectorAll("input");
  let validation = true;

  inputs.forEach((element) => {
    let parent = element.parentElement;

    // console.log(parent);
    if (element.value == "") {
        element.style.borderColor = "red";
        parent.querySelector("small").innerText = "remplir ce champ";
        validation = false
    }

  
      if(yearInput.value > anneeActuel) {
        yearInput.style.borderColor = 'red';
        yearInput.parentElement.querySelector("small").innerText =

        "Annees non valide"
        validation = false
    }

      
    else{
        validation = true;
        yearInput.style.borderColor = "black";
        parent.querySelector("small").innerText = "";  
    }

     if (monthInput.value > 12 || (monthInput.value > 
        moisActuel && yearInput.value >= anneeActuel)) {
            monthInput.style.borderColor = 'red';
            monthInput.parentElement.querySelector("small").innerText = 
            "Mois non valide";
            validation = false
        }
          
    else{
        validation = true;
        monthInput.style.borderColor = "black";
        parent.querySelector("small").innerText = "";    
    }

         if (dayInput.value > 31 || (dayInput.value > jourActuel
            && yearInput.value == anneeActuel && monthInput.value >= moisActuel)) {
                dayInput.style.borderColor = 'red';
                dayInput.parentElement.querySelector("small").innerText =  
                "Jour non valide" ;
                validation = false;
            }
              
    else{
        validation = true;
        dayInput.style.borderColor = "black";
        parent.querySelector("small").innerText = "";  
    }        
  });

  return validation
}

// function calcul

 function calculAge() {

     if (validate) {



         if (dayInput.value > jourActuel) {

         }


         yearOutput.innerHTML = anneeActuel - yearInput.value 

         monthOutput.innerHTML = moisActuel

         monthInput.value;

         dayOutput.innerHTML = jourActuel - dayInput.value
        
     }

    
 }

 if (ageEnJours < 0) {
     ageEnMois--;
     ageEnJours += joursDansMois(moisActuel - 1, anneeActuel);
 }

 if (ageEnMois < 0) {
     ageEnAnnees--;
     ageEnMois += 12;
 }

 function joursDansMois(mois, annee) {
     const mois31Jours = [1, 3, 5, 7, 8, 10, 12];
     const mois30Jours = [4, 6, 9, 11];

     if (mois === 2) {
         if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
             return 29; // Février en année bissextile
         } else {
             return 28; // Février en année non bissextile
         }
     } else if (mois31Jours.includes(mois)) {
         return 31;
     } else if (mois30Jours.includes(mois)) {
         return 30;
     }
 }

















































