clock();

setInterval("clock()",1000);

function clock() {
  var currentTime = new Date();
  var hourDeg = (currentTime.getHours()*30) + (currentTime.getMinutes()/2);
  var minDeg = (currentTime.getMinutes()*6) + (currentTime.getSeconds()/10);
  var secDeg = currentTime.getSeconds()*6;

  $(".hour").css("transform","rotate("+ hourDeg + "deg)");
  $(".minute").css("transform","rotate("+ minDeg + "deg)");
  $(".second").css("transform","rotate("+ secDeg + "deg)");
}

