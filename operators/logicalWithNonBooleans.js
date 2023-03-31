
// Falsy (false)
    // undefined
    // null
    // 0
    // false
    // ''
    // NaN

// Anithing that is not Flsy -> Truthy
// Short-circuiting

let userColor = 'red'; 
let defaultColor = 'blue';
let currrentColor = userColor || defaultColor;

console.log(currrentColor);