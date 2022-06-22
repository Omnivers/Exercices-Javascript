// 01 - Nombre pairs
nombreMax=47;
nombreMin=11;
somme=0;
for (i=nombreMin;i<nombreMax;i++){
    if(i%2==0){
        console.log(`${i} Est un nombre pair`)
        somme=somme+i;
    }
}
console.log(somme);

// 02 - Nombre impairs

nombreMax=588;
nombreMin=109;
for (i=nombreMin;i<nombreMax;i++){
    if(i%2!=0){
        console.log(`${i} Est un nombre impair`)
        somme=somme+i;
    }
}
console.log(somme);

// 03 - Puissance et racine carrée

const numbers=[1,2,3,4,5];
const squares=[];
const roots=[];

for(i=0;i<numbers.length;i++){
    squares[i]=numbers[i]**2;
}
console.log(squares);
for(i=0;i<squares.length;i++){
    roots[i]=Math.sqrt(squares[i]);
}
console.log(roots);

// 04 - Table de multiplication 
multiple=3;
for(i=0;i<=10;i++){
    console.log(`${multiple} x ${i} = ${multiple*i}`)
}

//05 -Plusieur tables de multiplication 


for(i=0;i<=10;i++){
    for(j=0;j<=10;j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
    console.log("********************");
    }


// 06 - Factorielle V1

multiple=1 
for(i=1;i<=7;i++){
    console.log(`${i}! =${multiple} x ${i} = ${multiple*i}`)
    multiple=multiple*i
}

// 07 - Factorielle v2

for (i=0 ; i<=liste; i++){
    total = 1
    for (j=1; j <= i; j++){
        total=total*j
        }
        console.log(total);
}


// 08 - Somme des carrés 

firstNumber=5;
secondNumber=10;
Somme=0;
while(firstNumber<=secondNumber){
    Somme=firstNumber**2+Somme;
    firstNumber++;
}
console.log(Somme);

// 09 - Comptons 

numMax=1000;
numMin=100;
somme=0;

for(i=numMin;i<numMax;i++){
    if (i%7==0) {
        somme++;
    }
}
console.log(somme);

// 10 - Chanceux
numMin=0;
numMax=6;
somme=0;
for(i=0;i<20;i++){
    de=Math.random() * (numMax- numMin) + numMin;
    de=Math.ceil(de);
    if(de>=5) {
        somme++
    }
}
console.log(somme);

// 11- Des boites
console.log(10);
console.log(34);
console.log(17);
console.log(30);
console.log(14);

// 12 - D'autres boites 

console.log(12);
console.log(24);
console.log(33);
console.log(39);
console.log(42);
console.log(0);

// 13 - Encore des boites 
console.log(0)
console.log(3);
console.log(-3);
console.log(2);
console.log(-2);
console.log(5);
console.log(-4);

// 14 - Amstrong Number

numMax="1000";
numMin="0";

for(numMin;numMin<numMax;numMin++){
    if(numMin.toString().charAt(0)**3+numMin.toString().charAt(1)**3+numMin.toString().charAt(2)**3 == numMin){
        console.log(`Bingo Amstrong ! : ${numMin}`)
    }
}

// 15 - Amstrong Number générique 

numMax="10000";
numMin="0";

for(numMin;numMin<numMax;numMin++){
    x=numMin.toString().length
    if(numMin.toString().charAt(0)**x + numMin.toString().charAt(1)**x + numMin.toString().charAt(2)**x + numMin.toString().charAt(3)**x + numMin.toString().charAt(4)**x == numMin){
        console.log(`Bingo GROS Amstrong ! : ${numMin}`)
    }
}

