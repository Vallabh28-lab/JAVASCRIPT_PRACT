
console.log( " ----------------------  WINDOW OBJECT --------------------------\n");
console.log(" 1)  Alert / Confirm / Prompt   WINDOW METHODS \n");       // SetTimeout & setInterval methods
                                                                        // window.open() & window.close()
                                                                        // window.location     ==> window.location ====>  window.navigator ===> window.screen
console.log( "----------------- window.setTimeout()  METHOD IMPLEMENTTION -------------------------\n");
// 🔴 setTimeout(function(), delay);
console.log(" executes the FUNCTION after specific DELAY");
                  //  🔴 it is TASK SCHEDULING METHOD

// 1)  an OTP expires after the specific seconds ( 30 seconds == 30000 miliseconds)
console.log("--------------------------------------------------------------");
  console.log(" OTP IS SENT TO THE USER ");
  console.log("OTP EXPIRES AFTER THE 30 SEC");
  setTimeout( () => {  console.log(" OTP HAS BEEN EXPIRED !");  } , 30000);

// 2) loading of the next page
console.log("--------------------------------------------------------------");
  console.log(" THE NEXT PAGE WILL LOAD IN 5 sec");
  setTimeout(  () => {  console.log(" NEXT PAGE LOADED "); } , 5000);

  // 3) auto logoutfrom after INACTIVITY
console.log("--------------------------------------------------------------");
  console.log(" YOU WILL BE LOGGED OUT OF THE WEBPAGE AFTER 10 sec OF INACTIVITY ");
  //setTimeout(  () => { alert(" SESSION  HAS BEEEN EXPIRED , DUE TO INACTIVITY , PLEASE RE-LOGIN "); }  , 10000);

console.log("--------------------------------------------------------------");

/*      setTimeOut()                                              clearTimeOut()
  1)    Schedule execution                                          cancel the Schedule execution beforE FUNCTION EXECUTES    */

  // 🔴------------------------------------------------------------------------------
                        /*        let logout_Time;

                                function start_logout_tiner()
                                {
                                    logout_Time = setTimeout(  () => { alert(" SESSION HAS EXPIRED ");  }  , 5000);
                                }

                                function reset_logout_timer()
                                {
                                    console.log(" USER IS ACTIVE , CANCEL LOGOUT ");
                                    clearTimeout(logout_Time);
                                    start_logout_tiner();
                                }

                                start_logout_tiner();
                                setTimeout(reset_logout_timer , 3000);
                        */

// 🔴------------------------------------------------------------------------------

console.log("--------------------------------------------------------------");
console.log("--------------------------------------------------------------");
console.log("--------------------------------------------------------------");

// 🔴   setinterval methods() :    executes the FUNCTION at the FIXED INTERVALS
console.log("----------------- WINDOW.setInterval() METHODS IMPLEMENT ---------------------");
console.log( " setInterval( function() , interval ");






// 1)  DIGITAL CLOCK UPDATION FOR EVERY SECOND
const time_Interval =
setInterval(   () => {  const time = new Date().toLocaleTimeString();    console.log(` CURRENT TIME IS ${time} `);  }  , 1000   );

// 2) STOCKM MARKET UPDATION
const stock_p_update = 
setInterval(   () =>  { const price = ( Math.random() * 1000);  console.log(` THE STOCK PRICE IS ${price} `); } , 2000);

setTimeout(  () => {  clearInterval(time_Interval); clearInterval(stock_p_update);
                      console.log(" STOPPED THE INTERVALS ");
                   }, 10000
           );





console.log("--------------------------------------------------------------");
console.log("--------------------------------------------------------------");

console.log("----------------- WINDOW.clearInterval() METHODS IMPLEMENT ---------------------");
//  stock price change funciotns 




let stock_price = 950;
const stock_Interval  = setInterval(  () => {const change = Math.floor(Math.random()*50); 
                                            stock_price += change;
                                            console.log(" CURRENT PRICE OF THE STOCK IS " + stock_price);
                                            
                                            if(stock_price >= 1000)
                                            {
                                                console.log(" STOP THE PRICE UPDATES !!");
                                                clearInterval(stock_Interval);
                                            }
                                            }, 5000
                                     ); 

setTimeout(  () =>{ clearInterval(stock_Interval);              /// this is TIME BASED FORCE STOPOUT
                   console.log(" STOPPES THE STOCK MARKET UPDATES ");
                   } , 30000
          );





// ---------------------------------------------------------------------------------------------------------------------------------------------------------
//   TIME ( HOUR - MIN - SEC ) AM/PM   methods()
// 1)  toLocaleTimeString()
const now__time = new Date();
console.log( now__time.toLocaleTimeString());

// 2) toLocaleDateString()
console.log(  now__time.toLocaleDateString());

// 3) toLocaleString()
// ---------->  date + time
console.log(   now__time.toLocaleString() );

// 4) toTimeString()
  // -----------------   TIME in fixed English format
console.log(   now__time.toTimeString()   );

// 4) TEXT format of DATE
console.log( now__time.toDateString()   );

//   🟠  SET INTERVAL()  ===> execution of the code part is MULTIPLE times  (   can result in INFINFITE LOOP)
//   🟠  SET TIMEOUT()  ===>   execution of the code part occurs ONCE andthen NEVER

// ------------------------------------------------------------------------------------------------------------------------
// 1)
const interval_demo_ID = setInterval(  () => { console.log(" WELCOME USER "); }  , 1000);

setTimeout( () => {  clearInterval(interval_demo_ID); console.log(" THE SESSION HA SNEING STOPPED !!"); }  , 5000);

// 2) 
const clock_ID = setInterval( () => { console.log( new Date().toLocaleTimeString());  }  , 2000);

setTimeout(  () => {clearInterval(clock_ID) ; console.log(" THE CLOCK HAS STOPPED !!");}  , 10000);

// 3)
let dice_number = 0;
const game_dice = setInterval(  () => {   dice_number = Math.floor((Math.random() * 6) + 1);   console.log(" THIS IS THE NEW DICE ROLL : " , dice_number); } , 1000);

setTimeout(  () => { clearInterval( game_dice); console.log(" 🟠 THE GAME IS ENDED "); } , 6000 );

// 4) 

let vote_number = 0;

const voting = setInterval(  () => {  vote_number += Math.floor( Math.random() * 10);  console.log( " THESE ARE THE VOTES : " , vote_number); 
                                      if( vote_number > 10) {  clearInterval(voting); console.log(" TARGET VOTE REACHED - ELECTIONS WON"); }
                                   }
                          ,1000)
setTimeout(  () => { clearInterval( voting ); console.log(" 🟠 THE ELECTIONS ARE OVER !!"); } ,12000 );


// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
/*   --------- NORMAL FUNCTIONS                                                   ARROW FUNCTIONS 
            1) have a global SCOPES                                             1) lexical scopes
            2)  own THIS. keyword                                               2) do not own THIS. keywords
            3)  CAN BE constructors()                                           3) canniot be CONSTRUCTORS()
            4)  HOISTING possible                                               4) no HOISTING
*/

let stock =
{
   name : "Reliance Industry",
   rate : 1476.00 ,
   dividdend_percent : 0.92,
   takeNAME : function()  { console.log( this.name , this.dividdend_percent);},
   takeRATE : () => {  console.log( this.rate); },
};
stock.takeNAME();
stock.takeRATE();

function industry(name)
{
  this.name = name;
  console.log(name);
  console.log("  ----------------------------- DONE WITH THE FUNCTION -----------------------------------");
}
const i1 = new industry("Tata Sampanna");

const industry1 = (name) => 
{
   this.name = name;
   console.log(name);
}
//const i2 = new industry1("Titan");    /// ERROR
console.log("  ----------------------------- CALL BACK ( PROMIMNENTLY arrow functions ) -----------------------------------");

function persoN() 
{
  this.name = "Vallabh";
  setTimeout(  function () {  console.log(this.name);  }, 1000);      // threr is no NAME isnide the settimeout f(x) so ERROR
}
new persoN();

function persoN1() 
{
  this.name = "Vallabh";
  setTimeout( () => {  console.log(this.name);  }, 1000);      // ARROW functiosn ar made for CLLABCK
}
new persoN1();

console.log("  ----------------------------- OBJECT USE ( PROMIMNENTLY normal functions ) -----------------------------------")

// always in a OBJECT creating a function crete NORMAL FUNCTION only

const industry2 =
{
   name : "Tesla",
   stockP : 3432,
   dividend_p : 0.91,

   showN : function() {  console.log(" COMPANY NAME : " , this.name);},
   showPER : function() {  console.log(" COMPANY NAME : " , this.dividend_p);},
   update_per : function(new_percent) { this.dividend_p = new_percent;  console.log(" THE NEW DIVIDEND IS : " , this.dividend_p);}
};

industry2.showN();
industry2.showPER();
industry2.update_per(0.99);
industry2.showPER();


/// NORMAL FJUNCTIONS :   parent object is .THIS
//  ARROW FUNCTIONS :  parent object -> this  is .THIS

// BEST PRACTISE : always use the ARROW FUNCTIONS IN THE window object METHODS


// ARROW FUNCTIONS :  inherits .THIS from parents
// NORMAL FUNCTIONS : take this. as WINDOW OBJECT

function fibonacci(a,b,n) 
{
  if( n == 0) { return a;}
  return fibonacci(b,a+b,n-1);
}

let t1 = function()  {  setTimeout( () => { console.log("THE SUM OF SERIES IS " , fibonacci(0,1,5)) } , 30000)};
let t2 = function()  {  setTimeout( function ()  { console.log( "THE SUM OF SERIES IS " , fibonacci(0,1,17)) } , 30000)};

t1();
t2();
