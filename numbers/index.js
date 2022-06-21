// 01 - Number
const integer=102;
const float=13.9;
console.log(integer,float);


// 02 - Convert 

const basic=34;
const stringfied= basic.toString();
console.log(stringfied);

// 03 - Round

const num=1.5;
const rounded=Math.round(num);
console.log(rounded);

// 04 - Arithmétique

const test=12;
const bis=5;

console.log(`l'addition de test et bis = ${test+bis}`);
console.log(`la soustraction de test et bis = ${test-bis}`);
console.log(`la multiplication de test et bis = ${test*bis}`);
console.log(`la division de test et bis = ${test/bis}`);
console.log(`le modulo de test et bis = ${test%bis}`);

// 05 - Reste division euclidienne 

// let modulo = 999 %1; // Oui
// console.log(modulo);
// let modulo = 999 %2 // non 
// console.log(modulo); 
// let modulo = 999 %3 // oui
// console.log(modulo); 
// let modulo = 999 %4// oui
// console.log(modulo); 
// let modulo = 999 %5
// console.log(modulo); //non

// let modulo = 25 %1; //oui 
// console.log(modulo);
// let modulo = 25 %2
// console.log(modulo); // non
// let modulo = 25 %3
// console.log(modulo); // non 
// let modulo = 25 % 4
// console.log(modulo); // non
// let modulo = 25 %5
// console.log(modulo); // oui 

// let modulo = 190280 %1; 
// console.log(modulo); // oui
// let modulo = 190280  %2
// console.log(modulo);  // oui
// let modulo = 190280  %3
// console.log(modulo); // non
// let modulo = 190280  % 4
// console.log(modulo); // oui 
// let modulo = 190280  %5
// console.log(modulo); // oui

// let modulo = 47%1; // oui 
// console.log(modulo);
// let modulo = 47 %2
// console.log(modulo); // non 
// let modulo = 47 %3
// console.log(modulo); // non 
// let modulo = 47 % 4
// console.log(modulo); // non 
// let modulo = 47 %5
// console.log(modulo); // non 

// let modulo = 691%1;
// console.log(modulo); // oui
// let modulo = 691 %2
// console.log(modulo);// non
// let modulo = 691 %3
// console.log(modulo);// non
// let modulo = 691 % 4
// console.log(modulo); // non
// let modulo = 691 %5
// console.log(modulo); // non



// *******************************************
let division=[1,2,3,4,5];
let Num=[999,25,190280,47,691];
 for (i=1; i<division.length;i++){
    console.log(Num[j]%division[i]);
        }

    




