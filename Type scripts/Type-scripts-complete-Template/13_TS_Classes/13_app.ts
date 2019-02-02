// Creation of interface
interface Vehicle{
    hasAirBags();
    hasFogLamps();
    specification();
}

// Creation of Class
class Car implements Vehicle{

    // Creation of member variables
    private _color:string;
    private _model:string;
    private _yearOfMfg:number;
    private _mileage:string;


    // Constructor function
    constructor(color: string, model: string, yearOfMfg: number, mileage: string) {
        this._color = color;
        this._model = model;
        this._yearOfMfg = yearOfMfg;
        this._mileage = mileage;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get model(): string {
        return this._model;
    }

    set model(value: string) {
        this._model = value;
    }

    get yearOfMfg(): number {
        return this._yearOfMfg;
    }

    set yearOfMfg(value: number) {
        this._yearOfMfg = value;
    }

    get mileage(): string {
        return this._mileage;
    }

    set mileage(value: string) {
        this._mileage = value;
    }

    hasAirBags() {
        return true;
    }

    hasFogLamps() {
        return true;
    }

    specification() {
        let specification : string = `Color : ${this.color}
                                      Model : ${this.model}
                                      Year of Mfg : ${this.yearOfMfg}
                                      mileage : ${this.mileage}
                                      has AirBags : ${this.hasAirBags()}
                                      has FogLamps : ${this.hasFogLamps()}
                                      `;
        console.log(specification);
    }
}

// Creating a Car Object
let car = new Car('White','Benz',2018,'10kmpl');
car.specification();