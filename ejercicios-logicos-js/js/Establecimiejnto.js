/*
Elaborar un programa en JS que simule ser un sistema para estacionamientos
 el cual deberá darle la posibilidad al usuario de ingresar el numero de 
 horas que utilizo el estacionamiento. Por políticas de la empresa si el 
 usuario estuvo menos de media hora estacionado no se le cobrara nada, en caso
  de que el usuario haya estado mas de media hora y menos de dos se le cobrara 10 
  pesos por la cantidad de horas, si el usuario estuvo de 2 a 3 horas se le cobrara por 
  25 pesos y si el usuario estuvo mas de 3 horas se le cobrara en el rango de 30 pesos.
*/  
let HE = parseInt(prompt("Ingrese el número de horas que utilizó el estacionamiento:"));
let tarifa = 0;

if (HE <= 0.5) {
    tarifa = 0;
} else if (HE > 0.5 && HE < 2) {
    tarifa = HE * 10;
} else if (HE >= 2 && HE <= 3) {
    tarifa = 25;
} else if (HE > 3) {
    tarifa = HE * 30;
}
alert("La tarifa a pagar es: " + tarifa + " pesos");
