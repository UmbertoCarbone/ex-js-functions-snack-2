// 🏆 Snack 1

//Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(a, b) {
    return a + b
}
console.log(`la somma dei due numeri e'`, somma(4, 5), `(Snack1)`) // somma = 9

//Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

const sommaVar = function (a, b) {
    return a + b
}
console.log(`la somma dei due numeri e'`, sommaVar(6, 8), `(Snack1)`) // somma = 14

//Quindi, riscrivi la funzione somma con la sintassi delle arrow functions. 
const sommaArrow = (a, b) => a + b;
console.log(`la somma dei due numeri e'`, sommaVar(7, 9), `(Snack1)`) // somma 16

//🏆 Snack 2

// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
const quadrato = q => q * q
console.log(`calcolo di un quadrato`, quadrato(2), `(Snack2)`) //4

// 🏆 Snack 3


/* Definisci una funzione eseguiOperazione che accetta tre parametri:
due numeri e una funzione operatore (callback).
La funzione deve eseguire l'operazione fornita sui due numeri. */

const sommaSnack3 = (a, b) => a + b;
const sottSnack3 = (a, b) => a - b;
const moltSnack3 = (a, b) => a * b;
const dividiSnack3 = (a, b) => a / b;

const EseguiOperazione = (a, b, operazione) => operazione(a, b)

console.log(EseguiOperazione(2, 3, sommaSnack3), `(Snack3 +)`)
console.log(EseguiOperazione(10, 5, sottSnack3), `(Snack3 -)`)
console.log(EseguiOperazione(2, 2.5, moltSnack3), `(Snack3 *)`)
console.log(EseguiOperazione(10, 2, dividiSnack3), `(Snack3 /)`)

//🏆 Snack 4

/* Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!". */

/* function creaTimer(){
    setTimeout(()=>{
        console.log("Tempo Scaduto!",`(Snack4)`)
    },2000);
}
creaTimer()  */
function creaTimer(timer) {
    return () => {
        console.log("Consolelog Instantaneo", `(Snack4)`)
        setTimeout(() => {
            console.log("Tempo scaduto!", `(Snack4)`);
        }, timer);
    };
}
const timer1s = creaTimer(1000);
timer1s();

//🏆 Snack 5
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

function StampaOgniSecondo() {
    const stampa = setInterval(() => {
        console.log("stampa ogni secondo", `(Snack5)`)
    }, 1500)

    setTimeout(() => {
        clearInterval(stampa)
        console.log("Si ferma dopo 6 secondi", `(Snack5)`)
    }, 6000)

}

StampaOgniSecondo()

//🏆 Snack 6
/* Definisci una funzione creaContatoreAutomatico che accetta un intervallo
 di tempo e restituisce una funzione che avvia un setInterval,
 incrementando un contatore e stampandolo. */

 function creaContatoreAutomatico