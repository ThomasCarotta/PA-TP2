// 3. Métodos en Objetos:
// Añade un método llamado descripción al objeto libro que devuelva una cadena describiendo el título y el autor del libro. Invoca este método e imprime el resultado.

const libro = {
    titulo: 'Cien Años de Soledad',
    autor: 'Gabriel Garcia Marquez',
    añoDePublicacion: 1967
}

const descripcion = function(libros) {
    console.log(`Datos del libro: ${libros.titulo}, ${libros.autor}`);
}

console.log(libro)
descripcion(libro)