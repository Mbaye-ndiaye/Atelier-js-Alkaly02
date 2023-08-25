let nombre = '<table>'

let lignes = 10;
let colonnes = 7;

for (let i = 1; i <= lignes; i++){

    nombre = nombre + '<tr>'
    
    for (let j = 1; j < colonnes; j++) {
        
        nombre = nombre + <td>tableau</td>
        
    }
}
nombre = nombre + '</table'
document.body.innerHTML = nombre;