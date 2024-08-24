// 5. Función que Modifica un Objeto:
// Crea una función llamada actualizarEdad que tome un objeto persona y un número nuevaEdad, y actualice la propiedad edad del objeto.

let persona = {
    nombre: 'Juan',
    DNI: 12345678,
    edad: 19,
}

function actualizarEdad(objetoPersona,nuevaEdad){
    objetoPersona.edad=nuevaEdad
    return objetoPersona
}


console.log('Persona despues de actualizar edad: ',actualizarEdad(persona, 23))
