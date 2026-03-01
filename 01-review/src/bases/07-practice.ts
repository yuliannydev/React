interface Class {
	username: string;
	skill: Skill;
	armor: string;
	weapon: string;
	attacks: Damage;
}

interface Skill {
	skillOne: string;
	skillTwo: string;
}

interface Damage {
	attackOne: string;
	attackTwo: string;
	attackThree: string;
}
const Rogue: Class = {
	username: 'nath.gg',
	skill: {
		skillOne: 'Agility',
		skillTwo: 'Strength',
	},
	armor: 'Leather',
	weapon: 'Sword',
	attacks: {
		attackOne: '-20 de vida',
		attackTwo: '-40 de vida',
		attackThree: '-60 de vida',
	},
};

const Warlock: Class = {
	username: 'Potoco',
	skill: {
		skillOne: 'Intelect',
		skillTwo: 'Agility',
	},
	armor: 'Cloth',
	weapon: 'Wand',
	attacks: {
		attackOne: '-30 de vida',
		attackTwo: '-50 de vida',
		attackThree: '-80 de vida',
	},
};

console.log('La picara Nathalie: ', Rogue);
console.log('Invoco al Warlock: ', Warlock);

const attack = (pj: Class) => {
	console.log(
		`${pj.username} te ha atacado, usando una ${pj.weapon} y ha causado ${pj.attacks.attackOne}`,
	);
};

console.log(attack(Rogue));

// console.log(attack(Rogue.weapon, Rogue.attacks.attackOne));
