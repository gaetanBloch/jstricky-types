console.log([] + 1); // '' + 1 => '1'
console.log([].toString()); // ''
console.log([1, 2].toString()); // '1,2'
console.log([1, 2] + 'hi'); // '1,2hi'
// 1. Step: toPrimitive() (internal method)
// 2. Step: toString()

console.log([1,2] == 0); // NaN == 0 => false
console.log(+[1,2].toString()); // NaN
console.log([] == 0); // '' == 0 => 0 == 0 => true
console.log([] === 0); // false

console.log({}.toString()); // '[object Object]'
console.log({} + 1); // '[object Object]' + 1 => '[object Object]1'
console.log({} + 'hi'); // '[object Object]hi'
console.log({} + []); // '[object Object]' + '' => '[object Object]'
console.log({} == []); // false
