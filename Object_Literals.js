let country = [ "India" , "France" , "Italy" , "Germany"];
let state_ind = [ "Maharashtra" , "Sikkim" , "Goa" , "Punjab"];

let number = [ 1,3,4,2];
let pop_billion = [ 1.47 , 0.068 , 0.059 ,  0.084 ];


// create the object

let info =
{
    country : "India" ,
    state : "Maharashtra", 
    pin : 91 , 
    population  : 1.47 ,
    status_safe : false,
    Symbol_cnnt : Symbol( "🇮🇳" )
}

console.log(info); 

// how to access a PARTICULAR value
console.log( info.country );
console.log( info[ "pin" ]);

console.log("---------------------------------------------------------------------"); 
const printobj = (obj_info) =>
{
    console.log("=> => => => => =>");
    for(let x in obj_info)
    {
        console.log(x + " : ");
        console.log(  obj_info[x]  );
        console.log("~~~~~~~~~~~~~~~~~~~");
    }
}

printobj(info);
console.log("---------------------------------------------------------------------"); 

// delete the key : value in OBEJCT
delete info.country;
delete info.pin;
console.log(info);

// successfully DELETED 

console.log("---------------------------------------------------------------------"); 

let school =
{
    name : " KMES ",
    no_of_bricks : 14424535635n,
    distance : 0.6,
    principal : undefined,
    info :
    {
        found : 1976,
        faculty : 42,
        founder : " GOVERNMENT BODY "
    }
}
printobj(school);

console.log( school.info );
console.log( school.info.founder );

// add a new ELEMENT in the object
school.infra_status = true;
printobj(school);

console.log("---------------------------------------------------------------------"); 
// check if a properety exist in that object or not
//1) method
console.log( "distance" in school);
//2) 
console.log(  school.hasOwnProperty("distance")  );
console.log("---------------------------------------------------------------------"); 





// METHODS  3)  Object.keys(obj)
console.log( Object.keys( school ));

// METHIDS  4)  Object.values(obj)
console.log( Object.values( school ));

// METHOD 5) Object.entries(obj)
console.log( Object.entries( school ));

// METHODS 6) Object.freeze(obj)
//                if i wnat to make the PROPERTY of OBJECT IMMUTABLE
Object.freeze( school );
/// now i am creataing a FUNCTION to create the object DIRECTLY.......
// ----------------------------------------------------------------------------------------------
class School_Admission
{
    constructor( name , age , weight , grades , percent , is_female)
    {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.grades = grades;
        this.percent = percent;
        this.is_female = is_female;
    }

    display()
    {
        console.log(` THE NAME IS ${this.name} `);
        console.log(` THE AGE IS ${this.age} `);
        console.log(` THE WEIGHT IS ${this.weight} `);
        console.log(` THE GRADE IS ${this.grades} `);
        console.log(` THE PERCENT IS ${this.percent} `);
        console.log(` THE CANDIDATE IS FEMALE ${this.is_female} `);
        console.log(" -------------------------------------------");
    }
}

let cand_1 = new School_Admission( "Vallabh" , 21 , 64.30 , 'A' , 98.23 , false);
let cand_2 = new School_Admission( "Pranali" , 20 , 50 , 'A+' , 99.20 , true );

cand_1.display();
cand_2.display();
// -------------------------------------------------------------------------------------------------