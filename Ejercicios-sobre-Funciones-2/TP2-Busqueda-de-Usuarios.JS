// 8. Búsqueda de Usuarios:
// Crea una función llamada buscarUsuarioPorEmail que tome un array de usuarios y un email como parámetros, y devuelva el usuario que coincida con el email proporcionado.
// Usa el método find para implementarlo.

function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email)
}

const usuarios = [
    { id: 1, nombre: 'Pedro', email: 'Pedro.C@gmail.com' },
    { id: 2, nombre: 'Luis', email: 'G.Luis@Yahoo.com' },
    { id: 3, nombre: 'Ariel', email: 'Ariel.M@hotmail.com' },
]

const emailBuscado = 'Pedro.C@gmail.com';
console.log(buscarUsuarioPorEmail(usuarios, emailBuscado))

