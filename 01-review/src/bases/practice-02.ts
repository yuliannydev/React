const useState = (value: string) => {
	return [
		value,
		(message: string) => {
			console.log(message);
		},
	] as const;
};

const [name, setName] = useState('Valor inicial');
console.log(name);
setName('Mensaje a travez del log');
