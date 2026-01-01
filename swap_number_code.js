let num1 = 69 , num2 = 96;

let num11 = 2 , num12 = 4;

console.log("USING THE XOR OPERATOR TO SWAP");
console.log("----------------------------------------------");
num1 = num1 + num2;
num2 = num1 - num2
num1 = num1 - num2;
console.log(num1 , num2);

console.log("USING THE ARITHMETIC OPERATOR TO SWAP");
console.log("----------------------------------------------");
num11 = num11 ^ num12;
num12 = num11 ^ num12;
num11 = num11 ^ num12;
console.log(num11 , num12);