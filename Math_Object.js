// rrcalling the SPLICE methods
//   array.splice(start, deleteCount, item1, item2, ..., itemN)


function generate_random( min , max )
{
    let rand_num = (  Math.random() * ( max - min ) )  + min;
    console.log(rand_num);
}

generate_random(0 , 13);
generate_random(10 , 13);
generate_random(22 , 43);
generate_random(0 , 9);

console.log("---------------------------------------------------------------------"); 

class Car
{
    constructor(name , model , price)
    {
        this.name = name;
        this.model = model;
        this.price = price;
    }

   display_info()
   {
    console.log( ` THE CAR IS ${this.name}`);
    console.log( ` THE MODEL IS ${this.model}`);
    console.log( ` THE PRICE IS ${this.price}`);
    console.log("---------------------------------------------------------------------"); 
    }
}

let cust_1 = new Car( "Toyota" , "FORTUNER" , 2000000);
let cust_2 = new Car( "Swift" , "DZIRE" , 200000);

cust_1.display_info();
cust_2.display_info();
console.log("---------------------------------------------------------------------"); 

console.log( 5 << 3  ==  5*(2*2*2));
console.log( 5 >> 3 ==   (  Math.floor(5/(2*2*2))  )  );

console.log("---------------------------------------------------------------------"); 
let n2 = Math.floor((Math.random()*5) + 1) + 1;
console.log(n2);
console.log("---------------------------------------------------------------------"); 

/// ---------------------------------------
const ret_name = (name) =>
{
    return "Hello  " + name;
}
console.log(ret_name("Vallabh"));
// ----------------------------------------
console.log("---------------------------------------------------------------------"); 
console.log("---------------------------------------------------------------------"); 
console.log("---------------------------------------------------------------------"); 

console.log (  Math.SQRT2   )
console.log( Math.sqrt(49) );
console.log( Math.SQRT1_2 );
console.log( Math.PI );
console.log( Math.E );

console.log("---------------------------------------------------------------------"); 
console.log("---------------------------------------------------------------------"); 

console.log( Math.round(4.9) );
console.log( Math.round(4.1) );
console.log( Math.trunc(7.9) );
console.log( Math.trunc(7.1) );
console.log("---------------------------------------------------------------------"); 
console.log( Math.sign(-425) );
console.log( Math.sign( 54 ) );
console.log("---------------------------------------------------------------------"); 

////  SUM programme

let l1 = 33;
const sum_till_n = (n) =>
{
    return ( (n*(n+1)) / 2 );
}

console.log( sum_till_n( l1 ) );

function recursive_sum(n)
{
    if(n == 0) return 0;
    return n + recursive_sum(n-1);
}


console.log( recursive_sum( l1 ) );

// end of the programme SUM
console.log("---------------------------------------------------------------------"); 

let str_ar = [ "Vallabh" , "Mayuresh"];
function concat_each(str)
{
    let res = "";
    str.forEach(str => res += str + " ");                 //   for each loop
    return res;
}
console.log( concat_each(str_ar) );
console.log("---------------------------------------------------------------------"); 

function sum_concat(str)
{
    let res = str.join(" ");
    return res;
}

console.log( sum_concat(str_ar) );
console.log("---------------------------------------------------------------------"); 

///  this KEYWORDDDD  USE -------------------------------------------------------------------------------------------------------------------
let info_pl =
{
    p1 : "Vallabh",
    age_p1 : 21,
    is_male : true,

    show_info()
    {
        console.log(this.p1 , this.age_p1);
    }
};
info_pl.show_info();

console.log("---------------------------------------------------------------------"); 

class  farmer_info
{
    constructor(name , crop , yieldV)
    {
    this.name = name;
    this.crop = crop;
    this.yield = yieldV;
    }

    show()
    {
        console.log( this.crop , this.name , this.yield);
    }
}

let f1 = new farmer_info( " SITARAM" , "JOWAR" , 4.2);
f1.show();
// call apply bind methods
console.log("---------------------------------------------------------------------");
console.log("---------------------------------------------------------------------");


