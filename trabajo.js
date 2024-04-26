//FILTER
const words = ['Will', 'pongame', '5', 'en el ', 'perfil'];

const result = words.filter((word) => word.length > 6);

console.log(result);

//REDUCE
const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);

