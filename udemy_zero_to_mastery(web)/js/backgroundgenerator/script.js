var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	console.log(color1.value)

	css.textContent = body.style.background + ";";
}

function randomColor() {
	console.log("push")
	// toString(16) --> 16진수 변환
	color1.value = "#" + Math.round(Math.random() * 0xffffff).toString(16);
	console.log(color1.value)
	color2.value = "#" + Math.round(Math.random() * 0xffffff).toString(16);
	console.log(color2.value)
	setGradient()
}

window.addEventListener("load", setGradient)

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColor);
