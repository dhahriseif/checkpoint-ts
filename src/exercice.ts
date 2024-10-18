interface vehicule {
  make: string;
  model: string;
  year: number;
  start(): void;
}
class car implements vehicule {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start(): void {
    console.log("Car engine started");
  }
}

var voiture = new car("peugeot", "207", 2012);
voiture.start();

export default voiture;