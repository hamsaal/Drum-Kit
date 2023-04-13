var i;
var a = ["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"];
function makesound(keypressed) {
  switch (keypressed) {
    case "w":
      var crash = new Audio(a[0]);
      crash.play();
      break;

    case "a":
      var kick = new Audio(a[1]);
      kick.play();
      break;

    case "s":
      var snare = new Audio(a[2]);
      snare.play();
      break;

    case "d":
      var tom1 = new Audio(a[3]);
      tom1.play();
      break;

    case "h":
      var tom2 = new Audio(a[4]);
      tom2.play();
      break;

    case "j":
      var tom3 = new Audio(a[5]);
      tom3.play();
      break;

    case "k":
      var tom4 = new Audio(a[6]);
      tom4.play();
      break;

    default:
      alert("Can't play this sound");
  }
}
function animateButtom(clickedbutton){
  var activebutton = document.querySelector("."+clickedbutton);
  activebutton.classList.add("pressed");
  setTimeout(function()
   {activebutton.classList.remove("pressed")},
   100);
}


for (i = 0; i < document.querySelectorAll(".drums").length; i++){
  document.querySelectorAll(".drums")[i].addEventListener("click", function() {
    var expression = this.innerHTML;
    makesound(expression);
    animateButtom(expression);
  })};
  document.addEventListener("keypress", function() {
    makesound(event.key);
    animateButtom(event.key);
  });
