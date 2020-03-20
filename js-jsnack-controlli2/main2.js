// inserire due var per stabilire due parole
var text;

// prima parola inserita dall'utente
var parola1 = prompt("Inserisci una parola: ");

// seconda parola inserita dall'utente
var parola2 = prompt ("Inserisci nuovamente una parola: ");

// console per visualizzazione
console.log("Parola primo utente: " + parola1.length);
console.log("Parola secondo utente: " + parola2.length);

if (parola1.length > parola2.length) {
  text = parola2 + parola1
} else if (parola2.length > parola1.length) {
  text = parola1 + parola2
}

// Out-put
document.getElementById("parola").innerHTML = text;
