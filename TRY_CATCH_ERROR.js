/*
  try  :  wrap the code tahta may cause an error here i THIS
  catch : provides an error object with details about what went wrong. (  if error is deteceted by the TRY )
*/


// console.error()   DOES NOT STOPES THE CODE
// thrwow new error(")  IT STOPES THE CODES EXECUTION 
// err ===> is an object in JS with PREDEFINED MESSAGES


// handle runtime exceptions  :  INTERVIEEW SPECIFIC   



// 1)
var username = "Vallabh";  // can remove and test the CATCH BLOCK
let error_Happened = false;
try
{
    console.log(` THE NAME OF THE USER IS : ${username} `);
}
catch(err)
{
    error_Happened = true;
    console.error(`IMMEDIATE ERROR OCCURED  ===> ` + (err.message).toUpperCase() );
}

finally
{
    if(error_Happened)
    {
        console.log(`KINDLY ENTER YOUR USERNAME `);
    }
    else
    {
        console.log(` THANK YOU ===> ` + username);
    }
}

console.log("---------------------------------------------------------------------");
console.log("---------------------------------------------------------------------");

// MULTIPLY funnction usin try catch
function mult_quantity(a,b) 
{
    try
    {
        if( typeof a !== 'number' || typeof b !== 'number')
        {
            console.error(" INVALID VALUES PROVIDED AS INPUT ");
            throw new Error(" PARAMETERES ARE NOT TYPE OF NUMBER ");
        }
        else if( a === 0 || b === 0)
        {
            
            throw new Error(" ANY PRODUCT QUANTITY CANNOT BE ZERO");
            
        }
        else if( a < 0 || b < 0)
        {
            console.log( err.message );
            
            return;
        }   
        else
        {
            return console.log( a*b );
        }
         
    }
    catch(err)
    {
        //throw err;
        //console.error(" ERROR OCCURED IN PARARMETER DETECTION " + err.message);
        console.log( err.message );
        
    }

    finally
    {
        
        console.log( " ABOVE IS THE OUTPUT OF THE MULTIPLY FUNCTION ");
        console.log("---------------------------------------------------------------------");
    }
}
let res = mult_quantity(5,4);
console.log(res);
mult_quantity(0,4);
mult_quantity(-5,4);
mult_quantity(2424343343n , 4);
    

console.log("------------------------------------------------------------------------------------");
// -----------------------------------------------------------------------------------------------------

function check_eligible(age)
{
    try
    {
        if( typeof age !== 'number' )
        {
            throw new Error(" INVALID DATA PROVIDED ");
        }
        else if( age < 0)
        {
            console.error(" AGE CANNOT BE NEGATIVE ");
            return;
        }
        else if( age < 18)
        {
            console.log( " AGE NOT SATISFIES CONDITION ");
            throw error;
        }
        else
        {
        return console.log(" YOU ARE ELIGIBLE ");
        }

    }
    catch(err)
    {
        console.log( err.message.toUpperCase() );
    }
    finally
    {
        console.log( " ELIGIBILTY CHECK COMPLETED " );
        console.log("---------------------------------------------------------------------");
    }
}
check_eligible(20);
check_eligible(Symbol("@"));
check_eligible(-5);
check_eligible(15);
check_eligible("vallabh");

console.log("------------------------------------------------------------------------------------");
// -----------------------------------------------------------------------------------------------------
 //            DESIGNING THE PAYMENT GATEWAY FOR THE ONLINE STORE -------------------------------------------------

function validate(exp)
{
    if( !exp )
    {
        throw new Error(" INVALID order ID ");
    }
    console.log(" ORDER VALIDATE FOR ID " + exp);
}

function pay_method(amount)
{
    if(amount <= 0)
    {
        throw new Error(" INVALID PAYMENT AMOUNT ");
    }
     console.log( "YOUR AMOUNT TO BE PAID IS " , amount);
}

function mark_pay()
{
    console.log("✅ PAYMENT DONE");
}
function close_session()
{
    return " THANK YOU FOR PAYING AND SHOPPING ";
}

function gateway(id , amnt)
{
    try
    {
        validate(id);
        pay_method(amnt);
        mark_pay();
        return console.log(" PAYMENT IS SUCCESSFULL !!!");
    }
    catch(err)
    {
        throw new Error(" PAYMENT FAILED DUE TO INVALID ID OR AMOUNT " + err.message);
    }
    finally
    {
       close_session();  
    }
}

gateway("230TT" , 1200);


