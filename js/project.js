(function(){
	const toggleSwitch = document.querySelector("input[type='checkbox']");
	const changeLogo = _modifyLogo; //Assiging logo change function to changeLogo from logo library
	changeLogo(); //changing logo when page is refreshed

	//Event Listener
	//change logo when light and dark mode switch is toggled
	toggleSwitch.addEventListener("change", ()=>{changeLogo()}); 
})();

(function(){
	const images = document.querySelectorAll(".project-image img");
	let x=window.matchMedia("(max-width:784px)");
	function changeImage(x){
		if(x.matches){
			images[0].src = `../images/music-player-mobile.jpg`;
			images[1].src = `../images/animated-template-mobile.jpg`;
			images[2].src = `../images/tic-tac-toe-mobile.jpg`;
			images[3].src = `../images/quote-generator-mobile.jpg`;
			images[4].src = `../images/joke-teller-mobile.jpg`;
		}else{
			images[0].src = `../images/music-player-desktop.jpg`;
			images[1].src = `../images/animated-template-desktop.jpg`;
			images[2].src = `../images/tic-tac-toe-desktop.jpg`;
			images[3].src = `../images/quote-generator-desktop.jpg`;
			images[4].src = `../images/joke-teller-desktop.jpg`;
		}	
	}
	console.log("hello");
	x.addListener(changeImage);
})();