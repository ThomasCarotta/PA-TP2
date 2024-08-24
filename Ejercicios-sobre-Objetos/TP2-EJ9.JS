// 9. Copiar Objetos:
// Crea una copia profunda del objeto estudiante utilizando el método JSON.parse y JSON.stringify. 
// Modifica la copia y verifica que el objeto original no haya sido alterado.

const estudiante = {
    nombre: 'Juan',
    edad: 17,
    direccion: {
        calle: 'asd123',
        ciudad: 'Concepcion del Uruguay',
        pais: 'Argentina'
    }
}

let estudiante2 = JSON.parse(JSON.stringify(estudiante))

estudiante2.direccion.ciudad='Colon'
estudiante2.nombre='Jorge'
estudiante2.edad=33

console.log('Objeto original: ',estudiante)
console.log('Objeto copia modificado: ', estudiante2)