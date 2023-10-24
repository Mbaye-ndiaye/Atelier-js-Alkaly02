// fetch

// document.getElementById('cp').addEventListener('input', function() {

//      if(this.value.length == 5) {
//          let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}`
//         fetch(url)
//         .then((response) => response.json()
//         .then((data) => {
//         console.log(data);
//         let affichage = `<ul>`;
//         for (let ville of data){
//             affichage += `<li><strong>${ville.nom}</strong> - ${ville.population} habitants </li>`

//              affichage += `<li>${ville.code}</li>`
//         }
//         affichage += `</ul>`
//         document.querySelector('#villes').innerHTML = affichage;
//     })
//     );
//      }
//  })




const myCol = document.getElementById('col')
const postal = document.getElementById('cp').addEventListener('input', function() {

    if(this.value.length == 5) {
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}`;

        fetch(url)
        .then((r) => r.json()
        .then((data) => {
            console.log(data)



            
            for (let ville of data) {
                const col = document.createElement('col-md-3')
                col.innerHTML = `
                <td>${ville.nom}</td>`
                myCol.appendChild(col)
                
            }
            
            // document.getElementById('villes').innerHTML = affiche;


        })
        )




    }

})
