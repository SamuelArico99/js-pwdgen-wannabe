// Inizio

// Chiedi il suo nome
const nome = prompt('Quale è il tuo nome?');
console.log(nome);
console.log(typeof nome);
// Chiedi il suo cognome
const cognome = prompt('Quale è il tuo cognome?');
console.log(cognome);
console.log(typeof cognome);
// Chiedi colore preferito
const colore = prompt('Quale è il tuo colore preferito?');
console.log(colore);
console.log(typeof colore);
// Scrivi sulla pagine nomecognomecolorepreferito21
let password = nome + cognome + colore + '21';
console.log(password)
console.log(typeof password);

document.getElementById('info').innerHTML = password;
// Fine