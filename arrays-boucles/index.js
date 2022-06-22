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