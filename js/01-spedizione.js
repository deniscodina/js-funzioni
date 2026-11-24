// Traccia 01 · Lo stato della spedizione
// La consegna è nel README, alla voce "01 · Lo stato della spedizione".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? // trovaStatoSpedizione //
  Di quali dati ha bisogno? codiceStato (un numero -> valori ammessi: 1 (in elaborazione),2 (Spedito),3 (Consegnato), Stato sconosciuto-
  Deve restituire qualcosa? restituisce lo stato (stringa -> valori ammessi: quelli su)
  Di che tipo? stringa (testo)

  STEPS
  1 - Dichiaro la funzione trovaStatoSpedizione che ha come parametri: codiceStato
  2 - controllo il codiceStato
      SE codiceStato = 1 restituisco "In Elaborazione" 
      ALTRIMENTI SE codiceStato = 2 restituisco "Spedito"
      ALTERIMENTI SE codiceStato = 3 restituisco "Consegnato"
      ALTRIMENTI restituisco "Stato Sconosciuto"
  Nel programma principale:
  3- salvo in una variabile (let/const) il codice spedizione che mi passa l'utente
  4- Nel programma principale: Stampo in console il risultato di trovaStatoSpdizione (codiceInseritoDaUtente)
*/

// # La funzione
function trovaStatoSpdizione(codiceStato) {
  if (codiceStato === 1) return "In Elaborazione";
  else if (codiceStato === 2) return "Spedito";
  else if (codiceStato === 3) return "Consegnato";
  else return "Stato Sconosciuto";

}
const codiceInseritoDaUtente = parseInt(prompt("Inseriscimi il codice stato spedizione"));
console.log(trovaStatoSpdizione(codiceInseritoDaUtente));


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

