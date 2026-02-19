console.log("------------------------------------------------------------------");
console.log(" THREE TYPES OF SCOPES IN JAVA SCRIPT ");

console.log(" 1. Block Scoped ");
console.log(" 2. Function Scoped ");
console.log(" 3. Lexical Scoped ");

// ● let and const are BLCOK SCOPED  { inside this only valid }
// ES6 javascript includes this ======>   LOOPS uses this.

// ●  VAR keyword do not dollow this scope


//               FUNCTIONS SCOPED =========>
//   ● var let const are FUNCTIONS SCOPED

function birth_y(a)
{
    a = 2025 - a;
    function c_y(a)
    {
        a += 1;
        return a;
    }
    return c_y(a);
}

console.log( birth_y(2005) ); 

// ● LEXICAL scoped ( STATIC scoped )
//   nested fiunctions follow LEXICAL SCOPE.

// ---------------------------------------------------------------------------------------------------------------------
// recursive function
console.log("------------------------------------------------------------------");
function factorial(n)
{
        if(n === 0 || n === 1) { return 1;}
        return n*factorial(n-1);
}

const val_num = (n , func) =>
{
    for(let i = 1 ; i <= n ; i++)
    {
        console.log(`${i}!  =  ${func(i)}  `);
    }
};

val_num(5 , factorial)
console.log("------------------------------------------------------------------");
// -------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
console.log("------------------------------------------------------------------");
console.log( ` THE USE OF THE map FUNCTIONS IN JS `);
console.log("------------------------------------------------------------------");

let sum = 0;
let arr1 = [ 1,4,16,25,36,49];
let add_1 = arr1.map( n => n+1);
console.log( arr1 );
console.log( add_1 );
console.log("------------------------------------------------------------------");
console.log("------------------------------------------------------------------");

let numb_ers = [ 33,44,55 ];
let to_str = numb_ers.map(n => String(n));
console.log(numb_ers);
console.log(to_str);

// -----------------------------------------------------------

let find_even = numb_ers.filter(m => m%2 != 0);
console.log( find_even);

console.log("------------------------------------------------------------------");
console.log("------------------------------------------------------------------");

let name_players = [ "Vallabh" , "Max" , "Pranali" ];

function greet_everyone(array)
{
    let greeting = array.map(n => "Namaste : " + n);
    console.log(greeting);
}

greet_everyone(name_players);
console.log("------------------------------------------------------------------");
console.log("------------------------------------------------------------------");

let player_info_college =
[
    {name : "Vallabh" , age : 21 , height : 168.5},
    { name : "Amit" , age : 21 , height : 164.5},
    { name : "Sumit" , age : 22 , height : 172.5}
]

let arr_access = player_info_college.map(n => n.name);
console.log(arr_access);

let selected = player_info_college.filter( n => n.height > 168.00);
console.log(selected);

console.log("------------------------------------------------------------------");
console.log("------------------------------------------------------------------");

let len_ele = name_players.map(n => n.length);
console.log(len_ele);

console.log("------------------------------------------------------------------");

////   ●     .filter .map()  RETURNS AN ARRAY NEW ARRAY
//     ●     .reduce()  RETURNS 'only' A SINGLE VALUE
////////////  ●   imp

// 1)  returning a new ARRAY using .map() ------------------------------------------------------------------------------------

const products_shope = 
[
    {name : "LAPTOP" , price : 20000},{name : "CELLPHONE",price:15000}
];

const product_bill = products_shope.map
(     // create HTML for each product
    p=> `<div class = "card"> ,<h3> ${p.name} </h3>  <p> RS.${p.price} </p> </div>`
);

 // document.body.innerHTML = product_bill.join(" ");  CANT BE DISPLAYED ON TERMINAL

 // 2)      -------------------------------------------------------------------------------------------------------------------
 const price_arr = [1000,20000,30000];
 const list_prices = price_arr.map( u=> `<li> ${u} </li> `);
 //document.getElementById("users").innerHTML = list_prices.join(" ");


 // 3) GST using .mape() ---------------------------------------------------------------------------------
 const gst_app_price = price_arr.map( m=>  m + (m*0.18) );
 console.log(gst_app_price);

 // 4) ADDING THE id's FOR THE REACT 
 let names = ["VEGIES" , "FRUITS" , "STATIONARY"];
 let names_with_ID = names.map( (item,index)=> ({ id : index+1 , name : item}) );
 console.log(names_with_ID);

 // 5) formatting the PRICES
 let foramt_price = price_arr.map(p=> `RS.${p}`);
 console.log(foramt_price);

 // 6) EXTRATING THE URL
 const image_URL =
 [
    {url : "img1.jpeg"} , {url : "img2.jpeg"}
 ];
 const img_URL = image_URL.map( i => "http:/url&pqr"+ i.url);
 console.log(img_URL);

 // 7) 
 let form_data = 
 [
    {label : "Name" , value : "Student", token : 0} , {label : "Rao" , value : "Profession" , token : 0}
 ]
 
 
