const singer = {
	firstName: 'Britney',
	lastName: 'Spears',
	age: 50,
};

// singer apunta a un espacio en memoria.
//Los datos dentro de este pueden ser modificados y clonados
console.log(singer);

// Spread operator: para desestructurar un onject y modificar
// sus datos sin cambiar el valor original
const musician = { ...singer };

musician.age = 44;

console.log(musician);

// Si el object contiene un objeto anidado, lo ideal
// seria utilizar una funcion de javaScript llamada
// structuredClone
