// 5. Uso de filter:
// Crea una función llamada filtrarMayoresDe que tome un array de
// números y un valor de referencia, y devuelva un nuevo array solo con
// los números mayores que ese valor. Usa filter.

function filtrarMayoresDe(numeros, mayor){
    return numeros.filter(numero=>numero>mayor)
}

let numeros1=[1,2,3,4,5,6,7,8,9,10]

console.log(filtrarMayoresDe(numeros1,3))