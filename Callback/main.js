// function myFirst() {

//     myDisplayer("Hello");
//     // return myDisplayer
    
// }

// // console.log(myDisplayer);

// function mySecond() {
//     myDisplayer("GoodBye");
    
// }

// myFirst();
// mySecond();

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some
}

function myCalculator(num1, num2) {

    let sum = num1 + num2;
    return sum
    
}

const resultat = myCalculator(5, 5);
myDisplayer(resultat)

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some
}
function myCalculator(num1, num2) {

    let sum = num1 + num2;
    myDisplayer(sum);
    
}

myCalculator(7, 5);