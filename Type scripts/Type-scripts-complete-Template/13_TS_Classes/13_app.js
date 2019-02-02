// Creation of Class
var Car = (function () {
    // Constructor function
    function Car(color, model, yearOfMfg, mileage) {
        this._color = color;
        this._model = model;
        this._yearOfMfg = yearOfMfg;
        this._mileage = mileage;
    }
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "yearOfMfg", {
        get: function () {
            return this._yearOfMfg;
        },
        set: function (value) {
            this._yearOfMfg = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "mileage", {
        get: function () {
            return this._mileage;
        },
        set: function (value) {
            this._mileage = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.hasAirBags = function () {
        return true;
    };
    Car.prototype.hasFogLamps = function () {
        return true;
    };
    Car.prototype.specification = function () {
        var specification = "Color : " + this.color + "\n                                      Model : " + this.model + "\n                                      Year of Mfg : " + this.yearOfMfg + "\n                                      mileage : " + this.mileage + "\n                                      has AirBags : " + this.hasAirBags() + "\n                                      has FogLamps : " + this.hasFogLamps() + "\n                                      ";
        console.log(specification);
    };
    return Car;
}());
// Creating a Car Object
var car = new Car('White', 'Benz', 2018, '10kmpl');
car.specification();
