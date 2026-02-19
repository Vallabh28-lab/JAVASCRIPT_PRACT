console.log("---------------------------------------------------------------------");

const print_odd = (a,b) =>
{
for(let i = a ; i <= b ; i++)
{
    ( i % 2 !== 0 ) ? console.log(i) : null;
}
}

const print_even = (a,b) =>
{
for(let i = a ; i <= b ; i++)
{
    ( i % 2 == 0 ) ? console.log(i) : null;
}
}

print_even(50 , 68 );
console.log("---------------------------------------------------------------------"); 
print_odd( 32 , 46 );

console.log("---------------------------------------------------------------------"); 

let distance = "230";
// let conv_dist = parseInt(distance);
// console.log(conv_dist);
//console.log(2 + '0');
console.log(distance[0] - '0');                         // ParseINt();   
                                                        // string(exp);
let new_dist = 230;
console.log(new_dist.toString());

console.log("---------------------------------------------------------------------"); 

// -----------------------------------------------------------------------------------
  // using FOR of 
// ---------------------------------------------------------------------------------------
const exp_stack = "[{()}]";
let arr_st = [];
function validP(exp)
{
    for(const ch of exp_stack)
    {
        arr_st.push(ch);                // push is O(1)  // unshift   O(n)
    }
    return arr_st;
}

console.log( validP(exp_stack));

console.log("---------------------------------------------------------------------");

let to_do_list = [];

const task = ( exp) =>
{
    to_do_list.push(exp);
}

const untask = ( ) =>
{
    //to_do_list[i] = " ";
    to_do_list.splice(0,1);
}

function print_list()
{
    for( x of to_do_list)
    {
        console.log(x);
    }
}

task(" BRUSH THE TEETH ");
task(" BATH ");
task(" GO TO COLLEGE ");
task(" LECTURE 1 ");
task(" COLLEGE TO MESS ");
task("  LAST LECTURE ");
task(" COLLEGE TO HOUSE ");

print_list();
console.log("---------------------------------------------------------------------");
untask();
print_list();
console.log("---------------------------------------------------------------------");
untask();
print_list();
console.log("---------------------------------------------------------------------");


let num1 = 278400;

function cal(num)
{
let count1 = 0;
while(num > 0)
{
    count1++;
    num = Math.floor(num / 10);
}
console.log(count1);
}
cal(num1);

console.log("---------------------------------------------------------------------");

const fact = (a) =>
{
    if(a === 1 || a === 0) { return 1;}

    return a*fact(a-1);
}
console.log(fact(5));

