/*
$(document).ready(function(){
	let btnMenu = $('#btn-menu');
	btnMenu.on('click',function(e){
			let eventTarget = e.target;
			if (eventTarget.className == "btn-open") {
					eventTarget.className == "btn-close";
			}else if (eventTarget.className == "btn-close") {
				eventTarget.className == "btn-open";
			}
	})
})
*/

var btnMenu = document.getElementById('btn-menu');
btnMenu.addEventListener('click',toggleMenu);
function toggleMenu(e){
var divOverlay = document.getElementsByClassName('overlay')[0];
var speed = 10;

var eventTarget = e.target;
if (eventTarget.className == "btn-open") {
				fadeIn(divOverlay,speed);
				eventTarget.className = "btn-close";
		}else if (eventTarget.className == "btn-close") {
			fadeOut(divOverlay,speed);
			eventTarget.className = "btn-open";
		}
}

function fadeIn(elem,speed){
	var inInterVal = setInterval(function(){
		elem.style.opacity = Number(elem.style.opacity) + 0.02;
		if (elem.style.opacity >= 1) {
			elem.style.opacity = 1;
			clearInterval(inInterVal);
		}
	},speed) //10ms = 0.1s
}

function fadeOut(elem,speed){
	var outInterVal = setInterval(function(){
		elem.style.opacity = Number(elem.style.opacity) - 0.02;
		if (elem.style.opacity <= 0) {
			elem.style.opacity = 0;
			clearInterval(outInterVal);
		}
	},speed)
}





















