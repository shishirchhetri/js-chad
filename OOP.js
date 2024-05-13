// ES5 -> prototypal inheritance
/*
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function () {
  return 'vroom';
};

const vehicle = new Car({ title: 'Lambo' });

console.log(vehicle.drive());

function RollsRoyce(options) {
  //passing the predefined method that exists in Car obj
  Car.call(this, options);
  this.color = options.color;
}

RollsRoyce.prototype.honk = function () {
  return 'peep';
};

//prototype chain => creates shared method of car (inheritance)
RollsRoyce.prototype = Object.create(Car.prototype);
RollsRoyce.prototype.constructor = RollsRoyce;

const car = new RollsRoyce({ color: 'Silver', title: 'Phantom' });
console.log(car.title);
console.log(car.drive()); */

// ES6 -> using class

class Car {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return 'vroom';
  }
}

const car = new Car({ title: 'Lambo' });

console.log(car.drive());

console.log(car.title);

class Lambo extends Car {
  constructor({ title, color }) {
    super({ title });
    this.title = title;
    this.color = color;
  }
  honk() {
    return 'Beep';
  }
}

const lambo = new Lambo({ title: 'Lambo', color: 'green' });
console.log(lambo.honk());
console.log(lambo.title);
console.log(lambo.color);

console.log(lambo.drive());

// Game using ES6
class Monster {
  constructor(options) {
    this.name = options.name;
    this.health = 100;
  }
}

const monster = new Monster({ name: 'Monster' });
console.log(monster);

class Dog extends Monster {
  constructor(options) {
    super(options);
  }
}

// sunclassing monsters
class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(anotherSnake) {
    if (anotherSnake instanceof Snake) {
      anotherSnake.health -= 10;
      console.log(
        `${this.name} bit ${anotherSnake.name}'s health is now ${anotherSnake.health}`,
      );
    } else {
      console.log('Invalid target for bite. Only snakes can be bitten!');
    }
  }
}

const snake1 = new Snake({ name: 'Snake 1' });
const snake2 = new Snake({ name: 'Snake 2' });

const dog = new Dog({ name: 'Kale' });

console.log(snake1.name);
console.log(snake2.name);

snake1.bite(snake2);
snake1.bite(dog);
