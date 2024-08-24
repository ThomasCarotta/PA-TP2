// 9. Generación de Token de Autenticación:
// Crea una función llamada generarToken que tome un objeto usuario y devuelva un token JWT simulado como una cadena.
// Puedes usar una función como btoa (Base64) para simular la generación del token.

function generarToken(usuario) {
    const payload = {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
    };

    const encodedPayload = btoa(JSON.stringify(payload));

    const header = {
        alg: 'HS256',
        typ: 'JWT'
    };

    const encodedHeader = btoa(JSON.stringify(header));

    const token = `${encodedHeader}.${encodedPayload}`;
    return token;
}

const usuario = {
    id: 1,
    nombre: 'Thomas',
    email: 'Thomas@gmail.com'
};

const token = generarToken(usuario);
console.log('Token generado:', token);
