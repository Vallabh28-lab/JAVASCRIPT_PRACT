let mixed_prinmitves = 
[
    42.34325 ,34242 ,  "🐍" , true , null , undefined , Symbol('$') , BigInt("98309738546789543567865") , NaN , "Vallabh" , "Sam"
];

let emp_port =
[
    {
    id : 1 , name : "Vallabh Sardesai" , salary : 250 , skills : ["JavaScript" , "TS" , "React"] , 
    active : true , joining_data : new Date("2026-01-01") , perform : NaN 
    },
    {
        id : 2 , name : "Sam" , salary : 454 , skills : new Set( ["Express","Mongo"]), 
        active : false , joining_data : new Date("2026-01-02") , perform : NaN 
    }
];

let work_emails =
[
    "user11@gmail.com" , "abhi22@gmail.com" , "ahan@yahoo.com" 
];

let status =
[
    {id : 1 , status : "Delivered"} , {id : 12 , status : " Not Delivered"} , {id : 32 , status : "Delivered"}
];

let order_dates =
[
    new Date("2026-02-01") , new Date("2026-01-11") , new Date("2025-11-01")
];

let transaction_id = 
[
    4355632534787874n , 267862525575687563n , 3554898799865422n
];

console.log(mixed_prinmitves);
console.log(emp_port);
console.log(work_emails);
console.log(status);
console.log(order_dates);
console.log(transaction_id);
console.log("----------------------------------------------------------");


// 1)
 const mapped_array = mixed_prinmitves.map
 (
     i=>  { return typeof i; }
 );

let map_data = mixed_prinmitves.map
(
    v=>
    {
        if(typeof v === 'symbol') { return v.toString();}
        if(typeof v === 'bigint') { return v.toString();}
        return String(v);
    }
);

let valid = mixed_prinmitves.filter
(
    v =>
    {
       return  typeof v === 'number' && Number.isNaN(v)
    }
);

const strings_only = mixed_prinmitves.filter
(
    i=>
    {  return typeof i === 'string' }
);
const int_only = mixed_prinmitves.filter
(
    i=>
    {  return typeof i === 'number' }
);
console.log(mixed_prinmitves);
console.log(mapped_array);
console.log(map_data);
console.log(valid);
console.log(strings_only);
console.log(int_only);

// -----------------------------------------------------------------------------
console.log("----------------------------------------------------------");
// 2)
console.log(emp_port);
const names_emp = emp_port.map( e => e.name);
const id_emp = emp_port.map(e=> e.skills);
console.log(names_emp);
console.log(id_emp);

const emp_cards = emp_port.map
(
    e=>
    (
    {
      id : e.id , name : e.name , skills : Array.isArray(e.skills) ? e.skills : Array.from(e.skills),
      status : e.active ? "Active" : "Inactive"
    }
    )
);
console.log(emp_cards);

const active_emp_names = emp_port.filter
(
   e=> { return e.active;}
).map
(
    e=> { return e.name;}
);
console.log(active_emp_names);

const high_paid = emp_port.filter
(
    e=>
    {
        return e.salary > 400
    }
);
console.log(high_paid);

// 3) array 3
console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");
console.log(work_emails);

const sep_mails = work_emails.filter
(
    e=>
    {
        return e.endsWith("@gmail.com");
    }
);
console.log(sep_mails);

const non_gmails = work_emails.filter
(
    e=>
    {
        return !e.endsWith("@gmail.com");
    }
);
console.log(non_gmails);

const dig = [ "0","1","2","3","4","5","6","7","8","9"];
const mail_has_num = work_emails.filter
(
    e=>
    {
        dig.some(d=> { return e.includes(d)})
    }
);
console.log(mail_has_num);

// let gamil_username = work_emails.filter
// (
//     e=>  e.endsWith("@gmail.com")
// ).map
// (
//     e=> e.split("@")[0]
// );
// console.log(gamil_username);

gamil_username = work_emails.map
(
    e=>  e.endsWith("@gmail.com") ? e.split("@")[0] : "Invalid User"
);
console.log(gamil_username);
//  map() It always returns an array of the same length as the original

// 4)
console.log(status);

let ids_extreact = status.map
( s=>  {     return s.id;} );
console.log(ids_extreact);

let with_flag = status.map
( 
    s=>
    {
        return{
            id : s.id, status_del : s.status.trim().toLowerCase() === "delivered" ? true : false
        }
    }
);
console.log(with_flag);
console.log("----------------------------------------------------------");
console.log("THE DEIVERED AND UNDELIVERED ORDERS");
let status_del = status.filter
(
    s=> s.status.trim().toLowerCase() === "delivered"
);
console.log(status_del );

let status_not = status.filter
(
    s=> s.status.trim().toLowerCase() !== "delivered"
);
console.log(status_not);

let order_100 = status.filter
(
    s=> s.id < 10
).map
(
    s=> ( { ...s , discount : "applied"} )
);
console.log(order_100);

// ------------------------------------------------------------------------------

// ORDER DATE ARRAY
console.log("----------------------------------------------------------");
console.log(order_dates);

let read_datees = order_dates.map
(
    d=>  d.toDateString()
);
console.log(read_datees);

let after_2026 = order_dates.filter
(
    d=> { return d >= new Date("2026-01-01");}
)
console.log(after_2026.map( d=> d.toDateString() ) );
console.log(after_2026);

console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");

let ar_11 = [10,2,3,40,50];

let sum = ar_11.reduce( (acc,curr) => { return acc+curr;} , 0);
console.log(sum);

let max_el = ar_11.reduce
(
    (acc,curr) => 
    {
        return curr> acc ? curr : acc;
    } , ar_11[0]
);
console.log(max_el);

let min_el = ar_11.reduce
(
    (acc,curr)=>
    {
        return curr < acc ? curr : acc;
    } , ar_11[0]
);
console.log(min_el);

// mulitlples of 10 or not  ALL IN ARRAY
let ans = ar_11.every( (el) => { return el%10 === 10;})
console.log(ans);

let no_ans = [1,2,44].every( m => { return m%10 !== 0});
console.log(no_ans);

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

transaction_id = 
[
    4355632534787874n , 267862525575687563n , 3554898799865422n
];
work_emails =
[
    "user11@gmail.com" , "abhi22@gmail.com" , "ahan@yahoo.com" 
];

let b = [...transaction_id]
let c = [...transaction_id,...work_emails];
console.log(b);
console.log(c);

let b1 = [222999n , ...transaction_id , 333888n];
console.log(b1);

let n = "Vallabh";
console.log( [...n] );

console.log( Math.max(...ar_11));
console.log( Math.min(...ar_11));

// avoiding the mutatation
let swiggy_cart1 = 
[
    {id : 101 , item : "Pizza"} , {id : 102 , item : "Idli"}
]

let swiggy_cart2 = [...swiggy_cart1 , {id : 103 , item : "Dosa"}];
console.log(swiggy_cart1);
console.log(swiggy_cart2);

let order_del =
{
    id : 1011 , status : "Preparing" , rider : {name : "Rohit" , phone : 930424232342}
};
let updated_order_del =
{
    ...order_del,
    status : "On the Way",
    rider : {...order_del.rider , phone : 9793253459}
};
console.log(order_del);
console.log(updated_order_del);

let user_info =
[
    {name : "Vallabh" , age : 21 , city : "Sawantwadi"},
    {name : "Vivek" , age : 22 , city : "Pune"},
    {name : "Om" , age : 19 , city : "Nashik"}
]
// -----------------------------------------------------------------
user_info = user_info.map
(   prev =>
(
    {
        ...prev,
        age : prev.age + 1
    }
)
);
console.log(user_info);
// ----------------------------------------------------------------
user_info = 
[
        ...user_info,
        {name :"Pate" , age : 27 , city : "Jalgaon"}
] 

console.log(user_info);
// ---------------------------------------------------------------
//         REST(ARRAY 2 values) + SPREAD( values 2 ARRAY ) operators

// 1) SUM OF ARRAY elements
function sum_rest(...num) // ( numbers to ARRAY )
{
    let total = 0;
    for(let n of num)
    {
        total += n;
    }
    return total;
}
console.log(sum_rest(3,6,9));

function spread_sum(a,b,c,d)
{
    return a+b+c+d;
}
let arr = [10,20,3,4];
console.log(spread_sum(...arr));


// 2) AVERAGE OF ARRAY

function avg_rest(...num)
{
    let total = 0;
    for(let n of num)
    {
        total += n;
    }
    return total/num.length;
}
console.log(avg_rest(3,6,9));

function spread_avg(a,b,c,d)
{
    return (a+b+c+d)/4;
}
console.log(spread_avg(...arr));

// 3) factorial

function fact_rest(...num)
{
   num.map
   (
    n=>
    {
        let f = 1;
        for(let i = 1 ; i <= n ; i++)
        {
            f *= i;
        }
        return f;
    }
   );
}
console.log( fact_rest(3,4,5) );


//   SPREAD : It breaks an array (or object) into individual values.
//  REST : It gathers multiple values into a single array.

let brands = [ "Nike" , "Adidas" , "Puma"];
let new_brands = [ "Rebok" , "Fila" , ...brands];
let b3 = brands;
let shhopkeeperes = ["Rohit" , "Pravin" , "Om" , "Parvez" , "Prakash"];
sorted_shopkeepers = [...shhopkeeperes].sort();
console.log(brands);
console.log(new_brands);
console.log(shhopkeeperes);
console.log(sorted_shopkeepers);
let [n1 , n2 , ...rest] = sorted_shopkeepers;

console.log(rest);

let 