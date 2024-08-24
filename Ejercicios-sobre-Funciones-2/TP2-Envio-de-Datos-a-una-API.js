// 7. Envío de Datos a una API:
// Crea una función llamada enviarDatos que tome un objeto data y haga una petición POST a la API https://jsonplaceholder.typicode.com/posts. 
// La función debe imprimir la respuesta de la API.

function enviarDatos(data) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la petición');
        }
        return response.json();
    })
    .then(responseData => {
        console.log(responseData);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

const data = {
    title: 'asdasd',
    body: 'qweqwe',
    userId: 10,
}

enviarDatos(data);