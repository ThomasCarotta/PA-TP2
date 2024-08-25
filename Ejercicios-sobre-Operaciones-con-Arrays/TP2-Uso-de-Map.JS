// 4. Uso de map:
// Crea una función llamada elevarAlCuadrado que tome un array de
// números y devuelva un nuevo array con cada número elevado al
// cuadrado. Usa map para implementar la función.

function elevarAlCuadrado(numeros){
    return numeros.map(numero=>numero*numero)
}

let numeros1=[1,2,3,4,5,6,7,8,9,10]

console.log(numeros1)
console.log(elevarAlCuadrado(numeros1))