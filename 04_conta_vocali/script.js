/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
let vocali = ["a" ,"e" ,"i" ,"o" ,"u"]
console.log(vocali)
console.log(word.length)
// Dichiara la funzione qui.
function contatoreVocali (string){
    let vocaliPresenti=0;
    for (let i = 0; i < vocali.length; i++) {
       for (let count = 0 ; count < string.length; count++){
        if (vocali[i] === string.charAt(count) ){
            vocaliPresenti++
        }
       }
    }
    console.log(vocaliPresenti)
}

// Invoca la funzione qui e stampa il risultato in console

contatoreVocali(word)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)