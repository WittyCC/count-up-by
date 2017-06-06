$(document).ready(function() {
  $("form#countUpBy").submit(function(event) {
    event.preventDefault();
    var countArray = [];
    var userInput = parseInt($("input#number1").val());
    console.log(userInput);
    var countBy = parseInt($("input#number2").val());
    console.log(countBy);
    for (var i = countBy; i <= userInput; i+=countBy) {
      console.log(i);
      countArray.push(i);
    }
    $("#output").text(countArray);
  });
});
