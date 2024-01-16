# DIO-Programming-Logic-Formation-HeroClass-Challange
# 3️⃣ Writing the Classes for a Game

**What should be used**

- Variables
- Operators
- Loops
- Decision structures
- Functions
- Classes and Objects

## Objective:

Create a generic class representing a hero in an adventure with the following properties:

- name
- age
- type (e.g., warrior, mage, monk, ninja)

Additionally, it should have a method called "attack" that meets the following requirements:

- Display the message: "the {type} attacked using {attack}"
- Where {type} should concatenate the type from the class property
- And {attack} should have a different description based on the type, following the table below:

  - If mage -> in the attack, display (used magic)
  - If warrior -> in the attack, display (used sword)
  - If monk -> in the attack, display (used martial arts)
  - If ninja -> in the attack, display (used shuriken)

## Output

At the end, display a message:

- "the {type} attacked using {attack}"
  e.g., mage attacked using magic
  warrior attacked using sword
