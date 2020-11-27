(function(){
	const toggleSwitch = document.querySelector("input[type='checkbox']");
	const changeLogo = _modifyLogo; //Assiging logo change function to changeLogo from logo library
	changeLogo(); //changing logo when page is refreshed

	//Event Listener
	//change logo when light and dark mode switch is toggled
	toggleSwitch.addEventListener("change", ()=>{changeLogo()}); 
})();