let perfil = " ";

if (perfil == "administrador" || perfil == "ADMINISTRADOR" || perfil == "Administrador"){
  console.log("Usted tiene todos los derechos de uso del sistema");
} else if (perfil == "asistente" || perfil == "ASISTENTE" || perfil == "Asistente"){
  console.log("Usted solo tiene permisos de registrar, modificar y consultar datos");
} else if (perfil == "invitado" || perfil == "INVITADO" || perfil == "Invitado"){
  console.log("Usted solo tiene permisos de consultar datos");
} else if (perfil == " "){
  console.log("Debe especificar el perfil del usuario");
} else {
  console.log("Debe especificar un perfil valido");
}
