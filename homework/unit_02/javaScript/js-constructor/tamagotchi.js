console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, creatureType) {
        this.propertyName = name;
        this.propertyCreatureType = creatureType;
        this.creatureType;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;

    }
    cry(){
        this.foodInTummy -= 1;
        console.log(this.foodInTummy);
        console.log("WAH");
        return this.foodInTummy;
    }
    puke(){
        this.foodInTummy -= 1;
        console.log("WAH, I only have " + this.foodInTummy)
    }
    yawn(){
        this.restedness -= 1;
        console.log(this.propertyName + " has current restedness of: " + this.restedness);

    }
};

//create new Tamagotchis
const richard = new Tamagotchi("Richard", "hamster");
const hunter = new Tamagotchi("Hunter", "cat");
const dude = new Tamagotchi("dude", "dog");
const hello = new Tamagotchi("hello", "mouse");

richard.cry();
hunter.cry();
dude.puke();
hello.yawn();

//test out your Tamagotchies below via console.logs
