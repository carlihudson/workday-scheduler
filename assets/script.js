var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));
// needs to be updated with display of st, nd, rd, th 

let hourOfDay = dayjs().hour(); 

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let workHours = [9,10,11,12,13,14,15,16,17]

$(function () {

  for (let i = 0; i < workHours.length; i++) {
    let usaHours = workHours[i];
    
    if(workHours[i] >= 12){
      usaHours = workHours[i] 
      if(workHours[i] >= 13){
        usaHours = workHours[i] - 12 
      }
    }
    let row = $("<div class='row time-block'>")
    
    let firstCol = $("<div class='col-2 col-md-1 hour text-center py-3'>");
    firstCol.append(usaHours)
    
    let secondCol = $("<textarea class='col-8 col-md-10 description'>");

    let thirdCol = $("<button class='btn saveBtn col-2 col-md-1 fas fa-save'>");

    row.append(firstCol, secondCol, thirdCol)
    $('#container').append(row)

     if(usaHours < hourOfDay){
      secondCol.addClass('past')
    } else if(usaHours === hourOfDay) {
      secondCol.addClass('present')
    } else {
      secondCol.addClass('future')
    }

  }

  function saveEvent() {
    localStorage.setItem('description',)
  }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});

thirdCol.addeventlistener('click', saveEvent)
