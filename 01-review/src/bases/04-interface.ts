// Permiten declarar los tipos de datos
// para mantener una estructura en un Object
//Las interfaces no tienen un representacion en JavaScript
interface Person {
	//Se puede terminar con coma, pero es comun terminarlo en ;
	firstName: string;
	lastName: string;
	age: number;
	//indica que el valor no es obligatorio ? es opcional
	//Se puede anidar una interface adentro de otra
	address?: Address;
}

interface Address {
	postalCode?: number;
	city: string;
}

const singer: Person = {
	firstName: 'Britney',
	lastName: 'Spears',
	age: 50,
};

const musician: Person = {
	firstName: 'Miley',
	lastName: 'Cyrus',
	age: 0,
	address: {
		postalCode: 123,
		city: 'New york',
	},
};
console.log(singer, musician);
