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

