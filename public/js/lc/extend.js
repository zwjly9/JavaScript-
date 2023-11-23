class Car { 
  constructor(brand) {
    this.brand = brand
  }
  showBrand() {
    console.log('bbbb', this.brand);
  }
}

class ElectricCar extends Car {
  constructor(brand, duration) {
    super(brand);
    this.duration = duration;
  }
  showDuration() {
    console.log(`duration of this ${this.brand} ElectricCar :>> `, this.duration);
  }
}

ElectricCar.prototype.showOriginator = function (originator) {
  console.log(`originator of this ElectricCar :>> `, originator);
};

const tesla = new ElectricCar("tesla", "600km");
tesla.showBrand(); // the brand of car :>>  tesla
tesla.showDuration(); // duration of this tesla ElectricCar :>>  600km
console.log("tesla instanceof Car :>> ", tesla instanceof Car); // tesla instanceof Car :>>  true
console.log("tesla instanceof ElectricCar :>> ", tesla instanceof ElectricCar); // tesla instanceof ElectricCar :>>  true
console.log("tesla.__proto__ :>> ", tesla.__proto__); // tesla.__proto__ :>>  Car {}
console.log("ElectricCar.prototype === tesla.__proto__  :>> ", ElectricCar.prototype === tesla.__proto__); // ElectricCar.prototype === tesla.__proto__  :>>  true
tesla.showOriginator("Mask"); // originator of this  ElectricCar :>>  Mask

const bydCar = {
  brand: "比亚迪",
  duration: "666km",
};
bydCar.__proto__ = ElectricCar.prototype;

bydCar.showBrand(); //the brand of car :>>  比亚迪
bydCar.showDuration(); // duration of this 比亚迪 ElectricCar :>>  666km
