// 10. Métodos Getters y Setters:
// Añade un getter y un setter al objeto libro para la propiedad añoDePublicacion. 
// Usa el setter para actualizar el año de publicación y luego usa el getter para leerlo.

let libro = {
    titulo: 'Cien Años de Soledad',
    autor: 'Gabriel Garcia Marquez',
    añoDePublicacion: 1967,

    get añoPublicacion() {
        return this.añoDePublicacion;
    },

    set añoPublicacion(nuevoAño) {
        if (typeof nuevoAño === 'number' && nuevoAño > 0) {
            this.añoDePublicacion = nuevoAño;
        } else {
            console.log('Introduce un año válido.');
        }
    }
};
console.log(`Antiguo año del libro: ${libro.añoPublicacion}`)
libro.añoPublicacion = 1970;
console.log(`Nuevo año del libro: ${libro.añoPublicacion}`);