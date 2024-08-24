// 7. Eliminación de Propiedades:
// Elimina la propiedad disponible del objeto producto. Imprime el objeto antes y después de eliminar la propiedad.

let producto = {
    nombre: 'Notebook',
    precio: 123.45,
    disponible: true
}

console.log('Objeto antes de eliminar propiedad', producto)

delete producto.disponible

console.log('cobjeto despues de eliminar propiedad', producto)