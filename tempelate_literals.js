console.log("---------------------------------------------------------------------");
console.log(`POPULATION OF INDIA IS ${25000000000} TILL THE DATE`);
console.log("---------------------------------------------------------------------");
console.log(`THIS WAS MEASURED IN THE YEAR ${2023} CENUS`);

// merging the string   1) Concatenation  2) Interpolatioon ( temp literals)
console.log("---------------------------------------------------------------------");
console.log(` THE CASES OF THE VARIABLE DECLARATIONS IN JS ARE OF ${3} TYPES........... `);
console.log(" 1) Camel Case   2) Snake Case   3) Pascal Case ");
console.log("---------------------------------------------------------------------");

const nameCNT = "INDIA";

nameCNT !== "INDIA" ? console.log("NOT MY COUNTRY") : console.log("MY COUNTRY");
console.log("---------------------------------------------------------------------");


let valu =  (nameCNT === "INDIA") ? 1
         :  (nameCNT === "USA") ? 2
         :  (nameCNT === "UK")  ? 3
         : 0;

console.log(` THE value of country is : ${valu} `);
console.log("---------------------------------------------------------------------");

console.log("VALLABH"[0]);
console.log("RAM"[0]);
console.log("VALLABH"[3]);
console.log("VALLABH"[2]);
console.log("RANVEER"[0]);              // string indexings
console.log("RANA"[0]);
console.log("VALLABH"[5]);
console.log("VICKY"[3]);
console.log("KAILAS"[0]);
console.log("TANMAY"[0]);

//    we can change the data type of any decalred non const variable.
//  JS is dynamic
//  TS is static language

var may = null;
may = 19;
console.log("ENTER VALUER OF MAY ");
   //     prompt("ENTER VALUE OF MAY ");
console.log(` THe value Of MAY is ${may} `);
console.log("---------------------------------------------------------------------");