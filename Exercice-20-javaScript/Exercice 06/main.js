let prixHt = prompt('montant Ht')
let tva = prompt('taux de tva')

let prixTtc = prixHt * 0.2

document.body.innerText = prixTtc;

if(prixTtc > 100){
    alert('rouge')
}else{
    alert('vert')
}

