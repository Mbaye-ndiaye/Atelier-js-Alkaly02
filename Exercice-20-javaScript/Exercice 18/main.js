let html = '<ul>';
let nombre = 10;
let nombre2 = 0;
for(let i = 0;i < nombre;i++) {
   let nombre3 = Math.floor(Math.random() * 11);
   if(nombre3 == 10) {
      nombre2++;
   }
   html = html + '<li>' + nombre3 + '</li>';
}
html = html + '</ul>';
html = html + '<p>Il y a eu ' + nombre2 + ' tirages de 10.</p>'
document.body.innerHTML = html;