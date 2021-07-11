/*
 * globals
 */

// save references to important DOM elements
var currentDayEl = $('#currentDay');
var timeBlockEls = $('.time-block');

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
  console.log("----");

};


/*
 * timeblocks
 */

// gets current hour as integer
function getCurrentHour() {
  currentHour = parseInt(moment().format("HH"), 10);
  console.log("currentHour =", currentHour)
  console.log("----");
}

// gets timeblock hour as integer
function getTimeBlockHour() {
  for (var i = 0; i < timeBlockEls.length; i++) {
    console.log("timeblock id =", timeBlockEls[i].id);
    var timeBlockId = timeBlockEls[i].id;
    var timeBlockHour = parseInt(timeBlockId.slice(11,13), 10);
    console.log("timeblock hour =", timeBlockHour);
    console.log("timeblock hour is a:", typeof timeBlockHour);
    console.log("----");
  }
};

/*
 * function calls
 */

displayDay();
getCurrentHour();
getTimeBlockHour();


/*
 * TESTING
 */
