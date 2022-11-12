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
    if(workHours[i] < hourOfDay){
      $('#hour-' + workHours[i]).addClass('past');
     } else if(workHours[i] == hourOfDay) {
      $('#hour-' + workHours[i]).addClass('present');
      } else {
      $('#hour-' + workHours[i]).addClass('future');
      }
   }
  } 
  );


