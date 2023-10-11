const avoiUnvelo = new Promise((resolve, reject) => {

    let moyenne = 15;

    if(moyenne < 10){
        return('')
    }
})
/*
Division de a/b avec b!=0
*
 */


//  const division =   new Promise((Resolve, Reject) => {
//      let a = 8;
//      let b = 2;
//      let somme = a / b
//      if(b === 0){
//          return Reject('b est different a zero')
//      } 
    
//      Resolve(somme)

//  })
//  division
//  .then((res) =>{
//      console.log(res);
//  }).catch((err) => {
//  console.log(err);
//  })


// promise sans fonction

  let a = Number(prompt('enter a'))
  let b = Number(prompt('enter b'))

  const division = (a, b) => {
      return new Promise ((resolve, reject) => {
          if(b !== 0) {
              return resolve(a + ' / ' + b + ' = ' + a / b)
          }

          reject('le b doit diffrent a Zero' )
      })
  };

  division(a, b)
  .then(res => {
      console.log(res);
  })
  .catch(err => {
      console.log(err);
  })





// const division = new Promise((resolve, reject) => {
//     let a = 10;
//     let b = 2;
//     let somme = a / b;
//     if (b == 0)  {
//         return reject("b doit different a zero")
//     }

//     resolve(`voivi le resultat du division : ${somme}`)
// })
// division
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })


// DIVISION
// const division = (a, b ) => {
//     return new Promise ((resole, reject) => {

//         if(b !== 0){
//             resole(a +' / ' + b + ' = ' + a / b)
//         }

//         reject('b doit different a zero')
//     })
// }
// division(20, 2)
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err);
// })

// MULTIPLICATION
//let a = Number(prompt('enter a'))
 // let b = Number(prompt('enter b'))
// const multiplication = (a , b ) => {
//     return new Promise ((valid, reject) => {
//         let egal = a * b
//         if (b == 0 ){

            
            
//             return reject('b doit difference a zero')

//         }

//         valid(`voici le resultat : ${egal}`)
//     })
// }
// multiplication(a, b)
// .then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// })

// soustraction
//let a = Number(prompt('enter a'))
//let b = Number(prompt('enter b'))
//  const soustraction = (a , b ) => {
//      return new Promise ((valid, reject) => {
//          let differ = a - b
//          if (a < b  || a <= 0){

            
            
//              return reject('a doit supperieur a b')

//          }

//          valid(`voici le resultat : ${differ}`)
//      })
//  }
//  soustraction(7, 2)
//  .then(res => {
//      console.log(res);
//  })
//  .catch(err => {
//      console.log(err);
//  })


 // Addition
//let a = Number(prompt('enter a'))
//let b = Number(prompt('enter b'))
 // const addition = (a , b ) => {
//     return new Promise ((valid, reject) => {
//         let somme = a + b
//         if (somme <= 1 ){

            
            
//             return reject('somme doit depasser a 1')

//         }

//         valid(`voici le resultat : ${somme}`)
//     })
// }
// addition(3, 2)
// .then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// })








// a + ' * ' + b + ' = ' + a * b