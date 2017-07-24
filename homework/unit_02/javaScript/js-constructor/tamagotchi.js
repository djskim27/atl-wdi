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
};

//create new Tamagotchis
const richard = new Tamagotchi("Richard", "hamster");
const hunter = new Tamagotchi("Hunter", "cat");
richard.cry();
hunter.cry();
console.log(richard);
//test out your Tamagotchies below via console.logs
