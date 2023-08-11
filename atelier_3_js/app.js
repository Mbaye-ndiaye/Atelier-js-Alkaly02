//selectionner element html
const questionContainer = document.querySelector('.click-event');
//recupere un element HTML
 const btn1 = document.querySelector('#btn-1')
// utiliser un evenement MOUSEOVER
btn1.addEventListener('mouseover', () =>{
    //ajouter une class
    questionContainer.classList.add('btn1')
});
// console.log(btn);
//  utiliser un evenement MOUSEOUT
btn1.addEventListener('mouseout', () =>{
btn1.style.background = "blue"
    questionContainer.classList.remove('btn1')
});
//------------------PARTIE BTN2--------------------------------
const mouvein = document.querySelector('.click-event');
const btn2 = document.querySelector('#btn-2')
btn2.addEventListener('mouseover', () => {
    // ajouter une couleur 
    mouvein.style.background = 'blue';
    // ajouter une class
    mouvein.classList.add('btn2')
});
btn2.addEventListener('mouseout', () => {
    mouvein.style.background = 'blue';
    mouvein.classList.remove('btn2')
});
//--------------------PARTIE BTN3-----------------------------------------
const mouve = document.querySelector('.click-event');
const btn3 = document.getElementById('btn-3')
btn3.addEventListener('mousemove', () => {
    mouve.style.background = 'red'
    mouve.classList.add('btn3')
});
btn3.addEventListener('mouseleave', () => {
    mouve.style.background = 'red'
    mouve.classList.remove('btn3')
});

//-----------------------PARTIE BTN4-----------------------------------------------------
const mouve2 = document.querySelector('.click-event');
const btn4 = document.querySelector('#btn-4');
btn4.addEventListener('mouseover', () => {
    mouve.style.background = 'pink'
    mouve2.classList.add('btn4');
});
btn4.addEventListener('mouseout', () => {
    mouve.style.background = 'pink'
    mouve2.classList.remove('btn4')
});

const container = document.querySelector('.click-event');
const btn5 = document.querySelector('#btn-5');
btn5.addEventListener('mouseover', () => {
    //Ajouter une couleur
    container.style.background = 'green';
    container.classList.add('btn5')
});

btn5.addEventListener('mouseout', () => {
     //Ajouter une couleur
     container.style.background = 'green';
     btn5.style.hover = 'green';
    container.classList.remove('btn5')
});































// //=====================PARTITE 01=========================================
// // selectionner element HTML
// const mouvement = document.querySelector('.item1');
// // console.log('click');
// mouvement.addEventListener('click', () => {
//     // Ajouter un class css dans le js
//     mouvement.classList.add('element1')
// })

// mouvement.addEventListener('mouseout', () => {
//     // utiliser un mouvement CLICK
//     mouvement.classList.remove('element1')
// })
// //=======================PARTIE 02=======================================================
// // selection element HTML
// const mouvein = document.querySelector('.item2')
// // utiliser un mouvement CLICK
// mouvein.addEventListener('click', () => {
//     // Ajouter un class css dans le js
//     mouvein.classList.add('element2')
// });
// mouvein.addEventListener('mouseleave', () => {
//     // Ajouter un class css dans le js
//     mouvein.classList.remove('element2')
// });
