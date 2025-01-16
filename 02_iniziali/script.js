/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function inizialeArray( array ){
let arrayNew = []
for (let i = 0; i < array.length ; i++) {
    arrayNew.push(array[i].charAt(0))
}
 console.log(`${ arrayNew }`)
}
// Invoca la funzione qui e stampa il risultato in console

inizialeArray( names )

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]