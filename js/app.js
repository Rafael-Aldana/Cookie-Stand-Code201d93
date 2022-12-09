'use strict';

//Store the min/max hourly customers, and the average cookies per customer, in object properties.
// NEED AN ARRAY


// Use a method of that object to generate a random number of customers per hour. Objects/Math/random
// NEED A FUNTION: got it from class demo.
// function randomNumOfCust(min, max) {
// return Math.floor(Math.random() * (max - min + 1) + min);
// }



// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
// Need a for loop
//

// Store the results for each location in a separate array… perhaps as a property of the object representing that location.


// Display the values of each array as unordered lists in the browser.
// Calculating the sum of these hourly totals; your output for each location should look like this:

let tableBody = document.getElementById('tableBody');
let newStore = document.getElementById('newStore');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let cookiesBought = [];
// ********************* CONSTRUCTOR *************************
function Location(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  cookiesBought.push(this);
}
// ********************** METHODS *******************************
Location.prototype.getNumOfCust = function () {
  this.generatedCustomers = [];
  this.cookieSales = [];
  this.cookiesTotal = 0;
  for (let i = 0; i < 15; i++) {
    this.generatedCustomers.push(randomCustomer(this.minCust, this.maxCust));
    this.cookieSales.push(Math.ceil(this.generatedCustomers[i] * this.avgCookie));
    this.cookiesTotal += this.cookieSales[i];
  }
};
function randomCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let generatedCustomer = Math.floor(Math.random() * (max - min) + min);
  return generatedCustomer;
}

// ***************** TABLE ***********************

Location.prototype.render = function () {
  let tableElem = document.createElement('tr');
  tableBody.appendChild(tableElem);
  let storeName = document.createElement('td');
  storeName.textContent = this.name;
  tableElem.appendChild(storeName);
  for (let i = 0; i < 15; i++) {
    let rowElem = document.createElement('td');
    rowElem.textContent = this.cookieSales[i];
    tableElem.appendChild(rowElem);
  }
  let totalRow = document.createElement('td');
  totalRow.textContent = this.cookiesTotal;
  tableElem.appendChild(totalRow);
};

// ******************* TABLE HEADER ********************
function tableHeaderRender() {
  let tableElem = document.createElement('tr');
  tableBody.appendChild(tableElem);
  let cityTitle = document.createElement('td');
  cityTitle.textContent = 'City';
  tableElem.appendChild(cityTitle);
  for (let i = 0; i < hours.length; i++) {
    let rowElem = document.createElement('td');
    rowElem.textContent = hours[i];
    tableElem.appendChild(rowElem);
  }
  let totalTitle = document.createElement('td');
  totalTitle.textContent = 'Total Sold';
  tableElem.appendChild(totalTitle);
}
// ******************** EXECUTABLE CODE **************************
new Location('Seattle', 23, 65, 6.3);
new Location('Tokyo', 3, 24, 1.2);
new Location('Dubai', 11, 38, 3.7);
new Location('Paris', 20, 38, 2.3);
new Location('Lima', 2, 16, 4.6);

cookiesBought[0].getNumOfCust();
cookiesBought[1].getNumOfCust();
cookiesBought[2].getNumOfCust();
cookiesBought[3].getNumOfCust();
cookiesBought[4].getNumOfCust();
tableHeaderRender();

cookiesBought[0].render();
cookiesBought[1].render();
cookiesBought[2].render();
cookiesBought[3].render();
cookiesBought[4].render();

//  ***************************** Submit Form *****************************

let eventCookieStore = 5;
newStore.addEventListener('submit', handleSumbit);
function handleSumbit(event) {
  event.preventDefault();
  let ShopLocation = event.target.ShopLocation.value;
  let maxCustomers = event.target.maxCustomers.value;
  let minCustomers = event.target.minCustomers.value;
  let avgCookies = event.target.avgCookies.value;
  new Location(ShopLocation, maxCustomers, minCustomers, avgCookies);
  cookiesBought[eventCookieStore].getNumOfCust();
  let rowCount = tableBody.rows.length;
  tableBody.deleteRow(rowCount - 1);
  cookiesBought[eventCookieStore].render();
  tableFooterRender();
  eventCookieStore += 1;
}


function tableFooterRender() {
  let tableElem = document.createElement('tr');
  tableBody.appendChild(tableElem);
  let cityTitle = document.createElement('td');
  cityTitle.textContent = 'Totals';
  tableElem.appendChild(cityTitle);
  let dailyTotals = [];
  let hourlyTotal = 0;
  for (let j = 0; j < hours.length; j++) {
    for (let i = 0; i < cookiesBought.length; i++) {
      hourlyTotal += cookiesBought[i].cookieSales[j];
    }
    dailyTotals.push(hourlyTotal);
    hourlyTotal = 0;
  }
  for (let i = 0; i < hours.length; i++) {
    let rowElem = document.createElement('td');
    rowElem.textContent = dailyTotals[i];
    tableElem.appendChild(rowElem);
  }
  let allStoresTotal = 0;
  for (let i = 0; i < cookiesBought.length; i++) {
    allStoresTotal += cookiesBought[i].cookiesTotal;
  }
  let rowElem = document.createElement('td');
  rowElem.textContent = allStoresTotal;
  tableElem.appendChild(rowElem);
}
tableFooterRender();


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
