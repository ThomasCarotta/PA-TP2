// 1. Consumo de Datos desde una API:
// Crea una función llamada obtenerUsuarios que haga una petición HTTP a la API https://jsonplaceholder.typicode.com/users usando fetch. 
// Luego, imprime en la consola la lista de usuarios obtenida.

function obtenerUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .catch(console.warn); 
}

function imprimirUsuarios() {
    obtenerUsuarios().then(users => {
        users.forEach(user => {
            console.log(user); 
        });
    });
}

imprimirUsuarios()