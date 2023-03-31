
// Logical AND (&&)
// Returns True if both oprands are true
console.log(true && true);       // true
console.log(false && true);     // false
console.log(true && false);     // false
console.log(false && false);    //false

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log('eligibaleForLan: ' + eligibleForLoan);

// Logical OR (||)
// Returns True if ne of oprands is True

// Not (!)
let applicationRefused = !eligibleForLoan;
console.log(applicationRefused);