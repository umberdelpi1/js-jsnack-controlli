
// Msg di benvenuto (fuori ex)
var nomeUtente = prompt("Inserisci il tuo nome")
alert(" Ciao ti diamo il benvenuto " + nomeUtente)

// creare due prompt per inserire due numeri

var numero1 = parseInt(prompt("Inserisci un numero "));
var numero2 = parseInt(prompt("Inserisci nuovamente un numero"));
var numeroMaggiore;

console.log("Primo numero inserito: " + numero1);
console.log("Secondo numero inserito: " + numero2);

if (numero1 > numero2) {
  numeroMaggiore = "Il numero maggiore è: "
} else if (numero2 > numero1) {
  numeroMaggiore = "Il numero maggiore è: "
}
// Output software
document.getElementById('js-id').innerHTML="Il numero maggiore è: " + numeroMaggiore;
