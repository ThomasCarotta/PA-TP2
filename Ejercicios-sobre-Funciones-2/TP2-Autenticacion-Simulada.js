// 3. Autenticación Simulada:
// Crea una función llamada autenticarUsuario que tome un objeto credenciales con usuario y contraseña, y verifique si coinciden con un usuario predefinido. 
// La función debe devolver true si la autenticación es exitosa y false en caso contrario.

// const autenticarUsuario= (credenciales)=>{
//     const usuarioGenerico={
//         usuario:'Pepe',
//         contraseña:'contraseña'
//     }

//     if (credenciales.usuario===usuarioGenerico.usuario && credenciales.contraseña===usuarioGenerico.contraseña){
//         return true
//     } else{ 
//         return false
//     }
// }

// const credencialesCorrectas={usuario:'Pepe',contraseña:'contraseña'}
// const credencialesIncorrectas={usuario:'Luis',contraseña:'123456'}

// autenticarUsuario(credencialesCorrectas)
// autenticarUsuario(credencialesIncorrectas)

function autenticarUsuario(credenciales){
    return new Promise((resolve, reject)=>{
        const usuarioGenerico={
            usuario:'Pepe',
            contraseña:'contraseña'
        }

        setTimeout(()=>{
            if (credenciales.usuario===usuarioGenerico.usuario && credenciales.contraseña===usuarioGenerico.contraseña){
                resolve(true) 
            } else {
                reject(false)
            }
            
        }, 1000)
    })
}

const credencialesCorrectas={usuario:'Pepe',contraseña:'contraseña'}
const credencialesIncorrectas={usuario:'Luis',contraseña:'123456'}

autenticarUsuario(credencialesCorrectas)
    .then(resultado => {
        console.log("Autenticación exitosa:", resultado); 
    })
    .catch(error => {
        console.log("Autenticación fallida:", error); 
    });

autenticarUsuario(credencialesIncorrectas)
    .then(resultado => {
        console.log("Autenticación exitosa:", resultado);
    })
    .catch(error => {
        console.log("Autenticación fallida:", error);
    });
