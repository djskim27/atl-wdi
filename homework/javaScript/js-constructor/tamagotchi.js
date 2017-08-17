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
    cry() {
        this.foodInTummy -= 1;
        console.log(this.foodInTummy);
        console.log("WAH");
        return this.foodInTummy;
    }
    puke() {
        this.foodInTummy -= 1;
        console.log("WAH, I only have " + this.foodInTummy)
    }
    yawn() {
        this.restedness -= 1;
        console.log(this.propertyName + " has current restedness of: " + this.restedness);

    }
    start() {
        console.log("Starting " + this.name);
        var self = this;
        this.hungerTimer = setInterval(function () {
            self.cry();
        }, 6000);
        this.yawnTimer = setInterval(function () {
            self.yawn();
        }, 10000);
        this.sickTimer = setInterval(function () {
            self.puke();
        }, 25000);
    };
    stop() {
        console.log("Stopping " + this.name);
        clearInterval(this.hungerTimer);
        clearInterval(this.yawnTimer);
        clearInterval(this.sickTimer);
    };
};

//create new Tamagotchis
let richard = new Tamagotchi("Richard", "hamster");
let hunter = new Tamagotchi("Hunter", "cat");
let dude = new Tamagotchi("dude", "dog");
let hello = new Tamagotchi("hello", "mouse");


//test out your Tamagotchies below via console.logs

richard.cry();
hunter.cry();
dude.puke();
hello.yawn();