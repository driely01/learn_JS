/* 
    in js we have primitive types (value types) and reference types
        => in Reference types we have
            + Object
            + Array
            + Function
    in this section we will see the object
        => Object is an object in the real life like a person has a name, age, address and so on.
            thses are the properties of a person we the same concept in javascript
*/

let person = {
    name: 'driss',
    age: 21
};

console.log('name: ' + person.name); // dot notation
console.log('name: ' + person['name']); // bracket notation