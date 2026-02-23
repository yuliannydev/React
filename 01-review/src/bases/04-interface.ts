interface Person {
	firstName: string;
	lastName: string;
	age: number;
	address?: Address;
}

interface Address {
	postalCode: number;
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
