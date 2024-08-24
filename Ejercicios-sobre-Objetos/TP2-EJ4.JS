// 4. Iteración sobre Propiedades de un Objeto: Crea un objeto producto con propiedades como nombre, precio y disponible. 
// Usa un bucle for...in para imprimir todas las propiedades y sus valores.

const producto = {
    nombre: 'Notebook',
    precio: 123.45,
    disponible: true
}

for (let cosa in producto){
    console.log(`${cosa}: ${producto[cosa]}`)
}