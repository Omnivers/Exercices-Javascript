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

