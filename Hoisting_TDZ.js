//  HOISTING
// 🔴   1) var is HOISTED and can be initialized with UNDEFINED;
//  🔴 2) let and const are HOISTED but give ERROR => ( TDZ error)
var len;
var new_len = NaN;
console.log( len);
console.log( new_len);

len = 12.5;
new_len = 15.8;
console.log( len );
console.log( new_len );

console.log("--------------------------------------------------------------");

console.log(temp_age);          // UNDEFINED var still works ( no TDZ error)
var temp_age = 22;
console.log(temp_age);

console.log("--------------------------------------------------------------");
/*
console.log( salary_thousand);
console.log( new_sal);
const salary_thousand_1  = 12.6;               // 🔴 TDZ error due to scope of CONST
let new_sal = 2003;                      // 🔴 TDZ error due to scope of LET
console.log(new_sal);
console.log(salary_thousand_1);   */

// FUNCTION EXPRESSION  ==>  do not give TDZ (  unless the inintitialized by LET or CONST or VAR)
console.log( greet() );

function greet()
{
    return " Hello Vallabh ";
}


//  🔴 1) var is hoiseted and INITIALIZED with   UNDEFINED
// 🔴  2)  Let and CONST are hoisted but they GIVE the TDZ ERROR

/*        console.log( v1 );                      // v1 is hoisted BUT not INITIALIZED

        let v1 = function greet1()          // use VAR use LET use CONST ===> TDZ ERROR
        {
            return " Hello Vallabh ";
        }
*/

// 🔴  use of the TDZ     AVOIDS THE ACCIDENTAL ACCESS OG THE variables BEOFRE INITIALIZING THEM

//   🔴  FUNCTION DECALREATION ====>  fully hoisted + no TDZ erorr
//   🔴   FUNCTION EXPRESSIONS ======> uses the RULES of the var / let / const   (    gives TDZ ERROR  )



//     🔴  LET AND CONST ALWAYS STAY IN ==>  TDZ   not the VAR
console.log("--------------------------------------------------------------");
console.log( NaN == NaN);
console.log( NaN === NaN);
let nan_num = NaN;
console.log( Number.isNaN(nan_num));
console.log( isNaN(nan_num));
console.log("--------------------------------------------------------------");

                //            TYPE CONVERSION / CASTING / COERCION 
//  Type Conversion
//    ===>   developer uses the BUILTIN methods or FUNCTIONS to convert
console.log(Number(44.33));
console.log(Number(35756545345n));
console.log(Number(true));
console.log(Number("vallabh"));
console.log(parseInt("1323343"));
console.log(parseInt(325434.4545));
console.log(parseInt("vallabh"));
console.log(parseInt(4534534n));
console.log("--------------------------------------------------------------");
console.log(parseFloat("53454.43"));
console.log(parseFloat(3434));

// Type casting
//  ====> COMPILER treats the VALUE as a diefferent data type

// TYPE COERCION
//  ====> JavaScript automatically converts types

String( 34 );


Boolean(99);
Boolean("vallabh");

BigInt( 532);
console.log("--------------------------------------------------------------\n");
console.log( "--------------- DEFAULT PARAMETERES ---------------------");
console.log(" provide fallback values when arguments are missing \n");

console.log( "--------------- REST PARAMETERES ---------------------");
console.log(" provide arguments in ( AS MUCH VARIABLES ARE THERE ) in arrays  when arguments are missing \n");
console.log("--------------------------------------------------------------");

console.log("  --------------------------------   ECMASCRIPT ES6 CONCEPTS -------------------------- \n\n");
// 🔴 Rest Parameters  Spread Operator (...)    Spread Operator (...)  Modules (import / export) 

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

 /*               console.log(sum(5));  // hoisting error due to LET
                var sum = (n) =>
                {
                    let sum = 0;
                    while(n > 0)
                    {
                        sum += n;
                        n--;
                    }
                    return sum;
                }
    */

 console.log(sum1(3));
// var sum1 = (n) =>      gives TDZ ( not a function ERROR )
   function sum1(n)         // no TDZ
 {
     var sum = 0;
     while(n > 0){
         sum += n;
         n--;
     }
     return sum;
 }
 console.log(sum1(3));
console.log(ab_dev);
var ab_dev = 100;

// FUNCTION EXPRESSIons  CANT BE HOISTED
// for the var keyword DECLARATIONS DECLARATION AND INITIALIZATION IS hoisted on the top.
get_age();
function get_age(p)
{                                   // NO TDZ ----> 
    console.log(2026-p);
}

// functions decalred with any var/let/ const

console.log("---------------------------------------------------------------------------------------");
console.log("---------------------------------------------------------------------------------------");

console.log("1. EXPLAINATION OF EXECUTION CONTEXT CREATION  2. CALL STACK CREATION ");
console.log("3. GLOBAL EXECTION CONTEXT  ");

console.log("---------------------------------------------------------------------------------------");
console.log("---------------------------------------------------------------------------------------");

console.log("1. FUNCTION DECLARTAION DO  GIVE TDZ ( ALLOWS HOISTING ) ");
console.log("2. FUNCTION EXPRESSIONS DO NOT GIVE TDZ ");
console.log("3. CLASS LEVEL HOISTING IS NOT POSSIBLE ")


console.log("---------------------------------------------------------------------------------------");
console.log("---------------------------------------------------------------------------------------");


// ----------------------------------------------------------------------
console.log(ret_name("Vallabh"));   // arrow function gives TDZ
function ret_name(a)                // NORMAL FUNCTION no TDZ  ( js moves this FUNCTION above of all declareations)
{
    return a;
}

