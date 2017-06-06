$(document).ready(function() {
  $("#submit_button").click(function(event) {

    var countUpBy = [];
    //var userInput = $("input#" + item).val();
    for (var currentNumber = "#number2"; currentNumber <= "#number1"; currentNumber += "#number2")
      countUpBy.push(currentNumber);
    $("#output").text(countUpBy);
    //alert(countUpBy);
  });
});
