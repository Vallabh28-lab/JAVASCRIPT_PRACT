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
print_odd( 32 , 46 );

let distance = "230";
// let conv_dist = parseInt(distance);
// console.log(conv_dist);
//console.log(2 + '0');
console.log(distance[0] - '0');                         // ParseINt();   
                                                        // string(exp);
let new_dist = 230;
console.log(new_dist.toString());

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

