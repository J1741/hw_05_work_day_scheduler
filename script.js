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
 * timeblock formatting
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
  console.log("----");
};

// runs update calendar function periodically
function setTime () {
  setInterval(updateCalendar, 60000);
  console.log("in setTime function!");
  console.log("----");
} 


/*
 * timeblock interaction: 9am
 */

// add event listener for 9am save button
$("#saveBtn09").on("click", saveEvent09);

// saves description entered in 9am timeblock  
function saveEvent09(event) {
  event.preventDefault();
  // get input
  var event09Input = $('#time-block-09').val();
  // save to local storage
  localStorage.setItem("event09", event09Input);

}

// loads description saved for 9am timeblock 
function loadEvent09() {
  console.log("in loadEvent09 function!");
  console.log("----");
  var event09Local = localStorage.getItem("event09");
  console.log("event09Local:", event09Local);
  $('#time-block-09').val(event09Local); 

};


/*
 * timeblock interaction: 10am
 */

// add event listener for 10am save button
$("#saveBtn10").on("click", saveEvent10);

// saves description entered in 10am timeblock  
function saveEvent10(event) {
  event.preventDefault();
  // get input
  var event10Input = $('#time-block-10').val();
  // save to local storage
  localStorage.setItem("event10", event10Input);

}

// loads description saved for 10am timeblock 
function loadEvent10() {
  console.log("in loadEvent10 function!");
  console.log("----");
  var event10Local = localStorage.getItem("event10");
  console.log("event10Local:", event10Local);
  $('#time-block-10').val(event10Local); 

};


/*
 * timeblock interaction: 11am
 */

// add event listener for 11am save button
$("#saveBtn11").on("click", saveEvent11);

// saves description entered in 11am timeblock  
function saveEvent11(event) {
  event.preventDefault();
  // get input
  var event11Input = $('#time-block-11').val();
  // save to local storage
  localStorage.setItem("event11", event11Input);

}

// loads description saved for 11am timeblock 
function loadEvent11() {
  console.log("in loadEvent11 function!");
  console.log("----");
  var event11Local = localStorage.getItem("event11");
  console.log("event11Local:", event11Local);
  $('#time-block-11').val(event11Local); 

};


/*
 * timeblock interaction: 12pm
 */

// add event listener for 12pm save button
$("#saveBtn12").on("click", saveEvent12);

// saves description entered in 12pm timeblock  
function saveEvent12(event) {
  event.preventDefault();
  // get input
  var event12Input = $('#time-block-12').val();
  // save to local storage
  localStorage.setItem("event12", event12Input);

}

// loads description saved for 12pm timeblock 
function loadEvent12() {
  console.log("in loadEvent12 function!");
  console.log("----");
  var event12Local = localStorage.getItem("event12");
  console.log("event12Local:", event12Local);
  $('#time-block-12').val(event12Local); 

};


/*
 * timeblock interaction: 1pm
 */

// add event listener for 1pm save button
$("#saveBtn13").on("click", saveEvent13);

// saves description entered in 1pm timeblock  
function saveEvent13(event) {
  event.preventDefault();
  // get input
  var event13Input = $('#time-block-13').val();
  // save to local storage
  localStorage.setItem("event13", event13Input);

}

// loads description saved for 1pm timeblock 
function loadEvent13() {
  console.log("in loadEvent13 function!");
  console.log("----");
  var event13Local = localStorage.getItem("event13");
  console.log("event13Local:", event13Local);
  $('#time-block-13').val(event13Local); 

};


/*
 * timeblock interaction: 2pm
 */

// add event listener for 2pm save button
$("#saveBtn14").on("click", saveEvent14);

// saves description entered in 2pm timeblock  
function saveEvent14(event) {
  event.preventDefault();
  // get input
  var event14Input = $('#time-block-14').val();
  // save to local storage
  localStorage.setItem("event14", event14Input);

}

// loads description saved for 2pm timeblock 
function loadEvent14() {
  console.log("in loadEvent14 function!");
  console.log("----");
  var event14Local = localStorage.getItem("event14");
  console.log("event14Local:", event14Local);
  $('#time-block-14').val(event14Local); 

};


/*
 * timeblock interaction: 3pm
 */

// add event listener for 3pm save button
$("#saveBtn15").on("click", saveEvent15);

// saves description entered in 3pm timeblock  
function saveEvent15(event) {
  event.preventDefault();
  // get input
  var event15Input = $('#time-block-15').val();
  // save to local storage
  localStorage.setItem("event15", event15Input);

}

// loads description saved for 3pm timeblock 
function loadEvent15() {
  console.log("in loadEvent15 function!");
  console.log("----");
  var event15Local = localStorage.getItem("event15");
  console.log("event15Local:", event15Local);
  $('#time-block-15').val(event15Local); 

};


/*
 * timeblock interaction: 4pm
 */

// add event listener for 4pm save button
$("#saveBtn16").on("click", saveEvent16);

// saves description entered in 4pm timeblock  
function saveEvent16(event) {
  event.preventDefault();
  // get input
  var event16Input = $('#time-block-16').val();
  // save to local storage
  localStorage.setItem("event16", event16Input);

}

// loads description saved for 4pm timeblock 
function loadEvent16() {
  console.log("in loadEvent16 function!");
  console.log("----");
  var event16Local = localStorage.getItem("event16");
  console.log("event16Local:", event16Local);
  $('#time-block-16').val(event16Local); 

};


/*
 * timeblock interaction: 5pm
 */

// add event listener for 5pm save button
$("#saveBtn17").on("click", saveEvent17);

// saves description entered in 5pm timeblock  
function saveEvent17(event) {
  event.preventDefault();
  // get input
  var event17Input = $('#time-block-17').val();
  // save to local storage
  localStorage.setItem("event17", event17Input);

}

// loads description saved for 5pm timeblock 
function loadEvent17() {
  console.log("in loadEvent17 function!");
  console.log("----");
  var event17Local = localStorage.getItem("event17");
  console.log("event17Local:", event17Local);
  $('#time-block-17').val(event17Local); 

};


/*
 * function calls
 */

displayDay();
updateCalendar();
setTime();
loadEvent09();
loadEvent10();
loadEvent11();
loadEvent12();
loadEvent13();
loadEvent14();
loadEvent15();
loadEvent16();
loadEvent17();


/*
 * TESTING
 */