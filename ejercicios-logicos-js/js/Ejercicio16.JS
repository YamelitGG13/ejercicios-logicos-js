let palabra = prompt("Ingresa una palabra:");
let esPalindromo = palabra === palabra.split("").reverse().join("");
alert(esPalindromo ? "Es un palíndromo." : "No es un palíndromo.");
