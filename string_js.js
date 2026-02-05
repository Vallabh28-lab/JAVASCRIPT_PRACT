//let name = prompt("ENTER YOUR NAME HERE ");

//console.log("WELCOME " + name.trim() + "TO JS");

// string in JS are immutable.

let relegion = "Hinduism";

console.log( relegion.replace("Hinduism" , "Humanity"));
console.log( relegion.repeat(3));


// NOW THE ARRAY IMPLEMENT IN js
// using the for of loop

let percentile = [99.9456586 , 98 , 77.5634554 , 94.24642 , 95.5346367 , 99.65465657 , 90.65754 , 97.43566765 , 96.435676543];
for(let x of percentile)
{
    console.log(x);
    console.log(Math.floor(x));
}
console.log("---------------------------------------------------------------------");
// add at end   .push()
// add at start  .unshift()

percentile.unshift(0.33322423);
percentile.push(44.3456234567876543);
percentile.unshift(0.3);
percentile.push(3.3);

console.log(percentile);
console.log("---------------------------------------------------------------------");

// remove form front shift()()
// rmovv  from back pop()

percentile.pop();
percentile.shift();
console.log(percentile);
console.log("---------------------------------------------------------------------");

console.log(typeof percentile);
console.log("---------------------------------------------------------------------");


// map() methods.    APPLY A CONDITION TO ALL
// filter()           SELECET THAT ARE NEEDEED TO YOU 
// reduce()

let percentile_div = percentile.map(x => x / 10);
console.log(percentile_div);

let per_shift = percentile.map(x => x >> 1 );
console.log(per_shift);

let percentile_div1 = percentile.filter(x => x % 2 == 0);
console.log(percentile_div1);

let per_shift1 = percentile.filter(x => x % 2 != 0 );
console.log(per_shift1);
console.log("---------------------------------------------------------------------");

// ARRAYS   are mutable.
let countr_info = [ "India" , 'I' , 1947 , 3.287 , "MILLION KM^2 " ];
console.log(countr_info);

countr_info[3] = 3.300;
console.log(countr_info);
console.log("---------------------------------------------------------------------");

// method    1) Indexof   2) includes
console.log(countr_info.indexOf('I'));
console.log(countr_info.includes(1947));

//  3) Concateante()  4) reverese()

countr_info = countr_info.concat(Symbol("TRI"));
console.log(countr_info);

countr_info.reverse();   
console.log(countr_info);

// changes the originial ARRAYS        METHODS =>>>    1) reverse()  2) push() 3) pop()  4) splice()  5) sort()
//   no change           METHODS =>>>   1) concat()  2) slice()   3) filter()  4) filter()
console.log(countr_info.slice(2,4));
console.log(countr_info.splice(2,4));   // modify original array.

console.log("---------------------------------------------------------------------");
console.log("  .splice(i,j) ");
console.log(` SPLICE means  DELETE j elemnts from the i index`);
// splice keeps the lements that are on the MENTIONED INDEX
console.log("---------------------------------------------------------------------");

console.log("  .splice(i,j , name ) ");
console.log(` SPLICE means  DELETE j  elements  from INDEX i and then replace them WITH ELEMENT name `);
console.log("---------------------------------------------------------------------");

let  m1 = BigInt(1456543544);
let a1 = 235687654321n;
let a2 = 247909876543234678984567n;

console.log(m1 , a1 , a2);

// splice taeks 4 parameteres.  splice( i1  , how many el to delete  , item name  ,  iitem name )

// when defined a CONSTANT ARAY -===>  we can perfrom the operations on it but CANNOT redefeine or reassign the ARRAY.


// game

let tiktak = [];
for(let i = 0 ; i < 3 ; i++)
{
    tiktak[i] = [];
    for( let j = 0 ; j < 3 ; j++)
    {
        tiktak[i][j] = " ";
    }
}

for(let i = 0 ; i < 3 ; i++)
{
    row = "";
    for( let j = 0 ; j < 3 ; j++)
    {
        console.log(tiktak[i][j] + " ");
    }
    console.log("\n");
}

function pu_sh(ch , i1 , i2)
{
    tiktak[i1][i2] = ch;
}

function rem_ove(i1,i2)
{
    tiktak[i1][i2] = " ";
}

push("X" , 0 , 0);
push("O" , 0 , 0);
push("O" , 0 , 0);
push("X" , 0 , 0);
push("O" , 0 , 0);
push("X" , 0 , 0);



