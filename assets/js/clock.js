
clock();

setInterval('clock()', 1000 )


function clock() {
  var currentTime = new Date();

  if(currentTime.getHours() < 10) {
    $("#hour1").text(0)
  } else {
    $("#hour1").text(Math.floor(currentTime.getHours()%100/10));
  }

  $("#hour2").text(currentTime.getHours()%10);


  if(currentTime.getMinutes() < 10) {
    $("#minute1").text(0)
  } else {
    $("#minute1").text(Math.floor(currentTime.getMinutes()%100/10));
  }

  $("#minute2").text(currentTime.getMinutes()%10);

  if(currentTime.getSeconds() < 10) {
    $("#second1").text(0)
  } else {
    $("#second1").text(Math.floor(currentTime.getSeconds()%100/10));
  }

  $("#second2").text(currentTime.getSeconds()%10);
}

