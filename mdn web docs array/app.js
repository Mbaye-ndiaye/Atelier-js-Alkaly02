// creer un tableau
let fruits = ['Apple' , 'Banana'];
console.log(fruits.length);

// Accéder (via son index) à un élément du tableau

let firts = fruits[0];
//Apple
let last = fruits[fruits.length - 1];
//Banana


// Boucler sur un tableau

fruits.forEach(function(item, index, array){
    console.log(item, index);
});
//Apple 0
//Banana 1

// Ajouter à la fin du tableau

let newLength = fruits.push('Orange');
//["Apple", "Banana", "Orange"]

// Supprimer le dernier élément du tableau

 let last = fruits.pop(); 
// supprime Orange (a la fin)
// ["Apple", "Banana"];

// Supprimer le premier élément du tableau

let first = fruits.shift(); //supprime Apple (au debut)
//["Banana"];

// Ajouter au début du tableau

let newlength = fruits.unshift('Strawberry')
//ajoute au debut
//["Strawberry", "Banana"];l

// Trouver l'index d'un élément dans le tableau

fruits.push('Mango');
//["Strawberry", "Banana", "Mango"]

let pos = fruits.indexof('Banana')

// Supprimer un élément par son index

let removedItem = fruits.splice(pos, 1);


// Supprimer des éléments à partir d'un index

let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
//["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1, n = 2;

let removedItem = vegetables.splice(pos, n);
//n defint le nombre d'elements a supprimer,
// a partir de la positon pos
console.log(vegetables);
// ["Cabbage", "Carrot"] (le tableau d'origine est changé)

console.log(removedItem);
//["turnip", "Radish"] (splice retourne la liste des elements supprimes)

// Copier un tableau

let shallowCopy = fruits.slice();
//creer un nouveau tableau qui contient les elements de fruits

// ["strawbeery", "Mango"]

// Accéder aux éléments d'un tableau

let arr = ["le dernier element", "le deuxieme element", 
"le troisieme element"];
console.log((arr[0])); 
// affiche "le premier element"
console.log(arr[1]);
// affiche "le deuxieme element"
console.log(arr[arr.length -1]);
//affiche le dernier element