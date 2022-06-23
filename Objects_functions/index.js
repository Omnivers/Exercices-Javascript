// 01 - Object 
const cat={
    name:'Garfield',
    age:'3',
    isCute:'true'
}
console.log(cat);
console.log(cat.age);
if (cat.isCute){
    console.log(cat.isCute);
}

//02 - Combine

const cat2={
    name:'Garfield',
    age:'3',
    isCute:'true'
}

let cats=[cat,cat2];

console.log(cat.age);
console.log(cats[0].age);

// 03 - Even 

const checkIfEven = (num) =>{
    if(num%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}

checkIfEven(3);
checkIfEven(4);
checkIfEven(222);
checkIfEven(0);
checkIfEven(11111111);

// 04 - Compare 

const compare = (x,y) =>{

}
