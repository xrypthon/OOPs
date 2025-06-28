function makeItSpeak(animal) {
  animal.makeSound();
}

const a = new Animal("Animal");
const d = new Dog("Dog");

makeItSpeak(a); // Animal makes a sound
makeItSpeak(d); // Dog barks
