// 6. Comprobación de Propiedades:
// Crea una función llamada tienePropiedad que tome un objeto y una cadena como parámetros, 
// y devuelva true si el objeto tiene una propiedad con ese nombre, o false en caso contrario.

let producto = {
    nombre: 'Notebook',
    precio: 123.45,
    disponible: true
}

const propiedad = function tienePropiedad(objeto, propiedad){
    if (objeto.hasOwnProperty(propiedad)){
        return `El objeto tiene la propiedad ${propiedad}`
    } else {
        return `El objeto no tiene la propiedad ${propiedad}`
    }
}

console.log(tienePropiedad(producto, 'edicion'));    
console.log(tienePropiedad(producto, 'nombre'));