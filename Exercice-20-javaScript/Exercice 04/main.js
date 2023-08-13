let prixHt = prompt('Entrez un montant')
let tva = 20 / 100;

let totalSomme = prixHt * tva;
document.body.innerHtml = totalSomme;