var drumCount = document.querySelectorAll(".drum").length;

for(var x = 0; x<drumCount; x++){

    document.querySelectorAll(".drum")[x].addEventListener("click", function (){
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
    });

}


