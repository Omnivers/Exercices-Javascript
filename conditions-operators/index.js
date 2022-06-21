// 01 - Comparaison

const test = 143;
const bis = 219;

console.log(test>bis);
console.log(test<bis);
console.log(test>=bis);
console.log(test<=bis);
console.log(test!=bis);
console.log(test!==bis);

// 02 - Condition 

const limit = 50;
var score = 3; //score =293; // score=3849394;// score= 3;

if (score>=limit) {
    console.log("Ok good !");
}
else{
    console.log('Oh nooo...');
}

// 03 - Condition II 

const password = "azerty";
if (password.length>5) {
    console.log('The password is secure');
}

// 04 - condition III

if (score>=limit && password.length>5) {
    console.log("Everything is good");
}
else if (score>=limit || password.length>5){
    console.log("Something is good");
}
else{
    console.log("Nothing is goood");
}

// 05 - Random

max=6;
min=1;
const random = Math.floor(Math.random() * max) + min
if (random===6) {
    console.log("Yes I win !");
}
else{
    console.log("So close...")
}

// 06 - Month
const month = "January"

switch (month) {
    case  "January":
        console.log("winter");
    break;
    case "February":
        console.log("winter");
    break;
    case "Mach":
        console.log("winter");
    break;
    case 'April':
        console.log("winter");
        break;
    case 'May':
        console.log("winter");
        break;
    case 'June':
        console.log("Summer");
        break;
    case 'Jully':
        console.log("Summer");
        break;
    case 'August':
        console.log("Summer");
        break;
    case 'Septembre':
        console.log("Summer");
        break;
    case 'Octobre':
        console.log("Fall");
        break;
    case 'Novembre':
        console.log("Fall");
        break;
    case 'Décembre':
        console.log("winter");
        break;
        default:
            console.log("ok");
}

// 07 - Rounded but better

var roundedNumber = 153.4

if (roundedNumber-Math.floor(roundedNumber)>= 0.5){
    roundedNumber = Math.ceil(roundedNumber)
    console.log(roundedNumber);
}else {
    roundedNumber = Math.floor(roundedNumber)
    console.log(roundedNumber);
}

// 08 - Rounded but better, Méthode 2

var roundedMethod = 3.4356

var roundedMethodString = roundedMethod.toString()

if (roundedMethodString.substring(roundedMethodString.indexOf(".")+1,roundedMethodString.indexOf(".")+2 )>=5){
	roundedMethod = Math.ceil(roundedMethod)
    console.log(roundedMethod);
}else {
    roundedMethod = Math.floor(roundedMethod)
    console.log(roundedMethod);
}

// 09 - Rounded but better, Méthode 3

var roundedMethodTwo = 134.6864564
var roundedNumberindex= (roundedMethodTwo.toString()).indexOf(".")+1
var roundedMethodTwoString = (roundedMethodTwo.toString()).split("")

if (roundedMethodTwoString[roundedNumberindex]>=5){
        roundedMethodTwo = Math.ceil(roundedMethodTwo)
        console.log(roundedMethodTwo);
}else {
    roundedMethodTwo = Math.floor(roundedMethodTwo)
    console.log(roundedMethodTwo);
}


