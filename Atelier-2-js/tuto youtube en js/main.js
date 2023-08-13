// Commentaire en js

//Ceci commentaire

/*Ceci 
est 
un 
commentaire*/

// les syntaxe
// -------------------les variables-----------------------
//  variable: est un space dans le  quel on stock les choses
var unTexte = "Voici un  texte";

 console.log(unTexte);

 unTexte = "Nouveau texte...";

console.log(unTexte);
/* const c'est quelques choses qui ne bougera jamais*/

const prenom =" Mbaye";

prenom = "Mbaye"
console.log(prenom);

let unChiffre = 24;

unChiffre = 12;

console.log('unChiffre');


// ---------------------------la concatenation-----------------------------------

let chiffre = 47;

let nouvelleChaine = 'Le chiffre attendu est: ${chiffre} degres';
console.log(nouvelleChaine);


//------------------les types de donnees----------------------------------------------

let string = "je suis une cahine";
let number = 24;
let boolean = true;
// crochet tableau
let array = ["je", "suis", 24, false];
// objet accolade
let object = {
    prenom: "mbaye",
    age: 34,
    ville: "Dakar",
};
console.log(typeof array);

let arbre = null;

console.log(arbre);

// ---------------------------les operateurs------------------------------//
/*let total = 2;
let x = 4
 total = total + 1;
total ^= 5;
console.log(total)*/

/*let x = 6;
let y = "5";

if (x === y ) {
    console.log("true !");
}else if (x == y) {
    console.log("x et y egaux en valeur");
}else{
    console.log(x + " et " + y + " ne sont pas du tout egaux");
    console.log('${x} et ${y}  ne sont pas du tout egaux');
}*/
    

// les structures de controles

let a = 4;
let b = "5";
if (a < b) {
    console.log("a est inferieur a b");
}else {
    console.log("a est superieur a b ");
}

// !=
if(!a){
    console.log("a existe");
}

// === == || &&

if (a === b || a > 3){
    console.log("true")
}else{
    console.log("false");
}
if(a !== b){
    console.log("true");
}else{
    console.log("false");
}


// -----------------------------les fonctions---------------------------------------------

function faireQuelqueChose (){
    console.log("je fais un truc !");
    console.log("trop cool");
}
 faireQuelqueChose();

const faireUneTache = (tache) =>{
    console.log("je fais:" + tache);
};
faireUneTache("les courses");*/

function add2() {
    let a = 4;
    console.log(a);
    return a + 2;
   
}
add2();


// les formules de functions:
(function maFormation() {
    console.log('je me joue toute seule');
})();

(() =>{
    console.log("je me joue aussi toute seule");
})();

/*let total = 0;

function addition(x) {
    total += x;
    return total;
}

function soustraction(x) {
    total -= x;
    return total;
}
function division(x) {
    if (total === 0) {
        return (total = x);
    }else{
        total /= x;
    }
    return total;
}

function multiplication(x) {
    if (total === 0) {
        return (total = x);
    }else{
        total *= x;
    }
    return total;
}*/


// Travaillez sur les fonctions



