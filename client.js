class Dog {
    constructor(color, weight, breed, treatsNeededToBeQuiet) {
        this.color = color;
        this.weight = weight;
        this.breed = breed;
        this.treatsNeededToBeQuiet = treatsNeededToBeQuiet;
    }
    feed(treatsGiven) {
        if (treatsGiven < this.treatsNeededToBeQuiet) {
            console.log('BARK BARK BARK BARK BARK!!!!')
        } else {
            console.log('Yum, happy puppy');
        }
    }
}

let phoebe = new Dog('blue merle', 40, 'Catahoula', 3);

phoebe.feed(2); //did not feed her enough treats so she'll bark
phoebe.feed(5); //fed her more than enough so she is  happy