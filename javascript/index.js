var cursor = true;
var speed = 220;

setInterval(() => {
   if(cursor) {
     document.getElementById('cursor').style.opacity = 0;
     cursor = false;
   }else {
     document.getElementById('cursor').style.opacity = 1;
     cursor = true;
   }
}, speed);


function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}