// recuperer les elements d'un input

// const myForm = document.getElementById('myForm');
// const myBouton = document.getElementById('click')

// myForm.addEventListener('submit', function(e) {
//     const myInput = document.getElementById('usernam')
//     if (myInput.value === "") {
//         const myError = document.getElementById('error')
//         myError.innerHTML = 'Le champ usernam est requis!'
//         // myError.style.color = 'red ';
        
//         myError.style.color = 'red'
//         console.log(e);
//         e.preventDefault();


//     }

// })


















const myForm = document.getElementById('myForm');

const myInput = document.getElementById('usernam');



myForm.addEventListener('submit', function(e) {
    let myRegex = /^[a-zA-Z-\s]+$/;
    if (myInput.value == "") {
        
        const myError = document.getElementById('error');
        myError.innerHTML = 'Input doit remplir';
        myError.style.color = 'red';
        e.preventDefault();

    } else if (myRegex.test(myInput.value) == false) {
        const myError = document.getElementById('error');
        myError.innerHTML = 'Le nom doit comporter des lettres, des tirets uniquement';
        myError.style.color = 'red';
        e.preventDefault();

    }
    
})