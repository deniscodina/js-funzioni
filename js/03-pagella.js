// Traccia 03 · Lo scritto vale doppio
// La consegna è nel README, alla voce "03 · Lo scritto vale doppio".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? la funzione si chiama calcolaMediaPonderata.
  Di quali dati ha bisogno? votoScritto e votoOrale;
  Deve restituire qualcosa? deve restituire la media.
  Di che tipo? dato tipo: number.

  STEPS
  1 -Moltiplicare o sommare due volte il votoScritto, il totale del votoScritto sommare il votoOrale.
  2 -il risultato della somma diviso 3.
  3 - verificare risultato media.
*/

// # La funzione
function calcolaMediaPonderata(votoOrale, votoScritto) {
  const media = (votoScritto * 2 + votoOrale) / 3;
  return media;
}
let media = calcolaMediaPonderata(6, 9);
console.log(`Media: ${media.toFixed(1)}`);
console.log(`Media: ${calcolaMediaPonderata(9, 6).toFixed(1)}`);
console.log(`Media:${calcolaMediaPonderata(8, 6).toFixed(1)}`);
console.log(`Media:${calcolaMediaPonderata(5, 8).toFixed(1)}`);
console.log(`Media:${calcolaMediaPonderata(10, 10).toFixed(1)}`);

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

