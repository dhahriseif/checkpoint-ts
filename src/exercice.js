"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car = /** @class */ (function () {
    function car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    car.prototype.start = function () {
        console.log("Car engine started");
    };
    return car;
}());
var voiture = new car("peugeot", "207", 2012);
voiture.start();
exports.default = voiture;
