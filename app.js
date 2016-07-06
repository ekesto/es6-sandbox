class Animal {
    constructor() {
        console.log('Animalistically');
    }

    walk() {
        console.log('walking');
    }
}

class Tiger extends Animal {
    walk() {
        console.log('walking like a Tiger');
    }
}

// var animal = new Animal();

// var tiger = new Tiger();

export default Animal;
export default Tiger;
