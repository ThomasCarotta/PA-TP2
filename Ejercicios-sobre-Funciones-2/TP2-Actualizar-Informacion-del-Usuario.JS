// 10. Actualización de Información del Usuario:
// Crea una función llamada actualizarUsuario que tome un objeto usuario y una lista de cambios a aplicar.
// La función debe retornar el usuario con las propiedades actualizadas.

function actualizarUsuario(usuario,cambios){
    return Object.assign({},usuario,cambios)
}

const usuario={
    dni:12345678,
    nombre:'Pedro',
    apellido: 'González',
    edad: 23
}

const cambios={
    apellido: 'Gomez',
    edad: 67
}
console.log('usuario antes de los cambios: ',usuario)

console.log('usuario despues de los cambios: ',actualizarUsuario(usuario,cambios))