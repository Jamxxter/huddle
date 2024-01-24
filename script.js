let popup = document.getElementById("popup");
var blur = document.getElementById('blur');

function openPopup(){
    popup.classList.add("open-popup");
    blur.classList.add('active');
    
}
function closePopup(){
    popup.classList.remove("open-popup");
    blur.classList.remove('active');
}

function tryItBtn(){
    alert("Hello World");
}