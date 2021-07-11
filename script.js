/*
 * globals
 */

// save references to important DOM elements
var currentDayEl = $('#currentDay');
var textAreaEls = $('textarea');

// set up global variables
var currentHour;


/*
 * header
 */

// handles displaying the current day
function displayDay () {
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
function getCurrentHour () {
  currentHour = parseInt(moment().format("HH"), 10);
  console.log("currentHour =", currentHour)
  console.log("----");
}

// sets each timeblock class to past, present, or future
function setTimeBlockTense () {
  for (var i = 0; i < textAreaEls.length; i++) {    
    var textAreaId = textAreaEls[i].id;
    var textAreaHour = parseInt(textAreaId.slice(11,13), 10);
    console.log("textarea hour =", textAreaHour);
    console.log("current hour =", currentHour);

    if (textAreaHour < currentHour) {
      console.log(textAreaHour, "is past");
      textAreaEls[i].classList.add("past");
    } else if (textAreaHour === currentHour) {
      console.log(textAreaHour, "is present");
      textAreaEls[i].classList.add("present");
    } else {
      console.log(textAreaHour, "is future");
      textAreaEls[i].classList.add("future");
    }

    console.log("----");

  }

};

// checks current hour and sets timeblock tense 
function updateCalendar () {
  displayDay();
  getCurrentHour();
  setTimeBlockTense();
  console.log("in updateCalendar function!");
};

// runs update calendar function periodically
function setTime () {
  setInterval(updateCalendar, 60000);
  console.log("in setTime function!");
} 


/*
 * function calls
 */

displayDay();
updateCalendar();
setTime();


/*
 * TESTING
 */
