// 4. Transformación de Datos:
// Crea una función llamada mapearUsuarios que tome un array de usuarios obtenidos de la API y
// devuelva un nuevo array con solo las propiedades nombre y email de cada usuario.

function obtenerUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .catch(console.warn); 
}

const mapearUsuarios= () => {
    return obtenerUsuarios()
        .then(usuarios => {
            return usuarios.map(usuario=>({
                nombre: usuario.name,
                email: usuario.email
            }))
        })
    .catch(console.warn)
}

mapearUsuarios()
    .then(usuariosMapeados =>{
        console.log(usuariosMapeados)
    })
    .catch(console.warn)