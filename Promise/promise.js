// Creation d'une promesse

const USERS = [
    {id: 1, name: 'Toto'},
    {id:2, name: 'Tata'},
    {id:3, name: 'Tuto'}
];


  
const promiseGetUsers = new Promise((resolve, reject) => {

    if(USERS !== 'undefined') {
        resolve(USERS)
        

    } else {
        reject('Acces aus users impossible');
    }
    
});

promiseGetUsers
    .then(u => {
        let liste = `<ul>`
        u.forEach(element => {
           liste += `<li>${element.name}</li>`   
        });
        document.getElementById('users').innerHTML = liste
        liste += `</ul>`
        
       
        
      
    })
    .catch(error => {
        console.log(error);
    })















    // let liste = `<ul>`
    //     u.forEach(Element => {
    //        liste += `<li>${Element.name}</li>`
    //     })
    //     document.getElementById('users').innerHTML = liste
    //     liste += `</li>`








































// const promise = new Promise(function(resolve, reject) {

//     resolve('foo')
//     reject('bar')
// })
// promise 

//     .then(function(dataRsolve) {
//         console.log(dataRsolve);
//     })
//     .catch(function(dataReject) {
//         console.log(dataReject);
//     })








