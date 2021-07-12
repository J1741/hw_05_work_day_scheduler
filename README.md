# Overview
This file describes a project to modify a starter codebase to create a simple, dynamic work day scheduler application, allowing users to enter and save events for each hour of the day.  

# Requirements
The work day schedule development process targeted the following user story:

# User Story
```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria
```
GIVEN I am using a daily planner to create a schedule:

1. WHEN I open the planner
- THEN the current day is displayed at the top of the calendar

2. 
WHEN I scroll down
- THEN I am presented with timeblocks for standard business hours

3. WHEN I view the timeblocks for that day
- THEN each timeblock is color coded to indicate whether it is in the past, present, or future

4. WHEN I click into a timeblock
- THEN I can enter an event

5. WHEN I click the save button for that timeblock
- THEN the text for that event is saved in local storage

6. WHEN I refresh the page
- THEN the saved events persist
```

# Contents

## HTML and CSS
The HTML (`index.html`) and CSS (`style.css`) files in this repository comprised the starter codebase provided at the beginning of this project.

The starter code in the HTML file included:
- Links to several third-party APIs: Bootstrap, Font Awesome, Google Fonts, jQuery, and Moment
- A link to a local CSS file
- A header element with a placeholder paragraph element for the current day
- A container element with a comment indicating where time blocks should be added to the HTML

The following content was added to the HTML file during development:
- Nine `<div>` elements, corresponding to an hour-long time block during normal business hours. Each of these time block divs contains:
  - A `<div>` element for the time block hour
  - A `<textarea>` element for the time block event description
  - A `<button>` element for saving the time block event
- A link to a local JavaScript file

The starter code in the CSS file included:
- Styles for `<body>` and `<textarea>` elements, the latter of which did not exist in the HTML
- Styles for `.jumbotron`, `.description`, `.time-block`, `.row`, `.hour`, `.past`, `.present`, `.future`, `.saveBtn`, and `.saveBtn i:hover`. Most of these classes were not yet used in the HTML 

The following changes were made in the CSS file during development:
- A basic css reset was added
- The `.hour`, `.time-block`, and `.saveBtn` classes were modified to include a grid template area styling
- The `past`, `present`, and `future` classes were modified to use black instead of white text to improve readability
- The `.saveBtn i:hover` class was disabled
- A `.saveBtn:hover` class was added to darken a the save button background on hover
- Grid layout was added to the `.time-block` class, including
  - Frame-based grid template columns
  - Auto-sized grid template rows
  - Three grid template areas for the hour, textarea, and save buttons in each time block row
  - This layout allowed the time blocks in the calendar to be laid out in a clean, responsive UI

## JavaScript
The JavaScript `script.js` file in the codebase was not part of the starter code and was added during the development process.

### Globals
- A `currentDayEl` variable was added to access HTML element paragraph element in which the current day was to be displayed
- A `textAreaEls` variable was added to access the HTML textarea elements in which event descriptions were to be added 
- A `currentHour` variable was added to store the current hour

### Functions
- For handling the page header:
  - A `displayDay` function was written to get the current date via the Moment API, format it according to the mockup provided with the starter codebase, and display it in the calendar header. This function is called when the page loads and in the `updateCalendar` function
- For handling time block display:
  - A `getCurrentHour` function was written to get the current hour of the day via the Moment API, convert it to an integer, and store it in the `currentHour` variable. This function is called in the `updateCalendar` function
  - A `setTimeBlockTense` function was written to check whether each time block's hour was before, the same as, or after the current hour, and to set the time block's class to `.past`, `.present`, or `.future` (respectively). This function is called in the `setTime` function
  - An `updateCalendar` function was written to call the `displayDay`, `getCurrentHour`, and `setTimeBlockTense` functions. This function is called when the page loads and in the `setTime` function
  - A `setTime` function was written to call the `updateCalendar` function once per minute in order to keep the displayed day and time block tenses current
- For handling time block interaction
  - Event listeners were added to each of the save button IDs (e.g. `#saveBtn09`)
  - Nine save functions (e.g. `saveEvent09`) were added for the time block textareas, to save the event description entered by the user for a time block hour in local storage. These functions are called when their corresponding save buttons are clicked
  - Nine load functions (e.g. `loadEvent09`) were added for for the time block textareas, to retrieve the descriptions saved for a time block from local storage, and display the retrieved description in the time block's textarea. These functions are called when the page loads

# Testing
The application was tested throughout development in the Google Chrome browser `Version 91.0.4472.114 (Official Build) (x86_64)` to ensure that the application layout was responsive and mobile-friendly, the required features where functioning as requested, and no errors appeared in the console when the application is run.

# Deployed Application

## Link to Deployed Application

## Screenshot of Deployed Application
The following screenshot illustrates the results of the work day scheduler project: 
![Alt text](./screenshot.png?raw=true "Screenshot of Work Day Scheduler")