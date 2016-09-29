function Vehicle () {
  this.tires = [];
}

// Create a function named Car with one
// property named `manufactured_date

function Car () {
  this.manufactured_date = Date.now();
};

Car.prototype = new Vehicle();

/*
  Create a function named Make.
  Set its prototype to the Car function.
  Define a property `manufacturer` with a default value of empty string.
 */

function Make () {
  this.manufacturer = "";
}
Make.prototype = new Car();
Make.prototype.setManufacturer = function(company) { //<<<<<<----- this is the setter for the function
  this.manufacturer = company;
}
console.log("Make", Make );

/*
    Create a new Make object - your favorite one (e.g. Mini)
*/

var mini = new Make();
mini.setManufacturer("BMW");
console.log("mini", mini);

var honda = new Make();

console.log("honda", honda);

/*
    Create a new Model object of your favorite model
*/

function Model(name) {
  this.name = name;
  this.color = "";
}
Model.prototype = new Make();
Model.prototype.setColor = function(color) {
  this.color = color;
}


/*
  Create individual instances of the model
 */

 var civic = new Model("Civic");
  civic.setManufacturer("Honda");
  civic.setColor("Rusty Sunrise");
 console.log("Civic", civic);


 function Tire () {}

 function Pirelli () {}
 Pirelli.prototype = new Tire();

 function PExtreme () {}
 PExtreme.prototype = new Pirelli();

 function PExtreme55 () {}
 PExtreme55.prototype = new Pirelli();

 var tire1 = new PExtreme();
 var tire2 = new PExtreme55();
 var tire3 = new PExtreme55();
 var tire4 = new PExtreme55();

 civic.tires.push(tire1, tire2, tire3, tire4);
 console.log("civic", civic);
 console.log("civic tires", civic.tires);




/*
    Being an avid car collector, you own three
    different cars of same model from your
    favorite manufacturer.

    Create three new objects for each of your
    three favorite cars.
*/

// function LeesCar() {
//   this.manufactured_date = Date.now();
// };

// function LeesMake() {
//   this.manufacturer = "";
// }

// LeesMake.prototype = new LeesCar();
// LeesMake.prototype.setManufacturer = function(company) {
//   this.manufacturer = company;
// }
//  console.log("LeesMake", LeesMake);

// var gts = new LeesMake();
// gts.setManufacturer("GMC")
//  console.log("gts", gts );

// var trike = new LeesMake();
// trike.setManufacturer("Nissan")
//  console.log("trike", trike);

// var bicycle = new LeesMake();
// bicycle.setManufacturer("Volvo")
//  console.log("bicycle", bicycle);



/*
    Being a rich, avid car collector, you own 2 cars from your second
    favorite manufacturer. You also one 1 car from your third favorite
    manufacturer.
*/