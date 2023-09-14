/* Mi primer calculadora */

let num1 = 3;
let num2 = 2;
let operacion = "*";
let resultado;

switch (operacion) {
    case "+":
        resultado = num1 + num2
        break;
    case "-":
        resultado = num1 - num2
        break;
    case "*":
        resultado = num1 * num2
        break;
    case "/":
        resultado = num1 / num2
        break;
     default:
        resultado = "Las operaciones aceptadas son: sumar - restar - multiplicar - dividir"
        break;

}
console.log("El resultado de ",num1,"",operacion,"",num2,"=",resultado);