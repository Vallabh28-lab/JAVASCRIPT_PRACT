
// Declare an array of cards
const deck = ['A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠',
              'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥', 
              'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
              'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣'];

console.log(deck);

const player_name = [ "vaLLabh" , "RaM" , "raNA" , "Rohit" , "Krishna"];
console.log(player_name);

[1243253453242n , 2432533266n , 254232n].forEach( n=> {console.log(n/2n);} );
player_name.forEach(n=> { console.log("Hello : " + n); } );

let is_correct = [false , true , true];
is_correct.forEach(n=> { console.log(Number(n)); } );

let mixed_array = [true , 85346342n , 1.43222 , 'V' , "Vallabh" , 999];
mixed_array.forEach(m=> { console.log(m); } );
mixed_array.forEach(m=> { console.log(String(m));} );

console.log("----------------------------------------------------------");

const college_erp = 
[
    {name:"Vallabh" , DOB : 28 , height : 166.7},
    {name : "Vedant" , DOB : 17 , height : 167.2}
]
college_erp.forEach(m=> {console.log(m.name);} )
college_erp.forEach(m=> { console.log(m.DOB); } )

let matrix_makrs = [ [19,18] , [20,12]];
matrix_makrs.forEach(m=> {m.forEach ( row=> { console.log(Math.ceil(row/2)); } ); } )

console.log("----------------------------------------------------------");

let class_height = [ 166.5 , 170.3 , 167.4 , 156.8 , 172.4 , 173.6 ];
class_height.forEach( m=> { console.log(parseInt(m)); });

console.log("----------------------------------------------------------");

const date_today = new Date(2026 , 0 , 23);
console.log(date_today);

const dates_calendar = [ new Date(2026,0,22) , new Date(2026,0,23)];
dates_calendar.forEach(m=> { console.log(  m.toDateString() ); } );

console.log("----------------------------------------------------------");

// 1) sum using for each
let sum = 0;
class_height.forEach(m=> { sum += m} );
console.log(sum);

//2) find odd or even
let odd_ones = [] , even_num = [];
class_height.forEach(m=> {  if((m & 1) == 0) { even_num.push(m);}  else { odd_ones.push(m);}   }   );
console.log(odd_ones);
console.log(even_num);

// 3) uppercase lowercase
let upper_al = [] , lower_al = [];
player_name.forEach(m=> {  upper_al.push(m.toUpperCase() );  lower_al.push(m.toLowerCase());});
console.log(upper_al);
console.log(lower_al);

// 4) print index of array
is_correct = [false , true , true];
is_correct.forEach((m,i) => { console.log(i + " -> " + m ); });

// 5) MODIFY original array
let gym_wt = [ {w:67} , {w:70}];
gym_wt.forEach(m=> { m.price -= 5; } );
console.log(gym_wt);

// 6) count voweels
let village = [ "Alandi" , "Pune" , "Banda" , "Wadi"];
let count_vow = 0;
village.forEach
(    m=> 
    {
        for(let ch of m)
        {
            if("aeiou".includes(ch)) { count_vow++;}
        }
    }
)
console.log(count_vow);

// 8) Check validity
let email_login = [ "Vallabh@gmail.com" , "Naman@gmail.com" , "maheshgmail.com"];
email_login.forEach
(     m=> 
    {
        if(!m.includes('@')) { console.log("Invalid  -->  " + m); }
    }
); 

// 8) 
let purchased = [  {item : "Powder" , p : 200} , { item : "Brush" , p : 60} ];
let total_purc = 0;
purchased.forEach( m=> {  total_purc += m.p; } );
console.log(total_purc);
let cx = 1;
purchased.forEach( n=> {  console.log(cx + ". " + n.item); cx++; });

console.log("----------------------------------------------------------");

let equip = [ "Bricks" , "Hammer" , "Cement" , "Cutter"];
let consonants = 0;
equip.forEach( m=> 
            {       for(let ch in m)
                    {
                       if(!"aeiou".includes(ch))
                        {
                            consonants++;
                        } 
                    }
            })
console.log("TOTAL NUMBER OF CONSONANTS ARE : " + consonants);
console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");

console.log("-------------------------------- SOME REAL WORLD EXAMPLES --------------------------------------------");

// 1) CHECK empty inputs()
const fields_web = [ {name : ""} , {name : "Vallabh"} ];
fields_web.forEach
(   f=>
{
    if(!f.name)
    {
        console.error("INVALID USERNAME!!");
    }
    else
    {
        console.log("WELCOME " + f.name);
    }
}
)

// 2) DISABILITY OF buttons
let buttons_web = 
[
    { button : "Delete" , role : "admin"} , { button : "Delete" , role : "user"}
]
buttons_web.forEach
(
    m=>
    {
        if(m.role !== "user" )
        {
            console.log("WELCOME ADMIN ! " + "OPERATION IS : " + m.button);
        }
    }
)

// 3) check expiry date;
const dairy_prd =
[
    { prd : "Bread" , days : 12} , { prd : "Butter" , days : 7}
]

console.log(dairy_prd);
dairy_prd.forEach
(
    m=>
    {
        if(m.days > 8)
        {
            m.status = "Expired";
        }
        else
        {
            m.status = "Fresh";
        }
    }
)
console.log(dairy_prd);

// 3) sumarry
let order_sumarry = 
[
    { topic : "Order Done" , status : true} , { topic : "Payment" , status : false}
]
order_sumarry.forEach
( m=>
    {
        if(!m.status)
        {
            console.log("PENDING ->  " + m.topic);
        }
    }
)

// 4) files size
const file_size = 
[
    {name : "vid.mp4" , size : 124} , { name : "my.jpeg" , size : 212}
]
file_size.forEach
(   m=>
{
    if(m.size > 200)
        {
            console.log("YOUR FILE EXCEEDS LIMIT  ->" + m.name);
        } 
    else
    {
        console.log("CORRECT FILE SELECTED  ->" + m.name);
    }
}
)

// 5) UI cahnge examples
const passwords_legal =
[
    {username : 'V' , pass : "#efe34#232$$"} , {username : 'A' , pass : "#efe37#119$$"} , {username : 'B' , pass : ""}
]
passwords_legal.forEach
(   m=>
{
    if(!m.pass)
    {
        console.log(`🔴 ${m.username} INVALID ENTRY OF PASSWORD`);
    }
}
)


/// ARRWO FUNCTIONS EMBEDED IN FOR EACH
//  passwords_legal =
// [
//     {username : 'V' , pass : "#efe34#232$$"} , {username : 'A' , pass : "#efe37#119$$"} , {username : 'B' , pass : ""}
// ]
new_password_legal = passwords_legal;

new_password_legal.forEach
(
    obj => 
    {
         if(!obj.pass)
         {
            console.log( " ❌ YOU HAVE ENTERED THE INVALID PASSWORD -> " + obj.username);
         }
    }
)

new_password_legal.forEach
(
    function(obj) 
    {
         if(!obj.pass)
         {
            console.log(" ⚠️ YOU HAVE ENTERED THE INVALID PASSWORD ->" + obj.username);
         }
    }
)

//  .MAP()  it applies a formuale and then we get a NEW ARRAY
// 1)
let states_india = [ "Maharshtra" , "Goa"];
let upper_states = states_india.map(m=>  m.toUpperCase());
console.log(upper_states);

// 2)
let state_info =
[
    {state: "Goa" , Cap : "Panjim"}, { state : "Assam" , Cap : "Dispur"}
]
let capital_city = state_info.map(m=> m.Cap.toUpperCase());
console.log(capital_city);

// 3)
let price_tag =
[
    {price : 1090} , { price :  2010}
]
let price_gst = price_tag.map(m=> {return { price : m.price , gst : m.price*0.18 }});
console.log(price_gst);








