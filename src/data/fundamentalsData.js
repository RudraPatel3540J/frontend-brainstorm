export const fundamentalsData = {
  title: "📚 JavaScript Fundamentals & Core Concepts",
  questions: [
    {
      id: 1,
      title: "Differences Between var, let, and const",
      type: "comparison-table",
      description:
        "Understanding the differences between variable declaration keywords is crucial for writing clean, predictable JavaScript code and avoiding common pitfalls.",
      content: {
        headers: ["Feature", "var", "let", "const"],
        rows: [
          ["Scope", "Function-scoped", "Block-scoped", "Block-scoped"],
          ["Redeclaration", "✅ Allowed", "❌ Not allowed", "❌ Not allowed"],
          ["Reassignment", "✅ Allowed", "✅ Allowed", "❌ Not allowed"],
          [
            "Hoisting",
            "Hoisted with undefined",
            "Hoisted without initialization",
            "Hoisted without initialization",
          ],
        ],
      },
    },
    {
      id: 2,
      title: "Closures in JavaScript",
      type: "text-with-code",
      description:
        "A closure is a function that retains access to its lexical scope even when executed outside of its original scope. This is a fundamental concept that enables data privacy and function factories.",
      code: `function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(\`Outer: \${outerVariable}, Inner: \${innerVariable}\`);
  };
}

const closureFunc = outerFunction("Hello");
closureFunc("World"); // Output: Outer: Hello, Inner: World`,
    },
    {
      id: 3,
      title: "Hoisting in JavaScript",
      type: "text-with-code",
      description:
        "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution. Understanding this helps avoid common bugs and write better code.",
      code: `console.log(x); // Output: undefined
var x = 10;`,
      tip: "let and const are also hoisted but are not initialized, causing a 'temporal dead zone' error if accessed before declaration.",
    },
    {
      id: 4,
      title: "Event Delegation",
      type: "text-with-code",
      description:
        "Event delegation allows handling events at a parent level instead of setting individual event listeners on child elements. This improves performance and memory usage.",
      code: `document.getElementById("parent").addEventListener("click", function(event) {
  if (event.target && event.target.matches(".child")) {
    console.log("Child element clicked!");
  }
});`,
    },
    {
      id: 5,
      title: "Shallow Copy vs. Deep Copy",
      type: "comparison-table",
      description:
        "Understanding the difference between shallow and deep copying is essential for working with objects and arrays without unintended side effects.",
      content: {
        headers: ["Type", "Description", "Example"],
        rows: [
          [
            "Shallow Copy",
            "Copies only references to nested objects",
            "{ ...obj1 }",
          ],
          [
            "Deep Copy",
            "Creates independent copies of nested objects",
            "JSON.parse(JSON.stringify(obj1))",
          ],
        ],
      },
    },
    {
      id: 6,
      title: "Difference Between == and ===",
      type: "text-with-code",
      description:
        "The difference between loose equality (==) and strict equality (===) is crucial for writing reliable JavaScript code and avoiding unexpected type coercion.",
      code: `console.log(5 == "5");  // true (type coercion)
console.log(5 === "5"); // false (strict equality)`,
    },
    {
      id: 7,
      title: "Higher-Order Functions",
      type: "text-with-code",
      description:
        "Higher-order functions are functions that take other functions as arguments or return functions. They enable functional programming patterns and code reusability.",
      code: `function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10`,
    },
    {
      id: 8,
      title: "Call, Apply, and Bind Methods",
      type: "text-with-code",
      description:
        "These methods allow you to control the 'this' context when calling functions. They're essential for working with object methods and function borrowing.",
      code: `function greet(greeting) {
  console.log(\`\${greeting}, \${this.name}\`);
}

const user = { name: "John" };
greet.call(user, "Hello");    // Hello, John
greet.apply(user, ["Hi"]);    // Hi, John
const boundFunc = greet.bind(user);
boundFunc("Hey");             // Hey, John`,
    },
    {
      id: 9,
      title: "Currying in JavaScript",
      type: "text-with-code",
      description:
        "Currying is a function transformation that converts a function with multiple arguments into a sequence of functions with a single argument each. It enables partial application and function composition.",
      code: `function curry(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(curry(1)(2)(3)); // Output: 6`,
    },
    {
      id: 10,
      title: "Event Loop in JavaScript",
      type: "text-with-code",
      description:
        "The event loop is the mechanism that allows JavaScript to handle asynchronous operations. Understanding it is crucial for writing efficient async code and debugging timing issues.",
      code: `console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");

// Output:
// Start
// End
// Timeout`,
    },
    {
      id: 11,
      title: "JavaScript Promises",
      type: "text-with-code",
      description:
        "Promises provide a cleaner way to handle asynchronous operations compared to callbacks. They help avoid callback hell and provide better error handling.",
      code: `const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 2000);
});

myPromise
  .then(console.log)
  .catch(console.error);`,
    },
    {
      id: 12,
      title: "Async/Await vs. Promises",
      type: "text-with-code",
      description:
        "Async/await is syntactic sugar over promises that makes asynchronous code look and behave more like synchronous code, improving readability and error handling.",
      code: `async function fetchData() {
  try {
    let data = await fetch("https://api.example.com/data");
    return data.json();
  } catch (error) {
    console.error("Error:", error);
  }
}`,
    },
    {
      id: 13,
      title: "Debouncing and Throttling",
      type: "text-with-code",
      description:
        "Debouncing and throttling are techniques to limit the rate at which functions are called. They're essential for optimizing performance in event-heavy applications.",
      code: `function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}`,
    },
    {
      id: 14,
      title: "Generator Functions",
      type: "text-with-code",
      description:
        "Generator functions can pause and resume their execution, allowing for more control over iteration and asynchronous operations. They're useful for creating iterators and handling complex async flows.",
      code: `function* generatorFunc() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = generatorFunc();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3`,
    },
    {
      id: 15,
      title: "Memoization in JavaScript",
      type: "text-with-code",
      description:
        "Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.",
      code: `function memoize(fn) {
  let cache = {};
  return function(arg) {
    if (cache[arg]) return cache[arg];
    return (cache[arg] = fn(arg));
  };
}`,
    },
    {
      id: 16,
      title: "Normal vs. Arrow Functions",
      type: "text-with-code",
      description:
        "Arrow functions provide a more concise syntax and lexically bind 'this', but they lack some features of regular functions like 'arguments' object and constructor capability.",
      code: `const obj = {
  value: 10,
  normal() {
    console.log(this.value); // 10
  },
  arrow: () => console.log(this.value) // undefined
};

obj.normal();
obj.arrow();`,
    },
    {
      id: 17,
      title: "Data Types & Type Conversion",
      type: "text-with-code",
      description:
        "JavaScript has 7 primitive data types and objects. Understanding type conversion and coercion is crucial for writing predictable code and avoiding bugs.",
      code: `// Primitive types
let string = "Hello";
let number = 42;
let boolean = true;
let nullValue = null;
let undefinedValue = undefined;
let symbol = Symbol("description");
let bigInt = 1234567890123456789012345678901234567890n;

// Type conversion
console.log(String(123)); // "123"
console.log(Number("123")); // 123
console.log(Boolean(1)); // true
console.log(!!"hello"); // true (truthy)`,
    },
    {
      id: 18,
      title: "Prototype & Prototypal Inheritance",
      type: "text-with-code",
      description:
        "JavaScript uses prototypal inheritance where objects inherit properties and methods from their prototype chain. This is fundamental to understanding how JavaScript objects work.",
      code: `function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

const person = new Person("John");
console.log(person.greet()); // "Hello, I'm John"
console.log(person.__proto__ === Person.prototype); // true`,
    },
    {
      id: 19,
      title: "this keyword",
      type: "text-with-code",
      description:
        "The 'this' keyword refers to the object that is currently executing the code. Its value depends on how a function is called, not how it's defined.",
      code: `// Global context
console.log(this); // Window (browser) or global (Node.js)

// Method context
const obj = {
  name: "John",
  greet() {
    console.log(\`Hello, \${this.name}\`);
  }
};

// Constructor context
function Person(name) {
  this.name = name;
}

// Arrow function (lexical this)
const arrowFunc = () => {
  console.log(this); // Inherits from enclosing scope
};`,
    },
    {
      id: 20,
      title: "null vs undefined",
      type: "comparison-table",
      description:
        "null and undefined represent the absence of value in JavaScript, but they have different meanings and use cases. Understanding the difference is important for debugging and type checking.",
      content: {
        headers: ["Feature", "null", "undefined"],
        rows: [
          ["Type", "object", "undefined"],
          ["Assignment", "Explicitly assigned", "Default value"],
          ["typeof", "object", "undefined"],
          ["Equality", "null == undefined (true)", "null == undefined (true)"],
          [
            "Strict Equality",
            "null === undefined (false)",
            "null === undefined (false)",
          ],
        ],
      },
    },
    {
      id: 21,
      title: "Error Handling (try...catch, throw)",
      type: "text-with-code",
      description:
        "Proper error handling is essential for robust applications. JavaScript provides try-catch blocks and the throw statement for managing errors gracefully.",
      code: `try {
  // Risky code
  const result = JSON.parse("invalid json");
} catch (error) {
  console.error("Error:", error.message);
} finally {
  // Always executes
  console.log("Cleanup");
}

// Custom errors
function validateAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  return age;
}`,
    },
    {
      id: 22,
      title: "Optional Chaining & Nullish Coalescing",
      type: "text-with-code",
      description:
        "Optional chaining (?.) and nullish coalescing (??) are modern JavaScript features that provide safer ways to access nested properties and handle null/undefined values.",
      code: `// Optional chaining
const user = {
  profile: {
    name: "John"
  }
};

console.log(user?.profile?.name); // "John"
console.log(user?.address?.street); // undefined

// Nullish coalescing
const value = null;
const defaultValue = "fallback";
const result = value ?? defaultValue; // "fallback"

// vs logical OR
const result2 = value || defaultValue; // "fallback"`,
    },
    {
      id: 23,
      title: "Modules (import / export)",
      type: "text-with-code",
      description:
        "ES6 modules provide a standardized way to organize and share code. They support both default and named exports/imports and enable better code organization.",
      code: `// Named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Default export
export default function multiply(a, b) {
  return a * b;
}

// Importing
import { add, subtract } from './math.js';
import multiply from './math.js';

// Dynamic imports
const module = await import('./dynamic-module.js');`,
    },
    {
      id: 24,
      title: "Destructuring & Spread/Rest",
      type: "text-with-code",
      description:
        "Destructuring assignment allows you to extract values from objects and arrays into distinct variables. Spread and rest operators provide flexible ways to work with arrays and objects.",
      code: `// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object destructuring
const { name, age, ...otherProps } = { name: "John", age: 30, city: "NYC" };

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}`,
    },
    {
      id: 25,
      title: "Map, Set, WeakMap, WeakSet",
      type: "text-with-code",
      description:
        "ES6 introduced new collection types that provide better alternatives to objects and arrays for specific use cases. They offer better performance and more appropriate APIs.",
      code: `// Map - key-value pairs with any key type
const map = new Map();
map.set('key', 'value');
map.set(42, 'number key');
map.set({}, 'object key');

// Set - unique values
const set = new Set([1, 2, 2, 3, 3, 4]); // {1, 2, 3, 4}

// WeakMap - keys must be objects, doesn't prevent garbage collection
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'value');

// WeakSet - values must be objects, doesn't prevent garbage collection
const weakSet = new WeakSet();
weakSet.add(obj);`,
    },
    {
      id: 26,
      title: "Symbol",
      type: "text-with-code",
      description:
        "Symbols are unique, immutable primitive values that can be used as object property keys. They're useful for creating private properties and avoiding naming conflicts.",
      code: `// Creating symbols
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false

// Using symbols as object keys
const obj = {
  [sym1]: 'value1',
  [sym2]: 'value2'
};

// Well-known symbols
const arr = [1, 2, 3];
arr[Symbol.iterator] = function*() {
  yield* this.reverse();
};

for (let item of arr) {
  console.log(item); // 3, 2, 1
}`,
    },
    {
      id: 27,
      title: "Object.freeze, Object.seal",
      type: "text-with-code",
      description:
        "Object.freeze and Object.seal are methods to make objects immutable to different degrees. They help prevent accidental modifications and create more predictable code.",
      code: `const obj = { name: 'John', age: 30 };

// Object.seal - prevents adding/deleting properties
Object.seal(obj);
obj.name = 'Jane'; // ✅ Allowed
obj.city = 'NYC'; // ❌ Not allowed
delete obj.age; // ❌ Not allowed

// Object.freeze - prevents all modifications
Object.freeze(obj);
obj.name = 'Jane'; // ❌ Not allowed
obj.city = 'NYC'; // ❌ Not allowed
delete obj.age; // ❌ Not allowed

// Deep freeze
function deepFreeze(obj) {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object') {
      deepFreeze(obj[prop]);
    }
  });
  return Object.freeze(obj);
}`,
    },
    {
      id: 28,
      title: "Strict Mode",
      type: "text-with-code",
      description:
        "Strict mode is a way to opt into a restricted variant of JavaScript that catches common coding mistakes and prevents certain actions that might be confusing or ill-advised.",
      code: `'use strict';

// Prevents accidental global variables
function test() {
  undeclaredVar = 10; // ReferenceError
}

// Prevents duplicate parameter names
function duplicate(a, a) { // SyntaxError
  return a;
}

// Prevents octal literals
const octal = 010; // SyntaxError

// Makes 'this' undefined in global functions
function globalFunc() {
  console.log(this); // undefined
}

// Prevents deleting undeletable properties
delete Object.prototype; // TypeError`,
    },
    {
      id: 29,
      title: "Event Bubbling & Capturing",
      type: "text-with-code",
      description:
        "Event bubbling and capturing are two phases of event propagation in the DOM. Understanding these helps in event handling and delegation.",
      code: `// Event bubbling (default)
parent.addEventListener('click', (e) => {
  console.log('Parent clicked');
});

child.addEventListener('click', (e) => {
  console.log('Child clicked');
  // e.stopPropagation(); // Prevents bubbling
});

// Event capturing
parent.addEventListener('click', (e) => {
  console.log('Parent captured');
}, true); // true enables capturing

// Event delegation
document.addEventListener('click', (e) => {
  if (e.target.matches('.button')) {
    console.log('Button clicked');
  }
});`,
    },
    {
      id: 30,
      title: "Map, Filter, and Reduce Methods",
      type: "text-with-code",
      description:
        "Map, filter, and reduce are powerful array methods that enable functional programming patterns. Understanding these methods is crucial for writing clean, readable JavaScript code.",
      code: `// Map - transforms each element in an array
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Map with objects
const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 }
];
const names = users.map(user => user.name);
console.log(names); // ['John', 'Jane']

// Filter - creates a new array with elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Filter with objects
const adults = users.filter(user => user.age >= 18);
console.log(adults); // [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]

// Reduce - accumulates values from an array into a single value
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

// Reduce with objects
const totalAge = users.reduce((total, user) => total + user.age, 0);
console.log(totalAge); // 55

// Chaining map, filter, and reduce
const result = numbers
  .filter(num => num > 2)
  .map(num => num * 2)
  .reduce((sum, num) => sum + num, 0);
console.log(result); // 18 (3*2 + 4*2 + 5*2 = 6 + 8 + 10 = 24)

// Practical examples
const products = [
  { name: 'Laptop', price: 999, category: 'electronics' },
  { name: 'Phone', price: 699, category: 'electronics' },
  { name: 'Book', price: 19, category: 'books' }
];

// Get total price of electronics
const electronicsTotal = products
  .filter(product => product.category === 'electronics')
  .reduce((total, product) => total + product.price, 0);
console.log(electronicsTotal); // 1698

// Get product names in uppercase
const productNames = products.map(product => product.name.toUpperCase());
console.log(productNames); // ['LAPTOP', 'PHONE', 'BOOK']`,
    },
    {
      id: 31,
      title: "Call Stack & Memory Management",
      type: "text-with-code",
      description:
        "Understanding the call stack and memory management is crucial for debugging and writing efficient JavaScript code. It helps identify performance issues and memory leaks.",
      code: `// Call stack example
function first() {
  console.log('First');
  second();
}

function second() {
  console.log('Second');
  third();
}

function third() {
  console.log('Third');
  console.trace(); // Shows call stack
}

first();

// Memory management
function createClosure() {
  const largeData = new Array(1000000).fill('data');
  return function() {
    console.log(largeData.length);
  };
}

const closure = createClosure();
// largeData is kept in memory even after createClosure finishes

// Garbage collection
let obj = { data: 'important' };
obj = null; // Object becomes eligible for garbage collection`,
    },
    {
      id: 32,
      title: "Recursion in JavaScript",
      type: "text-with-code",
      description:
        "Recursion is a programming technique where a function calls itself to solve a problem. It's useful for problems that can be broken down into smaller, similar subproblems.",
      code: `// Factorial using recursion
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Fibonacci using recursion
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8

// Tree traversal
function traverseTree(node) {
  if (!node) return;
  
  console.log(node.value);
  traverseTree(node.left);
  traverseTree(node.right);
}`,
    },
    {
      id: 33,
      title: "JavaScript Data Types: Primitive vs Reference",
      type: "comparison-table",
      description:
        "JavaScript has two categories of data types: primitive types and reference types. Understanding the difference is crucial for avoiding bugs and understanding how data is stored and passed.",
      content: {
        headers: ["Aspect", "Primitive Types", "Reference Types"],
        rows: [
          ["Storage", "Stored in stack", "Stored in heap"],
          ["Copying", "Copied by value", "Copied by reference"],
          ["Comparison", "Compared by value", "Compared by reference"],
          [
            "Examples",
            "string, number, boolean, null, undefined, symbol, bigint",
            "object, array, function",
          ],
          ["Mutability", "Immutable", "Mutable"],
        ],
      },
    },
    {
      id: 34,
      title: "Scope: Global, Function, and Block Scope",
      type: "text-with-code",
      description:
        "Scope determines the accessibility of variables in JavaScript. Understanding different scope types helps write better code and avoid variable conflicts.",
      code: `// Global scope
const globalVar = "I'm global";

function testFunction() {
  // Function scope
  const functionVar = "I'm in function scope";
  
  if (true) {
    // Block scope (ES6+)
    const blockVar = "I'm in block scope";
    console.log(blockVar); // ✅ Accessible
  }
  
  console.log(functionVar); // ✅ Accessible
  // console.log(blockVar); // ❌ Not accessible
}

console.log(globalVar); // ✅ Accessible
// console.log(functionVar); // ❌ Not accessible`,
    },
    {
      id: 35,
      title: "Implicit Type Coercion in JavaScript",
      type: "text-with-code",
      description:
        "JavaScript automatically converts values between types in certain contexts. Understanding type coercion helps predict behavior and avoid unexpected results.",
      code: `// String concatenation
console.log("5" + 3); // "53" (number coerced to string)

// Mathematical operations
console.log("5" - 3); // 2 (string coerced to number)
console.log("5" * "3"); // 15 (both coerced to numbers)

// Boolean context
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean(0)); // false
console.log(Boolean(42)); // true

// Loose equality
console.log(5 == "5"); // true (type coercion)
console.log(0 == false); // true
console.log(null == undefined); // true

// Truthy and falsy values
if ("hello") console.log("Truthy");
if (0) console.log("This won't run");
if ([]) console.log("Empty array is truthy");`,
    },
    {
      id: 36,
      title: "Object and Array Destructuring",
      type: "text-with-code",
      description:
        "Destructuring assignment allows you to extract values from objects and arrays into distinct variables. It provides a concise way to work with complex data structures.",
      code: `// Object destructuring
const person = { name: "John", age: 30, city: "NYC" };
const { name, age, country = "USA" } = person;
console.log(name, age, country); // John 30 USA

// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first, second, third); // red green blue

// Nested destructuring
const user = {
  profile: {
    name: "Jane",
    address: {
      city: "Boston"
    }
  }
};
const { profile: { name, address: { city } } } = user;
console.log(name, city); // Jane Boston

// Rest operator in destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(rest); // [3, 4, 5]`,
    },
    {
      id: 37,
      title: "Spread and Rest Operators",
      type: "text-with-code",
      description:
        "The spread operator (...) expands elements, while the rest operator collects elements. Both are powerful tools for working with arrays and objects.",
      code: `// Spread operator with arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Spread operator with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest operator in function parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Rest operator in destructuring
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log(remaining); // [3, 4, 5]

// Copying arrays and objects
const originalArray = [1, 2, 3];
const copyArray = [...originalArray]; // Shallow copy

const originalObject = { x: 1, y: 2 };
const copyObject = { ...originalObject }; // Shallow copy`,
    },
    {
      id: 38,
      title: "JavaScript Garbage Collection",
      type: "text-with-code",
      description:
        "JavaScript's garbage collector automatically frees memory by removing objects that are no longer referenced. Understanding this helps write memory-efficient code.",
      code: `// Automatic garbage collection
let obj = { data: "important" };
obj = null; // Object becomes eligible for garbage collection

// Memory leak example
function createLeak() {
  const element = document.getElementById('myElement');
  element.addEventListener('click', function() {
    // This function keeps reference to element
    console.log(element.textContent);
  });
}

// Better approach
function createNoLeak() {
  const element = document.getElementById('myElement');
  const text = element.textContent; // Store value, not reference
  
  element.addEventListener('click', function() {
    console.log(text);
  });
}

// Weak references
const weakMap = new WeakMap();
let obj = { data: "test" };
weakMap.set(obj, "metadata");
obj = null; // Object can be garbage collected`,
    },
    {
      id: 39,
      title: "WeakMap and WeakSet vs Map and Set",
      type: "comparison-table",
      description:
        "WeakMap and WeakSet are similar to Map and Set but with key differences in how they handle references and garbage collection.",
      content: {
        headers: ["Feature", "Map/Set", "WeakMap/WeakSet"],
        rows: [
          ["Key Types", "Any value", "Only objects"],
          ["Garbage Collection", "Prevents GC of keys", "Allows GC of keys"],
          ["Iteration", "Iterable", "Not iterable"],
          ["Size Property", "Available", "Not available"],
          ["Use Cases", "General purpose", "Memory-sensitive scenarios"],
        ],
      },
    },
    {
      id: 40,
      title: "Object.freeze() vs Object.seal()",
      type: "comparison-table",
      description:
        "Object.freeze() and Object.seal() are methods to make objects immutable to different degrees. Understanding their differences helps choose the right approach for data protection.",
      content: {
        headers: ["Feature", "Object.seal()", "Object.freeze()"],
        rows: [
          ["Add Properties", "❌ Prevents", "❌ Prevents"],
          ["Delete Properties", "❌ Prevents", "❌ Prevents"],
          ["Modify Properties", "✅ Allows", "❌ Prevents"],
          ["Nested Objects", "Not affected", "Not affected"],
          ["Use Case", "Prevent structure changes", "Complete immutability"],
        ],
      },
    },
    {
      id: 41,
      title: "Symbol Type in JavaScript",
      type: "text-with-code",
      description:
        "Symbols are unique, immutable primitive values that can be used as object property keys. They're useful for creating private properties and avoiding naming conflicts.",
      code: `// Creating symbols
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false

// Using symbols as object keys
const obj = {
  [sym1]: 'value1',
  [sym2]: 'value2'
};

// Well-known symbols
const arr = [1, 2, 3];
arr[Symbol.iterator] = function*() {
  yield* this.reverse();
};

for (let item of arr) {
  console.log(item); // 3, 2, 1
}

// Symbol.for - global symbol registry
const globalSym = Symbol.for('mySymbol');
const sameGlobalSym = Symbol.for('mySymbol');
console.log(globalSym === sameGlobalSym); // true`,
    },
    {
      id: 42,
      title: "Event Bubbling and Event Capturing",
      type: "text-with-code",
      description:
        "Event bubbling and capturing are two phases of event propagation in the DOM. Understanding these helps in event handling and delegation.",
      code: `// Event bubbling (default)
parent.addEventListener('click', (e) => {
  console.log('Parent clicked');
});

child.addEventListener('click', (e) => {
  console.log('Child clicked');
  // e.stopPropagation(); // Prevents bubbling
});

// Event capturing
parent.addEventListener('click', (e) => {
  console.log('Parent captured');
}, true); // true enables capturing

// Event delegation
document.addEventListener('click', (e) => {
  if (e.target.matches('.button')) {
    console.log('Button clicked');
  }
});

// Event phases
element.addEventListener('click', (e) => {
  console.log(e.eventPhase); // 1=capturing, 2=target, 3=bubbling
});`,
    },
    {
      id: 43,
      title: "JavaScript Modules (import/export)",
      type: "text-with-code",
      description:
        "ES6 modules provide a standardized way to organize and share code. They support both default and named exports/imports and enable better code organization.",
      code: `// Named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Default export
export default function multiply(a, b) {
  return a * b;
}

// Importing
import { add, subtract } from './math.js';
import multiply from './math.js';

// Dynamic imports
const module = await import('./dynamic-module.js');

// Re-exporting
export { add, subtract } from './math.js';
export * from './utils.js';

// Import aliases
import { add as addFunction } from './math.js';`,
    },
    {
      id: 44,
      title: "Call Stack in JavaScript",
      type: "text-with-code",
      description:
        "The call stack is a data structure that keeps track of function calls in JavaScript. Understanding it helps with debugging and understanding program flow.",
      code: `// Call stack example
function first() {
  console.log('First');
  second();
}

function second() {
  console.log('Second');
  third();
}

function third() {
  console.log('Third');
  console.trace(); // Shows call stack
}

first();

// Stack overflow
function infiniteRecursion() {
  infiniteRecursion(); // Causes stack overflow
}

// Maximum call stack size
console.log(new Error().stack.split('\n').length); // Shows stack depth`,
    },
    {
      id: 45,
      title: "Polyfills in JavaScript",
      type: "text-with-code",
      description:
        "Polyfills are code that implements a feature on web browsers that do not support the feature. They're essential for maintaining compatibility across different browsers.",
      code: `// Array.prototype.includes polyfill
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement, fromIndex) {
    return this.indexOf(searchElement, fromIndex) !== -1;
  };
}

// Promise polyfill (simplified)
if (!window.Promise) {
  window.Promise = function(executor) {
    // Implementation of Promise
  };
}

// Using polyfills
const arr = [1, 2, 3];
console.log(arr.includes(2)); // true (works even in older browsers)

// Modern polyfill approach
if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    for (let i = 0; i < this.length; i++) {
      if (predicate(this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  };
}`,
    },
    {
      id: 46,
      title: "Temporal Dead Zone in JavaScript",
      type: "text-with-code",
      description:
        "The temporal dead zone (TDZ) is the period between entering scope and the actual declaration of a variable. Understanding TDZ helps avoid reference errors with let and const.",
      code: `// Temporal Dead Zone
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;

// Function scope TDZ
function example() {
  console.log(y); // ReferenceError
  let y = 10;
}

// Block scope TDZ
if (true) {
  console.log(z); // ReferenceError
  const z = 15;
}

// Hoisting vs TDZ
console.log(a); // undefined (var is hoisted)
var a = 1;

console.log(b); // ReferenceError (let is not initialized)
let b = 2;

// TDZ in parameters
function test(param = param) { // ReferenceError
  console.log(param);
}`,
    },
    {
      id: 47,
      title: "Optional Chaining (?.) and Nullish Coalescing (??)",
      type: "text-with-code",
      description:
        "Optional chaining and nullish coalescing are modern JavaScript features that provide safer ways to access nested properties and handle null/undefined values.",
      code: `// Optional chaining
const user = {
  profile: {
    name: "John"
  }
};

console.log(user?.profile?.name); // "John"
console.log(user?.address?.street); // undefined

// Nullish coalescing
const value = null;
const defaultValue = "fallback";
const result = value ?? defaultValue; // "fallback"

// vs logical OR
const result2 = value || defaultValue; // "fallback"

// Practical examples
const config = {
  timeout: 0,
  retries: null
};

const timeout = config.timeout ?? 5000; // 0 (not null/undefined)
const retries = config.retries ?? 3; // 3 (null is nullish)

// Method calls with optional chaining
const response = await fetch('/api/data')?.json();
const length = response?.data?.length ?? 0;`,
    },
    {
      id: 48,
      title: "Currying vs Partial Application",
      type: "text-with-code",
      description:
        "Currying and partial application are related functional programming techniques, but they have different purposes and implementations.",
      code: `// Currying - transforms function to accept one argument at a time
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}

const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3)); // 6

// Partial application - fixes some arguments
function partial(fn, ...fixedArgs) {
  return function(...remainingArgs) {
    return fn.apply(this, fixedArgs.concat(remainingArgs));
  };
}

const add5 = partial((a, b) => a + b, 5);
console.log(add5(3)); // 8

// Practical example
const log = partial(console.log, 'DEBUG:');
log('User logged in'); // DEBUG: User logged in`,
    },
    {
      id: 49,
      title: "Tail Call Optimization in JavaScript",
      type: "text-with-code",
      description:
        "Tail call optimization (TCO) is a technique where the compiler optimizes recursive function calls to avoid stack overflow. It's particularly useful for recursive algorithms.",
      code: `// Regular recursive factorial (not tail-call optimized)
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // Not a tail call
}

// Tail-call optimized factorial
function factorialTail(n, acc = 1) {
  if (n <= 1) return acc;
  return factorialTail(n - 1, n * acc); // Tail call
}

// Fibonacci with TCO
function fibonacciTail(n, a = 0, b = 1) {
  if (n === 0) return a;
  if (n === 1) return b;
  return fibonacciTail(n - 1, b, a + b);
}

// Trampoline pattern for TCO
function trampoline(fn) {
  return function(...args) {
    let result = fn.apply(this, args);
    while (typeof result === 'function') {
      result = result();
    }
    return result;
  };
}`,
    },
    {
      id: 50,
      title: "Memory Leak Detection and Prevention",
      type: "text-with-code",
      description:
        "Memory leaks occur when memory is allocated but never freed. Understanding how to detect and prevent memory leaks is crucial for building robust applications.",
      code: `// Common memory leak patterns
  
  // 1. Forgotten timers/intervals
  const interval = setInterval(() => {
    console.log('Still running');
  }, 1000);
  // clearInterval(interval); // Don't forget to clear!
  
  // 2. Event listeners not removed
  function addListener() {
    const element = document.getElementById('button');
    element.addEventListener('click', handleClick);
    // element.removeEventListener('click', handleClick); // Clean up!
  }
  
  // 3. Closures holding references
  function createLeak() {
    const largeData = new Array(1000000).fill('data');
    return function() {
      console.log(largeData.length); // Keeps largeData in memory
    };
  }
  
  // 4. DOM references
  function createDOMLeak() {
    const element = document.getElementById('myElement');
    const data = { element }; // Element can't be garbage collected
  }
  
  // Prevention techniques
  function createNoLeak() {
    const element = document.getElementById('myElement');
    const text = element.textContent; // Store value, not reference
    
    return function() {
      console.log(text);
    };
  }
  
  // Memory leak detection
  function detectMemoryLeaks() {
    const initialMemory = performance.memory?.usedJSHeapSize || 0;
    
    // Run your code here
    
    const finalMemory = performance.memory?.usedJSHeapSize || 0;
    const memoryIncrease = finalMemory - initialMemory;
    
    console.log(\`Memory increased by: \${memoryIncrease} bytes\`);
  }`,
    },
  ],
};
