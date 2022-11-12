# workday-scheduler
Module 5 Project

GIVEN I am using a daily planner to create a schedule

## WHEN I open the planner
## THEN the current day is displayed at the top of the calendar
    add day.js
    div container for day of the week on HTML
        make sure it's on CSS
        create day container variable
            add dayjs() display function

## WHEN I scroll down
## THEN I am presented with time blocks for standard business hours
    add time blocks in HTML to 5PM
        copy/paste previous ones but change classes/ids
    create variables
        day container
        array with hours
        save buttons array I think

## WHEN I view the time blocks for that day
## THEN each time block is color-coded to indicate whether it is in the past, present, or future
    link hour variables to day.js
    add if/else statements
        time array
        current time variable?
        if time in array index is less than current time, bg color is gray
        else if time in array index is equal to current time, bg color is red
        else green

## WHEN I click into a time block
## THEN I can enter an event
    event listener
        can I make the day hours one container and divy it out?
        or do I need to make an event listener for each one?
            Is there a way to divide it into 4 quadrants so there's more available timing?
                jQuery UI maybe?

        event listener actions
            function that creates a text block in said area 

## WHEN I click the save button for that time block
## THEN the text for that event is saved in local storage
    get/set item

## WHEN I refresh the page
## THEN the saved events persist
    
