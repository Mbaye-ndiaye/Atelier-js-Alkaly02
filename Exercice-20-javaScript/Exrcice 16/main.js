function nombre() {
    let randomNr = Math.floor(Math.random() * 100);
    let guess;

    do{
        guess = prompt("Devine un nombre entre 1 et 100");
        console.log(guess, randomNr);

        if (randomNr > guess){
            console.log("trop petit !");


        } else if (randomNr < guess) {
             console.log("Trop grand !");
        }


    } while (guess != randomNr){
        console.log(gagné);
    }

   
    
 }
 nombre();
