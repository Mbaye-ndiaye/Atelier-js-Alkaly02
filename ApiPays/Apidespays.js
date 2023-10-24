// mode dark
    const changer = document.getElementById('color')
    
     changer.addEventListener('click', function() {
         document.body.style.background = 'blue'
         
     })

const infos = document.getElementById('region');

 console.log(infos);

const capitalDiv = document.createElement('div');
// console.log(capitalDiv);
const flagDiv = document.createElement('div');
const countryDiv = document.createElement('div');
const continentDiv = document.createElement('div');

 function search() {
     let textCountry = document.getElementById('myInput').value

     countryDiv.innerHTML = `<span>pays</span><br><p>${textCountry}</p>`


    let url = "https://restcountries.com/v3.1/name/" + textCountry;
    fetch(url)
    .then(response => response.json()
    
    .then(data => {
        // console.log(data);

        const country = data[0]
        const flag = country.flags.svg
        const population = country.population;
        const continent = country.capital;

        flagDiv.innerHTML = `<span>pays</span><img src =" ${flag}" >`
        capitalDiv.innerHTML = `<span>capital</span><p>${population}</p>`
        continentDiv.innerHTML = `<span>pays</span><p>${continent}</p>`

        infos.appendChild(countryDiv)
        infos.appendChild(continentDiv)
        infos.appendChild(capitalDiv)
        infos.appendChild(flagDiv)


    }))
    
 }










































































































































    //  function chargerRegion() {
    // const affichage = document.getElementById('region')
    // const county = document.getElementById('myInput').value;
    // //  const flags = document.getElementById('div');

    //  let url = "https://restcountries.com/v3.1/all/" + county;
    //  fetch(url)
    //  .then(response => response.json()
    //  .then((data) => {
    //     console.log(data)
        
           

    //         for (let country of data) {
               
    //             const tab = document.getElementById('div');
    //             tab.innerHTML = `
    //             <span>${country.population}</span>`
    //             affichage.appendChild(tab)    
    //         }
           
            
        
        

    //  }))

    // }
    // chargerRegion
    

    
