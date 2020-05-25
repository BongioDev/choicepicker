
var input = document.querySelector('input');
var enter = document.querySelector('#enter');
var pick = document.querySelector('#pick')
var broadcast = document.querySelector('#broadcast');
var choice = document.querySelector('#choice');
var error = document.querySelector('#error');
var reset = document.querySelector('#reset');
var choices = [];


// function
function broadCast (){
  if (input.value == null || input.value == "") {
      Swal.fire('Enter your choices on the left, then press the button on the right.')
  } else {
   choices.push(input.value);
   input.value = null;
   broadcast.innerHTML = choices.join("<br>");
  } 
};

// enter
onkeyup = function(event) {
  if (event.keyCode === 13){
    broadCast();
  };
};

// click
enter.addEventListener("click", function (event){
  if (event = true) {
      broadCast();
  };
});

//   picker

  document.getElementById("sk-chase").style.visibility = "hidden"; 

  pick.addEventListener("click", function (){
    if (choices && choices.constructor === Array && choices.length === 0) {
      Swal.fire('Enter your choices on the left, then press the button on the right.')
    } else {
    var c = choices[Math.floor(Math.random() * choices.length)];
    choice.innerHTML = c;
    // loading...
    setTimeout(function(){ document.getElementById("sk-chase").style.visibility = "visible";},);
    setTimeout(function(){ document.getElementById("sk-chase").style.visibility = "hidden";}, 3000);
    setTimeout(function(){ choice.style.visibility = "hidden";},);
    setTimeout(function(){ choice.style.visibility = "visible";}, 3000);
    }
  });






  