const nameClassOfWoW = ['Warrior', 'Rogue', 'Hunter'];

const [, , thirdClass] = nameClassOfWoW;

console.log({ thirdClass });

// Destructuring en una funcion
const returnArrayFn = () => {
	// as const indica que no puede ser cambiado el valor
	// es decir, es solo de lectura
	// y le agrega un tipado
	return ['ABC', 123] as const;
};

const [letters, numbers] = returnArrayFn();

console.log(letters, numbers);
