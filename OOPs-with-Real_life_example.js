class Player {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  attack(enemy) {
    enemy.health -= 10;
    console.log(`${this.name} attacks ${enemy.name}, ${enemy.name} health: ${enemy.health}`);
  }
}

class Warrior extends Player {
  constructor(name, health, armor) {
    super(name, health);
    this.armor = armor;
  }

  defend() {
    this.health += this.armor;
    console.log(`${this.name} defends and gains ${this.armor} health.`);
  }
}

const p1 = new Warrior("Nike", 100, 20);
const p2 = new Player("Enemy", 80);

p1.attack(p2);
p1.defend();
