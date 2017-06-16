$(document).on('ready', function() {
  // your code goes here
  var $planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.64],
    ['Mars', 0.3895],
    ['The Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9],
    ['carolina', 22]
  ];
 // alert('Is this working?');
//populate the select box with the name of each planet
$.each($planets, function(i, planetWeight) {
  var $planet = planetWeight[0];
  var $weight = planetWeight[1];
  var $option = $("<option></option>");
  $option.val($weight);
  $option.text($planet);
  $option.attr('name', $planet);
   $('select').append($option);
    });
$('button').on('click', calculateWeight);
function calculateWeight(ev) {
  
  var $weightInput = $('input').val();
  var $planetInput = $('select[name=selectPlanet]').val();
  var $planetName = $('#planetOptions').find(':selected').text();
  $weightCal = $weightInput * $planetInput;
  console.log($weightInput);

  if ($weightInput == 0) {
    alert('Please Enter Your Weight!');
  } else {
  $('#astroWeight').text('You would weigh: ' + $weightCal + 'lbs on ' + $planetName);
  }
}
});