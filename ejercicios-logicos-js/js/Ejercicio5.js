

let n1 = Number(prompt("Escribe un numero"));
let n2 = Number(prompt("Escrube el segundo numero:"));

if (n1 > n2) {
  console.log(n1 + "   es mayor que el número  " + n2);
} else if (n2 > n1) {
  console.log(n2 + "es mayor que el número " + n1);
} else {
  console.log("Los números tecleados son iguales");
}
