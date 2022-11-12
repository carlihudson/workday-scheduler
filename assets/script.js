$(function () {

  // shows the date on the top of the page  
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));

  // saves inputs that the user types in local storage
  var saveBtn = $(".saveBtn")
  $(".saveBtn").on('click', function() {
    var event = $(this).siblings('.description').get(0).value;
    localStorage.setItem($(this).parent().attr('id'), event);
  });

  // current hour of the day to compare workHours index to
  let hourOfDay = dayjs().hour(); 

  // hours inputted as a numeric index
  let workHours = [9,10,11,12,13,14,15,16,17]

  // keeps written appointments on schedule even if you leave or refresh page
  for (let i = 0; i < workHours.length; i++) {
    let storedEvents = localStorage.getItem('hour-' + workHours[i]);
    let writtenEvent = document.querySelector('#hour-' + workHours[i] + '> .description');
    writtenEvent.textContent = storedEvents
  }

  for (let i = 0; i < workHours.length; i++) {
    if(workHours[i] > hourOfDay){
      $('#hour-' + workHours[i]).addClass('past');
     } else if(workHours == hourOfDay) {
      $('#hour-' + workHours[i]).addClass('present');
      } else {
      $('#hour-' + workHours[i]).addClass('future');
      }
   }
  } 
  );


 


// }

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

