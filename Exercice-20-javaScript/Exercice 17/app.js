function nombre() {
    let randomNr = Math.floor(Math.random() * 11);
    let guess;

    do{
        guess = prompt("Devine un nombre entre 1 et 100");
        console.log(guess, randomNr);

        if (randomNr == 10){
            console.log("Le nombre de dix fait partie du tirage!");


        }


    } while (guess != randomNr){
        console.log(gagné);
    }

   
    
 }
 nombre();

 document.body.innerHTML = nombre;