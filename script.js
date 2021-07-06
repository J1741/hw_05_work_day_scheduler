/**
 * globals
*/

// save references to important DOM elements
var currentDayEl = $('#currentDay');

/**
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

displayDay();