//jQuery begins... NOW//

$(document).ready(() => {

  var flip = 0;
  $( "#suspectsButton" ).click(function() {
    $( "#suspects" ).toggle( flip++ % 2 === 0 );
  });

var flip = 0;
$( "#battyButton" ).click(function() {
  $( "#batty" ).toggle( flip++ % 2 === 0 );
});

var flip = 0;
$( "#laundryButton" ).click(function() {
  $( "#laundry" ).toggle( flip++ % 2 === 0 );
});

var flip = 0;
$( "#birthdayButton" ).click(function() {
  $( "#birthday" ).toggle( flip++ % 2 === 0 );
});

//this bracket thing & parenthesis MUST STAY AT THE END//
})
