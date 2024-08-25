// 9. Uso de find:
// Crea un array de objetos llamados personas donde cada objeto
// tenga nombre y edad. Usa find para encontrar a la primera persona
// mayor de 30 años.


let personas = [
    { nombre: 'Ana', edad: 28 },
    { nombre: 'Pedro', edad: 35 },
    { nombre: 'Juan', edad: 24 },
    { nombre: 'Laura', edad: 40 }
];


let mayorDe30=personas.find(persona => persona.edad > 30);

console.log(mayorDe30);  
