// DOM Manipulation

// GetElementById()

// const title = document.getElementById('main-heading');

// console.log(title);

// GetElementByClasName()

// const listItems = document.getElementsByClassName('list-items');

// console.log(listItems);


// GetElementByTagName()

// const listItems = document.getElementsByTagName('li');

// console.log(listItems);

// querySelector()

// const container = document.querySelector('div');

// console.log(container);

// querySelectorAll()

// const container = document.querySelectorAll('div');

// console.log(container);


//------------------------- style element---------------------------------------------

// const title = document.querySelector('#main-heading');

// title.style.color = 'red';


// const listItems = document.querySelectorAll('list-items');

// for (i = 0; i < listItems.length; i++){


//     listItems[i].style.fontSize = '5em';
// }

// console.log(listItems);


// creating elements 

// const ul = document.querySelector('ul');

// const li = document.createElement('li')

// Adding the text

// ul.append(li)

// Modifying  the text

// li.append = 'X-men';

// li.setAttribute('id', 'main-heading');

// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'));


// Modifying Attributes & Classes

// li.classList.add('list-items')

// console.log(li.classList.contains('list-items'));

// Remove element

// li.remove();


//--------------------- Travers the DOM-------------------------------

//-------- Parent Node Travail----------------------------------

// let ul = document.querySelector('ul');

// console.log(ul.parentNode.parentNode);

// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);

// Child Node Traversal----------------------------------------

// let ul = document.querySelector('ul');
// const div = document.querySelector('div')
// console.log(ul.childNodes);
// console.log(ul.firsChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'blue';
// console.log(ul.children);
// console.log(ul.firsElementChild);
// console.log(ul.lastChild);



// Sibling Node Traversal--------------------------



// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);



//------------------------------- Event Listeners-------------------------------------------------

// element.addEventListener("click", function);

// const bouttonTwo = document.querySelector('.btn-2');

//  function alertBtn () {
//      alert('I also JavaScript');
     
     
//  }

// bouttonTwo.addEventListener('click', alertBtn)


// Mouseover

// const newBackroundColor = document.querySelector('.box-3')
// function changeColor() {
//     newBackroundColor.style.backgroundColor = 'blue';
// };

// newBackroundColor.addEventListener("mouseover", changeColor)



//--------------------------- reveal Event--------------------------------------------

// const revealBtn = document.querySelector('.reveal-btn')

// const hiddenContent = document.querySelector('hidden-content')

// function revealContent() {
    
//     if(hiddenContent.classList.contains('reveal-btn')){
//         hiddenContent.classList.remove('reveal-btn')
//     }else{
//         hiddenContent.classList.add('reveal-btn')
//     }
// }

// revealBtn.addEventListener('click', revealContent);

// -----------------------Event Probagation----------------------------------

// window.addEventListener('click', function() {
//     console.log('Window');
// },false);

// document.addEventListener('click', function() {
//     console.log('Document');
// },false);

// document.querySelector(".div2").addEventListener('click', function() {
//     // e.stopProbagation()
//     console.log('DIV 2');
// },false);


// document.querySelector(".div1").addEventListener("click", function() {
//     console.log('DIV 1');
// },false);

// document.querySelector("button").addEventListener('click', function(e) {

//     e.preventDefault()
//     console.log(e.target.innerText = 'clicked!');
// },false);

// ---------------------Event Delegation-------------------------------------------
/*
It allows users to append a Single event listener to a parent element that
ads it to all of its present And future descendants that match a selector
*/
// ------------------------premier etap--------------------------

// document.querySelector('#football').addEventListener('click', function(e) {
//     console.log('football is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })


// document.querySelector('#basketball').addEventListener('click', function(e) {
//     console.log('basketball is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })


// document.querySelector('#boxing').addEventListener('click', function(e) {
//     console.log('tennis is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })


// document.querySelector('#tennis').addEventListener('click', function(e) {
//     console.log('tennis is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })


// document.querySelector('#golf').addEventListener('click', function(e) {
//     console.log('golf is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })


// -----------------------deuxiem etap--------------------------------
// document.querySelector('#sports').addEventListener('click', function(e) {
//     console.log(e.target.getAttribute('id') + ' is cliked');
    
//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey';
//     }
// })


// ------------------create element dans u sports----------------------------------
// const sports = document.querySelector('#sports');

// const newSport = document.createElement('li');


// newSport.innerText = 'rugby';

// newSport.setAttribute('id', 'rugby');

// sports.appendChild(newSport)




























































// const firstListItem = document.querySelector('list-items');

// console.log(firstListItem.innerText);
// console.log(firstListItem.innerContent);
// console.log(firstListItem.innerHtml);
 