//User: enter()
//Door: Sorry, door is locked... ⏳
//(wait 1 second)
//Door: Sorry, still locked... ⏳
//(wait 1 second)
///User: unlock("correct-password")
//Door: Unlocked!
//Door: You entered safely! ✅



  // Define a class named `disi` to simulate a door locking system
  class disi {
    // Private fields: `#isLocked` indicates if the door is locked, `#password` stores the correct password
    #isLocked = true;
    #password = "dorisopen123";

    // Method to unlock the door by checking the password
    unlock(password) {
      if (this.#password == password) {
        this.#isLocked = false; // Set locked status to false if password is correct
        console.log("Congratulation ! Door open ");
      } else {
        console.log("Incorrect password.. "); // This message is misleading (should probably say "Incorrect password")
      }
    }

    // Asynchronous method to enter, keeps waiting while the door is locked
    async enter() {
      while (this.#isLocked == true) {
        console.log("Wait door is still locked....  "); // Informs that the door is still locked
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
      }
      console.log("Door open successfully! "); // This runs when the door is unlocked
    }
  }

  // Create an instance of the `disi` class
  let caller = new disi();

  // Call the `enter` method (waits until the door is unlocked)
  caller.enter();

  // Unlock the door with the correct password
  caller.unlock("dorisopen123");