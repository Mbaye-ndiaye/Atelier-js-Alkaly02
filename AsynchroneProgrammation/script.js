

 //const division = new Promise((resolve, reject) => {
//      let a = 10;
//      let b = 2;
//      let somme = a / b;
//      if (b == 0)  {
//          return reject("b doit different a zero")
//      }

//      resolve(`voivi le resultat du division : ${somme}`)
 
//  division
//  .then((res) => {
//      console.log(res);
//  })
//  .catch((err) => {
//      console.log(err);
//  })


// DIVISION
  const division = (a, b ) => {
      return new Promise ((resole, reject) => {

          if(b !== 0){
              resole(a +' / ' + b + ' = ' + a / b)
          }

          reject('b doit different a zero')
      })
  }
  division(20, 2)
  .then(res => {
      console.log(res)
  })
  .catch(err => {
      console.log(err);
  })

 // MULTIPLICATION
 let a = Number(prompt('enter a'))
   let b = Number(prompt('enter b'))
  const multiplication = (a , b ) => {
      return new Promise ((valid, reject) => {
          let egal = a * b
          if (b == 0 ){

            
            
              return reject('b doit difference a zero')

          }

          valid(`voici le resultat : ${egal}`)
      })
  }
  multiplication(a, b)
  .then(res => {
      console.log(res);
  })
  .catch(err => {
      console.log(err);
  })

 //SOUSTRACTION
  let number = Number(prompt('enter a'))
  let numers = Number(prompt('enter b'))
  const soustraction = (number , numers ) => {
      return new Promise ((valid, reject) => {
          let differ = number - numers;
          if (number < numers  || number <= numers){

            
            
              return reject('a doit supperieur a b')

          }

          valid(`voici le resultat : ${differ}`)
      })
  }
  soustraction(number, numers).then(res => {
      console.log(res);
  })
  .catch(err => {
      console.log(err);
  })




 // ADDITION
 let num = Number(prompt('enter a'))
 let num2 = Number(prompt('enter b'))
   const addition = (num , num2 ) => {
      return new Promise ((valid, reject) => {
          let somme = num + num2
          if (somme <= 1 ){

            
            
              return reject('somme doit depasser a 1')

          }

          valid(`voici le resultat : ${somme}`)
      })
  }
  addition(num, num2).then(res => {
      console.log(res);
  })
  .catch(err => {
      console.log(err);
  })



// MODULO
 let x = Number(prompt('enter a'))
 let y = Number(prompt('enter b'))
   const modulo = (x , y ) => {
      return new Promise ((valid, reject) => {
          let somme = x % y
          if (somme <= 1 ){

            
            
              return reject('somme doit depasser a 1')

          }

          valid(`voici le resultat : ${somme}`)
      })
  }
  addition(x, y).then(res => {
      console.log(res);
  })
  .catch(err => {
      console.log(err);
  })







