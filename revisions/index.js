// 01 - Alphabet 

const sortLetters =(string) =>{
    string=string.split("");
    string=string.sort();
    string=string.join('');
    console.log(string);
}
sortLetters("Konexio");

// 02 - XOXO
let numberX=0;
let numberO=0;
const countEach = (XO) =>{
    XO.toLowerCase();
    for(i=0; i<XO.length; i++){
        if(XO[i] === "x"){
            numberX++;
        }
        else if(XO[i] === "o"){
            numberO++;
        }
    }
    if(numberX>numberO || numberO>numberX){
        XO=false;
    }
    else{
        XO=true;
    }
    console.log(Boolean(XO));
}
countEach("xxxoooox");

// 03 - Palindrome 

const isPalindrome = (stringPalindrom) => {
    const stringArray = stringPalindrom.split("")
    const inverseArray = stringArray.reverse()
    const inverseString = inverseArray.join("")
    if (inverseString === stringPalindrom){
        console.log("Palindrome !");
    }else {
        console.log("Nope");
    }
}

isPalindrome("racecar")
isPalindrome("laptop")

