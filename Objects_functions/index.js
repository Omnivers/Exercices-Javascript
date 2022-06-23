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
    if(x>y){
        console.log(`${x} is bigger`);
    }
    else if(y>x){
        console.log(`${y} is bigger`);
    }
    else{
        console.log("Both are the same");
    }
}

compare(3,4);
compare(3,3);
compare(5,4);
compare(6,4);
compare(3,5);
compare(3,1032);
compare(340934,49039403);

// 05 - Add Up
sum=0;
const addUp = (num) => {
    for (let i = 0; i <= num; i++) {
        sum=sum+i
    }
    console.log(sum);
}

addUp(12);

// 06 - Time 


