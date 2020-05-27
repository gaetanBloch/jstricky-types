test('') // false
test(0) // false
test(NaN) // false
test(-0) // false
test(0n) // false
test(undefined) // false
test(null) // false

function test(value) {
  if (!value) {
    console.log('Not Executed');
  }
}

console.log('---------');

// Returns the first value if truthy, second value otherwise
log(true || ''); // true
log(123 || 'hi'); // 123
log(0 || 'hi'); // 'hi

// Returns second value if first is truthy
log(true && ''); // ''
log(123 && 'hi'); // 'hi'
log(0 && 'hi'); // 0


function log(result) {
  console.log(result);
}
