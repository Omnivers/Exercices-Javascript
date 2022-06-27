// 01 - Batmobile

let x=null;
class car{
    constructor(brand,speed){
        this.brand=brand;
        this.speed=speed;
    }
    accelerate(accelerated){
        this.speed=accelerated+this.speed;
    }
    brake(x){
        this.speed=this.speed-x;
    }
    describe(){
        console.log(`${this.brand} is running at ${this.speed}km/h`)
    }
    
}
const ford= new car("ford",0);
ford.describe();
ford.accelerate(50);
console.log(ford);
ford.brake(25);
console.log(ford);

const mercedes= new car("mercedes",100);
mercedes.describe();
mercedes.accelerate(150);
console.log(mercedes);
mercedes.brake(250);
console.log(mercedes);

// 2 - TV

class TV{
    constructor(brand,channel,volume){
        this.brand=brand;
        this.channel=1;
        this.volume=50;
    }
    addVolume(num){
        let newVolume=this.volume+num;
        if(newVolume>0 && newVolume<100){
            this.volume=newVolume;
        }
    }
    changeChannel(num){
        if(num<50 && num>0){
            this.channel=num;
        }
    }
    reset(){
        this.channel=1;
        this.volume=50;
    }
    describe(){
        console.log(`Le model de la télévision est ${brand}, le volume est de ${volume}, la chaine est ${channel}`);
    }
}
const samsung=new TV('samsung',1,30);
samsung.addVolume(30);
samsung.changeChannel(34);
samsung.reset();
console.log(samsung);

// 3 - Video games;

let gender=null;
class Png{
    constructor(firstName,lastName,sexe){
        this.firstName=firstName;
        this.lastName=lastName;
        this.sexe=sexe;
    }
    player(){
        if(this.sexe==="male"){
            gender="he's"
        }
        else{
            gender="she's"
        }
        console.log(`The character you choosed is ${this.firstName} ${this.lastName} ${gender} a ${this.sexe}`);
    }
}
const myplayer= new Png("Jad","Aroussi","male");
myplayer.player();