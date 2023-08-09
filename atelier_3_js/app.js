//selectionner element html
const questionContainer = document.querySelector('.click-event');

// utiliser un evenement MOUSEOVER
questionContainer.addEventListener('mouseover', () =>{
    //ajouter une class
    questionContainer.classList.add('border')
})

//  utiliser un evenement MOUSEOUT
questionContainer.addEventListener('mouseout', () =>{
    //ajouter une class
    questionContainer.classList.remove('border')
})