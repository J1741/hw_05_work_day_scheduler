/*
 * globals
 */

// save references to important DOM elements
var currentDayEl = $('#currentDay');

// set up global variables
var currentHour;


/*
 * planner header
 */

// handle displaying the current day
function displayDay() {
  // create and format var for current day
  var today = moment().format('dddd[,] MMMM Do');
  console.log(today);
  // add current day to page header 
  currentDayEl.text(today);

};


/*
 * timeblocks
 */

// gets current hour as integer
function getCurrentHour() {
  currentHour = parseInt(moment().format("HH"), 10);
  console.log("currentHour =", currentHour)
}


/*
 * function calls
 */

displayDay();
getCurrentHour();


/*
 * TESTING
 */