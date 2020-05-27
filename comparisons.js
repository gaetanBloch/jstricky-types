// String comparison order: 0123456789abcdefgh....
log(5 > 3); // true
log(5 > '3'); // '5' > '3' => true
log(5 > 'hi'); // '5' > 'hi' => false
log(5 == '3') // '5' == '3' => false
log(5 == '5') // '5' == '5' => true
log('hi' == 'a') // false

console.log('-------');

// Special case: the boolean is not coerced to string
// The boolean and the string are coerced to a number
log('true' == true); // NaN == 1 => false
log('1' == true); // 1 == 1 => true
log('0' == false); // 0 == 0 => true
log('' == false); // 0 == 0 => true
// Normal case
log(0 == false); // 0 == 0 => true
log(1 == true); // 1 == 1 => true
// Other comparisons
log(5 > true); // 5 > 1 => true
log('5' > true); // 5 > 1 => true
log('hi' > true); // NaN > 1 => false

function log(result) {
  console.log(result);
}
