var answerBox = document.getElementById("answer-rgb");
var resetBtn = document.getElementById("reset-btn");
var endMsg = document.getElementById("end-msg");
var hardBtn = document.getElementById("hard-btn");
var midBtn = document.getElementById("mid-btn");
var easyBtn = document.getElementById("easy-btn");
var colors = document.querySelectorAll(".color");
var topBox = document.querySelector(".top-box");
var pickedColor;
var colorNum = 6;

init();

for(var i=0; i<colors.length; i++){
  colors[i].addEventListener("click", function(){
    colorClick(this);
  });
}

easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  midBtn.classList.remove("selected");
  colorNum = 3;
  init();
})

midBtn.addEventListener("click", function() {
  midBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  easyBtn.classList.remove("selected");
  colorNum = 6;
  init();
})

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  midBtn.classList.remove("selected");
  easyBtn.classList.remove("selected");
  colorNum = 9;
  init();
})

resetBtn.addEventListener("click", function() {
  init()
});

function init() {
  assignColors();
  pickAnswer();
  topBox.style.backgroundColor = "black";
  resetBtn.textContent = "New Colors";
  endMsg.textContent = "Hello";
  for(var i=0; i<9; i++){
    if(i >= colorNum){
      colors[i].style.display = "none";
    }else {
      colors[i].style.display = "block"
    }
  }
}

function colorClick(theColor){
  if(theColor.style.backgroundColor === pickedColor){
    topBox.style.backgroundColor = pickedColor;
    endMsg.textContent = "Correct!";
    resetBtn.textContent = "Play Again";
    for(var i=0; i<colorNum; i++){
      colors[i].style.backgroundColor = pickedColor;
    }
  } else {
    theColor.style.backgroundColor = "black";
    endMsg.textContent = "Try again";
  }
}

function randomColor() {
  var rgb = [];
  for(var i=0; i<3; i++){
    rgb.push(Math.floor(Math.random()*255));
  }
  return "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
}

function assignColors() {
  for(var i=0; i<colorNum; i++){
    colors[i].style.backgroundColor = randomColor();
  }
}

function pickAnswer() {
  pickedColor = colors[Math.floor(Math.random()*colorNum)].style.backgroundColor;
  answerBox.innerHTML = pickedColor;
}

