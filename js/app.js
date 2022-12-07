'use strict';

//Store the min/max hourly customers, and the average cookies per customer, in object properties.
// NEED AN ARRAY 


// Use a method of that object to generate a random number of customers per hour. Objects/Math/random
// NEED A FUNTION: got it from class demo. 
function randomNumOfCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
// Need a for loop
// 

// Store the results for each location in a separate array… perhaps as a property of the object representing that location.


// Display the values of each array as unordered lists in the browser.
// Calculating the sum of these hourly totals; your output for each location should look like this:




//  ********** DOM WINDOWS *************
let storeSection = document.getElementById('stores');

// ************** GLOBALS **************
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




// ************* HELPER FUNCTIONS / UTILIES **************

// **************** CONSTRUCTOR FUNCTIONS ****************
function Location(name, minCust, maxCust, avrgCookiesBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avrgCookiesBought = avrgCookiesBought;
  this.total = 0;
  this.cookiesBought = [];
  // this.custPerHour = [];

}
Location.prototype.getNumOfCust = function () {
  // for (let i = 0; i < hours.length; i++) {
  return (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
  // }
};
Location.prototype.cookieSales = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookiesNeeded = this.getNumOfCust() * this.avrgCookiesBought;
    this.cookiesBought.push(cookiesNeeded);
    this.total = this.total + cookiesNeeded;
    this.total += cookiesNeeded;
  }
};
Location.prototype.render = function () {
  this.cookieSales();
  let trElem = document.createElement('tr');
  storeSection.appendChild(trElem);
  let th1Elem = document.createElement('th');
  th1Elem.textContent = this.name;
  trElem.appendChild(th1Elem)
};


// ************ OBJECT LITERALS ************
// got from class demo
// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avrgCookiesBought: 6.3,
//   cookiesBought: [],
//   total: 0,
//   getNumOfCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },// this.cookiesBought = randomNumOfCust(23, 65);
//   cookieSales: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesNeeded = this.getNumOfCust() * this.avrgCookiesBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//       // this.total += cookiesNeeded;
//     }
//   },
//   render: function () {
//     this.cookieSales();
//     // let ulElem = document.createElement('ul');
//     // storeSection.appendChild(ulElem);
//   }
// };

// seattle.getNumOfCust();
// console.log(seattle);


// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avrgCookiesBought: 1.2,
//   cookiesBought: [],
//   total: 0,
//   getNumOfCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//     // }this.cookiesBought = randomNumOfCust(3, 24);
//   },
//   cookieSales: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesNeeded = this.getNumOfCust() * this.avrgCookiesBought;
//       this.cookiesNeeded.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
// //     }
//     tokyo.getNumOfCust();
//     console.log(tokyo);
//   }
// };

// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 24,
//   avrgCookiesBought: 3.7,
//   cookiesBought: [],
//   total: 0,
//   getNumOfCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   }, // this.cookiesBought = randomNumOfCust(11, 38);
//   cookieSales: function() {
//     for (let i = 0; i < hours.lenght; i++) {
//       let cookiesNeeded = this.getNumOfCust() * this.avrgCookiesBought;
//       this.cookiesNeeded.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   }
// };
// dubai.getNumOfCust();
// console.log(dubai);

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avrgCookiesBought: 2.3,
//   cookiesBought: [],
//   total: 0,
//   getNumOfCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },// this.cookiesBought = randomNumOfCust(20, 38);
//   cookieSales: function() {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesNeeded = this.getNumOfCust() * this.avrgCookiesBought;
//       this.cookiesNeeded.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   }
// };
// paris.getNumOfCust();
// console.log(paris);

// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avrgCookiesBought: 4.6,
//   cookiesBought: [],
//   total: 0,
//   getNumOfCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },// } this.cookiesBought = randomNumOfCust(2, 16);
//   cookieSales: function() {
//     for(let i = 0; i < hours.length; i++) {
//       this.cookiesNeeded = this.getNumOfCust() * this.avrgCookiesBought;
//       this.cookiesNeeded.push(this.cookiesNeeded);
//       this.total = this.total + this.cookiesNeeded;
//     }
//   } 
// };
// lima.getNumOfCust();
// console.log(lima);

// *********** EXECUTABLE CODE ************
let seattle = new Location('Seattle', 23, 65, 6.3);
seattle.render();
