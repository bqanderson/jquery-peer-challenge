$(function() {
var numOfButtons = 9;
var counter = 1;
var firstButton = 0;
var secondButton = 0;
var answer = 0;
for (var i = 0; i < 10; i++) {
  var $newButton = $('<button class="numButton" value="' + i + '">' + i + '</button>');
  $('.buttonBar').append($newButton);
};
$('.buttonBar').on('click', 'button', function() {
        if(counter === 1) {
        firstButton = parseInt($(this).text());
        counter = 2;
        console.log(firstButton);
      } else {
        secondButton = parseInt($(this).text());
        answer = firstButton + secondButton;
        counter = 1;
        console.log(secondButton);
        console.log(answer);
        $('.answer').empty();
        $('.answer').append('<p>' + firstButton + ' + ' + secondButton + ' = ' + answer + '</p>');
        }
      });
});
