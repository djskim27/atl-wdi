console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name) {
        this.propertyName = value;
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
const richard = new Tamagotchi("Richard");
const hunter = new Tamagotchi("Hunter");
richard.cry();
hunter.cry();
//test out your Tamagotchies below via console.logs
