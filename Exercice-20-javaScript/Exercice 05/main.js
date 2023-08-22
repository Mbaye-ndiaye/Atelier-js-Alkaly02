 let prixHt = prompt('Entrez un montant HT');
 let tauxTva = prompt('Entrez la Tva'); 
 

 let prixTtc = prixHt * 0.2;
 document.body.innerText = prixTtc;