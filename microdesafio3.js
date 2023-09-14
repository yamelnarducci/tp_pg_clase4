/* traductor condicional */

let palabra = "perro";

switch (palabra) {
    case "perro":
        palabra = "dog"
        break;
    case "gato":
        palabra = "cat"
        break
    case "puerta" :
        palabra = "door"
        break
    case "ventana":
        palabra = "window"
        break
    case "mesa":
        palabra = "table";
        break
    default:
        palabra = "La palabra ingresada es incorrecta"
        break;
}

console.log(palabra);