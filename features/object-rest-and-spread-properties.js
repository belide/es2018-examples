// Array Destructuring
console.groupCollapsed('Array Destructuring');
let [x, ...remaining] = [1, 2, 3, 4];
console.info(x); // 1
console.info(remaining); // [2, 3, 4]
console.groupEnd();

// Array Literals
console.groupCollapsed('Array Literals');
let existingArray = [2, 3, 4];
let newArray = [1, ...existingArray];
console.info(newArray); // [1, 2, 3, 4]
console.groupEnd();

// ------------------------
// Object Destructuring
// ------------------------
console.groupCollapsed('Object Destructuring');

// Basic
console.groupCollapsed('Basic');
let { x, ...remaining } = { x: 1, a: 2, b: 3, c: 4 };
console.info(x); // 1
console.info(remaining); // {a: 2, b: 3, c: 4}
console.groupEnd();

// Shallow Clone
console.groupCollapsed('Shallow Clone');
let { ...shallowClone } = { x: 1, foo: () => {} };
console.info(shallowClone); // {x: 1, foo: ƒ}
console.groupEnd();

// Nested Objects
console.groupCollapsed('Nested Objects');
let nestedObject = {
  x: [1, 2, 3],
  y: { a: 4, b: 5, foo: () => {} }
};
let { x: [x1, ...remaining], ...allRemaining } = nestedObject;
console.info(x1); // 1
console.info(remaining); // [2, 3]
console.info(allRemaining); // {y: {a: 4, b: 5, foo: ƒ}}
console.groupEnd();

console.groupEnd();

// ------------------------
// Object Literals
// ------------------------
console.groupCollapsed('Object Literals');

// Basic
console.groupCollapsed('Basic');
let existingObject = { x: 1, a: 2, b: 3, c: 4 };
let newObject = { ...existingObject, foo: () => { } };
console.info(newObject); // {x: 1, a: 2, b: 3, c: 4, foo: ƒ}
console.groupEnd();

// Shallow Clone
console.groupCollapsed('Shallow Clone');
let existingObject = { x: 1, foo: () => {} };
let newObject = { ...existingObject }
console.info(newObject); // {x: 1, foo: ƒ}
console.groupEnd();

// Merging Objects
console.groupCollapsed('Merging Objects');
let sampleObject = { x: 1, y: 2 };
let sampleObject2 = { z: 3 };
let sampleObject3 = { a: [ 'b', 'c' ] };
let newObject = { ...sampleObject, ...sampleObject2, ...sampleObject3 };
console.info(newObject); // {x: 1, y: 2, z: 3, a: ['b', 'c'])}
console.groupEnd();

// Overriding Properties
console.groupCollapsed('Overriding Properties');
let sampleObject = { x: 1, y: 2 };
let newObject = { ...sampleObject, x: 3 };
console.info(newObject); // {x: 3, y: 2}
console.groupEnd();

// Defailt Properties
console.groupCollapsed('Defailt Properties');
let sampleObject = { x: 'a', y: 'b' };
let newObject = { z: 'c', ...sampleObject, };
console.info(newObject); // {z: 'c', x: 'a', y: 'b'}
console.groupEnd();

console.groupEnd();