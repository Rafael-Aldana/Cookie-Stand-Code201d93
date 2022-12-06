'use strict';

//Store the min/max hourly customers, and the average cookies per customer, in object properties.
// NEED AN ARRAY 


// Use a method of that object to generate a random number of customers per hour. Objects/Math/random
// NEED A FUNTION: got it from class demo. 
function randomNumOfCust(min,max) {
  return Math.floor(math.random() * (max - min + 1) + min); 
}



// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.


// Store the results for each location in a separate array… perhaps as a property of the object representing that location.


// Display the values of each array as unordered lists in the browser.
// Calculating the sum of these hourly totals; your output for each location should look like this:




//  ********** DOM WINDOWS *************




// ************** GLOBALS **************
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




// ************* HELPER FUNCTIONS / UTILIES **************




// ************ OBJECT LITERALS ************
let seattle = {
  name: 'Seattle'
  minCust: 23,
  maxCust: 65,
  avrgCookiesBought: 6.3
  cookiesBought: []
  getNumOfCust: function (){
    this.cookiesBought = randomNumOfCust(23, 65);
  }
};
seattle.getNumOfCust();
console.log(seattle);


let tokyo = {
  name: 'Tokyo'
  minCust: 3,
  maxCust: 24,
  avrgCookiesBought: 1.2
  cookiesBought: []
  getNumOfCust: function (){
    this.cookiesBought = randomNumOfCust(3, 24);
  }
};
tokyo.getNumOfCust();
console.log(tokyo);

let dubai = {
  name: 'Dubai'
  minCust: 11,
  maxCust: 24,
  avrgCookiesBought: 3.7
  cookiesBought: []
  getNumOfCust: function (){
    this.cookiesBought = randomNumOfCust(11, 38);
  }
};
dubai.getNumOfCust();
console.log(dubai);

let paris = {
  name: 'Paris'
  minCust: 20,
  maxCust: 38,
  avrgCookiesBought: 2.3
  cookiesBought: []
  getNumOfCust: function (){
    this.cookiesBought = randomNumOfCust(20, 38);
  }
};
paris.getNumOfCust();
console.log(paris);

let lima = {
  name: 'Lima'
  minCust: 2,
  maxCust: 16,
  avrgCookiesBought: 4.6
  cookiesBought: []
  getNumOfCust: function (){
    this.cookiesBought = randomNumOfCust(2, 16);
  }
};
lima.getNumOfCust();
console.log(lima);

// *********** EXECUTABLE CODE ************