class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type.toLowerCase();
  }

  attack() {
    let attack;
    if (this.type === "ninja") {
      attack = "shuriken";
    } else if (this.type === "mage") {
      attack = "magic";
    } else if (this.type === "warrior") {
      attack = "sword";
    } else if (this.type === "monk") {
      attack = "martial arts";
    }

    return `the ${this.type} attacked using ${attack}`;
  }
}

const hero1 = new Hero("Ryu", 25, "Ninja");
const hero2 = new Hero("Crystal", 27, "Mage");
const hero3 = new Hero("Hanna", 18, "Warrior");
const hero4 = new Hero("Chun-li", 20, "Monk");

console.log(hero1.attack());
console.log(hero2.attack());
console.log(hero3.attack());
console.log(hero4.attack());
