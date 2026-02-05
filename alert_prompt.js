const returnname = (name) =>
{
    if( name == "Vallabh") return "Vallabh";
}

const returnname1 = (name) =>
{
    if( name == "Sanket") return "Sanket";
}

const returnname2 = (name) =>
{
    if( name == "") return alert(" NAME IS REQUIRED ") ;
}

var name = prompt("ENTER YOUR NAME");

switch(name)
{
    case "Vallabh":
        alert(returnname(name));
        break;
    case "Sanket":
        alert(returnname1(name));
        break;
    case "":
        alert(returnname2(name));
        break;
    default:
        alert(" NO NAME IS PROVIDED ");
        break;
}



const lecture1 = ( Ctime ) =>
{
    let exacttime = prompt(" ENTERE THE EXACT TIME ");
    if(Ctiime >= 8 && Ctime < 10)
    {
    alert(" DATA STRUCURES LECTURE ");
    }
    return exacttime;
}
const lecture2 = ( Ctime ) =>
{
    let exacttime = prompt(" ENTERE THE EXACT TIME ");
    if(Ctiime >= 10 && Ctime < 12)
    {
    alert(" COA LECTURE ");
    }
    return exacttime;
}

let c = 8;
let cnm = confirm( " IS THIS THE CORRECT TIME " + c );
if(cnm)
{
switch(c)
{
    case (c < 10):
        console.log( lecture1(c));
        break;
    case (c < 12 && c >= 10):
        console.log( lecture2(c));
        break;
    default:
        console.error(" INVALID INPUT TIME ENTERED ");
        break;
}
}
else
{
    console.error(" PLEASE ENTER THE CORRECT TIME BY RELOADING THE PAGE ");
    console.warn( "PAGE RELOADING IS REQUIRED ");
}

// above were all the ARROW FUNCTIONS
// now noramal functios

function l_ecture1( Ctime )
{
    if( Ctime < 10 && Ctime >= 8)
    {
        return " DATA STRUCTURES ";
    }
}