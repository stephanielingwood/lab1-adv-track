// function House(floors, windows, bathrooms, rooms, price) {
// floors !== 'undefined' ? floors = 2,
//   this.floors = floors,
//   this.windows = windows,
//   this.bathrooms = bathrooms,
//   this.rooms = rooms,
//   this.price = price,
//   this.sold = false,
//   this.sell = function(usd){
//     this.sold = true;
//     this.price -= usd;
//   }
// }

// var house = new House(3, 10, 4, 5, 434342);
// console.log(house);

// house.sell(100000);
// console.log(house);

// var house2 = new House(,2,3,4,100000);

//Prototype example

function Batman(height) {
  this.name = 'Batman';
  this.nemesis = 'joker';
  this.height = height;

}

Batman.prototype.sidekick = 'Robin';

var shortBatman = new Batman('short');
var tallBatman = new Batman('Tall');

console.log(shortBatman.sidekick);

shortBatman.sidekick = 'goonies';
Batman.prototype.sidekick = 'Bluebird';

console.log(shortBatman.sidekick);
console.log(tallBatman.sidekick);

