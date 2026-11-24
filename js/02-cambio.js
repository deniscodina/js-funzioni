// Traccia 02 · Il cambio in aeroporto
// La consegna è nel README, alla voce "02 · Il cambio in aeroporto".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? calcolaDollariRicevuti
  Di quali dati ha bisogno? importoIniziale, tassoDiCambio, commissioneFissa
  Deve restituire qualcosa? deve restituire il totale dei soldi convertiti in dollari, ma prima si sottrae la somma della commissione fissa.
  Di che tipo? number

  STEPS
1 - Verificare che l'importo iniziale in euro sia maggiore della commissione fissa. Se non è sufficiente, restituire 0.

2-  Sottrarre la commissione fissa dall'importo iniziale.

3 - Convertire gli euro rimanenti in dollari, applicando il tasso di cambio e restituire il risultato.

*/

// # La funzione
function calcolaDollariRicevuti(importoIniziale, commissioneFissa, tassoDiCambio) {
  if (importoIniziale <= commissioneFissa) return 0;
  let euroRimanenti = importoIniziale - commissioneFissa;
  let dollariRicevuti = euroRimanenti * tassoDiCambio;
  return dollariRicevuti;
}
console.log(calcolaDollariRicevuti(100, 1.08, 5));
let dollariRicevuti = calcolaDollariRicevuti(100, 1.08, 5);
console.log(dollariRicevuti.toFixed(2));
console.log(`100 € diventano ${dollariRicevuti.toFixed(2)} $`);
// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

