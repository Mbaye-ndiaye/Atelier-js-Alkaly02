// const lists = document.getElementById("lists")

// const liNode = document.createElement("li");

// const textnode = document.createTextNode("Atelier meet");

// // liNode.append(textnode)

// // lists.appendChild(liNode)

// // console.log(liNode);
// le regle du DOM
 //<li>Atelier meet</li>
 //CREER <li></li> : document.createElement("li")

 //CREER LE TEXT A INSERER DANS <li></li> : document.createTextNode("Atelier meet");
 
 //AJOUTER(append) LE TEXT DANS LE NODE <li></li> 



// // node.appendChild(textnode);
// // document.getElementById("myList").appendChild(node);

// function insererLiNode(textAInserer) {
//     const liNode = document.createElement("li");

//     const textnode = document.createTextNode(textAInserer);

//     liNode.append(textnode)

//     lists.append(liNode)
// }

// insererLiNode("On fait un meet 1") // p
// insererLiNode("On fait un meet 2") // div
// insererLiNode("On fait un meet 3") // li
// insererLiNode("On fait un meet 4") // section
// insererLiNode("On fait un meet 5")
// insererLiNode("On fait un meet 6")
// insererLiNode("On fait un meet 7")
// insererLiNode("On fait un meet 8")



//    const main = document.getElementById('class');

//    function afficher(codes, nom) {

//        const code = document.createElement(codes)

//        const textCode =  document.createTextNode(nom)

//        code.append(textCode);

//        main.append(code)
//    }



 
//  afficher('p', "On fait Un meet");
//  afficher('div', "On fait Un meet");
//    afficher('section', "On fait Un meet");
//    afficher('li, "On fait Un meet')

// Demande a l'utilisateur de saisir une balise et un text

  // const div = document.getElementById('class')

  // function element (balise, text) {

   
  //       const code = document.createElement(balise);

  //       const textBalise = document.createTextNode(text);

  //       code.append(textBalise);

  //       document.getElementById("class").append(code)

  //       main.append(code);
      
  
  // }


  let balise = prompt("Saisir un div");
  let a = ['div', 'a', 'p', 'li', 'span', 'section', 'ol', 'ul', 'input', 'label'];
  
  if (a.includes(balise)){

  alert('ceci : '+'<{balise}> '+' est une balise Html')

  }else {

  alert('ceci n\'exite pas')
}
 






















