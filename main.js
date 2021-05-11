class Animal{
    constructor(name){
        this.name = name;
        
    }
}

class Dog extends Animal {
    #color = "brown"
    constructor(name){
        // this.name = name
        super.name
    }


    speak(){
        console.log("Bbark!")
    }
    // privata nu poate fi acestaa din exterior
    #walk(){
        console.log("Bbark!")
    }
}

const myDog = new Dog("Ares");
myDog.speak();