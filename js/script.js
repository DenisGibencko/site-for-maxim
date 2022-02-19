"use strict"

let burger = document.querySelector('.header__burger > img');
let menuBody = document.querySelector('.header__body');
let body = document.querySelector('body');
burger.addEventListener("click", function(e){
	menuBody.classList.toggle('_active');
})


function ibg(){

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();