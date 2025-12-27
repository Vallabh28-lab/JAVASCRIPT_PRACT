// in  JS even the non numers can be comapred  eg . * and # 
//  eg 3 and 4
//  eg a and b
// eg. $ and %
// eg.  A and b

for( let i = 'a'.charCodeAt(0) ; i <= 'z'.charCodeAt(0) ; i++)
{
    console.log(String.fromCharCode(i) + " " + i);
}

for( let i = 'A'.charCodeAt(0) ; i <= 'Z'.charCodeAt(0) ; i++)
{
    console.log(String.fromCharCode(i) + " " + i);
}