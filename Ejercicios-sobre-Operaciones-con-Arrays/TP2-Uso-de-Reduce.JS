// 6. Uso de reduce:
// Crea una función llamada sumarElementos que tome un array de
// números y devuelva la suma de todos los elementos del array
// usando reduce.

function sumarElementos(numeros){
    return numeros.reduce((acum,valor)=>acum+valor,0)
}

let numeros1=[1,2,3,4,5,6,7,8,9,10]

console.log(numeros1)
console.log(sumarElementos(numeros1))