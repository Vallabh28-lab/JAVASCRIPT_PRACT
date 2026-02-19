

const avg = (myarray) => 
{
    let sum = 0;
    myarray.forEach(element => 
        {
            sum += element;
        });
    return Math.ceil(sum/myarray.length);
   // return Math.floor(sum/myarray.length);
    // return (sum/myarray.length);
};

let temperature = [ 12.2 , 13.4 , 15.3 , 10 , 13 , 5 , 15.4 , 16.44];
console.log( avg(temperature));

const IS_EVEN_ODD = (n) =>
{
    if( (n & 1) == 0)
    {
        return true;
    }
    return false;
}
console.log(IS_EVEN_ODD(2));
console.log(IS_EVEN_ODD(9));

const user_WEB =
{
    name : "Vallabh",
    greet : function()
    {
        console.log(" WELCOME : " , this.name);
    }
}
user_WEB.greet();

const user_EVEN_ODD =
{
    num : 10,
    find_if : function()
    {
        if((this.num & 1) == 0) { console.log("EVEN");}
        else { console.log("FALSE");}
    }
}
user_EVEN_ODD.find_if();

const alphabet_or_not =
{
    alphabet : 'A',
    check : () =>
    {
        if( (this.alphabet >= 'A' && this.alphabet <= 'Z')  || this.alphabet >= 'a' && this.alphabet <= 'z')
        {
            console.log(" ITS AN ALPHABET ");
        }
    }
}
alphabet_or_not.check();  // undefined

console.log("-----------------------------------------------------------------------------------");

let color = "red"
const traffic_s =
{
    //color : "red",
    move_or_not : function()
    {
        if( this.color == "red") { console.log("STOP THERE !");}
        else if( this.color == "green") { console.log("MOVE !");}
        else { console.log("GET READY!!");}
        
    }
}
traffic_s.move_or_not();

function register(name)
{
    this.name = name;
}
const r1 = new register("Suresh");
console.log(r1.name);

function enroll(prn)
{
    this.prn = prn;
}
const p1 = new enroll(202401040041);
console.log(p1.prn);


// -----------------------------------------  CALL()  APPLY()  BIND() -------------------------------------------------

// -----------------  call() is useful only when the function uses this --------------
const items = {value : 21};
function multiply(m)
{
    return (this.value)*m;
}

console.log(multiply.call(items , 1.2));

// 2)
const day_now = { value : "MONDAY"};
function welcome_user(dAY)
{
    console.log( this.value + "  " + dAY );
}

welcome_user.call(day_now , 21);

// 3)
const money_spent = { rs : 1200};
function calc_tax(name)
{
    console.log( " TAX IS : " + this.rs/(100/7) + " " + name);
}

calc_tax.call(money_spent , "Shubham");

// 4)
const food_item = { f : "Burger"};
function make_order(price)
{
    console.log("THE ITEM IS :  " + this.f + ", PRICE is " + price);
}
make_order.call(food_item , 300);


console.log("--------------------------------------------------------------------");
console.log("--------------------------------------------------------------------");
console.log("--------------------------------------------------------------------");

