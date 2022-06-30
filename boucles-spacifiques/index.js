// 01 - Map double 
// let array=[1,2,3,4,5];
// const double=array.map((number)=>{
//     return number*2;
// })
// console.log(double);


// 02 - Map Names 

// const longNames=[
// 	{
// 		firstName: "Jane",
// 		lastName: "Doe"
// 	},
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ];
// const shortNames=longNames.map((name)=>{
//     return {
//         name:name.firstName +" "+ name.lastName
//     };
// })
// console.log(shortNames);

// 03 - Filter Numbers

// let array=[1,"toto",34,"javascript",8];
// let numbers=array.filter((i)=>{
//     return i>0;
// })
// console.log(numbers)

// 04 - Filter Even

// const numbers=[1,2,3,4,5,6,7,8];
// const even=numbers.filter((i)=>{
//     return i%2===0;
// })
// console.log(even);

// 05 - Cakes 

// let Cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]

// let chocolated=Cakes.filter((cake)=>{
//     return cake.flavor==="chocolate";
// })
// const soldOut=chocolated.map((cake)=>{
//     return {
//         name:cake.name,
//         flavor:cake.flavor,
//         status:"Sold Out !"
//     }
// });
// console.log(soldOut);

// 06 - Cake v2

// let Cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]

// const getName=Cakes.find((cake)=>{
//     return cake.name==="pie";
// })
// console.log(getName);

// 07 - Factorielle forEach
// const numbers = [1,2,3,4,5,6,7,8,9];
// let result = 1;
// numbers.forEach(number => {
//   result = result * number;
// })
// console.log(result);