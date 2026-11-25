// Traccia 04 · Dal voto al giudizio
// La consegna è nel README, alla voce "04 · Dal voto al giudizio".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaGiudizio
  Di quali dati ha bisogno? voto
  Deve restituire qualcosa? giudizio 
  Di che tipo? string

  STEPS
  1 - verificare che il voto sia maggiore uguale di uno e minore uguale di 10, se il voto non è tra questi deve risultare Voto non valido;
  2 -
  3 -
*/

// # La funzione
function trovaGiudizio(voto)
if (voto > 10 || voto < 1) {
  return "Voto non valido";
}
else if (voto < 5) {
  return "Gravemente insufficiente";
}
else if (voto < 6) {
  return "Insufficiente";
}
else if (voto < 7) {
  return "Sufficiente";
}
else if (voto < 8) {
  return "Buono";
}
else {
  return "Ottimo";
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

