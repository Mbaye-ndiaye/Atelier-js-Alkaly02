const main = document.getElementById('class');
function afficher(codes, nom) {
    const code = document.createElement(codes)
    const textCode =  document.createTextNode(nom)
    code.append(textCode);
    main.append(code)
}

afficher('p', "On fait Un meet");
afficher('div', "On fait Un meet");
afficher('section', "On fait Un meet");
afficher('li', "On fait Un meet");

// const main = document.getElementById('class');

// function afficher(balises, nom) {
//    const balise = document.createElement(balises)

//    const textBalise = document.createTextNode(nom);

//    balise.append(textBalise);
//     main.append(balise)
// }

// afficher('h1',"ok");

