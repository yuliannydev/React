const myArray: number[] = [1, 2, 3, 4];

//Desestructuracion
//Si no hay datos anidados, se puede usar
const myArray2 = [...myArray];

myArray2.push(10);

console.log('Array 1:', myArray, 'Array 2:', myArray2);
