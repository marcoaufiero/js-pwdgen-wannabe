let name = prompt('Inserisci il tuo nome');

let surname = prompt('Inserisci il tuo cognome');

let colore = prompt('Dimmi il tuo colore preferito');

const numeroFisso = 21;

document.getElementById('divPassword').innerHTML = `${name}${surname}${colore}${numeroFisso}`;