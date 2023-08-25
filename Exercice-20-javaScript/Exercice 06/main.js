let prixHt = prompt('montant Ht')
let tva = prompt('taux de tva')


let prixTtc = prixHt * 0.2


if(prixTtc > 100){
    document.body.innerHTML = '<h1 style="color: red;">' + prixTtc + '</h1>';
    
} else{
   document.body.innerHTML = '<h1 style="color: green;">' + prixTtc + '</h1>';
}




