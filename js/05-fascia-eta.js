// Traccia 05 · La fascia d'età
// La consegna è nel README, alla voce "05 · La fascia d'età".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaFasciaEta
  Di quali dati ha bisogno? 1, l'eta
  Deve restituire qualcosa? la sua fascia d'eta;
  Di che tipo? tipo stringa.

  STEPS
  1- verificare che l'età sia superiore o uguale a zero, se è meno di zero risulterà età non valida;
  2- se l'età è minore uguale di 17, risulterà Minorenne;
  3- se l'età è minore uguale di 35, risulterà Giovane Adulto;
  4- se l'età è minore uguale di 60 risulterà Adulto;
  5- se l'età è maggiore di 60 risulterà Senior.
*/

// # La funzione
function trovaFasciaEta(eta) {
  if (eta < 0) {
    return "Età non valida";
  }
  else if (eta < 18) {
    return "Minorenne";
  }
  else if (eta <= 35) {
    return "Giovane Adulto";
  }
  else if (eta <= 60) {
    return "Adulto";
  }
  else {
    return "Senior";
  }
}


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

