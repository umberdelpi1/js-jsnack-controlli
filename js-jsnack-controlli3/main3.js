// Chiedere all'utente per 5 volte di inserire un numero
var numero1 = parseInt(prompt("Inserisci il primo numero: "));
var numero2 = parseInt(prompt("Inserisci il secondo numero: "));
var numero3 = parseInt(prompt("Inserisci il terzo numero: "));
var numero4 = parseInt(prompt("Inserisci il quarto numero: "));
var numero5 = parseInt(prompt("Inserisci il quinto numero: "));
var sum = numero1 + numero2 + numero3 + numero4 + numero5;

console.log("Primo numero: " + numero1);
console.log("Secondo numero: " + numero2);
console.log("Terzo numero: " + numero3);
console.log("Quarto numero: " + numero4);
console.log("Quinto numero: " + numero5);
console.log("Il risultato è: " + sum);


// Out-put Stampa da parte del software la somma di tutti i numeri
document.getElementById('somma').innerHTML= "La somma è: " + sum;
