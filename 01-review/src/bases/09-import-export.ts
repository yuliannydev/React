import { characters, type Character } from '../data/wow.data';
// Si tengo mas de un file con character,
// puedo cambiar el nombre asi
//import { characters as myNewCharaters } from "../data/wow.data"

const getMyCharacters = (id: number): Character | undefined => {
	const character = characters.find((value) => {
		return value.id === id;
	});
	return character;
};

console.log(getMyCharacters(1));
