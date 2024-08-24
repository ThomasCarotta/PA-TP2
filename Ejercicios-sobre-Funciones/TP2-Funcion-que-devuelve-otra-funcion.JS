// 9. Función que Devuelve Otra Función:
// Crea una función llamada crearMultiplicador que tome un número x
// y devuelva una nueva función que multiplique cualquier número por x.

function crearMultiplicador(x){
    return function(num){
        return num*x
    }
}

const multiplicarPorCinco= crearMultiplicador(5)
console.log(multiplicarPorCinco(3))

const multiplicarPorDiez= crearMultiplicador(10)
console.log(multiplicarPorDiez(10))