const date = document.getElementById('anne')
const month = document.getElementById('month')
const jour = document.getElementById('jour')
const bouton = document.getElementById('sumbit')


let aujourdhui = new Date();
let moisActuel = 1 + aujourdhui.getMonth();
let jourActuel = aujourdhui.getDate();
let anneeActuel = aujourdhui.getFullYear();


function validate() {

    const inputs = document.querySelectorAll('input');

    let validation = true;

    inputs.forEach(element => {
        let parent = element.parentElement

        console.log(parent);

        if(element.value == ''){
            element.style.border
        }
    })
    
}