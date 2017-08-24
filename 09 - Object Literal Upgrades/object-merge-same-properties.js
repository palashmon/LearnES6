// Merging objects with same properties

const obj1 = { a: 1, b: 1, c: 1 };
const obj2 = { b: 2, c: 2 };
const obj3 = { c: 3 };

const obj = Object.assign({}, obj1, obj2, obj3);
console.log(obj);   // { a: 1, b: 2, c: 3 }

// The properties are overwritten by other objects that have the same properties later in the parameters order. 
