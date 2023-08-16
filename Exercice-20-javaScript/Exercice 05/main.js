 let prixHt = prompt('Entrez un montant HT');
 let tauxTva = prompt('Entrez la Tva'); 
 let tva = 0.2;

 let prixTtc = prixHt * tauxTva;
 document.body.innerText = prixTtc;