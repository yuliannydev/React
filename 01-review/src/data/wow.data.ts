//Las interface son en singular
export interface Character {
	id: number;
	name: string;
	owner: Owner;
}
//No tiene contraparte en JavaScript
//Se usa cuando tienes opciones especificas
type Owner = 'WoW Classic' | 'WoW TBC';

// enum Owner {
// WoW Classic = 'WoW Classic, // 0 // 'WoW Classic'
// WoW TBC = 'WoW TBC', // 1 // 'WoW TBC'
// }

//Exportacion independiente, exportan
export const characters: Character[] = [
	{
		id: 1,
		name: 'Warrior',
		owner: 'WoW Classic',
	},
	{
		id: 2,
		name: 'Hunter',
		owner: 'WoW Classic',
	},
	{
		id: 3,
		name: 'Warlock',
		owner: 'WoW TBC',
	},
	{
		id: 4,
		name: 'Mage',
		owner: 'WoW Classic',
	},
	{
		id: 5,
		name: 'Rogue',
		owner: 'WoW Classic',
	},
];

//En typeScript los types son de mejor practica
//no generan codigo JS adicional
//Son mas legibles

//ENUM
//Se puede usar eNum cuando se quiere iterar sobre los objetos

//---

// Te permite renombrar lo que exportas
//export default characters;
