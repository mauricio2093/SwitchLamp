var typed = new Typed(".auto-input",{
    strings:    ["Tu Vida","Tu Mente","Tu Corazón"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
var light = document.getElementById("light")
var text = document.getElementById("text")
var btn = document.getElementById("btn")
var body = document.getElementById("body")
function toggleBtn(){ 
    light.classList.toggle("on");
    text.classList.toggle("in");
}

function toggle_Btn(){
    body.classList.toggle("active")
}
var input = document.createElement("input");
input.type = "text";
input.className = "css-class-name"; // set the CSS class
container.appendChild(input);