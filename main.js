// Created by Piyush


var a = new Audio("bday.mp3");

window.addEventListener('click',() => {
a.play();
});

function start(){
    var clab= document.querySelector("#clab")
   clab.style.display = "block";//this is your all tag in clab
   document.getElementById("loader").style.background="trasparent";
   document.getElementById("loader").style.display="none";
   document.getElementById("loader").style.transition ="2s";
   document.getElementById("loader").innerHTML =" ";
}

setInterval(start, 3000);
