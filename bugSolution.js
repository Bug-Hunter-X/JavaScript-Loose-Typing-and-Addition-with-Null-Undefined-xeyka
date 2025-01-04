function foo(a, b) {
  a = (typeof a === 'undefined' ? 0 : a) || 0; // handle undefined
  b = (typeof b === 'undefined' ? 0 : b) || 0; // handle undefined
  return a + b; 
}

console.log(foo(undefined, 5)); // 5
console.log(foo(null, 5)); // 5
console.log(foo(undefined, null)); // 0
console.log(foo(null, null)); // 0