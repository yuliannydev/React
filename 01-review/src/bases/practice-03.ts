/**
 * getCharactersByOwner => Character[]
 * Filtra characters por su propietario
 * @param Owner - El propietario por el cual filtrar
 * @returns Array de characters pertenecientes al propietario
 */

// console.log( getCharatersByOwner('WoW Classic'));

import { characters, type Character } from '../data/wow.data';

export const getCharatersByOwner = (ownerSearch: string): Character[] => {
	const foundOwner = characters.filter(
		(element) => element.owner === ownerSearch,
	);
	return foundOwner;
};

// console.log(getCharatersByOwner('WoW Classic'));

// console.log(getCharatersByOwner('WoW TBC'));
