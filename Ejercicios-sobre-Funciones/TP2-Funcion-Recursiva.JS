// 6. Función Recursiva:
// Crea una función recursiva llamada factorial que calcule el factorial de un número dado.

function factorial(n){
    if (n===0||n===1){
        return 1
    }
    return n* factorial(n-1)
}

console.log('Factorial de 4: '+factorial(4))
console.log('Factorial de 5: '+factorial(5))