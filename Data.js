// Primitive data types in JS
age = 21
name = "Vallabh Sardesai"
big_one = 24469648593467548509346546776654
ismale = true
height = 5.11

// undefined variable
var city;
let country;

// null
let pincode = null;
var citycode = null;

let company_id = Symbol("@Vallabh");
const PI_sym = Symbol("@3.14");

// object data types
let person = 
{
    name: "Vallabh Sardesai",
    age : 21,
    email : "sardesaivallabh@gmail.com",
    phone : "+91 942011323"
};

let cases =
{
    topic : "Civil-Case",
    result : "Defender Won",
    year : 2023,
    durationyears : 3.5,
    isover : true,
    lawyername : undefined
};

// array
const charsa = [ 'A','B','C'];
const matrix = [ [2,2,2] , [3,3,3] , [4,4,4]];

// declarations
console.log(person);
console.log(cases);
console.log(charsa);
console.log(matrix);
console.log(company_id);
console.log(PI_sym);

console.log(name);
console.log(big_one);
console.log(ismale);
console.log(height);
console.log(city);
console.log(pincode);
// useing the typeof operator
console.log("---------------------------------------------------------------------");
console.log(typeof person);
console.log(typeof cases);
console.log(typeof charsa);
console.log(typeof matrix);
console.log(typeof company_id);
console.log(typeof PI_sym);

console.log(typeof name);
console.log(typeof big_one);
console.log(typeof ismale);
console.log( typeof height);
console.log(typeof city);
console.log( typeof pincode);
console.log("---------------------------------------------------------------------");
console.log(Array.isArray(charsa));
console.log(Array.isArray(person));
console.log(Array.isArray(matrix));

// console is a gloabal object in JS
// and .log()   .error()   .warn()   .info()  are METHODS
console.log("---------------------------------------------------------------------");
console.log(" NOW THE FUNCTION DATA TYPE OF JS");

function calage(byear , cyear)
{
    return cyear - byear;
}
console.log(calage(2005,2025));
console.log(typeof calage);

function isbig(a,b)
{
    return a > b;
}
console.log(isbig(45,22));
console.log(isbig(9,33));

console.log("---------------------------------------------------------------------");
console.log("---------------------------------------------------------------------");

function factorial(n)
{
     let res = 1;
     for(let i = 1 ; i <= n ; i++)
     {
        res *= i;
     }
     return res;
}

console.log(factorial(5));
// any ooeration with NAN gives = NAN 

console.log("---------------------------------------------------------------------");

//  Precerdednce Operwtors is : 
console.log(" 1) () ");
console.log(" 2) ** ");
console.log(" 3) *   /   % ");
// comparison operator ->  equality opretaor -> Logical Operator -> Assignment Operators
//  + and -   WORKS FROM LEFT-> RIGHT
// ASSIGNEMNT AND POWER   AND LOGICAL OPEAROTR   :   Right->Left

console.log("---------------------------------------------------------------------");

