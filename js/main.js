// JavaScript Doc
(function(){
"use strict";
console.log("js loaded");
var headerNav= document.querySelector("#topNav"),
burger = document.querySelector("#burger"), 
thumb = document.querySelectorAll(".thumb"),
feat = document.querySelector("#featImg"), 
setImg, httpRequest;

function setUp(){
	var splash = document.querySelector("#splash");
	//console.log(splash);
	if (splash!=null){
		splash.style.height= (window.innerHeight)+"px";
	}
}
function showMenu(){
	if(headerNav.style.display=="block"){
		headerNav.style.display="none";
	}else{
		headerNav.style.display="block";
	}
}

/*
function request(){
	httpRequest = new XMLHttpRequest();
		if(!httpRequest){
			console.log('sorry, please update browser');
			return false;
		}
		httpRequest.onreadystatechange = changeImg;
		httpRequest.open('GET', 'admin/galset.php' + '?image=' + this.id);
		httpRequest.send();
		console.log("sent");
	}
function changeImg(){
	if(httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200){
		console.log(httpRequest);
		setImg = JSON.parse(httpRequest.responseText);
		console.log(setImg.image);
		//feat.src=setImg;
		imgDesc.innerHTML="somthing else";
	}
}
*/
function change(e){
	feat.src="images/image"+e.target.id+".jpg";
	imgDesc.innerHTML=e.target.alt;
}

window.onload = setUp();
burger.addEventListener("click",showMenu,false);
for (var i = 0; i < thumb.length; i++) {
	thumb[i].addEventListener("click",change,false);
}



})();