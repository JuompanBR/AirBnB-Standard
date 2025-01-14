// Airbnb coding style for javascript
/**************** 
 * Types
 ****************/ 
// Accessing a primitive, you work directly on its value
const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar);

// Accessing a complex type, you work on its reference
const foo1 = [1, 2];
let bar1 = foo1;

bar1[0] = 9;

console.log(foo1[0], bar1[0]);

/**************** 
 * Objects
 ****************/
// 3.2 Use computed property names when creating objects
// with dynamic property names/attributes.

function getKey(k) {
    return `a key named ${k}`;
}

// bad
const obj = {
    id: 5,
    name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
};

/**************** 
 * Destructuring
 ****************/
// use destructuring when defining methods
function foo({a, b}) {
    // do something
};

// use destructing to return multiple values
function foo1() {

    const user = {
        name: 'Goummo bill',
        age: 20,
    };

    const {name, age} = user;

    return {name, age};
};

/**************** 
 * Strings
 ****************/
// use single quotes to define string literals
const name = 'Goummo bill';

// donot use broken strings for long strings
const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

// when dynamically building up strings, use string templates instead of concatenation
function sayHi(name) {
    return `How are you ${name} ?`;
};
// never use eval() for strings, it opens too many vulnerabilities
// do not unnecessarily  escape characters