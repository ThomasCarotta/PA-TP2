//8. Función que Usa Otra Función:
// Crea una función llamada procesarArray que tome un array y una función como parámetros,
// y aplique la función a cada elemento del array. Usa una función como parámetro para multiplicar cada número por 2.

function procesarArray(arr,fn){
    return arr.map(fn)
}

function multiplicarPorDos(num) {
    return num * 2
}

const numeros = [1, 2, 3, 4, 5]

const resultado = procesarArray(numeros, multiplicarPorDos)

console.log(numeros)
console.log(resultado)