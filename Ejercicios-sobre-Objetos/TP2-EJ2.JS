// 2. Anidación de Objetos:
// Crea un objeto llamado estudiante con propiedades nombre, edad y direccion. 
// direccion debe ser otro objeto con propiedades calle, ciudad y pais. Imprime la dirección completa del estudiante.

const estudiante = {
    nombre: 'Juan',
    edad: 17,
    direccion: {
        calle: 'asd123',
        ciudad: 'Concepcion del Uruguay',
        pais: 'Argentina'
    }
}

console.log(estudiante)
console.log('Edad: '+estudiante.edad)
console.log(`Direccion:  ${estudiante.direccion.pais}, ${estudiante.direccion.ciudad}, ${estudiante.direccion.calle}`)
