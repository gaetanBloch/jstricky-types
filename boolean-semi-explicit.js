console.log(!2); // false
console.log(!!2); // true

const userInput = 'Gaetan';
// const hasEnteredValidInput = userInput.length > 0;
const hasEnteredValidInput = !!userInput;
console.log(hasEnteredValidInput); // true

console.log('-------');

const age = '31';
// const numberAge = Number(age);
const numberAge = +age;
console.log(numberAge + 1); // 32

const stringAge = numberAge + '';
console.log(stringAge + 1); // '311'
