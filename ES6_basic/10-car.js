export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Crea un nuevo objeto con la misma clase del original
    const CarClass = this.constructor;
    return new CarClass(this._brand, this._motor, this._color);
  }
}

