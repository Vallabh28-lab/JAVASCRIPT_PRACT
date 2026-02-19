console.log("⚠️ THIS IS ASYNCHRNOUS LECTURE OF JAVASCRIPT ⚠️");
console.log("⚠️ HOISTING ⚠️");

// 1)
root(16);
function root(n)
{
    console.log(Math.sqrt(n));
}
//  2)
// root_1(16);                  TDZ error
// var root_1 = function(n)
// {
//     console.log(Math.sqrt(n));
// }
         // ⚠️ var , const gives TDZ / REFERENCE ERRORS ⚠️

// 3)  production bug   ( ⚠️  UNSAFE BEHAVIOUR )
var ifsc = "691SBIN";
function update()
{
    console.log(ifsc);
    var ifsc = "196SBIN";
}
update();

// 4) MINIMIZED production bug ( ⚠️ SAFE BEHAVIOUR )
let b_id = "SBI_MH07";
function update_id()
{
    //console.log(b_id);
    let b_id = "SBI_MH08";
}
update_id();

// 5) 
if(true) // also can be FALSE
{
    function root(n)
    {
        console.log(Math.sqrt(n));
    }
}
root(17);

// 6) overrdiding
var code = 616;
function code()
{
    console.log("616");
}
//code();  ERROR  ( preference to the variable not to function)
// console.log(code());  ERROR  ( preference to the variable not to function)
console.log(code);

// 7)
console.log(barcode);
console.log(barcode());
function barcode() 
{
    return "897";
}
var barcode = 896;

// 8)  
console.log("VAR ALWAYS ATTACHES TO THE GLOBAL OBJECT");
var key = 9900;
console.log(global.key);
let k1 = 1234;
console.log(global.key);
console.log(global.k1); // no window.k1 because let and const do not attach to the global object

// 9)
console.log("THE CLASS IN JAVASCRIPT ARE HOISTED IN TDZ ---> ARISES THE ERROR");
// 10)
inner();
function inner()
{
    console.log("Hello from inner function");
}

// 11) undefined becoz VAR IS hoisted and initialized with undefined
var ctime = 12.05;
function lecture()
{
    console.log(ctime);
    var ctime = 12.10;
}
lecture();

// 12)
function lecture_dbms(delay)
{
    console.log(ctime + delay);
    var delay = 0.90;
    console.log(delay);
}
lecture_dbms(0.80);

// 13) TRAP
for(var i = 0 ; i < 5 ; i++)
{
    setTimeout( function() { console.log(i); } , 1); // let → "i LIVES FOREVER each loop step"
}
for(let i = 0 ; i < 5 ; i++)   /// let → "i dies after each loop step"
{
    setTimeout( function() { console.log(i); } , 1);
}

// 14)
var q = 100;
function q1()
{
    console.log(q);
    var q = 50;
    return function()
    {
        console.log(q);
    };
}
var q2 = q1();
q2();


// --------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------
console.log("⚠️ THIS IS ASYNCHRNOUS LECTURE OF JAVASCRIPT ⚠️");
console.log("⚠️ CALLBACKS ⚠️");
console.log("✅ Callback = function executed inside another function");
// 1)----------------------------------------  ASYNC AWAIT EX..

console.log("START");
setTimeout(
    ()=>
    {
        console.log("THIS RUNS LATER");
    } , 2000
);
console.log("END");




