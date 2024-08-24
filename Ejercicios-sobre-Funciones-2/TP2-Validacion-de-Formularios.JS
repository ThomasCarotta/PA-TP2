// 5. Validación de Formularios:
// Crea una función llamada validarFormulario que tome un objeto con los campos nombre, email y password. 
// La función debe devolver true si todos los campos están presentes y no están vacíos, y false en caso contrario.

function validarFormulario(datos) {

    if (datos.nombre && datos.email && datos.password && datos.nombre.trim() !== '' && datos.email.trim() !== '' && datos.password.trim() !== ''){
        return true
    } else {
        return false
    }
}

const formulario1 = {
    nombre: 'Juan',
    email: 'juan@example.com',
    password: 'contraseña123'
};

const formulario2 = {
    nombre: '',
    email: 'juan@example.com',
    password: 'contraseña123'
};

console.log(validarFormulario(formulario1))
console.log(validarFormulario(formulario2))
