# workday-scheduler
Module 5 Project

GIVEN I am using a daily planner to create a schedule



## WHEN I scroll down
## THEN I am presented with time blocks for standard business hours
    add time blocks in HTML to 5PM
        take out times 
    create variables
        day container
        array with hours   
            create a for loop to append index of arrays into first column of bootstrap table
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
        past, present, and future classes to hide and unhide  

## WHEN I click the save button for that time block
## THEN the text for that event is saved in local storage
    get/set item

## WHEN I refresh the page
## THEN the saved events persist
    
