// 01 - Fruits
const fruits =["mango","lemon","blueberry"];
console.log(fruits);
console.table(fruits);

// 02 - Access
const ingredients=['eggs','milk','butter'];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// 03 - Add and Remove 

const objects=["pen","book","lamp"];
objects.unshift("chair");
console.log(objects);
objects.pop();
console.log(objects);
objects.push('laptop');
console.log(objects);
objects.shift();
console.log(objects);


// 04 - Order 

const numbers=[4,10,8,12,6];
numbers.reverse();
console.log(numbers);

// 05 - Boucle

var total =0;
const limit=10;

for(i=0;i<=limit;i++){
    total=total+i;
    console.log(total);
}

// 06 - Reverse 
const sentence = "Hello Konexio !"

var letters = sentence.split("")
var reverseSentence=[""]
for(i=letters.length-1;i>=0;i--){
 reverseSentence.push(`${letters[i]}`);
}
console.log(reverseSentence.join(""));

// 07 - Fizzbuzz
const max=100;
for(i=0;i<=max;i++){
    if (i%3===0 && i%5===0){
        console.log("fizzbuzz");
    }
    else if(i%3===0){
        console.log('fizz')
    }
    else if (i%5===0) {
        console.log('buzz');
    }
    else if (i%7===0){
        console.log("");
    }
    else{
        console.log(i);
    }
}

// 08 - While 

i=0;
total=0;
while (i<limit){
    i+=1;
    total=total+i;
    console.log(total);
}

//09 - Sans boucle 
maxi=20;
min=1;
noms=["Walid","Wade","Rayan","Walid","Benoit","Emad","Jad","Lynda","Florez","Lucas","Arthur","Thomas","Aurelien","Clara","Danh","Cinie","Edaly","Mago","Dushen","Julien","Florent"];
numero=Math.random() * (maxi - min) + min;
numero=Math.floor(numero);
console.log(noms[numero]);

// 10 - Random  and max
