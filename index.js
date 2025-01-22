var drumCount = document.querySelectorAll(".drum").length;

for(var x = 0; x<drumCount; x++){

    document.querySelectorAll(".drum")[x].addEventListener("click", function (){
        alert(x);
    });

}


