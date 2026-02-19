let printfact = function (n) 
{
    let ans = 1;
    for(let  i = 1 ; i<= n ; i++)
    {
        ans *= i;
    }
    return ans;
}
console.log(printfact(5));

function printF(n)
{
    let i = 1 , ans = 1;
    while(i <= n)
    {
        ans *= i;
        i++;
    }
    return ans;
}

console.log(printF(4));