// 8. Combinar Objetos:
// Usa Object.assign para combinar dos objetos, persona1 y persona2, en un nuevo objeto. Imprime el resultado.

let persona1 = {
    nombre: 'Juan',
    dni: 64676322
}

let persona2 = {
    apellido: 'Perez',
    edad: 43
}

const nuevaPersona = Object.assign({}, persona1, persona2);

console.log(persona1)
console.log(persona2)
console.log(nuevaPersona)