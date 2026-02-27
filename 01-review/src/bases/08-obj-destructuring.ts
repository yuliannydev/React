const character = {
	pj: 'Warrior',
	ability: 'Melee',
	level: 70,
	key: 'WoW',
};

// El orden de las props no importa en un Objet
const { key, pj, ability, level } = character;

console.log(key, pj, ability, level);
