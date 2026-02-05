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


// SWITCH CASE in JS

function lect1( Ctime)
{
    //if( Ctime == 8)
    
        return "PL";
    
}

function lect2( Ctime)
{
    //if( Ctime == 10)
    
        return "CG";
    
}

function lect3( Ctime)
{
    //if( Ctime == 12)
    
        return "BREAK";
    
}

let Ctime = 8;
switch(Ctime)
{
    case 8 : 
            console.log( lect1( Ctime) );
            break;

    case 10 : 
            console.log( lect2( Ctime) );
            break;
    
    case 12 : 
            console.log( lect3( Ctime) );
            break;
    default :
            console.log("COA");
}


const shiftL1 = (a,b,sel) => 
{
    if(sel == 1) return a << b ;
}
const shiftR2 = (a,b,sel) =>
{
    if(sel == 2) return a >> b;
}

const andOP3 = (a,b ,sel) =>
{
    if(sel == 3) return a & b;
}

let a = 5 , b = 12;
let sel = 3;

switch(sel)
{
    case 1:
        console.log(shiftL1(a,b,sel));
        break;
    case 2:
        console.log(shiftR2(a,b,sel));
        break;
    case 3:
        console.log(andOP3(a,b,sel));
        break;
}

