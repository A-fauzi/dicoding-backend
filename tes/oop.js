class Animal {
    constructor(name, age, isMammal ) {
        this.name = name
        this.age = age
        this.isMammal = isMammal
    }
}

class Rabbit extends Animal {
    constructor() {
        super();
        this.isMammal = true
    }
    eat(){
        return `${this.name} sedang makan!`
    }
}

class Eagle extends Animal{
    constructor() {
        super();
        this.isMammal = false
    }
    fly() {
        return `${this.name} sedang terbang!`
    }
}

const myRabbit = new Rabbit()
myRabbit.name = "Labi"
myRabbit.age = 2
console.log(myRabbit.isMammal)

const myEagle = new Eagle()
myEagle.name = "Elo"
myEagle.age = 4
console.log(myEagle.isMammal)