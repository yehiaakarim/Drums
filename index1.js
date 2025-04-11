var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}

/*
var soundMap = {
  "w": "sounds/tom-1.mp3",
  "a": "sounds/tom-2.mp3",
  "s": "sounds/tom-3.mp3",
  "d": "sounds/tom-4.mp3",
  "j": "sounds/snare.mp3",
  "k": "sounds/crash.mp3",
  "l": "sounds/kick-bass.mp3"
};

function makeSound(key) {
  var soundFile = soundMap[key];
  if (soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
  } else {
    console.log("Invalid key: " + key);
  }
}
*/ 

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  if (!activeButton) { return;
  } else {
      activeButton.classList.add('press');
      setTimeout(function() {
          activeButton.classList.remove('press');
      }, 1000)};
}
