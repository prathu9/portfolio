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
	const backToTopBtn = document.querySelector(".back-to-top-btn");
	let x=window.matchMedia("(max-width:784px)");
	function changeImage(x){
		if(x.matches){
			images[0].src = `../images/music-player-mobile.jpg`;
			images[1].src = `../images/animated-template-mobile.jpg`;
			images[2].src = `../images/tic-tac-toe-mobile.jpg`;
			// images[3].src = `../images/apparel-store-mobile.jpg`;
			images[3].src = `../images/joke-teller-mobile.jpg`;
			images[4].src = `../images/quote-generator-mobile.jpg`;
		}else{
			images[0].src = `../images/music-player-desktop.jpg`;
			images[1].src = `../images/animated-template-desktop.jpg`;
			images[2].src = `../images/tic-tac-toe-desktop.jpg`;
			// images[3].src = `../images/apparel-store-desktop.jpg`;
			images[3].src = `../images/joke-teller-desktop.jpg`;
			images[4].src = `../images/quote-generator-desktop.jpg`;
		}	
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	  document.body.scrollTop = 0; // For Safari
	  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
	changeImage(x);
	backToTopBtn.addEventListener("click",topFunction);
})();