// 01 - hello world
console.log("Hello World !");

// 02 - String

const sentence = 'My name is Jad';
console.log(sentence);

// 03 - Concaténation 

const name = "Jad";
console.log(`Nice to meet you ${name}`);

// 04 - String Length

const Sentence = "I'm a new text !"; // la constante sentence existe déjà or on ne peut pas modifier la valeur d'une constante ! On utilise du coup un "S" majuscule pour eviter toute sorte de conflit :)
console.log(Sentence.length);

// 05 - Replace 

const food="croissant is meh";
console.log(food.replace("meh",'so good'));

// 06 - Up  and Down

const basic ="This is Cool";
const basicUp = basic.toUpperCase();
const basicDown = basic.toLowerCase();
console.log(basic);
console.log(basicUp);
console.log(basicDown);

// 07 - Split

const word="banana";
console.log(word.split(""));


// 08 - Template 

const age = 23;
template = `I'm ${age} years old`;
console.log(template);

// BONUS 

let bonus = 'Bonjour';
console.log(bonus.replace("o","a"));

