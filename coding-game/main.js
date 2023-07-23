//Créez une fonction puissance qui :
//prend deux arguments
//réalise le calcul du premier argument élevé à la puissance du deuxième sans utiliser les fonctions mahtématiques de JS
//Utilisez une boucle par exemple x^n = x * x * x *x * ... n fois

let episode = 0
let seasons = 0

function puissance (season,episode){
     result = 1;
    for(let i = 0; i < episode; i++){
        result *= seasons
    }
    return result
}
    
    console.log(12,7);
      


//On souhaite stocker les positions d"une série de 20 objets mobiles (mobs) dans un jeu vidéo. Pour cela on va créer 2 tableaux :
//posX qui contient la série des abscisses des objets
//posY qui contient la série des ordonnées des objets
//Créez une fonction initXY :
//qui prend en 1er argument l'abscisse du 1er objet
//qui prend en 2ème argument l'ordonnée du 1er objet
//qui calcule les abscisses et ordonnés des objects de la série sachant qu'il doivent être espacés de 40 pixels (+40) les uns des autres en abscisse et de 30 pixels (+30) en ordonné
function initXY(abscisses, ordonnes){
    const numerObjet = 20;
    const abscisses = 40;
    const ordonnes = 30;
    
     const posX = [abscisses];
     const posY = [ordonnes];

     if( i = 0, i=abscisses, i++){
        function initX();
        function initY();
     }
}


{
     
 }
 console.log(23, 45)








 //Modifiez un tableau avec push et pop
//On peut aussi manipuler les tableaux comme des flux en utilisant les fonctions pop, push, shift et unshift. Pour avoir les détails regardez dans cette documentation.
//Vous disposez d'un tableau contenant des nombres aléatoires et vous devez créer une fonction sortNumbers(tInit, tInf, tSup) qui va ranger :
//tous les éléments de tInit inférieurs à 10 dans le tableau tInf
//et tous les éléments de tInit supérieurs ou égaux à 10 dans le tableau tSup
// la fonction doit fonctionner quel que soit le tableau tInit


const tlnit = [ 2, 8, 6, 11, 5, 15, 18, 7]
const tInf = []
const tSup = []
function sortNumbers(tlnit, tlnf, tSup){
    for(const numbers of tlnit){
        if(tlnit >= tSup){
            tSup.push();
        }else{
            tlnf.push();
        }
    }
}
    sortNumbers(tlnit, tInf, tSup)

console.log(tlnit);
console.log(tInf);
console.log(tSup);

