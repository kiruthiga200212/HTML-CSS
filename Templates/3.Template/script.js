window.addEventListener("load", function(){
    setTimeout(
        function open(){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});


function go(){
    document.querySelector(".popup").style.display = "none";
    document.querySelector("body").style.background = "white";
    document.getElementById("blur").style.display = "none";
}