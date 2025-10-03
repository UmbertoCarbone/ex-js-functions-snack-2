// 🎯 Snack 8 (Bonus)

/* 
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0,
 con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!"
  e interrompe il timer. */

function ContoAllaRovescia(n) {

    let count = n;

    const interval = setInterval(() => {
        console.log(count, "Snack 8");
        count--;
        if (count < 0) {
            console.log("Tempo scaduto!", "Snack 8");
            clearInterval(interval);
        }
    }, 1000);
}

ContoAllaRovescia(6);

//🎯 Snack 9 (Bonus)
/* Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo. */

function sequenzaOperazioni(operazioni, intervallo) {
    operazioni.forEach((operazione, index) => {
        setTimeout(() => {
            operazione();
        }, intervallo * index);
    });
}
sequenzaOperazioni([
    () => console.log(20 + 20, "Snack 9"),
    () => console.log(15 + 15, "Snack 9"),
    () => console.log(10 * 10, "Snack 9"),

], 2200);

/* Creare un throttler per limitare l’esecuzione di una funzione
Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

Restituisce una nuova funzione che, quando chiamata ripetutamente,
 esegue l'operazione originale al massimo una volta ogni n millisecondi. */


/* eseguito guardando la soluzione */ /* eseguito guardando la soluzione */
/* eseguito guardando la soluzione */ /* eseguito guardando la soluzione */
/* eseguito guardando la soluzione */ /* eseguito guardando la soluzione */
/* eseguito guardando la soluzione */ /* eseguito guardando la soluzione */
function creaThrottler(callback, limit) {
    let lastExecution = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastExecution >= limit) {
            lastExecution = now;
            callback(...args);
        } else {
            console.log("cannot execute", "Snack10");
        }
    };
}

const throttledLog = creaThrottler(() => console.log("Eseguito", "Snack10"), 2000);

throttledLog("Snack10")
throttledLog("Snack10")
setTimeout(throttledLog, 2000)
setTimeout(throttledLog, 4000)