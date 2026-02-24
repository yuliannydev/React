//Name debe ser string
//La funcion debe regresar un string
function greet(name: string): string {
	return `Hello ${name}`;
}

const message = greet('World');

const greet2 = (nameTwo: string): string => `Hola ${nameTwo}`;

console.log(message, greet2('tu'));

//Interface para especificar como luce el Object
interface User {
	uid: string;
	username: string;
}

function getUser(): User {
	return {
		uid: 'ABC-123',
		username: 'New user',
	};
}

//return implicito
const getUserTwo = () => ({
	uid: 'ABC-123',
	username: 'New user',
});

console.log('GetUser 1', getUser(), 'GetUser 2', getUserTwo());

const myNumbers: number[] = [1, 2, 3, 4];

//Callback es una funcion que se pasa como un argumento
// a un metodo
myNumbers.forEach((value) => {
	//{} retorna un Object
	console.log({ value });
});
