// When working with objects we often need to combine 2 or more objects. 
// The new `Object.assign()` function provides a clean method for doing just that.

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const obj = Object.assign(obj1, obj2, obj3);
console.log(obj);   // { a: 1, b: 2, c: 3 }
console.log(obj1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
