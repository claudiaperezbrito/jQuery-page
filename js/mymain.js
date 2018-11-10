//jQuery begins... NOW//

$(document).ready(() => {

  $('#suspectsButton').on('click',() => {
    $('#suspects').fadeToggle(1000);
  });

  $('#battyButton').on('click',() => {
    $('#batty').fadeToggle(1000);
  });

  $('#laundryButton').on('click',() => {
    $('#laundry').fadeToggle(1000);
  });

  $('#birthdayButton').on('click',() => {
    $('#birthday').fadeToggle(1000);
  });


//this bracket thing & parenthesis MUST STAY AT THE END//
})
