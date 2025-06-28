class Car {
  #engineStarted = false;

  startEngine() {
    this.#engineStarted = true;
    console.log("Engine started");
  }

  drive() {
    if (this.#engineStarted) {
      console.log("Car is moving...");
    } else {
      console.log("Start the engine first!");
    }
  }
}

const myCar = new Car();
myCar.drive();         // Start the engine first!
myCar.startEngine();   // Engine started
myCar.drive();         // Car is moving...
