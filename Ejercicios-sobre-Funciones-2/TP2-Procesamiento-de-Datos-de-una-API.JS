// 2. Procesamiento de Datos de una API:
// Usando la función obtenerUsuarios, crea otra función llamada imprimirNombresDeUsuarios que filtre y muestre solo los nombres de los usuarios.

function obtenerUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .catch(console.warn); 
}

function imprimirNombresDeUsuarios() {
    obtenerUsuarios().then(users => {
        users.forEach(user => {
            console.log(user.name); 
        });
    });
}

imprimirNombresDeUsuarios()
