let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnImage = document.getElementById("btnImage");
let logo = document.getElementById("logo");

btn.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        btnText.innerHTML = "Light";
        btnImage.src = "images/sun.png";
        logo.src = 'images/logo-white.png';
    }
    else{
        btnText.innerHTML = "Dark";
        btnImage.src = "images/moon.png";
        logo.src = 'images/logo.png';
    }
}