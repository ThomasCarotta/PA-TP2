// 4. Función que Devuelve un Objeto:
// Crea una función llamada crearPersona que tome nombre y 
// edad como parámetros y devuelva un objeto con esas propiedades.

function crearPersona(nombre, edad){
    return{
        nombre: nombre,
        edad: edad
    }
}

console.log(crearPersona('Juan',23))
console.log(crearPersona('Luis',33))
console.log(crearPersona('Laura',56))