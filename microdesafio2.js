/* Ajuste tarifario de energia electrica */

let pagoMes = 900
let consumoKWH = 550
let porcentajeAumento = 20
550 > 300 
? console.log ("se le incrementará un 20%")
: 550 < 300
? console.log("se le mantendrá el subsidio")
:
console.log(true);
let calculoAumento = ((consumoKWH * porcentajeAumento) /100)
console.log(`Debido a que su hogar tuvo un consumo de 550kwh, en base al ajuste tarifario (hogares con consumo mayor a 300khw por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $${pagoMes + calculoAumento}`)
