// JS Operators

// Arithmetic
// Assignment
// Comparison
// Logical
// Bitwise
// Ternary
// Type

// ############ Arithmetic |  +, -, *, /, %, ++, --, ** ############
// +  Add | - Sub | * Mul | /  Division | % Modulus (Division Remainder)
// ++ Increament | -- Decreament | ** Exponentiation |

let x = 12;
let y = 5;
let z;
console.log('ARITHMETIC OPERATORS');
console.log(x + y); //17
console.log(x - y); //7
console.log(x * y); //60
console.log(x / y); //2.4
console.log(x % y); //2
console.log(++x); // 13 (Added 1 to X) | Prefix
console.log(x++); // 13 (Added 1 to X) | Postfix
console.log(x); // 14 (After ++ Increament)
console.log(x--); // 14 (Subtract 1 from  X) | Postfix
console.log(x); // 13 (After -- Decreament)
console.log(--x); // 12 (After -- Decreament) | Prefix
console.log(y ** 2); // 25 (First operand to the power of the second operand )

// ############ Assignment |  =, +=, -=, *=, /=, %=, **= | ############
// x=12 , y = 5
console.log('ASSIGMENT OPERATORS');
console.log((z = x + y)); //Assigning x+y value(17) to z, now z vlaue is 17
console.log((x += y)); // x = x+y | Now x value is 17
console.log((x -= y)); // x = x-y | Now x value is 12
console.log((x *= y)); // x = x*y | Now x value is 60
console.log((x /= y)); // x = x/y | Now x value is 12
console.log((x %= y)); //  x = x%y | Now x value is 2
console.log((x **= y)); //  x = x**y | Now x value is 32

// ############ Comparison |  ==, ===, !=,!== >, <, >=, <=  | ############
// == : Equal to
// === : Equal Value & Equal Type

// != : Not Equal
// !== : Not Equal Value/Type

// > : Greater Than
// < : Less Than

// >= : Grater Than Or Equal To
// <= : Less than Or Equal To

// ? : Ternary Operator

// RETURNS BOOLEAN

console.log('COMPARISON OPERATORS');
let [n1, n2, n3] = [10, 15, 10];
let [s1, s2, s3] = ['10', '20', '10'];
// == Checks only value
console.log(n1 == n3); // True | 10 == 10
console.log(n1 == n2); // False | 10 == 15
console.log(n1 == s1); // True | 10 == "10"

// === Checks Type & Value
console.log(n1 === n3); // True | 10 === 10 (type & value is equal)
console.log(n1 === n2); // False | 10 === 15 (value is not equal)
console.log(n1 === s1); // False | 10 === "10" (type is not equal)
console.log(s1 === s3); // True | "10" === "10" (type & value is equal)

// != Checks Only Value
console.log(n1 != n3); //False | 10 != 10 (10 is equal to 10)
console.log(n1 != n2); //True | 10 != 15 (10 is not equal to 15)
console.log(n1 != s1); //False | 10 != "10" (Checks only value not type)
console.log(s1 != s2); //True | "10" != "20" (Checks only value not type)

// !== Checks Type OR Value
console.log(n1 !== n3); //False | 10 !== 10 (10 is equal to 10)
console.log(n1 !== n2); //True | 10 !== 15 (10 is not equal to 15)
console.log(n1 !== s1); //True | 10 !== "10" (Checks type OR value)
console.log(s1 !== s2); //True | "10" !== "20" (Checks type OR value )

console.log(32 !== '32'); // True
console.log(32 !== 32); // False

// > Greater than | < Less than
console.log(10 > 33); // False
console.log(12 < 32); // True

// >= Greater than/equal to <= less than/equal to
console.log(10 >= 4); //True
console.log(10 <= 4); //False
console.log(10 <= 10); //True
console.log(10 >= 10); //True

// Ternary Operator| &&, ||, !| ########
console.log('TERNARY OPERATOR');
let t1 = 10 == 10 ? 'True 10 is equal to 10' : 'False';
let t2 = 10 > 20 ? 'True' : 'False';

console.log(t1);
console.log(t2);

// Logical Operator| | ########

// Logical &&
console.log(10 < 20 && 10 == 10); // True | TT = T
console.log(10 > 6 && 10 < 2); // False | TF = F
console.log(10 < 6 && 10 > 2); // False | FT = F
console.log(10 < 6 && 10 == 2); // False | FF = F

// Logical ||
console.log(10 < 20 || 10 == 10); // True | TT = T
console.log(10 > 6 || 10 < 2); // True | TF = T
console.log(10 < 6 || 10 > 2); // True | FT = F
console.log(10 < 6 || 10 == 2); // False | FF = F

// Logical !
console.log(!(10 == 10)); //False

//  String + Number
console.log('STRING + NUMBERS');

let m = '1' + 1;
console.log(m); //11 (string)

let n = 2 + '2';
console.log(n); //22 (string)

let o = 2 + 'Hello';
console.log(o); //2Hello (string)

let p = 2 * '2';
console.log(p); //4 (Number)

let q = '2' * 4;
console.log(q); //8 (Number)

let r = 'Hello' * 4;
console.log(r); //NaN

let s = 4 * 'Hello';
console.log(s); //NaN

