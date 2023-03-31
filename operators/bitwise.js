
// 1 = 00000001
// 2 = 00000010

// R = 00000011 (OR)
// R = 00000000 (AND)

console.log(1 | 2); // bitwise OR
console.log(1 & 2); // bitwise AND

// Read, Write, Execute
// 00000100 = Read
// 00000110 = Read, Write
// 00000111 = Read, Write and Execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes': 'no';

console.log(message);

// with the bitwise OR operator we can add permissions
// with the bitwise AND operator we can check to see if we have a given permission