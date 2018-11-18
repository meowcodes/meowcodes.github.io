var theInputs = [];
var result;

init();

function init(){
  $(".input-box").text(0);
  theInputs = [];
}

function saveNum(){
  if($(".input-box").text() != "0"){
    theInputs.push(Number($(".input-box").text()));
    $(".input-box").text(0);
  }
}

function calculate() {
  result = theInputs[0];

  for(var i=1; i<theInputs.length; i += 2){
    switch(theInputs[i]) {
      case "+":
        result = result + theInputs[i+1];
        break;
      case "-":
        result = result - theInputs[i+1];
        break;  
      case "/":
        result = result/theInputs[i+1];
        break;
      case "*":
        result = result*theInputs[i+1];
        break;
      default:
        result = result;
        console.log("end");
        break;
    }
  }
  $(".input-box").text(result.toString());
  theInputs = [];
};

// make buttons work
$(".calc-button").click(function() {
  switch($(this).val()) {
    case "+":
    case "-":
    case "/":
    case "*":
      saveNum();
      if (isNaN(theInputs[theInputs.length - 1]) === false) {
        theInputs.push($(this).val());
      }
      break;
    case "=":
      saveNum();
      calculate();
      break;
    case "C":
      init();
      break;
    case "back":
      var endNum = $(".input-box").text().length - 1;
      $(".input-box").text($(".input-box").text().slice(0,endNum));
      break;
    default:
      if ($(".input-box").text() === "0" || $(".input-box").text() === result.toString()){
        $(".input-box").text($(this).val());
        result = 0;
      } else {
        $(".input-box").text($(".input-box").text() + $(this).val());
      }
  }
});

// make keyboard work
$(document).keypress(function(event) {
  switch(event.key) {
    case "+":
    case "-":
    case "/":
    case "*":
      saveNum();
      if (isNaN(theInputs[theInputs.length - 1]) === false) {
        theInputs.push(event.key);
      }
      break;
    case "Enter":
      saveNum();
      calculate();
      break;
    case "Escape":
      init();
      break;
    case "Backspace":
      var endNum = $(".input-box").text().length - 1;
      $(".input-box").text($(".input-box").text().slice(0,endNum));
      break;
    default:
      if ($(".input-box").text() === "0" || $(".input-box").text() === result.toString()){
        $(".input-box").text(event.key);
        result = 0;
      } else {
        $(".input-box").text($(".input-box").text() + event.key);
      }
  }
})

$("input[type='text'").keypress(function(event) {
  if (event.which === 13){
    var inputText = $(this).val();
    $(this).val("");
    $("ul").append('<li><span class="delete"><i class="fas fa-trash"></i></span>' + inputText + "</li>");
  }
});