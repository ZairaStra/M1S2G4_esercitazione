/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  const result = l1 * l2;
  return result;
}
const area1 = area(6, 9);
console.log(area1);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(number1, number2) {
  const result = number1 + number2;
  if (number1 === number2) {
    return result * 3;
  } else {
    return result;
  }
  return result;
}
const crazySum1 = crazySum(7, 2);
console.log(crazySum1);
const crazySum2 = crazySum(6, 6);
console.log(crazySum2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(firstNumb, secondNumb) {
  //let secondNumb = 19;
  const result = Math.abs(firstNumb - secondNumb);
  if (firstNumb > secondNumb) {
    return result * 3;
  } else {
    return result;
  }
}
const crazyDiff1 = crazyDiff(39, 19);
console.log(crazyDiff1);
const crazyDiff2 = crazyDiff(6, 19);
console.log(crazyDiff2);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return (result = true);
  } else {
    return (result = false);
  }
}
const boundary1 = boundary(6);
console.log(boundary1);
const boundary2 = boundary(87);
console.log(boundary2);
const boundary3 = boundary(400);
console.log(boundary3);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(string) {
  const epicode = "EPICODE";
  if (string.startsWith(epicode)) {
    return string;
  } else {
    return epicode + " " + string;
  }
}
const string1 = epify("Benvenuti in EPICODE");
console.log(string1);
const string2 = epify("EPICODE vi da il benvenuto");
console.log(string2);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n) {
  const result1 = n % 3;
  const result2 = n % 7;
  if (result1 === 0 && result2 === 0) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
}
const check3and7One = check3and7(21);
console.log(result);
const check3and7Two = check3and7(69);
console.log(result);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string) {
  return string.split("").reverse().join("");
}
const reverseString1 = reverseString("EPICODE");
console.log(reverseString1);
const reverseString2 = reverseString("Zaira Straticò");
console.log(reverseString2);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string) {
  return string.charAt(0).toUpperCase();
}
const upperFirst1 = upperFirst("ciao ragazzi, come state?");
console.log(upperFirst1);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
